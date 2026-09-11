"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

/** Loads Vercel Analytics after idle so it stays off the critical path. */
export function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const ric = (
      window as Window & {
        requestIdleCallback?: (
          cb: IdleRequestCallback,
          opts?: IdleRequestOptions,
        ) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;

    if (typeof ric === "function") {
      const id = ric(enable, { timeout: 3500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const timer = window.setTimeout(enable, 2000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;
  return <Analytics />;
}
