import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
}: (typeof businessesCompanies.companies)[number]) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

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
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#060806]/92 via-[#060806]/35 to-transparent transition-[opacity,background] duration-500 group-hover:from-[#060806]/95 group-hover:via-[#060806]/50"
        aria-hidden
      />

      {/* Bottom cluster stays in place — soft lift + reveal on hover */}
      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-focus-visible:-translate-y-2 sm:p-8">
        <h3 className="type-card-title-lg max-w-sm text-white">
          {name}
        </h3>

        {body ? (
          <p className="type-card-body-on-dark mt-4 max-h-32 max-w-md overflow-hidden opacity-100 transition-all duration-500 ease-out [@media(hover:hover)]:mt-0 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:mt-4 [@media(hover:hover)]:group-hover:max-h-32 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:mt-4 [@media(hover:hover)]:group-focus-visible:max-h-32 [@media(hover:hover)]:group-focus-visible:opacity-100">
            {body}
          </p>
        ) : null}

        <span className="type-cta-ghost mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[#6e7f42] transition-all duration-500 ease-out [@media(hover:hover)]:rounded-none [@media(hover:hover)]:bg-transparent [@media(hover:hover)]:px-0 [@media(hover:hover)]:py-0 [@media(hover:hover)]:text-white/85 [@media(hover:hover)]:group-hover:rounded-full [@media(hover:hover)]:group-hover:bg-white [@media(hover:hover)]:group-hover:px-5 [@media(hover:hover)]:group-hover:py-2.5 [@media(hover:hover)]:group-hover:text-[#6e7f42] [@media(hover:hover)]:group-focus-visible:rounded-full [@media(hover:hover)]:group-focus-visible:bg-white [@media(hover:hover)]:group-focus-visible:px-5 [@media(hover:hover)]:group-focus-visible:py-2.5 [@media(hover:hover)]:group-focus-visible:text-[#6e7f42]">
          {cta}
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
            strokeWidth={1.8}
            aria-hidden
          />
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
            className="type-eyebrow inline-flex w-full items-center justify-center gap-2 text-center"
            style={{ color: sage }}
          >
            <Sparkles className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {eyebrow}
          </p>
          <h2 className="type-section-h2 mt-4 text-center text-[#141a14]">
            {headingBefore}{" "}
            <span style={{ color: sage }}>{headingAccent}</span>
          </h2>
          <p className="type-section-body mx-auto mt-5 max-w-2xl text-center">
            {body}
          </p>
        </Reveal>

        <RevealStagger
          className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6"
          step={70}
          variant="fade"
        >
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
