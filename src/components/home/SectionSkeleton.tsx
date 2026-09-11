type SectionSkeletonProps = {
  tone?: "cream" | "dark";
  className?: string;
};

const toneStyles = {
  cream: {
    background: "#f7f5ef",
    shimmer: "rgba(26, 28, 22, 0.06)",
  },
  dark: {
    background: "#141a14",
    shimmer: "rgba(243, 239, 228, 0.08)",
  },
} as const;

/** Lightweight below-fold placeholder to avoid layout collapse while dynamic chunks load. */
export function SectionSkeleton({
  tone = "cream",
  className = "",
}: SectionSkeletonProps) {
  const colors = toneStyles[tone];

  return (
    <div
      className={`w-full min-h-[20rem] sm:min-h-[24rem] lg:min-h-[28rem] ${className}`}
      style={{ background: colors.background }}
      aria-hidden
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-16 lg:px-10 lg:py-24">
        <div
          className="mx-auto h-3 w-28 rounded-sm"
          style={{ background: colors.shimmer }}
        />
        <div
          className="mx-auto h-8 w-64 max-w-full rounded-sm sm:h-10 sm:w-96"
          style={{ background: colors.shimmer }}
        />
        <div
          className="mx-auto mt-2 h-3 w-full max-w-xl rounded-sm"
          style={{ background: colors.shimmer }}
        />
        <div
          className="mt-8 h-40 w-full rounded-sm sm:h-52 lg:h-64"
          style={{ background: colors.shimmer }}
        />
      </div>
    </div>
  );
}
