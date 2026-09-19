import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticleView } from "@/components/insights/InsightArticleView";
import {
  insights,
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return pageMetadata({
      title: "Insight",
      description: "Rise Power news and field analysis.",
      path: "/insights",
    });
  }

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  return (
    <InsightArticleView
      article={article}
      related={getRelatedInsights(article)}
    />
  );
}
