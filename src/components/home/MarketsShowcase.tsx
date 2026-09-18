"use client";

import { startTransition, useEffect, useEffectEvent, useRef, useState } from "react";
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

  const clearTimers = useEffectEvent(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  });

  const activate = useEffectEvent((index: number, immediate = false) => {
    clearTimers();
    if (immediate) {
      setActiveIndex(index);
      return;
    }
    hoverTimer.current = setTimeout(() => {
      startTransition(() => setActiveIndex(index));
    }, HOVER_INTENT_MS);
  });

  return (
    <Reveal variant="up" className="mt-10 sm:mt-12">
      {/* Mobile / tablet: stacked */}
      <div
        className="flex flex-col gap-4 lg:hidden"
        role="list"
        aria-label="Market segments"
      >
        {threeMarkets.cards.map((item, index) => (
          <div key={item.title} role="listitem">
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
              expanded={index === 0}
            />
          </div>
        ))}
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
