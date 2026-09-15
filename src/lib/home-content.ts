import { megaNavItems } from "./nav-menu";

export type {
  MegaFeature,
  MegaLink,
  MegaNavItem,
} from "./nav-menu";
export { megaNavItems } from "./nav-menu";

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeroChip = {
  title: string;
  subtitle: string;
};

export type PerformanceGauge = {
  value: string;
  unit?: string;
  title: string;
  body: string;
  percent: number;
};

export type MarketCard = {
  title: string;
  points: readonly string[];
  href: string;
  cta: string;
  image: string;
  imageSrc?: string;
};

export type EcosystemStep = {
  step: string;
  title: string;
  blurb: string;
  image: string;
  imageSrc?: string;
  caption?: string;
  highlighted?: boolean;
};

export type FeaturedProduct = {
  name: string;
  trademark: string;
  subtitle: string;
  body: string;
  runtime: string;
  runtimeNote: string;
  weight: string;
  weightNote: string;
  power: string;
  powerNote: string;
  idealFor: readonly string[];
  detailsHref: string;
  datasheetHref: string;
  image: string;
  imageSrc?: string;
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

export type CapabilityTab = {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: Cta;
  stats: readonly CapabilityStat[];
  callouts: readonly CapabilityCallout[];
  quote?: {
    text: string;
    name: string;
    role: string;
  };
};

export type DeploymentHotspot = {
  id: string;
  label: string;
  status: string;
  title: string;
  subhead: string;
  stats: readonly { label: string; value: string }[];
  overview: string;
  image: string;
  detailImageSrc?: string;
  x: number;
  y: number;
};

export type ComparisonRow = {
  metric: string;
  hydrogen: string;
  diesel: string;
};

export type BenefitItem = {
  title: string;
  body: string;
};

export type CaseCard = {
  category: string;
  title: string;
  body: string;
  stats: readonly { value: string; label: string }[];
  href: string;
  image: string;
  imageSrc?: string;
};

export type FooterGroup = {
  heading: string;
  links: readonly NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
};

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
  "closing-cta",
] as const;

export const navItems: readonly NavItem[] = megaNavItems.map(
  ({ label, href }) => ({ label, href }),
);

export const contactCta: Cta = {
  label: "Request a Briefing",
  href: "/contact",
};

/** Hero background from approved Frame 1 reference (photo lane, UI baked out). */
export const heroImageSrc = "/media/hero.png";

/** Exact Frame 1 product CTA / stat labels */
export const productUiLabels = {
  runtime: "Runtime",
  weight: "Weight",
  power: "Power Output",
  idealFor: "Ideal For",
  viewDetails: "View Details",
  downloadSpec: "Download Spec Sheet (PDF)",
  viewSuccessStory: "View Success Story",
} as const;

export const hero = {
  eyebrow: "ZERO EMISSIONS • UNLIMITED RUNTIME",
  headlineLine1: "MISSION POWER.",
  headlineLine2: "ANYWHERE.",
  body: "Silent hydrogen power systems engineered for defense, critical infrastructure, and off-grid operations.",
  primaryCta: { label: "Request a Briefing", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "See Capabilities", href: "/#capabilities" } satisfies Cta,
  chips: [
    { title: "Zero Emissions", subtitle: "At point of use" },
    { title: "30-Second", subtitle: "Cartridge Swap" },
    { title: "Silent", subtitle: "Tactical Operation" },
    { title: "All-Weather", subtitle: "Deployment" },
  ] satisfies readonly HeroChip[],
  image: "Hero — tactical mountain deployment",
};

