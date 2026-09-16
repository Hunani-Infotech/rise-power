import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Insights",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Field analysis and company updates."
        description="Technical notes, runtime data, and development milestones from the Rise Power team."
      />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <RevealStagger
          className="divide-y divide-border border-y border-border"
          step={80}
          variant="up"
        >
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="grid gap-4 py-10 transition-colors hover:bg-surface/60 md:grid-cols-[180px_1fr]"
            >
              <p className="text-xs tracking-[0.16em] text-muted uppercase">
                {article.displayDate}
              </p>
              <div>
                <h2 className="font-display text-3xl tracking-wide uppercase">
                  {article.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </RevealStagger>
      </div>
    </>
  );
}
