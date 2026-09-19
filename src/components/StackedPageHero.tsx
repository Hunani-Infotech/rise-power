import Image from "next/image";

type StackedPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Extra classes for the image (object-position, etc.). */
  imageClassName?: string;
  /** Section background when copy sits below the photo (below xl). */
  tone?: string;
  /** Shorter desktop height for article / detail heroes. */
  compact?: boolean;
  /** Max width for the copy column (default 1440px). */
  contentMaxWidthClassName?: string;
  children: React.ReactNode;
};

/**
 * Page hero: image above / copy below below xl; full-bleed cinematic overlay on xl+.
 * Matches the home hero pattern so mobile never lays text over a cropped photo.
 */
export function StackedPageHero({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  tone = "#0a100e",
  compact = false,
  contentMaxWidthClassName = "max-w-[1440px]",
  children,
}: StackedPageHeroProps) {
  const desktopMinH = compact
    ? "xl:min-h-[min(62svh,520px)]"
    : "xl:min-h-[min(100svh,800px)]";
  const copyPad = compact
    ? "xl:pt-28 xl:pb-12"
    : "xl:pt-32 xl:pb-20";

  return (
    <section
      className={`relative flex w-full flex-col overflow-hidden text-white ${desktopMinH}`}
      style={{ backgroundColor: tone }}
    >
      <div className="relative aspect-[3/2] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`hero-animate-media ${imageClassName}`}
        />
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/45 via-transparent to-transparent" />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-1 flex-col justify-center px-6 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 lg:px-10 ${desktopMinH} ${copyPad} [&_p]:!text-white`}
      >
        {children}
      </div>
    </section>
  );
}
