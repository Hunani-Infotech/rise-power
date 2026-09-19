import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/Button";
import {
  DatasheetProductSection,
  type DatasheetProduct,
} from "@/components/datasheets/DatasheetProductSection";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Datasheets",
  description:
    "Technical specifications and engineering targets for Rise Power hydrogen power systems.",
  path: "/datasheets",
});

const sage = "#6e7f42";
const sageOnDark = "#849363";

const products: DatasheetProduct[] = [
  {
    number: "01",
    id: "sentinel",
    name: "Rise Sentinel™",
    image: "/media/datasheets/datasheet-1.png",
    imageAlt: "Rise Sentinel hydrogen power system",
    description:
      "Man portable hydrogen power in a ruggedized, field ready form factor. Unlimited runtime via 30 second cartridge swap. Under 15 lbs. Sub ambient acoustic signature for forward positions.",
    specs: [
      ["Continuous Output", "500 W (target)"],
      ["Runtime", "Unlimited with cartridge swap"],
      ["Acoustic Signature @ 1m", "< 65 dBA"],
      ["System Weight", "< 50 lbs"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Ingress Protection", "IP65 (target)"],
      ["Cartridge Swap", "< 30 sec, no tools"],
    ],
    sectionTitle: "Engineering Targets",
    productHref: "/products#sentinel",
  },
  {
    number: "02",
    id: "falcon",
    name: "Rise Falcon™",
    image: "/media/datasheets/datasheet-2.png",
    imageAlt: "Rise Falcon hydrogen range extender mounted to a drone",
    description:
      "Plug and play hydrogen range extender for lithium polymer drones. Extends flight time to 4 plus hours, targeting 5x the range of lithium alone. Engineered for ISR, remote surveillance, and autonomous delivery.",
    specs: [
      ["Power Output", "1.7 kW peak"],
      ["Flight Time Extension", "Up to 5x lithium baseline"],
      [
        "Compatible Platforms",
        "Plug-and-play unit for compatible drones",
      ],
      ["System Weight", "< 4 kg with cartridge (target)"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Cartridge Mount", "Underbelly cradle, 2-strap clamp"],
    ],
    sectionTitle: "Engineering Targets",
    productHref: "/products#falcon",
  },
  {
    number: "03",
    id: "titan",
    name: "Rise Titan™",
    image: "/media/datasheets/datasheet-3.png",
    imageAlt: "Rise Titan hydrogen power generator",
    description:
      "High-output, scalable hydrogen power for demanding missions. Delivers continuous power in a rugged, field-ready form factor with rapid cartridge swap and minimal signature.",
    specs: [
      ["Continuous Output", "3 kW (target)"],
      ["Runtime", "Hours with standard cartridges"],
      ["System Weight", "< 50 lbs (target)"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Ingress Protection", "IP65 (target)"],
      ["Cartridge Swap", "< 1 min, no tools"],
    ],
    sectionTitle: "Engineering Targets",
    productHref: "/products#titan",
  },
  {
    number: "04",
    id: "hydrogen-cartridge-kit",
    name: "Hydrogen Cartridge Kit",
    nameLines: ["Hydrogen", "Cartridge Kit"],
    image: "/media/datasheets/datasheet-4.png",
    imageAlt: "Hydrogen cartridge kit with rugged Rise Power case",
    description:
      "Rugged, field-ready hydrogen cartridges designed for safe, reliable, and rapid power delivery. Optimized for use with RISE systems in demanding environments.",
    specs: [
      ["Cartridge Type", "Replaceable hydrogen cartridge"],
      ["Hydrogen Capacity", "~300 Wh (target)"],
      ["Form Factor", "Rugged, field-ready"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Storage Temperature", "−40 °C to 60 °C (target)"],
      ["Compatibility", "RISE systems"],
    ],
    sectionTitle: "Key Specifications",
    productHref: "/products#hydrogen-cartridge-kit",
  },
];

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

export default function DatasheetsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* HERO */}
      <StackedPageHero
        imageSrc="/media/datasheets/datasheet-hero.png"
        imageAlt="Rise Power hydrogen systems in a field environment"
        tone="#0a0f10"
      >
        <div className="hero-animate-copy max-w-[780px]">
          <SectionEyebrow onDark>Resources</SectionEyebrow>

          <h1 className="mt-5 font-display text-[42px] leading-[0.9] font-bold tracking-tight text-white uppercase sm:mt-6 sm:text-[56px] xl:text-[82px]">
            Datasheets
          </h1>

          <p className="mt-5 max-w-[640px] text-base leading-[1.55] text-white sm:mt-6 sm:text-xl xl:text-[22px]">
            Engineering targets for Rise Power systems. Full certified
            datasheets available on briefing request.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Request Full Datasheets
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
            <a
              href="#sentinel"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/45 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Browse systems
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* BETA STRIP */}
      <div className="border-y border-[#d9dfe3] bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1440px] px-6 py-4 sm:px-6 sm:py-5 lg:px-10">
          <p className="border-l-2 border-[#849363] pl-4 text-sm leading-[1.55] text-[#66717d] sm:text-[15px]">
            Values shown are beta engineering targets. Certified figures publish
            as the compliance roadmap completes.
          </p>
        </div>
      </div>

      {/* JUMP NAV */}
      <nav
        aria-label="Datasheet sections"
        className="border-b border-[#d9dfe3] bg-[#fbfaf7]"
      >
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 lg:px-10">
          {products.map((product) => (
            <a
              key={product.id}
              href={`#${product.id}`}
              className="text-xs font-semibold tracking-[0.12em] text-[#66717d] uppercase transition-colors hover:text-[#101820]"
            >
              {product.name.replace("™", "")}
            </a>
          ))}
        </div>
      </nav>

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <DatasheetProductSection
          key={product.id}
          product={product}
          index={index}
        />
      ))}

      {/* CLOSING CTA */}
      <section className="bg-[#101820] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow onDark>Next step</SectionEyebrow>

            <h2 className="mt-4 max-w-[720px] font-display text-[32px] leading-[0.94] font-bold tracking-tight text-white uppercase sm:mt-5 sm:text-[44px] lg:text-[52px]">
              Request certified datasheets
            </h2>

            <p className="mt-4 max-w-[560px] text-base leading-[1.55] text-[#b7c1c9] sm:mt-5 sm:text-lg">
              Share your mission profile and we will send the latest engineering
              packages with briefing support.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">
              <Button
                href="/contact"
                className="rounded-sm bg-[#849363] text-white hover:bg-[#849363]/90 hover:text-white active:bg-[#6e7f42]"
              >
                <span className="flex items-center gap-2 uppercase tracking-wide">
                  Request a Briefing
                  <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                </span>
              </Button>
              <Link
                href="/resources"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold tracking-wide text-[#849363] uppercase transition-opacity hover:opacity-80"
              >
                Browse resources
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
