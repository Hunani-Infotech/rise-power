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

const sage = "#6e7f42";

/**
 * Beveled tech card — top corners chamfered at 45°, soft shadow.
 * Matches Frame “Built to Outperform” metrics.
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
        filter: "drop-shadow(0 12px 24px rgba(22, 28, 22, 0.08))",
      }}
    >
      <article
        className="relative flex h-full flex-col items-center bg-white px-3 pt-10 pb-9 sm:px-5 sm:pt-12 sm:pb-10"
        style={{
          clipPath:
            "polygon(18px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 18px)",
          boxShadow: "inset 0 0 0 1px #e6e3da",
        }}
      >
        <div className="mx-auto w-full max-w-[158px]">
          <StatGauge value={value} unit={unit} percent={percent} size={158} />
        </div>

        <div
          className="mt-5 grid size-9 place-items-center rounded-full border"
          style={{ borderColor: `${sage}55` }}
        >
          <Icon className="size-4" strokeWidth={1.7} style={{ color: sage }} />
        </div>

        <h3 className="mt-4 max-w-[14rem] text-center font-display text-[12px] leading-snug font-bold tracking-[0.14em] text-[#1a1c16] uppercase sm:max-w-[16rem] sm:text-[13px]">
          {title}
        </h3>
        <p className="mt-2.5 max-w-[15rem] text-center text-[13px] leading-relaxed text-[#5c584e]">
          {body}
        </p>
      </article>
    </div>
  );
}
