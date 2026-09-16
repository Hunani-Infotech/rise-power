"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const HASH_NAV_EVENT = "rise:hash";

function currentHashId(): string | null {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function notifyHash() {
  const id = currentHashId();
  window.dispatchEvent(
    new CustomEvent(HASH_NAV_EVENT, { detail: { id } }),
  );
}

function scrollToHash(): boolean {
  const id = currentHashId();
  if (!id) return true;

  notifyHash();

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function retryScroll(attempts = 10) {
  if (scrollToHash() || attempts <= 1) return;
  window.setTimeout(() => retryScroll(attempts - 1), 80);
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    retryScroll();

    const onHashChange = () => retryScroll();
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#") || href === "#") return;
      if (/^(https?:|mailto:|tel:)/i.test(href)) return;

      window.setTimeout(() => retryScroll(), 50);
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
