import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import {
  getRelatedCapabilities,
  type CapabilityDetailPage,
} from "@/lib/capabilities";
import { capabilities } from "@/lib/home-content";

const SAGE = "#6e7f42";
const SAGE_ACCENT = "#849363";
const CREAM = "#fbfaf7";
const MUTED = "#66717d";
const SECTION_PAD = "py-12 sm:py-16 lg:py-24";

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : SAGE;

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
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

/** Accent a short trailing phrase after " & ", else the final word. */
function TitleWithAccent({ title }: { title: string }) {
  if (title.includes(" & ")) {
    const [before, after] = title.split(" & ");
    const afterWords = after.trim().split(/\s+/);
    if (afterWords.length <= 2) {
      return (
        <>
          {before} & <span style={{ color: SAGE }}>{after}</span>
        </>
      );
    }
  }

  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return <>{title}</>;

  const head = parts.slice(0, -1).join(" ");
  const tail = parts[parts.length - 1];

  return (
    <>
      {head} <span style={{ color: SAGE }}>{tail}</span>
    </>
  );
}

function galleryHeading(capability: CapabilityDetailPage) {
  switch (capability.id) {
    case "engineering":
      return {
        before: "From concept to",
        accent: "hardware.",
      };
    case "integration":
      return {
        before: "Platforms in",
        accent: "context.",
      };
    case "field":
      return {
        before: "Deployed where it",
        accent: "matters.",
      };
    case "safety":
      return {
        before: "Safety in",
        accent: "practice.",
      };
    default:
      return {
        before: `${capability.label} in`,
        accent: "focus.",
      };
  }
}

type CapabilityDetailProps = {
  capability: CapabilityDetailPage;
};

