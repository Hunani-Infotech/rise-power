import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import type { InsightArticle, InsightBlock } from "@/lib/insights";

export type InsightArticleViewProps = {
  article: InsightArticle;
  related: Pick<
    InsightArticle,
    | "slug"
    | "title"
    | "displayDate"
    | "excerpt"
    | "hero"
    | "category"
    | "readTime"
  >[];
};

const SAGE_ACCENT = "#849363";
const SAGE = "#6e7f42";
const CREAM = "#fbfaf7";
const MUTED = "#66717d";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: SAGE }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: SAGE }}
        />
      </span>
      <p
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color: SAGE }}
      >
        {children}
      </p>
    </div>
  );
}

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
          <ol className="mt-8 mb-0 space-y-0 sm:mt-10">
            {block.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-5 border-b border-[#e0e3dd] py-5 first:pt-0 last:border-b-0 last:pb-0"
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
                sizes="(min-width: 768px) 991px, 100vw"
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
        compact
        contentMaxWidthClassName="max-w-[991px]"
      >
        <div className="hero-animate-copy">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#c5d4a8] uppercase sm:text-[13px]">
            {article.category}
            <span className="mx-2 text-white/40" aria-hidden>
              ·
            </span>
            {article.displayDate}
          </p>

          <h1 className="mt-4 font-display text-[36px] leading-[0.95] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-[48px] xl:text-[56px]">
            <TitleWithAccent
              title={article.title}
              accentPhrase={article.accentPhrase}
            />
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
            {article.excerpt}
          </p>

          <p className="mt-5 border-t border-white/20 pt-4 text-xs tracking-[0.16em] text-white/70 uppercase">
            {article.readTime}
          </p>

          <div className="mt-7">
            <Link
              href="/insights"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-sm border border-white/45 px-6 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-white hover:bg-white/10 sm:min-h-12 sm:px-7"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
              All Insights
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* Body */}
      <section
        className="relative pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14"
        style={{ background: CREAM }}
      >
        <div className="mx-auto max-w-[991px] space-y-6 px-6 sm:space-y-7 lg:px-10">
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
        <section
          className="border-t pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
          style={{ background: CREAM, borderColor: "#e0e3dd" }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <SectionEyebrow>Related</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl">
                Continue reading
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-12 lg:gap-12">
              {related.map((item, index) => (
                <Reveal key={item.slug} variant="up" delay={index * 80}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                      <Image
                        src={item.hero.src}
                        alt={item.hero.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <p
                      className="mt-5 text-[11px] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: MUTED }}
                    >
                      <span style={{ color: SAGE }}>{item.category}</span>
                      <span className="mx-2 text-[#c5ccd2]" aria-hidden="true">
                        ·
                      </span>
                      {item.displayDate}
                      <span className="mx-2 text-[#c5ccd2]" aria-hidden="true">
                        ·
                      </span>
                      {item.readTime}
                    </p>

                    <h3 className="mt-3 font-display text-xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 line-clamp-3 text-sm leading-relaxed sm:text-[15px]"
                      style={{ color: MUTED }}
                    >
                      {item.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
