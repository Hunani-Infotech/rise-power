import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { products, site, standards, stats, useCases } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/media/use-cases/defense-security.jpg"
          alt="Operators in the field"
          fill
          priority
          sizes="100vw"
          className="image-grade-green object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pt-28 pb-0 lg:px-10">
          <div className="max-w-5xl pb-8 lg:pb-10">
            <h1 className="font-display text-[16vw] leading-[0.82] font-semibold tracking-[-0.03em] uppercase sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem]">
              Power the
              <br />
              mission.
              <br />
              Anywhere.
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/85 sm:text-lg">
              Silent hydrogen power for operators who can&apos;t afford downtime.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a Briefing</Button>
              <Button href="/datasheets" variant="secondary">
                Download Specs
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 py-4 text-[11px] tracking-[0.14em] text-foreground/70 uppercase">
            <span className="text-muted">Engineered to</span>
            {standards.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="border-white/15 px-4 py-5 max-lg:odd:border-r lg:border-r lg:last:border-r-0 lg:px-6 lg:py-6"
              >
                <p className="font-display text-xl tracking-wide text-foreground uppercase sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-foreground/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <h2 className="max-w-4xl font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-7xl">
            Power built for the mission
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
            Silent hydrogen power for operators who can&apos;t afford downtime.
            Rise Power systems are engineered for the environment where they
            will actually operate.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products#${product.slug}`}
                className="group border border-border bg-surface transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="image-grade object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] tracking-[0.18em] text-accent uppercase">
                    {product.number}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-wide uppercase">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                Our Capabilities
              </h2>
            </div>
            <Button href="/use-cases" variant="secondary">
              View Use Cases
            </Button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {useCases.map((item) => (
              <article
                key={item.slug}
                className="relative min-h-80 overflow-hidden border border-border"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="image-grade-green object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                <div className="relative flex h-full min-h-80 flex-col justify-end p-8">
                  <h3 className="font-display text-3xl tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src="/media/hero-fallback.jpg"
              alt="Operator swapping a Rise hydrogen cartridge"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="image-grade object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Representative deployment
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase lg:text-5xl">
              Unlimited silent comms at a forward operating base
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              A forward operating base required silent, emission free power for
              communications and ISR. A Sentinel ran continuously on a stack of
              pre positioned cartridges, each swapped in 30 seconds. No fuel
              convoy. No acoustic signature. No thermal signature.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {standards.map((item) => (
                <span
                  key={item}
                  className="border border-border px-3 py-1.5 text-[11px] tracking-[0.14em] text-muted uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl">
            Request a capability briefing
          </h2>
          <p className="mt-6 text-base text-muted lg:text-lg">
            For procurement, programs, and integration leads evaluating hydrogen
            power for serious deployments. We will respond with specs, runtime
            data, and a deployment summary tailored to your operating
            environment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Request a Briefing</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              {site.email}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
