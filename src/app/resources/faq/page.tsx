import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/resources/FaqAccordion";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Procurement FAQ",
  description:
    "Common questions from procurement, programs, and integration teams evaluating Rise Power systems.",
  path: "/resources/faq",
});

const sage = "#6e7f42";
const sageOnDark = "#849363";
const muted = "#66717d";
const ink = "#101820";
const border = "#d9dfe3";

const faqGroups = [
  {
    id: "product-performance",
    title: "Product & Performance",
    summary: "Runtime, signature, and indoor operation.",
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
    id: "cartridge-logistics",
    title: "Cartridge Logistics",
    summary: "Transport, shelf life, and field swap.",
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
    id: "procurement-programs",
    title: "Procurement & Programs",
    summary: "Evaluation units, lead time, and training.",
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
    id: "compliance-export",
    title: "Compliance & Export",
    summary: "Certifications, controls, and integration.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  ),
};

function SectionEyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  const color = onDark ? sageOnDark : sage;

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
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export default function ProcurementFaqPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <StackedPageHero
        imageSrc="/media/FAQ/FAQ-hero.png"
        imageAlt="Rise Power systems prepared for procurement and program evaluation"
        tone="#0a0f10"
      >
        <div className="hero-animate-copy max-w-[780px]">
          <SectionEyebrow onDark>Resources</SectionEyebrow>

          <h1 className="mt-5 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-6 sm:text-[56px] xl:text-[82px]">
            Procurement FAQ
          </h1>

          <p className="mt-5 max-w-[640px] text-base leading-[1.55] text-white sm:mt-6 sm:text-xl xl:text-[22px]">
            Common questions from procurement, programs, and integration teams
            evaluating Rise Power systems.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#product-performance"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Browse Answers
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/45 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Request a Briefing
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* FAQ groups */}
      {faqGroups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-28 border-b bg-[#fbfaf7] py-6 sm:py-8 lg:py-10"
          style={{ borderColor: border }}
        >
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <Reveal variant="up">
              <div className="text-center">
                <p
                  className="font-display text-sm font-bold tracking-wide"
                  style={{ color: sage }}
                >
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h2
                  className="mt-1 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-4xl lg:text-[40px]"
                  style={{ color: ink }}
                >
                  {group.title}
                </h2>
                <p
                  className="mx-auto mt-2 max-w-[480px] text-base leading-[1.55]"
                  style={{ color: muted }}
                >
                  {group.summary}
                </p>
              </div>
            </Reveal>

            <FaqAccordion
              items={group.items}
              defaultOpenIndex={groupIndex === 0 ? 0 : null}
            />
          </div>
        </section>
      ))}
    </main>
  );
}
