// export type MegaLink = {
//   label: string;
//   href: string;
//   description?: string;
// };

// export type MegaFeature = {
//   title: string;
//   body: string;
//   href: string;
//   cta: string;
// };

// export type MegaNavItem = {
//   label: string;
//   href: string;
//   /** Single flat list for the mega drawer — 4 to 6 links max */
//   links?: readonly MegaLink[];
//   /** Optional one highlight card (NOT extra link columns) */
//   feature?: MegaFeature;
// };

// export const megaNavItems: readonly MegaNavItem[] = [
//   {
//     label: "Technology",
//     href: "/technology",
//     links: [
//       {
//         label: "Technology Overview",
//         href: "/technology",
//         description: "Fuel cells engineered for the field.",
//       },
//       {
//         label: "Hydrogen Ecosystem",
//         href: "/#product-ecosystem",
//         description: "Supply, cartridge, power, refill.",
//       },
//       {
//         label: "System Capabilities",
//         href: "/#capabilities",
//         description: "Efficiency, modularity, endurance.",
//       },
//       {
//         label: "Featured Products",
//         href: "/#featured-products",
//         description: "SENTINEL, FALCON, TITAN.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Specs for procurement teams.",
//       },
//     ],
//     feature: {
//       title: "Silent. Zero Emissions.",
//       body: "Cartridge-based hydrogen power that swaps in seconds and runs without diesel logistics.",
//       href: "/technology",
//       cta: "Explore Technology",
//     },
//   },
//   {
//     label: "Defense",
//     href: "/defense",
//     links: [
//       {
//         label: "Defense Solutions",
//         href: "/defense",
//         description: "Silent power for contested environments.",
//       },
//       {
//         label: "Use Cases",
//         href: "/use-cases",
//         description: "Tactical, ISR, and forward ops.",
//       },
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Portable tactical power.",
//       },
//       {
//         label: "FALCON™",
//         href: "/products#falcon",
//         description: "Aerial endurance modules.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Program-ready specifications.",
//       },
//       {
//         label: "Contact Programs",
//         href: "/contact",
//         description: "Talk to the defense team.",
//       },
//     ],
//     feature: {
//       title: "Cut the Signature.",
//       body: "Hydrogen systems for forward positions, ISR platforms, and command posts that cannot afford diesel.",
//       href: "/defense",
//       cta: "Explore Defense",
//     },
//   },
//   {
//     label: "Commercial",
//     href: "/commercial",
//     links: [
//       {
//         label: "Commercial Solutions",
//         href: "/commercial",
//         description: "Clean power for tough sites.",
//       },
//       {
//         label: "Use Cases",
//         href: "/use-cases",
//         description: "Construction, mining, telecom.",
//       },
//       {
//         label: "TITAN™",
//         href: "/products#titan",
//         description: "High-output industrial generator.",
//       },
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Portable site and backup power.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Specs for site planners.",
//       },
//       {
//         label: "Request a Briefing",
//         href: "/contact",
//         description: "Configure for your operation.",
//       },
//     ],
//     feature: {
//       title: "Industrial Power, No Diesel.",
//       body: "Continuous hydrogen output for construction, mining, and telecom sites that need reliability without fumes.",
//       href: "/commercial",
//       cta: "Explore Commercial",
//     },
//   },
//   {
//     label: "Consumer",
//     href: "/consumer",
//     links: [
//       {
//         label: "Consumer Solutions",
//         href: "/consumer",
//         description: "Quiet power for off-grid life.",
//       },
//       {
//         label: "Use Cases",
//         href: "/use-cases",
//         description: "Camping, RV, emergency backup.",
//       },
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Ultra-portable field power.",
//       },
//       {
//         label: "Hydrogen Ecosystem",
//         href: "/#product-ecosystem",
//         description: "Cartridges that refill and redeploy.",
//       },
//       {
//         label: "Resources",
//         href: "/resources",
//         description: "Guides and specifications.",
//       },
//       {
//         label: "Contact Us",
//         href: "/contact",
//         description: "Find the right system.",
//       },
//     ],
//     feature: {
//       title: "Power Beyond the Grid.",
//       body: "Silent, emission-free hydrogen systems for camping, RV, and emergency home backup.",
//       href: "/consumer",
//       cta: "Explore Consumer",
//     },
//   },
//   {
//     label: "Products",
//     href: "/products",
//     links: [
//       {
//         label: "All Products",
//         href: "/products",
//         description: "Full Rise Mission Power lineup.",
//       },
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Portable power system — 1.5 kW.",
//       },
//       {
//         label: "FALCON™",
//         href: "/products#falcon",
//         description: "Aerial power module — 800 W.",
//       },
//       {
//         label: "TITAN™",
//         href: "/products#titan",
//         description: "High power generator — 5 kW.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Download product specifications.",
//       },
//     ],
//     feature: {
//       title: "Power You Can Depend On.",
//       body: "SENTINEL, FALCON, and TITAN — hydrogen systems engineered for maximum output and zero emissions.",
//       href: "/products",
//       cta: "View Products",
//     },
//   },
//   {
//     label: "Resources",
//     href: "/resources",
//     links: [
//       {
//         label: "Resource Center",
//         href: "/resources",
//         description: "Specs, insights, and field notes.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Product specifications (PDF).",
//       },
//       {
//         label: "News & Insights",
//         href: "/insights",
//         description: "Updates from the field.",
//       },
//       {
//         label: "Use Cases",
//         href: "/use-cases",
//         description: "How operators deploy Rise Power.",
//       },
//       {
//         label: "Investors",
//         href: "/investors",
//         description: "Company and capital overview.",
//       },
//       {
//         label: "Contact Support",
//         href: "/contact",
//         description: "Talk to our team.",
//       },
//     ],
//     feature: {
//       title: "Specs & Field Notes.",
//       body: "Datasheets, insights, and documentation for procurement, programs, and integration leads.",
//       href: "/resources",
//       cta: "Browse Resources",
//     },
//   },
//   {
//     label: "Company",
//     href: "/company",
//     links: [
//       {
//         label: "Company Overview",
//         href: "/company",
//         description: "Canadian engineered. Field validated.",
//       },
//       {
//         label: "About Us",
//         href: "/about",
//         description: "Mission, values, and team.",
//       },
//       {
//         label: "Investors",
//         href: "/investors",
//         description: "Growth and partnership.",
//       },
//       {
//         label: "News & Insights",
//         href: "/insights",
//         description: "Company and industry updates.",
//       },
//       {
//         label: "Contact Us",
//         href: "/contact",
//         description: "Request a demo or briefing.",
//       },
//     ],
//     feature: {
//       title: "Built for the Mission.",
//       body: "Rise Power — hydrogen systems engineered, manufactured, and validated for the world's toughest environments.",
//       href: "/about",
//       cta: "About Rise Power",
//     },
//   },
// ];




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
  links?: readonly MegaLink[];
  feature?: MegaFeature;
};


