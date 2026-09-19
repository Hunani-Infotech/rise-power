import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import type { InsightArticle, InsightBlock } from "@/lib/insights";

export type InsightArticleViewProps = {
  article: InsightArticle;
  related: Pick<
    InsightArticle,
    "slug" | "title" | "displayDate" | "excerpt"
  >[];
};

const SAGE_ACCENT = "#849363";
const SAGE = "#6e7f42";
const CREAM = "#fbfaf7";
const INK = "#101820";

function TitleWithAccent({
  title,
  accentPhrase,
}: {
  title: string;
  accentPhrase?: string;
}) {
  if (!accentPhrase) return <>{title}</>;

  const index = title.indexOf(accentPhrase);
  if (index === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, index)}
      <span style={{ color: SAGE_ACCENT }}>{accentPhrase}</span>
      {title.slice(index + accentPhrase.length)}
    </>
  );
}

function BlockRenderer({
  block,
  index,
}: {
  block: InsightBlock;
  index: number;
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <Reveal variant="up" delay={Math.min(index * 40, 200)}>
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            {block.text}
          </p>
        </Reveal>
      );

    case "heading":
      return (
        <Reveal variant="up" delay={Math.min(index * 40, 200)}>
          <h2 className="mt-4 font-display text-2xl leading-tight font-bold tracking-tight text-[#101820] uppercase sm:text-3xl">
            {block.text}
          </h2>
        </Reveal>
      );

    case "pullQuote":
      return (
        <Reveal variant="fade" delay={Math.min(index * 40, 200)}>
          <blockquote className="my-10 border-l-2 py-2 pl-6 sm:my-14 sm:pl-8"
            style={{ borderColor: SAGE }}
          >
            <p className="font-display text-2xl leading-snug font-semibold tracking-tight text-[#101820] italic sm:text-3xl lg:text-[2.125rem]">
              {block.text}
            </p>
            {block.attribution ? (
              <cite className="mt-4 block text-xs not-italic tracking-[0.16em] text-[#626a63] uppercase">
                {block.attribution}
              </cite>
            ) : null}
          </blockquote>
        </Reveal>
      );

    case "takeaways":
      return (
        <Reveal variant="up" delay={Math.min(index * 40, 200)}>
          <ol className="my-10 space-y-0 sm:my-12">
            {block.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-5 border-b border-[#e0e3dd] py-5 first:pt-0 last:border-b-0"
              >
                <span
                  className="w-10 shrink-0 font-display text-2xl leading-none font-bold"
                  style={{ color: SAGE }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-[#20251f] sm:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "figure":
      return (
        <Reveal variant="fade" delay={Math.min(index * 40, 200)}>
          <figure className="my-10 sm:my-12 sm:-mx-4 lg:-mx-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#101820]">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-cover"
              />
            </div>
            {block.caption ? (
              <figcaption className="mt-3 text-xs tracking-[0.12em] text-[#626a63] uppercase">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        </Reveal>
      );

    default:
      return null;
  }
}

export function InsightArticleView({
  article,
  related,
}: InsightArticleViewProps) {
  return (
    <article className="bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc={article.hero.src}
        imageAlt={article.hero.alt}
        tone="#101820"
      >
        <div className="hero-animate-copy max-w-[720px]">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#c5d4a8] uppercase sm:text-[13px]">
            {article.category}
            <span className="mx-2 text-white/40" aria-hidden>
              ·
            </span>
            {article.displayDate}
          </p>

          <h1 className="mt-5 font-display text-[42px] leading-[0.92] font-bold tracking-tight text-white uppercase sm:mt-6 sm:text-[56px] xl:text-[68px]">
            <TitleWithAccent
              title={article.title}
              accentPhrase={article.accentPhrase}
            />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:mt-7 sm:text-lg">
            {article.excerpt}
          </p>

          <p className="mt-6 border-t border-white/20 pt-4 text-xs tracking-[0.16em] text-white/70 uppercase">
            {article.readTime}
          </p>

          <div className="mt-8">
            <Link
              href="/insights"
              className="inline-flex min-h-10 items-center text-sm font-semibold tracking-wide text-white/80 uppercase transition-colors hover:text-white"
            >
              ← All Insights
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* Body */}
      <section
        className="relative py-16 sm:py-20 lg:py-28"
        style={{ background: CREAM }}
      >
        <div className="mx-auto max-w-3xl space-y-6 px-6 sm:space-y-7 lg:px-10">
          {article.body.map((block, index) => (
            <BlockRenderer
              key={`${block.type}-${index}`}
              block={block}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-t border-[#e0e3dd] bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: SAGE }}
              >
                Related
              </p>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl">
                Continue reading
              </h2>
            </Reveal>

            <div className="mt-10 divide-y divide-[#e0e3dd] border-y border-[#e0e3dd]">
              {related.map((item, index) => (
                <Reveal key={item.slug} variant="up" delay={index * 60}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group grid gap-2 py-6 transition-colors sm:grid-cols-[140px_1fr] sm:gap-8 lg:grid-cols-[160px_1.1fr_1fr] lg:gap-10"
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#626a63] uppercase">
                      {item.displayDate}
                    </p>
                    <h3 className="font-display text-xl leading-snug font-bold tracking-tight text-[#101820] uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#626a63] sm:text-base lg:pt-1">
                      {item.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Local CTA */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{ background: INK }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <Reveal variant="up">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: SAGE_ACCENT }}
            >
              Next step
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
              Request a Briefing
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Bring your operating environment and load profile. We respond with
              specs, runtime data, and a deployment summary.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={80}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Request a Briefing
              </Button>
              <Link
                href="/insights"
                className="inline-flex min-h-12 items-center justify-center border border-white/35 px-7 text-sm font-semibold tracking-normal text-white/90 transition-colors duration-200 hover:border-white hover:text-white"
              >
                Browse Insights
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
