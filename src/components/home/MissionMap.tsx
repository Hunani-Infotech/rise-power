import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Mountain,
  Snowflake,
  Sun,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { missionDeployments } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";

const theaterIcons: Record<string, LucideIcon> = {
  arctic: Snowflake,
  desert: Sun,
  mountain: Mountain,
  urban: Building2,
  maritime: Waves,
};

export function MissionMap() {
  const { comingSoon, theaters, theatersHeading, theatersBody } =
    missionDeployments;

  return (
    <div className="space-y-12 lg:space-y-16">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-stretch">
        <Reveal
          variant="left"
          className="relative min-h-[22rem] overflow-hidden bg-[#0a0e0a] p-4 sm:p-6 lg:min-h-[28rem]"
        >
          <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.18em] text-[#f3efe4]/55 uppercase">
            {comingSoon.mapPrompt}
          </p>

          <div className="relative min-h-[16rem] w-full overflow-hidden border border-white/10 sm:min-h-[18rem] lg:min-h-[22rem]">
            <Image
              src={missionDeployments.mapImageSrc}
              alt={missionDeployments.mapImageAlt}
              fill
              quality={80}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="scale-[1.45] object-cover object-[32%_38%] opacity-55"
            />
            <div
              className="absolute inset-0 bg-[#071008]/40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage: `
                linear-gradient(to right, ${sage}33 1px, transparent 1px),
                linear-gradient(to bottom, ${sage}33 1px, transparent 1px)
              `,
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />

            {/* Soft status nodes — visual echo of coverage, non-interactive */}
            {comingSoon.previewNodes.map((node) => {
              const isPeripheral = node.label === "INDIA";
              return (
                <span
                  key={node.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    opacity: isPeripheral ? 0.55 : 1,
                  }}
                  aria-hidden
                >
                  <span className="relative grid size-11 place-items-center">
                    <span
                      className={`block rounded-full ring-4 ring-[#6e7f42]/25 ${
                        isPeripheral
                          ? "size-2 opacity-60"
                          : "size-2.5 opacity-70"
                      }`}
                      style={{ background: sage }}
                    />
                  </span>
                  <span className="hidden text-[10px] font-semibold tracking-[0.14em] text-[#f3efe4]/45 uppercase sm:block">
                    {node.label}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.16em] text-[#f3efe4]/55 uppercase">
            <div className="flex gap-4">
              {comingSoon.legend.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span
                    className={
                      i === 0
                        ? "size-2 rounded-full"
                        : "size-2 rounded-full border bg-transparent"
                    }
                    style={
                      i === 0
                        ? { background: sage }
                        : { borderColor: sage }
                    }
                    aria-hidden
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          variant="right"
          delay={100}
          as="article"
          className="flex flex-col overflow-hidden border border-white/10 bg-[#121812]"
        >
          <div className="relative h-44 w-full overflow-hidden sm:h-48">
            <Image
              src={comingSoon.detailImageSrc}
              alt={comingSoon.detailImageAlt}
              fill
              quality={75}
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121812] via-[#121812]/40 to-transparent" />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:pt-4 sm:pb-3 sm:pr-4 sm:pl-5">
            <p
              className="inline-flex items-center gap-1 text-[12px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: sage }}
            >
              <MapPin className="size-4" aria-hidden /> {comingSoon.status}
            </p>
            <h3 className="mt-0.5 font-display text-2xl tracking-wide uppercase">
              {comingSoon.title}
            </h3>
            <p className="mt-0.5 text-sm text-[#f3efe4]/65">{comingSoon.subhead}</p>

            <dl className="mt-3 grid grid-cols-2 gap-3">
              {comingSoon.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] tracking-[0.14em] text-[#f3efe4]/45 uppercase">
                    {stat.label}
                  </dt>
                  <dd
                    className="mt-1 font-display text-lg tracking-wide uppercase"
                    style={{ color: sage }}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-[15px] font-semibold tracking-[0.16em] text-[#f3efe4]/45 uppercase">
              {comingSoon.overviewLabel}
            </p>
            <p className="mt-0.5 text-sm leading-relaxed text-[#f3efe4]/75">
              {comingSoon.overview}
            </p>

            <div className="mt-auto pt-5">
              <Link
                href={comingSoon.cta.href}
                className="inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:text-[#f3efe4]"
                style={{ color: sage }}
              >
                {comingSoon.cta.label}
                <ArrowRight className="size-4" strokeWidth={1.8} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Planned environment profiles — below map */}
      <div>
        <Reveal variant="up">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: sage }}
              >
                Coming Soon
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                {theatersHeading}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#f3efe4]/60 sm:text-right">
              {theatersBody}
            </p>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
          step={80}
        >
          {theaters.map((theater) => {
            const Icon = theaterIcons[theater.id] ?? MapPin;
            return (
              <article
                key={theater.id}
                className="flex h-full flex-col border border-white/10 bg-[#121812] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="grid size-10 place-items-center border border-white/10"
                    style={{ color: sage }}
                    aria-hidden
                  >
                    <Icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#f3efe4]/40 uppercase">
                    Soon
                  </span>
                </div>
                <p
                  className="mt-5 text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: sage }}
                >
                  {theater.label}
                </p>
                <h4 className="mt-1 font-display text-lg tracking-wide uppercase">
                  {theater.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#f3efe4]/60">
                  {theater.body}
                </p>
                <p className="mt-4 border-t border-white/10 pt-3 text-[10px] tracking-[0.14em] text-[#f3efe4]/45 uppercase">
                  Focus · {theater.focus}
                </p>
              </article>
            );
          })}
        </RevealStagger>
      </div>
    </div>
  );
}