// export const megaNavItems: readonly MegaNavItem[] = [
//   {
//     label: "Technology",
//     href: "/technology",
//     links: [
//       {
//         label: "Technology Overview",
//         href: "/technology",
//         description: "How our hydrogen power technology works.",
//       },
//       {
//         label: "Hydrogen Ecosystem",
//         href: "/#product-ecosystem",
//         description: "From hydrogen supply to rapid cartridge refueling.",
//       },
//       {
//         label: "System Capabilities",
//         href: "/#capabilities",
//         description: "Efficiency, durability, safety and performance.",
//       },
//       {
//         label: "Featured Products",
//         href: "/#featured-products",
//         description: "Explore SENTINEL, FALCON and TITAN.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Technical specifications and product data.",
//       },
//     ],
//     feature: {
//       title: "Silent. Zero Emissions.",
//       body: "Hydrogen power engineered for reliable performance without diesel noise, fumes or fuel logistics.",
//       href: "/technology",
//       cta: "Explore Technology",
//     },
//   },

//   {
//     label: "Defense",
//     href: "/defense",
//     links: [
//       {
//         label: "Defense Solutions",
//         href: "/defense",
//         description: "Mission-ready power for demanding environments.",
//       },
//       {
//         label: "Defense Applications",
//         href: "/use-cases",
//         description: "Tactical communications, ISR and forward operations.",
//       },
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Portable power for field operations.",
//       },
//       {
//         label: "FALCON™",
//         href: "/products#falcon",
//         description: "Extended endurance for UAV missions.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Specifications for defense programs.",
//       },
//       {
//         label: "Defense Contact",
//         href: "/contact",
//         description: "Talk with our defense team.",
//       },
//     ],
//     feature: {
//       title: "Power Without the Signature.",
//       body: "Silent, zero-emission systems designed for forward positions, ISR platforms and mission-critical communications.",
//       href: "/defense",
//       cta: "Explore Defense",
//     },
//   },

