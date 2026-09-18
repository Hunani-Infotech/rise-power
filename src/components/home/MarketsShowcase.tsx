"use client";

import { useState } from "react";
import { threeMarkets } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { MarketRow } from "./MarketCard";

/**
 * Three Markets — accordion-style row: one featured (horizontal) panel
 * and two compact stacked panels. Hover / focus swaps which card expands.
 */
export function MarketsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Reveal variant="up" className="mt-10 sm:mt-12">
      <div
        className="flex flex-col gap-4 lg:h-[26rem] lg:flex-row lg:items-stretch lg:gap-4"
        role="list"
        aria-label="Market segments"
      >
        {threeMarkets.cards.map((item, index) => {
          const expanded = activeIndex === index;

          return (
            <div
              key={item.title}
              role="listitem"
              className={[
                "min-h-0 min-w-0 transition-[flex] duration-500 ease-out lg:h-full",
                expanded
                  ? "lg:flex-[1.65] lg:basis-0"
                  : "lg:flex-[0.85] lg:basis-0",
              ].join(" ")}
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
                onActivate={() => setActiveIndex(index)}
              />
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
