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
  /** Alternate image to the right for editorial rhythm. */
  imageRight?: boolean;
};

/** Soft chamfer — lighter than MarketCard, keeps industrial edge. */
const rowClip =
  "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)";

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
  imageRight = false,
}: FeaturedProductRowProps) {
  const specs = [
    { label: productUiLabels.runtime, value: runtime },
    { label: productUiLabels.weight, value: weight },
    { label: productUiLabels.power, value: power },
  ] as const;

  const media = (
    <div
      className={`relative aspect-[5/4] overflow-hidden bg-[#f3f0e8] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[12.5rem] lg:max-h-[14.5rem] ${
        imageRight
          ? "border-t border-[#ddd8cc] lg:border-t-0 lg:border-l"
          : "border-b border-[#ddd8cc] lg:border-r lg:border-b-0"
      }`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={image}
          fill
          quality={75}
          priority={false}
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 36vw"
        />
      ) : (
        <PlaceholderMedia
          label={image}
          className="absolute inset-0 min-h-full"
        />
      )}
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center gap-4 p-5 sm:gap-4 sm:p-5 lg:px-7 lg:py-5">
      <div>
        <h3 className="font-display text-[1.6rem] leading-none font-bold tracking-[0.06em] text-[#6e7f42] uppercase sm:text-[1.85rem]">
          {name}
          {trademark ? (
            <span className="align-super text-[0.55em]">{trademark}</span>
          ) : null}
        </h3>
        <p className="mt-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#1a1c16] uppercase">
          {subtitle}
        </p>
        <p className="mt-2.5 max-w-xl text-sm leading-snug text-[#5c584e] line-clamp-2">
          {body}
        </p>
      </div>

      <dl className="grid grid-cols-3 divide-x divide-[#ddd8cc] border-y border-[#ddd8cc]">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="px-3 py-2.5 first:pl-0 last:pr-0 sm:px-4 sm:py-3"
          >
            <dt className="text-[9px] font-semibold tracking-[0.16em] text-[#5c584e] uppercase">
              {spec.label}
            </dt>
            <dd className="mt-1 font-display text-[0.95rem] leading-none font-bold tracking-tight text-[#1a1c16] sm:text-base">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex justify-end">
        <Link
          href={detailsHref}
          className="inline-flex min-h-9 items-center gap-2 border border-[#cfc9bb] px-3.5 text-[11px] font-semibold tracking-[0.14em] text-[#1a1c16] uppercase transition-colors hover:border-[#1a1c16] rounded-sm"
        >
          {productUiLabels.viewDetails}
          <ArrowRight className="size-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );

  return (
    <article
      id={name.toLowerCase().replace(/\s+/g, "-")}
      className="motion-hover-lift scroll-mt-28 overflow-hidden border border-[#ddd8cc] bg-white"
      style={{ clipPath: rowClip }}
    >
      <div
        className={
          imageRight
            ? "grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : "grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]"
        }
      >
        {media}
        {content}
      </div>
    </article>
  );
}
