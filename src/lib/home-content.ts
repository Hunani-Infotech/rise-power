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
  headlineLine1: "Portable hydrogen power",
  headlineLine2: "for operators.",
  body: "Silent hydrogen power systems engineered for defense, critical infrastructure, and off-grid operations.",
  primaryCta: { label: "Request a Briefing", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "See Capabilities", href: "/#capabilities" } satisfies Cta,
  chips: [
    { title: "Systems Active", subtitle: "Field-ready deployments" },
    { title: "Zero Emissions", subtitle: "At point of use" },
    { title: "30-Second", subtitle: "Cartridge Swap" },
    { title: "Silent", subtitle: "Tactical Operation" },
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
      title: "Acoustic signature at 1m",
      body: "Ultra-quiet operation for stealth and safety.",
      percent: 75,
    },
    {
      value: "0",
      unit: "Emissions",
      title: "Zero exhaust at point of use",
      body: "Zero emissions at the point of use.",
      percent: 55,
    },
    {
      value: "∞",
      unit: "Runtime",
      title: "Unlimited with cartridge swap",
      body: "Unlimited runtime with rapid cartridge swaps.",
      percent: 88,
    },
    {
      value: "<50",
      unit: "lbs",
      title: "Portable system weight target",
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
    cta: { label: "SEE CAPABILITIES", href: "/#capabilities" } satisfies Cta,
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
      body: "Man portable hydrogen power in a ruggedized, field ready form factor. Unlimited runtime via 30 second cartridge swap. Under 15 lbs. Sub ambient acoustic signature for forward positions.",
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
      body: "Plug and play hydrogen range extender for lithium polymer drones. Extends flight time to 4 plus hours, targeting 5x the range of lithium alone. Engineered for ISR, remote surveillance, and autonomous delivery.",
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
      body: "A 3 kW zero emission generator built for sustained field operations. Operates silently across extreme temperature ranges with zero heat signature. Purpose built for defense, disaster response, and remote infrastructure.",
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
      body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
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
      detailsHref: "/products#cartridge-kit",
      datasheetHref: "/datasheets",
      image: "Hydrogen Cartridge Kit with RFID smart monitoring",
      imageSrc: "/media/products/cartridge-kit.jpg",
    },
  ] satisfies readonly FeaturedProduct[],
};

