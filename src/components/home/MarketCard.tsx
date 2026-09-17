import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceholderMedia } from "./PlaceholderMedia";

export type MarketRowProps = {
  index: string;
  title: string;
  body: string;
  theater: string;
  href: string;
  cta: string;
  imageSrc?: string;
  imageLabel: string;
};

/**
 * Compact market tile — image + title + one line + CTA.
 * Sized for a constrained 3-up gallery (no stretched empty space).
 */
export function MarketRow({
  index,
  title,
  body,
  theater,
  href,
  cta,
  imageSrc,
  imageLabel,
}: MarketRowProps) {
  return (
    <Link
      href={href}
      aria-label={cta}
      className="motion-hover-lift group flex h-full flex-col overflow-hidden border border-[#ddd8cc] bg-white transition-colors hover:border-[#c4bdae]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e4d8]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        ) : (
          <PlaceholderMedia
            label={imageLabel}
            className="absolute inset-0 min-h-full"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1c16]/70 via-[#1a1c16]/15 to-transparent"
          aria-hidden
        />
        <span className="absolute top-3 left-3 font-display text-[11px] font-bold tracking-[0.18em] text-white/90 tabular-nums">
          {index}
        </span>
        <span className="absolute right-3 bottom-3 text-[9px] font-semibold tracking-[0.18em] text-white/80 uppercase">
          {theater}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-4 py-4 sm:px-5 sm:py-4">
        <h3 className="font-display text-[1.35rem] leading-none font-bold tracking-[0.08em] text-[#6e7f42] uppercase">
          {title}
        </h3>
        <p className="text-[13px] leading-snug text-[#5c584e] line-clamp-2">
          {body}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[11px] font-semibold tracking-[0.14em] text-[#1a1c16] uppercase transition-colors group-hover:text-[#6e7f42]">
          {cta}
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </span>
      </div>
    </Link>
  );
}

export { MarketRow as MarketCard };
