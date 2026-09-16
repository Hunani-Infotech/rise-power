import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Company | Rise Power",
  description:
    "Rise Power is engineered, manufactured, and field validated in British Columbia. Discover our mission, values, and leadership.",
};

const sage = "#6e9f2f";
const dark = "#101820";
const muted = "#66717d";
const cream = "#fbfaf7";
const border = "#d9dfe3";

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
      className={`pointer-events-none absolute ${position === "left"
        ? "-left-24 -top-20"
        : "-right-24 -top-20"
        } h-[330px] w-[440px] opacity-70`}
    >
      <svg
        viewBox="0 0 440 330"
        className="h-full w-full"
        fill="none"
      >
        <path
          d={
            position === "left"
              ? "M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
              : "M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
          }
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="relative block h-[13px] w-[38px]"
      >
        <span
          className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: sage }}
        />
        <span
          className="absolute left-0 top-1/2 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-l border-b"
          style={{ borderColor: sage }}
        />
      </span>

      <p
        className="text-mm font-semibold tracking-[0.18em] uppercase"
        style={{ color: "#6e7f42"}}
      >
        {children}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-[#101820] sm:min-h-[820px] lg:min-h-[900px]">
        <Image
          src="/media/company/company-hero.png"
          alt="Rise Power systems deployed in a remote operating environment"
          fill
          priority
          sizes="100vw"
          className="hero-animate-media object-cover object-center"
        />

        {/* Dark cinematic gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/70 to-[#071016]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/65 via-transparent to-[#071016]/20" /> */}

        {/* Left focused cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/30 to-transparent" />

        {/* Bottom subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/35 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 pb-20 pt-32 sm:min-h-[820px] lg:min-h-[900px] lg:px-10">
          <div className="hero-animate-copy max-w-[820px]">

              <SectionEyebrow>
                Company
              </SectionEyebrow>

              <h1 className="mt-8 font-display text-[52px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:text-[68px] md:text-[78px] lg:text-[88px] xl:text-[96px]">
                Canadian
                <br />
                Engineered.
                <br />
                <span style={{ color: "#6e7f42" }}>
                  Field Validated.
                </span>
              </h1>

              <p className="mt-8 max-w-[760px] text-lg leading-[1.55] text-white/85 sm:text-xl lg:text-[22px]">
                Rise Power is engineered, manufactured, and validated in
                British Columbia. A CIMtech Green Energy company.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {/* <Button href="/contact">
                  <span className="flex items-center gap-2">
                    Request a Briefing
                    <ArrowRight className="size-5" />
                  </span>
                </Button>

                <a
                  href="#leadership"
                  className="inline-flex min-h-14 items-center justify-center border border-white/60 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white hover:text-[#101820]  rounded-sm"
                >
                  Meet the Team
                  <ArrowRight className="ml-4 size-5" />
                </a> */}

                <a
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 bg-[#849363]"
                >
                  Request a Briefing
                  <ArrowRight className="size-5" />
                </a>

                <a
                  href="#leadership"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 rounded-sm"
                >
                  Meet the Team
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION                                                            */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#fbfaf7] py-16 sm:py-20 lg:py-28">
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">

            {/* Image */}
            <Reveal variant="scale">
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

            {/* Content */}
            <Reveal variant="up" delay={100}>
              <div className="lg:pl-2">

                <SectionEyebrow>
                  Our Mission
                </SectionEyebrow>

                <h2 className="mt-7 font-display text-[52px] leading-[0.92] font-bold tracking-tight uppercase sm:text-[64px] lg:text-[74px]">
                  Mission.
                </h2>

                <div className="mt-7 space-y-5 text-base leading-[1.6] text-[#66717d] sm:text-lg">
                  <p>
                    Rise Power builds portable hydrogen fuel cell power
                    systems for defense, disaster response, remote
                    operations, and critical infrastructure.
                  </p>

                  <p>
                    Incumbent power options (diesel generators and lithium
                    battery packs) carry structural failure modes in
                    contested or austere environments.
                  </p>

                  <p>
                    Rise Power replaces both with a cartridge based platform
                    that is silent, indoor safe, and mission duration.
                  </p>

                  <p>
                    The company is a CIMtech Green Energy subsidiary, built
                    on a 20 plus year Canadian advanced manufacturing track
                    record.
                  </p>
                </div>

                <div className="mt-9">
                  {/* <Button href="/contact">
                    <span className="flex items-center gap-2">
                      Request a Briefing
                      <ArrowRight className="size-5" />
                    </span>
                  </Button> */}
                  <a
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 bg-[#849363]"
                  >
                    Request a Briefing
                    <ArrowRight className="size-5" />
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

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <ContourDecoration position="left" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">

          {/* Header */}
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>
                  Our Values
                </SectionEyebrow>
              </div>

              <h2 className="mt-7 font-display text-[48px] leading-[0.92] font-bold tracking-tight uppercase sm:text-[62px] lg:text-[76px]">
                Built on What Matters.
              </h2>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {values.map((value, index) => (
              <Reveal
                key={value.number}
                variant="up"
                delay={index * 80}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-3.5 sm:p-4">

                  {/* Number */}
                  <div className="flex items-center gap-4 px-2 pt-2">
                    <span
                      className="font-display text-[30px] font-bold leading-none"
                      style={{ color: sage }}
                    >
                      {value.number}
                    </span>

                    <span className="h-px w-14 bg-[#aeb6bd]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 whitespace-pre-line px-2 font-display text-[27px] leading-[1.02] font-bold tracking-tight uppercase sm:text-[29px]">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 min-h-[88px] px-2 text-base leading-[1.5] text-[#66717d]">
                    {value.description}
                  </p>

                  {/* Image */}
                  <div className="relative mt-6 aspect-[1.45/1] overflow-hidden rounded-[5px]">
                    <Image
                      src={value.image}
                      alt={value.title.replace("\n", " ")}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP                                                          */}
      {/* ================================================================== */}

      <section
        id="leadership"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-16 sm:py-20 lg:py-28"
      >
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">

          {/* Header */}
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>
                  Leadership
                </SectionEyebrow>
              </div>

              <h2 className="mt-7 font-display text-[46px] leading-[0.92] font-bold tracking-tight uppercase sm:text-[60px] lg:text-[74px]">
                The Team Behind the Systems.
              </h2>
            </div>
          </Reveal>

          {/* Leadership grid */}
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_0.575fr_0.575fr]">

            {/* ========================================================== */}
            {/* PAUL GHOTRA                                                   */}
            {/* ========================================================== */}

            <Reveal variant="up">
              <article className="h-full overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-4 sm:p-5">

                <div className="grid h-full gap-7 md:grid-cols-[1fr_0.95fr] md:items-center">

                  {/* Portrait */}
                  <div className="relative aspect-[0.82/1] overflow-hidden rounded-[5px] bg-[#e7e7e4]">
                    <Image
                      src="/media/company/company-leader.png"
                      alt="Dr. Paul Ghotra"
                      fill
                      sizes="(min-width: 1024px) 36vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Information */}
                  <div className="py-2 md:py-6">

                    <div className="flex items-center gap-2">
                      <span
                        className="font-display text-[30px] font-bold leading-none"
                        style={{ color: sage }}
                      >
                        01
                      </span>

                      <span className="h-px w-14 bg-[#aeb6bd]" />
                    </div>

                    <h3 className="mt-7 font-display text-[31px] leading-[1] font-bold tracking-tight uppercase sm:text-[36px]">
                      Dr. Paul Ghotra
                    </h3>

                    <p className="mt-3 max-w-[300px] text-xs font-semibold leading-[1.55] tracking-[0.18em] text-[#718092] uppercase">
                      Founder &amp; Chief
                      <br />
                      Executive Officer
                    </p>

                    <div className="mt-8 space-y-5 text-base leading-[1.55] text-[#68727d]">
                      <p>
                        Two decades scaling Canadian advanced manufacturing
                        and clean energy.
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

            {/* ========================================================== */}
            {/* TEAM MEMBER 02                                                */}
            {/* ========================================================== */}

            <Reveal variant="up" delay={100}>
              <article className="flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-4 sm:p-5">

                <div className="relative aspect-[1.15/0.82] overflow-hidden rounded-[5px] bg-[#dce0df]">
                  <Image
                    src="/media/company/company-tm-1.png"
                    alt="Rise Power team member"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="font-display text-[30px] font-bold leading-none"
                    style={{ color: sage }}
                  >
                    02
                  </span>

                  <span className="h-px w-14 bg-[#aeb6bd]" />
                </div>

                <h3 className="mt-5 font-display text-[24px] leading-[1.02] font-bold tracking-tight uppercase">
                  [ Team Member TBA ]
                </h3>

                <p className="mt-3 text-xs font-semibold leading-[1.5] tracking-[0.18em] text-[#718092] uppercase">
                  VP Engineering
                </p>

                <p className="mt-7 text-base leading-[1.5] text-[#68727d]">
                  Hydrogen fuel cell systems, power electronics, and
                  ruggedized field hardware. Bio to be announced.
                </p>
              </article>
            </Reveal>

            {/* ========================================================== */}
            {/* TEAM MEMBER 03                                                */}
            {/* ========================================================== */}

            <Reveal variant="up" delay={200}>
              <article className="flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-4 sm:p-5">

                <div className="relative aspect-[1.15/0.82] overflow-hidden rounded-[5px] bg-[#dce0df]">
                  <Image
                    src="/media/company/company-tm-2.png"
                    alt="Rise Power team member"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="font-display text-[30px] font-bold leading-none"
                    style={{ color: sage }}
                  >
                    03
                  </span>

                  <span className="h-px w-14 bg-[#aeb6bd]" />
                </div>

                <h3 className="mt-5 font-display text-[24px] leading-[1.02] font-bold tracking-tight uppercase">
                  [ Team Member TBA ]
                </h3>

                <p className="mt-3 text-xs font-semibold leading-[1.5] tracking-[0.18em] text-[#718092] uppercase">
                  VP Programs &amp;
                  <br />
                  Business Development
                </p>

                <p className="mt-7 text-base leading-[1.5] text-[#68727d]">
                  Defense and infrastructure programs, partnerships, and
                  customer engagement. Bio to be announced.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}