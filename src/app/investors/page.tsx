import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Investors",
  description:
    "Investor materials, company information, milestones, and updates from Rise Power.",
  path: "/investors",
});

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

function ArrowRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path d="m24 7 16 9-16 9-16-9 16-9Z" />
      <path d="m8 24 16 9 16-9" />
      <path d="m8 32 16 9 16-9" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.5 3.5M33.2 33.2l3.5 3.5M36.7 11.3l-3.5 3.5M14.8 33.2l-3.5 3.5" />
      <path d="M30.5 9.1a16.2 16.2 0 0 1 8.4 8.4M9.1 17.5a16.2 16.2 0 0 1 8.4-8.4M38.9 30.5a16.2 16.2 0 0 1-8.4 8.4M17.5 38.9a16.2 16.2 0 0 1-8.4-8.4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path d="M9 41V14h17v27M26 41V7h13v34M5 41h38" />
      <path d="M14 20h3M14 27h3M14 34h3M31 14h3M31 21h3M31 28h3M31 35h3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path d="M38 20c0 10-14 22-14 22S10 30 10 20a14 14 0 1 1 28 0Z" />
      <circle cx="24" cy="20" r="4.5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path d="M8 40V27h8v13H8ZM20 40V18h8v22h-8ZM32 40V8h8v32h-8Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Decorative contour background                                               */
/* -------------------------------------------------------------------------- */

function ContourBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-36 -top-32 h-[500px] w-[500px] rounded-full border border-[#e4e8eb]" />
      <div className="absolute -left-28 -top-24 h-[430px] w-[430px] rounded-full border border-[#e7eaed]" />
      <div className="absolute -left-20 -top-16 h-[360px] w-[360px] rounded-full border border-[#e9ecef]" />
      <div className="absolute -left-12 -top-8 h-[290px] w-[290px] rounded-full border border-[#ebedef]" />

      <div className="absolute -right-36 -top-32 h-[500px] w-[500px] rounded-full border border-[#e4e8eb]" />
      <div className="absolute -right-28 -top-24 h-[430px] w-[430px] rounded-full border border-[#e7eaed]" />
      <div className="absolute -right-20 -top-16 h-[360px] w-[360px] rounded-full border border-[#e9ecef]" />

      <div className="absolute -bottom-36 -left-32 h-[500px] w-[500px] rounded-full border border-[#e4e8eb]" />
      <div className="absolute -bottom-28 -left-24 h-[420px] w-[420px] rounded-full border border-[#e7eaed]" />

      <div className="absolute -bottom-36 -right-32 h-[500px] w-[500px] rounded-full border border-[#e4e8eb]" />
      <div className="absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full border border-[#e7eaed]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable section heading                                                    */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1000px] text-center">
      <p className="text-mm font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#101820] uppercase sm:text-6xl lg:text-[64px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-[820px] text-base leading-[1.55] text-[#626e7a] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Investors Page                                                              */
/* -------------------------------------------------------------------------- */

export default function InvestorsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">

      {/* ==================================================================== */}
      {/* HERO                                                                  */}
      {/* ==================================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-[#101820] lg:min-h-[850px]">

        <Image
          src="/media/investors/investor-hero.png"
          alt="Rise Power hydrogen power system in a mountain environment"
          fill
          priority
          sizes="100vw"
          className="hero-animate-media object-cover object-center"
        />

        {/* Dark gradient for text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/75 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/80 via-transparent to-[#071016]/20" /> */}

        {/* Left focused cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/35 to-transparent" />

        {/* Bottom subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/45 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 pb-20 pt-36 lg:min-h-[850px] lg:px-10">

          <div className="hero-animate-copy max-w-[700px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="font-display text-mm font-semibold tracking-[0.2em] text-[#6e7f42] uppercase">
                Investors
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 font-display text-6xl font-bold leading-[0.9] tracking-tight text-white uppercase sm:text-7xl lg:text-[92px]">
              Investors
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[650px] text-lg leading-[1.55] text-white/90 sm:text-xl">
              Rise Power is raising to scale manufacturing, complete
              certification, and fulfill pilot deployments across defense,
              disaster response, and critical infrastructure. Materials and
              contact below for qualified investors.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* <Link
                href="/contact"
                className="group inline-flex min-h-[64px] items-center justify-center gap-7 rounded-[5px] bg-[#58a926] px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-all duration-300 hover:bg-[#4b9220] hover:shadow-xl"
              >
                <span>Request a Briefing</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#investor-materials"
                className="group inline-flex min-h-[64px] items-center justify-center gap-7 rounded-[5px] border border-white/80 bg-transparent px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-all duration-300 hover:bg-white hover:text-[#101820]"
              >
                <span>Download the Deck</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link> */}

              <Link
                href="/contact"
                className="group inline-flex min-h-[64px] items-center justify-center gap-2 px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-opacity hover:opacity-90 rounded-sm bg-[#849363]"
              >
                <span>Request a Briefing</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#investor-materials"
                className="group inline-flex min-h-[64px] items-center justify-center gap-2 border border-white/80 px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white/10 rounded-sm"
              >
                <span>Download the Deck</span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* INVESTOR MATERIALS                                                     */}
      {/* ==================================================================== */}

      <section
        id="investor-materials"
        className="relative overflow-hidden bg-[#fbfaf7] py-20 sm:py-24 lg:py-28"
      >
        <ContourBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">

          <Reveal variant="up">
            <SectionHeading
              eyebrow="Investor Materials"
              title="Investor Materials."
              description={
                <>
                  Download the deck and company one-pager. For full data room
                  access,
                  <br className="hidden sm:block" />
                  financial models, and references, request a briefing.
                </>
              }
            />
          </Reveal>

          <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-2" step={100}>

            {/* Investor Deck */}
            <article className="group relative min-h-[480px] overflow-hidden rounded-[7px] border border-[#172128] bg-[#071116]">

              <Image
                src="/media/investors/investor-deck.png"
                alt="Rise Power investor deck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071116]/95 via-[#071116]/80 to-[#071116]/20" />

              <div className="relative z-10 flex min-h-[480px] max-w-[620px] flex-col p-8 sm:p-10 lg:p-12">

                <div className="flex items-center gap-5">
                  <span className="font-display text-4xl font-bold leading-none text-[#6e7f42]">
                    01
                  </span>

                  <span className="h-px w-[130px] bg-white/30" />
                </div>

                <p className="mt-5 text-mm font-medium tracking-[0.12em] text-[#b9c4ce] uppercase">
                  PDF · Investor Briefing
                </p>

                <h3 className="mt-6 font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                  Investor Deck
                </h3>

                <p className="mt-5 max-w-[430px] text-base leading-[1.5] text-[#b7c1c9]">
                  Full Rise Power investor briefing. Market sizing,
                  technology, traction, team, and use of funds.
                </p>

                <div className="mt-auto">
                  <a
                    href="/media/investors/rise-power-deck.pdf"
                    download="rise-power-deck.pdf"
                    className="group/button inline-flex min-h-[60px] min-w-[275px] items-center justify-center gap-2 rounded-[4px] bg-[#849363] px-7 text-sm font-semibold tracking-[0.05em] text-white uppercase transition-all duration-300 hover:opacity-90"
                  >
                    Download
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>

            {/* Company One-Pager */}
            <article className="group relative min-h-[480px] overflow-hidden rounded-[7px] border border-[#172128] bg-[#071116]">

              <Image
                src="/media/investors/investor-onepage.png"
                alt="Rise Power company one-pager"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071116]/95 via-[#071116]/80 to-[#071116]/20" />

              <div className="relative z-10 flex min-h-[480px] max-w-[620px] flex-col p-8 sm:p-10 lg:p-12">

                <div className="flex items-center gap-5">
                  <span className="font-display text-4xl font-bold leading-none text-[#6e7f42]">
                    02
                  </span>

                  <span className="h-px w-[130px] bg-white/30" />
                </div>

                <p className="mt-5 text-mm font-medium tracking-[0.12em] text-[#b9c4ce] uppercase">
                  PDF · Revenue Forecast
                </p>

                <h3 className="mt-6 font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                  Company One-Pager
                </h3>

                <p className="mt-5 max-w-[440px] text-base leading-[1.5] text-[#b7c1c9]">
                  Revenue forecast and company overview. Quick-reference
                  summary for sharing with partners and committees.
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="/media/investors/rise-power-one-pager.pdf"
                    download="rise-power-one-pager.pdf"
                    className="group/button inline-flex min-h-[60px] min-w-[275px] items-center justify-center gap-2 rounded-[4px] bg-[#849363] px-7 text-sm font-semibold tracking-[0.05em] text-white uppercase transition-all duration-300 hover:opacity-90"
                  >
                    Download
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          </RevealStagger>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* AT A GLANCE                                                           */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#fbfaf7] pt-0 pb-20 sm:pb-24 lg:pb-28">

        <ContourBackground />

        <div className="relative z-10 mx-auto grid max-w-[1440px] gap-6 px-6 lg:grid-cols-[0.9fr_1.25fr] lg:px-10">

          {/* Left feature */}
          <Reveal variant="left" className="relative min-h-[680px] overflow-hidden rounded-[9px] border border-[#d9dfe3] bg-white p-2">

            <div className="relative h-full min-h-[660px] overflow-hidden rounded-[7px]">

              <Image
                src="/media/investors/investor-why.png"
                alt="Rise Power hydrogen power system"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071116]/90 via-transparent to-transparent" />

              <div className="absolute left-8 top-8 right-8">

                <p className="text-sm font-semibold tracking-[0.16em] text-[#4f9825] uppercase">
                  At a Glance
                </p>

                <h2 className="mt-5 max-w-[470px] font-display text-5xl font-bold leading-[0.92] tracking-tight text-[#101820] uppercase sm:text-6xl">
                  Why Rise
                  <br />
                  Power.
                </h2>

                <p className="mt-7 max-w-[400px] text-base font-semibold leading-[1.5] tracking-[0.16em] text-[#4c5a67] uppercase">
                  Clean Power
                  <br />
                  For A More Resilient World.
                </p>
              </div>

              <div className="absolute bottom-7 left-8 right-8 flex items-end justify-between">
                <p className="max-w-[250px] text-xs font-medium leading-[1.4] tracking-[0.18em] text-white uppercase">
                  Clean Power
                  <br />
                  For A More Resilient World.
                </p>

                <span className="h-px w-24 bg-white/60" />
              </div>
            </div>
          </Reveal>

          {/* Right information cards */}
          <Reveal variant="right" delay={80} className="grid gap-5 sm:grid-cols-2">

            {/* Category */}
            <article className="rounded-[8px] border border-[#d9dfe3] bg-white p-8">

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-3xl font-bold text-[#52a526]">
                    01
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <div className="text-[#101820]">
                  <LayersIcon />
                </div>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold leading-none">
                Category
              </h3>

              <p className="mt-5 text-lg leading-[1.35] text-[#34424e]">
                Portable hydrogen fuel cell power.
              </p>

              <p className="mt-2 text-base leading-[1.4] text-[#66727d]">
                Defense, disaster response, remote operations, critical
                infrastructure.
              </p>
            </article>

            {/* Stage */}
            <article className="rounded-[8px] border border-[#d9dfe3] bg-white p-8">

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-3xl font-bold text-[#52a526]">
                    02
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <div className="text-[#101820]">
                  <SettingsIcon />
                </div>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold leading-none">
                Stage
              </h3>

              <p className="mt-5 text-lg leading-[1.35] text-[#34424e]">
                Beta hardware in active field validation.
              </p>

              <p className="mt-2 text-base leading-[1.4] text-[#66727d]">
                Certification roadmap in progress across Transport Canada,
                UN 38.3, DOT-39, MIL-STD-810 and 461, ISO 9001, CSA and NFPA
                2.
              </p>
            </article>

            {/* Parent */}
            <article className="rounded-[8px] border border-[#d9dfe3] bg-white p-8">

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-3xl font-bold text-[#52a526]">
                    03
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <div className="text-[#101820]">
                  <BuildingIcon />
                </div>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold leading-none">
                Parent
              </h3>

              <p className="mt-5 text-lg leading-[1.35] text-[#34424e]">
                Subsidiary of CIMtech Green Energy.
              </p>

              <p className="mt-2 text-base leading-[1.4] text-[#66727d]">
                20+ years of Canadian advanced manufacturing.
              </p>
            </article>

            {/* Location */}
            <article className="rounded-[8px] border border-[#d9dfe3] bg-white p-8">

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-3xl font-bold text-[#52a526]">
                    04
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <div className="text-[#101820]">
                  <LocationIcon />
                </div>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold leading-none">
                Location
              </h3>

              <p className="mt-5 text-lg leading-[1.4] text-[#34424e]">
                Engineered, built, and validated in Surrey, British Columbia.
              </p>
            </article>

            {/* Use of Funds */}
            <article className="rounded-[8px] border border-[#d9dfe3] bg-white p-8 sm:col-span-2">

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <span className="font-display text-3xl font-bold text-[#52a526]">
                    05
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <div className="text-[#101820]">
                  <ChartIcon />
                </div>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold leading-none">
                Use of Funds
              </h3>

              <p className="mt-5 max-w-[900px] text-lg leading-[1.45] text-[#34424e]">
                Scale manufacturing, close certification, complete pilot
                deployments, and expand commercial programs.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PRESS & UPDATES                                                       */}
      {/* ==================================================================== */}

      <section
        id="press"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] pt-0 pb-20 sm:pb-24 lg:pb-28"
      >

        <ContourBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">

          <Reveal variant="up">
            <SectionHeading
              eyebrow="Press & Updates"
              title="Latest News & Milestones"
              description={
                <>
                  Company news, technology updates, and development milestones.
                  <br className="hidden sm:block" />
                  For press inquiries, contact info@risepower.com.
                </>
              }
            />
          </Reveal>

          {/* News cards */}
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" step={90}>

            {/* 01 */}
            <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d9dfe3] bg-white">

              <div className="relative aspect-[1.65/1] overflow-hidden">
                <Image
                  src="/media/investors/investor-p1.png"
                  alt="Rise Power hydrogen power system"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-[#52a526]">
                    01
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <h3 className="mt-2 font-display text-[25px] font-bold leading-[1.05] tracking-tight text-[#101820]">
                  Rise Power Completes
                  <br />
                  Phase II Development
                  <br />
                  Milestone
                </h3>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-[#66727d] uppercase">
                  2026-02-10
                  <span className="mx-2 text-[#aab1b7]">·</span>
                  Company News
                </p>

                <p className="mt-4 text-[16px] leading-[1.4] text-[#65717d]">
                  Rise Power engineering has reached a development milestone
                  on the portable hydrogen power system, validating core
                  performance targets ahead of schedule.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.06em] text-[#101820] uppercase transition-colors hover:text-[#55a326]"
                  >
                    Read More
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>

            {/* 02 */}
            <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d9dfe3] bg-white">

              <div className="relative aspect-[1.65/1] overflow-hidden">
                <Image
                  src="/media/investors/investor-p2.png"
                  alt="Rise Power field testing"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-[#52a526]">
                    02
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <h3 className="mt-2 font-display text-[25px] font-bold leading-[1.05] tracking-tight text-[#101820]">
                  Field Testing Validates
                  <br />
                  Extended Runtime
                  <br />
                  Targets
                </h3>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-[#66727d] uppercase">
                  2025-12-02
                  <span className="mx-2 text-[#aab1b7]">·</span>
                  Technology
                </p>

                <p className="mt-4 text-[16px] leading-[1.4] text-[#65717d]">
                  Recent field testing has validated performance targets for
                  the cartridge based fuel delivery system across a range of
                  environmental conditions.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.06em] text-[#101820] uppercase transition-colors hover:text-[#55a326]"
                  >
                    Read More
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>

            {/* 03 */}
            <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d9dfe3] bg-white">

              <div className="relative aspect-[1.65/1] overflow-hidden">
                <Image
                  src="/media/investors/investor-p3.png"
                  alt="Hydrogen power for defense applications"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-[#52a526]">
                    03
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <h3 className="mt-2 font-display text-[25px] font-bold leading-[1.05] tracking-tight text-[#101820]">
                  Understanding Hydrogen
                  <br />
                  Power for Defense
                  <br />
                  Applications
                </h3>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-[#66727d] uppercase">
                  2025-11-18
                  <span className="mx-2 text-[#aab1b7]">·</span>
                  Resources
                </p>

                <p className="mt-4 text-[16px] leading-[1.4] text-[#65717d]">
                  A primer on hydrogen fuel cell technology for defense power
                  applications, and how it compares to diesel and lithium
                  alternatives.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.06em] text-[#101820] uppercase transition-colors hover:text-[#55a326]"
                  >
                    Read More
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>

            {/* 04 */}
            <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d9dfe3] bg-white">

              <div className="relative aspect-[1.65/1] overflow-hidden">
                <Image
                  src="/media/investors/investor-p4.png"
                  alt="Rise Power engineering team and technology"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-[#52a526]">
                    04
                  </span>

                  <span className="h-px w-[105px] bg-[#b9c1c7]" />
                </div>

                <h3 className="mt-2 font-display text-[25px] font-bold leading-[1.05] tracking-tight text-[#101820]">
                  Rise Power Expands
                  <br />
                  Engineering Team
                </h3>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-[#66727d] uppercase">
                  2025-10-05
                  <span className="mx-2 text-[#aab1b7]">·</span>
                  Company News
                </p>

                <p className="mt-4 text-[16px] leading-[1.4] text-[#65717d]">
                  Rise Power is expanding the engineering team with additional
                  power electronics and thermal management capacity.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.06em] text-[#101820] uppercase transition-colors hover:text-[#55a326]"
                  >
                    Read More
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </RevealStagger>

          {/* View all */}
          <Reveal variant="up" delay={120} className="mt-9 flex justify-center">
            <Link
              href="/resources"
              className="group inline-flex min-h-[58px] items-center justify-center gap-2 rounded-[5px] bg-[#849363] px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-all duration-300 hover:opacity-90"
            >
              <span>View All Insights</span>
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}