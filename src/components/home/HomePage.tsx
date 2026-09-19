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
import { SnapCarousel } from "./SnapCarousel";

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
      {/* 1. HERO — image above / copy below below xl; full-bleed overlay on xl+ */}
      <section
        id="hero"
        className="relative flex w-full flex-col overflow-hidden bg-[#060806] text-white xl:min-h-[max(100svh,780px)]"
      >
        <div className="relative aspect-[5/4] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
          <Image
            src={heroImageSrc}
            alt="Rise Power tactical field deployment"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="hero-animate-media object-cover object-[58%_center]"
          />
          {/* Overlays only when copy sits on the photo (xl+) */}
          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060806]/95 via-[#060806]/35 to-transparent xl:w-[60%]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060806]/45 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060806]/25 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:px-10 xl:pt-32 xl:pb-14">
          <div className="flex flex-col justify-center xl:pt-10">
            <div className="hero-animate-copy max-w-xl lg:max-w-3xl xl:max-w-4xl [&_p]:!text-white">
              <p className="type-eyebrow text-white">
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-[2.25rem] leading-[0.9] font-bold tracking-[-0.02em] uppercase sm:text-5xl md:text-5xl lg:text-6xl xl:text-[5.25rem]">
                {hero.headlineLine1}
                <br />
                <span style={{ color: sage }}>{hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white sm:text-base lg:text-lg">
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
                    <p className="mt-0.5 text-[11px] leading-snug text-white sm:text-xs">
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
          className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition-colors hover:text-white xl:flex"
          aria-label="Scroll to next section"
        >
          <Mouse className="size-5" strokeWidth={1.4} />
          <ChevronDown className="size-3.5 animate-bounce" strokeWidth={1.6} />
        </a>
      </section>

      {/* Standards strip — auto-scroll marquee */}
      {/* <section
        aria-label="Engineered to standards"
        className="border-y border-[#e4e6e0] bg-[#f3f1eb]"
      >
        <div className={`${pageInset} py-5 sm:py-6`}>
          <div className="standards-marquee min-w-0">
            <ul className="standards-marquee__track items-center gap-x-10">
              {[...standards, ...standards].map((label, index) => (
                <li
                  key={`${label}-${index}`}
                  className="shrink-0 text-xs font-semibold tracking-[0.12em] text-[#252925] uppercase sm:text-[13px]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
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
            className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 items-stretch gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-4 xl:mt-10 xl:max-w-none xl:grid-cols-4 xl:gap-5"
            step={70}
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

          {/* Mobile / tablet / laptop: horizontal process rail */}
          <div className="mt-10 sm:mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Product ecosystem steps"
              showArrows
              showDots
              arrowPlacement="bottom"
              itemClassName="w-[min(85vw,17rem)] sm:w-[min(70vw,19rem)] md:w-[min(45vw,20rem)]"
              trackClassName="gap-5 px-1 pb-1"
            >
              {productEcosystem.steps.map((step) => (
                <EcosystemStepCard
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  blurb={step.blurb}
                  imageSrc={step.imageSrc}
                  imageLabel={step.image}
                  caption={step.caption}
                  highlighted={step.highlighted}
                />
              ))}
            </SnapCarousel>
          </div>

          {/* Desktop: full 5-step process with connectors between cards */}
          <RevealStagger
            className="mt-12 hidden gap-5 xl:grid xl:grid-cols-5 xl:gap-6"
            step={70}
          >
            {productEcosystem.steps.map((step, index) => (
              <div key={step.step} className="relative h-full min-w-0">
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
                    className="absolute top-[7.25rem] -right-4 z-10 size-6 -translate-y-1/2 rounded-full border border-[#7b963f] bg-[#fbfaf7] p-1 xl:-right-5"
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

      {/* 5. Featured Products — snap carousel on mobile, grid on desktop */}
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

          <div className="mt-10 sm:mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Featured products"
              showArrows
              showDots
              loop
              autoPlayMs={5500}
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {featuredProducts.products.map((product) => (
                <FeaturedProductRow key={product.name} {...product} />
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-10 hidden items-stretch gap-4 sm:mt-12 xl:grid xl:grid-cols-2 xl:gap-5 2xl:grid-cols-4"
            step={70}
            variant="fade"
          >
            {featuredProducts.products.map((product) => (
              <FeaturedProductRow key={product.name} {...product} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Customers & Partners */}
      <div className="cv-auto">
        <CustomersPartners />
      </div>

      {/* 8. Businesses & Companies */}
      <BusinessesCompanies />
    </div>
  );
}
