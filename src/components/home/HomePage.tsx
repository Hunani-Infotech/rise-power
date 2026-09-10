import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Leaf,
  Mouse,
  Play,
  Shield,
  Volume2,
  Weight,
  Zap,
  Droplets,
  Wrench,
  RefreshCw,
  Crosshair,
  Gauge,
  Recycle,
  Lock,
  Building2,
  Home,
} from "lucide-react";
import {
  closingCta,
  customerPartners,
  featuredProducts,
  hero,
  heroImageSrc,
  missionDeployments,
  performanceMetrics,
  productEcosystem,
  productUiLabels,
  threeMarkets,
  whyHydrogenWins,
} from "@/lib/home-content";
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import { MissionMap } from "./MissionMap";
import { PerformanceMetricCard } from "./PerformanceMetricCard";
import { PlaceholderMedia } from "./PlaceholderMedia";

const cream = "#f3f0e8";
const sage = "#6e7f42";
/** Hero accent from Frame 1 reference (slightly brighter olive). */
const heroSage = "#849363";
const forest = "#161c16";

const gaugeIcons = [Volume2, Leaf, Crosshair, Weight] as const;
const marketIcons = [Shield, Building2, Home] as const;
const benefitIcons = [Leaf, Volume2, Wrench, RefreshCw] as const;
const iconBarIcons = [Crosshair, Gauge, Recycle, Zap, Lock] as const;
const heroChipIcons = [Leaf, Crosshair, Volume2, Shield] as const;
const ctaChipIcons = [Leaf, Volume2, RefreshCw, Crosshair] as const;

/** Desktop sections target ~1025px like the Figma Frame 1 export. */
const sectionShell =
  "flex min-h-[100svh] w-full flex-col justify-center lg:min-h-[1025px]";

