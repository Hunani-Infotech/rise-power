"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation style when entering viewport */
  variant?: RevealVariant;
  /** Delay in ms after becoming visible */
  delay?: number;
  /** Intersection threshold 0–1 */
  threshold?: number;
  /** Only animate once (default true) */
  once?: boolean;
  /** Root margin for earlier/later trigger */
  rootMargin?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

const variantClass: Record<RevealVariant, string> = {
  up: "reveal-up",
  fade: "reveal-fade",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.18,
  once = true,
  rootMargin = "0px 0px -8% 0px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduced.matches) {
        setVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-base ${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /** Stagger between children in ms */
  step?: number;
  /** Base delay before first child */
  baseDelay?: number;
  variant?: RevealVariant;
  threshold?: number;
  as?: "div" | "ul" | "ol";
};

/** Wraps each direct child in Reveal with staggered delays. */
export function RevealStagger({
  children,
  className = "",
  step = 70,
  baseDelay = 0,
  variant = "up",
  threshold = 0.12,
  as: Tag = "div",
}: RevealStaggerProps) {
  return (
    <Tag className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <Reveal
            key={child.key ?? index}
            variant={variant}
            delay={baseDelay + index * step}
            threshold={threshold}
            className="h-full"
          >
            {child}
          </Reveal>
        );
      })}
    </Tag>
  );
}