export const performanceMetrics = {
  eyebrow: "ENGINEERED FOR SUPERIOR PERFORMANCE",
  headingBefore: "BUILT TO",
  headingAccent: "OUTPERFORM.",
  body: "Every Rise Mission Power system is engineered to deliver mission-critical power with unmatched efficiency and reliability.",
  gauges: [
    {
      value: "<65",
      unit: "dBA",
      title: "ACOUSTIC SIGNATURE AT 1M",
      body: "Ultra-quiet operation for stealth and safety.",
      percent: 75,
    },
    {
      value: "0",
      unit: "EMISSIONS",
      title: "EXHAUST EMISSIONS",
      body: "Zero emissions at the point of use.",
      percent: 55,
    },
    {
      value: "∞",
      unit: "RUNTIME",
      title: "RUNTIME VIA CARTRIDGE SWAP",
      body: "Unlimited runtime with rapid cartridge swaps.",
      percent: 88,
    },
    {
      value: "<50",
      unit: "lbs",
      title: "PORTABLE SYSTEM WEIGHT",
      body: "Portable system weight target.",
      percent: 60,
    },
  ] satisfies readonly PerformanceGauge[],
};

export const threeMarkets = {
  eyebrow: "THREE MARKETS. ONE MISSION.",
  headingBefore: "POWERING",
  headingAccent: "EVERY MISSION.",
  body: "Rise Mission Power systems are engineered to perform in the toughest environments across military, commercial, and consumer applications.",
  cards: [
    {
      title: "Military",
      points: ["Tactical communications", "UAV operations", "ISR systems"],
      href: "/use-cases#defense-security",
      cta: "EXPLORE SOLUTIONS",
      image: "Military market imagery",
      imageSrc: "/media/markets/military.png",
    },
    {
      title: "Commercial",
      points: ["Construction sites", "Telecom backup", "Mining"],
      href: "/use-cases#critical-infrastructure",
      cta: "EXPLORE SOLUTIONS",
      image: "Commercial market imagery",
      imageSrc: "/media/markets/commercial.png",
    },
    {
      title: "Consumer",
      points: ["Camping", "RV power", "Emergency home backup"],
      href: "/use-cases",
      cta: "EXPLORE SOLUTIONS",
      image: "Consumer market imagery",
      imageSrc: "/media/markets/consumer.png",
    },
  ] satisfies readonly MarketCard[],
};

export const productEcosystem = {
  eyebrow: "OUR ECOSYSTEM. ENDLESS POWER.",
  headingBefore: "THE",
  headingAccent: "HYDROGEN POWER",
  headingAfter: "ECOSYSTEM",
  body: "A closed-loop system engineered for performance, sustainability, and mission-ready reliability.",
  steps: [
    {
      step: "01",
      title: "Hydrogen Supply",
      blurb: "Clean hydrogen is produced and delivered.",
      image: "Hydrogen supply",
      imageSrc: "/media/ecosystem/01.png",
    },
    {
      step: "02",
      title: "Refill Station",
      blurb: "Hydrogen is safely transferred at certified stations.",
      image: "H2 refill station",
      imageSrc: "/media/ecosystem/02.png",
    },
    {
      step: "03",
      title: "Plug & Play Cartridge",
      blurb: "Standardized cartridges enable rapid, tool-free swaps.",
      image: "Plug & play cartridge",
      imageSrc: "/media/ecosystem/03.png",
      highlighted: true,
    },
    {
      step: "04",
      title: "Mission Power",
      blurb: "Reliable, silent power for the toughest missions.",
      image: "Mission power unit",
      imageSrc: "/media/ecosystem/04.png",
    },
    {
      step: "05",
      title: "Return & Refill",
      blurb: "Used cartridges are returned, refilled, and redeployed.",
      image: "Return & refill",
      imageSrc: "/media/ecosystem/05.png",
      caption: "RENEW. REFILL. REDEPLOY.",
    },
  ] satisfies readonly EcosystemStep[],
  howItWorks: {
    eyebrow: "HOW IT WORKS",
    heading: "CLEAN HYDROGEN. ENDLESS POSSIBILITIES.",
    body: "Hydrogen is converted into electricity through a chemical reaction in the fuel cell—producing only water and heat. Our cartridge-based system makes power simple, scalable, and sustainable.",
    cta: { label: "EXPLORE TECHNOLOGY", href: "/#capabilities" } satisfies Cta,
    diagramTitle: "FUEL CELL STACK",
    diagramImageSrc: "/media/ecosystem/fuel-cell.png",
    diagramLabels: [
      "HYDROGEN IN",
      "OXYGEN IN",
      "ELECTRICITY OUT",
      "WATER OUT",
      "HEAT",
    ] as const,
    sideCard: {
      title: "ZERO EMISSIONS",
      subtitle: "At the point of use.",
      bullets: ["No exhaust", "No noise"] as const,
    },
  },
};

