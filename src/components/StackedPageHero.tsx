import Image from "next/image";

type StackedPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Extra classes for the image (object-position, etc.). */
  imageClassName?: string;
  /** Section background when copy sits below the photo (below xl). */
  tone?: string;
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
  children,
}: StackedPageHeroProps) {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden text-white xl:min-h-[min(100svh,860px)]"
      style={{ backgroundColor: tone }}
    >
      <div className="relative aspect-[5/4] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16 lg:px-10 xl:min-h-[min(100svh,860px)] xl:pt-32 xl:pb-20">
        {children}
      </div>
    </section>
  );
}
