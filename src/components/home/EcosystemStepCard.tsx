import Image from "next/image";
import { PlaceholderMedia } from "./PlaceholderMedia";

export type EcosystemStepCardProps = {
  step: string;
  title: string;
  blurb: string;
  imageSrc?: string;
  imageLabel: string;
  caption?: string;
  highlighted?: boolean;
};

const sage = "#6e7f42";

/**
 * Ecosystem step — image above / copy below at every breakpoint.
 */
export function EcosystemStepCard({
  step,
  title,
  blurb,
  imageSrc,
  imageLabel,
  caption,
  highlighted = false,
}: EcosystemStepCardProps) {
  return (
    <article
      className={`motion-hover-lift flex h-full flex-col overflow-hidden ${
        highlighted
          ? "border border-[#9fba66] bg-white p-3 shadow-[0_12px_28px_rgba(104,157,45,0.12)] sm:p-4"
          : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#e8e4d8]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            quality={75}
            className="object-cover"
            sizes="(max-width: 640px) 85vw, (max-width: 1280px) 40vw, 20vw"
          />
        ) : (
          <PlaceholderMedia
            label={imageLabel}
            className="absolute inset-0 min-h-full"
          />
        )}
        {caption ? (
          <p className="absolute inset-x-0 bottom-0 bg-[#0b0e0c]/75 px-2 py-1.5 text-center text-[10px] font-semibold tracking-[0.14em] text-[#f3efe4] uppercase">
            {caption}
          </p>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col pt-3 sm:pt-4">
        <p
          className="text-[11px] font-semibold tracking-[0.16em] uppercase sm:text-xs"
          style={{ color: sage }}
        >
          {step}
        </p>
        <h3 className="mt-1 font-display text-base leading-tight font-bold tracking-[-0.02em] text-[#161616] uppercase sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#5c584e] sm:mt-2 sm:text-sm">
          {blurb}
        </p>
      </div>
    </article>
  );
}
