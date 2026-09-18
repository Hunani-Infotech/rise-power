import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  productUiLabels,
  type FeaturedProduct,
} from "@/lib/home-content";
import { PlaceholderMedia } from "./PlaceholderMedia";

export type FeaturedProductRowProps = FeaturedProduct & {
  imageSrc?: string;
};

/** Soft chamfer — industrial edge for column cards. */
const cardClip =
  "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)";

/** Same reveal language as Businesses & Companies body text. */
const hoverReveal =
  "max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-28 group-hover:opacity-100 group-focus-within:max-h-28 group-focus-within:opacity-100";

/** Vertical product card for a single-row 4-column featured grid. */
export function FeaturedProductRow({
  name,
  trademark,
  subtitle,
  body,
  runtime,
  runtimeNote,
  weight,
  weightNote,
  power,
  powerNote,
  idealFor,
  detailsHref,
  image,
  imageSrc,
}: FeaturedProductRowProps) {
  const specs = [
    {
      label: productUiLabels.runtime,
      value: runtime,
      note: runtimeNote,
    },
    {
      label: productUiLabels.weight,
      value: weight,
      note: weightNote,
    },
    {
      label: productUiLabels.power,
      value: power,
      note: powerNote,
    },
  ] as const;

  return (
    <article
      id={name.toLowerCase().replace(/\s+/g, "-")}
      className="motion-hover-lift group scroll-mt-28 flex h-full flex-col overflow-hidden border border-[#ddd8cc] bg-white transition-[border-color] duration-500 hover:border-[#c4bdae]"
      style={{ clipPath: cardClip }}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#f3f0e8]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={image}
            fill
            quality={75}
            priority={false}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        ) : (
          <PlaceholderMedia
            label={image}
            className="absolute inset-0 min-h-full"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 px-5 py-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-focus-within:-translate-y-1 sm:px-6 sm:py-6">
        <div>
          <h3 className="font-display text-[1.35rem] leading-none font-bold tracking-[0.05em] text-[#6e7f42] uppercase sm:text-[1.5rem]">
            {name}
            {trademark ? (
              <span className="align-super text-[0.55em]">{trademark}</span>
            ) : null}
          </h3>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-[#1a1c16] uppercase sm:text-xs">
            {subtitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5c584e] line-clamp-3">
            {body}
          </p>
        </div>

        <dl className="mt-auto space-y-2.5 border-t border-[#ddd8cc] pt-4">
          {specs.map((spec) => (
            <div key={spec.label} className="min-w-0">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-[10px] font-semibold tracking-[0.12em] text-[#5c584e] uppercase sm:text-[11px]">
                  {spec.label}
                </dt>
                <dd className="text-right font-display text-sm leading-none font-bold tracking-tight text-[#1a1c16] sm:text-[0.95rem]">
                  {spec.value}
                </dd>
              </div>
              <p
                className={`mt-0 text-right text-[10px] leading-snug text-[#6e7f42] group-hover:mt-1 group-focus-within:mt-1 sm:text-[11px] ${hoverReveal}`}
              >
                {spec.note}
              </p>
            </div>
          ))}
        </dl>

        {idealFor.length > 0 ? (
          <div className={hoverReveal}>
            <div className="border-t border-[#ddd8cc] pt-3">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-[#5c584e] uppercase sm:text-[11px]">
                {productUiLabels.idealFor}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-[#1a1c16] sm:text-xs">
                {idealFor.join(" · ")}
              </p>
            </div>
          </div>
        ) : null}

        <Link
          href={detailsHref}
          className="mt-1 inline-flex min-h-10 w-full items-center justify-center gap-2 border border-[#cfc9bb] px-4 text-xs font-semibold tracking-[0.12em] text-[#1a1c16] uppercase transition-all duration-500 ease-out group-hover:border-[#6e7f42] group-hover:bg-[#6e7f42] group-hover:text-white group-focus-within:border-[#6e7f42] group-focus-within:bg-[#6e7f42] group-focus-within:text-white rounded-sm"
        >
          {productUiLabels.viewDetails}
          <ArrowRight
            className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </article>
  );
}
