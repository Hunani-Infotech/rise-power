"use client";

import {
  Children,
  startTransition,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SAGE = "#6e7f42";

/** Keep autoplay paused briefly after a touch/pointer gesture so snap can settle. */
const AUTOPLAY_RESUME_MS = 2800;
/** Wait for snap/smooth scroll to finish before reading position. */
const SCROLL_SETTLE_MS = 140;

export type SnapCarouselProps = {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  /**
   * `top` — arrows above the track, right-aligned (default).
   * `bottom` — arrows flanking the dots under the track.
   */
  arrowPlacement?: "top" | "bottom";
  /**
   * When true, advancing past the last slide shows the first again
   * (and prev on the first shows the last). Uses cloned edge slides
   * so swipe and autoplay can wrap seamlessly.
   */
  loop?: boolean;
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
  arrowPlacement = "top",
  loop = false,
  autoPlayMs = null,
}: SnapCarouselProps) {
  const items = Children.toArray(children);
  const count = items.length;
  const canLoop = loop && count > 1;

  const slides: ReactNode[] = canLoop
    ? [items[count - 1], ...items, items[0]]
    : items;
  const slideCount = slides.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotionRef = useRef(false);
  const activeIndexRef = useRef(0);
  const resumeTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);
  const jumpingRef = useRef(false);
  const scrollingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  function slideToReal(slideIndex: number) {
    if (!canLoop) return slideIndex;
    if (slideIndex === 0) return count - 1;
    if (slideIndex === count + 1) return 0;
    return slideIndex - 1;
  }

  function realToSlide(realIndex: number) {
    return canLoop ? realIndex + 1 : realIndex;
  }

  /** ScrollLeft that centers a slide inside the track (content coordinates). */
  function centeredLeft(slideIndex: number) {
    const track = trackRef.current;
    const el = itemRefs.current[slideIndex];
    if (!track || !el) return 0;
    const slideLeft =
      el.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;
    return Math.max(0, slideLeft - (track.clientWidth - el.offsetWidth) / 2);
  }

  function nearestSlideIndex() {
    const track = trackRef.current;
    if (!track) return canLoop ? 1 : 0;

    const center = track.scrollLeft + track.clientWidth / 2;
    let bestIndex = canLoop ? 1 : 0;
    let bestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < slideCount; i += 1) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const slideLeft =
        el.getBoundingClientRect().left -
        track.getBoundingClientRect().left +
        track.scrollLeft;
      const slideCenter = slideLeft + el.offsetWidth / 2;
      const dist = Math.abs(slideCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    return bestIndex;
  }

  function setActiveReal(realIndex: number) {
    activeIndexRef.current = realIndex;
    startTransition(() => {
      setActiveIndex((prev) => (prev === realIndex ? prev : realIndex));
    });
  }

  function jumpToSlide(slideIndex: number) {
    const track = trackRef.current;
    if (!track) return;

    jumpingRef.current = true;
    scrollingRef.current = false;
    const left = centeredLeft(slideIndex);
    const prevBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";
    track.classList.remove("scroll-smooth");
    track.scrollTo({ left, behavior: "instant" });
    track.scrollLeft = left;

    window.setTimeout(() => {
      track.style.scrollBehavior = prevBehavior;
      track.classList.add("scroll-smooth");
      jumpingRef.current = false;
    }, 50);
  }

  function centerSlide(slideIndex: number, behavior: ScrollBehavior) {
    const track = trackRef.current;
    if (!track) return;

    if (behavior === "instant") {
      jumpToSlide(slideIndex);
      return;
    }

    scrollingRef.current = true;
    track.scrollTo({
      left: centeredLeft(slideIndex),
      behavior: "smooth",
    });
  }

  /**
   * After scroll settles: update active slide, and if we landed on a
   * loop clone, instantly jump to the matching real slide.
   */
  function settleScroll() {
    if (jumpingRef.current) return;

    const slideIndex = nearestSlideIndex();

    if (canLoop && (slideIndex === 0 || slideIndex === count + 1)) {
      const targetSlide = slideIndex === 0 ? count : 1;
      jumpToSlide(targetSlide);
      setActiveReal(slideToReal(targetSlide));
      return;
    }

    scrollingRef.current = false;
    setActiveReal(slideToReal(slideIndex));
  }

  function scheduleSettle() {
    if (settleTimerRef.current != null) {
      window.clearTimeout(settleTimerRef.current);
    }
    settleTimerRef.current = window.setTimeout(() => {
      settleTimerRef.current = null;
      settleScroll();
    }, SCROLL_SETTLE_MS);
  }

  /**
   * Scroll only the carousel track. Never use element.scrollIntoView.
   * With `loop`, wraps last→first / first→last via edge clones.
   */
  function scrollToIndex(index: number) {
    if (count === 0 || jumpingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const next = ((index % count) + count) % count;
    const current = activeIndexRef.current;
    const behavior: ScrollBehavior = reduceMotionRef.current
      ? "instant"
      : "smooth";

    if (!canLoop) {
      centerSlide(next, behavior);
      setActiveReal(next);
      scheduleSettle();
      return;
    }

    // Forward wrap: last → first via trailing clone
    if (current === count - 1 && next === 0) {
      centerSlide(count + 1, behavior);
      setActiveReal(0);
      scheduleSettle();
      return;
    }
    // Backward wrap: first → last via leading clone
    if (current === 0 && next === count - 1) {
      centerSlide(0, behavior);
      setActiveReal(count - 1);
      scheduleSettle();
      return;
    }

    centerSlide(realToSlide(next), behavior);
    setActiveReal(next);
    scheduleSettle();
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
    return () => {
      clearResumeTimer();
      if (settleTimerRef.current != null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, []);

  // Start on the first real slide when looping (skip leading clone).
  useLayoutEffect(() => {
    if (!canLoop) return;
    jumpToSlide(1);
    setActiveReal(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount / loop setup only
  }, [canLoop, count]);

  // Track scroll settle — do not snap/jump mid-animation (that causes stuck carousels).
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    const onScroll = () => {
      if (jumpingRef.current) return;
      scrollingRef.current = true;
      scheduleSettle();
    };

    const onScrollEnd = () => {
      if (jumpingRef.current) return;
      if (settleTimerRef.current != null) {
        window.clearTimeout(settleTimerRef.current);
        settleTimerRef.current = null;
      }
      settleScroll();
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollEnd);
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- track settle wiring
  }, [canLoop, count, slideCount]);

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
      if (jumpingRef.current || scrollingRef.current) return;
      scrollToIndex(activeIndexRef.current + 1);
    }, autoPlayMs);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional
  }, [autoPlayMs, count, paused, reduceMotion, canLoop]);

  if (count === 0) return null;

  const canNavigate = count > 1;

  function resumeAfterPointer(e: ReactPointerEvent) {
    if (e.pointerType === "mouse") return;
    resumeAutoplay(AUTOPLAY_RESUME_MS);
  }

  const showTopArrows = canNavigate && showArrows && arrowPlacement === "top";
  const showBottomArrows =
    canNavigate && showArrows && arrowPlacement === "bottom";
  const showBottomDots = canNavigate && showDots;
  const showBottomControls = showBottomArrows || showBottomDots;

  const arrowBtnClass =
    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ddd8cc] bg-white text-[var(--ink,#161616)] shadow-[0_1px_2px_rgba(22,22,22,0.06)] transition-[color,border-color,background-color,box-shadow,transform] hover:border-[var(--sage,#6e7f42)] hover:text-[var(--sage,#6e7f42)] hover:shadow-[0_2px_8px_rgba(22,22,22,0.08)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage,#6e7f42)]";

  const prevButton = (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={() => scrollToIndex(activeIndex - 1)}
      className={arrowBtnClass}
    >
      <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
    </button>
  );

  const nextButton = (
    <button
      type="button"
      aria-label="Next slide"
      onClick={() => scrollToIndex(activeIndex + 1)}
      className={arrowBtnClass}
    >
      <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
    </button>
  );

  const dots = showBottomDots ? (
    <div
      className="flex items-center justify-center gap-2"
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
  ) : null;

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
          {prevButton}
          {nextButton}
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
        {slides.map((child, index) => {
          const isClone = canLoop && (index === 0 || index === count + 1);
          const realIndex = slideToReal(index);
          const childKey =
            typeof child === "object" &&
            child !== null &&
            "key" in child &&
            child.key != null
              ? String(child.key)
              : `snap-${realIndex}`;

          return (
            <div
              key={isClone ? `clone-${index}-${childKey}` : childKey}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${realIndex + 1} of ${count}`}
              aria-hidden={isClone || undefined}
              className={`shrink-0 snap-center ${itemClassName}`}
            >
              {child}
            </div>
          );
        })}
      </div>

      {showBottomControls ? (
        <div
          className={`mt-5 flex items-center ${
            showBottomArrows
              ? "justify-center gap-3 sm:gap-4"
              : "justify-center"
          }`}
          role="group"
          aria-label={`${ariaLabel} controls`}
        >
          {showBottomArrows ? prevButton : null}
          {dots}
          {showBottomArrows ? nextButton : null}
        </div>
      ) : null}
    </div>
  );
}
