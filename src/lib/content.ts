export const site = {
  name: "Rise Power",
  legalName: "Rise Power Corp.",
  parent: "CIMtech Green Energy",
  email: "info@risepower.com",
  phone: "+1 (604) 807-4850",
  phoneHref: "tel:+16048074850",
  address: {
    line1: "17942 55 Avenue",
    city: "Surrey, BC V3S 6C8",
    country: "Canada",
  },
  url: "https://www.risepower.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/investors", label: "Investors" },
] as const;

export const stats = [
  { value: "<65 dBA", label: "Acoustic signature at 1m" },
  { value: "0 Emissions", label: "Zero exhaust at point of use" },
  { value: "∞ Runtime", label: "Unlimited with cartridge swap" },
  { value: "<50 lbs", label: "Portable system weight target" },
];

export const products = [
  {
    slug: "sentinel",
    number: "01",
    name: "Rise Sentinel™",
    tagline: "Man-portable tactical power",
    description:
      "Man portable hydrogen power in a ruggedized, field ready form factor. Unlimited runtime via 30 second cartridge swap. Under 15 lbs. Sub ambient acoustic signature for forward positions.",
    image: "/media/products/product-sentinal.png",
    specs: [
      "Unlimited runtime via 30 second cartridge swap",
      "Under 15 lbs total system weight (cube plus cartridge)",
      "Below 70 dB acoustic signature",
      "Plug and play cartridge refueling",
      "15 year cartridge shelf life",
    ],
  },
  {
    slug: "falcon",
    number: "02",
    name: "Rise Falcon™",
    tagline: "Drone range extender",
    description:
      "Plug and play hydrogen range extender for lithium polymer drones. Extends flight time to 4 plus hours, targeting 5x the range of lithium alone. Engineered for ISR, remote surveillance, and autonomous delivery.",
    image: "/media/products/product-falcon.png",
    specs: [
      "5x range extension over lithium batteries",
      "4 plus hours continuous airtime",
      "Cold weather efficient. No performance degradation.",
      "Whisper quiet operation for low signature missions",
      "Easy refill hydrogen cartridges",
    ],
  },
  {
    slug: "titan",
    number: "03",
    name: "Rise Titan™",
    tagline: "3 kW field generator",
    description:
      "A 3 kW zero emission generator built for sustained field operations. Operates silently across extreme temperature ranges with zero heat signature. Purpose built for defense, disaster response, and remote infrastructure.",
    image: "/media/products/product-titan.png",
    specs: [
      "3000 W nominal power output",
      "Operates minus 20 to plus 50 degrees C",
      "Zero heat signature",
      "Silent continuous power",
      "Plug and play hydrogen cartridges",
    ],
  },
  {
    slug: "cartridge-kit",
    number: "04",
    name: "Hydrogen Cartridge Kit",
    tagline: "Universal fuel logistics",
    description:
      "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
    image: "/media/products/product-hydro-kit.png",
    specs: [
      "Universal fuel cell compatibility",
      "RFID enabled smart monitoring",
      "Leak proof technology",
      "Tool free cartridge exchange",
      "15 year shelf life",
    ],
  },
];

export const useCases = [
  {
    slug: "defense-security",
    title: "Defense & Security",
    description:
      "Silent portable power for bases, troops, and surveillance drones. Reduces reliance on fuel convoys. Eliminates the acoustic, thermal, and emissions signatures that compromise operational security.",
    image: "/media/use-cases/uc-defence.png",
    howItWorks: [
      "Deploy Sentinel or Titan to forward positions",
      "Operate communications and surveillance equipment silently",
      "Extend drone ISR missions with Falcon range extender",
      "Swap fuel cartridges for extended mission duration",
      "Maintain zero thermal and acoustic signature",
    ],
  },
  {
    slug: "remote-operations",
    title: "Remote Operations",
    description:
      "Sustained, reliable power in austere environments where fuel resupply is difficult and generator maintenance is impractical. Pre position cartridges and operate for days without intervention.",
    image: "/media/use-cases/uc-grid2.png",
    howItWorks: [
      "Pre position fuel cartridges at remote sites",
      "Operate continuously for days without maintenance",
      "Monitor system status remotely via RFID enabled cartridges",
      "Eliminate fuel spill and contamination risk",
      "Operate across minus 20 to plus 50 degrees C",
    ],
  },
  {
    slug: "disaster-response",
    title: "Disaster Response",
    description:
      "Indoor safe emergency power for shelters, medical, and communications when the grid drops. Zero exhaust enables indoor operation. Cartridges stockpile indefinitely. Crews swap them in seconds without tools.",
    image: "/media/use-cases/uc-grid3.png",
    howItWorks: [
      "Pre position cartridges at emergency depots",
      "Deploy units to shelters, comms posts, and triage tents",
      "Run safely indoors with zero emissions",
      "Swap cartridges in seconds to extend runtime",
      "Coordinate with emergency response logistics chains",
    ],
  },
  {
    slug: "critical-infrastructure",
    title: "Critical Infrastructure",
    description:
      "Mission duration backup for data centers, command facilities, and telecom that cannot drop. Sealed indoor operation, automatic failover, and a fuel supply that does not spoil, leak, or require a service truck.",
    image: "/media/use-cases/uc-grid4.png",
    howItWorks: [
      "Install in rack as primary or backup power source",
      "Failover to fuel cell within milliseconds",
      "Operate inside server halls with zero exhaust",
      "Scale runtime by adding cartridges, not generators",
      "Integrate with existing UPS and ATS infrastructure",
    ],
  },
];

export const values = [
  {
    number: "01",
    title: "Operator First Engineering",
    body: "Every engineering decision starts with the end user and the operating environment.",
  },
  {
    number: "02",
    title: "Safety Engineered In",
    body: "Pressure vessels, leak detection, and thermal management are designed in from day one.",
  },
  {
    number: "03",
    title: "Canadian Manufacturing",
    body: "Designed, built, tested, and supported in British Columbia.",
  },
  {
    number: "04",
    title: "Mission Duration",
    body: "Runtime measured in days. Cartridge logistics replace fuel convoys.",
  },
];

export const team = [
  {
    name: "Dr. Paul Ghotra",
    role: "Founder & Chief Executive Officer",
    bio: "Two decades scaling Canadian advanced manufacturing and clean energy. Founder of CIMtech Green Energy. Recognized as Surrey Business Person of the Year for hydrogen leadership.",
  },
  {
    name: "[Team Member TBA]",
    role: "VP Engineering",
    bio: "Hydrogen fuel cell systems, power electronics, and ruggedized field hardware. Bio to be announced.",
  },
  {
    name: "[Team Member TBA]",
    role: "VP Programs & Business Development",
    bio: "Defense and infrastructure programs, partnerships, and customer engagement. Bio to be announced.",
  },
];

export { insights } from "@/lib/insights";
export const standards = [
  "Transport Canada",
  "UN 38.3",
  "DOT-39",
  "MIL-STD-810",
  "MIL-STD-461",
  "ISO 9001",
];