//   {
//     label: "Consumer",
//     href: "/consumer",
//     // links: [
//     //   {
//     //     label: "Consumer Solutions",
//     //     href: "/consumer",
//     //     description: "Quiet, clean power for life beyond the grid.",
//     //   },
//     //   {
//     //     label: "Camping & RV",
//     //     href: "/use-cases",
//     //     description: "Reliable power wherever you go.",
//     //   },
//     //   {
//     //     label: "Emergency Backup",
//     //     href: "/use-cases",
//     //     description: "Keep essential systems powered when the grid fails.",
//     //   },
//     //   {
//     //     label: "SENTINEL™",
//     //     href: "/products#sentinel",
//     //     description: "Compact, portable hydrogen power.",
//     //   },
//     //   {
//     //     label: "Resources",
//     //     href: "/resources",
//     //     description: "Guides, specifications and helpful information.",
//     //   },
//     //   {
//     //     label: "Contact Us",
//     //     href: "/contact",
//     //     description: "Find the right power solution.",
//     //   },
//     // ],
//     feature: {
//       title: "Power Beyond the Grid.",
//       body: "Silent, emission-free hydrogen power for camping, RVs, emergency backup and off-grid living.",
//       href: "/consumer",
//       cta: "Explore Consumer",
//     },
//   },

//   {
//     label: "Products",
//     href: "/products",
//     links: [
//       {
//         label: "SENTINEL™",
//         href: "/products#sentinel",
//         description: "Portable hydrogen power for field operations.",
//       },
//       {
//         label: "FALCON™",
//         href: "/products#falcon",
//         description: "Hydrogen range extension for UAV platforms.",
//       },
//       {
//         label: "TITAN™",
//         href: "/products#titan",
//         description: "High-output hydrogen generator.",
//       },
//       {
//         label: "Hydrogen Cartridge Kit",
//         href: "/products#hydrogen-cartridge-kit",
//         description: "Rapid-refuel cartridge system.",
//       },
//       // {
//       //   label: "Datasheets",
//       //   href: "/datasheets",
//       //   description: "Download technical specifications.",
//       // },
//     ],
//     feature: {
//       title: "Power You Can Depend On.",
//       body: "Explore hydrogen systems built for portable power, extended endurance and sustained mission operations.",
//       href: "/products",
//       cta: "View Products",
//     },
//   },

//   {
//     label: "Resources",
//     href: "/resources",
//     links: [
//       {
//         label: "Resource Center",
//         href: "/resources",
//         description: "Guides, specifications and field resources.",
//       },
//       {
//         label: "Datasheets",
//         href: "/datasheets",
//         description: "Download product specifications.",
//       },
//       {
//         label: "News & Insights",
//         href: "/insights",
//         description: "Latest company and industry updates.",
//       },
//       {
//         label: "Applications",
//         href: "/use-cases",
//         description: "See how Rise Power systems are deployed.",
//       },
//       {
//         label: "Investors",
//         href: "/investors",
//         description: "Company and growth information.",
//       }
//     ],
//     feature: {
//       title: "Resources for the Mission.",
//       body: "Find product data, field insights and technical resources for procurement, planning and deployment.",
//       href: "/resources",
//       cta: "Browse Resources",
//     },
//   },

//   {
//     label: "Company",
//     href: "/company",
//     links: [
//       {
//         label: "About Rise Power",
//         href: "/about",
//         description: "Our mission, people and approach.",
//       },
//       {
//         label: "Technology",
//         href: "/technology",
//         description: "The technology behind our systems.",
//       },
//       {
//         label: "Sustainability",
//         href: "/company",
//         description: "Our approach to cleaner power.",
//       },
//       {
//         label: "News & Insights",
//         href: "/insights",
//         description: "Company news and industry perspectives.",
//       },
//       {
//         label: "Careers",
//         href: "/company",
//         description: "Join the team building mission-ready power.",
//       },
//       {
//         label: "Contact Us",
//         href: "/contact",
//         description: "Talk to the Rise Power team.",
//       },
//     ],
//     feature: {
//       title: "Built for the Mission.",
//       body: "Rise Power develops hydrogen systems for defense, critical infrastructure and demanding environments worldwide.",
//       href: "/about",
//       cta: "About Rise Power",
//     },
//   },
// ];



