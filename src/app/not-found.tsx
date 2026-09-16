import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested is not available on Rise Power.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1440px] flex-col justify-center px-6 py-28 lg:px-10">
      <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
        The page you requested does not exist or has moved. Return home or
        request a briefing and we will point you to the right material.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="secondary">
          Request a Briefing
        </Button>
      </div>
    </section>
  );
}
