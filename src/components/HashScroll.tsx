"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const HASH_NAV_EVENT = "rise:hash";

const HEADER_GAP_PX = 16;
const DEFAULT_OFFSET_PX = 88;

function currentHashId(): string | null {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function notifyHash(id: string | null = currentHashId()) {
  window.dispatchEvent(
    new CustomEvent(HASH_NAV_EVENT, { detail: { id } }),
  );
}

/** Sticky nav bar only — never the open mega panel height. */
function getHeaderOffset(): number {
  const bar = document.querySelector<HTMLElement>("[data-site-header-bar]");
  if (!bar) return DEFAULT_OFFSET_PX;
  return Math.ceil(bar.getBoundingClientRect().height) + HEADER_GAP_PX;
}

function scrollToId(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });

  return true;
}

function scrollToHash(): boolean {
  const id = currentHashId();
  if (!id) return true;

  notifyHash(id);
  return scrollToId(id);
}

function retryScroll(attempts = 12) {
  if (scrollToHash() || attempts <= 1) return;
  window.setTimeout(() => retryScroll(attempts - 1), 80);
}

/** Wait for mega/mobile menus to close before measuring offset. */
function scheduleScroll(delayMs = 0) {
  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => retryScroll());
    });
  }, delayMs);
}

function resolveHashTarget(
  href: string,
  pathname: string,
): { id: string; sameDocument: boolean } | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) return null;

  const id = decodeURIComponent(href.slice(hashIndex + 1));
  if (!id) return null;

  const pathPart = href.slice(0, hashIndex);
  const targetPath =
    !pathPart || pathPart.startsWith("?")
      ? pathname
      : pathPart.startsWith("/")
        ? pathPart
        : pathname;

  return {
    id,
    sameDocument: targetPath === pathname || targetPath === "",
  };
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scheduleScroll(0);

    const onHashChange = () => scheduleScroll(0);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#") || href === "#") return;
      if (/^(https?:|mailto:|tel:)/i.test(href)) return;

      const target = resolveHashTarget(href, pathname);
      if (!target) return;

      // Same-page hash: take over so the sticky header offset is applied.
      if (target.sameDocument) {
        event.preventDefault();

        if (window.location.hash !== `#${target.id}`) {
          window.history.pushState(null, "", `#${target.id}`);
        }

        notifyHash(target.id);
        scheduleScroll(120);
        return;
      }

      // Cross-page hash: let navigation happen, then correct offset after load.
      scheduleScroll(120);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
      document.removeEventListener("click", onClick, true);
    };
  }, [pathname]);

  return null;
}
