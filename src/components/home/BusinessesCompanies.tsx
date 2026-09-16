import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { businessesCompanies } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const cream = "#f3f0e8";

function CompanyCard({
  name,
  body,
  image,
  imageSrc,
  href,
  cta,
  external,
  featured,
}: (typeof businessesCompanies.companies)[number]) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  if (featured) {
    return (
      <article className="group relative min-h-[22rem] overflow-hidden rounded-2xl sm:min-h-[26rem] lg:min-h-[30rem]">
        <Image
          src={imageSrc}
          alt={image}
          fill
          quality={80}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#060806]/75 via-[#060806]/20 to-[#060806]/88"
          aria-hidden
        />

        <div className="relative flex h-full min-h-[22rem] flex-col justify-between p-6 sm:min-h-[26rem] sm:p-8 lg:min-h-[30rem]">
          <h3 className="max-w-sm font-display text-3xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-4xl">
            {name}
          </h3>

          <div>
            {body ? (
              <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                {body}
              </p>
            ) : null}
            <Link
              href={href}
              {...linkProps}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-[#f3f0e8] sm:text-xs"
              style={{ color: sage }}
            >
              {cta}
              {external ? (
                <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden />
              ) : null}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link
      href={href}
      {...linkProps}
      className="group relative block min-h-[22rem] overflow-hidden rounded-2xl sm:min-h-[26rem] lg:min-h-[30rem]"
    >
      <Image
        src={imageSrc}
        alt={image}
        fill
        quality={80}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#060806]/90 via-[#060806]/25 to-transparent"
        aria-hidden
      />

      <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-6 sm:min-h-[26rem] sm:p-8 lg:min-h-[30rem]">
        <h3 className="font-display text-3xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-4xl">
          {name}
        </h3>
        <span
          className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/80 transition-colors group-hover:text-white sm:text-xs"
        >
          {cta}
          <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export function BusinessesCompanies() {
  const { eyebrow, headingBefore, headingAccent, body, companies } =
    businessesCompanies;

  return (
    <section
      id="businesses-companies"
      className="cv-auto w-full scroll-mt-28"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1760px] px-6 py-14 sm:py-18 lg:px-10 lg:py-20">
        <Reveal variant="up">
          <p
            className="inline-flex w-full items-center justify-center gap-2 text-center font-display text-[16px] font-semibold tracking-[0.28em] uppercase"
            style={{ color: sage }}
          >
            <Sparkles className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-center font-display text-4xl leading-[0.95] font-bold tracking-tight text-[#141a14] uppercase sm:text-5xl lg:text-6xl">
            {headingBefore}{" "}
            <span style={{ color: sage }}>{headingAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#5c584e] sm:text-base">
            {body}
          </p>
        </Reveal>

        <RevealStagger
          className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6"
          step={100}
          variant="up"
        >
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