export function CapabilityDetail({ capability }: CapabilityDetailProps) {
  const roadmap = capabilities.certificationRoadmap;
  const related = getRelatedCapabilities(capability);
  const galleryCopy = galleryHeading(capability);

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* 1. Hero */}
      <StackedPageHero
        imageSrc={capability.images.hero.src}
        imageAlt={capability.images.hero.alt}
        tone="#101820"
        compact
      >
        <div className="hero-animate-copy max-w-[720px]">
          <SectionEyebrow light>
            {capability.eyebrow || "Capability"}
          </SectionEyebrow>

          <h1 className="mt-4 font-display text-[36px] leading-[0.95] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-[48px] xl:text-[56px]">
            <TitleWithAccent title={capability.title} />
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
            {capability.heroBody}
          </p>

          <div className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={capability.cta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: SAGE_ACCENT }}
            >
              {capability.cta.label}
              <ArrowRight className="size-5" aria-hidden />
            </Link>

            <Link
              href="/capabilities"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-sm border border-white/45 px-6 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-white hover:bg-white/10 sm:min-h-12 sm:px-7"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
              All Capabilities
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* 2. Overview — body + stats + callouts */}
      <section className={`relative overflow-hidden ${SECTION_PAD}`} style={{ background: CREAM }}>
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-2xl">
              <SectionEyebrow>Overview</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-4xl lg:text-5xl">
                <TitleWithAccent title={capability.heading} />
              </h2>
              <p
                className="mt-4 max-w-[42rem] text-base leading-relaxed sm:mt-5 sm:text-lg"
                style={{ color: MUTED }}
              >
                {capability.body}
              </p>
            </div>
          </Reveal>

          {capability.stats.length > 0 ? (
            <div className="mt-10 border-t border-[#c9c4b8] sm:mt-12">
              <div className="grid grid-cols-1 divide-y divide-[#c9c4b8] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
                {capability.stats.map((stat, index) => {
                  const isOdd = index % 2 === 1;
                  const isBottomRow = index >= 2;

                  return (
                    <Reveal key={stat.label} variant="up" delay={index * 60}>
                      <article
                        className={[
                          "px-0 py-6 sm:px-5 sm:py-7 lg:px-6 lg:py-8",
                          isOdd ? "sm:border-l sm:border-[#c9c4b8]" : "",
                          isBottomRow
                            ? "sm:border-t sm:border-[#c9c4b8] lg:border-t-0"
                            : "",
                          index > 0 ? "lg:border-l lg:border-[#c9c4b8]" : "",
                        ].join(" ")}
                      >
                        <p
                          className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase"
                          style={{ color: "#8a9186" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-3 font-display text-2xl leading-none font-bold tracking-tight uppercase sm:mt-4 sm:text-3xl">
                          {stat.value}
                        </p>
                        <p
                          className="mt-2 text-[11px] font-semibold tracking-[0.16em] uppercase"
                          style={{ color: SAGE }}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="mt-2 max-w-[18ch] text-sm leading-snug"
                          style={{ color: MUTED }}
                        >
                          {stat.body}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ) : null}

          {capability.callouts.length > 0 ? (
            <ul className="mt-10 grid max-w-[48rem] gap-x-8 gap-y-4 border-t border-[#ddd8cc] pt-8 sm:mt-12 sm:grid-cols-2 sm:gap-y-5 sm:pt-10">
              {capability.callouts.map((callout, index) => (
                <Reveal key={callout.title} variant="up" delay={index * 50}>
                  <li className="min-w-0">
                    <div className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: SAGE }}
                      />
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#101820] uppercase">
                          {callout.title}
                        </p>
                        <p
                          className="mt-0.5 text-sm leading-snug"
                          style={{ color: "#6b746c" }}
                        >
                          {callout.body}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* 3. What We Deliver */}
      <section
        className={`relative overflow-hidden ${SECTION_PAD}`}
        style={{ background: CREAM }}
      >
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>What We Deliver</SectionEyebrow>

            <h2 className="mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-4xl lg:text-5xl">
              Scope of <span style={{ color: SAGE }}>Work.</span>
            </h2>

            <p
              className="mt-4 max-w-[560px] text-base leading-relaxed sm:mt-5 sm:text-lg"
              style={{ color: MUTED }}
            >
              {capability.deliverablesIntro}
            </p>

            <ol className="mt-8 space-y-0 sm:mt-10">
              {capability.deliverables.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-[#e0e3dd] py-5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span
                    className="w-10 shrink-0 font-display text-2xl leading-none font-bold"
                    style={{ color: SAGE }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-[#20251f] sm:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#dfe4dc] sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src={capability.images.secondary.src}
                alt={capability.images.secondary.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Certification roadmap — safety only */}
      {capability.showRoadmap ? (
        <section className={`relative overflow-hidden bg-white ${SECTION_PAD}`}>
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <SectionEyebrow>{roadmap.eyebrow}</SectionEyebrow>

                <h2 className="mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-4xl lg:text-5xl">
                  {roadmap.heading}
                </h2>

                <p
                  className="mt-4 max-w-[680px] text-base leading-relaxed sm:mt-5 sm:text-lg"
                  style={{ color: MUTED }}
                >
                  {roadmap.body}
                </p>
              </div>
            </Reveal>

            <div className="mt-10 space-y-0 border-t border-[#e0e3dd] sm:mt-12">
              {roadmap.items.map((item, index) => (
                <Reveal key={item.standard} variant="up" delay={index * 40}>
                  <article className="grid gap-3 border-b border-[#e0e3dd] py-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-7 lg:grid-cols-[140px_1.1fr_1fr] lg:gap-10">
                    <p
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: SAGE }}
                    >
                      {item.status}
                    </p>

                    <h3 className="font-display text-xl leading-snug font-bold tracking-tight uppercase sm:text-2xl">
                      {item.standard}
                    </h3>

                    <p
                      className="text-base leading-relaxed lg:pt-1"
                      style={{ color: MUTED }}
                    >
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. In Focus gallery */}
      <section className={`overflow-hidden bg-[#f3f0e8] ${SECTION_PAD}`}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>In Focus</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-4xl lg:text-5xl">
              {galleryCopy.before}{" "}
              <span style={{ color: SAGE }}>{galleryCopy.accent}</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 lg:gap-4">
            {capability.gallery.map((item, index) => (
              <Reveal key={item.src} variant="fade" delay={index * 70}>
                <div
                  className={`relative overflow-hidden bg-[#101820] ${
                    index === 0
                      ? "aspect-[5/4] sm:col-span-2 sm:aspect-[16/10]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-700 hover:scale-[1.03] ${
                      item.src.endsWith(".png") &&
                      item.src.includes("engineering.png")
                        ? "object-contain bg-[#0a100e] p-4 sm:p-6"
                        : ""
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related capabilities */}
      {related.length > 0 ? (
        <section
          className={`border-t ${SECTION_PAD}`}
          style={{ background: CREAM, borderColor: "#e0e3dd" }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <SectionEyebrow>Related</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl">
                Other capabilities
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-12 lg:gap-10">
              {related.map((item, index) => (
                <Reveal key={item.slug} variant="up" delay={index * 80}>
                  <Link href={item.href} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                      <Image
                        src={item.images.hero.src}
                        alt={item.images.hero.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <p
                      className="mt-5 text-[11px] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: SAGE }}
                    >
                      {item.label}
                    </p>

                    <h3 className="mt-2 font-display text-xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 line-clamp-3 text-sm leading-relaxed sm:text-[15px]"
                      style={{ color: MUTED }}
                    >
                      {item.body}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. Flat dark closing CTA */}
      <section className="bg-[#101820] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow light>Partnership</SectionEyebrow>

            <h2 className="mt-4 max-w-[720px] font-display text-[32px] leading-[0.94] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-[44px] lg:text-[52px]">
              Engineering partnership from prototype to{" "}
              <span style={{ color: SAGE }}>deployment.</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-base leading-[1.55] text-[#b7c1c9] sm:mt-5 sm:text-lg">
              Bring your operating environment, load profile, and integration
              constraints. We respond with engineering scope, deployment
              guidance, and a capability brief tailored to your mission.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">
              <Link
                href={capability.cta.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                style={{ background: SAGE_ACCENT }}
              >
                {capability.cta.label}
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-80"
                style={{ color: SAGE_ACCENT }}
              >
                All Capabilities
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
