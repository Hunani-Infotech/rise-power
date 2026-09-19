import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
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
      strokeWidth="1.5"
      className="h-8 w-8 sm:h-9 sm:w-9"
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
      strokeWidth="1.5"
      className="h-8 w-8 sm:h-9 sm:w-9"
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
      strokeWidth="1.5"
      className="h-8 w-8 sm:h-9 sm:w-9"
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
      strokeWidth="1.5"
      className="h-8 w-8 sm:h-9 sm:w-9"
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
      strokeWidth="1.5"
      className="h-8 w-8 sm:h-9 sm:w-9"
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

      <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight text-[#101820] uppercase sm:text-5xl lg:text-[64px]">
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

const pressUpdates = [
  {
    number: "01",
    image: "/media/investors/investor-p1.png",
    imageAlt: "Rise Power hydrogen power system",
    title: (
      <>
        Rise Power Completes
        <br />
        Phase II Development
        <br />
        Milestone
      </>
    ),
    meta: "2026-02-10",
    category: "Company News",
    body: "Rise Power engineering has reached a development milestone on the portable hydrogen power system, validating core performance targets ahead of schedule.",
  },
  {
    number: "02",
    image: "/media/investors/investor-p2.png",
    imageAlt: "Rise Power field testing",
    title: (
      <>
        Field Testing Validates
        <br />
        Extended Runtime
        <br />
        Targets
      </>
    ),
    meta: "2025-12-02",
    category: "Technology",
    body: "Recent field testing has validated performance targets for the cartridge based fuel delivery system across a range of environmental conditions.",
  },
  {
    number: "03",
    image: "/media/investors/investor-p3.png",
    imageAlt: "Hydrogen power for defense applications",
    title: (
      <>
        Understanding Hydrogen
        <br />
        Power for Defense
        <br />
        Applications
      </>
    ),
    meta: "2025-11-18",
    category: "Resources",
    body: "A primer on hydrogen fuel cell technology for defense power applications, and how it compares to diesel and lithium alternatives.",
  },
  {
    number: "04",
    image: "/media/investors/investor-p4.png",
    imageAlt: "Rise Power engineering team and technology",
    title: (
      <>
        Rise Power Expands
        <br />
        Engineering Team
      </>
    ),
    meta: "2025-10-05",
    category: "Company News",
    body: "Rise Power is expanding the engineering team with additional power electronics and thermal management capacity.",
  },
] as const;

function PressCard({ item }: { item: (typeof pressUpdates)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#d9dfe3] bg-white">
      <div className="relative aspect-[1.65/1] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 88vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl font-bold text-[#52a526]">
            {item.number}
          </span>

          <span className="h-px w-[105px] bg-[#b9c1c7]" />
        </div>

        <h3 className="mt-2 font-display text-[25px] font-bold leading-[1.05] tracking-tight text-[#101820]">
          {item.title}
        </h3>

        <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-[#66727d] uppercase">
          {item.meta}
          <span className="mx-2 text-[#aab1b7]">·</span>
          {item.category}
        </p>

        <p className="mt-4 text-[16px] leading-[1.4] text-[#65717d]">
          {item.body}
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
  );
}

/* -------------------------------------------------------------------------- */
/* Investors Page                                                              */
/* -------------------------------------------------------------------------- */

const glanceItems = [
  {
    number: "01",
    title: "Category",
    lead: "Portable hydrogen fuel cell power.",
    detail:
      "Defense, disaster response, remote operations, critical infrastructure.",
    icon: LayersIcon,
  },
  {
    number: "02",
    title: "Stage",
    lead: "Beta hardware in active field validation.",
    detail:
      "Certification roadmap in progress across Transport Canada, UN 38.3, DOT-39, MIL-STD-810 and 461, ISO 9001, CSA and NFPA 2.",
    icon: SettingsIcon,
  },
  {
    number: "03",
    title: "Parent",
    lead: "Subsidiary of CIMtech Green Energy.",
    detail: "20+ years of Canadian advanced manufacturing.",
    icon: BuildingIcon,
  },
  {
    number: "04",
    title: "Location",
    lead: "Engineered, built, and validated in Surrey, British Columbia.",
    detail: null,
    icon: LocationIcon,
  },
  {
    number: "05",
    title: "Use of Funds",
    lead: "Scale manufacturing, close certification, complete pilot deployments, and expand commercial programs.",
    detail: null,
    icon: ChartIcon,
  },
] as const;

export default function InvestorsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">

      {/* ==================================================================== */}
      {/* HERO                                                                  */}
      {/* ==================================================================== */}

      <StackedPageHero
        imageSrc="/media/investors/investor-hero.png"
        imageAlt="Rise Power hydrogen power system in a mountain environment"
        tone="#101820"
      >
        <div className="hero-animate-copy max-w-[700px]">
          <div className="flex items-center gap-4">
            <p className="font-display text-mm font-semibold tracking-[0.2em] text-white uppercase">
              Capital Raise
            </p>
          </div>

          <h1 className="mt-6 font-display text-[42px] font-bold leading-[0.9] tracking-tight text-white uppercase sm:mt-7 sm:text-[56px] xl:text-[82px]">
            Investors
          </h1>

          <p className="mt-4 max-w-[650px] text-base leading-[1.55] text-white sm:text-xl">
            Rise Power is raising to scale manufacturing, complete certification,
            and fulfill pilot deployments across defense, disaster response, and
            critical infrastructure. Materials and contact below for qualified
            investors.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-opacity hover:opacity-90 sm:min-h-[64px]"
            >
              <span>Request a Briefing</span>
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#investor-materials"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/80 px-9 text-sm font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white/10 sm:min-h-[64px]"
            >
              <span>Download the Deck</span>
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* ==================================================================== */}
      {/* INVESTOR MATERIALS                                                     */}
      {/* ==================================================================== */}

      <section
        id="investor-materials"
        className="relative overflow-hidden bg-[#fbfaf7] py-8 sm:py-10 lg:py-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(110,127,66,0.07), transparent 55%), radial-gradient(ellipse 50% 40% at 92% 100%, rgba(16,24,32,0.04), transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="mx-auto max-w-[720px] text-center">
              <SectionHeading
                eyebrow="Investor Materials"
                title="Investor Materials."
                description={
                  <>
                    Download the deck and company one-pager. For full data room
                    access, financial models, and references, request a briefing.
                  </>
                }
              />
            </div>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2"
            step={80}
          >
            <article className="group relative flex flex-col overflow-hidden rounded-sm border border-[#e4e1d8] bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0c1210]">
                <Image
                  src="/media/investors/investor-deck.png"
                  alt="Rise Power investor deck"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1210]/45 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-display text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase sm:top-5 sm:left-5">
                  01
                </span>
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-6">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6e7f42] uppercase">
                  PDF · Investor Briefing
                </p>
                <h3 className="mt-2 font-display text-2xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase sm:text-[28px] lg:text-[32px]">
                  Investor Deck
                </h3>
                <p className="mt-2 max-w-[420px] flex-1 text-[15px] leading-[1.55] text-[#66717d]">
                  Full Rise Power investor briefing. Market sizing, technology,
                  traction, team, and use of funds.
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#ebe7de] pt-4">
                  <a
                    href="/media/investors/rise-power-deck.pdf"
                    download="rise-power-deck.pdf"
                    className="group/button inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-[#101820] uppercase transition-colors duration-300 hover:text-[#6e7f42]"
                  >
                    Download
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#66717d] uppercase">
                    PDF
                  </span>
                </div>
              </div>
            </article>

            <article className="group relative flex flex-col overflow-hidden rounded-sm border border-[#e4e1d8] bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0c1210]">
                <Image
                  src="/media/investors/investor-onepage.png"
                  alt="Rise Power company one-pager"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1210]/45 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-display text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase sm:top-5 sm:left-5">
                  02
                </span>
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-6">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6e7f42] uppercase">
                  PDF · Company Overview
                </p>
                <h3 className="mt-2 font-display text-2xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase sm:text-[28px] lg:text-[32px]">
                  Company One-Pager
                </h3>
                <p className="mt-2 max-w-[440px] flex-1 text-[15px] leading-[1.55] text-[#66717d]">
                  Revenue forecast and company overview. Quick-reference summary
                  for sharing with partners and committees.
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#ebe7de] pt-4">
                  <a
                    href="/media/investors/rise-power-one-pager.pdf"
                    download="rise-power-one-pager.pdf"
                    className="group/button inline-flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-[#101820] uppercase transition-colors duration-300 hover:text-[#6e7f42]"
                  >
                    Download
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#66717d] uppercase">
                    PDF
                  </span>
                </div>
              </div>
            </article>
          </RevealStagger>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* AT A GLANCE                                                           */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#101820] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 12% 20%, rgba(110,127,66,0.28), transparent 60%), radial-gradient(ellipse 45% 55% at 88% 80%, rgba(132,147,99,0.14), transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid overflow-hidden rounded-[2px] border border-white/10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            {/* Cinematic feature */}
            <Reveal
              variant="left"
              className="relative aspect-[5/4] min-h-0 w-full sm:aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
            >
              <Image
                src="/media/investors/investor-why.png"
                alt="Rise Power hydrogen power system"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1016] via-[#0a1016]/50 to-[#0a1016]/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1016]/55 via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between gap-4 p-4 sm:p-5 lg:p-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="font-display text-lg leading-none text-white"
                    >
                      ⌁
                    </span>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-white uppercase sm:text-mm">
                      At a Glance
                    </p>
                  </div>

                  <h2 className="mt-3 max-w-[14ch] font-display text-[1.85rem] font-bold leading-[0.92] tracking-tight text-white uppercase sm:mt-4 sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]">
                    Why Rise
                    <br />
                    <span className="text-[#a8b87a]">Power.</span>
                  </h2>

                  <p className="mt-3 max-w-[28ch] text-[11px] font-medium leading-[1.45] tracking-[0.12em] text-white uppercase sm:mt-4 sm:text-sm">
                    Clean power for a more resilient world.
                  </p>
                </div>

                <div className="flex items-end justify-between gap-3 border-t border-white/20 pt-3 sm:gap-4 sm:pt-4">
                  <p className="min-w-0 text-[10px] font-semibold leading-[1.4] tracking-[0.16em] text-white uppercase sm:text-[11px]">
                    Canadian-Engineered.
                    <br />
                    Field-Validated.
                  </p>
                  <span
                    aria-hidden="true"
                    className="mb-1 h-px w-10 shrink-0 bg-[#849363] sm:w-16"
                  />
                </div>
              </div>
            </Reveal>

            {/* Editorial dossier */}
            <RevealStagger
              className="flex min-h-0 flex-col bg-[#f7f6f2] text-[#101820]"
              step={40}
            >
              {glanceItems.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === glanceItems.length - 1;

                return (
                  <article
                    key={item.number}
                    className={`group relative px-4 py-3.5 transition-colors duration-300 sm:px-5 sm:py-4 lg:px-6 lg:py-[1.05rem] ${
                      isLast
                        ? "bg-[#101820] text-white"
                        : "hover:bg-white"
                    } ${index > 0 ? "border-t" : ""} ${
                      isLast ? "border-white/10" : "border-[#e4e1d8]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                        <span
                          className={`shrink-0 font-display text-lg font-bold tabular-nums tracking-tight sm:text-xl ${
                            isLast ? "text-white" : "text-[#6e7f42]"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`hidden h-px w-8 shrink-0 sm:block sm:w-10 ${
                            isLast ? "bg-white/25" : "bg-[#c9c4b8]"
                          }`}
                        />
                        <h3 className="min-w-0 font-display text-base font-bold leading-none tracking-tight uppercase sm:text-lg lg:text-xl">
                          {item.title}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 opacity-65 transition-opacity duration-300 group-hover:opacity-100 [&_svg]:h-6 [&_svg]:w-6 sm:[&_svg]:h-7 sm:[&_svg]:w-7 ${
                          isLast ? "text-white" : "text-[#101820]"
                        }`}
                      >
                        <Icon />
                      </div>
                    </div>

                    <div className="mt-2 min-w-0 sm:mt-2.5 sm:pl-11 lg:pl-12">
                      <p
                        className={`text-sm leading-[1.4] sm:text-[15px] ${
                          isLast ? "text-white" : "text-[#2a333c]"
                        }`}
                      >
                        {item.lead}
                      </p>
                      {item.detail ? (
                        <p
                          className={`mt-1 text-[13px] leading-[1.4] sm:text-sm ${
                            isLast ? "text-white" : "text-[#66727d]"
                          }`}
                        >
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PRESS & UPDATES                                                       */}
      {/* ==================================================================== */}

      <section
        id="press"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-24"
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

          {/* News cards — carousel below xl, 4-col grid from xl */}
          <div className="mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Press and updates"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {pressUpdates.map((item, index) => (
                <Reveal key={item.number} variant="up" delay={index * 70}>
                  <PressCard item={item} />
                </Reveal>
              ))}
            </SnapCarousel>
          </div>
          <RevealStagger
            className="mt-12 hidden gap-5 xl:grid xl:grid-cols-4"
            step={70}
          >
            {pressUpdates.map((item) => (
              <PressCard key={item.number} item={item} />
            ))}
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