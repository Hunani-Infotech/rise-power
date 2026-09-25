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
  body: string;
  theater: string;
  points: readonly string[];
  detail: string;
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

export type CapabilityMedia = {
  src: string;
  alt: string;
};

export type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  heroBody: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  gallery: readonly CapabilityMedia[];
  deliverablesIntro: string;
  deliverables: readonly string[];
  cta: Cta;
  stats: readonly CapabilityStat[];
  callouts: readonly CapabilityCallout[];
  quote?: {
    text: string;
    name: string;
    role: string;
  };
};

export type CertificationRoadmapItem = {
  status: string;
  standard: string;
  description: string;
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

export type GroupCompanyCard = {
  name: string;
  body?: string;
  image: string;
  imageSrc: string;
  href: string;
  cta: string;
  external?: boolean;
  featured?: boolean;
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
  "customer-partners",
  "businesses-companies",
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
  eyebrow: "ENGINEERED TO",
  headlineLine1: "Portable hydrogen power",
  headlineLine2: "for operators.",
  body: "Silent hydrogen power systems engineered for defense, disaster response, remote operations, and critical infrastructure.",
  primaryCta: { label: "Request a Briefing", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "See Capabilities", href: "/capabilities" } satisfies Cta,
  chips: [
    { title: "Mission Ready", subtitle: "Built for the field" },
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
  eyebrow: "DEPLOYED WHERE IT MATTERS",
  headingBefore: "POWERING",
  headingAccent: "EVERY MISSION.",
  body: "Select a scenario to see how Rise Power systems perform in real-world operations.",
  cards: [
    {
      title: "Defense & Security",
      body: "Silent portable power for bases, troops, and surveillance drones.",
      theater: "DEFENSE",
      points: ["Bases", "Troops", "ISR"],
      detail:
        "Cuts fuel-convoy dependence and eliminates acoustic, thermal, and emissions signatures.",
      href: "/use-cases#defense-security",
      cta: "View Defense",
      image: "Defense and security market imagery",
      imageSrc: "/media/markets/defense-military.png",
    },
    {
      title: "Remote Operations",
      body: "Sustained power where fuel resupply is difficult and generator maintenance is impractical.",
      theater: "REMOTE",
      points: ["Austere Sites", "Pre-positioned Fuel", "Days of Runtime"],
      detail:
        "Pre-position cartridges and operate for days from −20 to +50 °C.",
      href: "/use-cases#remote-operations",
      cta: "View Remote",
      image: "Remote operations market imagery",
      imageSrc: "/media/markets/commercial.png",
    },
    {
      title: "Disaster Response",
      body: "Indoor safe emergency power for shelters, medical, and communications when the grid drops.",
      theater: "RESPONSE",
      points: ["Shelters", "Medical", "Comms"],
      detail:
        "Indoor-safe zero exhaust. Cartridges stockpile indefinitely; swap in seconds.",
      href: "/use-cases#disaster-response",
      cta: "View Disaster Response",
      image: "Disaster response market imagery",
      imageSrc: "/media/markets/field-consumer.png",
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
};

export const featuredProducts = {
  eyebrow: "FEATURED SYSTEMS",
  headingBefore: "POWER YOU CAN",
  headingAccent: "DEPEND ON.",
  headingAfter: "",
  body: "Four field systems. Selective. Proven.",
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
      idealFor: ["Forward Positions", "Tactical Communications", "Field Operations"],
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
      idealFor: ["ISR Missions", "Remote Surveillance", "UAV Platforms"],
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
      idealFor: ["Defense Operations", "Disaster Response", "Remote Infrastructure"],
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
      idealFor: ["Fuel Cell Systems", "Field Operations", "Rapid Replenishment"],
      detailsHref: "/products#cartridge-kit",
      datasheetHref: "/datasheets",
      image: "Hydrogen Cartridge Kit with RFID smart monitoring",
      imageSrc: "/media/products/hydrogen-cartridge-kit.png",
    },
  ] satisfies readonly FeaturedProduct[],
};

export const capabilities = {
  eyebrow: "WHAT WE DO",
  headingBefore: "OUR",
  headingAccent: "CAPABILITIES.",
  body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
  hero: {
    eyebrow: "CAPABILITIES",
    headlineLine1: "Capabilities",
    headlineAccent: "",
    body: "End to end hydrogen power engineering, from concept to deployment.",
    imageSrc: "/media/capabilities/engineering-development.jpg",
    primaryCta: { label: "Explore Capabilities", href: "#pillars" } satisfies Cta,
    secondaryCta: { label: "Request a Briefing", href: "/contact" } satisfies Cta,
  },
  atmosphere: {
    eyebrow: "IN THE FIELD",
    headingBefore: "BUILT FOR",
    headingAccent: "REAL THEATERS.",
    body: "From alpine ridges to forward operating bases, Rise Power systems are photographed and proven where operators actually work.",
    imageSrc: "/media/hero.png",
    imageAlt: "Rise Power hydrogen system in a tactical field deployment",
  },
  metricsBand: {
    imageSrc: "/media/missions/mountain.png",
    imageAlt: "Mountain deployment environment for portable hydrogen power",
  },
  gallery: [
    {
      src: "/media/use-cases/defense-security.jpg",
      alt: "Defense and security power deployment with communications hardware",
    },
    {
      src: "/media/use-cases/uc-deployment.png",
      alt: "Field shelter powered by Rise Power systems at dusk",
    },
    {
      src: "/media/cases/mining.png",
      alt: "Remote industrial and mining power operations",
    },
    {
      src: "/media/company/company-v1.png",
      alt: "Operator with Rise Power portable hydrogen hardware",
    },
  ] satisfies readonly CapabilityMedia[],
  proof: {
    eyebrow: "FIELD VALIDATION",
    headingBefore: "ENGINEERED FOR THE FIELD.",
    headingAccent: "VALIDATED IN IT.",
    body: "Rise Power systems are designed from operator requirements outward. Sealed against dust and salt spray. Validated across coastal British Columbia, arctic, and high altitude conditions. Built for mission duration in environments where commercial hardware fails.",
    imageSrc: "/media/capabilities/field-deployment.jpg",
    imageAlt: "Engineered for the field. Validated in it.",
    secondaryImageSrc: "/media/cta/closing.png",
    secondaryImageAlt: "Mission landscape supporting field-validated hydrogen power",
  },
  closingBand: {
    imageSrc: "/media/use-cases/uc-defence.png",
    imageAlt: "Defense operations powered by Rise Mission Power",
  },
  certificationRoadmap: {
    eyebrow: "CERTIFICATION ROADMAP",
    heading: "Standards in active development.",
    body: "Rise Power is beta-stage technology. The standards below are in active compliance and testing work. Final certification status will be published as each program completes. Defense and infrastructure procurement teams can request the current compliance brief during a capability review.",
    items: [
      {
        status: "IN PROGRESS",
        standard: "Transport Canada. Hydrogen Cartridge Transport",
        description:
          "Ground and air transport of pressurized hydrogen cartridges within Canada.",
      },
      {
        status: "IN PROGRESS",
        standard: "UN 38.3. Lithium / Pressure Vessel Transport",
        description:
          "International transport qualification for cartridge assemblies.",
      },
      {
        status: "IN PROGRESS",
        standard: "DOT-39. Non Refillable Pressure Vessel",
        description:
          "United States DOT compliance for non refillable hydrogen cartridges.",
      },
      {
        status: "IN PROGRESS",
        standard: "MIL-STD-810. Environmental Engineering",
        description:
          "Shock, vibration, temperature, humidity, dust, and altitude qualification for field deployment.",
      },
      {
        status: "IN PROGRESS",
        standard: "MIL-STD-461. Electromagnetic Interference",
        description:
          "EMI and EMC qualification for collocated military electronics and comms equipment.",
      },
      {
        status: "IN PROGRESS",
        standard: "ISO 9001. Quality Management System",
        description: "Manufacturing quality system for production scaling.",
      },
      {
        status: "IN PROGRESS",
        standard: "CSA and NFPA 2. Hydrogen Indoor Use",
        description:
          "Indoor operation safety for data center, shelter, and command facility deployment.",
      },
    ] satisfies readonly CertificationRoadmapItem[],
  },
  tabs: [
    {
      id: "engineering",
      label: "Engineering",
      title: "Engineering & Development",
      eyebrow: "CONCEPT TO DEPLOYMENT",
      heading: "Engineering & Development",
      body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
      heroBody:
        "Hydrogen fuel cell design, power electronics, and ruggedized system development from concept through production.",
      href: "/capabilities/engineering-development",
      imageSrc: "/media/capabilities/engineering-development.jpg",
      imageAlt:
        "Rise Power engineers reviewing a fuel cell stack and CAD exploded view.",
      secondaryImageSrc: "/media/company/company-v2.png",
      secondaryImageAlt:
        "Rise Power enclosure and harnessing during engineering development",
      gallery: [
        {
          src: "/media/capabilities/engineering.png",
          alt: "Engineering diagram of Rise Power hydrogen system architecture",
        },
        {
          src: "/media/missions/mountain.png",
          alt: "Mission environment where engineered systems are deployed",
        },
        {
          src: "/media/use-cases/uc-defence.png",
          alt: "Fielded Rise Power hardware in operational use",
        },
      ],
      deliverablesIntro:
        "Rise Power engineering covers hydrogen fuel cell systems, power electronics, and ruggedized system design. We work from early stage concepts through detailed engineering, prototyping, and production readiness, with the operating environment defined up front.",
      deliverables: [
        "Hydrogen fuel cell system design and optimization",
        "Power electronics and control system development",
        "Ruggedized enclosure and thermal management design",
        "Prototype fabrication and iterative testing",
        "Production engineering and manufacturing support",
      ],
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
      title: "System Integration",
      eyebrow: "PLATFORMS. NETWORKS. INFRASTRUCTURE.",
      heading: "System Integration",
      body: "Integration with existing vehicle platforms, communications systems, and facility power networks.",
      heroBody:
        "Integration with existing vehicle platforms, communications systems, and facility power networks.",
      href: "/capabilities/system-integration",
      imageSrc: "/media/capabilities/system-integration.jpg",
      imageAlt:
        "Gloved hands mating a stainless quick-disconnect coupler into a control cabinet.",
      secondaryImageSrc: "/media/use-cases/uc-deployment.png",
      secondaryImageAlt:
        "Rise Sentinel integrated with field shelter and communications rack",
      gallery: [
        {
          src: "/media/capabilities/system-integration.jpg",
          alt: "Platform integration with communications and field power",
        },
        {
          src: "/media/use-cases/defense-security.jpg",
          alt: "Integrated power supporting defense communications hardware",
        },
        {
          src: "/media/use-cases/uc-grid1.png",
          alt: "Integrated hydrogen power components for vehicle and facility use",
        },
      ],
      deliverablesIntro:
        "Rise Power systems are designed from the start to work within existing infrastructure. Integration covers vehicle platforms, communications systems, facility power networks, and legacy power management hardware.",
      deliverables: [
        "Platform specific integration engineering",
        "Power management and load balancing",
        "Communications and control interface design",
        "Hybrid power system architecture",
        "Legacy system compatibility assessment",
      ],
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
      title: "Field Deployment",
      eyebrow: "LOGISTICS. TRAINING. SUPPORT.",
      heading: "Field Deployment",
      body: "Logistics planning, operator training, and field service for deployed hydrogen power systems.",
      heroBody:
        "Logistics planning, operator training, and field service for deployed hydrogen power systems.",
      href: "/capabilities/field-deployment",
      imageSrc: "/media/capabilities/field-deployment.jpg",
      imageAlt:
        "Canadian Armed Forces soldiers unloading a Rise Power power cube from a military truck at golden hour.",
      secondaryImageSrc: "/media/products/hydrogen-cartridge-kit.png",
      secondaryImageAlt:
        "Hydrogen cartridge kit ready for rapid field replenishment",
      gallery: [
        {
          src: "/media/missions/mountain.png",
          alt: "Alpine field deployment for portable hydrogen power",
        },
        {
          src: "/media/use-cases/uc-defence.png",
          alt: "Defense field operations with Rise Power systems",
        },
        {
          src: "/media/capabilities/field-deployment.jpg",
          alt: "Field deployment of Rise Mission Power systems",
        },
      ],
      deliverablesIntro:
        "Deployment is end to end. Rise Power provides logistics planning, operator training, field service, and cartridge supply chain management for every fielded system.",
      deliverables: [
        "Deployment planning and logistics support",
        "Operator and maintainer training programs",
        "Field service and technical support",
        "Spare parts and cartridge supply chain management",
        "Performance monitoring and optimization",
      ],
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
      title: "Safety & Compliance",
      eyebrow: "ENGINEERED IN FROM DAY ONE",
      heading: "Safety & Compliance",
      body: "Safety engineered in from day one. Active certification across defense, transport, and indoor industrial standards.",
      heroBody:
        "Safety engineered in from day one. Active certification across defense, transport, and indoor industrial standards.",
      href: "/capabilities/safety-compliance",
      imageSrc: "/media/capabilities/safety-compliance.jpg",
      imageAlt:
        "Safety technician in nitrile gloves testing a hydrogen cartridge with a handheld leak detector.",
      secondaryImageSrc: "/media/use-cases/disaster-response.jpg",
      secondaryImageAlt:
        "Disaster response deployment with safety-first hydrogen power",
      gallery: [
        {
          src: "/media/capabilities/safety-compliance.jpg",
          alt: "Safety and compliance focus for Rise Power systems",
        },
        {
          src: "/media/company/company-v4.png",
          alt: "Quality and compliance review of Rise Power hardware",
        },
        {
          src: "/media/use-cases/disaster-response.jpg",
          alt: "Emergency response power with safety systems engineered in",
        },
      ],
      deliverablesIntro:
        "Pressure vessels, leak detection, and thermal management are designed in from the start. Rise Power works directly with the regulatory bodies and standards organizations relevant to defense, transport, and indoor industrial deployment.",
      deliverables: [
        "Safety by design engineering methodology",
        "Regulatory compliance assessment and documentation",
        "Hazard analysis and risk mitigation",
        "Environmental testing and qualification",
        "Certification support documentation",
      ],
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

export const customerPartners = {
  eyebrow: "CUSTOMERS & PARTNERS",
  headingBefore: "BUILT FOR OPERATORS.",
  headingAccent: "FIELD REQUIREMENTS FIRST.",
  body: "Rise Power systems are engineered for organizations that need silent, zero-emission power for defense, infrastructure, and emergency missions.",
  cases: [
    {
      category: "DEFENSE & SECURITY",
      title: "Unlimited silent comms at a forward operating base.",
      body: "A forward operating base required silent, emission free power for communications and ISR. A Sentinel ran continuously on a stack of pre positioned cartridges, each swapped in 30 seconds. No fuel convoy. No acoustic signature. No thermal signature. Runtime extends indefinitely with additional cartridges.",
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

export const businessesCompanies = {
  eyebrow: "BUSINESSES & COMPANIES",
  headingBefore: "ENGINEERED IN CANADA.",
  headingAccent: "DEPLOYED WORLDWIDE.",
  body: "Rise Mission Power is part of a Canadian advanced manufacturing group—bringing precision engineering, hydrogen innovation, and field-validated power systems to defense and critical missions.",
  companies: [
    {
      name: "CIMtech Green Energy",
      body: "Canadian advanced manufacturing for hydrogen systems—precision engineering, production capability, and field-ready energy platforms.",
      image: "CIMtech Green Energy precision manufacturing",
      imageSrc: "/media/capabilities/engineering.jpg",
      href: "https://www.cimtechgreenenergy.com",
      cta: "Visit CIMtech Green Energy",
      external: true,
    },
    {
      name: "Rise Mission Power",
      body: "Portable hydrogen fuel cell systems for defense, disaster response, and off-grid operations—silent, zero-emission, and mission-ready.",
      image: "Rise Mission Power field deployment",
      imageSrc: "/media/use-cases/uc-defence.png",
      href: "/products",
      cta: "Explore Rise Mission Power",
    },
  ] satisfies readonly GroupCompanyCard[],
};

export const closingCta = {
  headingBefore: "REQUEST A",
  headingAccent: "CAPABILITY BRIEFING.",
  body: "For procurement, programs, and integration leads evaluating hydrogen power for serious deployments. We will respond with specs, runtime data, and a deployment summary tailored to your operating environment.",
  panelEyebrow: "READY TO DISCUSS YOUR REQUIREMENTS?",
  primaryCta: { label: "REQUEST A BRIEFING", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "REVIEW CAPABILITIES", href: "/capabilities" } satisfies Cta,
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
        { label: "Products", href: "/products" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "Product Ecosystem", href: "/#product-ecosystem" },
      ],
    },
    {
      heading: "Markets",
      links: [
        { label: "Defense & Security", href: "/use-cases#defense-security" },
        { label: "Critical Infrastructure", href: "/use-cases#critical-infrastructure" },
        { label: "Remote Operations", href: "/use-cases#remote-operations" },
        { label: "Disaster Response", href: "/use-cases#disaster-response" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "Investors", href: "/investors" },
        { label: "Careers", href: "/contact" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Resource Center", href: "/resources" },
        { label: "Datasheets", href: "/datasheets" },
        { label: "Procurement FAQ", href: "/resources/faq" },
        { label: "Insights", href: "/insights" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
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
