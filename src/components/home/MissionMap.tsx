"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { missionDeployments } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const sageBright = "#7a9148";

function coverSize(
  stageW: number,
  stageH: number,
  imgW: number,
  imgH: number,
) {
  if (stageW <= 0 || stageH <= 0) {
    return { width: 0, height: 0 };
  }
  const stageRatio = stageW / stageH;
  const imgRatio = imgW / imgH;
  if (stageRatio > imgRatio) {
    return { width: stageW, height: stageW / imgRatio };
  }
  return { width: stageH * imgRatio, height: stageH };
}

/** Pan map so the focus pin sits in the visible center of the stage. */
function mapPanOffset({
  stageW,
  stageH,
  surfaceW,
  surfaceH,
  focusXPct,
  focusYPct,
  zoom,
}: {
  stageW: number;
  stageH: number;
  surfaceW: number;
  surfaceH: number;
  focusXPct: number;
  focusYPct: number;
  zoom: number;
}) {
  if (stageW <= 0 || stageH <= 0 || surfaceW <= 0 || surfaceH <= 0) {
    return { x: 0, y: 0 };
  }

  const targetX = stageW * 0.5;
  const targetY = stageH * 0.52;

  const focusX = (focusXPct / 100) * surfaceW;
  const focusY = (focusYPct / 100) * surfaceH;

  let x = targetX - focusX * zoom;
  let y = targetY - focusY * zoom;

  const scaledW = surfaceW * zoom;
  const scaledH = surfaceH * zoom;
  const minX = stageW - scaledW - 24;
  const maxX = 24;
  const minY = stageH - scaledH - 24;
  const maxY = 24;

  if (scaledW > stageW) {
    x = Math.min(maxX, Math.max(minX, x));
  } else {
    x = (stageW - scaledW) / 2;
  }
  if (scaledH > stageH) {
    y = Math.min(maxY, Math.max(minY, y));
  } else {
    y = (stageH - scaledH) / 2;
  }

  return { x, y };
}

function formatStatLabel(label: string) {
  return label
    .replace(/ CAPABILITY$/i, "")
    .replace(/^TARGET /i, "")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}

const mapFocusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#8fad4a]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12150f]";
const dockFocusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#6e7f42]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f0e8]";

