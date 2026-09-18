import type { LucideIcon } from "lucide-react";
import { StatGauge } from "./StatGauge";

type PerformanceMetricCardProps = {
  icon: LucideIcon;
  value: string;
  unit?: string;
  title: string;
  body: string;
  percent?: number;
};

const PRIMARY_GREEN = "#6e7f42";

/**
 * Compact beveled metric card — gauge + divider icon + title/body.
 * Sized for even 2×2 / 4-col grids across breakpoints.
 */
export function PerformanceMetricCard({
  icon: Icon,
  value,
  unit,
  title,
  body,
  percent = 72,
}: PerformanceMetricCardProps) {
  return (
    <div
      className="motion-hover-lift h-full w-full"
      style={{
        filter: "drop-shadow(0 8px 18px rgba(22, 28, 22, 0.08))",
      }}
    >
      <article
        className="relative flex h-full flex-col items-center bg-white px-4 pt-5 pb-5 sm:px-5 sm:pt-6 sm:pb-6"
        style={{
          clipPath:
            "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 12px)",
          boxShadow: "inset 0 0 0 1px #e6e3da",
        }}
      >
        <div className="mx-auto aspect-square w-full max-w-[140px] sm:max-w-[156px]">
          <StatGauge value={value} unit={unit} percent={percent} size={156} />
        </div>

        <div className="relative mt-4 mb-0.5 flex w-[78%] max-w-[12rem] shrink-0 items-center justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{ background: "#d8d4ca" }}
            aria-hidden
          />
          <div className="relative z-[1] bg-white px-2.5">
            <Icon
              className="size-5 sm:size-6"
              strokeWidth={1.7}
              style={{ color: PRIMARY_GREEN }}
              aria-hidden
            />
          </div>
        </div>

        <h3 className="type-card-title-sm mt-3 flex min-h-[2.6em] max-w-[14rem] items-start justify-center text-center text-[0.8rem] leading-snug text-[#1a1c16] sm:min-h-[2.8em] sm:text-[0.85rem]">
          {title}
        </h3>
        <p className="type-card-body mt-1.5 min-h-[2.4em] max-w-[13.5rem] text-center text-[0.8rem] leading-snug sm:text-[0.85rem]">
          {body}
        </p>
      </article>
    </div>
  );
}
