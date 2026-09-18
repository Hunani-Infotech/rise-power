"use client";

import {
  Children,
  startTransition,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SAGE = "#6e7f42";
const INK = "#161616";
const CREAM = "#f3f0e8";

export type SnapCarouselProps = {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  /** Auto-advance interval in ms. `null` / omitted disables autoplay. */
  autoPlayMs?: number | null;
};

export function SnapCarousel({
  children,
  ariaLabel,
  className = "",
  trackClassName = "",
  itemClassName = "",
  showArrows = true,
  showDots = true,
  autoPlayMs = null,
}: SnapCarouselProps) {
  const items = Children.toArray(children);
  const count = items.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotionRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  function scrollToIndex(index: number) {
    if (count === 0) return;
    const next = ((index % count) + count) % count;
    const el = itemRefs.current[next];
    el?.scrollIntoView({
      behavior: reduceMotionRef.current ? "instant" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    reduceMotionRef.current = reduceMotion;
  }, [reduceMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count === 0) return;

    const observers: IntersectionObserver[] = [];
    const ratios = new Map<number, number>();

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          ratios.set(index, entry.intersectionRatio);
          let bestIndex = 0;
          let bestRatio = -1;
          ratios.forEach((ratio, i) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestIndex = i;
            }
          });
          if (bestRatio > 0) {
            startTransition(() => {
              setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
            });
          }
        },
        {
          root: track,
          threshold: [0.25, 0.5, 0.75, 1],
        },
      );
      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [count]);

  useEffect(() => {
    if (
      autoPlayMs == null ||
      autoPlayMs <= 0 ||
      count <= 1 ||
      paused ||
      reduceMotion
    ) {
      return;
    }

    const id = window.setInterval(() => {
      const next = activeIndexRef.current + 1;
      const el = itemRefs.current[((next % count) + count) % count];
      el?.scrollIntoView({
        behavior: reduceMotionRef.current ? "instant" : "smooth",
        inline: "center",
        block: "nearest",
      });
    }, autoPlayMs);

    return () => window.clearInterval(id);
  }, [autoPlayMs, count, paused, reduceMotion]);

  if (count === 0) return null;

  const canNavigate = count > 1;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative">
        {showArrows && canNavigate ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm border border-[#ddd8cc] bg-[var(--cream,#f3f0e8)]/95 text-[var(--ink,#161616)] shadow-sm transition-colors hover:border-[#6e7f42] hover:text-[#6e7f42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42] sm:left-1"
              style={{ color: INK, backgroundColor: `${CREAM}f2` }}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm border border-[#ddd8cc] bg-[var(--cream,#f3f0e8)]/95 text-[var(--ink,#161616)] shadow-sm transition-colors hover:border-[#6e7f42] hover:text-[#6e7f42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42] sm:right-1"
              style={{ color: INK, backgroundColor: `${CREAM}f2` }}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </>
        ) : null}

        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          tabIndex={0}
          className={`snap-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-[#6e7f42]/40 ${trackClassName}`}
        >
          {items.map((child, index) => (
            <div
              key={
                typeof child === "object" &&
                child !== null &&
                "key" in child &&
                child.key != null
                  ? String(child.key)
                  : `snap-${index}`
              }
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${count}`}
              className={`shrink-0 snap-center ${itemClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && canNavigate ? (
        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label={`${ariaLabel} pagination`}
        >
          {items.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`dot-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className="h-1.5 w-4 rounded-[1px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42]"
                style={{
                  backgroundColor: isActive ? SAGE : "#ddd8cc",
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
