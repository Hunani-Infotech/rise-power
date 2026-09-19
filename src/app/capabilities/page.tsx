import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

type CapabilityTab = (typeof capabilities.tabs)[number];
type GalleryItem = (typeof capabilities.gallery)[number];

function PillarRow({
  tab,
  index,
}: {
  tab: CapabilityTab;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const imageFirst = index % 2 === 0;

  return (
    <article
      id={tab.id}
      className="group scroll-mt-28 grid overflow-hidden rounded-[2px] border border-white/10 bg-[#f7f6f2] lg:grid-cols-2"
    >
      {/* Cinematic image */}
      <Reveal
        variant={imageFirst ? "left" : "right"}
        delay={40}
        className={`relative min-h-[220px] overflow-hidden bg-[#0a1016] sm:min-h-[280px] lg:min-h-[380px] xl:min-h-[400px] ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={tab.imageSrc}
          alt={tab.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1016]/55 via-[#0a1016]/15 to-transparent" />
        <div
          className={`absolute inset-0 ${
            imageFirst
              ? "bg-gradient-to-r from-transparent via-transparent to-[#0a1016]/25"
              : "bg-gradient-to-l from-transparent via-transparent to-[#0a1016]/25"
          }`}
        />

        {/* Oversized watermark number on image */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-4 -right-2 font-display text-[7.5rem] leading-none font-bold tracking-tight text-white/[0.08] select-none sm:text-[9rem] lg:text-[11rem]"
        >
          {number}
        </span>
      </Reveal>

      {/* Editorial dossier */}
      <Reveal
        variant={imageFirst ? "right" : "left"}
        delay={90}
        className={`relative flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-11 ${
          imageFirst ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex items-center gap-3.5">
          <span
            className="font-display text-3xl leading-none font-bold tabular-nums tracking-tight sm:text-[2rem]"
            style={{ color: sage }}
          >
            {number}
          </span>
          <span
            aria-hidden
            className="h-px w-10 sm:w-14"
            style={{ background: "rgba(110, 127, 66, 0.55)" }}
          />
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8a9186] uppercase sm:text-xs">
            {tab.eyebrow}
          </p>
        </div>

        <h3 className="mt-4 max-w-[16ch] font-display text-[1.7rem] leading-[0.95] font-bold tracking-tight text-[#101820] uppercase sm:mt-5 sm:text-3xl lg:text-[2.35rem]">
          {tab.title}
        </h3>

        <p className="mt-3 max-w-[42ch] text-base leading-[1.5] text-[#5c6560] sm:mt-3.5 sm:text-lg">
          {tab.body}
        </p>

        {tab.callouts?.length ? (
          <ul className="mt-5 grid max-w-[34rem] gap-x-6 gap-y-2.5 border-t border-[#ddd8cc] pt-4 sm:mt-6 sm:grid-cols-2 sm:pt-5">
            {tab.callouts.slice(0, 4).map((callout) => (
              <li key={callout.title} className="min-w-0">
                <div className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ background: sage }}
                  />
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[#101820] uppercase">
                      {callout.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-[#6b746c]">
                      {callout.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 sm:mt-7">
          <Link
            href={tab.href}
            className="group/cta inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold tracking-[0.06em] text-white uppercase transition-opacity hover:opacity-90 sm:min-h-12 sm:px-7"
            style={{ background: heroCta }}
          >
            Explore Capability
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
              strokeWidth={1.8}
              aria-hidden
            />
          </Link>
        </div>
      </Reveal>
    </article>
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
  const { hero, proof, tabs, gallery } =
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
            {hero.headlineAccent ? (
              <>
                <br />
                <span style={{ color: sage }}>{hero.headlineAccent}</span>
              </>
            ) : null}
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
        className="relative scroll-mt-28 overflow-hidden bg-[#101820] py-10 sm:py-14 lg:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 10% 15%, rgba(110,127,66,0.22), transparent 58%), radial-gradient(ellipse 40% 40% at 92% 85%, rgba(132,147,99,0.12), transparent 55%)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <Reveal variant="up">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow center light>
                {capabilities.eyebrow}
              </SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[0.92] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-5xl lg:text-[3.5rem]">
                {capabilities.headingBefore}{" "}
                <span style={{ color: "#a8b87a" }}>
                  {capabilities.headingAccent}
                </span>
              </h2>
              <div
                className="mx-auto mt-4 h-px w-14 sm:mt-5"
                style={{ background: "rgba(168, 184, 122, 0.7)" }}
                aria-hidden
              />
              <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-[#b7c1c9] sm:mt-5 sm:text-lg">
                {capabilities.body}
              </p>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4 lg:mt-12 lg:gap-5">
            {tabs.map((tab, index) => (
              <PillarRow key={tab.id} tab={tab} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* QUIET METRICS — monumental instrument rail */}
      <section className="relative overflow-hidden bg-[#f3f0e8] py-10 sm:py-14 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110,127,66,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(110,127,66,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow center>
                {performanceMetrics.eyebrow}
              </SectionEyebrow>
              <h2 className="mx-auto mt-4 max-w-[18ch] font-display text-4xl leading-[0.9] font-bold tracking-tight text-[#101820] uppercase sm:mt-5 sm:text-5xl lg:text-[3.25rem]">
                {performanceMetrics.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {performanceMetrics.headingAccent}
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-[42ch] text-base leading-[1.5] text-[#5c6560] sm:mt-4 sm:text-lg">
                {performanceMetrics.body}
              </p>
            </div>
          </Reveal>

          <div className="relative mt-8 sm:mt-10 lg:mt-12">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-[#c9c4b8]"
            />

            <RevealStagger
              className="grid grid-cols-1 divide-y divide-[#c9c4b8] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
              step={70}
              variant="up"
            >
              {performanceMetrics.gauges.map((gauge, index) => {
                const isOdd = index % 2 === 1;
                const isBottomRow = index >= 2;

                return (
                  <article
                    key={gauge.title}
                    className={[
                      "group relative px-0 py-6 text-center sm:px-5 sm:py-7 lg:px-6 lg:py-8",
                      isOdd ? "sm:border-l sm:border-[#c9c4b8]" : "",
                      isBottomRow ? "sm:border-t sm:border-[#c9c4b8] lg:border-t-0" : "",
                      index > 0 ? "lg:border-l lg:border-[#c9c4b8]" : "",
                    ].join(" ")}
                  >
                    <span className="font-display text-[11px] font-semibold tracking-[0.28em] text-[#8a9186] uppercase transition-colors duration-500 group-hover:text-[#6e7f42]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-4 flex flex-wrap items-end justify-center gap-x-2.5 gap-y-1 sm:mt-5">
                      <p className="font-display text-[3.25rem] leading-[0.85] font-bold tracking-[-0.04em] text-[#101820] transition-transform duration-700 ease-out group-hover:-translate-y-0.5 sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.75rem]">
                        {gauge.value}
                      </p>
                      <p
                        className="mb-1 font-display text-sm font-semibold tracking-[0.16em] uppercase sm:mb-1.5 sm:text-base"
                        style={{ color: sage }}
                      >
                        {gauge.unit}
                      </p>
                    </div>

                    <div
                      className="mx-auto mt-4 h-px w-full max-w-[8rem] overflow-hidden bg-[#d8d2c6] sm:mt-5"
                      aria-hidden
                    >
                      <span
                        className="block h-full origin-left bg-[#6e7f42] transition-transform duration-700 ease-out group-hover:scale-x-105"
                        style={{ width: `${gauge.percent}%` }}
                      />
                    </div>

                    <p className="mx-auto mt-3 max-w-[20ch] text-sm leading-[1.4] font-medium text-[#2a333c] sm:mt-4">
                      {gauge.title}
                    </p>
                    <p className="mx-auto mt-1 max-w-[24ch] text-sm leading-[1.45] text-[#6b746c]">
                      {gauge.body}
                    </p>
                  </article>
                );
              })}
            </RevealStagger>

            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px bg-[#c9c4b8]"
            />
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
