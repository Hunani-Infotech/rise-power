"use client";

import { threeMarkets } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { MarketRow } from "./MarketCard";

/**
 * Three Markets — fixed static cards with balanced spacing and consistent sizing.
 * This keeps the section calm and proportional without any desktop accordion
 * expansion or motion-driven size jumps.
 */
export function MarketsShowcase() {
  return (
    <Reveal variant="up" className="mt-10 sm:mt-12">
      <div
        className="grid gap-4 lg:grid-cols-3"
        role="list"
        aria-label="Market segments"
      >
        {threeMarkets.cards.map((item, index) => (
          <div key={item.title} role="listitem" className="min-w-0">
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
              expanded
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