export const megaNavItems: readonly MegaNavItem[] = [
  {
    label: "Products",
    href: "/products",
    links: [
      {
        label: "Sentinel™",
        href: "/products#sentinel",
        description: "Compact, portable power for field teams.",
      },
      {
        label: "Falcon™",
        href: "/products#falcon",
        description: "Extra flight time for drones and UAVs.",
      },
      {
        label: "Titan™",
        href: "/products#titan",
        description: "High-output power for bigger deployments.",
      },
      {
        label: "Cartridge Kit",
        href: "/products#cartridge-kit",
        description: "Swap fuel in seconds, no refueling truck needed.",
      },
    ],
    feature: {
      title: "Find the Right System",
      body: "Compare Sentinel, Falcon and Titan side by side and see which fits your mission.",
      href: "/products",
      cta: "Compare Products",
    },
  },

  {
    label: "Capabilities",
    href: "/#capabilities",
    links: [
      {
        label: "Engineering",
        href: "/#capabilities",
        description: "How we take an idea from prototype to hardware.",
      },
      {
        label: "Integration",
        href: "/#capabilities",
        description: "Dropping hydrogen power into your existing setup.",
      },
      {
        label: "Field Performance",
        href: "/#capabilities",
        description: "Tested in arctic, coastal and high-altitude conditions.",
      },
      {
        label: "Safety Systems",
        href: "/#capabilities",
        description: "Built-in leak detection and thermal protection.",
      },
    ],
    feature: {
      title: "Built to Survive the Field",
      body: "See the engineering and testing behind every system before it ships.",
      href: "/#capabilities",
      cta: "See How It's Built",
    },
  },

  {
    label: "Applications",
    href: "/use-cases",
    links: [
      {
        label: "Defense & Security",
        href: "/use-cases#defense-security",
        description: "Silent power that doesn't give away your position.",
      },
      {
        label: "Remote Operations",
        href: "/use-cases#remote-operations",
        description: "Run for days where resupply isn't an option.",
      },
      {
        label: "Disaster Response",
        href: "/use-cases#disaster-response",
        description: "Safe to run indoors when the grid is down.",
      },
      {
        label: "Critical Infrastructure",
        href: "/use-cases#critical-infrastructure",
        description: "Backup power that can't afford to fail.",
      },
    ],
    feature: {
      title: "See It in Action",
      body: "Real deployments across defense, disaster response and remote sites.",
      href: "/use-cases",
      cta: "Explore Applications",
    },
  },

  {
    label: "Company",
    href: "/company",
    links: [
      {
        label: "About Us",
        href: "/company",
        description: "Our mission, values and the team behind it.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team.",
      },
    ],
    feature: {
      title: "Canadian-Built, Field-Proven",
      body: "Designed, manufactured and tested in British Columbia.",
      href: "/company",
      cta: "Meet the Team",
    },
  },

  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Resource Center",
        href: "/resources",
        description: "Guides, specifications and field resources.",
      },
      {
        label: "Datasheets",
        href: "/datasheets",
        description: "Download product specifications.",
      },
      {
        label: "News & Insights",
        href: "/insights",
        description: "Latest company and industry updates.",
      },
      {
        label: "Applications",
        href: "/use-cases",
        description: "See how Rise Power systems are deployed.",
      },
      {
        label: "Investors",
        href: "/investors",
        description: "Company and growth information.",
      }
    ],
    feature: {
      title: "Everything You Need to Evaluate Us",
      body: "Specs, FAQs and the latest updates in one place.",
      href: "/datasheets",
      cta: "Browse Resources",
    },
  },

  {
    label: "Investors",
    href: "/investors",
    links: [
      {
        label: "Investor Deck",
        href: "/rise-power-deck.pdf",
        description: "Market, technology, traction and team, in one deck.",
      },
      {
        label: "Company One-Pager",
        href: "/rise-power-one-pager.pdf",
        description: "A quick-reference overview to share with partners.",
      },
      {
        label: "Press & Updates",
        href: "/investors#press",
        description: "Latest news and milestones.",
      },
    ],
    feature: {
      title: "Backing the Next Generation of Power",
      body: "Qualified investors can request full data room access.",
      href: "/investors",
      cta: "Request a Briefing",
    },
  },
];