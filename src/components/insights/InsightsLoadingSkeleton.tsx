const CREAM = "#fbfaf7";
const SHIMMER = "rgba(16, 24, 32, 0.07)";
const SHIMMER_STRONG = "rgba(16, 24, 32, 0.1)";
const DARK = "#101820";
const BORDER = "#d9dfe3";

function Bone({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`animate-pulse rounded-sm ${className}`}
      style={{ background: SHIMMER, ...style }}
      aria-hidden
    />
  );
}

function DarkBone({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`animate-pulse rounded-sm ${className}`}
      style={{ background: "rgba(255,255,255,0.12)", ...style }}
      aria-hidden
    />
  );
}

/** Listing-page skeleton — mirrors /insights hero + featured + archive. */
export function InsightsIndexSkeleton() {
  return (
    <div
      className="overflow-hidden bg-[#fbfaf7] text-[#101820]"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading insights"
    >
      {/* Hero */}
      <div
        className="relative flex min-h-[70vh] items-end px-6 pb-16 sm:min-h-[75vh] sm:pb-20 lg:px-10 lg:pb-24"
        style={{ background: DARK }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-[820px]">
            <DarkBone className="h-3 w-36" />
            <DarkBone className="mt-6 h-12 w-full max-w-md sm:h-16 sm:max-w-lg" />
            <DarkBone className="mt-3 h-12 w-3/4 max-w-sm sm:h-16" />
            <DarkBone className="mt-6 h-4 w-full max-w-xl" />
            <DarkBone className="mt-2 h-4 w-2/3 max-w-md" />
            <DarkBone className="mt-8 h-12 w-44" style={{ background: "rgba(132,147,99,0.45)" }} />
          </div>
        </div>
      </div>

      {/* Featured */}
      <section
        className="border-b py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: CREAM, borderColor: BORDER }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Bone className="h-3 w-24" />
          <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Bone className="aspect-[16/10] w-full" style={{ background: SHIMMER_STRONG }} />
            <div>
              <Bone className="h-3 w-40" />
              <Bone className="mt-5 h-8 w-full" />
              <Bone className="mt-2 h-8 w-4/5" />
              <Bone className="mt-5 h-4 w-full" />
              <Bone className="mt-2 h-4 w-5/6" />
              <Bone className="mt-2 h-4 w-2/3" />
              <Bone className="mt-8 h-11 w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* Archive rows */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <Bone className="h-9 w-48 sm:h-10 sm:w-64" />
            <Bone className="h-4 w-32" />
          </div>
          <div className="mt-8 border-t" style={{ borderColor: BORDER }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-x-4 border-b py-5 sm:grid-cols-[3.25rem_minmax(0,1fr)_5.5rem_auto] sm:gap-x-6 sm:py-6"
                style={{ borderColor: BORDER }}
              >
                <Bone className="h-5 w-8" />
                <div className="min-w-0">
                  <Bone className="h-3 w-28" />
                  <Bone className="mt-3 h-5 w-full max-w-lg" />
                  <Bone className="mt-2 hidden h-3 w-3/4 max-w-md sm:block" />
                </div>
                <Bone className="hidden h-3 w-16 sm:block" />
                <Bone className="h-14 w-20 sm:h-16 sm:w-24" style={{ background: SHIMMER_STRONG }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only">Loading insights articles…</span>
    </div>
  );
}

/** Article inner-page skeleton — mirrors InsightArticleView layout. */
export function InsightArticleSkeleton() {
  return (
    <div
      className="bg-[#fbfaf7] text-[#101820]"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading article"
    >
      {/* Compact hero */}
      <div
        className="relative flex min-h-[52vh] items-end px-6 pb-12 sm:min-h-[56vh] sm:pb-16 lg:px-10"
        style={{ background: DARK }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-[720px]">
            <DarkBone className="h-3 w-48" />
            <DarkBone className="mt-5 h-10 w-full sm:h-12" />
            <DarkBone className="mt-2 h-10 w-4/5 sm:h-12" />
            <DarkBone className="mt-6 h-4 w-full max-w-xl" />
            <DarkBone className="mt-2 h-4 w-3/4 max-w-md" />
            <DarkBone className="mt-6 h-3 w-28" />
            <DarkBone className="mt-8 h-11 w-40" />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="pt-16 pb-10 sm:pt-20 lg:pt-24" style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl space-y-5 px-6 lg:px-10">
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-5/6" />
          <Bone className="mt-8 h-7 w-64" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-4/5" />
          <Bone className="mt-8 h-7 w-52" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-11/12" />
          <Bone className="h-4 w-3/4" />
          <Bone className="mt-10 aspect-[16/9] w-full" style={{ background: SHIMMER_STRONG }} />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-5/6" />
        </div>
      </section>

      {/* Related */}
      <section
        className="border-t pt-10 pb-14 sm:pt-12 sm:pb-16"
        style={{ background: CREAM, borderColor: "#e0e3dd" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Bone className="h-3 w-24" />
          <Bone className="mt-3 h-9 w-56 sm:h-10 sm:w-72" />
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {[0, 1].map((i) => (
              <div key={i}>
                <Bone className="aspect-[16/10] w-full" style={{ background: SHIMMER_STRONG }} />
                <Bone className="mt-5 h-3 w-40" />
                <Bone className="mt-3 h-6 w-full" />
                <Bone className="mt-2 h-6 w-3/4" />
                <Bone className="mt-3 h-3 w-full" />
                <Bone className="mt-1.5 h-3 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only">Loading article…</span>
    </div>
  );
}
