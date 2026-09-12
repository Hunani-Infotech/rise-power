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
    <article
      className={`motion-hover-lift flex h-full flex-col ${
        highlighted
          ? "border border-[#9fba66] bg-white p-4 shadow-[0_14px_32px_rgba(104,157,45,0.13)]"
          : "pt-4"
      }`}
    >
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

      <div className="relative mt-auto pt-5">
        <div className="relative aspect-[5/4] w-full overflow-hidden">
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
