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
};

export type EcosystemStep = {
  step: string;
  title: string;
  blurb: string;
  image: string;
  caption?: string;
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
  quote: {
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

export const navItems: readonly NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Defense", href: "/defense" },
  { label: "Commercial", href: "/commercial" },
  { label: "Consumer", href: "/consumer" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

export const contactCta: Cta = {
  label: "Contact Us",
  href: "/contact",
};

/** Hero background from approved Frame 1 reference (photo lane, UI baked out). */
export const heroImageSrc = "/media/hero.jpg";

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
  primaryCta: { label: "Watch Mission Film", href: "#demo" } satisfies Cta,
  secondaryCta: { label: "Explore Products", href: "/products" } satisfies Cta,
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
      unit: "dB",
      title: "ACOUSTIC SIGNATURE",
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
      value: "<15",
      unit: "lbs",
      title: "PORTABLE SYSTEM WEIGHT",
      body: "Lightweight, durable, mission-ready.",
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
      href: "/defense",
      cta: "EXPLORE SOLUTIONS",
      image: "Military market imagery",
    },
    {
      title: "Commercial",
      points: ["Construction sites", "Telecom backup", "Mining"],
      href: "/commercial",
      cta: "EXPLORE SOLUTIONS",
      image: "Commercial market imagery",
    },
    {
      title: "Consumer",
      points: ["Camping", "RV power", "Emergency home backup"],
      href: "/consumer",
      cta: "EXPLORE SOLUTIONS",
      image: "Consumer market imagery",
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
    },
    {
      step: "02",
      title: "Refill Station",
      blurb: "Hydrogen is safely transferred at certified stations.",
      image: "H2 refill station",
    },
    {
      step: "03",
      title: "Plug & Play Cartridge",
      blurb: "Standardized cartridges enable rapid, tool-free swaps.",
      image: "Plug & play cartridge",
    },
    {
      step: "04",
      title: "Mission Power",
      blurb: "Reliable, silent power for the toughest missions.",
      image: "Mission power unit",
    },
    {
      step: "05",
      title: "Return & Refill",
      blurb: "Used cartridges are returned, refilled, and redeployed.",
      image: "Return & refill",
      caption: "RENEW. REFILL. REDEPLOY.",
    },
  ] satisfies readonly EcosystemStep[],
  howItWorks: {
    eyebrow: "HOW IT WORKS",
    heading: "CLEAN HYDROGEN. ENDLESS POSSIBILITIES.",
    body: "Hydrogen is converted into electricity through a chemical reaction in the fuel cell—producing only water and heat. Our cartridge-based system makes power simple, scalable, and sustainable.",
    cta: { label: "EXPLORE TECHNOLOGY", href: "/technology" } satisfies Cta,
    diagramTitle: "FUEL CELL STACK",
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
  headingAccent: "YOU CAN DEPEND ON.",
  body: "Advanced hydrogen power systems engineered for maximum performance, minimum footprint, and zero emissions.",
  products: [
    {
      name: "SENTINEL",
      trademark: "™",
      subtitle: "Portable Power System",
      body: "Ultra-portable, silent power built for tactical missions and critical operations.",
      runtime: "48 HOURS",
      runtimeNote: "Per Cartridge",
      weight: "29 LBS",
      weightNote: "13.2 KG",
      power: "1.5 kW",
      powerNote: "Continuous",
      idealFor: [
        "Tactical Communications",
        "UAV Operations",
        "ISR Systems",
        "Field Command Posts",
      ],
      detailsHref: "/products#sentinel",
      datasheetHref: "/datasheets",
      image: "SENTINEL portable power system",
    },
    {
      name: "FALCON",
      trademark: "™",
      subtitle: "Aerial Power Module",
      body: "Lightweight hydrogen power for extended flight time and mission endurance.",
      runtime: "8+ HOURS",
      runtimeNote: "Per Cartridge",
      weight: "7.5 LBS",
      weightNote: "3.4 KG",
      power: "800 W",
      powerNote: "Continuous",
      idealFor: [
        "UAV & Drone Platforms",
        "Surveillance Missions",
        "Border Security",
        "Extended Endurance Flights",
      ],
      detailsHref: "/products#falcon",
      datasheetHref: "/datasheets",
      image: "FALCON aerial power module",
    },
    {
      name: "TITAN",
      trademark: "™",
      subtitle: "High Power Generator",
      body: "High-output hydrogen power for heavy-duty industrial and infrastructure needs.",
      runtime: "72+ HOURS",
      runtimeNote: "Per Cartridge",
      weight: "185 LBS",
      weightNote: "83.9 KG",
      power: "5 kW",
      powerNote: "Continuous",
      idealFor: [
        "Construction Sites",
        "Mining Operations",
        "Telecom Backup",
        "Remote Infrastructure",
      ],
      detailsHref: "/products#titan",
      datasheetHref: "/datasheets",
      image: "TITAN high power generator",
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
      cta: { label: "EXPLORE ENGINEERING", href: "/technology" },
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
          title: "POWER MANAGEMENT SYSTEM",
          body: "Intelligent control and system protection.",
        },
        {
          title: "HYDROGEN IN",
          body: "Clean hydrogen supply.",
        },
        {
          title: "BATTERY BUFFER",
          body: "Instant power support and peak shaving.",
        },
      ],
      quote: {
        text: "Rise Mission Power’s engineering excellence ensures our operations stay powered, anywhere, in any condition.",
        name: "COL. MATTHEW HARRISON",
        role: "Program Manager, U.S. Defense Logistics Agency",
      },
    },
    {
      id: "defense",
      label: "Defense",
      eyebrow: "TACTICAL. SILENT. DEPLOYABLE.",
      heading: "Defense-Grade Power for Contested Environments",
      body: "Low-signature hydrogen systems built for forward operating bases, ISR platforms, and mission-critical communications.",
      cta: { label: "EXPLORE DEFENSE", href: "/defense" },
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
      quote: {
        text: "Silent cartridge power changes how we posture forward positions—no generator noise, no fuel convoy risk.",
        name: "COL. MATTHEW HARRISON",
        role: "Program Manager, U.S. Defense Logistics Agency",
      },
    },
    {
      id: "industrial",
      label: "Industrial",
      eyebrow: "RELIABLE. SCALABLE. CLEAN.",
      heading: "Industrial Power Without Diesel Compromise",
      body: "Deploy hydrogen generators for construction, mining, and telecom sites that need continuous power with lower emissions and maintenance.",
      cta: { label: "EXPLORE COMMERCIAL", href: "/commercial" },
      stats: [
        {
          value: "5 kW",
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
      quote: {
        text: "We replaced diesel generators with cartridge systems and cut downtime without sacrificing output.",
        name: "COL. MATTHEW HARRISON",
        role: "Program Manager, U.S. Defense Logistics Agency",
      },
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
      quote: {
        text: "Quiet, emission-free power lets responders focus on people—not generator fumes or noise.",
        name: "COL. MATTHEW HARRISON",
        role: "Program Manager, U.S. Defense Logistics Agency",
      },
    },
  ] satisfies readonly CapabilityTab[],
  diagramImage: "Capabilities engineering diagram",
};

export const missionDeployments = {
  eyebrow: "MISSION DEPLOYMENTS",
  headingBefore: "PROVEN. DEPLOYED.",
  headingAccent: "WORLDWIDE.",
  body: "Rise Mission Power systems are trusted in the world’s most challenging environments and critical missions.",
  mapPrompt: "CLICK A HOTSPOT to explore mission deployments",
  legend: ["ACTIVE DEPLOYMENTS", "PAST MISSIONS"] as const,
  hotspots: [
    {
      id: "arctic",
      label: "ARCTIC",
      status: "ACTIVE DEPLOYMENT",
      title: "ARCTIC REGION",
      subhead: "Cold-weather operations in extreme polar conditions.",
      stats: [
        { label: "MISSION DURATION", value: "96+ HOURS" },
        { label: "ENVIRONMENT", value: "-40°C to 10°C" },
        { label: "SYSTEM DEPLOYED", value: "SENTINEL™" },
        { label: "PERSONNEL SUPPORTED", value: "80+" },
      ],
      overview:
        "Delivering silent, cold-tolerant hydrogen power for polar research posts and remote communications arrays.",
      image: "Arctic deployment",
      x: 22,
      y: 18,
    },
    {
      id: "maritime",
      label: "MARITIME",
      status: "ACTIVE DEPLOYMENT",
      title: "MARITIME REGION",
      subhead: "Shipboard and coastal power for austere maritime missions.",
      stats: [
        { label: "MISSION DURATION", value: "120+ HOURS" },
        { label: "ENVIRONMENT", value: "Salt-air, high humidity" },
        { label: "SYSTEM DEPLOYED", value: "TITAN™" },
        { label: "PERSONNEL SUPPORTED", value: "200+" },
      ],
      overview:
        "Providing zero-emission backup and tactical power for coastal stations and maritime command nodes.",
      image: "Maritime deployment",
      x: 48,
      y: 42,
    },
    {
      id: "desert",
      label: "DESERT",
      status: "ACTIVE DEPLOYMENT",
      title: "DESERT REGION",
      subhead: "High-heat desert operations with dust and thermal stress.",
      stats: [
        { label: "MISSION DURATION", value: "60+ HOURS" },
        { label: "ENVIRONMENT", value: "5°C to 50°C" },
        { label: "SYSTEM DEPLOYED", value: "FALCON™" },
        { label: "PERSONNEL SUPPORTED", value: "120+" },
      ],
      overview:
        "Sustaining UAV and ISR missions with lightweight hydrogen modules across arid theaters.",
      image: "Desert deployment",
      x: 58,
      y: 48,
    },
    {
      id: "mountain",
      label: "MOUNTAIN",
      status: "ACTIVE DEPLOYMENT",
      title: "MOUNTAIN REGION",
      subhead: "High-altitude operations in extreme terrain.",
      stats: [
        { label: "MISSION DURATION", value: "72+ HOURS" },
        { label: "ENVIRONMENT", value: "-25°C to 45°C" },
        { label: "SYSTEM DEPLOYED", value: "TITAN™" },
        { label: "PERSONNEL SUPPORTED", value: "150+" },
      ],
      overview:
        "Providing silent, zero-emission power for forward operating bases and communication relays in high-altitude, low-temperature conditions.",
      image: "Mountain deployment",
      x: 68,
      y: 34,
    },
    {
      id: "urban",
      label: "URBAN",
      status: "ACTIVE DEPLOYMENT",
      title: "URBAN REGION",
      subhead: "Dense urban operations with strict emissions and noise limits.",
      stats: [
        { label: "MISSION DURATION", value: "48+ HOURS" },
        { label: "ENVIRONMENT", value: "Indoor / outdoor" },
        { label: "SYSTEM DEPLOYED", value: "SENTINEL™" },
        { label: "PERSONNEL SUPPORTED", value: "300+" },
      ],
      overview:
        "Supporting emergency response and critical infrastructure with silent, indoor-safe hydrogen power.",
      image: "Urban deployment",
      x: 78,
      y: 28,
    },
  ] satisfies readonly DeploymentHotspot[],
  defaultHotspotId: "mountain",
  stats: [
    { value: "25+", label: "Countries", note: "Active Deployments" },
    { value: "150+", label: "Deployment Sites", note: "Worldwide" },
    { value: "500,000+", label: "Mission Hours", note: "Delivered" },
    { value: "0", label: "Mission Failures", note: "Reliability You Can Trust" },
    { value: "24/7", label: "Mission Ready", note: "Anywhere. Anytime." },
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
};

export const customerPartners = {
  eyebrow: "CUSTOMERS & PARTNERS",
  headingBefore: "PROVEN IN THE FIELD.",
  headingAccent: "TRUSTED BY LEADERS.",
  body: "Rise Mission Power systems are deployed by forward-thinking organizations that demand reliability, performance, and zero compromises.",
  cases: [
    {
      category: "DEFENSE PROCUREMENT",
      title: "Powering Mission Critical Operations",
      body: "Supplied modular hydrogen generators for tactical communications and ISR operations across remote deployments.",
      stats: [
        { value: "18+ MONTHS", label: "Continuous Deployment" },
        { value: "99.98% UPTIME", label: "Mission Reliability" },
        { value: "0 EMISSIONS", label: "Zero Detectable Signature" },
      ],
      href: "/resources",
      image: "Defense procurement case",
    },
    {
      category: "TELECOM OPERATOR",
      title: "Reliable Backup Power Anywhere, Anytime",
      body: "Deployed hydrogen power systems to ensure uninterrupted network uptime in off-grid and disaster-prone areas.",
      stats: [
        { value: "250+ SITES", label: "Deployed" },
        { value: "100% NETWORK UPTIME", label: "During Outages" },
        { value: "Zero FUEL DELIVERIES", label: "On-Site" },
      ],
      href: "/resources",
      image: "Telecom operator case",
    },
    {
      category: "MINING COMPANY",
      title: "Clean Power for Extreme Environments",
      body: "Delivered robust, low-maintenance power solutions for electrified drilling and site infrastructure.",
      stats: [
        { value: "30% LOWER TCO", label: "vs Diesel" },
        { value: "70% LESS MAINTENANCE", label: "Downtime Reduced" },
        { value: "Built TOUGH", label: "For Harsh Sites" },
      ],
      href: "/resources",
      image: "Mining company case",
    },
    {
      category: "EMERGENCY SERVICES",
      title: "Rapid Response. Power That Saves Lives.",
      body: "Provided instant, quiet, and emission-free power for field hospitals and emergency response operations.",
      stats: [
        { value: "<60 sec POWER UP", label: "Rapid Deployment" },
        { value: "Silent OPERATION", label: "Low Acoustic" },
        { value: "1000+ LIVES SUPPORTED", label: "In Critical Situations" },
      ],
      href: "/resources",
      image: "Emergency services case",
    },
  ] satisfies readonly CaseCard[],
  partnerHeading: "PARTNERING WITH INNOVATORS AND INDUSTRY LEADERS",
  partners: [
    "ENGINEERED FOR RELIABILITY",
    "TRUSTED BY INDUSTRY LEADERS",
    "PROVEN IN REAL MISSIONS",
    "GLOBAL REACH, LOCAL SUPPORT",
    "BUILT ON PARTNERSHIP. DRIVEN BY RESULTS",
  ] as const,
};

export const closingCta = {
  headingBefore: "POWER YOUR MISSION.",
  headingAccent: "ANYWHERE. ANYTIME.",
  body: "Rise Mission Power delivers silent, zero-emission hydrogen power systems built for the world's toughest environments.",
  panelEyebrow: "READY TO POWER WHAT MATTERS?",
  panelHeading: "Let’s Build Your Mission Advantage.",
  panelBody: "Talk to our team to find the right power solution for your operations.",
  primaryCta: { label: "REQUEST A DEMO", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "DOWNLOAD BROCHURE", href: "/datasheets" } satisfies Cta,
  chips: [
    { title: "ZERO EMISSIONS", subtitle: "Clean power, no compromise." },
    { title: "ULTRA QUIET", subtitle: "Engineered for stealth operations." },
    { title: "RAPID REFUEL", subtitle: "30-second cartridge exchange." },
    { title: "MISSION READY", subtitle: "Proven. Reliable. Always ready." },
  ] satisfies readonly HeroChip[],
  image: "Closing CTA mission landscape",
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
        { label: "Defense", href: "/defense" },
        { label: "Industrial", href: "/commercial" },
        { label: "Telecom", href: "/commercial" },
        { label: "Emergency Response", href: "/use-cases" },
        { label: "Engineering", href: "/technology" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Technology", href: "/technology" },
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
    email: "info@risemissionpower.com",
    phone: "+1 (833) 747-4387",
    phoneHref: "tel:+18337474387",
    location: "Austin, Texas, USA",
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
  copyright: "© 2026 Rise Mission Power. All rights reserved.",
  badgeBefore: "BUILT FOR THE MISSION.",
  badgeAccent: "TRUSTED EVERYWHERE.",
};
