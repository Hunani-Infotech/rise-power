import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";

import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datasheets",
  description:
    "Technical specifications and engineering targets for Rise Power hydrogen power systems.",
};

const products = [
  {
    number: "01",
    name: "Rise Sentinel™",
    image: "/media/datasheets/sentinel-datasheet.png",
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
    imageAlt: "Rise Sentinel hydrogen power system",
  },
  {
    number: "02",
    name: "Rise Falcon™",
    image: "/media/datasheets/falcon-datasheet.png",
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
    imageAlt: "Rise Falcon hydrogen range extender mounted to a drone",
  },
  {
    number: "03",
    name: "Rise Titan™",
    image: "/media/datasheets/titan-datasheet.png",
    description:
      "High-output, scalable hydrogen power for demanding missions. Delivers continuous power in a rugged, field-ready form factor with rapid cartridge swap and minimal signature.",
    specs: [
      ["Continuous Output", "5 kW (target)"],
      ["Runtime", "Hours with standard cartridges"],
      ["System Weight", "< 50 lbs (target)"],
      ["Operating Temperature", "−20 °C to 50 °C (target)"],
      ["Ingress Protection", "IP65 (target)"],
      ["Cartridge Swap", "< 1 min, no tools"],
    ],
    sectionTitle: "Engineering Targets",
    productHref: "/products#titan",
    imageAlt: "Rise Titan hydrogen power generator",
  },
  {
    number: "04",
    name: "Hydrogen Cartridge Kit",
    image: "/media/datasheets/hydrogen-cartridge-kit-datasheet.png",
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
    imageAlt: "Hydrogen cartridge kit with rugged Rise Power case",
  },
];

