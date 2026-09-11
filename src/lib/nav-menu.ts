export type MegaLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaFeature = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type MegaNavItem = {
  label: string;
  href: string;
  /** Single flat list for the mega drawer — 4 to 6 links max */
  links?: readonly MegaLink[];
  /** Optional one highlight card (NOT extra link columns) */
  feature?: MegaFeature;
};

export const megaNavItems: readonly MegaNavItem[] = [
  {
    label: "Technology",
    href: "/technology",
    links: [
      {
        label: "Technology Overview",
        href: "/technology",
        description: "Fuel cells engineered for the field.",
      },
      {
        label: "Hydrogen Ecosystem",
        href: "/#product-ecosystem",
        description: "Supply, cartridge, power, refill.",
      },
      {
        label: "System Capabilities",
        href: "/#capabilities",
        description: "Efficiency, modularity, endurance.",
      },
      {
        label: "Featured Products",
        href: "/#featured-products",
        description: "SENTINEL, FALCON, TITAN.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Specs for procurement teams.",
      },
    ],
    feature: {
      title: "Silent. Zero Emissions.",
      body: "Cartridge-based hydrogen power that swaps in seconds and runs without diesel logistics.",
      href: "/technology",
      cta: "Explore Technology",
    },
  },
  {
    label: "Defense",
    href: "/defense",
    links: [
      {
        label: "Defense Solutions",
        href: "/defense",
        description: "Silent power for contested environments.",
      },
      {
        label: "Use Cases",
        href: "/use-cases",
        description: "Tactical, ISR, and forward ops.",
      },
      {
        label: "SENTINEL™",
        href: "/products#sentinel",
        description: "Portable tactical power.",
      },
      {
        label: "FALCON™",
        href: "/products#falcon",
        description: "Aerial endurance modules.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Program-ready specifications.",
      },
      {
        label: "Contact Programs",
        href: "/contact",
        description: "Talk to the defense team.",
      },
    ],
    feature: {
      title: "Cut the Signature.",
      body: "Hydrogen systems for forward positions, ISR platforms, and command posts that cannot afford diesel.",
      href: "/defense",
      cta: "Explore Defense",
    },
  },
  {
    label: "Commercial",
    href: "/commercial",
    links: [
      {
        label: "Commercial Solutions",
        href: "/commercial",
        description: "Clean power for tough sites.",
      },
      {
        label: "Use Cases",
        href: "/use-cases",
        description: "Construction, mining, telecom.",
      },
      {
        label: "TITAN™",
        href: "/products#titan",
        description: "High-output industrial generator.",
      },
      {
        label: "SENTINEL™",
        href: "/products#sentinel",
        description: "Portable site and backup power.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Specs for site planners.",
      },
      {
        label: "Request a Briefing",
        href: "/contact",
        description: "Configure for your operation.",
      },
    ],
    feature: {
      title: "Industrial Power, No Diesel.",
      body: "Continuous hydrogen output for construction, mining, and telecom sites that need reliability without fumes.",
      href: "/commercial",
      cta: "Explore Commercial",
    },
  },
  {
    label: "Consumer",
    href: "/consumer",
    links: [
      {
        label: "Consumer Solutions",
        href: "/consumer",
        description: "Quiet power for off-grid life.",
      },
      {
        label: "Use Cases",
        href: "/use-cases",
        description: "Camping, RV, emergency backup.",
      },
      {
        label: "SENTINEL™",
        href: "/products#sentinel",
        description: "Ultra-portable field power.",
      },
      {
        label: "Hydrogen Ecosystem",
        href: "/#product-ecosystem",
        description: "Cartridges that refill and redeploy.",
      },
      {
        label: "Resources",
        href: "/resources",
        description: "Guides and specifications.",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Find the right system.",
      },
    ],
    feature: {
      title: "Power Beyond the Grid.",
      body: "Silent, emission-free hydrogen systems for camping, RV, and emergency home backup.",
      href: "/consumer",
      cta: "Explore Consumer",
    },
  },
  {
    label: "Products",
    href: "/products",
    links: [
      {
        label: "All Products",
        href: "/products",
        description: "Full Rise Mission Power lineup.",
      },
      {
        label: "SENTINEL™",
        href: "/products#sentinel",
        description: "Portable power system — 1.5 kW.",
      },
      {
        label: "FALCON™",
        href: "/products#falcon",
        description: "Aerial power module — 800 W.",
      },
      {
        label: "TITAN™",
        href: "/products#titan",
        description: "High power generator — 5 kW.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Download product specifications.",
      },
    ],
    feature: {
      title: "Power You Can Depend On.",
      body: "SENTINEL, FALCON, and TITAN — hydrogen systems engineered for maximum output and zero emissions.",
      href: "/products",
      cta: "View Products",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Resource Center",
        href: "/resources",
        description: "Specs, insights, and field notes.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Product specifications (PDF).",
      },
      {
        label: "News & Insights",
        href: "/insights",
        description: "Updates from the field.",
      },
      {
        label: "Use Cases",
        href: "/use-cases",
        description: "How operators deploy Rise Power.",
      },
      {
        label: "Investors",
        href: "/investors",
        description: "Company and capital overview.",
      },
      {
        label: "Contact Support",
        href: "/contact",
        description: "Talk to our team.",
      },
    ],
    feature: {
      title: "Specs & Field Notes.",
      body: "Datasheets, insights, and documentation for procurement, programs, and integration leads.",
      href: "/resources",
      cta: "Browse Resources",
    },
  },
  {
    label: "Company",
    href: "/company",
    links: [
      {
        label: "Company Overview",
        href: "/company",
        description: "Canadian engineered. Field validated.",
      },
      {
        label: "About Us",
        href: "/about",
        description: "Mission, values, and team.",
      },
      {
        label: "Investors",
        href: "/investors",
        description: "Growth and partnership.",
      },
      {
        label: "News & Insights",
        href: "/insights",
        description: "Company and industry updates.",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Request a demo or briefing.",
      },
    ],
    feature: {
      title: "Built for the Mission.",
      body: "Rise Power — hydrogen systems engineered, manufactured, and validated for the world's toughest environments.",
      href: "/about",
      cta: "About Rise Power",
    },
  },
];
