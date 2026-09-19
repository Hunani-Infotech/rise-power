import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { insights } from "@/lib/content";
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
  const article = insights.find((item) => item.slug === slug);

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
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="hero-animate-copy">
          <p className="text-xs tracking-[0.18em] text-accent uppercase">
            {article.displayDate}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted">{article.excerpt}</p>
        </div>
        <Reveal variant="fade" delay={80}>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
            <p>{article.body}</p>
          </div>
          <div className="mt-14">
            <Button href="/contact">Request a Briefing</Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
