type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(110,127,66,0.22), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[991px] px-6 lg:px-10">
        <div className="hero-animate-copy">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-[42px] leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
