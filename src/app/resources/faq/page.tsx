import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Procurement FAQ",
  description:
    "Common questions from procurement, programs, and integration teams evaluating Rise Power systems.",
  path: "/resources/faq",
});

const sage = "#6e7f42";
const cream = "#fbfaf7";
const muted = "#66717d";
const border = "#d9dfe3";

const faqGroups = [
  {
    title: "Product & Performance",
    image: "/media/products/product-titan.png",
    imageAlt: "Rise Titan hydrogen power system",
    items: [
      {
        q: "What is the runtime?",
        a: "Runtime: unlimited power with cartridge swap. Operators perform a 30 second cartridge exchange to extend mission duration indefinitely — no tools, no spillage, no recharge cycle. Final certified per cartridge output figures will be published as field validation completes.",
      },
      {
        q: "What is the acoustic signature?",
        a: "Target acoustic output is below 65 dBA at one meter under full load. Quieter than a normal conversation and lower than the ambient noise floor of most operational environments. Operators can sleep beside an active unit.",
      },
      {
        q: "What is the thermal signature?",
        a: "Hydrogen fuel cells produce no combustion exhaust and minimal waste heat. There is no visible IR plume and no surface temperature high enough to register on standard thermal imagers from typical observation distances.",
      },
      {
        q: "Can the systems run indoors?",
        a: "Yes. The only emissions from a hydrogen fuel cell are warm air and water vapour, with no carbon monoxide, no NOx, and no particulates. Indoor operation in shelters, server halls, command facilities, and field tents is the design intent. CSA and NFPA 2 indoor use compliance work is in progress.",
      },
    ],
  },
  {
    title: "Cartridge Logistics",
    image: "/media/products/product-hydro-kit.png",
    imageAlt: "Hydrogen cartridge kit for field logistics",
    items: [
      {
        q: "How are cartridges transported and stored?",
        a: "Cartridges are sealed pressure vessels engineered for ground and air transport. Transport Canada, UN 38.3, and DOT-39 compliance work is in progress. Once certified, cartridges will be transportable by standard freight and air cargo channels with no special handling beyond normal pressure vessel protocols.",
      },
      {
        q: "What is the shelf life?",
        a: "Hydrogen cartridges have effectively indefinite shelf life under normal storage conditions. No stabilizers, no degradation, no winterization, no rotation requirements. Pre position cartridges at depots and forget them until needed.",
      },
      {
        q: "How long does a cartridge swap take?",
        a: "Target swap time is under 30 seconds with no tools, gloves on, in any conditions. The quick disconnect coupler is a single action mate and lock fitting designed for one handed field exchange.",
      },
    ],
  },
  {
    title: "Procurement & Programs",
    image: "/media/capabilities/system-integration.jpg",
    imageAlt: "Rise Power program and integration evaluation",
    items: [
      {
        q: "What products are available for evaluation?",
        a: "Rise Sentinel™, Rise Falcon™, Rise Titan™, and the Hydrogen Cartridge Kit. Specs and engineering targets are listed on Datasheets.",
      },
      {
        q: "What is the lead time?",
        a: "Rise Power is beta stage technology in active development and validation. Lead times for evaluation units, pilot deployments, and production orders are confirmed during the briefing process based on configuration and program timeline. Request a briefing for a specific quote.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "Evaluation programs typically begin with single units or small lots for technical validation. Production volumes are scoped per program. There is no fixed minimum. We engage with serious technical evaluators at any volume.",
      },
      {
        q: "What is the warranty?",
        a: "Warranty terms are program specific and confirmed during contracting. As beta stage technology in active validation, units shipped to evaluation partners include direct engineering support throughout the program.",
      },
      {
        q: "Is operator training included?",
        a: "Yes. Standard deployment includes operator training on cartridge handling, system operation, basic diagnostics, and field maintenance. Train the trainer programs are available for organizations standing up larger fleets.",
      },
      {
        q: "How do we request a capability briefing?",
        a: "Use Request a Briefing on the Contact page. Include mission profile, power draw, and deployment environment so we can tailor runtime and logistics guidance.",
      },
    ],
  },
  {
    title: "Compliance & Export",
    image: "/media/capabilities/safety-compliance.jpg",
    imageAlt: "Rise Power safety and compliance documentation",
    items: [
      {
        q: "What certifications are in process?",
        a: "Transport Canada hydrogen cartridge transport, UN 38.3, DOT-39, MIL-STD-810 environmental, MIL-STD-461 EMI and EMC, ISO 9001 quality management, and CSA and NFPA 2 indoor use are all currently in progress.",
      },
      {
        q: "What is the export control posture?",
        a: "Rise Power is designed and manufactured in Canada and is subject to Canadian export controls. Controlled Goods Program compliance is in place. Specific export determinations are made program by program based on customer destination and end use.",
      },
      {
        q: "Where are the systems built?",
        a: "Engineered, manufactured, and validated in Surrey, British Columbia. Rise Power is a CIMtech Green Energy company — a Canadian advanced manufacturing operation with a multi decade track record.",
      },
      {
        q: "Do you support integration with existing platforms?",
        a: "Yes. System Integration covers electronics, mounts, and field interfaces for drones, generators, and facility backup loads.",
      },
    ],
  },
] as const;

function SectionEyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  const color = onDark ? "#ffffff" : sage;

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
        className={`text-mm font-semibold tracking-[0.18em] uppercase ${onDark ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export default function ProcurementFaqPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc="/media/FAQ/FAQ-hero.png"
        imageAlt="Rise Power systems prepared for procurement and program evaluation"
        tone="#0a0f10"
      >
        <div className="hero-animate-copy max-w-[820px]">
          <SectionEyebrow onDark>Resources</SectionEyebrow>
          <h1 className="mt-6 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-8 sm:text-[64px] xl:text-[80px] 2xl:text-[88px]">
            Procurement
            <br />
            <span style={{ color: sage }}>FAQ</span>
          </h1>
          <p className="mt-6 max-w-[680px] text-base leading-[1.55] text-white sm:mt-8 sm:text-xl xl:text-[22px]">
            Common questions from procurement, programs, and integration teams
            evaluating Rise Power systems.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <a
              href="#faq"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Browse Answers
              <ArrowRight className="size-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Request a Briefing
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      <section
        id="faq"
        className="scroll-mt-28 py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: cream }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-[720px]">
              <SectionEyebrow>Answers</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-[56px]">
                Straight Answers.
              </h2>
              <p
                className="mt-5 max-w-[560px] text-base leading-[1.55] sm:text-lg"
                style={{ color: muted }}
              >
                Performance, logistics, procurement, and compliance — organized
                for evaluation teams.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-14 lg:space-y-20">
            {faqGroups.map((group, groupIndex) => (
              <Reveal key={group.title} variant="up" delay={groupIndex * 40}>
                <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-14 xl:gap-16">
                  <div>
                    <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[7px] bg-[#101820]">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 300px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/45 via-transparent to-transparent" />
                    </div>
                    <p
                      className="font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl"
                      style={{ color: sage }}
                    >
                      {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                      {group.title}
                    </h3>
                  </div>

                  <RevealStagger className="space-y-0" step={70}>
                    {group.items.map((item) => (
                      <div
                        key={item.q}
                        className="border-b py-7 first:pt-0 last:border-b-0"
                        style={{ borderColor: border }}
                      >
                        <h4 className="text-lg font-semibold text-[#101820] sm:text-xl">
                          {item.q}
                        </h4>
                        <p
                          className="mt-3 max-w-3xl text-base leading-[1.6]"
                          style={{ color: muted }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </RevealStagger>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={80}>
            <div
              className="mt-16 flex flex-col gap-6 border-t pt-12 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: border }}
            >
              <div className="max-w-[560px]">
                <h3 className="font-display text-3xl font-bold tracking-tight uppercase">
                  Question not answered here?
                </h3>
                <p className="mt-3 text-base leading-[1.55]" style={{ color: muted }}>
                  Tell us your operating environment and we&apos;ll respond with
                  the specific information your evaluation needs.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                >
                  Request a Briefing
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  href="/datasheets"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-7 text-sm font-semibold tracking-wide text-[#101820] uppercase transition-colors hover:border-[#6e7f42]"
                  style={{ borderColor: border }}
                >
                  See Datasheets
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
