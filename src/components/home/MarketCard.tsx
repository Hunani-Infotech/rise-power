import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceholderMedia } from "./PlaceholderMedia";

export type MarketRowProps = {
  index: string;
  title: string;
  body: string;
  theater: string;
  points: readonly string[];
  href: string;
  cta: string;
  imageSrc?: string;
  imageLabel: string;
};

/**
 * Standard market panel — image-led card with readable copy,
 * use-case points, and a clear CTA to the full use-cases page.
 */
export function MarketRow({
  index,
  title,
  body,
  theater,
  points,
  href,
  cta,
  imageSrc,
  imageLabel,
}: MarketRowProps) {
  return (
    <article className="motion-hover-lift group flex h-full flex-col overflow-hidden border border-[#ddd8cc] bg-white">
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#e8e4d8]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <PlaceholderMedia
            label={imageLabel}
            className="absolute inset-0 min-h-full"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1c16]/55 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute top-4 left-4 inline-flex min-w-10 items-center justify-center border border-white/35 bg-[#1a1c16]/45 px-2.5 py-1 font-display text-sm font-bold tracking-[0.12em] text-white tabular-nums backdrop-blur-[2px]">
          {index}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t-2 border-[#6e7f42] px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#5c584e] uppercase">
          {theater}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-none font-bold tracking-[0.06em] text-[#1a1c16] uppercase">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#3f3c36] sm:text-[15px]">
          {body}
        </p>

        {points.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-[#ddd8cc] pt-4">
            {points.slice(0, 3).map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-[#1a1c16]"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-[#6e7f42]"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[#1a1c16] bg-transparent px-4 text-sm font-semibold tracking-[0.1em] text-[#1a1c16] uppercase transition-colors hover:bg-[#1a1c16] hover:text-white"
          >
            {cta}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export { MarketRow as MarketCard };
