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
 * Beveled tech card — chamfered corners + gauge with divider icon.
 * Matches Frame “Built to Outperform” metrics mockup.
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
      className="motion-hover-lift h-full"
      style={{
        filter: "drop-shadow(0 12px 28px rgba(22, 28, 22, 0.09))",
      }}
    >
      <article
        className="relative flex h-full min-h-[22rem] flex-col items-center bg-white px-3.5 pt-7 pb-7 sm:px-4 sm:pt-8 sm:pb-8 lg:min-h-[30rem] lg:px-5 lg:pt-9 lg:pb-9"
        style={{
          clipPath:
            "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 16px)",
          boxShadow: "inset 0 0 0 1px #e6e3da",
        }}
      >
        <div className="mx-auto w-full max-w-[240px] lg:max-w-[260px]">
          <StatGauge value={value} unit={unit} percent={percent} size={260} />
        </div>

        {/* Divider — large icon on the rule, no circular frame */}
        <div className="relative mt-5 mb-0.5 flex w-[72%] max-w-[15rem] items-center justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{ background: "#d8d4ca" }}
            aria-hidden
          />
          <div className="relative z-[1] bg-white px-3">
            <Icon
              className="size-8 sm:size-9 lg:size-10"
              strokeWidth={1.7}
              style={{ color: PRIMARY_GREEN }}
              aria-hidden
            />
          </div>
        </div>

        <h3 className="mt-3.5 max-w-[14rem] text-center font-display text-[14px] leading-snug font-bold tracking-[0.14em] text-[#1a1c16] uppercase sm:max-w-[16rem] sm:text-[15px] lg:text-[20px]">
          {title}
        </h3>
        <p className="mt-2 max-w-[15rem] text-center text-[14px] leading-relaxed text-[#5c584e] lg:text-[15px]">
          {body}
        </p>
      </article>
    </div>
  );
}
