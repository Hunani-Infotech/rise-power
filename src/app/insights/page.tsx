import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/Button";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { insights, type InsightArticle } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "News & Insights",
  description:
    "Technical notes, runtime data, and development milestones from the Rise Power engineering team.",
  path: "/insights",
});

const sage = "#6e7f42";
const sageOnDark = "#849363";
const cream = "#fbfaf7";
const muted = "#66717d";
const border = "#d9dfe3";

function SectionEyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  const color = onDark ? "#ffffff" : sage;

  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: color }}
        />
      </span>
      <p
        className={`text-xs font-semibold tracking-[0.18em] uppercase ${onDark ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

function articleMeta(article: InsightArticle) {
  return {
    category: article.category,
    hero: article.hero,
    readTime: article.readTime,
  };
}

export default function InsightsPage() {
  const [featured, ...archive] = insights;
  const featuredMeta = featured ? articleMeta(featured) : null;

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      {/* HERO — browse framing only; no article list */}
      <StackedPageHero
        imageSrc="/media/contact/hero-banner.png"
        imageAlt="Rise Power systems prepared for field briefing and evaluation"
        tone="#0a100e"
      >
        <div className="hero-animate-copy max-w-[820px]">
          <SectionEyebrow onDark>News & Insights</SectionEyebrow>

          <h1 className="mt-4 font-display text-[42px] leading-[0.92] font-bold tracking-tight text-white uppercase sm:mt-6 sm:text-[68px] md:text-[78px] xl:text-[88px] 2xl:text-[96px]">
            Field notes.
            <br />
            Engineering{" "}
            <span style={{ color: sageOnDark }}>milestones.</span>
          </h1>

          <p className="mt-4 max-w-[640px] text-base leading-[1.55] text-white sm:mt-6 sm:text-xl xl:text-[22px]">
            Technical notes, runtime data, and development updates from the Rise
            Power engineering team.
          </p>

          <div className="mt-7 sm:mt-8">
            <a
              href="#featured"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Browse Articles
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* FEATURED — first article, asymmetric editorial */}
      {featured && featuredMeta ? (
        <section
          id="featured"
          className="scroll-mt-28 border-b py-12 sm:py-16 lg:py-24"
          style={{ backgroundColor: cream, borderColor: border }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <SectionEyebrow>Featured</SectionEyebrow>
            </Reveal>

            <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
              <Reveal variant="left">
                <Link
                  href={`/insights/${featured.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={featuredMeta.hero.src}
                    alt={featuredMeta.hero.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>
              </Reveal>

              <Reveal variant="right" delay={80}>
                <div className="flex flex-col justify-center border-t border-b py-8 lg:border-t-0 lg:border-b-0 lg:border-l lg:py-0 lg:pl-10 xl:pl-14"
                  style={{ borderColor: border }}
                >
                  <p
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: muted }}
                  >
                    <span style={{ color: sage }}>{featuredMeta.category}</span>
                    <span className="mx-2 text-[#c5ccd2]" aria-hidden="true">
                      ·
                    </span>
                    {featured.displayDate}
                    <span className="mx-2 text-[#c5ccd2]" aria-hidden="true">
                      ·
                    </span>
                    {featuredMeta.readTime}
                  </p>

                  <h2 className="mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl lg:text-[44px]">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="transition-colors hover:text-[#6e7f42]"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p
                    className="mt-5 max-w-[480px] text-base leading-[1.6] sm:text-lg"
                    style={{ color: muted }}
                  >
                    {featured.excerpt}
                  </p>

                  <div className="mt-8">
                    <Button
                      href={`/insights/${featured.slug}`}
                      className="rounded-sm gap-2"
                    >
                      Read Article
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* ARCHIVE — compact editorial index */}
      {archive.length > 0 ? (
        <section
          className="relative overflow-hidden py-10 sm:py-14 lg:py-16"
          style={{ backgroundColor: cream }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="max-w-[560px]">
                  <SectionEyebrow>Archive</SectionEyebrow>
                  <h2 className="mt-3 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl lg:text-[2.75rem]">
                    All Field{" "}
                    <span style={{ color: sage }}>Notes.</span>
                  </h2>
                </div>
                <p
                  className="shrink-0 text-[11px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: muted }}
                >
                  <span className="font-display text-lg font-bold tabular-nums tracking-tight" style={{ color: sage }}>
                    {String(archive.length).padStart(2, "0")}
                  </span>
                  <span className="ml-2">Entries · Newest first</span>
                </p>
              </div>
            </Reveal>

            <RevealStagger
              className="mt-8 border-t border-[#d9dfe3] sm:mt-10"
              step={50}
              variant="up"
            >
              {archive.map((article, index) => {
                const { category, hero, readTime } = articleMeta(article);
                const indexLabel = String(index + 1).padStart(2, "0");

                return (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-x-4 border-b py-5 pl-3 transition-colors duration-300 hover:bg-[#f3f2ed] sm:grid-cols-[3.25rem_minmax(0,1fr)_5.5rem_auto] sm:gap-x-6 sm:py-6 sm:pl-5 lg:gap-x-8 lg:pl-6"
                    style={{ borderColor: border }}
                  >
                    <span
                      className="font-display text-lg font-bold tabular-nums tracking-tight transition-colors duration-300 group-hover:text-[#6e7f42] sm:text-xl"
                      style={{ color: sage }}
                    >
                      {indexLabel}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <p
                          className="text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[11px]"
                          style={{ color: sage }}
                        >
                          {category}
                        </p>
                        <span className="text-[#c5ccd2]" aria-hidden="true">
                          ·
                        </span>
                        <p
                          className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px]"
                          style={{ color: muted }}
                        >
                          {article.displayDate}
                        </p>
                        <span className="text-[#c5ccd2]" aria-hidden="true">
                          ·
                        </span>
                        <p
                          className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px]"
                          style={{ color: muted }}
                        >
                          {readTime}
                        </p>
                      </div>

                      <h3
                        className="mt-1.5 font-display text-base leading-[1.15] font-bold tracking-tight uppercase transition-colors duration-300 group-hover:text-[#6e7f42] sm:text-lg lg:text-xl"
                      >
                        {article.title}
                      </h3>

                      <p
                        className="mt-1.5 line-clamp-1 max-w-[54ch] text-sm leading-snug"
                        style={{ color: muted }}
                      >
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="relative hidden size-[5.5rem] shrink-0 overflow-hidden bg-[#101820] sm:block">
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        fill
                        sizes="88px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      />
                    </div>

                    <span
                      className="flex size-9 shrink-0 items-center justify-center text-[#101820] transition-colors duration-300 group-hover:text-[#6e7f42]"
                      aria-hidden="true"
                    >
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </RevealStagger>
          </div>
        </section>
      ) : null}
    </main>
  );
}