export const featuredProducts = {
  eyebrow: "FEATURED PRODUCTS",
  headingBefore: "POWER",
  headingAccent: "YOU CAN",
  headingAfter: "DEPEND ON.",
  body: "Advanced hydrogen power systems engineered for maximum performance, minimum footprint, and zero emissions.",
  products: [
    {
      name: "SENTINEL",
      trademark: "™",
      subtitle: "Portable Hydrogen Power System",
      body: "Man-portable hydrogen power in a ruggedized, field-ready form factor with unlimited runtime through rapid cartridge swaps.",
      runtime: "UNLIMITED",
      runtimeNote: "30-Second Cartridge Swap",
      weight: "UNDER 15 LBS",
      weightNote: "System + Cartridge",
      power: "BELOW 70 dB",
      powerNote: "Acoustic Signature",
      idealFor: [
        "Forward Positions",
        "Tactical Communications",
        "Field Operations",
        "Remote Deployments",
      ],
      detailsHref: "/products#sentinel",
      datasheetHref: "/datasheets",
      image: "SENTINEL portable hydrogen power system",
      imageSrc: "/media/products/sentinel.png",
    },
    {
      name: "FALCON",
      trademark: "™",
      subtitle: "Hydrogen Drone Range Extender",
      body: "Plug-and-play hydrogen range extender that delivers up to five times the range of lithium batteries for extended mission endurance.",
      runtime: "4+ HOURS",
      runtimeNote: "Continuous Airtime",
      weight: "5× RANGE",
      weightNote: "Over Lithium Alone",
      power: "COLD WEATHER",
      powerNote: "No Performance Loss",
      idealFor: [
        "ISR Missions",
        "Remote Surveillance",
        "Autonomous Delivery",
        "UAV Platforms",
      ],
      detailsHref: "/products#falcon",
      datasheetHref: "/datasheets",
      image: "FALCON hydrogen drone range extender",
      imageSrc: "/media/products/falcon.png",
    },
    {
      name: "TITAN",
      trademark: "™",
      subtitle: "Zero-Emission Generator",
      body: "A silent 3 kW hydrogen generator engineered for sustained field operations, disaster response, and remote infrastructure.",
      runtime: "CONTINUOUS",
      runtimeNote: "Plug-and-Play Cartridges",
      weight: "−20° TO +50°C",
      weightNote: "Operating Range",
      power: "3 kW",
      powerNote: "Nominal Output",
      idealFor: [
        "Defense Operations",
        "Disaster Response",
        "Remote Infrastructure",
        "Sustained Field Operations",
      ],
      detailsHref: "/products#titan",
      datasheetHref: "/datasheets",
      image: "TITAN zero-emission generator",
      imageSrc: "/media/products/titan.png",
    },
    {
      name: "HYDROGEN CARTRIDGE KIT",
      trademark: "",
      subtitle: "Universal Fuel System",
      body: "Universal fuel cell compatible cartridges with RFID smart monitoring, designed for rapid field replenishment and tool-free runtime restoration.",
      runtime: "15 YEARS",
      runtimeNote: "Shelf Life",
      weight: "LEAK PROOF",
      weightNote: "Lightweight Design",
      power: "RFID SMART",
      powerNote: "Monitoring Enabled",
      idealFor: [
        "Fuel Cell Systems",
        "Field Operations",
        "Rapid Replenishment",
        "Mission-Critical Deployments",
      ],
      detailsHref: "/products#hydrogen-cartridge-kit",
      datasheetHref: "/datasheets",
      image: "Hydrogen Cartridge Kit with RFID smart monitoring",
      imageSrc: "/media/products/cartridge-kit.jpg",
    },
  ] satisfies readonly FeaturedProduct[],
};

