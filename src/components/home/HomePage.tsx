import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ChevronDown,
  Crosshair,
  Droplets,
  Leaf,
  Mouse,
  Play,
  Shield,
  AudioLines,
  Volume2,
  Weight,
  Wind,
} from "lucide-react";
import {
  featuredProducts,
  hero,
  heroImageSrc,
  missionDeployments,
  performanceMetrics,
  productEcosystem,
  threeMarkets,
} from "@/lib/home-content";
import { standards } from "@/lib/content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { EcosystemStepCard } from "./EcosystemStepCard";
import { FeaturedProductRow } from "./FeaturedProductRow";
import { FuelCellDiagram } from "./FuelCellDiagram";
import { MarketRow } from "./MarketCard";
import { PerformanceMetricCard } from "./PerformanceMetricCard";
import { PerformanceWaveBg } from "./PerformanceWaveBg";
import { SectionSkeleton } from "./SectionSkeleton";

const MissionMap = dynamic(
  () => import("./MissionMap").then((m) => m.MissionMap),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="dark" className="min-h-[24rem]" />,
  },
);

const CustomersPartners = dynamic(
  () => import("./CustomersPartners").then((m) => m.CustomersPartners),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="cream" className="min-h-[32rem]" />,
  },
);

const BusinessesCompanies = dynamic(
  () => import("./BusinessesCompanies").then((m) => m.BusinessesCompanies),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="cream" className="min-h-[28rem]" />,
  },
);



const sage = "#6e7f42";
/** Hero accent from Frame 1 reference (slightly brighter olive). */
const heroSage = "#849363";

const gaugeIcons = [AudioLines, Leaf, Crosshair, Weight] as const;
const heroChipIcons = [Leaf, Crosshair, Volume2, Shield] as const;

/** Shared page inset + vertical rhythm (content sections — not hero). */
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";
const sectionY = "py-14 sm:py-18 lg:py-20";

