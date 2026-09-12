"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Minus, Plus } from "lucide-react";
import { missionDeployments } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";

const sage = "#6e7f42";

export function MissionMap() {
  const [activeId, setActiveId] = useState(missionDeployments.defaultHotspotId);
  const [zoom, setZoom] = useState(1);
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

  const zoomIn = () => setZoom((value) => Math.min(1.5, value + 0.25));
  const zoomOut = () => setZoom((value) => Math.max(1, value - 0.25));

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-stretch">
      <Reveal variant="left" className="relative min-h-[22rem] overflow-hidden bg-[#0a0e0a] p-4 sm:p-6 lg:min-h-[28rem]">
        <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.18em] text-[#f3efe4]/55 uppercase">
          {missionDeployments.mapPrompt}
        </p>
        <div className="relative min-h-[16rem] w-full overflow-hidden border border-white/10 sm:min-h-[18rem] lg:min-h-[22rem]">
          <div
            className="absolute inset-0 origin-center transition-transform duration-300 ease-out"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              src={missionDeployments.mapImageSrc}
              alt={missionDeployments.mapImageAlt}
              fill
              quality={80}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#071008]/30" aria-hidden />
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
          </div>

          <div className="absolute right-2 bottom-2 z-10 flex flex-col overflow-hidden border border-white/15 bg-[#0f140f]/90">
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= 1.5}
              className="grid size-11 place-items-center text-[#f3efe4]/70 transition-colors hover:bg-white/5 hover:text-[#f3efe4]"
              aria-label="Zoom in"
            >
              <Plus className="size-4" strokeWidth={1.75} aria-hidden />
            </button>
            <span className="h-px bg-white/15" aria-hidden />
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= 1}
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
      </Reveal>

      <Reveal
        variant="right"
        delay={100}
        as="article"
        className="flex flex-col overflow-hidden border border-white/10 bg-[#121812]"
      >
        {active.detailImageSrc ? (
          <Image
            src={active.detailImageSrc}
            alt={active.image}
            width={1000}
            height={520}
            quality={75}
            className="h-44 w-full object-cover sm:h-48"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        ) : null}
        <div className="flex flex-1 flex-col p-5 sm:pt-4 sm:pb-3 sm:pr-4 sm:pl-5">
          <p
            className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: sage }}
          >
            <MapPin className="size-4" /> {active.status}
          </p>
          <h3 className="mt-0.5 font-display text-2xl tracking-wide uppercase">
            {active.title}
          </h3>
          <p className="mt-0.5 text-sm text-[#f3efe4]/65">{active.subhead}</p>

          <dl className="mt-3 grid grid-cols-2 gap-3">
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

          <p className="mt-4 text-[10px] font-semibold tracking-[0.16em] text-[#f3efe4]/45 uppercase">
            Mission Overview
          </p>
          <p className="mt-0.5 text-sm leading-relaxed text-[#f3efe4]/75">
            {active.overview}
          </p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-3">
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
      </Reveal>
    </div>
  );
}
