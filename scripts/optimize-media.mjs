import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/media");
const THRESHOLD = 400 * 1024;
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 82;
const HERO_QUALITY = 82;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function rel(p) {
  return path.relative(process.cwd(), p).replaceAll("\\", "/");
}

async function optimizeFile(file, { force = false, quality = JPEG_QUALITY } = {}) {
  const before = fs.statSync(file).size;
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    return { file: rel(file), before, after: before, changed: false, skipped: "not jpeg/png" };
  }
  if (!force && before < THRESHOLD) {
    return { file: rel(file), before, after: before, changed: false, skipped: "under threshold" };
  }

  const img = sharp(file, { failOn: "none" });
  const meta = await img.metadata();
  let pipeline = sharp(file, { failOn: "none" }).rotate();

  const width = meta.width ?? 0;
  if (width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const tmp = `${file}.opt.tmp`;
  if (ext === ".png") {
    await pipeline.png({ compressionLevel: 9, palette: false }).toFile(tmp);
  } else {
    await pipeline
      .jpeg({
        quality,
        mozjpeg: true,
        chromaSubsampling: "4:2:0",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(tmp);
  }

  const after = fs.statSync(tmp).size;
  if (after >= before) {
    fs.unlinkSync(tmp);
    return {
      file: rel(file),
      before,
      after: before,
      changed: false,
      skipped: "output larger",
      width,
      height: meta.height,
    };
  }

  fs.renameSync(tmp, file);
  return {
    file: rel(file),
    before,
    after,
    changed: true,
    width: width > MAX_WIDTH ? MAX_WIDTH : width,
    height: meta.height,
    origWidth: width,
  };
}

function kb(n) {
  return `${(n / 1024).toFixed(1)} KB`;
}

const all = walk(ROOT);
const results = [];

// Prioritize hero LCP even if under threshold (try improve; keep only if smaller)
const hero = path.join(ROOT, "hero.jpg");
if (fs.existsSync(hero)) {
  results.push(await optimizeFile(hero, { force: true, quality: HERO_QUALITY }));
}

for (const file of all) {
  if (path.resolve(file) === path.resolve(hero)) continue;
  results.push(await optimizeFile(file));
}

const changed = results.filter((r) => r.changed);
const unchangedLarge = results.filter(
  (r) => !r.changed && r.before >= THRESHOLD && !r.skipped?.includes("under")
);

console.log("\n=== CHANGED ===");
for (const r of changed) {
  const saved = r.before - r.after;
  const pct = ((saved / r.before) * 100).toFixed(1);
  console.log(
    `${r.file}: ${kb(r.before)} → ${kb(r.after)} (−${kb(saved)}, −${pct}%)` +
      (r.origWidth && r.origWidth > MAX_WIDTH ? ` [resized ${r.origWidth}→${r.width}w]` : "")
  );
}

console.log("\n=== OVER THRESHOLD, UNCHANGED ===");
for (const r of unchangedLarge) {
  console.log(`${r.file}: ${kb(r.before)} (${r.skipped || "kept"})`);
}

console.log("\n=== ALL FILES (final) ===");
const final = walk(ROOT)
  .map((f) => ({ file: rel(f), size: fs.statSync(f).size }))
  .sort((a, b) => b.size - a.size);
for (const f of final) {
  console.log(`${kb(f.size).padStart(10)}  ${f.file}`);
}

console.log(
  `\nSummary: ${changed.length} optimized, total saved ${kb(
    changed.reduce((s, r) => s + (r.before - r.after), 0)
  )}`
);
