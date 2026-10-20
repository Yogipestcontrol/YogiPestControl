import type { ServiceContent } from "./local-seo-types";

// Upgraded content for service pages. Pages without an entry render the base servicesData content.
// Prices must agree with /pest-control-cost and the base FAQs in services.ts.
export const SERVICE_CONTENT: ServiceContent[] = [
  // ───────────────────────────── Rodent control ─────────────────────────────
  {
    slug: "rodent-control",
    metaTitle: "Rodent Control Orange County: Rat Removal & Exclusion",
    metaDescription:
      "Rodent control in Orange County: roof rat and mouse trapping, exclusion that seals attic entry points, follow-up visits and cleanup. Free inspection.",
    sections: [
      {
        heading: "Roof rats, Norway rats and house mice in Orange County",
        body: [
          "Most rodent calls we get in Orange County are roof rats. They are agile climbers that travel along fences, utility lines, palm fronds, ivy and overhanging tree branches, then slip into attics through gaps at roof vents, eaves, fascia boards and where the roofline meets a wall. If you hear running or scratching overhead at night, a roof rat is the most likely cause.",
          "Norway rats are heavier, burrowing rats that stay close to the ground. They dig along foundations, under slabs and around sheds, and they are the more common culprit in crawlspaces, garages and around sewer and drain lines. House mice are much smaller, can fit through a gap about the width of a pencil, and usually show up in kitchens, garages and wall voids.",
          "The species matters because it changes where we set traps and which entry points we chase. A roof rat program focuses on the attic and the roofline; a Norway rat program focuses on the foundation, crawlspace vents and burrows; mice call for tighter sealing at the interior and garage level.",
        ],
        bullets: [
          "Roof rat: slender, long tail longer than its body, nests high in attics, palms and dense vines",
          "Norway rat: stocky, blunt nose, shorter tail, burrows and nests low in crawlspaces and under debris",
          "House mouse: small, droppings about the size of a grain of rice, nests in walls, cabinets and stored boxes",
        ],
        link: { href: "/blog/rat-vs-mouse-identifying-rodents-in-your-oc-home", label: "How to tell a rat from a mouse in your OC home" },
      },
      {
        heading: "Why trapping alone fails and how rodent exclusion works",
        body: [
          "Trapping removes the rats that are inside today. If the gaps they used are still open, new rats follow the same scent trails in, and you end up paying for trapping again in a few months. That is the most common story we hear from homeowners who tried a trap-only service or a box of snap traps from the hardware store.",
          "Exclusion means physically sealing every opening a rodent can use. We walk the roofline, attic, foundation, crawlspace vents, garage door corners and every pipe, cable and AC line penetration. Gaps are closed with materials rodents cannot chew through: galvanized hardware cloth over vents, steel or copper mesh packed into voids, sheet metal flashing at roof and wall junctions, and sealant where appropriate. Foam by itself is not a rodent barrier, so we do not rely on it.",
          "The order matters too. We seal the main entry points first and then trap the rodents that are left inside, so they cannot simply leave and come back. Any remaining activity after sealing tells us whether a gap was missed.",
        ],
        link: { href: "/services/exclusion-repairs", label: "More about our exclusion repairs" },
      },
      {
        heading: "What a typical rodent control job looks like",
        body: [
          "Rodent work is a short program, not a one-time spray. Here is how a typical job runs from first call to finished, based on the attic, garage and crawlspace jobs we do across Orange County every week.",
        ],
        bullets: [
          "Free inspection: we check the attic, garage, crawlspace and exterior, identify the species, and photograph entry points and activity",
          "Written quote: exclusion, trapping and any cleanup are priced separately so you can see what each part costs",
          "Seal: we close the entry points that rodents are actively using, starting at the roofline for roof rats or the foundation for Norway rats",
          "Trap: snap traps are set in the attic, crawlspace or garage where pets and kids cannot reach them; exterior bait stations are tamper-resistant and only used where appropriate",
          "Follow-up visits: we come back on a schedule, usually a few times over one to three weeks, to check and reset traps and remove any rodents caught",
          "Done: when traps stay empty and there is no fresh activity, we pull the traps and talk about cleanup and ongoing monitoring",
        ],
      },
      {
        heading: "Attic and crawlspace cleanup after rodents",
        body: [
          "Once the rodents are out, the droppings, urine-soaked insulation and nesting material stay behind. That mess holds odor and pheromones that can draw new rodents to the same spot, and disturbing dried droppings can put contaminated dust in the air. Homeowners should not dry-sweep or vacuum rodent droppings with a household vacuum.",
          "Depending on how much damage there is, cleanup ranges from spot removal of droppings and nesting material with disinfectant treatment to a full removal and replacement of attic insulation. In crawlspaces we remove nesting debris and any dead animals, sanitize the affected area and check vapor barriers and vent screens. If odor from a dead rodent or a skunk under the house is the issue, we locate the source rather than masking it.",
        ],
        link: { href: "/services/attic-cleanout", label: "Attic cleanout and sanitation" },
      },
      {
        heading: "Signs you have rats or mice, and when to call",
        body: [
          "Rodent problems almost always start small and quiet. If you notice any of the signs below, an inspection now usually means fewer rodents to trap and less cleanup later.",
        ],
        bullets: [
          "Scratching or running sounds in the ceiling or walls, especially after dark",
          "Droppings in the attic, garage, under sinks or along walls; rat droppings are roughly half an inch to three quarters of an inch long",
          "Chewed fruit on backyard trees, or citrus and avocados hollowed out while still on the branch",
          "Gnawed wiring, irrigation lines, AC line insulation or storage boxes",
          "Greasy rub marks along beams, pipes or the top of walls",
          "Pets staring at or pawing at a wall, ceiling or cabinet",
        ],
        link: { href: "/blog/how-rodents-enter-orange-county-attics", label: "How rodents get into Orange County attics" },
      },
    ],
    pricing: [
      { item: "Rodent inspection", range: "Free", note: "Attic, garage, crawlspace and exterior check with a written quote" },
      { item: "Trapping program with follow-up visits", range: "$200 – $500", note: "Typical one-time range; depends on activity level and number of visits" },
      { item: "Exclusion (sealing entry points)", range: "$300 – $1,500+", note: "Depends on the number and type of openings and roof access" },
      { item: "Attic cleanout and sanitation", range: "$500 – $3,000+", note: "Spot cleanup to full insulation replacement" },
      { item: "Ongoing rodent monitoring", range: "$100 – $200/mo", note: "Recurring service for properties with ongoing pressure" },
    ],
    extraFaqs: [
      {
        question: "Do you seal the entry points or just set traps?",
        answer: "Both. We seal the active entry points and then trap the rodents left inside, with follow-up visits until activity stops. Trapping without sealing is the main reason rodent problems come back.",
      },
      {
        question: "Why do I have roof rats when my house is clean?",
        answer: "Roof rats are drawn by shelter and outdoor food, not dirty homes. Fruit trees, palms, ivy, bird feeders, pet food and overhanging branches are common in Orange County neighborhoods, and a single gap at a roof vent is enough for them to move into a clean attic.",
      },
      {
        question: "How many follow-up visits does rodent control take?",
        answer: "Most jobs need a few follow-up visits over one to three weeks after sealing. Heavier infestations can take longer. We keep coming back to check and reset traps until traps stay empty and there is no fresh activity.",
      },
      {
        question: "Can you remove a dead rat or deal with odor under my house?",
        answer: "Yes. We locate and remove dead rodents in attics, walls and crawlspaces, sanitize the area and find out how the animal got in. We also handle crawlspace odor problems, including skunk odor, by finding and fixing the source.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/costa-mesa/rodent-control", anchor: "rodent control in Costa Mesa" },
      { href: "/areas-we-serve/costa-mesa", anchor: "Costa Mesa pest control" },
      { href: "/areas-we-serve/santa-ana", anchor: "rat removal in Santa Ana" },
      { href: "/areas-we-serve/tustin", anchor: "roof rat control in Tustin" },
      { href: "/areas-we-serve/irvine", anchor: "rodent exclusion in Irvine" },
      { href: "/areas-we-serve/newport-beach", anchor: "attic rat removal in Newport Beach" },
      { href: "/areas-we-serve/orange", anchor: "rodent control in Orange" },
      { href: "/areas-we-serve/anaheim", anchor: "rat and mouse control in Anaheim" },
      { href: "/areas-we-serve/garden-grove", anchor: "rodent trapping in Garden Grove" },
      { href: "/areas-we-serve/fullerton", anchor: "rodent control in Fullerton" },
    ],
    related: [
      { href: "/pests/roof-rats", anchor: "Roof rats in Orange County" },
      { href: "/pests/norway-rats", anchor: "Norway rats" },
      { href: "/blog/rat-vs-mouse-identifying-rodents-in-your-oc-home", anchor: "Rat vs. mouse: identifying rodents in your home" },
      { href: "/blog/how-rodents-enter-orange-county-attics", anchor: "How rodents enter Orange County attics" },
      { href: "/blog/health-risks-of-rodent-infestations-in-southern-california", anchor: "Health risks of rodent infestations" },
      { href: "/blog/fall-rodent-prevention-keep-mice-out-before-winter", anchor: "Fall rodent prevention" },
    ],
    updated: "2026-10-19",
  },

  // ───────────────────────────── Mosquito control ─────────────────────────────
  {
    slug: "mosquito-control",
    metaTitle: "Mosquito Control Orange County: Yard Treatment Plans",
    metaDescription:
      "Mosquito control for Orange County yards: source reduction, larvicide and barrier treatments for day-biting Aedes and Culex. Monthly plans available.",
    sections: [
      {
        heading: "Day-biting Aedes vs. native Culex mosquitoes in Orange County",
        body: [
          "If you are getting bitten on the ankles in the middle of the afternoon, you are probably dealing with invasive Aedes mosquitoes. The Orange County Mosquito and Vector Control District has tracked Aedes aegypti (the yellow fever mosquito) and Aedes albopictus (the Asian tiger mosquito) spreading across Orange County cities since they were first found here in 2015. Both are small, black-and-white striped and aggressive daytime biters that prefer people.",
          "Invasive Aedes lay eggs just above the waterline in small containers, sometimes as small as a bottle cap: saucers under potted plants, buckets, toys, tarps, bromeliads, clogged rain gutters and drains. The eggs can survive drying out and hatch when water returns, which is why dumping water once is not enough.",
          "Native Culex mosquitoes are the dusk-and-night biters. They breed in larger standing water such as neglected pools and spas, ponds, fountains, catch basins and flooded areas, and they are the main carriers of West Nile virus in Southern California. Many yards have both, so a good treatment plan has to cover tiny containers and larger water sources.",
        ],
        link: { href: "/pests/mosquitoes", label: "Mosquitoes in Orange County" },
      },
      {
        heading: "What OC Vector Control does for free vs. a private yard treatment",
        body: [
          "The Orange County Mosquito and Vector Control District (ocvector.org) is a public agency funded by property taxes. It runs countywide surveillance and testing, treats public breeding sources like flood channels and catch basins, responds to service requests about neglected swimming pools and other standing water, offers mosquitofish for ornamental ponds, and provides public education. If a neighbor has a green pool, the district is the right call, and there is no charge.",
          "What the district does not do is treat your individual yard on a regular schedule. A private mosquito service focuses on your property: finding the containers and hidden water the district never sees, larviciding water that cannot be dumped, and applying residual treatments to the shady vegetation where adult mosquitoes rest during the day. The two work best together.",
        ],
      },
      {
        heading: "How we treat a yard for mosquitoes",
        body: [
          "Most mosquito problems are solved at the source, so every visit starts with a walk of the yard rather than a spray rig.",
        ],
        bullets: [
          "Source reduction: we tip, drain or remove standing water and show you the spots we found, from plant saucers to clogged gutters and yard drains",
          "Larvicide: water that has to stay, like ponds, fountains, drains and unused pools, is treated with larvicide products that stop mosquitoes from developing into biting adults",
          "Barrier and residual treatment: EPA-registered products are applied per label to the undersides of leaves, dense shrubs, ground cover, fences and shaded areas where adults rest",
          "Re-entry times: we tell you exactly how long to keep kids and pets off treated areas, which is typically until the application has dried",
          "Follow-up: we note new breeding sources each visit so the yard gets easier to keep clean over time",
        ],
        link: { href: "/blog/summer-pest-control-mosquitoes-ants-more-in-oc", label: "Summer mosquito and ant tips for OC" },
      },
      {
        heading: "Mosquito season and how often to treat",
        body: [
          "In Orange County, mosquito activity is heaviest from late spring through fall, and warm years stretch the season into November. Because barrier treatments typically last three to four weeks, a monthly program through the warm months gives the most consistent results. A one-time treatment makes sense before an outdoor party, wedding or family event.",
          "Many of our customers fold mosquito treatment into a monthly perimeter service, so the same visit covers ants and spiders around the house and mosquitoes in the yard.",
        ],
      },
      {
        heading: "Mosquito checklist for your yard",
        body: [
          "Walk your yard once a week and check these common Orange County breeding spots. Scrub containers, not just empty them, so Aedes eggs stuck to the sides are removed.",
        ],
        bullets: [
          "Saucers under potted plants and planters",
          "Buckets, watering cans, kids' toys, wheelbarrows and tarps",
          "Rain gutters, downspouts, yard drains and drain covers",
          "Bromeliads and other plants that hold water in their leaves",
          "Birdbaths and pet bowls: change water and scrub at least weekly",
          "Pools, spas and fountains: keep pumps and filters running and water treated",
          "Gaps in window and door screens",
        ],
      },
    ],
    pricing: [
      { item: "Yard inspection", range: "Free", note: "We find breeding sites and quote the right plan" },
      { item: "One-time mosquito treatment", range: "$150 – $300", note: "Good before an outdoor event; typical yard" },
      { item: "Monthly mosquito program", range: "$100 – $175/mo", note: "Recommended through the warm season" },
      { item: "Perimeter pest service that includes mosquitoes", range: "$80 – $150/mo", note: "Typical general pest plan; mosquito coverage quoted by yard size" },
    ],
    extraFaqs: [
      {
        question: "Why am I getting bitten during the day?",
        answer: "Invasive Aedes mosquitoes, now established in many Orange County cities, bite during the day and especially around the ankles and legs. They breed in very small containers of water around homes, so checking and scrubbing those containers is the most important step.",
      },
      {
        question: "Will OC Vector Control spray my yard?",
        answer: "The OC Mosquito and Vector Control District handles public breeding sources, surveillance, neglected pools and community-level treatments, but it does not provide routine treatment of individual yards. A private service treats your property on a schedule.",
      },
      {
        question: "Do you treat ponds and fountains?",
        answer: "Yes. Water that cannot be drained is treated with a larvicide labeled for that use. For ornamental ponds, the district's mosquitofish are also a good option, and we can work around them.",
      },
      {
        question: "Can mosquito treatment be added to my regular pest service?",
        answer: "Yes. Many customers add mosquito coverage to a monthly perimeter service so one visit handles ants, spiders and mosquitoes. We quote the add-on after seeing your yard.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/costa-mesa/mosquito-control", anchor: "mosquito control in Costa Mesa" },
      { href: "/areas-we-serve/garden-grove/mosquito-control", anchor: "mosquito control in Garden Grove" },
      { href: "/areas-we-serve/orange/mosquito-control", anchor: "mosquito control in Orange" },
      { href: "/areas-we-serve/santa-ana", anchor: "mosquito treatment in Santa Ana" },
      { href: "/areas-we-serve/anaheim", anchor: "yard mosquito service in Anaheim" },
      { href: "/areas-we-serve/irvine", anchor: "mosquito control in Irvine" },
      { href: "/areas-we-serve/tustin", anchor: "mosquito treatment in Tustin" },
      { href: "/areas-we-serve/newport-beach", anchor: "mosquito control in Newport Beach" },
      { href: "/areas-we-serve/buena-park", anchor: "mosquito service in Buena Park" },
      { href: "/areas-we-serve/stanton", anchor: "mosquito control in Stanton" },
    ],
    related: [
      { href: "/pests/mosquitoes", anchor: "Mosquito identification guide" },
      { href: "/blog/summer-pest-control-mosquitoes-ants-more-in-oc", anchor: "Summer pest control: mosquitoes, ants and more" },
      { href: "/blog/orange-countys-most-common-summer-pests-2026-update", anchor: "Orange County's most common summer pests" },
      { href: "/blog/year-round-pest-control-schedule-orange-county", anchor: "Year-round pest control schedule for OC" },
    ],
    updated: "2026-10-19",
  },

  // ───────────────────────────── Bee removal ─────────────────────────────
  {
    slug: "bee-removal",
    metaTitle: "Bee Removal Orange County: Swarms, Hives & Wall Comb",
    metaDescription:
      "Bee removal in Orange County: swarms, established hives and comb removed from walls, with live rehoming when practical. Licensed. Call 714-323-8262.",
    sections: [
      {
        heading: "Swarm or established hive? Why it changes the job",
        body: [
          "A swarm is a cluster of bees hanging on a branch, fence, eave or mailbox, usually in spring. It is a colony that has split off and is resting while scouts look for a permanent home. Swarms are often calm because they have no comb or brood to defend, and many will leave on their own within a day or two. The risk is that they move into your wall, roof or meter box instead.",
          "An established hive means the bees have moved in and started building wax comb, storing honey and raising brood. Signs include a steady stream of bees going in and out of one opening, buzzing in a wall or ceiling, and, in older hives, honey or wax stains on drywall. An established hive will not leave on its own and grows every season.",
          "A swarm is a quicker, simpler removal. An established hive inside a structure means opening the wall, eave or ceiling to remove the comb, then repairing and sealing the entry.",
        ],
      },
      {
        heading: "Africanized bees: what to do right now",
        body: [
          "Africanized honey bees have been established throughout Southern California since the 1990s. They look nearly identical to European honey bees, so you cannot tell them apart by sight, but they defend their nest more aggressively, react to disturbance from farther away and can chase a person a long distance. Treat every unknown colony as if it could be defensive.",
        ],
        bullets: [
          "Keep people and pets away from the bees; do not spray, throw things at or try to knock down a swarm or hive",
          "Do not run mowers, leaf blowers, weed trimmers or other loud equipment near the colony",
          "If bees start chasing you, run in a straight line to a building or car and get inside; cover your face if you can",
          "Do not jump into a pool; bees will wait for you to surface",
          "Call 911 for multiple stings, trouble breathing or swelling of the face or throat",
          "Scrape stingers out sideways with a card or fingernail rather than pinching them",
        ],
      },
      {
        heading: "Live removal and rehoming vs. extermination",
        body: [
          "Honey bees are important pollinators, so when it is safe and practical we remove them alive and rehome them with a local beekeeper. That is usually possible with swarms and with accessible hives that are not unusually defensive.",
          "Live removal is not always the right call. If a colony is highly defensive, sits in a location where opening the structure is unsafe, is close to a school, play area or a person with a bee allergy, or cannot be reached without major demolition, we may need to treat the colony with a product labeled for that use and then remove the comb. We explain the options at the inspection and why we recommend one over the other.",
          "Wasps and yellowjackets are not rehomed. Those nests are treated and removed.",
        ],
      },
      {
        heading: "Why the comb has to come out of the wall",
        body: [
          "Killing or removing the bees is only half of a structural removal. Comb left behind in a wall or ceiling keeps the smell of the old colony, which attracts the next swarm to the same opening. Without bees to fan and cool it, wax can soften and honey can leak and stain drywall and ceilings, and the leftover honey and dead brood draw ants, cockroaches, rodents and wax moths.",
          "For a hive inside the structure, we open the area, cut out and remove the comb and honey, clean the cavity, and then close up and seal the entry point so bees cannot move back in. Sealing gaps larger than about an eighth of an inch around vents, chimneys, eaves and plumbing helps prevent new colonies.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Sealing entry points after bee removal" },
      },
      {
        heading: "Bees vs. wasps and yellowjackets",
        body: [
          "Honey bees are fuzzy, golden brown and build wax comb. Paper wasps are slender with long dangling legs and build open, umbrella-shaped paper nests under eaves and patio covers. Yellowjackets are shiny yellow and black, nest in the ground, walls or attics, and get aggressive around food and trash in late summer. Unlike a honey bee, a yellowjacket can sting more than once.",
          "Knowing which one you have changes the plan and the price, so a photo from a safe distance helps when you call.",
        ],
        link: { href: "/services/wasp-control", label: "Wasp and yellowjacket nest removal" },
      },
    ],
    pricing: [
      { item: "Bee inspection and assessment", range: "Free", note: "We identify swarm vs. hive and recommend the safest option" },
      { item: "Swarm removal (exposed cluster)", range: "$150 – $300", note: "Typical for accessible swarms on branches, fences or eaves" },
      { item: "Established hive, accessible location", range: "$250 – $500", note: "Meter boxes, sheds, low eaves and similar spots" },
      { item: "Hive in a wall or ceiling with comb removal", range: "$500 – $800+", note: "Depends on hive size, height and how much opening is needed" },
      { item: "Wasp or yellowjacket nest removal", range: "$150 – $300", note: "Typical single nest" },
    ],
    extraFaqs: [
      {
        question: "Will a bee swarm leave on its own?",
        answer: "Often, yes. A resting swarm may move on within a day or two once scouts find a new home. The problem is that the new home is sometimes your wall or roof. If the swarm is near people or starts entering an opening, call before it becomes an established hive.",
      },
      {
        question: "Can I just spray the bees and seal the hole?",
        answer: "No. Sealing bees inside can push them into the house, and leaving comb and honey in the wall leads to melting wax, stains, odors and new pests. The comb needs to be removed before the entry is sealed.",
      },
      {
        question: "How do I know if the bees are Africanized?",
        answer: "You cannot tell by looking. Africanized honey bees look almost the same as European honey bees and only lab testing confirms it. Treat any unknown colony with caution and keep people and pets away.",
      },
      {
        question: "Do you remove bees from chimneys, meter boxes and irrigation boxes?",
        answer: "Yes. Meter boxes, irrigation valve boxes, chimneys, eaves, sheds and block walls are common places for colonies in Orange County. We assess the spot and remove the bees and comb.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/anaheim/bee-removal", anchor: "bee removal in Anaheim" },
      { href: "/areas-we-serve/anaheim", anchor: "Anaheim pest control" },
      { href: "/areas-we-serve/fullerton", anchor: "bee hive removal in Fullerton" },
      { href: "/areas-we-serve/orange", anchor: "bee removal in Orange" },
      { href: "/areas-we-serve/garden-grove", anchor: "bee swarm removal in Garden Grove" },
      { href: "/areas-we-serve/buena-park", anchor: "bee removal in Buena Park" },
      { href: "/areas-we-serve/santa-ana", anchor: "bee removal in Santa Ana" },
      { href: "/areas-we-serve/irvine", anchor: "bee removal in Irvine" },
      { href: "/areas-we-serve/tustin", anchor: "bee hive removal in Tustin" },
    ],
    related: [
      { href: "/pests/honeybees", anchor: "Honeybees in Orange County" },
      { href: "/pests/yellow-jackets", anchor: "Yellowjackets" },
      { href: "/pests/paper-wasps", anchor: "Paper wasps" },
      { href: "/blog/why-wasps-are-more-aggressive-in-late-summer", anchor: "Why wasps are more aggressive in late summer" },
    ],
    updated: "2026-10-19",
  },

  // ───────────────────────────── Ant control ─────────────────────────────
  {
    slug: "ant-control",
    metaTitle: "Ant Control Orange County: Argentine Ant Treatment",
    metaDescription:
      "Ant control in Orange County that stops Argentine ant trails at the source: baiting, targeted perimeter treatment and prevention. Free inspections.",
    sections: [
      {
        heading: "Argentine ants and why sprays scatter them",
        body: [
          "The small, dark brown ants marching across Orange County kitchen counters are almost always Argentine ants. They are not native to California. Here they form enormous supercolonies with many queens and many connected nests, so neighboring colonies do not fight each other the way most ants do. Your yard is part of a much larger network.",
          "That is why spraying the trail you can see rarely works for long. Killing the foragers in the kitchen does nothing to the queens outside, and many store-bought sprays are repellent, which can split a trail into new paths, push ants into wall voids and make the problem harder to track. The goal is to get slow-acting bait or a non-repellent treatment carried back to the nests.",
        ],
        link: { href: "/blog/argentine-ants-orange-county-why-they-keep-coming-back", label: "Why Argentine ants keep coming back" },
      },
      {
        heading: "Rainy-season and heat-wave ant invasions",
        body: [
          "Ant calls in Orange County spike at two times. When winter rain soaks the soil, Argentine ants move indoors to get above the water. In hot, dry spells, they come in searching for water and sugar, which is why bathrooms, kitchen sinks, pet bowls and dishwashers are common targets.",
          "Both invasions are predictable, which makes them easier to prevent. A perimeter treatment before the rainy season and a check-in before the first heat wave stop most indoor trails before they start.",
        ],
      },
      {
        heading: "Other ants we see in Orange County",
        body: [
          "Not every ant is an Argentine ant, and the right treatment depends on the species.",
        ],
        bullets: [
          "Red imported fire ants: reddish-brown ants that build mounds in lawns, turf and along irrigation lines and deliver painful stings; the OC Mosquito and Vector Control District tracks them and accepts reports of suspected mounds",
          "Southern fire ants and other native ants: also sting and can nest in yards and planters",
          "Carpenter ants: larger black or bicolored ants that hollow out damp or decaying wood to nest; look for coarse sawdust-like debris near wood and along fascia, decks and window frames",
          "Odorous house ants: small dark ants that give off a rotten-coconut smell when crushed",
          "Pavement and thief ants: small ants that nest under slabs, sidewalks and in wall voids",
        ],
        link: { href: "/pests/fire-ants", label: "Fire ants in Orange County" },
      },
      {
        heading: "Our ant baiting strategy",
        body: [
          "We start by finding where the ants are coming from: following trails outside to nests under pavers, mulch, potted plants, irrigation boxes and along the foundation. Then we combine three things.",
        ],
        bullets: [
          "Baits placed along active trails and near nests that worker ants carry back to share with the queens",
          "Targeted perimeter and spot treatments with EPA-registered products applied per label, kept off hardscape runoff paths where rules restrict it",
          "Interior crack-and-crevice work only where needed, so indoor trails are not broken up before bait reaches the colony",
          "A follow-up check to confirm activity has dropped, with re-baiting where ants are still feeding",
        ],
      },
      {
        heading: "How to keep ants out of your home",
        body: [
          "Treatment works faster and lasts longer when the house gives ants fewer reasons to come in. These steps make the biggest difference in Orange County homes.",
        ],
        bullets: [
          "Wipe counters and sweep floors daily, and store sugar, honey, cereal and pet food in sealed containers",
          "Fix dripping faucets and leaks under sinks",
          "Trim shrubs, ivy and tree branches so they do not touch the house",
          "Keep mulch and soil a few inches below the bottom of siding and away from the foundation",
          "Control aphids and scale on plants, since ants farm them for honeydew",
          "Avoid spraying ant trails yourself while a bait program is working",
        ],
        link: { href: "/blog/top-5-pest-entry-points-in-orange-county-homes", label: "Top pest entry points in OC homes" },
      },
    ],
    pricing: [
      { item: "Ant inspection", range: "Free", note: "Species identification and nest tracking" },
      { item: "One-time ant treatment", range: "$150 – $250", note: "Typical home; heavy or multi-species jobs can run to about $300" },
      { item: "Recurring ant and perimeter service", range: "$75 – $125/mo", note: "Best for ongoing Argentine ant pressure" },
      { item: "Fire ant mound treatment", range: "$150 – $250", note: "Typical yard; quoted after inspection" },
    ],
    extraFaqs: [
      {
        question: "Why are ants coming in after it rains?",
        answer: "Rain floods ant nests in the soil, so Argentine ants move up and indoors looking for dry shelter. Rainy-season invasions are common across Orange County and can be prevented with a perimeter treatment before the rains start.",
      },
      {
        question: "Should I spray ant trails while the bait is working?",
        answer: "No. Spraying kills the workers that carry bait back to the colony and can scatter trails. Wipe trails with soapy water if you need to, but leave baits and active trails alone so the bait reaches the queens.",
      },
      {
        question: "How long does ant baiting take to work?",
        answer: "You will usually see fewer ants within a few days and a large drop within one to two weeks. Because Argentine ant colonies are connected across neighborhoods, recurring service is the best way to keep them from rebuilding.",
      },
      {
        question: "Are carpenter ants found in Orange County?",
        answer: "Yes. Carpenter ants nest in damp or decaying wood such as fascia boards, decks, window frames and tree stumps. Coarse sawdust-like debris is a key sign. Finding and treating the nest, and fixing the moisture problem, is the priority.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/irvine", anchor: "ant control in Irvine" },
      { href: "/areas-we-serve/costa-mesa", anchor: "ant control in Costa Mesa" },
      { href: "/areas-we-serve/santa-ana", anchor: "ant exterminator in Santa Ana" },
      { href: "/areas-we-serve/tustin", anchor: "ant control in Tustin" },
      { href: "/areas-we-serve/newport-beach", anchor: "ant treatment in Newport Beach" },
      { href: "/areas-we-serve/orange", anchor: "ant control in Orange" },
      { href: "/areas-we-serve/anaheim", anchor: "ant control in Anaheim" },
      { href: "/areas-we-serve/garden-grove", anchor: "ant exterminator in Garden Grove" },
      { href: "/areas-we-serve/fullerton", anchor: "ant control in Fullerton" },
      { href: "/areas-we-serve/buena-park", anchor: "ant control in Buena Park" },
    ],
    related: [
      { href: "/pests/argentine-ants", anchor: "Argentine ants" },
      { href: "/pests/fire-ants", anchor: "Fire ants" },
      { href: "/blog/argentine-ants-orange-county-why-they-keep-coming-back", anchor: "Argentine ants: why they keep coming back" },
      { href: "/blog/fire-ant-prevention-tips-for-oc-homeowners", anchor: "Fire ant prevention tips" },
      { href: "/blog/is-that-a-termite-or-a-flying-ant", anchor: "Termite or flying ant?" },
    ],
    updated: "2026-10-19",
  },

  // ───────────────────────────── Commercial ─────────────────────────────
  {
    slug: "commercial-pest-control",
    metaTitle: "Commercial Pest Control Orange County: Plans & Logs",
    metaDescription:
      "Commercial pest control in Orange County for restaurants, HOAs, offices and warehouses. Recurring service, service logs and discreet scheduling.",
    sections: [
      {
        heading: "Restaurants and commercial kitchens",
        body: [
          "Food facilities in Orange County are inspected by the OC Health Care Agency's Environmental Health division under the California Retail Food Code, which requires the premises to be kept free of vermin such as rodents and cockroaches and the building to be sealed against them. Live roaches, rodent droppings or open gaps are among the findings that can lead to a violation or, in serious cases, a closure until the problem is fixed.",
          "Our restaurant service focuses on the places inspectors and pests both look: under and behind cook lines, dish areas, floor drains, dry storage, walk-in coolers, back doors and dumpster areas. We use gel baits and crack-and-crevice treatments for cockroaches, monitoring and traps for rodents, drain and sanitation recommendations for flies, and exclusion work for gaps around pipes, doors and walls.",
        ],
        link: { href: "/blog/restaurant-pest-control-requirements-orange-county", label: "Restaurant pest control requirements in Orange County" },
      },
      {
        heading: "HOAs, apartment communities and property managers",
        body: [
          "For HOAs and property managers, the hardest part is coordination: common areas, landscaping, trash enclosures, carports and dozens of individual units, each with different residents and schedules. We set up recurring exterior service for common areas, handle unit-level calls as they come in, and keep a running record so the board or manager can see what was done and where.",
          "Common multi-unit issues in Orange County include roof rats moving through shared attics and trees, Argentine ants along walkways and slabs, cockroaches in trash areas and plumbing chases, and bees or wasps nesting in eaves and block walls.",
        ],
        link: { href: "/blog/commercial-pest-control-for-oc-property-managers", label: "Pest control for OC property managers" },
      },
      {
        heading: "Offices, warehouses and places of worship",
        body: [
          "Offices tend to have ant, cockroach and rodent problems around break rooms, plumbing and loading areas. Warehouses and light industrial buildings need rodent monitoring along walls and dock doors, attention to stored goods and pallets, and sealing around roll-up doors. Churches and other places of worship often have kitchens, classrooms, storage rooms and large attics that are used on a different schedule than a typical business.",
          "Each site gets a plan built around how the building is actually used, with service timed for when people are not there.",
        ],
      },
      {
        heading: "Recurring service plans and service documentation",
        body: [
          "Most commercial accounts are on a recurring plan, typically monthly, with more frequent visits for high-risk food facilities when needed. Every visit is documented so you have a record to show a health inspector, property owner or auditor.",
        ],
        bullets: [
          "Date, time and areas serviced on every visit",
          "Pest activity found, devices checked and products applied",
          "Recommendations for sanitation, storage and building repairs",
          "Copies of product labels and safety data sheets on request",
          "Callbacks between scheduled visits when activity is reported",
        ],
      },
      {
        heading: "Discreet scheduling that works around your business",
        body: [
          "Customers should never see a pest technician working through the dining room. We schedule service before opening, after closing or during slow hours, and we are available 7 days a week from 8AM to 8PM. Work is done quietly and devices are placed out of sight wherever the product label and the job allow.",
          "Every account is handled directly by Yobani Arreola, the licensed operator (CA Structural Pest Control Board OPR 14866), so you have one person who knows your building.",
        ],
        link: { href: "/blog/how-to-choose-a-commercial-exterminator-in-orange-county", label: "How to choose a commercial exterminator" },
      },
    ],
    pricing: [
      { item: "Commercial walkthrough", range: "Free", note: "Site inspection and written service plan" },
      { item: "Recurring general pest service", range: "Quoted per site", note: "Based on building size, use and visit frequency" },
      { item: "Rodent monitoring program", range: "$100 – $200/mo", note: "Typical small to mid-size site" },
      { item: "One-time commercial treatment", range: "Quoted after inspection", note: "For a specific problem like cockroaches, ants or bees" },
      { item: "Exclusion repairs", range: "$300 – $1,500+", note: "Sealing gaps around doors, pipes and walls" },
    ],
    extraFaqs: [
      {
        question: "Do you provide service reports for health inspections?",
        answer: "Yes. Every commercial visit is documented with the date, areas serviced, activity found, products used and recommendations, so you have a service log to show an inspector or property owner.",
      },
      {
        question: "Can you service my restaurant after hours?",
        answer: "Yes. We schedule around your business, including before opening and after closing, 7 days a week between 8AM and 8PM.",
      },
      {
        question: "Do you work with HOAs and multi-unit properties?",
        answer: "Yes. We handle recurring common-area service and individual unit calls for HOAs, apartment communities and property managers, and we keep records the board or manager can review.",
      },
      {
        question: "How often should a commercial property be serviced?",
        answer: "Most commercial properties do well with monthly service. Restaurants and other food facilities with heavy pest pressure may need more frequent visits until activity is under control.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/buena-park", anchor: "commercial pest control in Buena Park" },
      { href: "/areas-we-serve/garden-grove", anchor: "restaurant pest control in Garden Grove" },
      { href: "/areas-we-serve/santa-ana", anchor: "commercial pest control in Santa Ana" },
      { href: "/areas-we-serve/irvine", anchor: "office pest control in Irvine" },
      { href: "/areas-we-serve/anaheim", anchor: "commercial pest service in Anaheim" },
      { href: "/areas-we-serve/costa-mesa", anchor: "restaurant pest control in Costa Mesa" },
      { href: "/areas-we-serve/tustin", anchor: "commercial pest control in Tustin" },
      { href: "/areas-we-serve/fullerton", anchor: "commercial pest control in Fullerton" },
    ],
    related: [
      { href: "/blog/restaurant-pest-control-requirements-orange-county", anchor: "Restaurant pest control requirements" },
      { href: "/blog/commercial-pest-control-for-oc-property-managers", anchor: "Commercial pest control for property managers" },
      { href: "/blog/how-to-choose-a-commercial-exterminator-in-orange-county", anchor: "Choosing a commercial exterminator" },
      { href: "/pests/german-cockroaches", anchor: "German cockroaches" },
      { href: "/pests/roof-rats", anchor: "Roof rats" },
      { href: "/pests/house-flies", anchor: "House flies" },
    ],
    updated: "2026-10-19",
  },

  // ───────────────────────────── Gopher control ─────────────────────────────
  {
    slug: "gopher-control",
    metaTitle: "Gopher Control Orange County: Gopher Trapping",
    metaDescription:
      "Gopher control in Orange County: we find the main tunnels, trap gophers in lawns and gardens, and help keep new ones out. Free yard inspection.",
    sections: [
      {
        heading: "Gophers in Orange County lawns and gardens",
        body: [
          "The gopher digging up Orange County yards is the pocket gopher, usually Botta's pocket gopher, the most widespread species in California. Gophers spend nearly their whole lives underground in a tunnel system that can cover a large part of a yard. They eat roots, bulbs and plants from below, sometimes pulling whole plants down into the tunnel.",
          "Irrigated lawns, vegetable gardens, fruit trees and landscaped slopes give gophers everything they need, which is why they are common in neighborhoods next to parks, open space, greenbelts and canyons. Damage shows up as mounds in the lawn, wilting or dead plants, chewed irrigation lines and soft spots that collapse underfoot.",
        ],
      },
      {
        heading: "How to recognize gopher activity",
        body: [
          "Gopher mounds are crescent or horseshoe shaped when viewed from above, with a plugged hole off to one side. Mole mounds are rounder and volcano shaped, and ground squirrel burrows are left open. Telling them apart matters because each animal is handled differently.",
        ],
        bullets: [
          "Fresh crescent-shaped mounds of loose, fine soil, often in a line",
          "Plugged holes with no open entrance",
          "Plants wilting or disappearing, sometimes pulled into the ground",
          "Roots of young trees and shrubs chewed through",
          "Damaged drip lines and sprinkler pipes",
        ],
      },
      {
        heading: "Our gopher trapping approach",
        body: [
          "Trapping is the most reliable way to remove gophers from a residential yard. The key is finding the main tunnel, not just the short side tunnel under a mound. We probe between fresh mounds to locate the main runway, open it, and set traps facing both directions so a gopher coming from either side is caught. The openings are covered to keep light out and make the tunnel feel undisturbed.",
          "Traps are checked on follow-up visits and moved as needed until no new mounds appear. Gas cartridges and smoke rarely work because gophers quickly plug off the tunnel. All trapping and any other methods are done according to California rules for vertebrate pests and product labels.",
        ],
      },
      {
        heading: "Why gophers come back",
        body: [
          "A yard that had gophers is good gopher habitat, so new gophers from neighboring yards, slopes and open space will move into empty tunnel systems. That is why a single successful trapping visit sometimes gets followed by new mounds weeks or months later.",
          "Watching for fresh mounds and trapping new arrivals early keeps damage small. Properties next to parks, greenbelts or undeveloped land usually benefit from periodic check-ins.",
        ],
      },
      {
        heading: "Preventing gopher damage",
        body: [
          "No yard is gopher-proof, but these steps protect the plants you care about most.",
        ],
        bullets: [
          "Plant trees, shrubs and vegetables in wire mesh baskets",
          "Line raised garden beds with hardware cloth on the bottom",
          "Bury galvanized hardware cloth vertically around small garden areas, extending below root depth with a few inches above ground",
          "Keep irrigation efficient; overwatered lawns attract more activity",
          "Flatten old mounds after trapping so new activity is easy to spot",
        ],
      },
    ],
    pricing: [
      { item: "Yard inspection", range: "Free", note: "Confirms gophers vs. moles or ground squirrels" },
      { item: "Gopher trapping program", range: "$250 – $600", note: "Typical yard including follow-up visits; depends on yard size and activity" },
      { item: "Ongoing monitoring", range: "Quoted after inspection", note: "For properties next to open space with repeat activity" },
    ],
    extraFaqs: [
      {
        question: "How do I know if I have a gopher or a mole?",
        answer: "Gopher mounds are crescent shaped with a plugged hole off to the side. Mole mounds are round and volcano shaped, and moles often leave raised surface ridges. Ground squirrels leave open burrow holes.",
      },
      {
        question: "Do gas cartridges or flooding get rid of gophers?",
        answer: "Usually not. Gophers quickly plug their tunnels when they sense smoke, gas or water, and their tunnel systems are large. Trapping in the main tunnel is far more reliable.",
      },
      {
        question: "How long does gopher trapping take?",
        answer: "Many yards are cleared within one to two weeks of trapping and follow-up visits. Larger properties or yards next to open space may need more time and periodic check-ins.",
      },
      {
        question: "Will gophers come back after trapping?",
        answer: "They can. New gophers often move in from nearby yards and open space. Wire baskets, buried hardware cloth around gardens and catching new mounds early keep damage small.",
      },
    ],
    cityLinks: [
      { href: "/areas-we-serve/irvine", anchor: "gopher control in Irvine" },
      { href: "/areas-we-serve/orange", anchor: "gopher trapping in Orange" },
      { href: "/areas-we-serve/tustin", anchor: "gopher removal in Tustin" },
      { href: "/areas-we-serve/fullerton", anchor: "gopher control in Fullerton" },
      { href: "/areas-we-serve/anaheim", anchor: "gopher trapping in Anaheim" },
      { href: "/areas-we-serve/costa-mesa", anchor: "gopher control in Costa Mesa" },
      { href: "/areas-we-serve/newport-beach", anchor: "gopher removal in Newport Beach" },
    ],
    related: [
      { href: "/services/wildlife-trapping", anchor: "Wildlife trapping" },
      { href: "/services/rodent-control", anchor: "Rodent control" },
      { href: "/pests/squirrels", anchor: "Squirrels" },
      { href: "/blog/spring-pest-prevention-guide-orange-county", anchor: "Spring pest prevention guide" },
    ],
    updated: "2026-10-19",
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
