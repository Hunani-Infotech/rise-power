"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Sends live-style capability URLs to the capabilities hub tab. */
export function CapTabRedirect({ tab }: { tab: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/capabilities#${tab}`);
  }, [router, tab]);

  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-[#141a14] text-[#f3efe4]">
      <p className="text-sm tracking-wide text-white/60 uppercase">
        Opening capabilities…
      </p>
    </main>
  );
}
