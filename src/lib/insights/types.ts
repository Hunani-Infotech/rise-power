export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "pullQuote"; text: string; attribution?: string }
  | { type: "takeaways"; items: string[] }
  | { type: "figure"; src: string; alt: string; caption?: string };

export type InsightArticle = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  displayDate: string;
  category: string;
  excerpt: string;
  readTime: string; // e.g. "6 min read"
  hero: { src: string; alt: string };
  /** Optional word/phrase in title to render in sage accent */
  accentPhrase?: string;
  body: InsightBlock[];
  relatedSlugs: string[];
};

/** Lightweight shape for index / featured lists */
export type InsightListItem = Pick<
  InsightArticle,
  | "slug"
  | "title"
  | "date"
  | "displayDate"
  | "category"
  | "excerpt"
  | "readTime"
  | "hero"
  | "accentPhrase"
>;
