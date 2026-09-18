import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ChevronDown,
  Crosshair,
  Leaf,
  Mouse,
  Play,
  Shield,
  AudioLines,
  Volume2,
  Weight,
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
import { MarketsShowcase } from "./MarketsShowcase";
import { PerformanceMetricCard } from "./PerformanceMetricCard";
import { SectionSkeleton } from "./SectionSkeleton";

const MissionMap = dynamic(
  () => import("./MissionMap").then((m) => m.MissionMap),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="dark" className="min-h-[20rem]" />,
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
                className="type-eyebrow"
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
        className="scroll-mt-28 py-10 sm:py-12 lg:py-14"
        style={{ background: "#fafaf8" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="type-eyebrow text-center"
              style={{ color: "#6e7f42" }}
            >
              {performanceMetrics.eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-center">
              {performanceMetrics.headingBefore}{" "}
              <span style={{ color: "#6e7f42" }}>
                {performanceMetrics.headingAccent}
              </span>
            </h2>
            <p className="type-section-body mx-auto mt-3 max-w-2xl text-center">
              {performanceMetrics.body}
            </p>
          </Reveal>
          <RevealStagger
            className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 items-stretch gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:max-w-none lg:grid-cols-4 lg:gap-5"
            step={80}
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

      {/* 3. Three Markets — standard image-led panels */}
      <section
        id="three-markets"
        className={`scroll-mt-28 bg-[#f3f0e8] ${sectionY}`}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <header className="max-w-3xl">
              <p
                className="type-eyebrow"
                style={{ color: sage }}
              >
                {threeMarkets.eyebrow}
              </p>
              <h2 className="type-section-h2 mt-3 text-[#1a1c16]">
                {threeMarkets.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {threeMarkets.headingAccent}
                </span>
              </h2>
              <p className="type-section-body mt-4 max-w-xl">
                {threeMarkets.body}
              </p>
            </header>
          </Reveal>

          <MarketsShowcase />
        </div>
      </section>

      {/* 4. Product Ecosystem */}
      <section
        id="product-ecosystem"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-12 sm:py-14 lg:py-16"
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="type-eyebrow text-center"
              style={{ color: sage }}
            >
              {productEcosystem.eyebrow}
            </p>
            <h2 className="type-section-h2 mt-4 text-center">
              {productEcosystem.headingBefore}{" "}
              <span style={{ color: sage }}>{productEcosystem.headingAccent}</span>{" "}
              {productEcosystem.headingAfter}
            </h2>
            <p className="type-section-body mx-auto mt-5 max-w-3xl text-center">
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
        </div>
      </section>

      {/* 5. Featured Products — single-row 4-column grid */}
      <section
        id="featured-products"
        className="scroll-mt-28 py-14 sm:py-16 lg:py-20"
        style={{ background: "#f3f0e8" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <header className="mx-auto max-w-3xl text-center">
              <p
                className="type-eyebrow"
                style={{ color: sage }}
              >
                {featuredProducts.eyebrow}
              </p>
              <h2 className="type-section-h2 mt-4 text-[#1a1c16]">
                {featuredProducts.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {featuredProducts.headingAccent}
                </span>
              </h2>
              <p className="type-section-body mx-auto mt-5 max-w-xl">
                {featuredProducts.body}
              </p>
            </header>
          </Reveal>

          <RevealStagger
            className="mt-10 grid items-stretch gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            step={90}
            variant="up"
          >
            {featuredProducts.products.map((product) => (
              <FeaturedProductRow key={product.name} {...product} />
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
              className="type-eyebrow text-center"
              style={{ color: sage }}
            >
              {missionDeployments.eyebrow}
            </p>
            <h2 className="type-section-h2 mt-4 text-center">
              {missionDeployments.headingBefore}{" "}
              <span style={{ color: sage }}>{missionDeployments.headingAccent}</span>
            </h2>
            <p className="type-section-body mx-auto mt-5 max-w-3xl text-center">
              {missionDeployments.body}
            </p>
          </Reveal>

          <div className="mt-8 lg:mt-10">
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
