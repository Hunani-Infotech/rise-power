import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

export type DatasheetProduct = {
  number: string; // "01"
  id: string; // anchor id e.g. "sentinel"
  name: string;
  nameLines?: string[]; // optional multi-line display title
  image: string;
  imageAlt: string;
  description: string;
  specs: [string, string][];
  sectionTitle: string;
  productHref: string;
};

const CREAM = "#fbfaf7";
const INK = "#101820";
const SAGE = "#6e7f42";
const SAGE_CTA = "#849363";
const MUTED = "#66717d";

export function DatasheetProductSection({
  product,
  index,
}: {
  product: DatasheetProduct;
  index: number;
}) {
  const imageLeft = index % 2 === 0;
  const sectionBg = index % 2 === 0 ? CREAM : "#ffffff";
  const titleLines =
    product.nameLines && product.nameLines.length > 0
      ? product.nameLines
      : null;

  return (
    <section
      id={product.id}
      className="scroll-mt-28 overflow-hidden py-8 sm:py-10 lg:py-14"
      style={{ backgroundColor: sectionBg, color: INK }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div
          className={`grid items-center gap-6 lg:gap-10 xl:gap-14 ${
            imageLeft
              ? "lg:grid-cols-[1.05fr_0.95fr]"
              : "lg:grid-cols-[0.95fr_1.05fr]"
          }`}
        >
          <Reveal
            variant={imageLeft ? "left" : "right"}
            className={imageLeft ? "lg:order-1" : "lg:order-2"}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[5px] bg-[#dfe5e4] sm:aspect-[1.08/1]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            variant={imageLeft ? "right" : "left"}
            delay={70}
            className={`flex flex-col justify-center ${
              imageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span
                className="font-display text-sm font-bold tracking-wide"
                style={{ color: SAGE }}
              >
                {product.number}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-10 sm:w-14"
                style={{ backgroundColor: "#aeb6bd" }}
              />
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: MUTED }}
              >
                Datasheet · Beta
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:mt-5 sm:text-4xl lg:text-5xl">
              {titleLines
                ? titleLines.map((line, i) => (
                    <span key={`${line}-${i}`}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))
                : product.name}
            </h2>

            <p
              className="mt-3 max-w-xl text-base leading-relaxed"
              style={{ color: MUTED }}
            >
              {product.description}
            </p>

            <div className="mt-6">
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: INK }}
              >
                {product.sectionTitle}
              </p>

              <dl className="mt-2.5 divide-y divide-[#e0e3dd] border-y border-[#e0e3dd]">
                {product.specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-4 py-2 text-sm sm:gap-6 sm:text-base"
                  >
                    <dt style={{ color: MUTED }}>{label}</dt>
                    <dd className="font-medium" style={{ color: INK }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-xs font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90"
                style={{ backgroundColor: SAGE_CTA }}
              >
                Request Full Datasheet
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>

              <Link
                href={product.productHref}
                className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#6e7f42]"
                style={{ color: INK }}
              >
                View product
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
