import { capabilityDetails } from "./details";
import type { CapabilityDetailPage } from "./types";

export type {
  CapabilityCallout,
  CapabilityCta,
  CapabilityDetailPage,
  CapabilityMedia,
  CapabilityStat,
} from "./types";
export { capabilityDetails, CAPABILITY_SLUG_BY_ID } from "./details";

export function getCapabilityBySlug(
  slug: string,
): CapabilityDetailPage | undefined {
  return capabilityDetails.find((item) => item.slug === slug);
}

export function getRelatedCapabilities(
  capability: CapabilityDetailPage,
  limit = 3,
): CapabilityDetailPage[] {
  return capabilityDetails
    .filter((item) => item.slug !== capability.slug)
    .slice(0, limit);
}

/** Static params for `app/capabilities/[slug]`. */
export function getCapabilityStaticParams(): { slug: string }[] {
  return capabilityDetails.map((item) => ({ slug: item.slug }));
}
