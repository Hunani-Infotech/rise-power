import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      "Engineering targets for Sentinel, Falcon, Titan, and the cartridge kit. Beta-stage hardware — certified figures follow the compliance roadmap.",
    href: "/datasheets",
    cta: "Open Datasheets",
    image: "/media/products/product-sentinal.png",
    imageAlt: "Rise Sentinel hydrogen power system",
  },
  {
    number: "02",
    title: "Procurement FAQ",
    description:
      "Straight answers for buying and program teams: evaluation units, indoor use, briefing requests, and platform integration.",
    href: "/resources/faq",
    cta: "Read FAQ",
    image: "/media/FAQ/FAQ-hero.png",
    imageAlt: "Rise Power systems prepared for procurement evaluation",
  },
  {
    number: "03",
    title: "Insights",
    description:
      "Milestones, field validation, and defense power analysis from the Rise Power engineering team.",
    href: "/insights",
    cta: "View Insights",
    image: "/media/capabilities/field-deployment.jpg",
    imageAlt: "Rise Power systems in field deployment",
  },
  {
    number: "04",
    title: "Articles",
    description:
      "Technical deep dives on hydrogen fuel cells, portable power, and clean energy for defense and critical infrastructure.",
    href: "/insights/articles",
    cta: "Browse Articles",
    image: "/media/capabilities/engineering.jpg",
    imageAlt: "Rise Power engineering and technical documentation",
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
  "phase-ii-development-milestone": {
    src: "/media/products/product-sentinal.png",
    alt: "Rise Sentinel during Phase II development validation",
  },
  "field-testing-extended-runtime": {
    src: "/media/use-cases/uc-deployment.png",
    alt: "Field testing of Rise Power cartridge systems",
  },
  "hydrogen-power-defense-applications": {
    src: "/media/use-cases/defense-security.jpg",
    alt: "Hydrogen power systems for defense applications",
  },
};

const featuredInsights = insights.slice(0, 3).map((article) => ({
  ...article,
  image:
    insightImages[article.slug] ?? {
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
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: sage }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: sage }}
        />
      </span>
      <p
        className="text-mm font-semibold tracking-[0.18em] uppercase"
        style={{ color: onDark ? "#8fa86a" : sage }}
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

          <h1 className="mt-6 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-8 sm:text-[68px] md:text-[78px] xl:text-[88px] 2xl:text-[96px]">
            Specs.
            <br />
            Insights.
            <br />
            <span style={{ color: sage }}>Field Notes.</span>
          </h1>

          <p className="mt-6 max-w-[720px] text-base leading-[1.55] text-white/85 sm:mt-8 sm:text-xl xl:text-[22px]">
            Datasheets, procurement guidance, and field updates for programs,
            integration, and buying teams evaluating Rise Power systems.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
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
        className="relative scroll-mt-28 overflow-hidden py-16 sm:py-20 lg:py-28"
        style={{ backgroundColor: cream }}
      >
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow>Destinations</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-[64px]">
                Choose Your Brief.
              </h2>
              <p
                className="mt-5 max-w-[560px] text-base leading-[1.55] sm:text-lg"
                style={{ color: muted }}
              >
                Four paths into the Rise Power resource stack — specs,
                procurement answers, field notes, and technical articles.
              </p>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-7"
            step={95}
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

                <div className="flex flex-1 flex-col p-6 sm:p-8">
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

                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
                    {item.title}
                  </h3>

                  <p
                    className="mt-4 flex-1 text-base leading-[1.55]"
                    style={{ color: muted }}
                  >
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase">
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
      <section className="relative overflow-hidden bg-[#101820] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/media/use-cases/uc-hero.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071016]/85 via-[#071016]/75 to-[#071016]/95" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow onDark>Systems Library</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-[56px]">
                Specs Behind
                <br />
                <span style={{ color: sage }}>The Hardware.</span>
              </h2>
              <p className="mt-5 max-w-[540px] text-base leading-[1.55] text-white/75 sm:text-lg">
                Open any system for engineering targets, form factor notes, and
                briefing-gated datasheets.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {systems.map((system, index) => (
              <Reveal
                key={system.name}
                variant="up"
                delay={index * 85}
                className="min-w-0"
              >
                <Link
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
                    <p className="mt-2 text-sm text-white/70">{system.label}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-white uppercase">
                      View Specs
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHTS */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[720px]">
                <SectionEyebrow>From the Field</SectionEyebrow>
                <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-[64px]">
                  Recent Briefings.
                </h2>
                <p
                  className="mt-5 max-w-[520px] text-base leading-[1.55] sm:text-lg"
                  style={{ color: muted }}
                >
                  Milestones, validation notes, and primers for teams evaluating
                  hydrogen power in the field.
                </p>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
                style={{ color: sage }}
              >
                View All Insights
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7"
            step={90}
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

                <div className="flex flex-1 flex-col p-6 sm:p-7">
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
                    className="mt-4 flex-1 text-base leading-[1.55]"
                    style={{ color: muted }}
                  >
                    {article.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#101820] uppercase">
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
        className="relative scroll-mt-28 overflow-hidden py-16 sm:py-20 lg:py-28"
        style={{ backgroundColor: cream }}
      >
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow>Optional Downloads</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-[64px]">
                Investor Materials.
              </h2>
              <p
                className="mt-5 max-w-[560px] text-base leading-[1.55] sm:text-lg"
                style={{ color: muted }}
              >
                Deck and company one-pager for qualified investors. For models,
                data room access, and references — request a briefing.
              </p>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-12 grid gap-6 lg:grid-cols-2"
            step={100}
          >
            {downloads.map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[420px] overflow-hidden rounded-[7px] border border-[#172128] bg-[#071116] sm:min-h-[460px]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071116]/95 via-[#071116]/80 to-[#071116]/25" />

                <div className="relative z-10 flex min-h-[420px] max-w-[620px] flex-col p-8 sm:min-h-[460px] sm:p-10 lg:p-12">
                  <div className="flex items-center gap-5">
                    <span className="font-display text-4xl font-bold leading-none text-[#6e7f42]">
                      {item.number}
                    </span>
                    <span className="h-px w-[130px] bg-white/30" />
                  </div>

                  <p className="mt-5 text-mm font-medium tracking-[0.12em] text-[#b9c4ce] uppercase">
                    {item.label}
                  </p>

                  <h3 className="mt-6 font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[430px] text-base leading-[1.5] text-[#b7c1c9]">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href={item.href}
                      download={item.download}
                      className="group/button inline-flex min-h-[56px] min-w-[240px] items-center justify-center gap-2 rounded-[4px] bg-[#849363] px-7 text-sm font-semibold tracking-[0.05em] text-white uppercase transition-all duration-300 hover:opacity-90"
                    >
                      Download
                      <ArrowRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </RevealStagger>

          <Reveal variant="up" delay={120}>
            <p className="mt-8 text-sm" style={{ color: muted }}>
              Looking for the full investor overview?{" "}
              <Link
                href="/investors"
                className="font-semibold underline-offset-2 hover:underline"
                style={{ color: sage }}
              >
                Visit Investors
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      </main>
  );
}
