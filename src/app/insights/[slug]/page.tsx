import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { insights } from "@/lib/content";

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
  const article = insights.find((item) => item.slug === slug);
  return { title: article?.title ?? "Insight" };
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-xs tracking-[0.18em] text-accent uppercase">
          {article.displayDate}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted">{article.excerpt}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>{article.body}</p>
        </div>
        <div className="mt-14">
          <Button href="/contact">Request a Briefing</Button>
        </div>
      </div>
    </article>
  );
}
