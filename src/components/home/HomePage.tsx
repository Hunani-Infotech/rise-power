import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  Play,
  Radio,
  Shield,
  Volume2,
  Weight,
  Zap,
} from "lucide-react";
import {
  book,
  capabilities,
  closingCta,
  customerPartners,
  featuredProducts,
  hero,
  missionDeployments,
  performanceMetrics,
  productEcosystem,
  threeMarkets,
  whyHydrogenWins,
} from "@/lib/home-content";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { StatGauge } from "./StatGauge";

const cream = "#f3f0e8";
const sage = "#6e7f42";
const forest = "#161c16";

const gaugeIcons = [Volume2, Leaf, Zap, Weight] as const;
const capabilityIcons = [Shield, Weight, Volume2, Radio] as const;

function WorldMap() {
  return (
    <svg
      viewBox="0 0 640 320"
      className="h-auto w-full text-[#c5c0b2]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M78 86c22-18 48-28 78-24 18 2 34 14 52 12 16-2 28-16 46-14 24 2 38 22 62 26 18 4 36-8 54-4 22 6 28 28 48 36 14 6 32 2 44 12 18 14 16 40-2 54-22 16-52 8-76 18-20 8-28 28-50 34-28 8-58-6-86-4-24 2-42 18-66 16-26-2-44-22-70-24-22-2-44 10-64 2-18-6-22-26-14-42 8-18 28-18 40-32 10-12 4-32 4-46z"
      />
      <path
        fill="currentColor"
        d="M318 72c28-8 54 6 80 4 22-2 40-16 62-12 26 4 40 28 64 34 16 4 34-4 48 8 18 16 8 44-10 56-26 16-58 4-84 16-18 8-26 26-48 30-32 6-62-12-90-8-18 2-32 16-52 12-16-4-22-22-18-38 6-22 30-18 44-36 10-14 4-32 4-52z"
      />
      <path
        fill="currentColor"
        d="M108 188c18-4 34 8 52 8 16 0 28-12 44-8 18 4 24 20 42 24 14 4 30-2 42 8 16 14 4 36-14 42-24 8-48-6-72 0-16 4-28 18-46 16-22-2-36-20-56-24-14-4-30 4-40-8-10-14 2-30 16-38 12-6 28 0 32-20z"
      />
      <circle cx="168" cy="108" r="6" fill={sage} />
      <circle cx="248" cy="96" r="5" fill={sage} />
      <circle cx="312" cy="128" r="6" fill={sage} />
      <circle cx="402" cy="92" r="5" fill={sage} />
      <circle cx="478" cy="118" r="6" fill={sage} />
      <circle cx="214" cy="196" r="5" fill={sage} />
      <circle cx="360" cy="210" r="6" fill={sage} />
      <circle cx="520" cy="168" r="5" fill={sage} />
    </svg>
  );
}

/** Desktop sections target ~1025px like the Figma Frame 1 export. */
const sectionShell =
  "flex min-h-[100svh] w-full flex-col justify-center lg:min-h-[1025px]";

