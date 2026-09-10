export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HomeStat = {
  value: string;
  label: string;
  percent: number;
};

export type MarketCard = {
  title: string;
  blurb: string;
  points: readonly string[];
  href: string;
  image: string;
};

export type EcosystemStep = {
  step: string;
  title: string;
  blurb: string;
  image: string;
};

export type FeaturedProduct = {
  name: string;
  tagline: string;
  watts: string;
  weight: string;
  runtime: string;
  href: string;
  image: string;
};

export type DependRow = {
  feature: string;
  diesel: boolean;
  hydrogen: boolean;
  battery: boolean;
};

export type CapabilityItem = {
  title: string;
  body: string;
};

export type WorldStat = {
  value: string;
  label: string;
};

export type CleanerRow = {
  metric: string;
  diesel: string;
  hydrogen: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type FooterGroup = {
  heading: string;
  links: readonly NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
};

/** Figma Frame 1 section order (1920 × ~1025 each). */
export const sectionOrder = [
  "hero",
  "performance-metrics",
  "three-markets",
  "product-ecosystem",
  "featured-products",
  "capabilities",
  "mission-deployments",
  "why-hydrogen-wins",
  "customer-partners",
  "footer",
] as const;

export const navItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Defense", href: "/defense" },
  { label: "Commercial", href: "/commercial" },
  { label: "Consumer", href: "/consumer" },
  { label: "Products", href: "/products" },
  { label: "Investors", href: "/investors" },
];

export const contactCta: Cta = {
  label: "Contact Us",
  href: "/contact",
};

export const hero = {
  headlineLine1: "MISSION POWER.",
  headlineLine2: "ANYWHERE.",
  subcopy:
    "Silent, zero-emission hydrogen power for any mission, anywhere.",
  primaryCta: { label: "Get Started", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "Watch Demo", href: "#demo" } satisfies Cta,
  image: "/media/placeholders/hero.jpg",
};

export const performanceMetrics = {
  kicker: "THE RISE ADVANTAGE",
  heading: "BUILT TO OUTPERFORM.",
  stats: [
    { value: "<65", label: "dBA acoustic signature", percent: 68 },
    { value: "0", label: "emissions at point of use", percent: 100 },
    { value: "∞", label: "unlimited runtime", percent: 100 },
    { value: "<15", label: "lbs man-portable weight", percent: 42 },
  ] satisfies readonly HomeStat[],
};

export const threeMarkets = {
  heading: "POWERING EVERY MISSION.",
  cards: [
    {
      title: "Defense",
      blurb: "Silent tactical power for forward and contested operations.",
      points: [
        "Zero acoustic and thermal signature",
        "Cartridge logistics replace fuel convoys",
        "Indoor-safe for shelters and COPs",
      ],
      href: "/defense",
      image: "/media/placeholders/defense.jpg",
    },
    {
      title: "Commercial",
      blurb: "Reliable field power for industry, construction, and remote sites.",
      points: [
        "No diesel fumes or spill risk",
        "Scalable runtime with cartridge stacks",
        "Lower maintenance than generator fleets",
      ],
      href: "/commercial",
      image: "/media/placeholders/commercial.jpg",
    },
    {
      title: "Consumer",
      blurb: "Clean portable power for outdoor and off-grid lifestyle use.",
      points: [
        "Quiet enough for camp and cabin",
        "Simple swap-in refueling",
        "Long shelf-life hydrogen cartridges",
      ],
      href: "/consumer",
      image: "/media/placeholders/consumer.jpg",
    },
  ] satisfies readonly MarketCard[],
};

export const productEcosystem = {
  heading: "THE HYDROGEN POWER ECOSYSTEM.",
  steps: [
    {
      step: "01",
      title: "Renewable input",
      blurb: "Wind and solar feed clean electrolysis.",
      image: "/media/placeholders/ecosystem-renewable.jpg",
    },
    {
      step: "02",
      title: "Electrolyzer",
      blurb: "Water splits into hydrogen and oxygen.",
      image: "/media/placeholders/ecosystem-electrolyzer.jpg",
    },
    {
      step: "03",
      title: "Hydrogen storage",
      blurb: "Sealed cartridges stockpile for years.",
      image: "/media/placeholders/ecosystem-storage.jpg",
    },
    {
      step: "04",
      title: "Rise Power unit",
      blurb: "Fuel cell converts H₂ into silent electricity.",
      image: "/media/placeholders/ecosystem-unit.jpg",
    },
    {
      step: "05",
      title: "Mission application",
      blurb: "Defense, commercial, consumer, and drones.",
      image: "/media/placeholders/ecosystem-application.jpg",
    },
  ] satisfies readonly EcosystemStep[],
};

