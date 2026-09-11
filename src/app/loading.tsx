export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] flex-1 items-center justify-center bg-cream"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="animate-pulse text-ink/40">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-lg font-bold tracking-[0.2em] uppercase sm:text-xl">
            Rise
          </span>
          <svg
            viewBox="0 0 40 44"
            className="h-8 w-7 shrink-0 text-current sm:h-9 sm:w-8"
            fill="none"
            aria-hidden="true"
          >
            <polygon
              points="20,2 37,12 37,32 20,42 3,32 3,12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="20"
              y1="10"
              x2="20"
              y2="34"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-display text-lg font-bold tracking-[0.2em] uppercase sm:text-xl">
            Power
          </span>
        </div>
      </div>
    </div>
  );
}
