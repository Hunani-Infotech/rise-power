import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on 20+ years of Canadian advanced manufacturing.",
  path: "/company",
});

const sage = "#6e7f42";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const values = [
  {
    number: "01",
    title: "Operator First\nEngineering",
    description:
      "Every engineering decision starts with the end user and the operating environment.",
    image: "/media/company/company-v1.png",
  },
  {
    number: "02",
    title: "Safety\nEngineered In",
    description:
      "Pressure vessels, leak detection, and thermal management are designed in from day one.",
    image: "/media/company/company-v2.png",
  },
  {
    number: "03",
    title: "Canadian\nManufacturing",
    description:
      "Designed, built, tested, and supported in British Columbia.",
    image: "/media/company/company-v3.png",
  },
  {
    number: "04",
    title: "Mission\nDuration",
    description:
      "Runtime measured in days. Cartridge logistics replace fuel convoys.",
    image: "/media/company/company-v4.png",
  },
];

/* -------------------------------------------------------------------------- */
/* DECORATIVE CONTOUR LINES                                                   */
/* -------------------------------------------------------------------------- */

function ContourDecoration({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${
        position === "left" ? "-left-24 -top-20" : "-right-24 -top-20"
      } h-[330px] w-[440px] opacity-70`}
    >
      <svg viewBox="0 0 440 330" className="h-full w-full" fill="none">
        <path
          d="M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
          stroke="#e2e7e1"
          strokeWidth="1"
        />
        <path
          d="M-25 65C45 108 88 25 164 57C238 88 284 29 354 65C405 91 432 70 465 45"
          stroke="#e5e9e5"
          strokeWidth="1"
        />
        <path
          d="M-25 95C42 137 91 54 164 87C237 119 288 59 355 94C405 121 433 101 465 75"
          stroke="#e8ece8"
          strokeWidth="1"
        />
        <path
          d="M-25 125C43 167 92 84 165 117C238 150 287 90 356 124C406 151 434 131 465 105"
          stroke="#ebeeeb"
          strokeWidth="1"
        />
        <path
          d="M-25 155C42 197 93 114 165 147C238 180 288 120 357 154C406 181 434 161 465 135"
          stroke="#edf0ed"
          strokeWidth="1"
        />
        <path
          d="M-25 185C42 227 94 144 166 177C238 210 288 150 357 184C406 211 434 191 465 165"
          stroke="#eff2ef"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION EYEBROW                                                            */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : sage;

  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: color }}
        />
      </span>

      <p
        className={`text-mm font-semibold tracking-[0.18em] uppercase ${light ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

function ValueCard({ value }: { value: (typeof values)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-3.5 sm:p-4">
      <div className="flex items-center gap-4 px-2 pt-2">
        <span
          className="font-display text-[30px] font-bold leading-none"
          style={{ color: sage }}
        >
          {value.number}
        </span>

        <span className="h-px w-14 bg-[#aeb6bd]" />
      </div>

      <h3 className="mt-6 whitespace-pre-line px-2 font-display text-[27px] leading-[1.02] font-bold tracking-tight uppercase sm:text-[29px]">
        {value.title}
      </h3>

      <p className="mt-5 min-h-[88px] px-2 text-base leading-[1.5] text-[#66717d]">
        {value.description}
      </p>

      <div className="relative mt-6 aspect-[1.45/1] overflow-hidden rounded-[5px]">
        <Image
          src={value.image}
          alt={value.title.replace(/\n/g, " ")}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 88vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc="/media/company/company-hero.png"
        imageAlt="Rise Power systems deployed in a remote operating environment"
        tone="#101820"
      >
        <div className="hero-animate-copy max-w-[820px]">
          <SectionEyebrow light>Company</SectionEyebrow>

          <h1 className="mt-6 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-8 sm:text-[68px] md:text-[78px] xl:text-[88px] 2xl:text-[96px]">
            Canadian
            <br />
            Engineered.
            <br />
            <span style={{ color: sage }}>Field Validated.</span>
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-[1.55] text-white sm:mt-8 sm:text-xl xl:text-[22px]">
            Rise Power is engineered, manufactured, and validated in British
            Columbia. A CIMtech Green Energy company.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Briefing
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>

            <a
              href="#leadership"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meet the Team
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* ================================================================== */}
      {/* MISSION                                                            */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-24">
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <Reveal variant="left">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[7px]">
                <Image
                  src="/media/company/company-mission.png"
                  alt="Rise Power Sentinel hydrogen power system in the field"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <div className="lg:pl-2">
                <SectionEyebrow>Our Mission</SectionEyebrow>

                <h2 className="mt-7 font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-[52px] lg:text-[64px] xl:text-[74px]">
                  Mission.
                </h2>

                <div className="mt-7 space-y-5 text-base leading-[1.6] text-[#66717d] sm:text-lg">
                  <p>
                    Rise Power builds portable hydrogen fuel cell power systems
                    for defense, disaster response, remote operations, and
                    critical infrastructure. Incumbent power options (diesel
                    generators and lithium battery packs) carry structural
                    failure modes in contested or austere environments. Rise
                    Power replaces both with a cartridge based platform that is
                    silent, indoor safe, and mission duration. The company is a
                    CIMtech Green Energy subsidiary, built on a 20 plus year
                    Canadian advanced manufacturing track record.
                  </p>
                </div>

                <div className="mt-9">
                  <a
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42]"
                  >
                    Request a Briefing
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VALUES                                                              */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
        <ContourDecoration position="left" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>Our Values</SectionEyebrow>
              </div>

              <h2 className="mt-7 font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-[48px] lg:text-[62px] xl:text-[76px]">
                Our Values
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Our values"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {values.map((value, index) => (
                <Reveal key={value.number} variant="up" delay={index * 70}>
                  <ValueCard value={value} />
                </Reveal>
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-12 hidden gap-5 xl:grid xl:grid-cols-4"
            step={70}
          >
            {values.map((value) => (
              <ValueCard key={value.number} value={value} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP                                                          */}
      {/* ================================================================== */}

      <section className="relative bg-[#fbfaf7] py-12 sm:py-16 lg:py-24">
        {/* Anchor lives outside overflow-hidden so scroll-margin / offset scroll work. */}
        <div id="leadership" className="pointer-events-none absolute top-0 h-0 w-0 scroll-mt-28" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <ContourDecoration position="left" />
          <ContourDecoration position="right" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>Leadership</SectionEyebrow>
              </div>

              <h2 className="mt-7 font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:text-[46px] lg:text-[60px] xl:text-[74px]">
                The Team Behind the Systems.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 max-w-4xl">
            <Reveal variant="up">
              <article className="overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col items-center gap-8 text-center md:gap-10">
                  <div className="relative aspect-[0.82/1] w-full max-w-[320px] overflow-hidden rounded-[5px] bg-[#e7e7e4]">
                    <Image
                      src="/media/company/company-leader.png"
                      alt="Portrait of Dr. Paul Ghotra, Founder and Chief Executive Officer"
                      fill
                      sizes="320px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-full max-w-xl py-1">
                    <div
                      className="mx-auto h-px w-14"
                      style={{ backgroundColor: sage }}
                    />

                    <h3 className="mt-6 font-display text-[31px] leading-[1] font-bold tracking-tight uppercase sm:text-[36px]">
                      Dr. Paul Ghotra
                    </h3>

                    <p className="mt-3 text-xs font-semibold leading-[1.55] tracking-[0.18em] text-[#718092] uppercase">
                      Founder &amp; Chief Executive Officer
                    </p>

                    <div className="mx-auto mt-8 max-w-md space-y-5 text-base leading-[1.55] text-[#68727d]">
                      <p>
                        Two decades scaling Canadian advanced manufacturing and
                        clean energy.
                      </p>

                      <p>
                        Founder of CIMtech Green Energy. Recognized as Surrey
                        Business Person of the Year for hydrogen leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CLOSING CTA                                                         */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#101820] py-12 sm:py-16 lg:py-24">
        <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-[48px] lg:text-[56px]">
              Build the future of portable power with us.
            </h2>
            <p className="mx-auto mt-6 max-w-[640px] text-base leading-[1.55] text-white/75 sm:text-lg">
              Whether you&apos;re a procurement officer, integration partner, or
              potential team member — we want to hear from you.
            </p>
            <div className="mt-9">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              >
                Request a Briefing
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
