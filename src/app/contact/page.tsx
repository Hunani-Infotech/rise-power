import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Request a Rise Power briefing. Specs, runtime data, and a deployment summary for procurement, programs, and integration leads.",
  path: "/contact",
});

const sage = "#6e7f42";

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

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc="/media/contact/hero-banner.png"
        imageAlt="Rise Power field deployment — request a capability briefing"
        tone="#101820"
      >
        <div className="hero-animate-copy max-w-[760px]">
          <SectionEyebrow light>{site.name}</SectionEyebrow>

          <h1 className="mt-4 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-[68px] md:text-[78px] xl:text-[88px] 2xl:text-[96px]">
            Request a
            <br />
            Briefing
          </h1>

          <p className="mt-4 max-w-[650px] text-base leading-[1.55] text-white sm:mt-5 sm:text-xl xl:text-[22px]">
            For procurement, programs, and integration leads. Tell us your
            operating environment and we will respond with specs, runtime data,
            and a deployment summary.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <a
              href="#briefing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Request Briefing
              <ArrowRight className="size-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Email Us
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* Briefing form + channels */}
      <section
        id="briefing"
        className="relative overflow-hidden bg-[#fbfaf7] py-8 sm:py-12 lg:py-16"
      >
        <ContourDecoration position="left" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <Reveal variant="left">
              <div>
                <div className="relative mb-6 aspect-[16/11] overflow-hidden rounded-[7px]">
                  <Image
                    src="/media/contact/rise-mission-power.png"
                    alt="Rise Mission Power systems in the field"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <SectionEyebrow>Contact</SectionEyebrow>

                <h2 className="mt-4 font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#101820] uppercase sm:text-5xl lg:text-[56px]">
                  Tell us your operating environment.
                </h2>

                <p className="mt-3 max-w-[420px] text-base leading-[1.55] text-[#626e7a] sm:text-lg">
                  We respond with specs, runtime data, and a deployment summary
                  tailored to your mission. For procurement, programs,
                  integration, and serious technical evaluation.
                </p>

                <div className="mt-6 space-y-0">
                  <div className="border-t border-[#d9dfe3] py-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1.5 block text-lg text-[#101820] transition-colors hover:text-[#6e7f42]"
                    >
                      {site.email}
                    </a>
                  </div>

                  <div className="border-t border-[#d9dfe3] py-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Phone
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-1.5 block text-lg text-[#101820] transition-colors hover:text-[#6e7f42]"
                    >
                      {site.phone}
                    </a>
                  </div>

                  <div className="border-t border-b border-[#d9dfe3] py-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Address
                    </p>
                    <p className="mt-1.5 text-lg leading-relaxed text-[#101820]">
                      {site.parent}
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.city}
                      <br />
                      {site.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="lg:sticky lg:top-28">
                <div className="relative mb-4 hidden aspect-[21/9] overflow-hidden rounded-[7px] lg:block">
                  <Image
                    src="/media/products/falcon.png"
                    alt="Rise Power Falcon portable hydrogen power system"
                    fill
                    sizes="50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/40 to-transparent" />
                </div>
                <div className="border border-[#d9dfe3] bg-white p-5 sm:p-6 lg:p-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
