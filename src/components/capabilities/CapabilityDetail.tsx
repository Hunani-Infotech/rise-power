import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { capabilities } from "@/lib/home-content";

const sage = "#6e7f42";
const heroCta = "#849363";
const cream = "#fbfaf7";
const dark = "#101713";
const muted = "#626a63";

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

type CapabilityDetailProps = {
  tabId: string;
};

export function CapabilityDetail({ tabId }: CapabilityDetailProps) {
  const tab = capabilities.tabs.find((item) => item.id === tabId);
  if (!tab) notFound();

  const roadmap = capabilities.certificationRoadmap;
  const showRoadmap = tabId === "safety";

  return (
    <main className="bg-[#fbfaf7] text-[#101713]">
      <StackedPageHero
        imageSrc={tab.imageSrc}
        imageAlt={tab.imageAlt}
      >
        <div className="hero-animate-copy max-w-[720px]">
          <SectionEyebrow light>Capability</SectionEyebrow>

          <h1 className="mt-6 font-display text-[42px] leading-[0.92] font-bold tracking-tight uppercase sm:mt-7 sm:text-[56px] xl:text-[72px] 2xl:text-[82px]">
            {tab.title}
          </h1>

          <p className="mt-6 max-w-[600px] text-base leading-relaxed text-white sm:mt-7 sm:text-lg xl:text-xl">
            {tab.heroBody}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: heroCta }}
            >
              Request a Briefing
              <ArrowRight className="size-5" />
            </Link>

            <Link
              href="/capabilities"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-8 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              See All Capabilities
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* WHAT WE DELIVER */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
        style={{ background: cream }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -top-20 -left-24 size-72 rounded-full border border-[#dfe5d8]" />
          <div className="absolute -right-28 bottom-[-100px] size-80 rounded-full border border-[#dfe5d8]" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>What We Deliver</SectionEyebrow>

            <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Scope of <span style={{ color: sage }}>Work.</span>
            </h2>

            <p
              className="mt-6 max-w-[560px] text-base leading-relaxed sm:text-lg"
              style={{ color: muted }}
            >
              {tab.deliverablesIntro}
            </p>

            <ol className="mt-10 space-y-5">
              {tab.deliverables.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-[#e0e3dd] pb-5 last:border-b-0 last:pb-0"
                >
                  <span
                    className="w-10 shrink-0 font-display text-2xl leading-none font-bold"
                    style={{ color: sage }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-[#20251f] sm:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <div className="grid gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#dfe4dc] sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={tab.secondaryImageSrc}
                  alt={tab.secondaryImageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="overflow-hidden bg-[#f3f0e8] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>In Focus</SectionEyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl">
              Supporting{" "}
              <span style={{ color: sage }}>imagery.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:gap-4">
            {tab.gallery.map((item, index) => (
              <Reveal key={item.src} variant="fade" delay={index * 70}>
                <div
                  className={`relative overflow-hidden rounded-xl bg-[#101713] ${
                    index === 0
                      ? "aspect-[5/4] sm:col-span-2 sm:aspect-[16/10]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-700 hover:scale-[1.03] ${
                      item.src.endsWith(".png") && item.src.includes("engineering.png")
                        ? "object-contain bg-[#0a100e] p-4 sm:p-6"
                        : ""
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION ROADMAP — safety only */}
      {showRoadmap ? (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <SectionEyebrow>{roadmap.eyebrow}</SectionEyebrow>

                <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                  {roadmap.heading}
                </h2>

                <p
                  className="mt-6 max-w-[680px] text-base leading-relaxed sm:text-lg"
                  style={{ color: muted }}
                >
                  {roadmap.body}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-0 border-t border-[#e0e3dd]">
              {roadmap.items.map((item, index) => (
                <Reveal key={item.standard} variant="up" delay={index * 40}>
                  <article className="grid gap-4 border-b border-[#e0e3dd] py-7 sm:grid-cols-[140px_1fr] sm:gap-8 lg:grid-cols-[140px_1.1fr_1fr] lg:gap-10">
                    <p
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: sage }}
                    >
                      {item.status}
                    </p>

                    <h3 className="font-display text-xl leading-snug font-bold tracking-tight uppercase sm:text-2xl">
                      {item.standard}
                    </h3>

                    <p
                      className="text-base leading-relaxed lg:pt-1"
                      style={{ color: muted }}
                    >
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* PARTNERSHIP CTA */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background: dark, color: cream }}
      >
        <Image
          src={tab.imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#07100d]/80" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -right-20 size-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-16 size-80 rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-[720px]">
                <SectionEyebrow light>Partnership</SectionEyebrow>

                <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                  Engineering partnership from prototype to{" "}
                  <span style={{ color: sage }}>deployment.</span>
                </h2>

                <p className="mt-6 max-w-[600px] text-base leading-relaxed text-white sm:text-lg">
                  Bring your operating environment, load profile, and
                  integration constraints. We respond with engineering scope,
                  deployment guidance, and a capability brief tailored to your
                  mission.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                  style={{ background: heroCta }}
                >
                  Request a Briefing
                  <ArrowRight className="size-5" />
                </Link>

                <Link
                  href="/capabilities"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-8 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
                >
                  All Capabilities
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
