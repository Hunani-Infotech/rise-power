import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = __dirname;
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

function decode(t) {
  return String(t || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extract(html) {
  let chunk = html;
  const main = html.match(/<main[\s\S]*?<\/main>/i);
  if (main) chunk = main[0];
  else {
    const body = html.match(/<body[\s\S]*?<\/body>/i);
    if (body) chunk = body[0];
  }
  chunk = chunk.replace(/<header[\s\S]*?<\/header>/gi, " ");
  chunk = chunk.replace(/<footer[\s\S]*?<\/footer>/gi, " ");
  chunk = chunk.replace(/<nav[\s\S]*?<\/nav>/gi, " ");

  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "";
  const h1s = [...chunk.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    decode(m[1]),
  );
  const h2s = [...chunk.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
    decode(m[1]),
  );
  const h3s = [...chunk.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) =>
    decode(m[1]),
  );
  const paras = [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => decode(m[1]))
    .filter((t) => t.length > 15);
  const lis = [...chunk.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((m) => decode(m[1]))
    .filter((t) => t.length > 2);
  const buttons = [...chunk.matchAll(/<(?:a|button)[^>]*>([\s\S]*?)<\/(?:a|button)>/gi)]
    .map((m) => decode(m[1]))
    .filter((t) => t.length > 2 && t.length < 80);

  return {
    title: decode(title),
    h1: h1s,
    h2: h2s,
    h3: h3s,
    paragraphs: paras,
    listItems: lis,
    ctas: [...new Set(buttons)].slice(0, 40),
    text: decode(chunk).slice(0, 15000),
  };
}

const index = [];
for (const f of files) {
  const html = fs.readFileSync(path.join(dir, f), "utf8");
  const data = extract(html);
  const base = f.replace(/\.html$/, "");
  fs.writeFileSync(path.join(dir, `${base}.json`), JSON.stringify(data, null, 2));
  index.push({
    file: base,
    title: data.title,
    h1: data.h1[0] || "",
    h2Count: data.h2.length,
    paraCount: data.paragraphs.length,
  });
}

const md = [
  "# Live pages inventory",
  "",
  `Fetched: ${new Date().toISOString()}`,
  "",
  ...index.map(
    (i) =>
      `- **${i.file}**: ${i.title} — H1: ${i.h1} (${i.h2Count} h2, ${i.paraCount} paras)`,
  ),
  "",
].join("\n");
fs.writeFileSync(path.join(dir, "index.md"), md);
console.log(JSON.stringify(index, null, 2));
