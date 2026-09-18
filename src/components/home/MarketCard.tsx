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
  expanded = false,
}: MarketRowProps) {
  return (
    <article
      data-expanded={expanded ? "true" : "false"}
      className={[
        "market-card group relative flex h-full min-h-[22rem] overflow-hidden border bg-white lg:min-h-[26rem]",
        expanded
          ? "market-card--expanded flex-col border-[#6e7f42] lg:flex-row"
          : "market-card--compact flex-col border-[#ddd8cc]",
      ].join(" ")}
    >
      {/* Soft sage wash when featured */}
      <div
        className={[
          "pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(110,127,66,0.06),transparent_55%)] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          expanded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-hidden
      />

      {/* Media */}
      <div
        className={[
          "market-card__media relative z-0 overflow-hidden bg-[#e8e4d8]",
          expanded
            ? "aspect-[5/3] w-full shrink-0 lg:aspect-auto lg:h-auto lg:min-h-0 lg:w-[62%] lg:flex-1"
            : "aspect-[5/3] w-full shrink-0 lg:aspect-auto lg:min-h-0 lg:flex-[1.15]",
        ].join(" ")}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            quality={80}
            className={[
              "object-cover will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              expanded ? "scale-[1.04]" : "scale-100",
            ].join(" ")}
            sizes={
              expanded
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 1024px) 100vw, 22vw"
            }
          />
        ) : (
          <PlaceholderMedia
            label={imageLabel}
            className="absolute inset-0 min-h-full"
          />
        )}

        {/* Subtle vignette — stronger when compact so image feels framed */}
        <div
          className={[
            "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1c16]/35 via-transparent to-transparent transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            expanded ? "opacity-40 lg:opacity-20" : "opacity-55",
          ].join(" ")}
          aria-hidden
        />

        <span
          className={[
            "absolute top-3 left-3 z-10 inline-flex min-w-9 items-center justify-center px-2 py-1.5 font-display text-xs font-bold tracking-[0.14em] text-white tabular-nums transition-[background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-4 sm:left-4 sm:min-w-10 sm:text-sm",
            expanded
              ? "bg-[#6e7f42] shadow-[0_8px_20px_-10px_rgba(110,127,66,0.9)]"
              : "bg-[#2a2c26]",
          ].join(" ")}
        >
          {index}
        </span>
      </div>

      {/* Copy */}
      <div
        className={[
          "market-card__copy relative z-[2] flex flex-1 flex-col bg-white/95 backdrop-blur-[2px]",
          expanded
            ? "border-t border-[#ddd8cc] px-5 py-5 sm:px-6 sm:py-6 lg:w-[38%] lg:border-t-0 lg:border-l lg:border-[#e5e1d6] lg:px-7 lg:py-8"
            : "border-t border-[#ddd8cc] px-5 py-5 sm:px-5 sm:py-5",
        ].join(" ")}
      >
        <p
          className={[
            "type-card-label transition-colors duration-500",
            expanded ? "text-[#6e7f42]" : "text-[#8a8578]",
          ].join(" ")}
        >
          {theater}
        </p>
        <h3
          className={[
            "mt-2 text-[#1a1c16] transition-[font-size,letter-spacing] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            expanded ? "type-card-title-lg tracking-[-0.03em]" : "type-card-title",
          ].join(" ")}
        >
          {title}
        </h3>
        <p
          className={[
            "type-card-body mt-3 transition-opacity duration-500 ease-out",
            expanded ? "opacity-100" : "opacity-90",
          ].join(" ")}
        >
          {body}
        </p>

        {points.length > 0 ? (
          <ul className="mt-4 space-y-2.5 border-t border-[#ddd8cc] pt-4">
            {points.slice(0, 3).map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-[#1a1c16]"
              >
                <span
                  className={[
                    "size-1.5 shrink-0 rounded-full transition-colors duration-500",
                    expanded ? "bg-[#6e7f42]" : "bg-[#1a1c16]",
                  ].join(" ")}
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
            className={[
              "type-cta market-card__cta inline-flex min-h-11 items-center justify-center gap-2 border border-[#1a1c16] bg-transparent px-4 text-[#1a1c16]",
              expanded ? "w-full lg:w-auto lg:min-w-[11.5rem]" : "w-full",
            ].join(" ")}
          >
            {cta}
            <ArrowRight
              className="market-card__cta-arrow size-4"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export { MarketRow as MarketCard };
