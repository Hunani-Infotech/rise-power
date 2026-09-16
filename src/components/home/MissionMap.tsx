"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crosshair,
  Flag,
  Globe2,
  MapPin,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  Thermometer,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { missionDeployments } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const sageBright = "#7a9148";

const hotspotStatIcons = {
  clock: Clock3,
  thermometer: Thermometer,
  package: Package,
  users: Users,
} as const satisfies Record<string, LucideIcon>;

const barStatIcons = {
  globe: Globe2,
  "map-pin": MapPin,
  shield: ShieldCheck,
  zap: Zap,
  flag: Flag,
} as const satisfies Record<string, LucideIcon>;

export function MissionMap() {
  const [activeId, setActiveId] = useState<string | null>(
    missionDeployments.defaultHotspotId,
  );
  const [zoom, setZoom] = useState(1);

  const index = activeId
    ? missionDeployments.hotspots.findIndex((h) => h.id === activeId)
    : -1;
  const active = index >= 0 ? missionDeployments.hotspots[index] : null;

  const go = (dir: -1 | 1) => {
    if (!active) {
      setActiveId(missionDeployments.defaultHotspotId);
      return;
    }
    const next =
      (index + dir + missionDeployments.hotspots.length) %
      missionDeployments.hotspots.length;
    const hotspot = missionDeployments.hotspots[next];
    if (hotspot) setActiveId(hotspot.id);
  };

  const zoomIn = () => setZoom((value) => Math.min(1.5, value + 0.25));
  const zoomOut = () => setZoom((value) => Math.max(1, value - 0.25));

  return (
    <div className="space-y-6 lg:space-y-8">
      <Reveal
        variant="up"
        className="overflow-hidden rounded-[1.25rem] bg-[#0a0e12] text-[#f3efe4] shadow-[0_28px_70px_rgba(10,14,10,0.2)]"
      >
        <div className="relative lg:min-h-[40rem] xl:min-h-[42rem]">
          {/* Map plane */}
          <div className="relative h-[22rem] overflow-hidden sm:h-[28rem] lg:absolute lg:inset-0 lg:h-auto">
            <div
              className="absolute inset-0 origin-center transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom})` }}
            >
              <Image
                src={missionDeployments.mapImageSrc}
                alt={missionDeployments.mapImageAlt}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover object-[38%_38%]"
              />
              <div
                className="absolute inset-0 bg-[#05080c]/25"
                aria-hidden
              />

              {missionDeployments.hotspots.map((hotspot) => {
                const isActive = hotspot.id === active?.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setActiveId(hotspot.id)}
                    className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center outline-none"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    aria-label={`${hotspot.label} — ${hotspot.location}`}
                    aria-pressed={isActive}
                  >
                    <span className="relative grid size-16 place-items-center">
                      <span
                        className={`absolute rounded-full border transition-all duration-300 ${
                          isActive
                            ? "size-14 border-[#8fad4a]/55 opacity-100"
                            : "size-12 border-[#8fad4a]/30 opacity-80"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`absolute rounded-full border transition-all duration-300 ${
                          isActive
                            ? "size-8 border-[#8fad4a]/90 opacity-100"
                            : "size-7 border-[#8fad4a]/50 opacity-90"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`relative block rounded-full transition-all duration-300 ${
                          isActive ? "size-3" : "size-2.5"
                        }`}
                        style={{
                          background: sageBright,
                          boxShadow: isActive
                            ? "0 0 0 4px rgba(143,173,74,0.22), 0 0 18px rgba(143,173,74,0.75)"
                            : "0 0 12px rgba(143,173,74,0.55)",
                        }}
                        aria-hidden
                      />
                    </span>
                    <span
                      className={`-mt-0.5 rounded px-2 py-0.5 text-[10px] font-bold tracking-[0.16em] uppercase backdrop-blur-sm transition-colors ${
                        isActive
                          ? "bg-[#0a0e12]/90 text-white"
                          : "bg-[#0a0e12]/75 text-white/75"
                      }`}
                    >
                      {hotspot.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Prompt */}
            <div className="absolute top-4 left-4 z-20 max-w-[15.5rem] rounded-lg border border-white/10 bg-[#0a0e12]/92 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:top-5 sm:left-5 sm:max-w-[17rem]">
              <p className="inline-flex items-start gap-2.5 text-[10px] leading-[1.35] font-semibold tracking-[0.14em] text-white/80 uppercase sm:text-[11px]">
                <Crosshair
                  className="mt-0.5 size-3.5 shrink-0"
                  style={{ color: sageBright }}
                  aria-hidden
                />
                {missionDeployments.mapPrompt}
              </p>
            </div>

            {/* Zoom */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-col overflow-hidden rounded-lg border border-white/15 bg-[#0a0e12]/92 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5">
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= 1.5}
                className="grid size-10 place-items-center text-white/70 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-35"
                aria-label="Zoom in"
              >
                <Plus className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
              <span className="h-px bg-white/15" aria-hidden />
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= 1}
                className="grid size-10 place-items-center text-white/70 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-35"
                aria-label="Zoom out"
              >
                <Minus className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-[4.25rem] z-20 flex items-center gap-4 rounded-lg border border-white/10 bg-[#0a0e12]/88 px-3.5 py-2.5 text-[10px] tracking-[0.14em] text-white/65 uppercase shadow-lg backdrop-blur-md sm:bottom-5 sm:left-[4.75rem]">
              {missionDeployments.legend.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span
                    className={
                      i === 0
                        ? "size-2 rounded-full"
                        : "size-2 rounded-full border bg-transparent"
                    }
                    style={
                      i === 0
                        ? { background: sageBright }
                        : { borderColor: "rgba(255,255,255,0.45)" }
                    }
                    aria-hidden
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          {active ? (
            <aside className="relative z-30 flex flex-col border-t border-white/10 bg-[#141a20] lg:absolute lg:inset-y-5 lg:right-5 lg:w-[22.5rem] lg:overflow-hidden lg:rounded-xl lg:border lg:border-white/12 lg:bg-[#151b22]/97 lg:shadow-[0_20px_50px_rgba(0,0,0,0.45)] lg:backdrop-blur-md xl:w-[24rem]">
              <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-4 pb-3">
                <div className="min-w-0">
                  <p
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: sageBright }}
                  >
                    <MapPin className="size-3.5" aria-hidden />
                    {active.status}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.65rem] leading-none font-bold tracking-wide uppercase">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                    {active.location}
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-white/60">
                    {active.subhead}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="grid size-9 shrink-0 place-items-center rounded-md text-white/45 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="Close detail panel"
                >
                  <X className="size-4" strokeWidth={1.75} aria-hidden />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]">
                {active.detailImageSrc ? (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={active.detailImageSrc}
                      alt={active.image}
                      fill
                      quality={80}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/5 px-4 text-center text-[10px] tracking-[0.14em] text-white/40 uppercase">
                    Environment imagery soon
                  </div>
                )}

                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3.5">
                  {active.stats.map((stat) => {
                    const Icon = hotspotStatIcons[stat.icon];
                    return (
                      <div key={stat.label} className="min-w-0">
                        <dt className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.12em] text-white/40 uppercase">
                          <Icon
                            className="size-3.5 shrink-0"
                            style={{ color: sageBright }}
                            aria-hidden
                          />
                          {stat.label}
                        </dt>
                        <dd className="mt-1 font-display text-[15px] leading-tight tracking-wide uppercase sm:text-base">
                          {stat.value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                <p
                  className="mt-4 text-[11px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: sageBright }}
                >
                  Mission Overview
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">
                  {active.overview}
                </p>
              </div>

              <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/10 px-4 py-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex min-h-10 items-center gap-1 px-1 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:text-white"
                  style={{ color: sageBright }}
                >
                  <ChevronLeft className="size-4" aria-hidden />
                  Previous
                </button>
                <span className="text-[11px] tracking-[0.16em] text-white/40">
                  {index + 1} / {missionDeployments.hotspots.length}
                </span>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex min-h-10 items-center gap-1 px-1 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:text-white"
                  style={{ color: sageBright }}
                >
                  Next
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>
            </aside>
          ) : null}
        </div>
      </Reveal>

      {/* Stats bar */}
      <RevealStagger
        className="grid grid-cols-2 overflow-hidden rounded-[1.25rem] border border-[#e6e2d8] bg-white shadow-[0_14px_44px_rgba(18,22,18,0.07)] sm:grid-cols-3 lg:grid-cols-5"
        step={70}
        variant="up"
      >
        {missionDeployments.stats.map((stat, i) => {
          const Icon = barStatIcons[stat.icon];
          const isLast = i === missionDeployments.stats.length - 1;
          return (
            <div
              key={stat.label}
              className={[
                "flex items-center gap-3.5 px-5 py-6 sm:gap-4 sm:px-6 sm:py-7",
                "border-[#ece8df]",
                !isLast ? "max-lg:border-b lg:border-r" : "",
                i % 2 === 0 && !isLast ? "max-sm:border-r" : "",
                i === 0 || i === 1 ? "sm:max-lg:border-r" : "",
                i === 2 ? "sm:max-lg:border-r-0" : "",
                isLast
                  ? "col-span-2 justify-center max-sm:border-b-0 sm:col-span-1 sm:justify-start"
                  : "",
              ].join(" ")}
            >
              <Icon
                className="size-8 shrink-0 sm:size-9"
                strokeWidth={1.45}
                style={{ color: sage }}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="font-display text-3xl leading-none font-bold tracking-tight text-[#1a1c16] sm:text-[2.35rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#1a1c16] uppercase">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-[#6b675e]">{stat.note}</p>
              </div>
            </div>
          );
        })}
      </RevealStagger>
    </div>
  );
}