export function HomePage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip bg-[#f3f0e8] text-[#1a1c16]">
      {/* 1. HERO */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col overflow-hidden text-white lg:min-h-[780px]"
      >
        <Image
          src={heroImageSrc}
          alt="Rise Power tactical field deployment"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="hero-animate-media object-cover object-[58%_center]"
        />
        {/* Soft grade + left copy lane so UI text stays readable over the photo */}
        {/* <div className="absolute inset-0 bg-[#060806]/25" />
        <div className="absolute inset-0 bg-linear-to-r from-[#060806]/92 via-[#060806]/55 to-transparent lg:w-[58%] lg:via-[#060806]/72" />
        <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-[#060806]/40 via-transparent to-transparent lg:w-[45%]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#060806]/70 via-[#060806]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#060806]/55 to-transparent" /> */}

        {/* Left focused cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060806]/95 via-[#060806]/35 to-transparent lg:w-[60%]" />

        {/* Bottom subtle cinematic fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060806]/45 via-transparent to-transparent" />

        {/* Top soft fade */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060806]/25 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pt-28 pb-20 lg:px-10 lg:pt-32 lg:pb-14">
          <div className="flex flex-col justify-center pt-10 lg:pt-10">
            <div className="hero-animate-copy max-w-xl lg:max-w-4xl">
              <p
                className="font-display text-[16px] font-semibold tracking-[0.28em] uppercase"
                style={{ color: sage }}
              >
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-[2.75rem] leading-[0.9] font-bold tracking-[-0.02em] uppercase sm:text-7xl md:text-8xl lg:text-[6.75rem]">
                {hero.headlineLine1}
                <br />
                <span style={{ color: sage }}>{hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base lg:text-lg">
                {hero.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90 rounded-sm"
                  style={{ background: heroSage }}
                >
                  <span className="grid size-5 place-items-center rounded-full border border-white/80">
                    <Play className="size-2.5 fill-current" />
                  </span>
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/75 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white/10 rounded-sm"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-animate-chips mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-8 lg:mt-10 lg:pb-2">
            {hero.chips.map((chip, index) => {
              const Icon = heroChipIcons[index] ?? Leaf;
              return (
                <div key={chip.title} className="flex items-center gap-3">
                  <div className="flex size-13 shrink-0 items-center justify-center rounded-full border border-[#849363]">
                    <Icon
                      className="mt-0.5 size-8 shrink-0"
                      strokeWidth={1.6}
                      style={{ color: heroSage }}
                    />
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold tracking-[0.08em] text-white uppercase sm:text-sm">
                      {chip.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/70 sm:text-xs">
                      {chip.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <a
          href="#performance-metrics"
          className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition-colors hover:text-white lg:flex"
          aria-label="Scroll to next section"
        >
          <Mouse className="size-5" strokeWidth={1.4} />
          <ChevronDown className="size-3.5 animate-bounce" strokeWidth={1.6} />
        </a>
      </section>

      {/* Standards strip — live content parity */}
      {/* <section
        aria-label="Engineered to standards"
        className="border-y border-[#e4e6e0] bg-[#f3f1eb]"
      >
        <div
          className={`${pageInset} flex flex-col items-center gap-5 py-6 sm:flex-row sm:justify-between sm:gap-8 sm:py-7`}
        >
          <p className="shrink-0 text-xs font-semibold tracking-[0.22em] text-[#59615b] uppercase">
            Engineered To
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end sm:gap-x-8">
            {standards.map((label) => (
              <li
                key={label}
                className="text-xs font-semibold tracking-[0.12em] text-[#252925] uppercase sm:text-[13px]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* 2. Performance Metrics — Built to Outperform */}
      <section
        id="performance-metrics"
        className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
        style={{ background: "#fafaf8" }}
      >
        <PerformanceWaveBg />

        <div className={`particle-content relative z-[2] ${pageInset}`}>
          <Reveal variant="up">
            <p
              className="text-center font-display text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm lg:text-base"
              style={{ color: "#6e7f42" }}
            >
              {performanceMetrics.eyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-6xl lg:text-[5.5rem] xl:text-[6.25rem]">
              {performanceMetrics.headingBefore}{" "}
              <span style={{ color: "#6e7f42" }}>
                {performanceMetrics.headingAccent}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#5c584e] sm:text-lg lg:text-[1.35rem]">
              {performanceMetrics.body}
            </p>
          </Reveal>
          <RevealStagger
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4"
            step={100}
          >
            {performanceMetrics.gauges.map((item, index) => {
              const Icon = gaugeIcons[index] ?? Crosshair;
              return (
                <PerformanceMetricCard
                  key={item.title}
                  icon={Icon}
                  value={item.value}
                  unit={item.unit}
                  title={item.title}
                  body={item.body}
                  percent={item.percent}
                />
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 3. Three Markets — constrained gallery */}
      <section
        id="three-markets"
        className="scroll-mt-28 bg-[#f3f0e8] py-12 sm:py-14 lg:py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mx-auto max-w-2xl text-center">
              <p
                className="font-display text-[12px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: sage }}
              >
                {threeMarkets.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-[1.85rem] leading-[0.95] font-bold tracking-tight text-[#1a1c16] uppercase sm:text-3xl lg:text-[2.5rem]">
                {threeMarkets.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {threeMarkets.headingAccent}
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5c584e]">
                {threeMarkets.body}
              </p>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
            step={80}
            variant="up"
          >
            {threeMarkets.cards.map((item, index) => (
              <MarketRow
                key={item.title}
                index={String(index + 1).padStart(2, "0")}
                title={item.title}
                body={item.body}
                theater={item.theater}
                href={item.href}
                cta={item.cta}
                imageSrc={item.imageSrc}
                imageLabel={item.image}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Product Ecosystem */}
      {/* <section
        id="product-ecosystem"
        className={sectionY}
        style={{ background: "#ffffff" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="text-center font-display text-[16px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: sage }}
            >
              {productEcosystem.eyebrow}
            </p>
            <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              {productEcosystem.headingBefore}{" "}
              <span style={{ color: sage }}>{productEcosystem.headingAccent}</span>{" "}
              {productEcosystem.headingAfter}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
              {productEcosystem.body}
            </p>
          </Reveal>

          <RevealStagger
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 xl:grid-cols-5 xl:gap-6 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:sm:mx-auto [&>*:last-child]:sm:max-w-sm [&>*:last-child]:xl:col-span-1 [&>*:last-child]:xl:mx-0 [&>*:last-child]:xl:max-w-none"
            step={100}
          >
            {productEcosystem.steps.map((step, index) => (
              <div key={step.step} className="relative h-full">
                <EcosystemStepCard
                  step={step.step}
                  title={step.title}
                  blurb={step.blurb}
                  imageSrc={step.imageSrc}
                  imageLabel={step.image}
                  caption={step.caption}
                  highlighted={step.highlighted}
                />
                {index < productEcosystem.steps.length - 1 ? (
                  <ArrowRight
                    className="absolute top-[4.5rem] -right-3 z-10 hidden size-4 xl:block"
                    strokeWidth={1.75}
                    style={{ color: "#9a9484" }}
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </RevealStagger>

          <div
            className="mt-16 grid gap-8 border border-[#e4e0d6] bg-[#f7f5ef]/70 p-6 sm:p-8 lg:mt-20 lg:grid-cols-3 lg:items-stretch lg:gap-10 lg:p-10"
          >
            <Reveal variant="left" className="flex flex-col justify-center">
              <p
                className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: sage }}
              >
                {productEcosystem.howItWorks.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight font-bold tracking-tight uppercase sm:text-3xl lg:text-4xl">
                {productEcosystem.howItWorks.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5c584e]">
                {productEcosystem.howItWorks.body}
              </p>
              <Link
                href={productEcosystem.howItWorks.cta.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
                style={{ color: sage }}
              >
                {productEcosystem.howItWorks.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            <Reveal variant="scale" delay={100}>
              <FuelCellDiagram
                diagramTitle={productEcosystem.howItWorks.diagramTitle}
                diagramLabels={productEcosystem.howItWorks.diagramLabels}
                diagramImageSrc={productEcosystem.howItWorks.diagramImageSrc}
              />
            </Reveal>

            <Reveal
              variant="right"
              delay={200}
              className="flex flex-col justify-center bg-[#141a14] p-6 text-[#f3efe4] sm:p-7"
            >
              <div
                className="grid size-11 place-items-center rounded-full border"
                style={{ borderColor: `${sage}88` }}
              >
                <Leaf className="size-5" style={{ color: sage }} />
              </div>
              <h4 className="mt-5 font-display text-2xl font-bold tracking-wide uppercase">
                {productEcosystem.howItWorks.sideCard.title}
              </h4>
              <p className="mt-2 text-sm text-[#f3efe4]/70">
                {productEcosystem.howItWorks.sideCard.subtitle}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {productEcosystem.howItWorks.sideCard.bullets.map((bullet, i) => {
                  const BulletIcon = i === 0 ? Droplets : Volume2;
                  return (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <BulletIcon
                        className="size-4 shrink-0"
                        strokeWidth={1.7}
                        style={{ color: sage }}
                      />
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section> */}

      <section
        id="product-ecosystem"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-12 sm:py-14 lg:py-16"
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="text-center font-display text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm lg:text-[1rem]"
              style={{ color: sage }}
            >
              {productEcosystem.eyebrow}
            </p>
            <h2 className="mt-4 text-center font-display text-4xl leading-[0.9] font-bold tracking-tight uppercase sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]">
              {productEcosystem.headingBefore}{" "}
              <span style={{ color: sage }}>{productEcosystem.headingAccent}</span>{" "}
              {productEcosystem.headingAfter}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#5c584e] sm:text-lg lg:text-[1.35rem]">
              {productEcosystem.body}
            </p>
          </Reveal>

          <RevealStagger
            className="mt-12 grid gap-8 sm:grid-cols-2 xl:mt-16 xl:grid-cols-5 xl:gap-6"
            step={100}
          >
            {productEcosystem.steps.map((step, index) => (
              <div key={step.step} className="relative h-full">
                <EcosystemStepCard
                  step={step.step}
                  title={step.title}
                  blurb={step.blurb}
                  imageSrc={step.imageSrc}
                  imageLabel={step.image}
                  caption={step.caption}
                  highlighted={step.highlighted}
                />
                {index < productEcosystem.steps.length - 1 ? (
                  <ArrowRight
                    className="absolute top-[4.55rem] -right-5 z-10 hidden size-6 rounded-full border border-[#7b963f] bg-[#fbfaf7] p-1 xl:block"
                    strokeWidth={2.4}
                    style={{ color: "#1a1c16" }}
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </RevealStagger>

          <div className="mt-10 border border-[#E3DED2] bg-[#FBFAF7] p-5 sm:p-7 lg:mt-12 lg:p-8 rounded-sm">
            <div className="grid gap-8 xl:grid-cols-[1.25fr_3fr_1.45fr] xl:items-center">

              {/* LEFT CONTENT */}
              <Reveal variant="left" className="pr-4 xl:border-r xl:border-[#E6E1D6]">
                <p
                  className="text-[16px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: sage }}
                >
                  {productEcosystem.howItWorks.eyebrow}
                </p>

                <h3 className="mt-3 font-display text-[32px] leading-[0.95] font-bold uppercase">
                  Clean Hydrogen.
                  <br />
                  Endless Possibilities.
                </h3>

                <p className="mt-2 text-[14px] leading-7 text-[#5C584E]">
                  {productEcosystem.howItWorks.body}
                </p>

                <Link
                  href={productEcosystem.howItWorks.cta.href}
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: sage }}
                >
                  {productEcosystem.howItWorks.cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>

              {/* CENTER FLOW */}
              <Reveal variant="scale" delay={100} className="min-w-0">
                <div className="w-full min-w-0">

                  <div className="w-full overflow-hidden">
                    <div className="flex w-full items-center justify-center">
                      {/* Hydrogen */}
                      <div className="w-[10%] min-w-0 shrink-0">
                        <img
                          src="/media/ecosystem/hydrogen.png"
                          alt="Hydrogen"
                          className="mx-auto aspect-square w-full max-w-[88px] object-contain rounded-full"
                        />
                      </div>

                      {/* Hydrogen → Stack */}
                      <div className="relative w-[5%] shrink-0">
                        <div className="h-px w-full bg-[#6F8A3A]" />
                        <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#6F8A3A]" />
                      </div>

                      {/* Fuel Cell Stack */}
                      <div className="w-[29%] min-w-0 shrink-0">
                        <Image
                          src={productEcosystem.howItWorks.diagramImageSrc}
                          alt="Fuel Cell Stack"
                          width={260}
                          height={160}
                          quality={85}
                          className="mx-auto h-auto w-full max-w-[230px] object-contain rounded-full"
                        />
                      </div>

                      {/* Stack → Electricity */}
                      <div className="relative w-[5%] shrink-0">
                        <div className="h-px w-full bg-[#D5B425]" />
                        <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#D5B425]" />
                      </div>

                      {/* Electricity */}
                      <div className="w-[10%] min-w-0 shrink-0">
                        <img
                          src="/media/ecosystem/electricity.png"
                          alt="Electricity"
                          className="mx-auto aspect-square w-full max-w-[88px] object-contain rounded-full"
                        />
                      </div>

                      {/* → */}
                      <ArrowRight
                        className="mx-1.5 w-[4%] shrink-0 text-[#8D9290]"
                        strokeWidth={1.4}
                      />

                      {/* Water */}
                      <div className="w-[10%] min-w-0 shrink-0">
                        <img
                          src="/media/ecosystem/water.png"
                          alt="Water"
                          className="mx-auto aspect-square w-full max-w-[88px] object-contain rounded-full"
                        />
                      </div>

                      {/* → */}
                      <ArrowRight
                        className="mx-1.5 w-[4%] shrink-0 text-[#8D9290]"
                        strokeWidth={1.4}
                      />

                      {/* Heat */}
                      <div className="w-[10%] min-w-0 shrink-0">
                        <img
                          src="/media/ecosystem/heat.png"
                          alt="Heat"
                          className="mx-auto aspect-square w-full max-w-[88px] object-contain rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mx-auto mt-4 w-[90%] border-t border-[#DEDCD4] pt-3">
                    <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 sm:gap-x-5">
                      {[
                        ["#6F8A3A", "HYDROGEN IN"],
                        ["#4AA8E8", "OXYGEN IN"],
                        ["#D5B425", "ELECTRICITY OUT"],
                        ["#78BCD7", "WATER OUT"],
                        ["#E27B5F", "HEAT"],
                      ].map(([color, label]) => (
                        <div
                          key={label}
                          className="flex items-center gap-1.5 whitespace-nowrap text-[8px] font-semibold tracking-[0.08em] text-[#67645D] uppercase sm:text-[12px]"
                        >
                          <span
                            className="size-2 shrink-0 rounded-full"
                            style={{ background: color }}
                          />
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT CARD */}
              <Reveal variant="right" delay={200}>
                <div className="relative h-full min-h-[14rem] overflow-hidden bg-[#0f140f] p-6 text-[#F4F0E6] rounded-xl">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    aria-hidden
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='56' viewBox='0 0 48 56'%3E%3Cpath d='M24 2 45 14v28L24 54 3 42V14Z' fill='none' stroke='%236e7f42' stroke-width='1'/%3E%3C/svg%3E\")",
                      backgroundSize: "48px 56px",
                    }}
                  />
                  <div className="leafbox" style={{ display: "flex", gap: "20px" }}>
                    <div
                      className="relative flex size-12 items-center justify-center border rounded-lg"
                      style={{ borderColor: `${sage}66` }}
                    >
                      <Leaf className="size-5" style={{ color: sage }} />
                    </div>
                    <div>
                      <h4 className="relative font-display text-2xl font-bold uppercase">
                        {productEcosystem.howItWorks.sideCard.title}
                      </h4>

                      <p className="relative mt-2 text-sm text-[#F4F0E6]/70">
                        {productEcosystem.howItWorks.sideCard.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="relative mt-5 space-y-4 border-t border-[#6e7f42]/60 pt-5 text-sm">
                    {productEcosystem.howItWorks.sideCard.bullets.map((bullet, i) => {
                      const Icon = i === 0 ? Wind : Volume2;

                      return (
                        <li key={bullet} className="flex items-center gap-3">
                          <Icon
                            className="size-4 shrink-0"
                            style={{ color: sage }}
                          />
                          {bullet}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products — compact editorial strips */}
      <section
        id="featured-products"
        className="scroll-mt-28 py-12 sm:py-14 lg:py-16"
        style={{ background: "#ffffff" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <header className="flex flex-col gap-3 border-b border-[#ddd8cc] pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pb-7">
              <div>
                <p
                  className="font-display text-[13px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: sage }}
                >
                  {featuredProducts.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-3xl leading-[0.95] font-bold tracking-tight text-[#1a1c16] uppercase sm:text-4xl lg:text-[2.75rem]">
                  {featuredProducts.headingBefore}{" "}
                  <span style={{ color: sage }}>
                    {featuredProducts.headingAccent}
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#5c584e] sm:text-right">
                {featuredProducts.body}
              </p>
            </header>
          </Reveal>

          <RevealStagger
            className="mt-8 space-y-4 lg:mt-10 lg:space-y-5"
            step={90}
            variant="up"
          >
            {featuredProducts.products.map((product, index) => (
              <FeaturedProductRow
                key={product.name}
                {...product}
                imageRight={index % 2 === 1}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Deployments — Coming Soon */}
      <section
        id="mission-deployments"
        className={`cv-auto scroll-mt-28 bg-[#f3f0e8] text-[#1a1c16] ${sectionY}`}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="text-center font-display text-[13px] font-semibold tracking-[0.28em] uppercase sm:text-[15px]"
              style={{ color: sage }}
            >
              {missionDeployments.eyebrow}
            </p>
            <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-[3.75rem]">
              {missionDeployments.headingBefore}{" "}
              <span style={{ color: sage }}>{missionDeployments.headingAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
              {missionDeployments.body}
            </p>
          </Reveal>

          <div className="mt-10 lg:mt-14">
            <MissionMap />
          </div>
        </div>
      </section>

      {/* 7. Customers & Partners */}
      <div className="cv-auto">
        <CustomersPartners />
      </div>

      {/* 10. Businesses & Companies */}
      <BusinessesCompanies />


    </div>
  );
}
