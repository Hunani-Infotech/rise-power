/**
 * Converts _content-inventory/live-insights-inventory.json
 * into src/lib/insights/articles.ts matching InsightArticle shape.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const inventoryPath = path.join(
  root,
  "_content-inventory",
  "live-insights-inventory.json",
);
const outPath = path.join(root, "src", "lib", "insights", "articles.ts");

const inventory = JSON.parse(
  fs.readFileSync(inventoryPath, "utf8").replace(/^\uFEFF/, ""),
);

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function displayDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function decode(t) {
  return String(t || "")
    .replace(/Â°/g, "°")
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/Ã—/g, "×")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function escapeTs(str) {
  return String(str ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function wordCount(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function readTimeFromWords(words) {
  const mins = Math.max(3, Math.round(words / 160) || 3);
  return `${mins} min read`;
}

/** Pick a category from slug/title keywords */
function categoryFor(slug, title) {
  const hay = `${slug} ${title}`.toLowerCase();
  if (
    /military|defense|defence|tactical|fob|forward-operating|drone|isr/.test(
      hay,
    )
  ) {
    return "Defense";
  }
  if (
    /disaster|hospital|emergency|infrastructure|data-center|film|off-grid/.test(
      hay,
    )
  ) {
    return "Applications";
  }
  if (
    /vs-|comparison|diesel|lithium|battery|solar|noise|emissions|regulations/.test(
      hay,
    )
  ) {
    return "Comparison";
  }
  if (
    /what-is|pem|green-hydrogen|storage|cartridge|safety|maintenance|lifespan|future/.test(
      hay,
    )
  ) {
    return "Technology";
  }
  return "Resources";
}

/** Hero image assignment by topic */
function heroFor(slug, title) {
  const hay = `${slug} ${title}`.toLowerCase();
  if (/drone|falcon|flight|endurance|isr/.test(hay)) {
    return {
      src: "/media/products/product-falcon.png",
      alt: "Rise Falcon hydrogen fuel cell range extender",
    };
  }
  if (/cartridge|storage|logistics|shelf/.test(hay)) {
    return {
      src: "/media/products/hydrogen-cartridge-kit.png",
      alt: "Rise Power hydrogen cartridge kit",
    };
  }
  if (/diesel|generator|noise|silent|comparison|emissions/.test(hay)) {
    return {
      src: "/media/why-hydrogen/comparison.png",
      alt: "Hydrogen power compared with conventional generators",
    };
  }
  if (/military|defense|defence|tactical|fob|forward/.test(hay)) {
    return {
      src: "/media/markets/defense-military.png",
      alt: "Defense and military portable power operations",
    };
  }
  if (/disaster|emergency|hospital|response/.test(hay)) {
    return {
      src: "/media/use-cases/disaster-response.jpg",
      alt: "Portable power for disaster and emergency response",
    };
  }
  if (/data-center|infrastructure|backup|off-grid|film/.test(hay)) {
    return {
      src: "/media/use-cases/uc-grid1.png",
      alt: "Reliable backup and off-grid power systems",
    };
  }
  if (/safety|compliance|myth/.test(hay)) {
    return {
      src: "/media/capabilities/safety-compliance.jpg",
      alt: "Hydrogen safety and compliance engineering",
    };
  }
  if (/pem|fuel-cell|hydrogen|green|what-is|lifespan|maintenance|future/.test(
    hay,
  )) {
    return {
      src: "/media/ecosystem/fuel-cell.png",
      alt: "Hydrogen fuel cell technology",
    };
  }
  if (/sentinel|portable|zero-emission/.test(hay)) {
    return {
      src: "/media/products/product-sentinal.png",
      alt: "Rise Sentinel portable hydrogen power system",
    };
  }
  return {
    src: "/media/capabilities/field-deployment.jpg",
    alt: "Rise Power field deployment",
  };
}

/** Optional accent phrase — first distinctive multi-word cue from title */
function accentPhraseFor(title) {
  const candidates = [
    "Hydrogen Fuel Cell",
    "Fuel Cell",
    "Zero Emission",
    "Silent Generators",
    "Disaster Response",
    "Drone Fuel Cell",
    "Hydrogen Cartridge",
    "Critical Infrastructure",
    "Lithium Batteries",
    "PEM Fuel Cells",
    "Forward Operating Bases",
    "Noise Levels",
    "Safety Myths",
    "Off-Grid Power",
    "Power Logistics",
    "Solar Power",
    "Data Centers",
    "Green Hydrogen",
    "Maintenance Guide",
    "Emergency Power",
    "Fuel Cell Lifespan",
    "Film Production",
    "Drone Endurance",
    "Storage Methods",
    "Emissions Regulations",
    "Tactical Power",
    "Portable Power",
    "Full Comparison",
  ];
  for (const c of candidates) {
    if (title.includes(c)) return c;
  }
  return undefined;
}

function sectionsToBody(article) {
  const body = [];
  const titleNorm = decode(article.title).toLowerCase();

  for (const section of article.sections || []) {
    const heading = decode(section.heading || "");
    const level = section.level || 2;

    // Skip H1 that duplicates the article title
    if (
      level === 1 &&
      heading &&
      heading.toLowerCase() === titleNorm
    ) {
      // still allow paragraphs under it if any
    } else if (heading && level >= 2) {
      body.push({ type: "heading", text: heading });
    } else if (heading && level === 1 && heading.toLowerCase() !== titleNorm) {
      body.push({ type: "heading", text: heading });
    }

    for (const p of section.paragraphs || []) {
      const text = decode(p);
      if (text) body.push({ type: "paragraph", text });
    }

    for (const list of section.lists || []) {
      const items = (Array.isArray(list) ? list : [list])
        .map((item) => decode(item))
        .filter(Boolean);
      if (!items.length) continue;

      // Prefer takeaways for short key-point lists (3–8 items)
      if (items.length >= 3 && items.length <= 8 && items.every((i) => i.length < 220)) {
        body.push({ type: "takeaways", items });
      } else {
        for (const item of items) {
          body.push({ type: "paragraph", text: `• ${item}` });
        }
      }
    }
  }

  // Drop empty leading headings with no following content until first paragraph
  while (body.length && body[0].type === "heading") {
    const next = body[1];
    if (!next || next.type === "heading") body.shift();
    else break;
  }

  return body;
}