export function HomePage() {
  return (
    <div className="flex w-full flex-col bg-[#f3f0e8] text-[#1a1c16]">
      {/* 1. HERO */}
      <section
        id="hero"
        className={`relative overflow-hidden text-[#f3efe4] ${sectionShell}`}
      >
        <PlaceholderMedia
          label="HERO imagery"
          className="absolute inset-0 min-h-full"
        />
        <div className="absolute inset-0 bg-[#0b0e0c]/70" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0e0c]/90 via-[#0b0e0c]/55 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-28 pb-16 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-[12vw] leading-[0.86] font-semibold tracking-[-0.03em] uppercase sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              {hero.headlineLine1}
              <br />
              <span style={{ color: sage }}>{hero.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#f3efe4]/85 sm:text-lg">
              {hero.subcopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex min-h-12 items-center justify-center px-7 text-sm font-semibold tracking-wide text-[#f3efe4] transition-colors hover:opacity-90"
                style={{ background: sage }}
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#f3efe4]/70 px-7 text-sm font-semibold tracking-wide text-[#f3efe4] transition-colors hover:bg-[#f3efe4]/10"
              >
                <Play className="size-4" />
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Performance Metrics */}
      <section
        id="performance-metrics"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <p
            className="text-center text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {performanceMetrics.kicker}
          </p>
          <h2 className="mt-3 text-center font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-7xl">
            {performanceMetrics.heading}
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {performanceMetrics.stats.map((item, index) => {
              const Icon = gaugeIcons[index] ?? Zap;
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <Icon className="mb-4 size-5" style={{ color: sage }} />
                  <StatGauge
                    value={item.value}
                    label={item.label}
                    percent={item.percent}
                  />
                </div>
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
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {threeMarkets.heading}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {threeMarkets.cards.map((item) => (
              <article
                key={item.title}
                className="group relative flex min-h-[28rem] flex-col overflow-hidden lg:min-h-[34rem]"
              >
                <PlaceholderMedia
                  label={`${item.title} imagery`}
                  className="absolute inset-0 min-h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0e0c]/90 via-[#0b0e0c]/35 to-transparent" />
                <div className="relative mt-auto flex flex-col p-6 text-[#f3efe4] lg:p-8">
                  <h3 className="font-display text-3xl tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#f3efe4]/85">
                    {item.blurb}
                  </p>
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
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: sage }}
                  >
                    Learn more
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
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
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {productEcosystem.heading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productEcosystem.steps.map((step, index) => (
              <article key={step.step} className="relative flex flex-col">
                <PlaceholderMedia
                  label={step.title}
                  aspect="aspect-square"
                />
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
        </div>
      </section>

      {/* 5. Featured Products */}
      <section
        id="featured-products"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {featuredProducts.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {featuredProducts.products.map((product) => (
              <article key={product.name} className="flex flex-col bg-white/60">
                <PlaceholderMedia
                  label={`${product.name} product shot`}
                  aspect="aspect-[4/3]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl tracking-wide uppercase">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#5c584e]">{product.tagline}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-[#ddd8cc] pt-5 text-center">
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        Output
                      </dt>
                      <dd className="mt-1 font-display text-lg" style={{ color: sage }}>
                        {product.watts}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        Weight
                      </dt>
                      <dd className="mt-1 font-display text-lg" style={{ color: sage }}>
                        {product.weight}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-[0.14em] text-[#5c584e] uppercase">
                        Runtime
                      </dt>
                      <dd className="mt-1 font-display text-lg" style={{ color: sage }}>
                        {product.runtime}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: sage }}
                  >
                    Learn more
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#5c584e]">{featuredProducts.footnote}</p>
        </div>
      </section>

      {/* 6. Capabilities */}
      <section
        id="capabilities"
        className={`bg-[#141a14] text-[#f3efe4] ${sectionShell}`}
      >
        <div className="mx-auto grid w-full max-w-[1440px] flex-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
            <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl">
              {capabilities.heading}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#f3efe4]/70">
              {capabilities.supportingCopy}
            </p>
            <ul className="mt-10 space-y-8">
              {capabilities.items.map((item, index) => {
                const Icon = capabilityIcons[index] ?? Shield;
                return (
                  <li key={item.title} className="flex gap-4">
                    <Icon
                      className="mt-0.5 size-6 shrink-0"
                      style={{ color: sage }}
                    />
                    <div>
                      <p className="font-display text-xl tracking-wide uppercase">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#f3efe4]/70">
                        {item.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <PlaceholderMedia
            label="Capabilities visual"
            className="min-h-80 lg:min-h-full"
          />
        </div>
      </section>

      {/* 7. Mission Deployments */}
      <section
        id="mission-deployments"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {missionDeployments.heading}
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            <WorldMap />
            <div className="grid grid-cols-2 gap-8">
              {missionDeployments.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-5xl font-semibold tracking-tight"
                    style={{ color: sage }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.16em] text-[#5c584e] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
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
            className="text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: sage }}
          >
            {whyHydrogenWins.kicker}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {whyHydrogenWins.heading}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="overflow-hidden bg-white/60">
              <div
                className="grid grid-cols-3 px-5 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase"
                style={{ background: sage, color: "#f3efe4" }}
              >
                <span>Metric</span>
                <span>{whyHydrogenWins.columns[0]}</span>
                <span>{whyHydrogenWins.columns[1]}</span>
              </div>
              {whyHydrogenWins.rows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-3 border-t border-[#ddd8cc] px-5 py-4 text-sm"
                >
                  <span className="font-medium">{row.metric}</span>
                  <span className="text-[#5c584e]">{row.diesel}</span>
                  <span className="font-semibold" style={{ color: sage }}>
                    {row.hydrogen}
                  </span>
                </div>
              ))}
            </div>
            <PlaceholderMedia
              label="Why hydrogen product comparison"
              aspect="aspect-[4/5] lg:aspect-auto lg:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* 9. Customer & Partners */}
      <section
        id="customer-partners"
        className={`${sectionShell} px-6 lg:px-10`}
        style={{ background: cream }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="max-w-4xl font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {customerPartners.heading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {customerPartners.quotes.map((item) => (
              <article key={item.role} className="flex flex-col overflow-hidden bg-white/70">
                <PlaceholderMedia
                  label={`${item.role} case study`}
                  aspect="aspect-[16/10]"
                />
                <blockquote className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-[#1a1c16]/85">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6">
                    <p className="font-display text-lg tracking-wide uppercase">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-[#5c584e]">{item.role}</p>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#ddd8cc] pt-10">
            {customerPartners.partners.map((partner) => (
              <span
                key={partner}
                className="text-xs font-semibold tracking-[0.2em] text-[#9a9484] uppercase"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA + book (part of Figma Footer frame height) */}
      <section
        id="demo"
        className="relative min-h-[70svh] overflow-hidden text-[#f3efe4] lg:min-h-[720px]"
      >
        <PlaceholderMedia
          label="Mission landscape imagery"
          className="absolute inset-0 min-h-full"
        />
        <div className="absolute inset-0 bg-[#0b0e0c]/65" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-[1440px] flex-col justify-end px-6 py-16 lg:min-h-[720px] lg:px-10">
          <h2 className="max-w-4xl font-display text-4xl leading-[0.92] font-semibold tracking-tight uppercase sm:text-5xl lg:text-7xl">
            {closingCta.headingLine1}
            <br />
            {closingCta.headingLine2}
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={closingCta.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center px-7 text-sm font-semibold tracking-wide text-[#f3efe4]"
              style={{ background: sage }}
            >
              {closingCta.primaryCta.label}
            </Link>
            <Link
              href={closingCta.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#f3efe4]/70 px-7 text-sm font-semibold tracking-wide hover:bg-[#f3efe4]/10"
            >
              <Play className="size-4" />
              {closingCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="book"
        className="border-t border-[#ddd8cc] px-6 py-12 lg:px-10"
        style={{ background: cream }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 sm:flex-row sm:items-center">
          <PlaceholderMedia
            label="Book cover"
            aspect="aspect-[3/4]"
            className="w-28 shrink-0 sm:w-32"
          />
          <div className="flex-1">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: sage }}
            >
              <BookOpen className="size-4" />
              {book.kicker}
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-tight uppercase">
              {book.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5c584e]">
              {book.blurb}
            </p>
          </div>
          <Link
            href={book.cta.href}
            className="inline-flex min-h-12 items-center justify-center px-7 text-sm font-semibold tracking-wide text-[#f3efe4]"
            style={{ background: forest }}
          >
            {book.cta.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
