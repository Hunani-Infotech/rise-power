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

/**
 * Full-bleed product card — same hover language as Businesses & Companies:
 * cinematic image at rest; body, specs, and CTA reveal on hover.
 */
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
    <Link
      href={detailsHref}
      id={name.toLowerCase().replace(/\s+/g, "-")}
      className="group relative flex h-full min-h-[26rem] w-full scroll-mt-28 flex-col overflow-hidden rounded-2xl sm:min-h-[30rem] lg:min-h-[34rem]"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={image}
          fill
          quality={85}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      ) : (
        <PlaceholderMedia
          label={image}
          className="absolute inset-0 min-h-full"
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#060806]/96 via-[#060806]/55 to-[#060806]/20 transition-[opacity,background] duration-500 group-hover:from-[#060806]/98 group-hover:via-[#060806]/65"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 flex min-h-[55%] flex-col justify-end p-5 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-focus-visible:-translate-y-2 sm:p-6 lg:p-7">
        <p className="type-card-label text-white">
          {subtitle}
        </p>

        <h3 className="type-card-title-lg mt-2 line-clamp-2 min-h-[2.4em] text-white">
          {name}
          {trademark ? (
            <span className="align-super text-[0.5em]">{trademark}</span>
          ) : null}
        </h3>

        {/* Details cluster — hidden until hover / keyboard focus; always open on touch */}
        <div className="mt-4 max-h-[18rem] overflow-hidden opacity-100 transition-all duration-500 ease-out [@media(hover:hover)]:mt-0 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:mt-5 [@media(hover:hover)]:group-hover:max-h-[18rem] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:mt-5 [@media(hover:hover)]:group-focus-visible:max-h-[18rem] [@media(hover:hover)]:group-focus-visible:opacity-100">
          <p className="type-card-body-on-dark max-w-sm line-clamp-3 !text-white">
            {body}
          </p>

          <dl className="mt-5 space-y-2.5 border-t border-white/25 pt-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-3"
              >
                <dt className="type-card-label text-white">
                  {spec.label}
                </dt>
                <dd className="text-right font-display text-sm font-bold tracking-tight text-white">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <span className="type-cta-ghost mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[#6e7f42] transition-all duration-500 ease-out [@media(hover:hover)]:rounded-none [@media(hover:hover)]:bg-transparent [@media(hover:hover)]:px-0 [@media(hover:hover)]:py-0 [@media(hover:hover)]:text-white [@media(hover:hover)]:group-hover:rounded-full [@media(hover:hover)]:group-hover:bg-white [@media(hover:hover)]:group-hover:px-5 [@media(hover:hover)]:group-hover:py-2.5 [@media(hover:hover)]:group-hover:text-[#6e7f42] [@media(hover:hover)]:group-focus-visible:rounded-full [@media(hover:hover)]:group-focus-visible:bg-white [@media(hover:hover)]:group-focus-visible:px-5 [@media(hover:hover)]:group-focus-visible:py-2.5 [@media(hover:hover)]:group-focus-visible:text-[#6e7f42]">
            {productUiLabels.viewDetails}
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
              strokeWidth={1.8}
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