function relatedSlugsFor(article, allSlugs) {
  const fromUrls = (article.relatedUrls || [])
    .map((u) => {
      const m = String(u).match(/\/insights\/([^/?#]+)/);
      return m ? m[1] : null;
    })
    .filter((s) => s && s !== article.slug && allSlugs.includes(s));

  if (fromUrls.length >= 2) return fromUrls.slice(0, 2);

  // Fallback: nearest neighbors by date order (inventory is newest-first)
  const idx = allSlugs.indexOf(article.slug);
  const neighbors = [];
  if (idx > 0) neighbors.push(allSlugs[idx - 1]);
  if (idx < allSlugs.length - 1) neighbors.push(allSlugs[idx + 1]);
  if (idx > 1 && neighbors.length < 2) neighbors.push(allSlugs[idx - 2]);
  if (idx < allSlugs.length - 2 && neighbors.length < 2) {
    neighbors.push(allSlugs[idx + 2]);
  }

  return [...new Set([...fromUrls, ...neighbors])]
    .filter((s) => s !== article.slug)
    .slice(0, 2);
}

function serializeBlock(block, indent) {
  const pad = " ".repeat(indent);
  switch (block.type) {
    case "paragraph":
      return `${pad}{\n${pad}  type: "paragraph",\n${pad}  text: \`${escapeTs(block.text)}\`,\n${pad}}`;
    case "heading":
      return `${pad}{\n${pad}  type: "heading",\n${pad}  text: \`${escapeTs(block.text)}\`,\n${pad}}`;
    case "pullQuote": {
      const attr = block.attribution
        ? `,\n${pad}  attribution: \`${escapeTs(block.attribution)}\``
        : "";
      return `${pad}{\n${pad}  type: "pullQuote",\n${pad}  text: \`${escapeTs(block.text)}\`${attr},\n${pad}}`;
    }
    case "takeaways": {
      const items = block.items
        .map((i) => `${pad}    \`${escapeTs(i)}\``)
        .join(",\n");
      return `${pad}{\n${pad}  type: "takeaways",\n${pad}  items: [\n${items},\n${pad}  ],\n${pad}}`;
    }
    case "figure": {
      const cap = block.caption
        ? `,\n${pad}  caption: \`${escapeTs(block.caption)}\``
        : "";
      return `${pad}{\n${pad}  type: "figure",\n${pad}  src: \`${escapeTs(block.src)}\`,\n${pad}  alt: \`${escapeTs(block.alt)}\`${cap},\n${pad}}`;
    }
    default:
      return `${pad}/* unknown block */`;
  }
}

function serializeArticle(article) {
  const accent = article.accentPhrase
    ? `\n    accentPhrase: \`${escapeTs(article.accentPhrase)}\`,`
    : "";
  const body = article.body
    .map((b) => serializeBlock(b, 6))
    .join(",\n");
  const related = article.relatedSlugs
    .map((s) => `      \`${escapeTs(s)}\``)
    .join(",\n");

  return `  {
    slug: \`${escapeTs(article.slug)}\`,
    title: \`${escapeTs(article.title)}\`,
    date: \`${escapeTs(article.date)}\`,
    displayDate: \`${escapeTs(article.displayDate)}\`,
    category: \`${escapeTs(article.category)}\`,
    excerpt: \`${escapeTs(article.excerpt)}\`,
    readTime: \`${escapeTs(article.readTime)}\`,${accent}
    hero: {
      src: \`${escapeTs(article.hero.src)}\`,
      alt: \`${escapeTs(article.hero.alt)}\`,
    },
    relatedSlugs: [
${related},
    ],
    body: [
${body},
    ],
  }`;
}

const allSlugs = inventory.articles.map((a) => a.slug);

const articles = inventory.articles.map((raw) => {
  const body = sectionsToBody(raw);
  const words = body.reduce((sum, b) => {
    if (b.type === "paragraph" || b.type === "heading") {
      return sum + wordCount(b.text);
    }
    if (b.type === "takeaways") {
      return sum + b.items.reduce((s, i) => s + wordCount(i), 0);
    }
    return sum;
  }, 0);

  return {
    slug: raw.slug,
    title: decode(raw.title),
    date: raw.date,
    displayDate: displayDate(raw.date),
    category: categoryFor(raw.slug, raw.title),
    excerpt: decode(raw.excerpt || ""),
    readTime: readTimeFromWords(words),
    accentPhrase: accentPhraseFor(raw.title),
    hero: heroFor(raw.slug, raw.title),
    relatedSlugs: relatedSlugsFor(raw, allSlugs),
    body,
  };
});

const file = `import type { InsightArticle } from "./types";

/**
 * Live Insights content sourced from risepower.com (28 articles).
 * Regenerated via: node scripts/convert-live-insights.mjs
 */
export const insights: InsightArticle[] = [
${articles.map(serializeArticle).join(",\n")}
];
`;

fs.writeFileSync(outPath, file, "utf8");
console.log(`Wrote ${articles.length} articles → ${path.relative(root, outPath)}`);
console.log(
  "Slugs:",
  articles.map((a) => a.slug).join("\n  "),
);