export const capabilities = {
  eyebrow: "BUILT FOR EVERY MISSION.",
  headingBefore: "CAPABILITIES",
  headingAccent: "THAT DELIVER.",
  body: "Our hydrogen power systems are engineered to excel in the most demanding environments and mission-critical applications.",
  tabs: [
    {
      id: "engineering",
      label: "Engineering",
      eyebrow: "INNOVATION. RELIABILITY. PERFORMANCE.",
      heading: "Advanced Engineering for Superior Performance",
      body: "Our systems are designed with cutting-edge fuel cell technology, modular architecture, and rigorous testing to ensure maximum efficiency, durability, and safety.",
      cta: { label: "EXPLORE ENGINEERING", href: "/#capabilities" },
      stats: [
        {
          value: "60%+",
          label: "SYSTEM EFFICIENCY",
          body: "Industry leading fuel cell efficiency.",
        },
        {
          value: "20,000+",
          label: "HOURS TESTED",
          body: "Proven durability in extreme conditions.",
        },
        {
          value: "MODULAR",
          label: "SCALABLE DESIGN",
          body: "Flexible configurations for any mission.",
        },
        {
          value: "ZERO",
          label: "EMISSIONS",
          body: "Clean power with no compromises.",
        },
      ],
      callouts: [
        {
          title: "FUEL CELL STACK",
          body: "High efficiency power generation.",
        },
        {
          title: "HYDROGEN IN",
          body: "Clean hydrogen supply.",
        },
        {
          title: "POWER MANAGEMENT SYSTEM",
          body: "Intelligent control and system protection.",
        },
        {
          title: "BATTERY BUFFER",
          body: "Instant power support and peak shaving.",
        },
      ],
    },
    {
      id: "defense",
      label: "Defense",
      eyebrow: "TACTICAL. SILENT. DEPLOYABLE.",
      heading: "Defense-Grade Power for Contested Environments",
      body: "Low-signature hydrogen systems built for forward operating bases, ISR platforms, and mission-critical communications.",
      cta: { label: "EXPLORE DEFENSE", href: "/use-cases#defense-security" },
      stats: [
        {
          value: "<65 dB",
          label: "ACOUSTIC SIGNATURE",
          body: "Stealth-ready field power.",
        },
        {
          value: "0",
          label: "THERMAL SPIKE",
          body: "Reduced IR detectability.",
        },
        {
          value: "30 SEC",
          label: "CARTRIDGE SWAP",
          body: "Keep missions continuous.",
        },
        {
          value: "FIELD",
          label: "READY FORM",
          body: "Ruggedized for austere theaters.",
        },
      ],
      callouts: [
        {
          title: "TACTICAL COMMS",
          body: "Stable power for radios and satcom.",
        },
        {
          title: "UAV SUPPORT",
          body: "Extended endurance for aerial ISR.",
        },
        {
          title: "FORWARD BASES",
          body: "Silent power without diesel logistics.",
        },
        {
          title: "OPERATOR SAFETY",
          body: "Zero exhaust at the point of use.",
        },
      ],
    },
    {
      id: "industrial",
      label: "Industrial",
      eyebrow: "RELIABLE. SCALABLE. CLEAN.",
      heading: "Industrial Power Without Diesel Compromise",
      body: "Deploy hydrogen generators for construction, mining, and telecom sites that need continuous power with lower emissions and maintenance.",
      cta: { label: "EXPLORE COMMERCIAL", href: "/use-cases#critical-infrastructure" },
      stats: [
        {
          value: "3 kW",
          label: "HIGH OUTPUT",
          body: "Titan-class continuous power.",
        },
        {
          value: "72+",
          label: "HOUR RUNTIME",
          body: "Extended duty with cartridge stacks.",
        },
        {
          value: "LOW",
          label: "MAINTENANCE",
          body: "Fewer moving parts than diesel.",
        },
        {
          value: "ZERO",
          label: "SITE FUMES",
          body: "Safer for crews and communities.",
        },
      ],
      callouts: [
        {
          title: "CONSTRUCTION",
          body: "Clean site power without diesel haze.",
        },
        {
          title: "MINING",
          body: "Rugged systems for harsh environments.",
        },
        {
          title: "TELECOM",
          body: "Backup that keeps networks online.",
        },
        {
          title: "REMOTE SITES",
          body: "Cartridge logistics beat fuel trucks.",
        },
      ],
    },
    {
      id: "emergency",
      label: "Emergency Response",
      eyebrow: "RAPID. QUIET. LIFE-SAVING.",
      heading: "Emergency Power When Every Second Counts",
      body: "Indoor-safe, silent hydrogen power for shelters, field hospitals, and communications when the grid fails.",
      cta: { label: "EXPLORE USE CASES", href: "/use-cases" },
      stats: [
        {
          value: "<60s",
          label: "POWER UP",
          body: "Rapid deployment under pressure.",
        },
        {
          value: "SILENT",
          label: "OPERATION",
          body: "Low acoustic impact on responders.",
        },
        {
          value: "0",
          label: "EXHAUST",
          body: "Safe for indoor triage spaces.",
        },
        {
          value: "STOCK",
          label: "CARTRIDGES",
          body: "Long shelf life for depots.",
        },
      ],
      callouts: [
        {
          title: "FIELD HOSPITALS",
          body: "Clean power for medical operations.",
        },
        {
          title: "SHELTERS",
          body: "Indoor-safe backup when grids drop.",
        },
        {
          title: "COMMS POSTS",
          body: "Keep coordination channels alive.",
        },
        {
          title: "DISASTER LOGISTICS",
          body: "Pre-position cartridges at depots.",
        },
      ],
    },
  ] satisfies readonly CapabilityTab[],
  diagramImage: "Capabilities engineering diagram",
  diagramImageSrc: "/media/capabilities/engineering.png",
};

