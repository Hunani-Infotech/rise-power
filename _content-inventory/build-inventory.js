const fs = require("fs");
const path = require("path");

const invRaw = fs
  .readFileSync(path.join(__dirname, "live-insights-inventory.json"), "utf8")
  .replace(/^\uFEFF/, "");
const inv = JSON.parse(invRaw);

function decode(t) {
  return String(t || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const faqHtml = fs.readFileSync(
  path.join(process.env.TEMP, "rp-faq.html"),
  "utf8",
);
const faqChunk = faqHtml.slice(
  faqHtml.indexOf("<h1"),
  faqHtml.indexOf("<footer"),
);
const qa = [];
let pending = null;
for (const m of faqChunk.matchAll(/<(summary|p)[^>]*>(.*?)<\/\1>/gs)) {
  const tag = m[1];
  let text = decode(m[2]).replace(/\+$/, "");
  if (tag === "summary") pending = text;
  else if (tag === "p" && pending) {
    qa.push({ q: pending, a: text });
    pending = null;
  }
}

let md = "";
md += "# Rise Power Live Site Content Inventory\n\n";
md += `Fetched: ${inv.fetchedAt}\n`;
md += `Site: ${inv.site} (canonical www: ${inv.wwwCanonical})\n`;
md += `Platform: ${inv.platform}\n\n`;
md += "## Discovery summary\n";
md += "- robots.txt Allow: /; Sitemap: https://risepower.com/sitemap.xml\n";
md += "- Listing pages: /insights, /insights/articles\n";
md += "- Resource pages: /resources/faq, /resources/datasheets\n";
md += "- No /blog, /news, /resources (index), or /articles (404)\n";
md += "- Pagination: none (all 28 articles on single listing page)\n";
md += `- Article count: ${inv.articleCount}\n`;
md += `- Failed fetches: ${(inv.failed || []).length}\n\n`;
md += "## All article URLs\n\n";
inv.articles.forEach((a, i) => {
  md += `${i + 1}. ${a.url} — ${a.title} (${a.date})\n`;
});

md += "\n## Related downloadable media (site-wide)\n";
md += "- https://risepower.com/rise-power-deck.pdf\n";
md += "- https://risepower.com/rise-power-one-pager.pdf\n";
md += "- https://risepower.com/media/logos/wordmark-pill.svg\n";
md +=
  "- Articles: no hero/featured images (text-only; no content og:image; logo only in HTML)\n\n";

md += "## Resources: FAQ (/resources/faq)\n\n";
md += "Title: Procurement FAQ\n";
md +=
  "Excerpt: Common questions from procurement, programs, and integration teams evaluating Rise Power portable power systems.\n\n";
for (const item of qa) {
  md += `### ${item.q}\n${item.a}\n\n`;
}

md += "## Resources: Datasheets (/resources/datasheets)\n\n";
md +=
  "Product datasheet cards (beta) for: Rise Sentinel, Rise Falcon, Rise Titan, Hydrogen Cartridge Kit.\n";
md +=
  "Full PDFs available on briefing request. Public PDFs: /rise-power-deck.pdf, /rise-power-one-pager.pdf.\n\n";
md += "---\n\n# Full article bodies\n\n";

for (const a of inv.articles) {
  md += `## ${a.title}\n\n`;
  md += `- URL: ${a.url}\n`;
  md += `- Slug: ${a.slug}\n`;
  md += `- Date: ${a.date}\n`;
  md += `- Author: ${a.author || "n/a"}\n`;
  md += `- Excerpt: ${a.excerpt}\n`;
  md += `- Category/tags: ${a.category || "none detected"}\n`;
  md += `- Hero image: ${a.heroImage || "none"}\n`;
  if (a.relatedUrls && a.relatedUrls.length) {
    md += `- Related: ${a.relatedUrls.join(", ")}\n`;
  }
  md += "\n";
  for (const sec of a.sections) {
    if (sec.heading && sec.heading !== "(intro)") {
      const lvl = Number(sec.level) || 2;
      const prefix = lvl <= 2 ? "###" : lvl === 3 ? "####" : "#####";
      md += `${prefix} ${sec.heading}\n\n`;
    }
    for (const p of sec.paragraphs || []) md += `${p}\n\n`;
    for (const list of sec.lists || []) {
      for (const li of list) md += `- ${li}\n`;
      md += "\n";
    }
  }
  md += "---\n\n";
}

fs.writeFileSync(path.join(__dirname, "live-insights-inventory.md"), md);
fs.writeFileSync(
  path.join(__dirname, "live-faq.json"),
  JSON.stringify(
    {
      url: "https://risepower.com/resources/faq",
      title: "Procurement FAQ",
      items: qa,
    },
    null,
    2,
  ),
);

console.log("MD bytes", md.length);
console.log("FAQ count", qa.length);
console.log("Articles", inv.articles.length);
const first = inv.articles[0];
console.log(
  "Newest:",
  first.title,
  first.date,
  "sections",
  first.sections.length,
);
