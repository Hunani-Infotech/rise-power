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
        filter: "drop-shadow(0 14px 28px rgba(18, 22, 18, 0.18))",
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
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <PlaceholderMedia label={imageLabel} className="absolute inset-0 min-h-full" />
          )}
          <div className="absolute top-3 left-3 z-10 sm:top-4 sm:left-4">
            <HexBadge icon={badgeIcon} />
          </div>
        </div>

        {/* Sage rule */}
        <div className="h-px w-full shrink-0" style={{ background: sage }} />

        {/* Content */}
        <div className="flex flex-1 flex-col px-5 pt-5 pb-5 sm:px-6 sm:pt-6 sm:pb-6">
          <h3 className="font-display text-2xl font-bold tracking-[0.06em] text-white uppercase sm:text-[1.65rem]">
            {title}
          </h3>

          <ul className="mt-4 space-y-3">
            {points.slice(0, 3).map((point, i) => {
              const PointIcon = pointIcons[i];
              return (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-[13px] leading-snug text-white/95 sm:text-sm"
                >
                  {PointIcon ? (
                    <PointIcon
                      className="size-4 shrink-0"
                      strokeWidth={1.7}
                      style={{ color: sage }}
                    />
                  ) : null}
                  {point}
                </li>
              );
            })}
          </ul>

          <Link
            href={href}
            className="group/cta mt-auto -mx-5 -mb-5 flex w-[calc(100%+2.5rem)] items-center justify-between border-t border-white/10 px-5 py-4 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors duration-200 hover:border-[#6e7f42]/40 hover:bg-[#6e7f42] hover:text-[#121612] sm:-mx-6 sm:-mb-6 sm:w-[calc(100%+3rem)] sm:px-6 sm:text-xs"
          >
            <span>{cta}</span>
            <ArrowRight
              className="size-4 shrink-0 text-[#6e7f42] transition-transform duration-200 group-hover/cta:translate-x-1 group-hover/cta:text-[#121612]"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </article>
    </div>
  );
}