export const capabilities = {
  eyebrow: "WHAT WE DO",
  headingBefore: "OUR",
  headingAccent: "CAPABILITIES.",
  body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
  tabs: [
    {
      id: "engineering",
      label: "Engineering",
      eyebrow: "CONCEPT TO DEPLOYMENT",
      heading: "Engineering & development from concept to deployment",
      body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "FUEL CELL",
          label: "SYSTEM DESIGN",
          body: "Hydrogen fuel cell design and optimization.",
        },
        {
          value: "POWER",
          label: "ELECTRONICS",
          body: "Control systems for field loads.",
        },
        {
          value: "RUGGED",
          label: "ENCLOSURES",
          body: "Thermal management for austere use.",
        },
        {
          value: "PROD.",
          label: "READY",
          body: "Prototype through production support.",
        },
      ],
      callouts: [
        {
          title: "FUEL CELL STACK",
          body: "Hydrogen system design and optimization.",
        },
        {
          title: "POWER ELECTRONICS",
          body: "Controls engineered for field loads.",
        },
        {
          title: "THERMAL MANAGEMENT",
          body: "Ruggedized enclosure design.",
        },
        {
          title: "PRODUCTION SUPPORT",
          body: "From prototype to manufacturing.",
        },
      ],
    },
    {
      id: "integration",
      label: "Integration",
      eyebrow: "PLATFORMS. NETWORKS. INFRASTRUCTURE.",
      heading: "System integration with existing platforms and infrastructure",
      body: "Our systems are designed from the start to work within existing vehicle platforms, communications systems, and facility power networks — not as standalone replacements.",
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "VEHICLE",
          label: "PLATFORMS",
          body: "Platform-specific integration engineering.",
        },
        {
          value: "COMMS",
          label: "INTERFACES",
          body: "Control and communications design.",
        },
        {
          value: "FACILITY",
          label: "POWER",
          body: "Works with existing site networks.",
        },
        {
          value: "HYBRID",
          label: "ARCHITECTURE",
          body: "Legacy power compatibility assessed.",
        },
      ],
      callouts: [
        {
          title: "VEHICLE PLATFORMS",
          body: "Integration with existing platforms.",
        },
        {
          title: "COMMS SYSTEMS",
          body: "Interfaces for mission networks.",
        },
        {
          title: "FACILITY POWER",
          body: "Fits existing infrastructure.",
        },
        {
          title: "LOAD BALANCING",
          body: "Power management for mixed loads.",
        },
      ],
    },
    {
      id: "field",
      label: "Field",
      eyebrow: "LOGISTICS. TRAINING. SUPPORT.",
      heading: "Rapid field deployment with end-to-end logistics support",
      body: "Getting a system from the lab to the field requires more than good engineering. We provide logistics planning, operator training, and field service so your team can rely on hydrogen power where it matters.",
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "LOGISTICS",
          label: "PLANNING",
          body: "End-to-end deployment support.",
        },
        {
          value: "OPERATOR",
          label: "TRAINING",
          body: "Maintainer and operator programs.",
        },
        {
          value: "FIELD",
          label: "SERVICE",
          body: "Technical support for deployed systems.",
        },
        {
          value: "CARTRIDGE",
          label: "SUPPLY",
          body: "Spare parts and fuel logistics.",
        },
      ],
      callouts: [
        {
          title: "DEPLOYMENT PLANNING",
          body: "Logistics support for fielding.",
        },
        {
          title: "OPERATOR TRAINING",
          body: "Ready teams before first use.",
        },
        {
          title: "FIELD SERVICE",
          body: "Support where systems operate.",
        },
        {
          title: "CARTRIDGE CHAIN",
          body: "Supply managed for mission duration.",
        },
      ],
    },
    {
      id: "safety",
      label: "Safety",
      eyebrow: "ENGINEERED IN FROM DAY ONE",
      heading: "Safety & compliance engineered in from day one",
      body: "Pressure vessels, leak detection, and thermal management are designed in from the start. We work directly with the regulatory bodies relevant to defense, transport, and indoor industrial deployment.",
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "PRESSURE",
          label: "VESSELS",
          body: "Designed in from day one.",
        },
        {
          value: "LEAK",
          label: "DETECTION",
          body: "Active monitoring for safe operation.",
        },
        {
          value: "THERMAL",
          label: "MGMT",
          body: "Managed heat for field and indoor use.",
        },
        {
          value: "REGS",
          label: "ALIGNED",
          body: "Defense, transport, and indoor standards.",
        },
      ],
      callouts: [
        {
          title: "PRESSURE VESSELS",
          body: "Safety designed into the fuel path.",
        },
        {
          title: "LEAK DETECTION",
          body: "Monitoring from the start.",
        },
        {
          title: "THERMAL MANAGEMENT",
          body: "Controlled for austere and indoor use.",
        },
        {
          title: "COMPLIANCE WORK",
          body: "Defense, transport, and industrial bodies.",
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
  body: "For procurement, programs, and integration leads evaluating hydrogen power for serious deployments. We will respond with specs, runtime data, and a deployment summary tailored to your operating environment.",
  panelEyebrow: "READY TO DISCUSS YOUR REQUIREMENTS?",
  panelHeading: "Request a capability briefing.",
  panelBody:
    "For procurement, programs, and integration leads evaluating hydrogen power for serious deployments. We will respond with specs, runtime data, and a deployment summary tailored to your operating environment.",
  primaryCta: { label: "REQUEST A BRIEFING", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "SEE USE CASES", href: "/use-cases" } satisfies Cta,
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
    "Portable hydrogen fuel cell systems for defense, disaster response, and remote operations. Canadian-engineered. Field-validated.",
  groups: [
    {
      heading: "Solutions",
      links: [
        { label: "Product Ecosystem", href: "/#product-ecosystem" },
        { label: "Featured Products", href: "/#featured-products" },
        { label: "Use Cases", href: "/use-cases" },
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
