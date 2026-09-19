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
  /** Featured horizontal layout (desktop). Compact = stacked image/content. */
  expanded?: boolean;
};

/**
 * Market panel — expands into a horizontal image + copy layout when featured,
 * otherwise stacks image over content (compact). Motion is handled via CSS
 * so hover swaps feel continuous and refined.
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
  expanded = true,
}: MarketRowProps) {
  return (
    <article
      data-expanded={expanded ? "true" : "false"}
      className="market-card group relative flex h-full min-h-[22rem] overflow-hidden border border-[#ddd8cc] bg-white lg:min-h-[26rem] lg:flex-row"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(110,127,66,0.06),transparent_55%)] opacity-100"
        aria-hidden
      />

      <div className="market-card__media relative z-0 w-full shrink-0 overflow-hidden bg-[#e8e4d8] aspect-[5/3] lg:aspect-auto lg:h-auto lg:w-[56%] lg:flex-[1.1]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            quality={80}
            className="object-cover scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
        ) : (
          <PlaceholderMedia
            label={imageLabel}
            className="absolute inset-0 min-h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1c16]/35 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-55"
          aria-hidden
        />

        <span className="market-card__index absolute top-3 left-3 z-10 inline-flex min-w-9 items-center justify-center bg-[#6e7f42] px-2 py-1.5 font-display text-xs font-bold tracking-[0.14em] text-white tabular-nums shadow-[0_8px_20px_-10px_rgba(110,127,66,0.9)] sm:top-4 sm:left-4 sm:min-w-10 sm:text-sm">
          {index}
        </span>
      </div>

      <div className="market-card__copy relative z-[2] flex flex-1 flex-col border-t border-[#ddd8cc] bg-white/95 px-5 py-5 backdrop-blur-[2px] sm:px-6 sm:py-6 lg:w-[44%] lg:border-t-0 lg:border-l lg:border-[#e5e1d6] lg:px-7 lg:py-8">
        <p className="type-card-label text-[#6e7f42]">{theater}</p>
        <h3 className="mt-2 text-[#1a1c16] type-card-title-lg tracking-[-0.03em]">
          {title}
        </h3>
        <p className="type-card-body mt-3 opacity-100">{body}</p>

        {points.length > 0 ? (
          <ul className="mt-4 space-y-2.5 border-t border-[#ddd8cc] pt-4">
            {points.slice(0, 3).map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-[#1a1c16]"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#6e7f42]" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="type-cta market-card__cta inline-flex w-full min-h-11 items-center justify-center gap-2 border border-[#1a1c16] bg-transparent px-4 text-[#1a1c16] lg:w-auto lg:min-w-[11.5rem]"
          >
            {cta}
            <ArrowRight className="market-card__cta-arrow size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export { MarketRow as MarketCard };
