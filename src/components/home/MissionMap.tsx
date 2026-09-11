"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { missionDeployments } from "@/lib/home-content";
import { PlaceholderMedia } from "./PlaceholderMedia";

const sage = "#6e7f42";

export function MissionMap() {
  const [activeId, setActiveId] = useState(missionDeployments.defaultHotspotId);
  const index = missionDeployments.hotspots.findIndex((h) => h.id === activeId);
  const active =
    missionDeployments.hotspots[index] ?? missionDeployments.hotspots[0];

  if (!active) return null;

  const go = (dir: -1 | 1) => {
    const next =
      (index + dir + missionDeployments.hotspots.length) %
      missionDeployments.hotspots.length;
    const hotspot = missionDeployments.hotspots[next];
    if (hotspot) setActiveId(hotspot.id);
  };

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-stretch">
      <div className="relative min-h-[22rem] overflow-hidden bg-[#0f140f] p-4 sm:p-6 lg:min-h-[28rem]">
        <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.18em] text-[#f3efe4]/55 uppercase">
          {missionDeployments.mapPrompt}
        </p>
        <div className="relative min-h-[16rem] w-full flex-1 sm:min-h-[18rem] lg:min-h-[22rem]">
          <svg
            viewBox="0 0 640 320"
            className="h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="mission-map-grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M32 0H0V32"
                  fill="none"
                  stroke="rgba(110,127,66,0.08)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="640" height="320" fill="#0a0e0a" />
            <rect width="640" height="320" fill="url(#mission-map-grid)" />
            <path
              fill="#2a3226"
              stroke="rgba(110,127,66,0.25)"
              strokeWidth="1"
              d="M78 86c22-18 48-28 78-24 18 2 34 14 52 12 16-2 28-16 46-14 24 2 38 22 62 26 18 4 36-8 54-4 22 6 28 28 48 36 14 6 32 2 44 12 18 14 16 40-2 54-22 16-52 8-76 18-20 8-28 28-50 34-28 8-58-6-86-4-24 2-42 18-66 16-26-2-44-22-70-24-22-2-44 10-64 2-18-6-22-26-14-42 8-18 28-18 40-32 10-12 4-32 4-46z"
            />
            <path
              fill="#323a2e"
              stroke="rgba(110,127,66,0.2)"
              strokeWidth="1"
              d="M318 72c28-8 54 6 80 4 22-2 40-16 62-12 26 4 40 28 64 34 16 4 34-4 48 8 18 16 8 44-10 56-26 16-58 4-84 16-18 8-26 26-48 30-32 6-62-12-90-8-18 2-32 16-52 12-16-4-22-22-18-38 6-22 30-18 44-36 10-14 4-32 4-52z"
            />
            <path
              fill="#2e362a"
              stroke="rgba(110,127,66,0.2)"
              strokeWidth="1"
              d="M108 188c18-4 34 8 52 8 16 0 28-12 44-8 18 4 24 20 42 24 14 4 30-2 42 8 16 14 4 36-14 42-24 8-48-6-72 0-16 4-28 18-46 16-22-2-36-20-56-24-14-4-30 4-40-8-10-14 2-30 16-38 12-6 28 0 32-20z"
            />
          </svg>

          {missionDeployments.hotspots.map((hotspot) => {
            const isActive = hotspot.id === active.id;
            return (
              <button
                key={hotspot.id}
                type="button"
                onClick={() => setActiveId(hotspot.id)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                aria-label={hotspot.label}
                aria-pressed={isActive}
              >
                {/* Invisible ~44px hit area; visual pin stays small */}
                <span className="relative grid size-11 place-items-center">
                  <span
                    className={`block size-3 rounded-full ring-4 ${
                      isActive ? "ring-[#6e7f42]/45" : "ring-transparent"
                    }`}
                    style={{ background: sage }}
                    aria-hidden
                  />
                </span>
                <span
                  className={`-mt-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${
                    isActive
                      ? "block text-[#f3efe4]"
                      : "hidden text-[#f3efe4]/55 sm:block"
                  }`}
                >
                  {hotspot.label}
                </span>
              </button>
            );
          })}

          {/* Stub zoom controls */}
          <div className="absolute right-2 bottom-2 z-10 flex flex-col overflow-hidden border border-white/15 bg-[#0f140f]/90">
            <button
              type="button"
              className="grid size-11 place-items-center text-[#f3efe4]/70 transition-colors hover:bg-white/5 hover:text-[#f3efe4]"
              aria-label="Zoom in"
            >
              <Plus className="size-4" strokeWidth={1.75} aria-hidden />
            </button>
            <span className="h-px bg-white/15" aria-hidden />
            <button
              type="button"
              className="grid size-11 place-items-center text-[#f3efe4]/70 transition-colors hover:bg-white/5 hover:text-[#f3efe4]"
              aria-label="Zoom out"
            >
              <Minus className="size-4" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.16em] text-[#f3efe4]/55 uppercase">
          <div className="flex gap-4">
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
      </div>

      <article className="flex flex-col overflow-hidden border border-white/10 bg-[#121812]">
        <PlaceholderMedia label={active.image} aspect="aspect-[16/9]" />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p
            className="text-[10px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: sage }}
          >
            {active.status}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-wide uppercase">
            {active.title}
          </h3>
          <p className="mt-1 text-sm text-[#f3efe4]/65">{active.subhead}</p>

          <dl className="mt-5 grid grid-cols-2 gap-4">
            {active.stats.map((stat) => (
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

          <p className="mt-5 text-[10px] font-semibold tracking-[0.16em] text-[#f3efe4]/45 uppercase">
            Mission Overview
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#f3efe4]/75">
            {active.overview}
          </p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex min-h-11 items-center gap-1 px-2 text-[11px] font-semibold tracking-[0.16em] text-[#f3efe4]/70 uppercase hover:text-[#f3efe4]"
            >
              <ChevronLeft className="size-4" />
              Previous
            </button>
            <span className="text-[11px] tracking-[0.16em] text-[#f3efe4]/45">
              {index + 1} / {missionDeployments.hotspots.length}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex min-h-11 items-center gap-1 px-2 text-[11px] font-semibold tracking-[0.16em] text-[#f3efe4]/70 uppercase hover:text-[#f3efe4]"
            >
              Next
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
