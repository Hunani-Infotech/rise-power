import { insights } from "./articles";
import type { InsightArticle, InsightBlock, InsightListItem } from "./types";

export type { InsightArticle, InsightBlock, InsightListItem };
export { insights };

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug);
}

export function getRelatedInsights(
  article: InsightArticle,
  limit = 2,
): InsightArticle[] {
  const related = article.relatedSlugs
    .map((slug) => getInsightBySlug(slug))
    .filter((item): item is InsightArticle => Boolean(item));

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const fallback = insights.filter(
    (item) =>
      item.slug !== article.slug &&
      !related.some((r) => r.slug === item.slug),
  );

  return [...related, ...fallback].slice(0, limit);
}

/** Flatten block body to plain text for legacy consumers that expect a string. */
export function getInsightPlainBody(article: InsightArticle): string {
  return article.body
    .map((block) => blockToPlain(block))
    .filter(Boolean)
    .join("\n\n");
}

function blockToPlain(block: InsightBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return block.text;
    case "pullQuote":
      return block.attribution
        ? `"${block.text}" — ${block.attribution}`
        : `"${block.text}"`;
    case "takeaways":
      return block.items.map((item) => `• ${item}`).join("\n");
    case "figure":
      return block.caption ?? block.alt;
    default:
      return "";
  }
}

/** Lightweight list projection for index / featured cards. */
export function toInsightListItem(article: InsightArticle): InsightListItem {
  const {
    slug,
    title,
    date,
    displayDate,
    category,
    excerpt,
    readTime,
    hero,
    accentPhrase,
  } = article;
  return {
    slug,
    title,
    date,
    displayDate,
    category,
    excerpt,
    readTime,
    hero,
    accentPhrase,
  };
}