export function HomePage() {
  return (
    <div className="flex w-full flex-col bg-[#f3f0e8] text-[#1a1c16]">
      {/* 1. HERO */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col overflow-hidden text-white lg:min-h-[1025px]"
      >
        <Image
          src={heroImageSrc}
          alt="Rise Power tactical field deployment"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[58%_center] scale-105"
        />
        {/* Soft grade + left copy lane so UI text stays readable over the photo */}
        <div className="absolute inset-0 bg-[#060806]/25" />
        <div className="absolute inset-0 bg-linear-to-r from-[#060806]/92 via-[#060806]/55 to-transparent lg:w-[58%] lg:via-[#060806]/72" />
        <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-[#060806]/40 via-transparent to-transparent lg:w-[45%]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#060806]/70 via-[#060806]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#060806]/55 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pt-28 pb-10 lg:px-10 lg:pt-32 lg:pb-12">
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-xl lg:max-w-2xl">
              <p
                className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
                style={{ color: heroSage }}
              >
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-[3.25rem] leading-[0.9] font-bold tracking-[-0.02em] uppercase sm:text-7xl md:text-8xl lg:text-[6.75rem]">
                {hero.headlineLine1}
                <br />
                <span style={{ color: heroSage }}>{hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base lg:text-lg">
                {hero.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90"
                  style={{ background: heroSage }}
                >
                  <span className="grid size-5 place-items-center rounded-full border border-white/80">
                    <Play className="size-2.5 fill-current" />
                  </span>
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/75 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white/10"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-8 lg:mt-0 lg:pb-2">
            {hero.chips.map((chip, index) => {
              const Icon = heroChipIcons[index] ?? Leaf;
              return (
                <div key={chip.title} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 size-5 shrink-0"
                    strokeWidth={1.6}
                    style={{ color: heroSage }}
                  />
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
          className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition-colors hover:text-white"
          aria-label="Scroll to next section"
        >
          <Mouse className="size-5" strokeWidth={1.4} />
          <ChevronDown className="size-3.5 animate-bounce" strokeWidth={1.6} />
        </a>
      </section>

      {/* 2. Performance Metrics — Built to Outperform */}
      <section
        id="performance-metrics"
        className={`relative overflow-hidden ${sectionShell} px-6 lg:px-10`}
        style={{ background: "#fafaf8" }}
      >
        {/* Decorative green dotted wave mesh — left + right, fades center */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[8%] h-[42%] select-none"
          aria-hidden
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="perf-dot-mesh"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.15" fill="#6e7f42" />
              </pattern>
              <linearGradient id="perf-dot-fade-x" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="18%" stopColor="white" stopOpacity="0.85" />
                <stop offset="38%" stopColor="white" stopOpacity="0" />
                <stop offset="62%" stopColor="white" stopOpacity="0" />
                <stop offset="82%" stopColor="white" stopOpacity="0.85" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <mask id="perf-dot-mask">
                <rect width="1440" height="420" fill="url(#perf-dot-fade-x)" />
              </mask>
            </defs>
            <g mask="url(#perf-dot-mask)" opacity="0.42">
              <path
                d="M0 210 C180 80 360 80 540 210 C720 340 900 340 1080 210 C1260 80 1380 100 1440 160 L1440 420 L0 420 Z"
                fill="url(#perf-dot-mesh)"
              />
              <path
                d="M0 140 C200 40 400 40 560 150 C740 280 920 280 1100 150 C1260 50 1360 70 1440 110 L1440 0 L0 0 Z"
                fill="url(#perf-dot-mesh)"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p
            className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
            style={{ color: sage }}
          >
            {performanceMetrics.eyebrow}
          </p>
          <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-7xl">
            {performanceMetrics.headingBefore}{" "}
            <span style={{ color: sage }}>{performanceMetrics.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {performanceMetrics.body}
          </p>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8">
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
          </div>
        </div>
      </section>

      {/* 3. Three Markets */}
      <section
        id="three-markets"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {threeMarkets.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {threeMarkets.headingBefore}{" "}
            <span style={{ color: sage }}>{threeMarkets.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {threeMarkets.body}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {threeMarkets.cards.map((item, index) => {
              const Icon = marketIcons[index] ?? Shield;
              return (
                <article
                  key={item.title}
                  className="group relative flex min-h-[28rem] flex-col overflow-hidden lg:min-h-[34rem]"
                >
                  <PlaceholderMedia
                    label={item.image}
                    className="absolute inset-0 min-h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0b0e0c]/92 via-[#0b0e0c]/40 to-transparent" />
                  <div className="relative mt-auto flex flex-col p-6 text-[#f3efe4] lg:p-8">
                    <Icon className="mb-4 size-7" style={{ color: sage }} />
                    <h3 className="font-display text-3xl tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#f3efe4]/80">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: sage }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase"
                      style={{ color: sage }}
                    >
                      {item.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Product Ecosystem */}
      <section
        id="product-ecosystem"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {productEcosystem.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {productEcosystem.headingBefore}{" "}
            <span style={{ color: sage }}>{productEcosystem.headingAccent}</span>{" "}
            {productEcosystem.headingAfter}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {productEcosystem.body}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productEcosystem.steps.map((step, index) => (
              <article key={step.step} className="relative flex flex-col">
                <div className="relative">
                  <PlaceholderMedia label={step.image} aspect="aspect-square" />
                  {step.caption ? (
                    <p className="absolute inset-x-0 bottom-0 bg-[#0b0e0c]/75 px-2 py-1.5 text-center text-[10px] font-semibold tracking-[0.14em] text-[#f3efe4] uppercase">
                      {step.caption}
                    </p>
                  ) : null}
                </div>
                <p
                  className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: sage }}
                >
                  {step.step}
                </p>
                <h3 className="mt-2 font-display text-xl tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c584e]">
                  {step.blurb}
                </p>
                {index < productEcosystem.steps.length - 1 ? (
                  <ArrowRight
                    className="absolute top-16 -right-3 hidden size-5 lg:block"
                    style={{ color: sage }}
                    aria-hidden="true"
                  />
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#ddd8cc] pt-12 lg:grid-cols-[0.9fr_1.2fr_0.7fr] lg:items-center">
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: sage }}
              >
                {productEcosystem.howItWorks.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight font-bold tracking-tight uppercase sm:text-4xl">
                {productEcosystem.howItWorks.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5c584e]">
                {productEcosystem.howItWorks.body}
              </p>
              <Link
                href={productEcosystem.howItWorks.cta.href}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide text-[#f3efe4] uppercase"
                style={{ background: forest }}
              >
                {productEcosystem.howItWorks.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative">
              <PlaceholderMedia
                label={productEcosystem.howItWorks.diagramTitle}
                aspect="aspect-[4/3]"
              />
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {productEcosystem.howItWorks.diagramLabels.map((label) => (
                  <li
                    key={label}
                    className="border border-[#ddd8cc] bg-white/50 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: sage }}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#141a14] p-6 text-[#f3efe4]">
              <Droplets className="size-6" style={{ color: sage }} />
              <h4 className="mt-4 font-display text-2xl tracking-wide uppercase">
                {productEcosystem.howItWorks.sideCard.title}
              </h4>
              <p className="mt-2 text-sm text-[#f3efe4]/70">
                {productEcosystem.howItWorks.sideCard.subtitle}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {productEcosystem.howItWorks.sideCard.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: sage }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section
        id="featured-products"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {featuredProducts.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {featuredProducts.headingBefore}{" "}
            <span style={{ color: sage }}>{featuredProducts.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {featuredProducts.body}
          </p>

          <div className="mt-12 space-y-8">
            {featuredProducts.products.map((product, index) => (
              <article
                key={product.name}
                className={`grid gap-0 overflow-hidden border border-[#ddd8cc] bg-white/50 lg:grid-cols-[1.1fr_0.9fr_0.85fr] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <PlaceholderMedia
                  label={product.image}
                  aspect="aspect-[4/3] lg:aspect-auto lg:min-h-[22rem]"
                />
                <div className="flex flex-col justify-center border-[#ddd8cc] p-6 lg:border-x lg:p-8">
                  <h3 className="font-display text-3xl tracking-wide uppercase">
                    {product.name}
                    <span style={{ color: sage }}>{product.trademark}</span>
                  </h3>
                  <p
                    className="mt-1 text-xs font-semibold tracking-[0.16em] uppercase"
                    style={{ color: sage }}
                  >
                    {product.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5c584e]">
                    {product.body}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-[#ddd8cc] pt-5 text-center">
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        {productUiLabels.runtime}
                      </dt>
                      <dd
                        className="mt-1 font-display text-xl"
                        style={{ color: sage }}
                      >
                        {product.runtime}
                      </dd>
                      <dd className="text-[10px] text-[#5c584e]">
                        {product.runtimeNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        {productUiLabels.weight}
                      </dt>
                      <dd
                        className="mt-1 font-display text-xl"
                        style={{ color: sage }}
                      >
                        {product.weight}
                      </dd>
                      <dd className="text-[10px] text-[#5c584e]">
                        {product.weightNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        {productUiLabels.power}
                      </dt>
                      <dd
                        className="mt-1 font-display text-xl"
                        style={{ color: sage }}
                      >
                        {product.power}
                      </dd>
                      <dd className="text-[10px] text-[#5c584e]">
                        {product.powerNote}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col justify-center bg-[#141a14] p-6 text-[#f3efe4] lg:p-8">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#f3efe4]/65 uppercase">
                    {productUiLabels.idealFor}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {product.idealFor.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full"
                          style={{ background: sage }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href={product.detailsHref}
                      className="inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold tracking-wide text-[#141a14] uppercase"
                      style={{ background: sage }}
                    >
                      {productUiLabels.viewDetails}
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href={product.datasheetHref}
                      className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#f3efe4]/25 px-5 text-sm font-semibold tracking-wide text-[#f3efe4] uppercase hover:bg-[#f3efe4]/5"
                    >
                      <Download className="size-4" />
                      {productUiLabels.downloadSpec}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Capabilities */}
      <section
        id="capabilities"
        className={`bg-[#141a14] text-[#f3efe4] ${sectionShell}`}
      >
        <CapabilitiesTabs />
      </section>

      {/* 7. Mission Deployments */}
      <section
        id="mission-deployments"
        className={`bg-[#0f140f] text-[#f3efe4] ${sectionShell} px-6 lg:px-10`}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {missionDeployments.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {missionDeployments.headingBefore}{" "}
            <span style={{ color: sage }}>{missionDeployments.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#f3efe4]/65 sm:text-base">
            {missionDeployments.body}
          </p>

          <MissionMap />

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {missionDeployments.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p
                  className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{ color: sage }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold tracking-[0.16em] uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-[#f3efe4]/50">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Hydrogen Wins */}
      <section
        id="why-hydrogen-wins"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {whyHydrogenWins.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {whyHydrogenWins.headingBefore}{" "}
            <span style={{ color: sage }}>{whyHydrogenWins.headingAccent}</span>{" "}
            {whyHydrogenWins.headingAfter}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {whyHydrogenWins.body}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="overflow-hidden border border-[#ddd8cc] bg-white/60">
              <div
                className="px-5 py-4 text-center text-[12px] font-semibold tracking-[0.18em] uppercase"
                style={{ background: sage, color: "#f3efe4" }}
              >
                {whyHydrogenWins.tableHeading}
              </div>
              <div
                className="grid grid-cols-3 px-5 py-3 text-[11px] font-semibold tracking-[0.14em] uppercase"
                style={{ background: forest, color: "#f3efe4" }}
              >
                {whyHydrogenWins.columns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </div>
              {whyHydrogenWins.rows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-3 border-t border-[#ddd8cc] px-5 py-4 text-sm"
                >
                  <span className="font-medium">{row.metric}</span>
                  <span className="font-semibold" style={{ color: sage }}>
                    {row.hydrogen}
                  </span>
                  <span className="text-[#5c584e]">{row.diesel}</span>
                </div>
              ))}
            </div>

            <div>
              <PlaceholderMedia
                label={whyHydrogenWins.image}
                aspect="aspect-[4/3]"
              />
              <ul className="mt-6 space-y-4">
                {whyHydrogenWins.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index] ?? Leaf;
                  return (
                    <li key={benefit.title} className="flex gap-3">
                      <Icon
                        className="mt-0.5 size-5 shrink-0"
                        style={{ color: sage }}
                      />
                      <div>
                        <p className="text-sm font-semibold tracking-wide uppercase">
                          {benefit.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#5c584e]">
                          {benefit.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[#ddd8cc] pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {whyHydrogenWins.iconBar.map((item, index) => {
              const Icon = iconBarIcons[index] ?? Crosshair;
              return (
                <div key={item.title} className="text-center">
                  <Icon
                    className="mx-auto size-6"
                    style={{ color: sage }}
                    strokeWidth={1.5}
                  />
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.16em] uppercase">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5c584e]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Customers & Partners */}
      <section
        id="customer-partners"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {customerPartners.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {customerPartners.headingBefore}{" "}
            <span style={{ color: sage }}>{customerPartners.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {customerPartners.body}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customerPartners.cases.map((item) => (
              <article
                key={item.category}
                className="flex flex-col overflow-hidden bg-[#141a14] text-[#f3efe4]"
              >
                <PlaceholderMedia label={item.image} aspect="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5">
                  <p
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase"
                    style={{ color: sage }}
                  >
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/70">
                    {item.body}
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-4">
                    {item.stats.map((stat) => (
                      <li key={stat.value}>
                        <p
                          className="text-sm font-semibold tracking-wide"
                          style={{ color: sage }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs text-[#f3efe4]/55">{stat.label}</p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold tracking-wide uppercase"
                    style={{ color: sage }}
                  >
                    {productUiLabels.viewSuccessStory}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-[#ddd8cc] pt-10">
            <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-[#9a9484] uppercase">
              {customerPartners.partnerHeading}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {customerPartners.partners.map((partner) => (
                <span
                  key={partner}
                  className="text-[10px] font-semibold tracking-[0.18em] text-[#9a9484] uppercase sm:text-xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section
        id="demo"
        className={`relative overflow-hidden text-[#f3efe4] ${sectionShell}`}
      >
        <PlaceholderMedia
          label={closingCta.image}
          className="absolute inset-0 min-h-full"
        />
        <div className="absolute inset-0 bg-[#0b0e0c]/70" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="max-w-xl font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                {closingCta.headingBefore}
                <br />
                <span style={{ color: sage }}>{closingCta.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#f3efe4]/80 sm:text-base">
                {closingCta.body}
              </p>
            </div>
            <div className="border border-white/15 bg-[#0b0e0c]/55 p-6 backdrop-blur-sm sm:p-8">
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: sage }}
              >
                {closingCta.panelEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-wide uppercase sm:text-3xl">
                {closingCta.panelHeading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/75">
                {closingCta.panelBody}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={closingCta.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide text-[#f3efe4] uppercase"
                  style={{ background: sage }}
                >
                  {closingCta.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href={closingCta.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#f3efe4]/70 px-6 text-sm font-semibold tracking-wide uppercase hover:bg-[#f3efe4]/10"
                >
                  <Download className="size-4" />
                  {closingCta.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {closingCta.chips.map((chip, index) => {
              const Icon = ctaChipIcons[index] ?? Leaf;
              return (
                <div
                  key={chip.title}
                  className="flex items-start gap-3 border border-white/15 bg-[#0b0e0c]/45 px-4 py-3"
                >
                  <Icon className="mt-0.5 size-5 shrink-0" style={{ color: sage }} />
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase">
                      {chip.title}
                    </p>
                    <p className="mt-1 text-[11px] text-[#f3efe4]/65">
                      {chip.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
