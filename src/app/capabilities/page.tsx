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
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
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
  const color = light ? "#ffffff" : sage;

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
        className={`text-mm font-semibold tracking-[0.2em] uppercase ${light ? "text-white" : ""}`}
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
  animate = true,
}: {
  tab: CapabilityTab;
  index: number;
  animate?: boolean;
}) {
  const card = (
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
            <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-white sm:text-base">
              {tab.body}
            </p>
          </div>

          <span className="type-cta-ghost mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[#6e7f42] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out group-hover:bg-[#f3f0e8] group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.34)] group-focus-visible:bg-[#f3f0e8]">
            Learn More
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
              strokeWidth={1.8}
              aria-hidden
            />
          </span>
        </div>
      </Link>
  );

  if (!animate) return card;

  return (
    <Reveal variant="fade" delay={index * 70}>
      {card}
    </Reveal>
  );
}

function GalleryCard({
  item,
  index,
  animate = true,
}: {
  item: GalleryItem;
  index: number;
  animate?: boolean;
}) {
  const image = (
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
  );

  if (!animate) return image;

  return (
    <Reveal variant="fade" delay={index * 70}>
      {image}
    </Reveal>
  );
}

export default function CapabilitiesPage() {
  const { hero, proof, tabs, atmosphere, metricsBand, gallery } =
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

          <p className="mt-6 max-w-[580px] text-base leading-relaxed text-white sm:mt-7 sm:text-lg xl:text-xl">
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
          <Reveal variant="up">
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

          <Reveal variant="up" delay={80} className="mt-12 xl:hidden">
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
          </Reveal>
          <RevealStagger
            className="mt-12 hidden gap-5 xl:grid xl:grid-cols-2"
            step={70}
            variant="fade"
          >
            {tabs.map((tab, index) => (
              <PillarCard key={tab.id} tab={tab} index={index} animate={false} />
            ))}
          </RevealStagger>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/25 via-[#07100d]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/12 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[300px] max-w-[1440px] items-end px-6 py-12 sm:min-h-[380px] sm:py-14 lg:min-h-[480px] lg:px-10 lg:py-20">
          <Reveal variant="up">
            <div className="max-w-[640px]">
              <SectionEyebrow light>{atmosphere.eyebrow}</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                {atmosphere.headingBefore}{" "}
                <span style={{ color: sage }}>{atmosphere.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                {atmosphere.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUIET METRICS */}
      <section className="relative overflow-hidden border-y border-[#ddd8cc] py-20 sm:py-24 lg:py-28">
        <Image
          src={metricsBand.imageSrc}
          alt={metricsBand.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4ec]/94 via-[#f3f0e8]/90 to-[#f7f4ec]/94" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6e7f42]/35 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6e7f42]/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <div className="flex flex-col items-center text-center">
              <SectionEyebrow center>
                {performanceMetrics.eyebrow}
              </SectionEyebrow>
              <div
                className="mt-6 h-px w-14"
                style={{ background: sage }}
                aria-hidden
              />
            </div>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {performanceMetrics.gauges.map((gauge, index) => {
              const Icon = metricIcons[index] ?? ShieldCheck;
              const isLast = index === performanceMetrics.gauges.length - 1;
              const isLeftCol = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <Reveal
                  key={gauge.title}
                  as="li"
                  variant="fade"
                  delay={index * 90}
                  className={[
                    "group relative flex flex-col items-center px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-6 lg:py-2 xl:px-10",
                    !isLast
                      ? "max-sm:border-b max-sm:border-[#d5d0c4]/90"
                      : "",
                    isTopRow
                      ? "sm:border-b sm:border-[#d5d0c4]/90 lg:border-b-0"
                      : "",
                    isLeftCol
                      ? "sm:border-r sm:border-[#d5d0c4]/90"
                      : "",
                    !isLeftCol && !isLast
                      ? "lg:border-r lg:border-[#d5d0c4]/90"
                      : "",
                  ].join(" ")}
                >
                  <span
                    className="mb-5 font-display text-[11px] font-semibold tracking-[0.28em] text-[#8a9186] uppercase transition-colors duration-500 group-hover:text-[#6e7f42]"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="relative mb-6 grid size-14 place-items-center rounded-full border bg-[#fbfaf7]/70 transition-all duration-500 group-hover:scale-[1.04] group-hover:bg-white/90 sm:size-16"
                    style={{ borderColor: "rgba(110, 127, 66, 0.45)" }}
                    aria-hidden
                  >
                    <span
                      className="absolute inset-[3px] rounded-full border border-[#6e7f42]/15 transition-opacity duration-500 group-hover:border-[#6e7f42]/35"
                      aria-hidden
                    />
                    <Icon
                      className="relative size-5 sm:size-[1.35rem]"
                      strokeWidth={1.5}
                      style={{ color: sage }}
                    />
                  </div>

                  <p className="font-display text-[2.65rem] leading-none font-bold tracking-tight text-[#101713] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                    {gauge.value}
                    <span
                      className="ml-1.5 align-baseline font-display text-base font-semibold tracking-[0.14em] uppercase sm:text-lg lg:text-xl"
                      style={{ color: sage }}
                    >
                      {gauge.unit}
                    </span>
                  </p>

                  <p
                    className="mt-4 max-w-[14rem] text-[13px] leading-relaxed font-medium tracking-[0.02em] sm:mt-5 sm:text-sm"
                    style={{ color: "#5f6b52" }}
                  >
                    {gauge.title}
                  </p>
                </Reveal>
              );
            })}
          </ul>
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
          <Reveal variant="up">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow center>Visual Proof</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl">
                Systems in{" "}
                <span style={{ color: sage }}>Context.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-12 xl:hidden">
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
          </Reveal>
          <RevealStagger
            className="mt-12 hidden gap-5 xl:grid xl:grid-cols-4"
            step={70}
            variant="fade"
          >
            {gallery.map((item, index) => (
              <GalleryCard
                key={item.src}
                item={item}
                index={index}
                animate={false}
              />
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
