"use client";

import { useEffect, useRef, useState } from "react";

type StatGaugeProps = {
  value: string;
  unit?: string;
  percent?: number;
  size?: number;
};

const PRIMARY_GREEN = "#6e7f42";
const ARC_GREEN = "#6e7f42";
const TICK_GREY = "#c8c4b8";
const ANIM_MS = 1100;
const TICK_COUNT = 100;
const DEFAULT_SIZE = 184;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round((cx + r * Math.cos(rad)) * 1000) / 1000,
    y: Math.round((cy + r * Math.sin(rad)) * 1000) / 1000,
  };
}

/** Clockwise SVG arc from startAngle → endAngle (degrees, 0 = 3 o'clock). */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polar(cx, cy, r, startAngle);
  const end = polar(cx, cy, r, endAngle);
  const delta = endAngle - startAngle;
  const largeArc = delta > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function slug(input: string) {
  return input.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "") || "x";
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function StatGauge({
  value,
  unit,
  percent = 72,
  size = DEFAULT_SIZE,
}: StatGaugeProps) {
  const target = Math.min(100, Math.max(0, percent));
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setProgress(target);
      return;
    }

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ANIM_MS);
        setProgress(target * easeOutCubic(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  const sweep = progress;
  const glowId = `gauge-tip-${slug(value)}-${slug(unit ?? "u")}-${Math.round(target)}`;
  const cx = size / 2;
  const cy = size / 2;
  const tickOuter = size * 0.48;
  const tickMinorInner = size * 0.435;
  const tickMajorInner = size * 0.418;
  const arcR = size * 0.365;
  const startAngle = -90;
  const endAngle = startAngle + (sweep / 100) * 360;
  const tip = polar(cx, cy, arcR, endAngle);
  const compactValue = value.length > 4;
  const compactSize = size < 180;

  return (
    <div
      ref={rootRef}
      className="relative grid aspect-square w-full place-items-center"
      style={{ maxWidth: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        shapeRendering="geometricPrecision"
        aria-hidden
      >
        <defs>
          <filter
            id={glowId}
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {Array.from({ length: TICK_COUNT }, (_, i) => {
          const angle = -90 + (i / TICK_COUNT) * 360;
          const major = i % 10 === 0;
          const mid = !major && i % 5 === 0;
          const inner = major ? tickMajorInner : mid ? size * 0.426 : tickMinorInner;
          const a = polar(cx, cy, inner, angle);
          const b = polar(cx, cy, tickOuter, angle);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={TICK_GREY}
              strokeWidth={major ? 1.05 : mid ? 0.75 : 0.55}
              strokeLinecap="butt"
              opacity={major ? 0.9 : mid ? 0.7 : 0.5}
            />
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r={arcR}
          fill="none"
          stroke="#e8e4da"
          strokeWidth={size * 0.024}
        />

        {sweep > 0.5 && (
          <path
            d={describeArc(cx, cy, arcR, startAngle, endAngle)}
            fill="none"
            stroke={ARC_GREEN}
            strokeWidth={size * 0.034}
            strokeLinecap="round"
          />
        )}

        {sweep > 0.5 && (
          <g filter={`url(#${glowId})`}>
            <circle cx={tip.x} cy={tip.y} r={size * 0.026} fill={ARC_GREEN} />
            <circle
              cx={tip.x}
              cy={tip.y}
              r={size * 0.012}
              fill="#c5db7a"
              opacity={0.95}
            />
          </g>
        )}
      </svg>

      <div
        className="relative z-[1] grid place-items-center rounded-full bg-white"
        style={{
          width: "58%",
          height: "58%",
        }}
      >
        <div className="flex flex-col items-center justify-center px-1 text-center">
          <span
            className={`font-display leading-[0.9] font-bold tracking-[-0.02em] ${
              compactValue
                ? compactSize
                  ? "text-[1.55rem] sm:text-[1.75rem]"
                  : "text-[2.65rem] sm:text-[3.15rem]"
                : compactSize
                  ? "text-[1.85rem] sm:text-[2.05rem]"
                  : "text-[clamp(2.6rem,6.2vw,3.55rem)]"
            }`}
            style={{ color: PRIMARY_GREEN }}
          >
            {value}
          </span>
          {unit ? (
            <span
              className={`mt-1 font-display leading-none font-bold uppercase ${
                compactSize
                  ? unit.length > 6
                    ? "text-[9px] tracking-[0.12em] sm:text-[10px]"
                    : "text-[11px] tracking-[0.16em] sm:text-[12px]"
                  : unit.length > 6
                    ? "text-[11px] tracking-[0.14em] sm:text-[25px]"
                    : "text-[14px] tracking-[0.18em] sm:text-[25px]"
              }`}
              style={{ color: PRIMARY_GREEN }}
            >
              {unit}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
