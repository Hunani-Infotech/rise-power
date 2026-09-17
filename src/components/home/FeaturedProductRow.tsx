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

/** Vertical product card for a single-row 4-column featured grid. */
export function FeaturedProductRow({
  name,
  trademark,
  subtitle,
  body,
  runtime,
  weight,
  power,
  detailsHref,
  image,
  imageSrc,
}: FeaturedProductRowProps) {
  const specs = [
    { label: productUiLabels.runtime, value: runtime },
    { label: productUiLabels.weight, value: weight },
    { label: productUiLabels.power, value: power },
  ] as const;

  return (
    <article
      id={name.toLowerCase().replace(/\s+/g, "-")}
      className="motion-hover-lift group scroll-mt-28 flex h-full flex-col overflow-hidden border border-[#ddd8cc] bg-white"
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

      <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div>
          <h3 className="font-display text-[1.15rem] leading-none font-bold tracking-[0.06em] text-[#6e7f42] uppercase sm:text-[1.25rem]">
            {name}
            {trademark ? (
              <span className="align-super text-[0.55em]">{trademark}</span>
            ) : null}
          </h3>
          <p className="mt-1.5 text-[9px] font-semibold tracking-[0.16em] text-[#1a1c16] uppercase">
            {subtitle}
          </p>
          <p className="mt-2 text-[12px] leading-snug text-[#5c584e] line-clamp-2 sm:text-[13px]">
            {body}
          </p>
        </div>

        <dl className="mt-auto space-y-2 border-t border-[#ddd8cc] pt-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-2"
            >
              <dt className="text-[8px] font-semibold tracking-[0.14em] text-[#5c584e] uppercase">
                {spec.label}
              </dt>
              <dd className="text-right font-display text-[11px] leading-none font-bold tracking-tight text-[#1a1c16] sm:text-xs">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href={detailsHref}
          className="mt-1 inline-flex min-h-9 w-full items-center justify-center gap-1.5 border border-[#cfc9bb] px-3 text-[10px] font-semibold tracking-[0.14em] text-[#1a1c16] uppercase transition-colors hover:border-[#1a1c16] rounded-sm"
        >
          {productUiLabels.viewDetails}
          <ArrowRight className="size-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}