export const missionDeployments = {
  eyebrow: "MISSION DEPLOYMENTS",
  headingBefore: "ENGINEERED FOR THE FIELD.",
  headingAccent: "VALIDATED IN IT.",
  body: "Rise Power systems are designed for austere environments—validated across coastal British Columbia, arctic, and high-altitude conditions.",
  mapPrompt: "CLICK A HOTSPOT to explore operating environments",
  legend: ["ACTIVE ENVIRONMENTS", "FIELD CONDITIONS"] as const,
  mapImageSrc: "/media/missions/world-map.png",
  mapImageAlt: "Dark satellite view of the world",
  hotspots: [
    {
      id: "arctic",
      label: "ARCTIC",
      status: "FIELD CONDITION",
      title: "ARCTIC REGION",
      subhead: "Cold-weather operations in extreme polar conditions.",
      stats: [
        { label: "FOCUS", value: "COLD-WEATHER OPS" },
        { label: "ENVIRONMENT", value: "ARCTIC RANGE" },
        { label: "SYSTEM FIT", value: "SENTINEL™" },
        { label: "PRIORITY", value: "LOW SIGNATURE" },
      ],
      overview:
        "Silent portable power for cold-weather communications and forward positions where diesel logistics and acoustic signature are constraints.",
      image: "Arctic deployment",
      detailImageSrc: "/media/missions/mountain.png",
      x: 22,
      y: 18,
    },
    {
      id: "maritime",
      label: "MARITIME",
      status: "FIELD CONDITION",
      title: "COASTAL / MARITIME",
      subhead: "Salt, moisture, and coastal validation environments.",
      stats: [
        { label: "FOCUS", value: "COASTAL BC" },
        { label: "ENVIRONMENT", value: "SALT / MOISTURE" },
        { label: "SYSTEM FIT", value: "TITAN™" },
        { label: "PRIORITY", value: "FIELD RUGGED" },
      ],
      overview:
        "Field-validated for coastal British Columbia conditions—sealed against dust and salt spray for mission duration where commercial hardware fails.",
      image: "Maritime deployment",
      detailImageSrc: "/media/missions/mountain.png",
      x: 48,
      y: 42,
    },
    {
      id: "desert",
      label: "DESERT",
      status: "FIELD CONDITION",
      title: "DESERT REGION",
      subhead: "High-heat desert operations with dust and thermal stress.",
      stats: [
        { label: "FOCUS", value: "HEAT / DUST" },
        { label: "ENVIRONMENT", value: "−20°C TO +50°C" },
        { label: "SYSTEM FIT", value: "FALCON™" },
        { label: "PRIORITY", value: "UAV ENDURANCE" },
      ],
      overview:
        "Sustaining UAV and ISR missions with lightweight hydrogen modules across arid theaters.",
      image: "Desert deployment",
      detailImageSrc: "/media/missions/mountain.png",
      x: 58,
      y: 48,
    },
    {
      id: "mountain",
      label: "MOUNTAIN",
      status: "FIELD CONDITION",
      title: "HIGH ALTITUDE",
      subhead: "High-altitude operations in extreme terrain.",
      stats: [
        { label: "FOCUS", value: "ALTITUDE" },
        { label: "ENVIRONMENT", value: "HIGH TERRAIN" },
        { label: "SYSTEM FIT", value: "TITAN™" },
        { label: "PRIORITY", value: "SILENT POWER" },
      ],
      overview:
        "Providing silent, zero-emission power for forward operating bases and communication relays in high-altitude conditions.",
      image: "Mountain deployment",
      detailImageSrc: "/media/missions/mountain.png",
      x: 68,
      y: 34,
    },
    {
      id: "urban",
      label: "URBAN",
      status: "FIELD CONDITION",
      title: "URBAN / SHELTER",
      subhead: "Dense environments with strict emissions and noise limits.",
      stats: [
        { label: "FOCUS", value: "INDOOR-SAFE" },
        { label: "ENVIRONMENT", value: "INDOOR / OUTDOOR" },
        { label: "SYSTEM FIT", value: "SENTINEL™" },
        { label: "PRIORITY", value: "ZERO EXHAUST" },
      ],
      overview:
        "Supporting emergency response and critical infrastructure with silent, indoor-safe hydrogen power.",
      image: "Urban deployment",
      detailImageSrc: "/media/missions/mountain.png",
      x: 78,
      y: 28,
    },
  ] satisfies readonly DeploymentHotspot[],
  defaultHotspotId: "mountain",
  stats: [
    { value: "<65", label: "dBA", note: "Acoustic Signature at 1m", icon: "globe" },
    { value: "0", label: "Emissions", note: "Zero Exhaust at Point of Use", icon: "map-pin" },
    { value: "∞", label: "Runtime", note: "Unlimited with Cartridge Swap", icon: "clock" },
    { value: "<50", label: "lbs", note: "Portable System Weight Target", icon: "check-circle" },
  ] as const,
};

