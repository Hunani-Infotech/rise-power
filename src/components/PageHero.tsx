type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(110,127,66,0.22), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
