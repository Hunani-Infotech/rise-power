import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { insights } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resource Center",
  description:
    "Datasheets, news, and documentation for procurement, programs, and integration leads evaluating Rise Power systems.",
  path: "/resources",
});

const sage = "#6e7f42";
const cream = "#fbfaf7";
const muted = "#66717d";
const border = "#d9dfe3";

const destinations = [
  {
    number: "01",
    title: "Datasheets",
    description:
      "Technical specifications for Rise Power systems. Beta-stage hardware in active validation — full datasheets available on briefing request.",
    href: "/datasheets",
    cta: "Open Datasheets",
    image: "/media/products/product-sentinal.png",
    imageAlt: "Rise Sentinel hydrogen power system",
  },
  {
    number: "02",
    title: "Procurement FAQ",
    description:
      "Common questions from procurement, programs, and integration teams evaluating Rise Power portable power systems.",
    href: "/resources/faq",
    cta: "Read FAQ",
    image: "/media/FAQ/FAQ-hero.png",
    imageAlt: "Rise Power systems prepared for procurement evaluation",
  },
  {
    number: "03",
    title: "Insights",
    description:
      "Guides and comparisons on hydrogen power, field logistics, and defense applications from Rise Power.",
    href: "/insights",
    cta: "View Insights",
    image: "/media/capabilities/field-deployment.jpg",
    imageAlt: "Rise Power systems in field deployment",
  },
  {
    number: "04",
    title: "Investor Materials",
    description:
      "Investor deck and company one-pager. For full data room access, financial models, and references, request a briefing.",
    href: "/investors",
    cta: "View Investors",
    image: "/media/investors/investor-deck.png",
    imageAlt: "Rise Power investor briefing materials",
  },
] as const;

const systems = [
  {
    name: "Rise Sentinel™",
    label: "Man-portable power",
    href: "/datasheets#sentinel",
    image: "/media/products/product-sentinal2.png",
  },
  {
    name: "Rise Falcon™",
    label: "Drone range extender",
    href: "/datasheets#falcon",
    image: "/media/products/product-falcon2.png",
  },
  {
    name: "Rise Titan™",
    label: "3 kW field generator",
    href: "/datasheets#titan",
    image: "/media/products/product-titan2.png",
  },
  {
    name: "Cartridge Kit",
    label: "Fuel logistics",
    href: "/datasheets#hydrogen-cartridge-kit",
    image: "/media/products/product-hydro-kit2.png",
  },
] as const;

const insightImages: Record<string, { src: string; alt: string }> = {
  "hydrogen-fuel-cell-vs-diesel-generator": {
    src: "/media/why-hydrogen/comparison.png",
    alt: "Hydrogen fuel cell compared with diesel generators",
  },
  "what-is-a-hydrogen-fuel-cell": {
    src: "/media/ecosystem/fuel-cell.png",
    alt: "How a hydrogen fuel cell works",
  },
  "silent-generator-for-military-operations": {
    src: "/media/markets/defense-military.png",
    alt: "Silent generators for military operations",
  },
};

const featuredInsights = insights.slice(0, 3).map((article) => ({
  ...article,
  image:
    insightImages[article.slug] ??
    article.hero ?? {
      src: "/media/capabilities/engineering-development.jpg",
      alt: article.title,
    },
}));

