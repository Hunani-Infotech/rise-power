import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PlaceholderMedia } from "./PlaceholderMedia";

export type MarketCardProps = {
  title: string;
  points: readonly string[];
  pointIcons: LucideIcon[];
  href: string;
  cta: string;
  imageSrc?: string;
  imageLabel: string;
  badgeIcon: LucideIcon;
};

const sage = "#6e7f42";
const cardBg = "#121612";

/** Chamfered corners — industrial bevel matching PerformanceMetricCard language. */
const cardClip =
  "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)";

function HexBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div
      className="relative grid size-10 place-items-center sm:size-11"
      aria-hidden
    >
      <svg
        viewBox="0 0 40 40"
        className="absolute inset-0 size-full"
        fill="none"
      >
        <path
          d="M20 2.5 L35.5 11.25 V28.75 L20 37.5 L4.5 28.75 V11.25 Z"
          stroke={sage}
          strokeWidth="1.25"
        />
      </svg>
      <Icon className="relative size-4 sm:size-[18px]" strokeWidth={1.6} style={{ color: sage }} />
    </div>
  );
}

export function MarketCard({
  title,
  points,
  pointIcons,
  href,
  cta,
  imageSrc,
  imageLabel,
  badgeIcon,
}: MarketCardProps) {
  return (
    <div
      className="motion-hover-lift h-full"
      style={{
        filter: "drop-shadow(0 18px 36px rgba(18, 22, 18, 0.16))",
      }}
    >
      <article
        className="group relative flex h-full min-h-0 flex-col overflow-hidden lg:min-h-[34rem]"
        style={{
          background: cardBg,
          clipPath: cardClip,
        }}
      >
        {/* Image */}
        <div className="relative aspect-4/3 w-full shrink-0">
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
            <PlaceholderMedia label={imageLabel} className="absolute inset-0 min-h-full" />
          )}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(18,22,18,0.85), transparent)",
            }}
            aria-hidden
          />
          <div className="absolute top-3 left-3 z-10 sm:top-4 sm:left-4">
            <HexBadge icon={badgeIcon} />
          </div>
        </div>

        {/* Fine metal rule */}
        <div
          className="h-px w-full shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 4%, #6e7f42 25%, #849363 50%, #6e7f42 75%, transparent 96%)",
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="flex flex-1 flex-col px-5 pt-6 pb-6 sm:px-6 sm:pt-7 sm:pb-7">
          <h3 className="font-display text-2xl font-bold tracking-[0.1em] text-[#f7f5ef] uppercase sm:text-[1.65rem]">
            {title}
          </h3>

          <ul className="mt-5 space-y-3.5">
            {points.slice(0, 3).map((point, i) => {
              const PointIcon = pointIcons[i];
              return (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-[13px] leading-snug text-[#f3efe4]/78 sm:text-sm"
                >
                  {PointIcon ? (
                    <PointIcon
                      className="size-4 shrink-0"
                      strokeWidth={1.5}
                      style={{ color: sage }}
                    />
                  ) : null}
                  {point}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-8">
            <div
              className="mb-5 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(110,127,66,0.55), transparent)",
              }}
              aria-hidden
            />
            <Link
              href={href}
              className="motion-hover-glow group/cta inline-flex w-full min-h-12 items-center justify-center gap-3 border border-[#6e7f42] bg-[#6e7f42] px-5 text-[11px] font-semibold tracking-[0.2em] text-[#f7f5ef] uppercase transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#849363] hover:bg-[#849363] sm:text-xs"
            >
              <span>{cta}</span>
              <ArrowRight
                className="size-3.5 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1"
                strokeWidth={1.6}
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
