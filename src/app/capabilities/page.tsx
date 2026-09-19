import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  VolumeX,
  Weight,
} from "lucide-react";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { capabilities, performanceMetrics } from "@/lib/home-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Engineering, integration, field deployment, and safety — hydrogen power systems built for real operating environments.",
  path: "/capabilities",
});

const sage = "#6e7f42";
const heroCta = "#849363";

function SectionEyebrow({
  children,
  center = false,
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  const color = light ? "#a8b87a" : sage;

  return (
    <div
      className={`flex items-center gap-3 ${
        center ? "justify-center" : "justify-start"
      }`}
    >
      <span
        className="font-display text-2xl leading-none"
        style={{ color }}
        aria-hidden="true"
      >
        ⌁
      </span>
      <p
        className="text-mm font-semibold tracking-[0.2em] uppercase"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

const metricIcons = [VolumeX, Leaf, ShieldCheck, Weight] as const;

type CapabilityTab = (typeof capabilities.tabs)[number];
type GalleryItem = (typeof capabilities.gallery)[number];

function PillarCard({
  tab,
  index,
}: {
  tab: CapabilityTab;
  index: number;
}) {
  return (
    <Reveal variant="fade" delay={index * 70}>
      <Link
        href={tab.href}
        className="group relative block min-h-[280px] scroll-mt-28 overflow-hidden rounded-xl bg-[#101713] sm:min-h-[320px] lg:min-h-[340px]"
      >
        <Image
          src={tab.imageSrc}
          alt={tab.imageAlt}
          fill
          sizes="(min-width: 1280px) 50vw, (min-width: 640px) 70vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/92 via-[#07100d]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/70 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-8 lg:p-9">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="font-display text-4xl leading-none font-bold"
                style={{ color: sage }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="h-px w-16"
                style={{ background: sage }}
                aria-hidden
              />
            </div>
            <h3 className="mt-5 max-w-[360px] font-display text-3xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-4xl">
              {tab.title}
            </h3>
            <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-white/85 sm:text-base">
              {tab.body}
            </p>
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white uppercase">
            Learn More
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: sage }}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) {
  return (
    <Reveal variant="fade" delay={index * 70}>
      <div
        className={`relative overflow-hidden rounded-xl bg-[#101713] ${
          index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] sm:mt-8"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 88vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
    </Reveal>
  );
}

export default function CapabilitiesPage() {
  const { hero, proof, tabs, atmosphere, metricsBand, gallery, closingBand } =
    capabilities;

  return (
    <main id="capabilities" className="scroll-mt-28 bg-[#fbfaf7] text-[#101713]">
      <StackedPageHero
        imageSrc={hero.imageSrc}
        imageAlt="Rise Power engineering capabilities"
        imageClassName="object-cover object-[center_30%]"
      >
        <div className="hero-animate-copy max-w-[720px]">
          <SectionEyebrow light>{hero.eyebrow}</SectionEyebrow>

          <h1 className="mt-6 font-display text-[42px] leading-[0.9] font-bold tracking-tight uppercase sm:mt-7 sm:text-[64px] xl:text-[82px] 2xl:text-[94px]">
            {hero.headlineLine1}
            <br />
            <span style={{ color: sage }}>{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-[580px] text-base leading-relaxed text-white/80 sm:mt-7 sm:text-lg xl:text-xl">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: heroCta }}
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-5" aria-hidden />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-8 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* FOUR PILLARS */}
      <section
        id="pillars"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -top-20 -left-24 size-72 rounded-full border border-[#dfe5d8]" />
          <div className="absolute -top-12 -left-16 size-56 rounded-full border border-[#e5e9df]" />
          <div className="absolute -right-28 bottom-[-100px] size-80 rounded-full border border-[#dfe5d8]" />
          <div className="absolute -right-16 bottom-[-60px] size-64 rounded-full border border-[#e5e9df]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="fade">
            <div className="mx-auto max-w-5xl text-center">
              <SectionEyebrow center>{capabilities.eyebrow}</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                {capabilities.headingBefore}{" "}
                <span style={{ color: sage }}>{capabilities.headingAccent}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#626a63] sm:text-lg">
                {capabilities.body}
              </p>
            </div>
          </Reveal>

          {/* Deep-link anchors for /capabilities#engineering etc. */}
          {tabs.map((tab) => (
            <div
              key={`anchor-${tab.id}`}
              id={tab.id}
              className="h-0 scroll-mt-28"
              aria-hidden
            />
          ))}

          <div className="mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Capability pillars"
              showArrows
              showDots
              itemClassName="w-[min(100%,22.5rem)] sm:w-[min(85vw,26rem)] md:w-[min(70vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {tabs.map((tab, index) => (
                <PillarCard key={tab.id} tab={tab} index={index} />
              ))}
            </SnapCarousel>
          </div>
          <div className="mt-12 hidden gap-5 xl:grid xl:grid-cols-2">
            {tabs.map((tab, index) => (
              <PillarCard key={tab.id} tab={tab} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE STRIP */}
      <section className="relative min-h-[300px] overflow-hidden bg-[#0a100e] text-white sm:min-h-[380px] lg:min-h-[480px]">
        <Image
          src={atmosphere.imageSrc}
          alt={atmosphere.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/92 via-[#07100d]/55 to-[#07100d]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/60 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[300px] max-w-[1440px] items-end px-6 py-16 sm:min-h-[380px] lg:min-h-[480px] lg:px-10 lg:py-20">
          <Reveal variant="up">
            <div className="max-w-[640px]">
              <SectionEyebrow light>{atmosphere.eyebrow}</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                {atmosphere.headingBefore}{" "}
                <span style={{ color: sage }}>{atmosphere.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {atmosphere.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUIET METRICS */}
      <section className="relative overflow-hidden border-y border-[#e4e8e1] py-16 sm:py-20">
        <Image
          src={metricsBand.imageSrc}
          alt={metricsBand.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[#f3f0e8]/88" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <p
              className="text-center text-[13px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: sage }}
            >
              {performanceMetrics.eyebrow}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
            {performanceMetrics.gauges.map((gauge, index) => {
              const Icon = metricIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={gauge.title} variant="fade" delay={index * 80}>
                  <div className="text-center lg:text-left">
                    <div
                      className="mx-auto mb-4 grid size-10 place-items-center rounded-full border bg-white/50 lg:mx-0"
                      style={{ borderColor: sage }}
                      aria-hidden
                    >
                      <Icon
                        className="size-4"
                        strokeWidth={1.75}
                        style={{ color: sage }}
                      />
                    </div>
                    <p className="font-display text-4xl font-bold tracking-tight text-[#101713] sm:text-5xl">
                      {gauge.value}
                      <span
                        className="ml-1.5 font-display text-lg font-semibold tracking-[0.08em] uppercase"
                        style={{ color: sage }}
                      >
                        {gauge.unit}
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#626a63]">
                      {gauge.title}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIELD VALIDATION */}
      <section className="relative overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>{proof.eyebrow}</SectionEyebrow>
            <h2 className="mt-7 max-w-3xl font-display text-4xl leading-[0.94] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              {proof.headingBefore}
              <br />
              <span style={{ color: sage }}>{proof.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#687068] sm:text-lg">
              {proof.body}
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: sage }}
            >
              Request a Briefing
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="relative aspect-[1.05/1] overflow-hidden rounded-xl bg-[#dfe4dc] sm:aspect-auto sm:min-h-[380px]">
                <Image
                  src={proof.imageSrc}
                  alt={proof.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#dfe4dc] sm:aspect-auto sm:min-h-[380px]">
                <Image
                  src={proof.secondaryImageSrc}
                  alt={proof.secondaryImageAlt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="overflow-hidden bg-[#f3f0e8] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="fade">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow center>Visual Proof</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl">
                Systems in{" "}
                <span style={{ color: sage }}>Context.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Photo gallery"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {gallery.map((item, index) => (
                <GalleryCard key={item.src} item={item} index={index} />
              ))}
            </SnapCarousel>
          </div>
          <div className="mt-12 hidden gap-5 xl:grid xl:grid-cols-4">
            {gallery.map((item, index) => (
              <GalleryCard key={item.src} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section className="relative overflow-hidden bg-[#0a100e] py-14 text-white sm:py-16 lg:py-24">
        <Image
          src={closingBand.imageSrc}
          alt={closingBand.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[#07100d]/75" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <Reveal variant="fade">
            <SectionEyebrow center light>
              Ready to discuss your requirements?
            </SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Engineering partnership from{" "}
              <span style={{ color: sage }}>prototype to deployment.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Our engineering team is ready to explore how hydrogen power can
              support your mission. Tell us your operating environment and we
              will respond with the relevant capability brief.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                style={{ background: heroCta }}
              >
                Request a Briefing
                <ArrowRight className="size-5" aria-hidden />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-8 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                Review Products
                <ArrowRight className="size-5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