export const whyHydrogenWins = {
  eyebrow: "WHY HYDROGEN WINS",
  headingBefore: "CLEANER.",
  headingAccent: "QUIETER.",
  headingAfter: "STRONGER.",
  body: "Hydrogen fuel cells provide silent, zero-emission power while reducing maintenance and enabling rapid cartridge refueling for mission-critical operations.",
  tableHeading: "HYDROGEN VS DIESEL",
  columns: ["METRIC", "HYDROGEN", "DIESEL"] as const,
  rows: [
    { metric: "Noise", hydrogen: "<65 dB", diesel: ">90 dB" },
    { metric: "Emissions", hydrogen: "Water only", diesel: "CO₂ + NOₓ" },
    { metric: "Maintenance", hydrogen: "Low", diesel: "High" },
    { metric: "Runtime", hydrogen: "Unlimited swap", diesel: "Fuel logistics" },
    { metric: "Refueling", hydrogen: "30 sec", diesel: "Minutes" },
  ] satisfies readonly ComparisonRow[],
  benefits: [
    {
      title: "Zero Emissions",
      body: "Produces only water vapor—no harmful exhaust, no carbon footprint.",
    },
    {
      title: "Ultra-Quiet Operation",
      body: "Operates at <65 dB for stealth and low acoustic signature.",
    },
    {
      title: "Low Maintenance",
      body: "Fewer moving parts mean lower wear, less downtime, and reduced lifecycle costs.",
    },
    {
      title: "Rapid Cartridge Refueling",
      body: "Swap cartridges in 30 seconds and stay powered without long refueling delays.",
    },
  ] satisfies readonly BenefitItem[],
  iconBar: [
    {
      title: "Mission Ready",
      body: "Reliable power in any environment.",
    },
    {
      title: "High Efficiency",
      body: "Maximum power, minimal waste.",
    },
    {
      title: "Sustainable",
      body: "Clean energy today for a better tomorrow.",
    },
    {
      title: "Future-Proof",
      body: "Scalable technology for a changing world.",
    },
    {
      title: "Secure Power",
      body: "Resilient systems for critical missions and operations.",
    },
  ] satisfies readonly BenefitItem[],
  image: "Hydrogen vs diesel comparison",
  imageSrc: "/media/why-hydrogen/comparison.png",
};

