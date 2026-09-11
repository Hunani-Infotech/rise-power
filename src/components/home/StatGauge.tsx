type StatGaugeProps = {
  value: string;
  unit?: string;
  percent?: number;
  size?: number;
};

const ARC_GREEN = "#7a9a3a";
const TICK_GREY = "#c8c4b8";

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
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

export function StatGauge({
  value,
  unit,
  percent = 72,
  size = 158,
}: StatGaugeProps) {
  const sweep = Math.min(100, Math.max(0, percent));
  const glowId = `gauge-tip-${slug(value)}-${slug(unit ?? "u")}-${Math.round(sweep)}`;
  const cx = size / 2;
  const cy = size / 2;
  const tickOuter = size * 0.48;
  const tickInner = size * 0.42;
  const arcR = size * 0.365;
  const startAngle = -90;
  const endAngle = startAngle + (sweep / 100) * 360;
  const tip = polar(cx, cy, arcR, endAngle);
  const tickCount = 60;
  const compactValue = value.length > 4;
  const compactSize = size < 140;

  return (
    <div className="relative grid aspect-square w-full max-w-[158px] place-items-center">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
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
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {Array.from({ length: tickCount }, (_, i) => {
          const angle = -90 + (i / tickCount) * 360;
          const a = polar(cx, cy, tickInner, angle);
          const b = polar(cx, cy, tickOuter, angle);
          const major = i % 5 === 0;
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={TICK_GREY}
              strokeWidth={major ? 1.35 : 0.9}
              strokeLinecap="round"
              opacity={major ? 0.85 : 0.55}
            />
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r={arcR}
          fill="none"
          stroke="#e8e4da"
          strokeWidth={size * 0.028}
        />

        {sweep > 0.5 && (
          <path
            d={describeArc(cx, cy, arcR, startAngle, endAngle)}
            fill="none"
            stroke={ARC_GREEN}
            strokeWidth={size * 0.038}
            strokeLinecap="round"
          />
        )}

        {sweep > 0.5 && (
          <g filter={`url(#${glowId})`}>
            <circle cx={tip.x} cy={tip.y} r={size * 0.028} fill={ARC_GREEN} />
            <circle
              cx={tip.x}
              cy={tip.y}
              r={size * 0.014}
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
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        <div className="flex flex-col items-center justify-center px-1 text-center">
          <span
            className={`font-display leading-none font-bold tracking-tight text-[#1a1c16] ${
              compactValue
                ? compactSize
                  ? "text-[1.15rem]"
                  : "text-[1.25rem] sm:text-[1.55rem]"
                : compactSize
                  ? "text-[1.4rem]"
                  : "text-[clamp(1.45rem,4.2vw,2.05rem)]"
            }`}
          >
            {value}
          </span>
          {unit ? (
            <span className="mt-1 font-display text-[10px] leading-none font-semibold tracking-[0.14em] text-[#1a1c16] uppercase sm:text-[11px]">
              {unit}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