const downloads = [
  {
    number: "01",
    label: "PDF · Investor Briefing",
    title: "Investor Deck",
    description:
      "Full Rise Power investor briefing. Market sizing, technology, traction, team, and use of funds.",
    href: "/media/investors/rise-power-deck.pdf",
    download: "rise-power-deck.pdf",
    image: "/media/investors/investor-deck.png",
    imageAlt: "Rise Power investor deck",
  },
  {
    number: "02",
    label: "PDF · Company Overview",
    title: "Company One-Pager",
    description:
      "Revenue forecast and company overview. Quick-reference summary for sharing with partners and committees.",
    href: "/media/investors/rise-power-one-pager.pdf",
    download: "rise-power-one-pager.pdf",
    image: "/media/investors/investor-onepage.png",
    imageAlt: "Rise Power company one-pager",
  },
] as const;

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
        className={`text-mm font-semibold tracking-[0.18em] uppercase ${onDark ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

function ContourDecoration({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${
        position === "left" ? "-top-20 -left-24" : "-top-20 -right-24"
      } h-[330px] w-[440px] opacity-70`}
    >
      <svg viewBox="0 0 440 330" className="h-full w-full" fill="none">
        <path
          d="M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
          stroke="#e2e7e1"
          strokeWidth="1"
        />
        <path
          d="M-25 65C45 108 88 25 164 57C238 88 284 29 354 65C405 91 432 70 465 45"
          stroke="#e5e9e5"
          strokeWidth="1"
        />
        <path
          d="M-25 95C42 137 91 54 164 87C237 119 288 59 355 94C405 121 433 101 465 75"
          stroke="#e8ece8"
          strokeWidth="1"
        />
        <path
          d="M-25 125C43 167 92 84 165 117C238 150 287 90 356 124C406 151 434 131 465 105"
          stroke="#ebeeeb"
          strokeWidth="1"
        />
        <path
          d="M-25 155C42 197 93 114 165 147C238 180 288 120 357 154C406 181 434 161 465 135"
          stroke="#edf0ed"
          strokeWidth="1"
        />
        <path
          d="M-25 185C42 227 94 144 166 177C238 210 288 150 357 184C406 211 434 191 465 165"
          stroke="#eff2ef"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc="/media/datasheets/datasheet-hero.png"
        imageAlt="Rise Power hydrogen systems prepared for field evaluation"
        tone="#0a0f10"
      >
        <div className="hero-animate-copy max-w-[820px]">
          <SectionEyebrow onDark>Resource Center</SectionEyebrow>

          <h1 className="mt-4 font-display text-[42px] leading-[0.92] font-bold tracking-tight text-white uppercase sm:mt-6 sm:text-[68px] md:text-[78px] xl:text-[88px] 2xl:text-[96px]">
            Resources
          </h1>

          <p className="mt-4 max-w-[720px] text-base leading-[1.55] text-white sm:mt-6 sm:text-xl xl:text-[22px]">
            Datasheets, procurement FAQ, insights, and investor materials for
            programs, integration, and buying teams evaluating Rise Power systems.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href="#destinations"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Browse Destinations
              <ArrowRight className="size-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Request a Briefing
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="relative scroll-mt-28 overflow-hidden py-10 sm:py-12 lg:py-16"
        style={{ backgroundColor: cream }}
      >
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow>Destinations</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-5xl lg:text-[64px]">
                Choose Your Brief.
              </h2>
              <p
                className="mt-3 max-w-[560px] text-base leading-[1.55] sm:mt-4 sm:text-lg"
                style={{ color: muted }}
              >
                Four paths into the Rise Power resource stack — specs,
                procurement answers, field notes, and technical articles.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade" className="mt-8 sm:mt-10 xl:hidden">
            <SnapCarousel
              ariaLabel="Resource destinations"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {destinations.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[7px] border bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(16,24,32,0.08)]"
                  style={{ borderColor: border }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/55 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-display text-3xl font-bold leading-none"
                        style={{ color: sage }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="h-px w-16"
                        style={{ backgroundColor: border }}
                      />
                    </div>

                    <h3 className="mt-3 font-display text-3xl font-bold tracking-tight uppercase sm:mt-4 sm:text-4xl">
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 flex-1 text-base leading-[1.55]"
                      style={{ color: muted }}
                    >
                      {item.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase sm:mt-6">
                      {item.cta}
                      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </SnapCarousel>
          </Reveal>

          <RevealStagger
            className="mt-8 hidden gap-4 sm:mt-10 sm:gap-5 xl:grid xl:grid-cols-2"
            step={70}
          >
            {destinations.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-[7px] border bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(16,24,32,0.08)]"
                style={{ borderColor: border }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/55 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-display text-3xl font-bold leading-none"
                      style={{ color: sage }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="h-px w-16"
                      style={{ backgroundColor: border }}
                    />
                  </div>

                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight uppercase sm:mt-4 sm:text-4xl">
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: muted }}
                  >
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase sm:mt-6">
                    {item.cta}
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* SYSTEMS GALLERY */}
      <section className="overflow-hidden bg-[#0e1418] py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow onDark>Systems Library</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-5xl lg:text-[56px]">
                Specs Behind
                <br />
                <span style={{ color: sage }}>The Hardware.</span>
              </h2>
              <p className="mt-3 max-w-[540px] text-base leading-[1.55] text-[#b7c1c9] sm:mt-4 sm:text-lg">
                Open any system for engineering targets, form factor notes, and
                briefing-gated datasheets.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade" className="mt-8 sm:mt-10 xl:hidden">
            <SnapCarousel
              ariaLabel="Systems gallery"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {systems.map((system, index) => (
                <Link
                  key={system.name}
                  href={system.href}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[7px] border border-white/10 bg-[#0a1014]"
                >
                  <Image
                    src={system.image}
                    alt={system.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071016] via-[#071016]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p
                      className="font-display text-2xl font-bold leading-none"
                      style={{ color: sage }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white uppercase sm:text-2xl">
                      {system.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-white">{system.label}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-white uppercase">
                      View Specs
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </SnapCarousel>
          </Reveal>

          <RevealStagger
            className="mt-8 hidden gap-4 sm:mt-10 sm:gap-5 xl:grid xl:grid-cols-4"
            step={70}
          >
            {systems.map((system, index) => (
              <Link
                key={system.name}
                href={system.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[7px] border border-white/10 bg-[#0a1014]"
              >
                <Image
                  src={system.image}
                  alt={system.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071016] via-[#071016]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p
                    className="font-display text-2xl font-bold leading-none"
                    style={{ color: sage }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white uppercase sm:text-2xl">
                    {system.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-white">{system.label}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-white uppercase">
                    View Specs
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FEATURED INSIGHTS */}
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[720px]">
                <SectionEyebrow>From the Field</SectionEyebrow>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-5xl lg:text-[64px]">
                  Recent Briefings.
                </h2>
                <p
                  className="mt-3 max-w-[520px] text-base leading-[1.55] sm:mt-4 sm:text-lg"
                  style={{ color: muted }}
                >
                  Milestones, validation notes, and primers for teams evaluating
                  hydrogen power in the field.
                </p>
              </div>

              <Link
                href="/insights"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
                style={{ color: sage }}
              >
                View All Insights
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="fade" className="mt-8 sm:mt-10 xl:hidden">
            <SnapCarousel
              ariaLabel="Featured insights"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {featuredInsights.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[7px] border bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(16,24,32,0.08)]"
                  style={{ borderColor: border }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/40 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p
                      className="text-mm font-semibold tracking-[0.16em] uppercase"
                      style={{ color: sage }}
                    >
                      {article.displayDate}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-[1.05] font-bold tracking-tight uppercase sm:text-[26px]">
                      {article.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-base leading-[1.55]"
                      style={{ color: muted }}
                    >
                      {article.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase sm:mt-6">
                      Read
                      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </SnapCarousel>
          </Reveal>

          <RevealStagger
            className="mt-8 hidden gap-4 sm:mt-10 sm:gap-5 xl:grid xl:grid-cols-3"
            step={70}
          >
            {featuredInsights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[7px] border bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(16,24,32,0.08)]"
                style={{ borderColor: border }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/40 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p
                    className="text-mm font-semibold tracking-[0.16em] uppercase"
                    style={{ color: sage }}
                  >
                    {article.displayDate}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-[1.05] font-bold tracking-tight uppercase sm:text-[26px]">
                    {article.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: muted }}
                  >
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase sm:mt-6">
                    Read
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section
        id="downloads"
        className="relative scroll-mt-28 overflow-hidden py-8 sm:py-10 lg:py-14"
        style={{ backgroundColor: cream }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(110,127,66,0.07), transparent 55%), radial-gradient(ellipse 50% 40% at 92% 100%, rgba(16,24,32,0.04), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="mx-auto max-w-[720px] text-center">
              <div className="flex justify-center">
                <SectionEyebrow>Optional Downloads</SectionEyebrow>
              </div>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-4 sm:text-5xl lg:text-[64px]">
                Investor Materials.
              </h2>
              <div
                className="mx-auto mt-3 h-px w-16"
                style={{ background: sage }}
                aria-hidden
              />
              <p
                className="mx-auto mt-3 max-w-[520px] text-base leading-[1.55] sm:text-lg"
                style={{ color: muted }}
              >
                Deck and company one-pager for qualified investors. For models,
                data room access, and references — request a briefing.
              </p>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2"
            step={80}
          >
            {downloads.map((item) => (
              <article
                key={item.number}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-[#e4e1d8] bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0c1210]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1210]/45 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase sm:top-5 sm:left-5">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-6">
                  <p
                    className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: sage }}
                  >
                    {item.label}
                  </p>

                  <h3 className="mt-2 font-display text-2xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase sm:text-[28px] lg:text-[32px]">
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 max-w-[420px] flex-1 text-[15px] leading-[1.55]"
                    style={{ color: muted }}
                  >
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#ebe7de] pt-4">
                    <a
                      href={item.href}
                      download={item.download}
                      className="group/button inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-[#101820] uppercase transition-colors duration-300 hover:text-[#6e7f42]"
                    >
                      Download
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                    <span
                      className="text-[10px] font-medium tracking-[0.2em] uppercase"
                      style={{ color: muted }}
                    >
                      PDF
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