export const customerPartners = {
  eyebrow: "CUSTOMERS & PARTNERS",
  headingBefore: "BUILT FOR OPERATORS.",
  headingAccent: "FIELD REQUIREMENTS FIRST.",
  body: "Rise Power systems are engineered for organizations that need silent, zero-emission power for defense, infrastructure, and emergency missions.",
  cases: [
    {
      category: "DEFENSE & SECURITY",
      title: "Powering Mission Critical Operations",
      body: "Modular hydrogen generators for tactical communications and ISR operations across remote deployments.",
      stats: [
        { value: "SILENT", label: "Low Acoustic Signature" },
        { value: "0 EMISSIONS", label: "At Point of Use" },
        { value: "30 SEC", label: "Cartridge Swap" },
      ],
      href: "/use-cases#defense-security",
      image: "Defense procurement case",
      imageSrc: "/media/cases/defense.png",
    },
    {
      category: "CRITICAL INFRASTRUCTURE",
      title: "Reliable Backup Power Anywhere, Anytime",
      body: "Hydrogen power systems for uninterrupted network uptime in off-grid and disaster-prone areas.",
      stats: [
        { value: "ZERO EXHAUST", label: "Clean Site Power" },
        { value: "SILENT", label: "Backup Operation" },
        { value: "CARTRIDGE", label: "Logistics Ready" },
      ],
      href: "/use-cases#critical-infrastructure",
      image: "Telecom operator case",
      imageSrc: "/media/cases/telecom.png",
    },
    {
      category: "REMOTE OPERATIONS",
      title: "Clean Power for Extreme Environments",
      body: "Robust, low-maintenance power solutions for austere sites where diesel logistics are a liability.",
      stats: [
        { value: "LOW MAINT.", label: "Fewer Moving Parts" },
        { value: "FIELD READY", label: "Rugged Form Factor" },
        { value: "3 kW", label: "Titan Continuous Output" },
      ],
      href: "/use-cases#remote-operations",
      image: "Mining company case",
      imageSrc: "/media/cases/mining.png",
    },
    {
      category: "DISASTER RESPONSE",
      title: "Rapid Response. Indoor-Safe Power.",
      body: "Quiet, emission-free power for field hospitals, shelters, and emergency response operations.",
      stats: [
        { value: "INDOOR-SAFE", label: "Zero Exhaust" },
        { value: "SILENT", label: "Low Acoustic" },
        { value: "RAPID", label: "Field Deployment" },
      ],
      href: "/use-cases#disaster-response",
      image: "Emergency services case",
      imageSrc: "/media/cases/emergency.png",
    },
  ] satisfies readonly CaseCard[],
  partnerHeading: "PARTNERING WITH INNOVATORS AND INDUSTRY LEADERS",
  partners: [
    "ENGINEERED FOR RELIABILITY",
    "CANADIAN-ENGINEERED. FIELD-VALIDATED.",
    "SILENT. ZERO-EMISSION. MISSION READY.",
    "BUILT FOR OPERATORS.",
    "A CIMTECH GREEN ENERGY COMPANY",
  ] as const,
};