export function MissionMap() {
  const [activeId, setActiveId] = useState(
    missionDeployments.defaultHotspotId,
  );
  const [zoom, setZoom] = useState(1.12);
  const [dockOpacity, setDockOpacity] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  const prevActiveId = useRef(activeId);
  const reduceMotion = useRef(false);

  const resolvedIndex = missionDeployments.hotspots.findIndex(
    (h) => h.id === activeId,
  );
  const index = resolvedIndex >= 0 ? resolvedIndex : 0;
  const active =
    missionDeployments.hotspots[index] ?? missionDeployments.hotspots[0];
  const mapAspect = missionDeployments.mapAspect;
  const surface = coverSize(stage.w, stage.h, mapAspect.width, mapAspect.height);

  const focusPoint = active
    ? { x: active.x, y: active.y }
    : { x: 52, y: 34 };

  const pan = mapPanOffset({
    stageW: stage.w,
    stageH: stage.h,
    surfaceW: surface.width,
    surfaceH: surface.height,
    focusXPct: focusPoint.x,
    focusYPct: focusPoint.y,
    zoom,
  });

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setStage({ w: rect.width, h: rect.height });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prevActiveId.current === activeId) return;
    prevActiveId.current = activeId;
    if (reduceMotion.current) return;

    setDockOpacity(0.45);
    const id = window.setTimeout(() => setDockOpacity(1), 40);
    return () => window.clearTimeout(id);
  }, [activeId]);

  const go = (dir: -1 | 1) => {
    const next =
      (index + dir + missionDeployments.hotspots.length) %
      missionDeployments.hotspots.length;
    const hotspot = missionDeployments.hotspots[next];
    if (hotspot) setActiveId(hotspot.id);
  };

  const zoomIn = () => setZoom((value) => Math.min(1.6, value + 0.12));
  const zoomOut = () => setZoom((value) => Math.max(1, value - 0.12));

  const dockSpecs = active.stats.slice(0, 3);

  return (
    <div>
      <Reveal
        variant="up"
        className="overflow-hidden rounded-[1rem] border border-[#1a1c16]/08 bg-[#12150f] text-[#f3efe4] shadow-[0_20px_50px_rgba(18,21,15,0.14)]"
      >
        {/* Map stage — shorter editorial plane */}
        <div
          ref={stageRef}
          className="relative h-[16rem] overflow-hidden sm:h-[18rem] lg:h-[20rem]"
          role="group"
          aria-label="Planned operating environments map"
        >
          <div
            className="absolute top-0 left-0 origin-top-left will-change-transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: surface.width || "100%",
              height: surface.height || "100%",
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            }}
          >
            <Image
              src={missionDeployments.mapImageSrc}
              alt=""
              fill
              quality={90}
              sizes="100vw"
              className="object-fill"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[#0c100a]/30 mix-blend-multiply"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#12150f]/50 via-transparent to-[#12150f]/20"
              aria-hidden
            />

            {surface.width > 0
              ? missionDeployments.hotspots.map((hotspot) => {
                  const isActive = hotspot.id === active.id;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => setActiveId(hotspot.id)}
                      className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-sm ${mapFocusRing}`}
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      aria-label={`${hotspot.label}, ${hotspot.location}`}
                      aria-pressed={isActive}
                      aria-controls="theater-dock"
                    >
                      <span className="relative grid size-10 place-items-center">
                        <span
                          className={`absolute rounded-full border motion-safe:transition-all motion-safe:duration-300 ${
                            isActive
                              ? "size-9 border-[#8fad4a]/40 opacity-100"
                              : "size-7 border-white/20 opacity-65"
                          }`}
                          aria-hidden
                        />
                        <span
                          className={`relative block rounded-full motion-safe:transition-all motion-safe:duration-300 ${
                            isActive ? "size-2.5" : "size-2"
                          }`}
                          style={{
                            background: isActive
                              ? sageBright
                              : "rgba(243,239,228,0.8)",
                            boxShadow: isActive
                              ? "0 0 0 3px rgba(143,173,74,0.16)"
                              : "none",
                          }}
                          aria-hidden
                        />
                      </span>
                      <span
                        className={`-mt-0.5 text-[9px] font-medium tracking-[0.16em] uppercase motion-safe:transition-opacity motion-safe:duration-300 ${
                          isActive
                            ? "text-white opacity-100"
                            : "text-white/50 opacity-75"
                        }`}
                      >
                        {hotspot.label}
                      </span>
                    </button>
                  );
                })
              : null}
          </div>

          <p className="pointer-events-none absolute top-4 left-4 z-20 max-w-[13rem] text-[10px] leading-relaxed text-white/50 sm:top-5 sm:left-5 sm:max-w-[17rem] sm:text-[11px]">
            {missionDeployments.mapPrompt}
          </p>

          <div className="absolute right-3 bottom-3 z-20 flex overflow-hidden rounded-sm border border-white/10 bg-[#12150f]/55 sm:right-4 sm:bottom-4">
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= 1}
              className={`grid size-8 place-items-center text-white/50 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-30 ${mapFocusRing}`}
              aria-label="Zoom out"
            >
              <Minus className="size-3.5" strokeWidth={1.5} aria-hidden />
            </button>
            <span className="w-px self-stretch bg-white/10" aria-hidden />
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= 1.6}
              className={`grid size-8 place-items-center text-white/50 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-30 ${mapFocusRing}`}
              aria-label="Zoom in"
            >
              <Plus className="size-3.5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>

        {/* Theater dock — horizontal, compact */}
        <aside
          id="theater-dock"
          className="border-t border-[#1a1c16]/08 bg-[#f3f0e8] text-[#1a1c16]"
          aria-label="Selected theater details"
        >
          <div
            className="flex flex-col gap-3 px-4 py-3.5 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-out sm:gap-3.5 sm:px-5 sm:py-4 lg:flex-row lg:items-center lg:gap-5 lg:px-6 lg:py-4"
            style={{ opacity: dockOpacity }}
          >
            {/* Identity row: compact image + title (mobile & desktop) */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:w-auto lg:shrink-0">
              <div className="relative h-[4.75rem] w-[6.75rem] shrink-0 overflow-hidden rounded-sm sm:h-[5.25rem] sm:w-[7.75rem] lg:h-[6.75rem] lg:w-[10rem]">
                {active.detailImageSrc ? (
                  <Image
                    src={active.detailImageSrc}
                    alt={active.image}
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 1024px) 8rem, 10rem"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center border border-dashed border-[#1a1c16]/12 bg-[#e8e4d8] text-[9px] tracking-[0.12em] text-[#1a1c16]/35 uppercase">
                    Imagery soon
                  </div>
                )}
              </div>

              <div className="min-w-0 lg:w-[10.5rem]">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: sage }}
                >
                  {active.status}
                </p>
                <h3 className="mt-1 font-display text-[1.25rem] leading-none font-semibold tracking-wide uppercase sm:text-[1.35rem]">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-[12px] text-[#1a1c16]/50">
                  {active.location}
                </p>
              </div>
            </div>

            <dl className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5 lg:border-l lg:border-[#1a1c16]/10 lg:pl-5">
              {dockSpecs.map((stat) => (
                <div key={stat.label} className="min-w-[4.75rem]">
                  <dt className="text-[10px] tracking-[0.02em] text-[#1a1c16]/40">
                    {formatStatLabel(stat.label)}
                  </dt>
                  <dd className="mt-0.5 font-display text-[14px] leading-tight tracking-wide uppercase sm:text-[15px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p
              className="line-clamp-2 min-w-0 flex-1 text-[13px] leading-relaxed text-[#1a1c16]/55 lg:max-w-xs"
              title={active.overview}
            >
              {active.overview}
            </p>

            <div className="flex shrink-0 items-center justify-end gap-0.5 border-t border-[#1a1c16]/06 pt-2.5 lg:justify-center lg:border-t-0 lg:border-l lg:border-[#1a1c16]/10 lg:pt-0 lg:pl-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className={`grid size-9 place-items-center rounded-sm text-[#1a1c16]/40 transition-colors hover:bg-[#1a1c16]/05 hover:text-[#1a1c16] ${dockFocusRing}`}
                aria-label="Previous theater"
              >
                <ChevronLeft className="size-4" strokeWidth={1.5} aria-hidden />
              </button>
              <span
                className="min-w-[2.75rem] text-center text-[11px] tracking-[0.14em] text-[#1a1c16]/35 tabular-nums"
                aria-live="polite"
              >
                {index + 1} / {missionDeployments.hotspots.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                className={`grid size-9 place-items-center rounded-sm text-[#1a1c16]/40 transition-colors hover:bg-[#1a1c16]/05 hover:text-[#1a1c16] ${dockFocusRing}`}
                aria-label="Next theater"
              >
                <ChevronRight className="size-4" strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </aside>
      </Reveal>
    </div>
  );
}
