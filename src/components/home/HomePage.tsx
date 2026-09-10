import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Caravan,
  ChevronDown,
  Construction,
  Crosshair,
  Droplets,
  Home,
  HousePlug,
  Leaf,
  Mouse,
  Pickaxe,
  Plane,
  Play,
  Radio,
  RadioTower,
  RefreshCw,
  Shield,
  Tent,
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
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import { ClosingCta } from "./ClosingCta";
import { CustomersPartners } from "./CustomersPartners";
import { EcosystemStepCard } from "./EcosystemStepCard";
import { FeaturedProductRow } from "./FeaturedProductRow";
import { FuelCellDiagram } from "./FuelCellDiagram";
import { MarketCard } from "./MarketCard";
import { MissionMap } from "./MissionMap";
import { PerformanceMetricCard } from "./PerformanceMetricCard";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { WhyHydrogenWins } from "./WhyHydrogenWins";

const cream = "#f3f0e8";
const sage = "#6e7f42";
/** Hero accent from Frame 1 reference (slightly brighter olive). */
const heroSage = "#849363";
const forest = "#161c16";

const gaugeIcons = [Volume2, Leaf, Crosshair, Weight] as const;
const marketBadgeIcons = [Shield, Building2, Home] as const;
const marketPointIcons = [
  [Radio, Plane, Crosshair],
  [Construction, RadioTower, Pickaxe],
  [Tent, Caravan, HousePlug],
] as const;
const heroChipIcons = [Leaf, Crosshair, Volume2, Shield] as const;

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
        className={`relative overflow-hidden ${sectionShell} px-6 lg:px-10`}
        style={{ background: "#f7f5ef" }}
      >
        {/* Faint hex pattern on left/right edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[18%] opacity-[0.14]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cpath fill='none' stroke='%239a9484' stroke-width='1' d='M28 2 L52 16 V48 L28 62 L4 48 V16 Z'/%3E%3C/svg%3E\")",
            backgroundSize: "56px 64px",
            maskImage:
              "linear-gradient(to right, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, transparent 90%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[18%] opacity-[0.14]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cpath fill='none' stroke='%239a9484' stroke-width='1' d='M28 2 L52 16 V48 L28 62 L4 48 V16 Z'/%3E%3C/svg%3E\")",
            backgroundSize: "56px 64px",
            maskImage:
              "linear-gradient(to left, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 0%, transparent 90%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p
            className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
            style={{ color: sage }}
          >
            {threeMarkets.eyebrow}
          </p>
          <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {threeMarkets.headingBefore}{" "}
            <span style={{ color: sage }}>{threeMarkets.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {threeMarkets.body}
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {threeMarkets.cards.map((item, index) => (
              <MarketCard
                key={item.title}
                title={item.title}
                points={item.points}
                pointIcons={[...marketPointIcons[index]]}
                href={item.href}
                cta={item.cta}
                imageSrc={item.imageSrc}
                imageLabel={item.image}
                badgeIcon={marketBadgeIcons[index] ?? Shield}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Ecosystem */}
      <section
        id="product-ecosystem"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: "#ffffff" }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-5">
            {productEcosystem.steps.map((step, index) => (
              <div key={step.step} className="relative">
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
                    className="absolute top-[4.5rem] -right-3 z-10 hidden size-4 lg:block"
                    strokeWidth={1.75}
                    style={{ color: "#9a9484" }}
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div
            className="mt-16 grid gap-8 border border-[#e4e0d6] bg-[#f7f5ef]/70 p-6 sm:p-8 lg:mt-20 lg:grid-cols-[0.95fr_1.15fr_0.75fr] lg:items-stretch lg:gap-10 lg:p-10"
          >
            <div className="flex flex-col justify-center">
              <p
                className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase"
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
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
                style={{ color: sage }}
              >
                {productEcosystem.howItWorks.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <FuelCellDiagram
              diagramTitle={productEcosystem.howItWorks.diagramTitle}
              diagramLabels={productEcosystem.howItWorks.diagramLabels}
              diagramImageSrc={productEcosystem.howItWorks.diagramImageSrc}
            />

            <div className="flex flex-col justify-center bg-[#141a14] p-6 text-[#f3efe4] sm:p-7">
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
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section
        id="featured-products"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: "#ffffff" }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center font-display text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
            style={{ color: sage }}
          >
            {featuredProducts.eyebrow}
          </p>
          <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {featuredProducts.headingBefore}{" "}
            <span style={{ color: sage }}>{featuredProducts.headingAccent}</span>{" "}
            {featuredProducts.headingAfter}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {featuredProducts.body}
          </p>

          <div className="mt-12 space-y-6 lg:mt-14 lg:space-y-8">
            {featuredProducts.products.map((product) => (
              <FeaturedProductRow key={product.name} {...product} />
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
      <WhyHydrogenWins />

      {/* 9. Customers & Partners */}
      <CustomersPartners />

      {/* 10. Closing CTA */}
      <ClosingCta />
    </div>
  );
}
