export type CapabilityMedia = {
  src: string;
  alt: string;
};

export type CapabilityStat = {
  value: string;
  label: string;
  body: string;
};

export type CapabilityCallout = {
  title: string;
  body: string;
};

export type CapabilityCta = {
  label: string;
  href: string;
};

export type CapabilityDetailPage = {
  slug: string;
  id: string;
  label: string;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  heroBody: string;
  href: string;
  images: {
    hero: CapabilityMedia;
    secondary: CapabilityMedia;
  };
  gallery: readonly CapabilityMedia[];
  deliverablesIntro: string;
  deliverables: readonly string[];
  cta: CapabilityCta;
  stats: readonly CapabilityStat[];
  callouts: readonly CapabilityCallout[];
  metaTitle: string;
  metaDescription: string;
  showRoadmap: boolean;
};
