import { capabilities, type CapabilityTab } from "@/lib/home-content";
import type { CapabilityDetailPage } from "./types";

/** Maps home-content tab ids to URL slug segments. */
export const CAPABILITY_SLUG_BY_ID: Record<string, string> = {
  engineering: "engineering-development",
  integration: "system-integration",
  field: "field-deployment",
  safety: "safety-compliance",
};

function toDetailPage(tab: CapabilityTab): CapabilityDetailPage {
  const slug = CAPABILITY_SLUG_BY_ID[tab.id];
  if (!slug) {
    throw new Error(`Missing capability slug for tab id "${tab.id}"`);
  }

  return {
    slug,
    id: tab.id,
    label: tab.label,
    title: tab.title,
    eyebrow: tab.eyebrow,
    heading: tab.heading,
    body: tab.body,
    heroBody: tab.heroBody,
    href: tab.href,
    images: {
      hero: { src: tab.imageSrc, alt: tab.imageAlt },
      secondary: {
        src: tab.secondaryImageSrc,
        alt: tab.secondaryImageAlt,
      },
    },
    gallery: tab.gallery,
    deliverablesIntro: tab.deliverablesIntro,
    deliverables: tab.deliverables,
    cta: tab.cta,
    stats: tab.stats,
    callouts: tab.callouts,
    metaTitle: tab.title,
    metaDescription: tab.heroBody || tab.body,
    showRoadmap: tab.id === "safety",
  };
}

/** Capability detail pages derived from `capabilities.tabs` in home-content. */
export const capabilityDetails: CapabilityDetailPage[] =
  capabilities.tabs.map(toDetailPage);
