"use client";

import { threeMarkets } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";
import { MarketRow } from "./MarketCard";
import { SnapCarousel } from "./SnapCarousel";

function MarketCardItem({
  item,
  index,
}: {
  item: (typeof threeMarkets.cards)[number];
  index: number;
}) {
  return (
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
  );
}

/**
 * Three Markets — snap carousel on mobile/tablet, 3-column grid on desktop.
 */
export function MarketsShowcase() {
  return (
    <div className="mt-10 sm:mt-12">
      {/* Mobile / tablet — no Reveal wrapper so cards are never opacity-hidden */}
      <div className="lg:hidden">
        <SnapCarousel
          ariaLabel="Market segments"
          showArrows
          showDots
          arrowPlacement="top"
          itemClassName="w-[min(100%,22.5rem)] sm:w-[min(85vw,26rem)]"
          trackClassName="gap-4 px-0.5 pb-1"
        >
          {threeMarkets.cards.map((item, index) => (
            <MarketCardItem key={item.title} item={item} index={index} />
          ))}
        </SnapCarousel>
      </div>

      <Reveal
        variant="up"
        className="hidden gap-4 lg:grid lg:grid-cols-3"
      >
        {threeMarkets.cards.map((item, index) => (
          <div
            key={item.title}
            role="listitem"
            className="min-w-0"
          >
            <MarketCardItem item={item} index={index} />
          </div>
        ))}
      </Reveal>
    </div>
  );
}