export const closingCta = {
  headingBefore: "REQUEST A",
  headingAccent: "CAPABILITY BRIEFING.",
  body: "For procurement, programs, and integration leads—specs, runtime data, and deployment summary on request.",
  panelEyebrow: "READY TO DISCUSS YOUR REQUIREMENTS?",
  panelHeading: "Request a capability briefing.",
  panelBody: "Talk to our team about matching the right Rise Power system to your mission.",
  primaryCta: { label: "REQUEST A BRIEFING", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "REVIEW CAPABILITIES", href: "/#capabilities" } satisfies Cta,
  chips: [
    { title: "ZERO EMISSIONS", subtitle: "Clean power, no compromise." },
    { title: "ULTRA QUIET", subtitle: "Engineered for stealth operations." },
    { title: "RAPID REFUEL", subtitle: "30-second cartridge exchange." },
    { title: "MISSION READY", subtitle: "Canadian-engineered. Field-validated." },
  ] satisfies readonly HeroChip[],
  image: "Closing CTA mission landscape",
  imageSrc: "/media/cta/closing.png",
};

export const footer = {
  brand: "RISE POWER",
  tagline: "Silent. Zero-Emission. Mission Ready.",
  blurb:
    "Hydrogen power systems engineered for defense, industrial, and critical operations around the world.",
  groups: [
    {
      heading: "Solutions",
      links: [
        { label: "Product Ecosystem", href: "/#product-ecosystem" },
        { label: "Featured Products", href: "/#featured-products" },
        { label: "Applications", href: "/use-cases" },
        { label: "Capabilities", href: "/#capabilities" },
        { label: "Mission Deployments", href: "/#mission-deployments" },
      ],
    },
    {
      heading: "Markets",
      links: [
        { label: "Defense", href: "/use-cases#defense-security" },
        { label: "Industrial", href: "/use-cases#critical-infrastructure" },
        { label: "Telecom", href: "/use-cases#critical-infrastructure" },
        { label: "Emergency Response", href: "/use-cases#disaster-response" },
        { label: "Engineering", href: "/#capabilities" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Capabilities", href: "/#capabilities" },
        { label: "Sustainability", href: "/company" },
        { label: "News & Insights", href: "/insights" },
        { label: "Careers", href: "/company" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Resource Center", href: "/resources" },
        { label: "Documentation", href: "/datasheets" },
        { label: "Service & Maintenance", href: "/contact" },
        { label: "FAQs", href: "/resources" },
        { label: "Contact Support", href: "/contact" },
      ],
    },
  ] satisfies readonly FooterGroup[],
  newsletter: {
    heading: "Stay Connected",
    body: "Subscribe for updates on new products, deployments, and industry insights.",
    placeholder: "Enter your email address",
  },
  contact: {
    email: "info@risepower.com",
    phone: "+1 (604) 807-4850",
    phoneHref: "tel:+16048074850",
    location: "CIMtech Green Energy · 17942 55 Avenue · Surrey, BC V3S 6C8",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ] satisfies readonly SocialLink[],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookies Policy", href: "/privacy" },
  ] satisfies readonly NavItem[],
  copyright: "© 2026 Rise Power, Inc. All rights reserved.",
  badgeBefore: "CANADIAN-ENGINEERED.",
  badgeAccent: "FIELD-VALIDATED.",
};
