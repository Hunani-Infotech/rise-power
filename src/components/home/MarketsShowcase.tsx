"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { threeMarkets } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { MarketRow } from "./MarketCard";

const HOVER_INTENT_MS = 70;

function columnsFor(activeIndex: number): string {
  return threeMarkets.cards
    .map((_, index) => (index === activeIndex ? "1.72fr" : "0.86fr"))
    .join(" ");
}

/**
 * Three Markets — accordion-style row with hover-intent expansion.
 * CSS grid column animation keeps the swap buttery on desktop.
 * Mobile uses tap-to-expand with the same activeIndex.
 */
export function MarketsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  function clearTimers() {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }

  function activate(index: number, immediate = false) {
    clearTimers();
    if (immediate) {
      setActiveIndex(index);
      return;
    }
    hoverTimer.current = setTimeout(() => {
      startTransition(() => setActiveIndex(index));
    }, HOVER_INTENT_MS);
  }

  return (
    <Reveal variant="up" className="mt-10 sm:mt-12">
      {/* Mobile / tablet: tap accordion */}
      <div
        className="flex flex-col gap-4 lg:hidden"
        role="list"
        aria-label="Market segments"
      >
        {threeMarkets.cards.map((item, index) => {
          const expanded = activeIndex === index;

          return (
            <div key={item.title} role="listitem">
              <div
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                aria-label={`${item.title} market`}
                className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#6e7f42]/50 focus-visible:ring-offset-2"
                onClick={(event) => {
                  if ((event.target as HTMLElement).closest("a")) return;
                  setActiveIndex(index);
                }}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  setActiveIndex(index);
                }}
              >
                <MarketRow
                  index={String(index + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                  theater={item.theater}
                  points={item.points}
                  href={item.href}
                  cta={item.cta}
                  imageSrc={item.imageSrc}
                  imageLabel={item.image}
                  expanded={expanded}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: luxury hover accordion */}
      <div
        className="markets-showcase-grid hidden lg:grid"
        role="list"
        aria-label="Market segments"
        style={{ gridTemplateColumns: columnsFor(activeIndex) }}
        onPointerLeave={() => {
          clearTimers();
          leaveTimer.current = setTimeout(() => {
            startTransition(() => setActiveIndex(0));
          }, 180);
        }}
      >
        {threeMarkets.cards.map((item, index) => {
          const expanded = activeIndex === index;

          return (
            <div
              key={item.title}
              role="listitem"
              className="markets-showcase-item min-h-0 min-w-0"
              onPointerEnter={() => activate(index)}
              onFocusCapture={() => activate(index, true)}
            >
              <MarketRow
                index={String(index + 1).padStart(2, "0")}
                title={item.title}
                body={item.body}
                theater={item.theater}
                points={item.points}
                href={item.href}
                cta={item.cta}
                imageSrc={item.imageSrc}
                imageLabel={item.image}
                expanded={expanded}
              />
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
