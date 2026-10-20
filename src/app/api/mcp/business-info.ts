import { SITE_CONFIG, SERVICES, OC_CITIES } from "@/lib/constants";
import { TIME_SLOTS } from "@/lib/inspection-request";

/**
 * Price ranges shown on /pest-control-cost. Keep in sync with
 * src/app/pest-control-cost/page.tsx (`priceRanges`).
 */
const PRICE_RANGES = [
  { service: "General Pest Control", oneTime: "$150 – $250", recurring: "$80 – $150/mo" },
  { service: "Rodent Control", oneTime: "$200 – $500", recurring: "$100 – $200/mo" },
  { service: "Cockroach Control", oneTime: "$150 – $300", recurring: "$80 – $150/mo" },
  { service: "Ant Control", oneTime: "$150 – $250", recurring: "$75 – $125/mo" },
  { service: "Bed Bug Treatment", oneTime: "$500 – $1,500", recurring: "N/A" },
  { service: "Wasp / Bee Removal", oneTime: "$150 – $500", recurring: "N/A" },
  { service: "Bee Hive Removal from Walls", oneTime: "$500 – $800+", recurring: "N/A" },
  { service: "Spider Control", oneTime: "$150 – $250", recurring: "$75 – $125/mo" },
  { service: "Mosquito Control", oneTime: "$150 – $300", recurring: "$100 – $175/mo" },
  { service: "Tick & Flea Treatment", oneTime: "$200 – $400", recurring: "$100 – $150/mo" },
  { service: "Wildlife Trapping", oneTime: "$250 – $600", recurring: "N/A" },
  { service: "Gopher Control", oneTime: "$250 – $600", recurring: "N/A" },
  { service: "Dead Animal Removal", oneTime: "$150 – $400", recurring: "N/A" },
  { service: "Exclusion Repairs", oneTime: "$300 – $1,500+", recurring: "N/A" },
  { service: "Attic Cleanout", oneTime: "$500 – $3,000+", recurring: "N/A" },
];

export function getBusinessInfo() {
  return {
    name: SITE_CONFIG.name,
    owner: `${SITE_CONFIG.owner} (owner-operator)`,
    license: SITE_CONFIG.licenseLabel,
    licenseNumber: SITE_CONFIG.license,
    basedIn: "Tustin, CA",
    serviceArea: "All of Orange County, California",
    hours: "Open 7 days a week, 8 AM to 8 PM",
    phone: SITE_CONFIG.phone,
    website: SITE_CONFIG.url,
    bookingPage: `${SITE_CONFIG.url}/book`,
    pricingPage: `${SITE_CONFIG.url}/pest-control-cost`,
    googleBusinessProfile: SITE_CONFIG.social.google,
    inspections: "Free, no-obligation inspections with a detailed quote.",
    commercialService: "Yes: restaurants, HOAs, offices and warehouses.",
    products: "EPA-registered products applied according to the label, with re-entry guidance given at the visit.",
    wildlife: "Wildlife is trapped and removed; entry points can be sealed afterward (exclusion repairs).",
    services: SERVICES.map((s) => ({ name: s.name, page: `${SITE_CONFIG.url}/services/${s.slug}` })),
    citiesServed: OC_CITIES.map((c) => c.name),
    inspectionTimeWindows: [...TIME_SLOTS],
    priceRanges: {
      note: "Typical Orange County ranges from the website. The exact price is quoted after the free inspection and depends on the pest, property size and severity.",
      services: PRICE_RANGES,
    },
  };
}
