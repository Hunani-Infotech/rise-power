"use client";

import { useEffect, useRef } from "react";

/**
 * Topographic / sound-wave dotted backdrop for Performance Metrics.
 * Canvas draws 6 horizontal sine-wave rows of tiny sharp dots;
 * phase advances each frame so waves visibly roll. Pauses when
 * offscreen or prefers-reduced-motion.
 */

const DOT_COLORS = [
  { r: 110, g: 127, b: 66, a: 0.55 }, // #6e7f42 sage
  { r: 104, g: 157, b: 45, a: 0.48 }, // #689d2d leaf
  { r: 180, g: 185, b: 170, a: 0.35 }, // soft gray shimmer
] as const;

type WaveLayer = {
  /** Vertical center as fraction of canvas height */
  yFrac: number;
  /** Peak amplitude as fraction of height */
  ampFrac: number;
  /** Wavelength in CSS px */
  wavelength: number;
  /** Horizontal phase speed in rad/s */
  speed: number;
  /** Spacing between dots along the path (CSS px) */
  spacing: number;
  /** Dot radius in CSS px */
  radius: number;
  /** Base opacity multiplier */
  opacity: number;
  colorIndex: number;
  /** Extra phase offset so layers don't align */
  phase0: number;
};

/** Overlapping wave rows — distinct freq/amp/speed for interference */
const WAVES: WaveLayer[] = [
  { yFrac: 0.28, ampFrac: 0.11, wavelength: 420, speed: 0.32, spacing: 7, radius: 1.05, opacity: 0.95, colorIndex: 0, phase0: 0 },
  { yFrac: 0.34, ampFrac: 0.09, wavelength: 360, speed: 0.28, spacing: 8, radius: 0.95, opacity: 0.75, colorIndex: 1, phase0: 1.2 },
  { yFrac: 0.42, ampFrac: 0.13, wavelength: 520, speed: -0.22, spacing: 7.5, radius: 1.0, opacity: 0.7, colorIndex: 0, phase0: 2.4 },
  { yFrac: 0.48, ampFrac: 0.08, wavelength: 300, speed: 0.38, spacing: 9, radius: 0.85, opacity: 0.55, colorIndex: 2, phase0: 0.6 },
  { yFrac: 0.55, ampFrac: 0.1, wavelength: 480, speed: -0.18, spacing: 8, radius: 0.9, opacity: 0.5, colorIndex: 1, phase0: 3.1 },
  { yFrac: 0.62, ampFrac: 0.07, wavelength: 380, speed: 0.25, spacing: 9.5, radius: 0.8, opacity: 0.35, colorIndex: 0, phase0: 1.8 },
];

/**
 * Soft falloff: strongest mid-upper (behind header), fades at sides & bottom.
 */
function opacityAt(x: number, y: number, w: number, h: number): number {
  const nx = x / w;
  const ny = y / h;
  const edgeX = Math.min(nx, 1 - nx) / 0.12;
  const fadeX = Math.min(1, Math.max(0, edgeX));
  let fadeY: number;
  if (ny < 0.08) fadeY = ny / 0.08;
  else if (ny < 0.38) fadeY = 1;
  else if (ny < 0.72) fadeY = 1 - ((ny - 0.38) / 0.34) * 0.65;
  else fadeY = Math.max(0, 0.35 * (1 - (ny - 0.72) / 0.28));
  return fadeX * fadeY;
}

function drawWaves(
  ctx: CanvasRenderingContext2D,
  cssW: number,
  cssH: number,
  dpr: number,
  t: number,
) {
  const w = cssW * dpr;
  const h = cssH * dpr;
  if (w <= 0 || h <= 0) return;

  ctx.clearRect(0, 0, w, h);
  let budget = 1200;

  for (const wave of WAVES) {
    if (budget <= 0) break;

    const y0 = wave.yFrac * h;
    const amp = wave.ampFrac * h;
    const wavelength = wave.wavelength * dpr;
    const k = (Math.PI * 2) / wavelength;
    const spacing = Math.max(4 * dpr, wave.spacing * dpr);
    const radius = Math.max(0.6, wave.radius * dpr);
    const c = DOT_COLORS[wave.colorIndex] ?? DOT_COLORS[0];
    const baseA = c.a * wave.opacity;
    const wavePhase = t * wave.speed + wave.phase0;

    const count = Math.min(budget, Math.ceil(w / spacing) + 1);
    budget -= count;

    for (let i = 0; i < count; i++) {
      const x = i * spacing;
      // Traveling sine + slight harmonic for organic topography
      const y =
        y0 +
        Math.sin(k * x + wavePhase) * amp +
        Math.sin(k * x * 0.48 + wave.phase0 * 1.7 + wavePhase * 0.35) *
          amp *
          0.25;

      const local = opacityAt(x, y, w, h);
      if (local < 0.04) continue;

      ctx.beginPath();
      ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${(baseA * local).toFixed(3)})`;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function PerformanceWaveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let visible = true;
    let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cssW = 0;
    let cssH = 0;
    let dpr = 1;
    let phase = 0;
    let lastTs = 0;

    const paint = () => drawWaves(ctx, cssW, cssH, dpr, phase);

    const tick = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      phase += dt;
      paint();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced || !visible) return;
      running = true;
      lastTs = 0;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      cssW = Math.max(1, Math.floor(rect.width));
      cssH = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      paint();
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
        if (visible && !reduced) start();
        else {
          stop();
          if (visible) paint();
        }
      },
      { rootMargin: "80px", threshold: 0 },
    );
    io.observe(canvas);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      reduced = mq.matches;
      if (reduced) {
        stop();
        paint();
      } else if (visible) {
        start();
      }
    };
    mq.addEventListener("change", onMq);

    if (!reduced && visible) start();
    else paint();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[2%] bottom-[4%] z-0 overflow-hidden select-none"
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