export const featuredProducts = {
  heading: "POWER YOU CAN DEPEND ON.",
  products: [
    {
      name: "Rise Sentinel",
      tagline: "Man-portable tactical power",
      watts: "300 W",
      weight: "<15 lbs",
      runtime: "Unlimited*",
      href: "/products#sentinel",
      image: "/media/placeholders/sentinel.jpg",
    },
    {
      name: "Rise Falcon",
      tagline: "UAV range extender",
      watts: "Flight pack",
      weight: "Light",
      runtime: "4+ hrs",
      href: "/products#falcon",
      image: "/media/placeholders/falcon.jpg",
    },
    {
      name: "Rise Titan",
      tagline: "3 kW field generator",
      watts: "3000 W",
      weight: "Field class",
      runtime: "Unlimited*",
      href: "/products#titan",
      image: "/media/placeholders/titan.jpg",
    },
  ] satisfies readonly FeaturedProduct[],
  footnote: "*Runtime extends indefinitely with cartridge swap.",
};

export const capabilities = {
  heading: "CAPABILITIES THAT DELIVER.",
  supportingCopy:
    "Field-ready hydrogen systems engineered for silence, endurance, and operator safety.",
  items: [
    {
      title: "Modular",
      body: "Scale power and runtime by stacking cartridges, not generators.",
    },
    {
      title: "Ultra lightweight",
      body: "Man-portable systems built for operators who move light.",
    },
    {
      title: "Silent",
      body: "Sub-65 dBA acoustic signature for low-signature missions.",
    },
    {
      title: "Communication ready",
      body: "Stable power for radios, ISR, and satcom without diesel noise.",
    },
  ] satisfies readonly CapabilityItem[],
  image: "/media/placeholders/capabilities.jpg",
};

export const missionDeployments = {
  heading: "PROVEN. DEPLOYED. WORLDWIDE.",
  stats: [
    { value: "20+", label: "Countries" },
    { value: "100+", label: "Deployments" },
    { value: "1M+", label: "MWh delivered" },
    { value: "24/7", label: "Support" },
  ] satisfies readonly WorldStat[],
  image: "/media/placeholders/world-map.jpg",
};

export const whyHydrogenWins = {
  heading: "CLEANER. QUIETER. STRONGER.",
  kicker: "WHY HYDROGEN WINS",
  columns: ["Diesel generators", "Rise hydrogen"] as const,
  rows: [
    { metric: "Noise", diesel: "85+ dBA", hydrogen: "<65 dBA" },
    { metric: "Emissions", diesel: "High CO₂ / NOx", hydrogen: "Zero at point of use" },
    { metric: "Runtime", diesel: "Fuel limited", hydrogen: "Unlimited with cartridge swap" },
    { metric: "Weight", diesel: "Heavy class", hydrogen: "Man-portable options" },
    { metric: "Indoor use", diesel: "Unsafe", hydrogen: "Safe" },
    { metric: "Thermal signature", diesel: "High IR", hydrogen: "Near ambient" },
  ] satisfies readonly CleanerRow[],
  image: "/media/placeholders/why-hydrogen.jpg",
};

export const customerPartners = {
  heading: "PROVEN IN THE FIELD. TRUSTED BY LEADERS.",
  quotes: [
    {
      quote:
        "Silent power changes the posture of a forward position. No generator noise. Cartridges swap in seconds.",
      name: "Program Lead",
      role: "Defense evaluation",
      image: "/media/placeholders/case-defense.jpg",
    },
    {
      quote:
        "We needed indoor-safe backup when the grid dropped. Hydrogen cartridges stockpile. Diesel never could.",
      name: "Operations Chief",
      role: "Disaster response",
      image: "/media/placeholders/case-disaster.jpg",
    },
    {
      quote:
        "Falcon extended ISR flight windows we used to lose to battery fade. Cold weather did not degrade output.",
      name: "UAS Integration Lead",
      role: "Remote operations",
      image: "/media/placeholders/case-uas.jpg",
    },
  ] satisfies readonly Testimonial[],
  partners: [
    "Partner One",
    "Partner Two",
    "Partner Three",
    "Partner Four",
    "Partner Five",
  ] as const,
};

export const closingCta = {
  headingLine1: "POWER YOUR MISSION.",
  headingLine2: "ANYWHERE. ANYTIME.",
  primaryCta: { label: "Get Started", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "Watch Demo", href: "#demo" } satisfies Cta,
  image: "/media/placeholders/cta.jpg",
};

export const book = {
  kicker: "READ THE BOOK",
  title: "Mission Power",
  blurb:
    "A field guide to silent hydrogen power for defense, commercial, and consumer missions.",
  image: "/media/placeholders/book.jpg",
  cta: { label: "Buy Now", href: "#" } satisfies Cta,
};

export const footer = {
  blurb: "Hydrogen power for every mission.",
  groups: [
    {
      heading: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Technology", href: "/technology" },
        { label: "Defense", href: "/defense" },
        { label: "Commercial", href: "/commercial" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Consumer", href: "/consumer" },
        { label: "Products", href: "/products" },
        { label: "Investors", href: "/investors" },
        { label: "Resources", href: "/resources" },
        { label: "Company", href: "/company" },
      ],
    },
  ] satisfies readonly FooterGroup[],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ] satisfies readonly SocialLink[],
  copyright: "© Rise Mission Power. All rights reserved.",
};
