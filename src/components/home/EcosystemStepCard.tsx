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
    <article className="motion-hover-lift flex flex-col rounded-lg">
      <p
        className="text-[11px] font-semibold tracking-[0.18em] uppercase"
        style={{ color: sage }}
      >
        {step}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold tracking-wide text-[#161616] uppercase">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5c584e]">{blurb}</p>

      <div
        className={`relative mt-4 ${highlighted ? "rounded-sm ring-2 ring-[#6e7f42]" : ""}`}
        style={
          highlighted
            ? {
                boxShadow: `0 0 0 1px ${sage}55, 0 12px 28px ${sage}40`,
              }
            : undefined
        }
      >
        <div className="relative aspect-square w-full overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageLabel}
              fill
              quality={75}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
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
      </div>
    </article>
  );
}
