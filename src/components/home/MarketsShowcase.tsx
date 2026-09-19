"use client";

import { threeMarkets } from "@/lib/home-content";
import { RevealStagger } from "@/components/motion/Reveal";
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
      detail={item.detail}
      href={item.href}
      cta={item.cta}
      imageSrc={item.imageSrc}
      imageLabel={item.image}
      expanded
    />
  );
}

/**
 * Three Markets — snap carousel below xl, 3-column grid from xl up.
 */
export function MarketsShowcase() {
  return (
    <div className="mt-10 sm:mt-12">
      {/* Mobile / tablet / laptop — carousel until cards have room to breathe */}
      <div className="xl:hidden">
        <SnapCarousel
          ariaLabel="Market segments"
          showArrows
          showDots
          arrowPlacement="top"
          itemClassName="w-[min(100%,22.5rem)] sm:w-[min(85vw,26rem)] md:w-[min(70vw,28rem)]"
          trackClassName="gap-4 px-0.5 pb-1"
        >
          {threeMarkets.cards.map((item, index) => (
            <MarketCardItem key={item.title} item={item} index={index} />
          ))}
        </SnapCarousel>
      </div>

      <RevealStagger
        className="hidden gap-5 xl:grid xl:grid-cols-3"
        step={70}
        variant="fade"
      >
        {threeMarkets.cards.map((item, index) => (
          <div key={item.title} role="listitem" className="min-w-0 h-full">
            <MarketCardItem item={item} index={index} />
          </div>
        ))}
      </RevealStagger>
    </div>
  );
}
