type StatGaugeProps = {
  value: string;
  label: string;
  percent?: number;
};

export function StatGauge({ value, label, percent = 72 }: StatGaugeProps) {
  const sweep = Math.min(100, Math.max(0, percent));

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative grid size-[9.25rem] place-items-center rounded-full sm:size-[10.5rem]"
        style={{
          background: `conic-gradient(from -90deg, #6e7f42 ${sweep}%, #ddd8cc ${sweep}% 100%)`,
        }}
      >
        <div className="absolute inset-[11px] grid place-items-center rounded-full bg-[#f3f0e8]">
          <span className="font-display text-[1.65rem] leading-none font-semibold tracking-tight text-[#1a1c16] sm:text-3xl">
            {value}
          </span>
        </div>
      </div>
      <p className="mt-4 max-w-[11rem] text-[11px] leading-relaxed tracking-[0.16em] text-[#5c584e] uppercase">
        {label}
      </p>
    </div>
  );
}
