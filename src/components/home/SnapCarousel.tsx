"use client";

import {
  Children,
  startTransition,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SAGE = "#6e7f42";

/** Keep autoplay paused briefly after a touch/pointer gesture so snap can settle. */
const AUTOPLAY_RESUME_MS = 2500;

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
  const resumeTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  /**
   * Scroll only the carousel track. Never use element.scrollIntoView —
   * on mobile that often scrolls the document vertically as well.
   */
  function scrollToIndex(index: number) {
    if (count === 0) return;
    const track = trackRef.current;
    if (!track) return;

    const next = ((index % count) + count) % count;
    const el = itemRefs.current[next];
    if (!el) return;

    const trackRect = track.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta =
      elRect.left - trackRect.left - (track.clientWidth - elRect.width) / 2;
    const left = Math.max(0, track.scrollLeft + delta);

    track.scrollTo({
      left,
      behavior: reduceMotionRef.current ? "instant" : "smooth",
    });
  }

  function clearResumeTimer() {
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function pauseAutoplay() {
    clearResumeTimer();
    setPaused(true);
  }

  function resumeAutoplay(delayMs = 0) {
    clearResumeTimer();
    if (delayMs <= 0) {
      setPaused(false);
      return;
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, delayMs);
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
    return () => clearResumeTimer();
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
      scrollToIndex(activeIndexRef.current + 1);
    }, autoPlayMs);

    return () => window.clearInterval(id);
    // scrollToIndex closes over count/refs; interval only needs pause/autoplay gates
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional
  }, [autoPlayMs, count, paused, reduceMotion]);

  if (count === 0) return null;

  const canNavigate = count > 1;

  function resumeAfterPointer(e: ReactPointerEvent) {
    // Mouse hover already owns pause/resume via enter/leave.
    if (e.pointerType === "mouse") return;
    resumeAutoplay(AUTOPLAY_RESUME_MS);
  }

  const showTopArrows = canNavigate && showArrows;
  const showBottomDots = canNavigate && showDots;

  const arrowBtnClass =
    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ddd8cc] bg-white text-[var(--ink,#161616)] shadow-[0_1px_2px_rgba(22,22,22,0.06)] transition-[color,border-color,background-color,box-shadow,transform] hover:border-[var(--sage,#6e7f42)] hover:text-[var(--sage,#6e7f42)] hover:shadow-[0_2px_8px_rgba(22,22,22,0.08)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage,#6e7f42)]";

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={() => resumeAutoplay(0)}
      onPointerDown={pauseAutoplay}
      onPointerUp={resumeAfterPointer}
      onPointerCancel={resumeAfterPointer}
      onFocusCapture={pauseAutoplay}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          resumeAutoplay(0);
        }
      }}
    >
      {showTopArrows ? (
        <div
          className="mb-4 flex items-center justify-end gap-2"
          role="group"
          aria-label={`${ariaLabel} controls`}
        >
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className={arrowBtnClass}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className={arrowBtnClass}
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </div>
      ) : null}

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        className={`snap-carousel-track flex snap-x snap-mandatory gap-4 scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-[#6e7f42]/40 ${trackClassName}`}
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

      {showBottomDots ? (
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
                className="h-1.5 w-4 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage,#6e7f42)]"
                style={{
                  backgroundColor: isActive ? SAGE : "#cfc9bb",
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
