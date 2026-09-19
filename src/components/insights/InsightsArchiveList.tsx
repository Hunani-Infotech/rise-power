"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import type { InsightListItem } from "@/lib/insights";

const PAGE_SIZE = 8;
const LOAD_PACING_MS = 420;
const sage = "#6e7f42";
const muted = "#66717d";
const border = "#d9dfe3";
const shimmer = "rgba(16, 24, 32, 0.07)";

type InsightsArchiveListProps = {
  articles: InsightListItem[];
};

function ArchiveRowSkeleton({ index }: { index: number }) {
  return (
    <div
      className="grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-x-4 border-b py-5 pl-3 sm:grid-cols-[3.25rem_minmax(0,1fr)_5.5rem_auto] sm:gap-x-6 sm:py-6 sm:pl-5 lg:gap-x-8 lg:pl-6"
      style={{ borderColor: border }}
      aria-hidden
    >
      <div
        className="h-5 w-8 animate-pulse rounded-sm"
        style={{ background: shimmer }}
      />
      <div className="min-w-0 space-y-2">
        <div
          className="h-3 w-36 animate-pulse rounded-sm"
          style={{ background: shimmer }}
        />
        <div
          className="h-5 w-full max-w-lg animate-pulse rounded-sm"
          style={{ background: shimmer }}
        />
        <div
          className="hidden h-3 w-3/4 max-w-md animate-pulse rounded-sm sm:block"
          style={{ background: shimmer }}
        />
      </div>
      <div
        className="hidden size-[5.5rem] animate-pulse rounded-sm sm:block"
        style={{ background: shimmer }}
      />
      <div
        className="size-9 animate-pulse rounded-sm"
        style={{ background: shimmer }}
      />
      <span className="sr-only">Loading article {index + 1}</span>
    </div>
  );
}

export function InsightsArchiveList({ articles }: InsightsArchiveListProps) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(PAGE_SIZE, articles.length),
  );
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingLock = useRef(false);
  const visible = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;
  const remaining = articles.length - visibleCount;

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingLock.current) return;
    loadingLock.current = true;
    setIsLoading(true);

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, LOAD_PACING_MS);
    });

    setVisibleCount((count) => Math.min(count + PAGE_SIZE, articles.length));
    setIsLoading(false);
    loadingLock.current = false;
  }, [articles.length, hasMore]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          void loadMore();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loadMore, visibleCount]);

  return (
    <div>
      <div className="mt-8 border-t border-[#d9dfe3] sm:mt-10">
        {visible.map((article, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");

          return (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-x-4 border-b py-5 pl-3 transition-colors duration-300 hover:bg-[#f3f2ed] sm:grid-cols-[3.25rem_minmax(0,1fr)_5.5rem_auto] sm:gap-x-6 sm:py-6 sm:pl-5 lg:gap-x-8 lg:pl-6"
              style={{ borderColor: border }}
            >
              <span
                className="font-display text-lg font-bold tabular-nums tracking-tight transition-colors duration-300 group-hover:text-[#6e7f42] sm:text-xl"
                style={{ color: sage }}
              >
                {indexLabel}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <p
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[11px]"
                    style={{ color: sage }}
                  >
                    {article.category}
                  </p>
                  <span className="text-[#c5ccd2]" aria-hidden="true">
                    ·
                  </span>
                  <p
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px]"
                    style={{ color: muted }}
                  >
                    {article.displayDate}
                  </p>
                  <span className="text-[#c5ccd2]" aria-hidden="true">
                    ·
                  </span>
                  <p
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase sm:text-[11px]"
                    style={{ color: muted }}
                  >
                    {article.readTime}
                  </p>
                </div>

                <h3 className="mt-1.5 font-display text-base leading-[1.15] font-bold tracking-tight uppercase transition-colors duration-300 group-hover:text-[#6e7f42] sm:text-lg lg:text-xl">
                  {article.title}
                </h3>

                <p
                  className="mt-1.5 line-clamp-1 max-w-[54ch] text-sm leading-snug"
                  style={{ color: muted }}
                >
                  {article.excerpt}
                </p>
              </div>

              <div className="relative hidden size-[5.5rem] shrink-0 overflow-hidden bg-[#101820] sm:block">
                <Image
                  src={article.hero.src}
                  alt={article.hero.alt}
                  fill
                  sizes="88px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>

              <span
                className="flex size-9 shrink-0 items-center justify-center text-[#101820] transition-colors duration-300 group-hover:text-[#6e7f42]"
                aria-hidden="true"
              >
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}

        {isLoading
          ? Array.from({
              length: Math.min(PAGE_SIZE, remaining || PAGE_SIZE),
            }).map((_, i) => (
              <ArchiveRowSkeleton
                key={`pending-${visibleCount}-${i}`}
                index={visibleCount + i}
              />
            ))
          : null}
      </div>

      {hasMore ? (
        <div
          ref={sentinelRef}
          className="flex flex-col items-center gap-4 pt-8 pb-2"
        >
          <button
            type="button"
            onClick={() => void loadMore()}
            disabled={isLoading}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm border px-8 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-[#f3f2ed] disabled:cursor-wait disabled:opacity-70"
            style={{ borderColor: border, color: "#101820" }}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2
                  className="size-4 animate-spin"
                  style={{ color: sage }}
                  aria-hidden
                />
                Loading articles…
              </>
            ) : (
              <>
                Load more
                <span className="tabular-nums" style={{ color: muted }}>
                  ({remaining} left)
                </span>
              </>
            )}
          </button>
          <p className="sr-only" aria-live="polite">
            {isLoading
              ? "Loading more articles"
              : `${visibleCount} of ${articles.length} articles shown`}
          </p>
        </div>
      ) : (
        <p
          className="pt-8 text-center text-[11px] font-semibold tracking-[0.16em] uppercase"
          style={{ color: muted }}
        >
          All {String(articles.length).padStart(2, "0")} entries loaded
        </p>
      )}
    </div>
  );
}
