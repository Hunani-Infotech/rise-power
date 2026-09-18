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
  /** Called when the panel should become featured (hover / focus). */
  onActivate?: () => void;
};

/**
 * Market panel — expands into a horizontal image + copy layout when featured,
 * otherwise stacks image over content (compact).
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
  onActivate,
}: MarketRowProps) {
  return (
    <article
      className={[
        "group flex h-full min-h-[22rem] overflow-hidden border bg-white transition-[flex-grow,border-color,box-shadow] duration-500 ease-out lg:min-h-[26rem]",
        expanded
          ? "flex-col border-[#6e7f42] shadow-[0_12px_40px_-24px_rgba(26,28,22,0.45)] lg:flex-row"
          : "flex-col border-[#ddd8cc] hover:border-[#c4bfb0]",
      ].join(" ")}
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
    >
      {/* Media */}
      <div
        className={[
          "relative overflow-hidden bg-[#e8e4d8]",
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
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
        <span className="absolute top-3 left-3 z-10 inline-flex min-w-9 items-center justify-center bg-[#2a2c26] px-2 py-1.5 font-display text-xs font-bold tracking-[0.14em] text-white tabular-nums sm:top-4 sm:left-4 sm:min-w-10 sm:text-sm">
          {index}
        </span>
      </div>

      {/* Copy */}
      <div
        className={[
          "flex flex-1 flex-col bg-white",
          expanded
            ? "border-t border-[#ddd8cc] px-5 py-5 sm:px-6 sm:py-6 lg:w-[38%] lg:border-t-0 lg:border-l lg:border-[#ddd8cc] lg:px-6 lg:py-7"
            : "border-t border-[#ddd8cc] px-5 py-5 sm:px-5 sm:py-5",
        ].join(" ")}
      >
        <p className="type-card-label text-[#8a8578]">{theater}</p>
        <h3
          className={[
            "mt-2 text-[#1a1c16]",
            expanded ? "type-card-title-lg" : "type-card-title",
          ].join(" ")}
        >
          {title}
        </h3>
        <p className="type-card-body mt-3">{body}</p>

        {points.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-[#ddd8cc] pt-4">
            {points.slice(0, 3).map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-[#1a1c16]"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-[#1a1c16]"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        <div
          className={[
            "mt-auto pt-5",
            expanded ? "flex justify-start lg:justify-start" : "",
          ].join(" ")}
        >
          <Link
            href={href}
            className={[
              "type-cta inline-flex min-h-11 items-center justify-center gap-2 border border-[#1a1c16] bg-transparent px-4 text-[#1a1c16] transition-colors hover:bg-[#1a1c16] hover:text-white",
              expanded ? "w-full lg:w-auto lg:min-w-[11.5rem]" : "w-full",
            ].join(" ")}
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
