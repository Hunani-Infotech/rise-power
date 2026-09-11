"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Three.js particle wave backdrop for Performance Metrics.
 * Port of the provided ShaderMaterial Points wave — sage-tinted,
 * section-scoped, paused offscreen / reduced-motion.
 */

const particleVertex = /* glsl */ `
attribute float scale;
uniform float uTime;

void main() {
  vec3 p = position;
  float s = scale;

  p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
  p.x += sin(p.y + uTime) * 0.5;

  s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = s * 15.0 * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const particleFragment = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;

void main() {
  // Hard circular points — reads as sharp dots, not soft blobs
  vec2 c = gl_PointCoord - vec2(0.5);
  if (dot(c, c) > 0.25) discard;
  gl_FragColor = vec4(uColor, uOpacity);
}
`;

/** Rise mockup green ≈ #689d2d */
const WAVE_COLOR = new THREE.Vector3(104 / 255, 157 / 255, 45 / 255);

function buildParticleGrid(amountX: number, amountY: number, gap: number) {
  const count = amountX * amountY;
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  let i = 0;
  let s = 0;

  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i] = ix * gap - (amountX * gap) / 2;
      positions[i + 1] = 0;
      positions[i + 2] = iy * gap - (amountY * gap) / 2;
      scales[s] = 1;
      i += 3;
      s += 1;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
  return geometry;
}

export function PerformanceWaveBg() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.01, 1000);
    camera.position.set(0, 6, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const width = host.clientWidth || 1;
    const isNarrow = width < 768;
    // Dense grid like the reference (200×200), scaled down on mobile for GPU cost
    const amountX = isNarrow ? 100 : 180;
    const amountY = isNarrow ? 80 : 140;
    const gap = 0.3;

    const geometry = buildParticleGrid(amountX, amountY, gap);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: WAVE_COLOR.clone() },
        uOpacity: { value: 0.5 },
      },
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let raf = 0;
    let running = false;
    let visible = true;
    let disposed = false;

    const resize = () => {
      if (disposed) return;
      const w = Math.max(1, host.clientWidth);
      const h = Math.max(1, host.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    const renderFrame = () => {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    const tick = () => {
      if (!running || disposed) return;
      material.uniforms.uTime.value += 0.05;
      renderFrame();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced || disposed) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    resize();
    if (reduced) {
      material.uniforms.uTime.value = 1.2;
      renderFrame();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
        if (visible && !reduced) start();
        else {
          stop();
          if (visible) renderFrame();
        }
      },
      { rootMargin: "100px", threshold: 0 },
    );
    io.observe(host);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      if (mq.matches) {
        stop();
        material.uniforms.uTime.value = 1.2;
        renderFrame();
      } else if (visible) {
        start();
      }
    };
    mq.addEventListener("change", onMq);

    if (!reduced && visible) start();

    return () => {
      disposed = true;
      stop();
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener("change", onMq);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      scene.remove(particles);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        id="particleCanvas"
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
