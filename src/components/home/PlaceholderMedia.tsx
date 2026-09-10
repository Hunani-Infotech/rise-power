type PlaceholderMediaProps = {
  label: string;
  className?: string;
  aspect?: string;
};

export function PlaceholderMedia({
  label,
  className = "",
  aspect,
}: PlaceholderMediaProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-neutral-200 ${aspect ?? "h-full min-h-40"} ${className}`}
    >
      <div className="absolute inset-0 bg-[#6e7f42]/30" />
      <span className="relative z-10 px-4 text-center text-[11px] font-semibold tracking-[0.2em] text-[#2a321c] uppercase">
        {label}
      </span>
    </div>
  );
}