export default function DatasheetsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">

      {/* HERO*/}

      <section className="relative min-h-[720px] overflow-hidden bg-[#0a0f10] sm:min-h-[760px] lg:min-h-[820px]">

        {/* Background image */}
        <Image
          src="/media/datasheets/datasheets-hero.png"
          alt="Rise Power hydrogen systems in a field environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071013]/95 via-[#071013]/75 to-[#071013]/20" /> */}

        {/* Additional bottom gradient */}
        {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071013]/80 to-transparent" /> */}

        {/* Left focused cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071013]/95 via-[#071013]/35 to-transparent" />

        {/* Additional bottom subtle gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071013]/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 py-28 sm:min-h-[760px] lg:min-h-[820px] lg:px-10">

          <Reveal variant="up" className="max-w-[780px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#75a52f]" />

              <p className="text-mm font-semibold tracking-[0.18em] text-[#8eb844] uppercase">
                Resources
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-7 font-display text-6xl leading-[0.9] font-bold tracking-tight text-white uppercase sm:text-7xl lg:text-[112px]">
              Datasheets
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[760px] text-lg leading-[1.55] text-white/85 sm:text-xl lg:text-[22px]">
              Technical specifications for Rise Power systems. Beta-stage
              hardware in active validation — full datasheets are available
              on briefing request as compliance work completes.
            </p>

            {/* Beta notice */}
            <div className="mt-9 flex max-w-[720px] overflow-hidden rounded-[5px] border border-[#6d9633] bg-[#111914]/75 backdrop-blur-sm">

              <div className="flex w-20 shrink-0 items-center justify-center border-r border-[#6d9633]/40 bg-[#182116]/80">
                <Info className="size-8 text-[#8fbd42]" />
              </div>

              <div className="px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-sm leading-[1.6] text-white/90 sm:text-base">
                  <span className="font-semibold text-white">
                    Beta technology notice:
                  </span>{" "}
                  target performance values reflect current engineering
                  specifications. Final certified figures will be published
                  as the certification roadmap completes.
                </p>
              </div>

            </div>

          </Reveal>
        </div>
      </section>

      {/* PRODUCT DATASHEETS*/}

      <div>

        {products.map((product, index) => {

          const imageLeft = index % 2 === 0;

          return (
            <section
              key={product.number}
              id={product.number === "04" ? "hydrogen-cartridge-kit" : product.number === "01" ? "sentinel" : product.number === "02" ? "falcon" : "titan"}
              className="relative overflow-hidden bg-[#fbfaf7] py-8 sm:py-12 lg:py-16"
            >

              <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

                <Reveal variant="up">

                  <article className="overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white p-4 sm:p-5 lg:p-6">

                    <div
                      className={`grid items-stretch gap-8 lg:gap-12 ${imageLeft
                        ? "lg:grid-cols-[1.04fr_0.96fr]"
                        : "lg:grid-cols-[0.96fr_1.04fr]"
                        }`}
                    >

                      {/* IMAGE*/}

                      <div
                        className={`relative min-h-[420px] overflow-hidden rounded-[5px] bg-[#dfe5e4] sm:min-h-[520px] lg:min-h-[640px] ${imageLeft ? "lg:order-1" : "lg:order-2"
                          }`}
                      >

                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 55vw, 100vw"
                          className="object-cover"
                        />

                      </div>

                      {/* CONTENT*/}

                      <div
                        className={`flex flex-col justify-center py-5 sm:px-3 lg:px-4 lg:py-8 ${imageLeft ? "lg:order-2" : "lg:order-1"
                          }`}
                      >

                        {/* Number + Datasheet status */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-5">

                          <span className="font-display text-[38px] font-bold leading-none text-[#5f8f2f] sm:text-[42px]">
                            {product.number}
                          </span>

                          <span className="h-px w-12 bg-[#aeb6bd] sm:w-16" />

                          <p className="text-mm font-semibold tracking-[0.18em] text-[#66717d] uppercase">
                            Datasheet · Beta
                          </p>

                        </div>

                        {/* Product title */}
                        <h2
                          className={`mt-6 font-display font-bold leading-[0.94] tracking-tight uppercase ${product.number === "04"
                            ? "max-w-[650px] text-[40px] sm:text-[52px] lg:text-[58px]"
                            : "text-[43px] sm:text-[55px] lg:text-[62px]"
                            }`}
                        >
                          {product.number === "04" ? (
                            <>
                              Hydrogen
                              <br />
                              Cartridge Kit
                            </>
                          ) : (
                            product.name
                          )}
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-[720px] text-base leading-[1.55] text-[#66717d] sm:text-lg">
                          {product.description}
                        </p>

                        {/* SPECIFICATIONS*/}

                        <div className="mt-9">

                          <p className="text-mm font-bold tracking-[0.18em] text-[#26313a] uppercase">
                            {product.sectionTitle}
                          </p>

                          <div className="mt-3 border-t border-[#cfd6da]">

                            {product.specs.map(([label, value]) => (
                              <div
                                key={label}
                                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-5 border-b border-[#e1e5e7] py-2.5 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-6 sm:text-base"
                              >
                                <span className="text-[#66717d]">
                                  {label}
                                </span>

                                <span className="text-[#66717d]">
                                  {value}
                                </span>
                              </div>
                            ))}

                          </div>
                        </div>

                        {/* ACTION BUTTONS*/}

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">

                          {/* <Button href="/contact" className="bg-black">
                            <span className="flex w-full items-center justify-between gap-4">
                              Request Full Datasheet
                              <ArrowRight className="size-5 shrink-0" />
                            </span>
                          </Button> */}

                          <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center gap-4 px-7 text-xs font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90 rounded-sm bg-[#5f8f2f]"
                          >
                            <span className="flex w-full items-center justify-center gap-2">
                              Request Full Datasheet
                              <ArrowRight className="size-5 shrink-0" />
                            </span>
                          </Link>

                          <a
                            href={product.productHref}
                            className="inline-flex min-h-14 items-center justify-center gap-2 border border-[#aeb6bd] px-6 text-xs font-semibold tracking-[0.06em] text-[#101820] uppercase transition-all duration-200 hover:border-[#5f8f2f] hover:bg-[#5f8f2f] hover:text-white rounded-sm"
                          >
                            Product Page
                            <ArrowRight className="size-5 shrink-0" />
                          </a>

                        </div>

                      </div>

                    </div>

                  </article>

                </Reveal>

              </div>
            </section>
          );
        })}

      </div>

    </main>
  );
}