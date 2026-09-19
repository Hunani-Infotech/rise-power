import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  DatasheetProductSection,
  type DatasheetProduct,
} from "@/components/datasheets/DatasheetProductSection";
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
      "A 3 kW zero emission generator built for sustained field operations. Operates silently across extreme temperature ranges with zero heat signature. Purpose built for defense, disaster response, and remote infrastructure.",
    specs: [
      ["Continuous Output", "3,000 W (target)"],
      ["Runtime", "Unlimited with cartridge swap"],
      ["Acoustic Signature @ 1m", "< 65 dBA"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Form Factor", "Wheeled, telescoping handle"],
      ["Output Receptacles", "2x 120 V, USB-A, USB-C, MIL connector"],
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
      "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
    specs: [
      ["Cartridge Diameter", "6 in (152 mm)"],
      ["Cartridge Height", "24 in (610 mm)"],
      ["Coupler", "Stainless quick-disconnect, push-to-connect"],
      ["Shelf Life", "Effectively indefinite"],
      ["Pack Configuration", "4x cartridges, Pelican 1610 case"],
      ["Transport", "Ground / air (certification in progress)"],
    ],
    sectionTitle: "Engineering Targets",
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
            Technical specifications for Rise Power systems. Beta-stage hardware
            in active validation — full datasheets are available on briefing
            request as compliance work completes.
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

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <DatasheetProductSection
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </main>
  );
}
