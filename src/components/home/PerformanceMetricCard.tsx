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
        className="relative flex h-full min-h-[22rem] flex-col items-center bg-white px-5 pt-8 pb-8 sm:px-6 sm:pt-9 sm:pb-9 lg:min-h-[28rem] lg:px-6 lg:pt-10 lg:pb-10"
        style={{
          clipPath:
            "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 16px)",
          boxShadow: "inset 0 0 0 1px #e6e3da",
        }}
      >
        <div className="mx-auto w-full max-w-[220px] lg:max-w-[240px]">
          <StatGauge value={value} unit={unit} percent={percent} size={240} />
        </div>

        {/* Divider — large icon on the rule, no circular frame */}
        <div className="relative mt-6 mb-1 flex w-[72%] max-w-[15rem] items-center justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{ background: "#d8d4ca" }}
            aria-hidden
          />
          <div className="relative z-[1] bg-white px-3">
            <Icon
              className="size-7 sm:size-8 lg:size-9"
              strokeWidth={1.7}
              style={{ color: PRIMARY_GREEN }}
              aria-hidden
            />
          </div>
        </div>

        <h3 className="mt-4 max-w-[14rem] text-center font-display text-[14px] leading-snug font-bold tracking-[0.14em] text-[#1a1c16] uppercase sm:max-w-[16rem] sm:text-[15px] lg:text-[18px]">
          {title}
        </h3>
        <p className="mt-2.5 max-w-[15rem] text-center text-[14px] leading-relaxed text-[#5c584e] lg:text-[15px]">
          {body}
        </p>
      </article>
    </div>
  );
}
