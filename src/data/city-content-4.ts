import type { CityContent } from "./local-seo-types";

// Upgraded content for more city pages (batch 4). Merged into CITY_CONTENT in city-content.ts.
// Prices must stay consistent with /pest-control-cost.
export const CITY_CONTENT_4: CityContent[] = [
  // ---------------------------------------------------------------- LAGUNA BEACH
  {
    slug: "laguna-beach",
    metaTitle: "Laguna Beach Pest Control: Rats, Raccoons & Ants",
    metaDescription:
      "Laguna Beach pest control for canyon roof rats, raccoons under decks, skunks in crawl spaces and ants. Licensed, owner-run. Call 714-323-8262.",
    heroSubtext:
      "Laguna's canyons carry wildlife and roof rats right down to the cottages and hillside homes. We trap what's inside, seal how it got in, and keep the ants and spiders out of the rest of the house.",
    sections: [
      {
        heading: "Roof Rats in Laguna Beach Canyon Homes",
        body: [
          "Laguna Beach is built along a series of canyons that run from the ridgeline down to the water: Laguna Canyon, Bluebird, Aliso and smaller ones like Rimrock. Each is a strip of brush, eucalyptus and ornamental planting that a rat can travel without ever crossing open ground. Homes in Bluebird Canyon, Canyon Acres and the upper streets of Arch Beach Heights often back straight onto that cover, and roof rats work their way from the hillside into palms, overgrown bougainvillea and finally the attic.",
          "Steep lots put the roofline within easy reach. A branch resting on the eaves, a gap under a tile, or a loose vent screen on the downhill side of the house is enough. We trap in the attic and garage over several visits, check and reset on a schedule, and seal the openings once the catches stop. Cutting vegetation back from the roof helps the repair hold.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control and attic trapping" },
      },
      {
        heading: "Raccoons, Skunks and Opossums Under Decks and Crawl Spaces",
        body: [
          "Much of Laguna's housing is older beach-cottage stock in North Laguna, Woods Cove and South Laguna, a lot of it on raised foundations with crawl-space vents close to the ground. Newer hillside homes add cantilevered decks with a dark, dry space underneath. Both are exactly what raccoons, opossums and skunks look for when they come down the canyons at night.",
          "The first clue is usually a sound or a smell: thumping under the floor, a musky odor in a closet, or skunk spray drifting up through the heater registers. We trace it to the entry point, set traps, and remove the animal once it's caught. Then we close the opening with heavy mesh or a one-way door that can be checked before final sealing. If something has died under the house, we remove it and deodorize the area.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping and removal" },
      },
      {
        heading: "Moisture Pests and Argentine Ants Near the Water",
        body: [
          "The marine layer keeps the lower parts of town damp for weeks at a stretch, especially homes tucked into shaded canyon bottoms or a block off the sand near Victoria Beach and Thalia Street. Crawl spaces and ground-level storage rooms stay humid, which brings in silverfish, earwigs, pillbugs and millipedes.",
          "Argentine ants work the same hillsides. Here they often nest in the ice plant and terraced planters above the house and follow irrigation lines down to the foundation. We bait those trails where they start, treat a non-repellent band around the perimeter, and point out moisture fixes that will do more than any spray.",
        ],
        bullets: [
          "Keep crawl-space vents clear of soil, leaves and stored items",
          "Fix dripping hose bibs and sprinkler heads aimed at the foundation",
          "Store firewood and patio cushions off the ground and away from walls",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Spiders, Fleas and Ticks Next to the Wilderness Parks",
        body: [
          "Laguna is ringed by open land, with Laguna Coast Wilderness Park to the north and Aliso and Wood Canyons to the south. Top of the World and the ridge homes off Park Avenue sit right at that edge. Wildlife crossing yards at night drops flea eggs, and the brush along trailheads holds ticks that ride home on dogs.",
          "Black widows are common in the stone retaining walls, exterior staircases and meter boxes that almost every hillside lot has. We treat flea problems inside and out with a timed follow-up, treat yard edges where pets pick up ticks, and clear webs and spider hiding spots on a perimeter service. Products are EPA-registered and applied according to the label, and we'll tell you when treated rooms are ready to use again.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: [
      "North Laguna",
      "Top of the World",
      "Arch Beach Heights",
      "Bluebird Canyon",
      "Canyon Acres",
      "Temple Hills",
      "Woods Cove",
      "Victoria Beach",
      "South Laguna",
      "Laguna Canyon",
    ],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat trapping in Laguna Beach canyon homes" },
      { href: "/services/wildlife-trapping", anchor: "raccoon and skunk trapping under decks" },
      { href: "/services/exclusion-repairs", anchor: "sealing crawl-space vents and rooflines" },
      { href: "/services/ant-control", anchor: "Argentine ant baiting on hillside lots" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500", note: "Several trapping visits on most attic jobs" },
      { item: "Wildlife trapping", range: "$250 – $600", note: "Trap and remove; sealing quoted separately" },
      { item: "Exclusion repairs", range: "$300 – $1,500+", note: "Steep or hard-to-reach rooflines run higher" },
      { item: "Dead animal removal", range: "$150 – $400" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "There's a skunk smell coming up through my floor. What should I do?",
        answer:
          "Keep pets away from the crawl-space openings and give us a call. A skunk smell under the house usually means one has denned there or sprayed near the vents. We can often trace it the same day, set traps at the entry, remove the animal once it's caught, and then seal the opening so another one can't move in.",
      },
      {
        question: "How much does rodent control cost in Laguna Beach?",
        answer:
          "One-time rodent control usually runs $200 to $500, depending on how many rats are active and how many return visits it takes. Sealing entry points is quoted separately, typically $300 to $1,500 or more on steep or complicated rooflines. The inspection is free.",
      },
      {
        question: "Can you work on steep or hard-to-reach Laguna lots?",
        answer:
          "Yes. Plenty of Laguna Beach homes have long staircases, tight side yards and decks hanging over a slope. We work out access during the free inspection and tell you up front if a repair needs extra time or materials.",
      },
      {
        question: "What happens to a raccoon after it's trapped?",
        answer:
          "We remove it from the property and handle it in line with California wildlife rules. We don't release animals back into your yard or the canyon behind it. The more important step is sealing the opening it used, so the next raccoon can't take its place.",
      },
    ],
    nearby: ["laguna-niguel", "aliso-viejo", "newport-beach", "dana-point"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LAGUNA HILLS
  {
    slug: "laguna-hills",
    metaTitle: "Laguna Hills Pest Control: Gophers, Ants & Roof Rats",
    metaDescription:
      "Pest control in Laguna Hills for gophers on sloped yards, roof rats, ants and spiders, plus barn flies in Nellie Gail Ranch. Free inspection, open 7 days.",
    heroSubtext:
      "Laguna Hills mixes 1970s tract homes, condo complexes and the horse lots of Nellie Gail Ranch on rolling ground above Aliso Creek. Each has its own pest pattern, and we work all of them.",
    sections: [
      {
        heading: "Gopher Control on Laguna Hills Slopes and Lawns",
        body: [
          "Much of Laguna Hills was graded into terraced lots and long manufactured slopes as the area built out in the 1960s and 1970s. Those slopes, planted with ground cover and kept on irrigation, are prime gopher country. Gophers push up fan-shaped mounds, chew sprinkler lines and roots, and leave lawns feeling spongy underfoot. On a slope, their tunnels can also channel irrigation water and loosen the soil.",
          "We probe for the main runs, set traps in active tunnels, and come back to check and reset them. Most yards need more than one visit, because a single mound often connects to a system several gophers share. Homes that back onto common-area slopes or the Aliso Creek corridor tend to see newcomers over time, so we'll show you what fresh activity looks like and come back when it starts.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Nellie Gail Ranch: Flies, Rodents and Feed Rooms",
        body: [
          "Nellie Gail Ranch is the city's equestrian neighborhood, with larger lots, private stalls and miles of horse trails. Horse properties bring a predictable set of pests. Manure and wet bedding breed house flies and stable flies, feed rooms draw mice and rats, and hay storage and tack rooms give black widows plenty of corners.",
          "Fly control starts with the manure routine, so we talk through where piles sit and how often stalls are cleaned before treating the surfaces flies rest on. For rodents we place tamper-resistant stations around feed storage and trap inside tack and feed rooms. Products are EPA-registered and applied according to label directions, with notes on keeping animals out of treated spots until it's appropriate. We also look for gaps in older barn siding where rats squeeze through.",
        ],
        link: { href: "/services/fly-control", label: "Fly control for horse properties" },
      },
      {
        heading: "Roof Rats and Ants in Established Neighborhoods",
        body: [
          "Decades of growth mean the trees in older Laguna Hills tracts now reach over rooftops, and the ivy and juniper on the slopes have grown into thick mats. Roof rats nest in both. They get into attics where the roof meets the wall, under loose tiles and through foundation vents. Calls usually start with scratching at night or droppings along the garage shelves.",
          "We trap over several visits and seal the gaps once the rats stop turning up. Argentine ants are the other everyday complaint. In homes along Moulton and Alicia Parkways they tend to arrive at the kitchen sink and bathroom vanities when the weather turns hot. Baiting the trails and treating the foundation line lasts far longer than spraying what's visible on the counter.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion repairs and rodent-proofing" },
      },
      {
        heading: "Condos, Townhomes and Shared Walls",
        body: [
          "A large share of Laguna Hills housing is attached: condo and townhome complexes near the I-5 and around the shopping centers on Moulton Parkway and La Paz Road. In shared-wall buildings, German cockroaches and ants travel between units through plumbing chases, and one untreated unit can reinfest the units beside it.",
          "For individual owners we treat the unit and explain where the pests are likely coming from. For HOAs and property managers we set up commercial service across the buildings, covering trash enclosures, laundry rooms and pool equipment areas along with the units that report problems. Every visit is documented, so the board has a record of what was found and what was treated. Owners in detached homes inside a gated association can call us on their own, too; we just arrange gate access ahead of time.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial and HOA pest control" },
      },
    ],
    neighborhoods: [
      "Nellie Gail Ranch",
      "Aliso Creek and Sheep Hills Park area",
      "Moulton Parkway corridor",
      "Alicia Parkway area",
      "La Paz Road area",
      "El Toro Road corridor",
    ],
    topServices: [
      { href: "/services/gopher-control", anchor: "gopher trapping on Laguna Hills slopes" },
      { href: "/services/rodent-control", anchor: "roof rat removal in Laguna Hills" },
      { href: "/services/fly-control", anchor: "fly control for Nellie Gail horse properties" },
      { href: "/services/commercial-pest-control", anchor: "pest control for Laguna Hills HOAs" },
    ],
    pricing: [
      { item: "Gopher control", range: "$250 – $600", note: "Usually several trapping visits" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
      { item: "Spider control (one-time)", range: "$150 – $250" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "How much does gopher control cost in Laguna Hills?",
        answer:
          "Gopher trapping typically runs $250 to $600, depending on the size of the yard or slope and how many visits it takes to clear the active tunnels. The inspection is free, and we quote before we start.",
      },
      {
        question: "Can you treat a barn without bothering my horses?",
        answer:
          "Yes. We plan barn work around feeding and turnout, apply EPA-registered products according to the label, and tell you how long to keep horses out of treated stalls or areas. Rodent bait goes in tamper-resistant stations placed where horses and dogs can't get to it.",
      },
      {
        question: "My HOA maintains the slope. Who handles gophers in my yard?",
        answer:
          "That depends on your association's rules, but we can work with either side. Many Laguna Hills owners have us trap inside their own lot while the HOA handles the common slope. When both happen around the same time, the results last longer.",
      },
      {
        question: "How quickly can you get to Laguna Hills?",
        answer:
          "We're based in Tustin, a short drive up the I-5, and we're open 7 days a week from 8AM to 8PM. Call 714-323-8262 to check what's open on today's schedule.",
      },
    ],
    nearby: ["mission-viejo", "aliso-viejo", "lake-forest", "laguna-niguel"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- SEAL BEACH
  {
    slug: "seal-beach",
    metaTitle: "Seal Beach Pest Control: Mosquitoes, Rats & Roaches",
    metaDescription:
      "Seal Beach pest control near the wetlands: mosquitoes, roof rats, roaches and crawl-space pests in Old Town and College Park. Call 714-323-8262.",
    heroSubtext:
      "Seal Beach sits between the ocean, the San Gabriel River and the Anaheim Bay marsh. That water shapes everything from mosquito season to the damp crawl spaces under Old Town cottages.",
    sections: [
      {
        heading: "Mosquito Control Near the Seal Beach Wetlands",
        body: [
          "A big piece of Seal Beach is water or marsh. The Seal Beach National Wildlife Refuge lies inside Naval Weapons Station Seal Beach at Anaheim Bay, and the San Gabriel River reaches the ocean at the city's west edge. The Orange County Mosquito and Vector Control District monitors the marsh, but the mosquitoes biting you on a College Park patio may be coming from somewhere much smaller.",
          "Invasive Aedes mosquitoes now live across the county and breed in a few tablespoons of water: a bromeliad, a clogged rain gutter, a kayak left upright. We search the property for those sources, drain or treat them, and apply a residual to the shrubs and fence lines where adults rest during the day. Monthly service through the warm season holds numbers down, since new mosquitoes keep drifting in from nearby yards.",
        ],
        bullets: [
          "Flip kayaks, paddleboards and small boats so they can't hold rain",
          "Flush bromeliads and plant saucers every week",
          "Report problems on public land to OC Vector at ocvector.org",
        ],
        link: { href: "/services/mosquito-control", label: "Mosquito control services" },
      },
      {
        heading: "Old Town Cottages, Crawl Spaces and Moisture Pests",
        body: [
          "Old Town's grid around Main Street holds some of the oldest housing on this stretch of coast: small cottages and duplexes, many on raised foundations, packed onto narrow lots with alley garages. Salt air rusts vent screens, and the marine layer keeps crawl spaces damp most of the year.",
          "That combination draws silverfish, earwigs and pillbugs, plus American cockroaches that come up from sewer lines and alley drains on warm nights. Rusted vents also let rats and the occasional opossum under the floor. We inspect the crawl space, replace failed screens with heavier mesh, and treat the perimeter and the gaps where plumbing comes through. We'll also flag ventilation and drainage issues, because a drier crawl space is the lasting fix for moisture pests.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Crawl-space and vent exclusion" },
      },
      {
        heading: "Rats in College Park, The Hill and Bridgeport",
        body: [
          "Inland Seal Beach is mostly mid-century single-family tracts. College Park East sits near the 405 and 22 freeways, with College Park West on the other side of town. Mature backyard fruit trees and palms give roof rats food and cover, and they travel along block walls and power lines from yard to yard.",
          "On The Hill and in Bridgeport, the neighborhoods closer to Pacific Coast Highway, we see both roof rats and Norway rats. Norway rats burrow along walls and under sheds, while roof rats head for the attic. We identify which one you have, trap over several visits, and then seal the eaves, vents and garage door gaps that let them in. Picking up fallen fruit and storing pet food and birdseed in sealed bins helps keep the next wave away.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Pest Control for Leisure World Seal Beach Residents",
        body: [
          "Leisure World is a large gated 55-plus community with its own management and service rules. Residents who want help inside their own unit, whether it's ants on the counter, roaches in the bathroom or spiders on the patio, can call us directly, and we'll follow the community's gate and access procedures.",
          "We keep these treatments targeted: gel baits and crack-and-crevice applications rather than broad spraying, EPA-registered products applied according to the label, and clear guidance on when treated areas can be used again. We explain what we did in plain language and leave written notes, which helps when a family member is coordinating care from out of town. Appointments can be set for whatever time of day suits the resident.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
    ],
    neighborhoods: ["Old Town", "The Hill", "Bridgeport", "College Park East", "College Park West", "Leisure World", "Surfside"],
    topServices: [
      { href: "/services/mosquito-control", anchor: "mosquito control near the Seal Beach wetlands" },
      { href: "/services/rodent-control", anchor: "Seal Beach rat removal" },
      { href: "/services/exclusion-repairs", anchor: "replacing rusted crawl-space vents" },
      { href: "/services/cockroach-control", anchor: "cockroach treatment for Old Town homes" },
    ],
    pricing: [
      { item: "Mosquito treatment (one-time)", range: "$150 – $300" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo", note: "Most useful spring through fall" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How much does mosquito control cost in Seal Beach?",
        answer:
          "A one-time mosquito treatment typically runs $150 to $300 depending on yard size and how many breeding sources we find. Monthly service through the season is typically $100 to $175. The inspection is free.",
      },
      {
        question: "Why do I see big roaches on Old Town sidewalks at night?",
        answer:
          "Those are usually American cockroaches. They live in sewer lines, storm drains and damp alleys and come up on warm evenings. They rarely settle inside a dry, sealed house, so the fix is a perimeter treatment plus sealing gaps around doors, drains and pipes. Small tan roaches in the kitchen are a different species and need baiting with a follow-up visit.",
      },
      {
        question: "Is it a rat or a mouse in my garage?",
        answer:
          "Droppings are the quickest clue. Mouse droppings are about the size of a grain of rice; rat droppings are closer to a raisin or larger. Chewed fruit, grease marks along the top of walls or noise in the attic point to roof rats. We confirm what it is at the free inspection before setting any traps.",
      },
      {
        question: "Do you service Surfside and the gated areas?",
        answer:
          "Yes. We serve every part of Seal Beach, including Surfside, Leisure World and Old Town. For gated communities we just need gate access or a pass arranged ahead of the appointment.",
      },
    ],
    nearby: ["los-alamitos", "huntington-beach", "westminster", "cypress"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LOS ALAMITOS
  {
    slug: "los-alamitos",
    metaTitle: "Los Alamitos Pest Control: Ants, Roof Rats & Roaches",
    metaDescription:
      "Los Alamitos pest control for Argentine ants, roof rats in mid-century homes, roaches and fleas near Coyote Creek. Free inspection: 714-323-8262.",
    heroSubtext:
      "Los Alamitos fits mid-century tract homes, newer townhomes and the Joint Forces Training Base into a small footprint. Pests move easily between yards here, so we go after the source, not just the symptoms.",
    sections: [
      {
        heading: "Argentine Ant Control in Los Alamitos Slab Homes",
        body: [
          "Most Los Alamitos houses sit on concrete slabs from the 1950s and 1960s, surrounded by lawns and planter beds on automatic sprinklers. Argentine ants build enormous interconnected colonies in exactly that kind of yard. Over the decades, slabs develop hairline cracks, and plumbing penetrations under kitchen and bathroom sinks open up just enough for ants to walk straight in.",
          "When it turns hot and dry, or after a heavy rain floods their nests, ants come indoors in long trails. Spraying the trail on the counter kills a few hundred workers and scatters the rest. We place slow-acting bait where the trails enter, apply a non-repellent treatment around the foundation that workers carry back to the colony, and recommend sealing obvious cracks. Recurring service keeps the pressure on, since new colonies keep arriving from neighboring yards.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Roof Rats in Carrier Row and Other Older Neighborhoods",
        body: [
          "Carrier Row, the neighborhood south of Katella with streets named for World War II aircraft carriers, is typical of older Los Alamitos: mature shade trees, backyard citrus, detached garages and roofs that have been patched more than once. Roof rats use those trees and fence tops as highways and get into the attic through gaps at the fascia, roof vents and the holes left around old satellite or solar conduit.",
          "Signs include droppings along garage shelves, hollowed-out oranges still hanging on the tree and scurrying overhead in the early morning. We trap over multiple visits and keep going until catches stop, then seal the entry points. In a town this compact, one yard's rats quickly become the neighbor's, so it's worth mentioning to the people next door if we find heavy activity.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Cockroaches, Fleas and Spiders Near Coyote Creek",
        body: [
          "Coyote Creek runs along the city's west side, with the San Gabriel River just beyond it. Concrete flood channels and storm drains are home to American cockroaches, which come out on warm nights and wander into garages and under doors. Opossums and raccoons travel the channels too, and wherever they bed down near houses, fleas follow.",
          "Black widows round out the list, living in block walls, meter boxes and the stacks of boxes in garages. A perimeter treatment with a check of door sweeps handles roaches and spiders. Flea problems get an inside-and-outside treatment plus a follow-up timed to catch eggs as they hatch, and pets should go on a vet-recommended preventive at the same time. Keeping garage doors closed at dusk and lids tight on trash cans also cuts down on the roaches and animals drawn in from the channel.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
      {
        heading: "Townhomes, Small Businesses and the Base Edge",
        body: [
          "Newer townhome and condo projects have filled in along Katella Avenue and Los Alamitos Boulevard, and both corridors are lined with restaurants, medical offices and small shops. In attached housing, German cockroaches spread through shared plumbing walls; in restaurants they usually arrive in delivery boxes.",
          "For businesses we offer recurring commercial service scheduled around operating hours, with written records after each visit. Homes that border the open ground around the Joint Forces Training Base sometimes see more rodents and gophers pushing in from the grassy edges. We trap those and seal garages, vents and gaps under gates so they stay outside. Gophers on these edges get the same approach as anywhere else: find the active tunnels, trap them, and check back until fresh mounds stop appearing.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
    ],
    neighborhoods: [
      "Carrier Row",
      "Old Town West",
      "Royal Oak",
      "Laurel Park area",
      "Katella Avenue corridor",
      "Los Alamitos Boulevard corridor",
      "Neighboring Rossmoor",
    ],
    topServices: [
      { href: "/services/ant-control", anchor: "Argentine ant control in Los Alamitos" },
      { href: "/services/rodent-control", anchor: "roof rat trapping in older Los Alamitos homes" },
      { href: "/services/cockroach-control", anchor: "cockroach control for homes and restaurants" },
      { href: "/services/exclusion-repairs", anchor: "rodent-proofing attics and garages" },
    ],
    pricing: [
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400", note: "Includes a follow-up timed to the hatch" },
    ],
    extraFaqs: [
      {
        question: "How much is ant control in Los Alamitos?",
        answer:
          "A one-time ant treatment typically runs $150 to $250. Recurring ant service is typically $75 to $125 a month and is the better value if ants come back every summer. The inspection is free, and you get a quote before any work starts.",
      },
      {
        question: "Why do ants show up right after it rains?",
        answer:
          "Heavy rain floods the shallow nests in lawns and planters, and the colony moves to higher, drier ground, which is often a wall void or the cabinet under the kitchen sink. They usually appear within a day or two of a storm. Baiting the entry points and treating the foundation line clears them faster than spraying.",
      },
      {
        question: "Do you also serve Rossmoor?",
        answer:
          "Yes. Rossmoor is unincorporated but right next door, and we serve it along with Los Alamitos, Seal Beach and Cypress. The pest pressures are similar: roof rats in mature trees, Argentine ants and the occasional flea problem from passing wildlife.",
      },
      {
        question: "Can you remove a beehive from a wall?",
        answer:
          "Yes. Honey bees sometimes move into wall voids, soffits and block walls in older homes. A swarm hanging on a branch often moves on in a day or two, but an established hive with comb inside a wall has to be removed, comb included, and the opening sealed. Removal from walls typically runs $500 to $800 or more.",
      },
    ],
    nearby: ["seal-beach", "cypress", "la-palma", "stanton"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LA PALMA
  {
    slug: "la-palma",
    metaTitle: "La Palma Pest Control: Ants, Roof Rats & Bees",
    metaDescription:
      "La Palma pest control for Argentine ants, roof rats in backyard citrus, bees in walls and fleas. Licensed, Tustin-based, open 7 days. Call 714-323-8262.",
    heroSubtext:
      "La Palma's tract homes went up in a short burst after the dairies left, so many houses now share the same aging vents, rooflines and slab cracks. We know where pests get into them.",
    sections: [
      {
        heading: "Why La Palma Homes Share the Same Weak Spots",
        body: [
          "La Palma incorporated in 1955 as Dairyland, and the dairies gave way to tract homes starting in the mid-1960s, when the city took its current name. Because most neighborhoods were built over a short span, the houses tend to age the same way: brittle roof-vent screens, garage doors with worn bottom seals, stucco cracked where it meets the slab, and gaps where cable and solar lines were added later.",
          "Those are the openings rodents, ants and spiders use, and they repeat block after block. On a free inspection we walk the roofline, garage and foundation and point out the specific gaps on your house. Closing them with metal mesh, new vent screens and door sweeps is usually the difference between a problem that keeps coming back and one that stays fixed.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion repairs" },
      },
      {
        heading: "Roof Rats in La Palma Backyards",
        body: [
          "Backyard citrus, avocado and loquat trees are common in La Palma, and they're a reliable food source for roof rats. The rats nest in dense trees, palms and climbing vines, travel along power lines and the block walls between yards, and move into attics and garages when the nights get cool or a nest is disturbed.",
          "Typical signs are half-eaten oranges still on the branch, droppings behind the water heater and gnawing above the ceiling after dark. We trap in the attic and garage over several visits, track what's caught, and seal the openings once activity stops. Picking fruit as it ripens, trimming branches a few feet back from the roof and keeping pet food in sealed bins all help.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Argentine Ants and Black Widows Around La Palma Homes",
        body: [
          "Tidy lawns and flower beds on daily irrigation, a fixture of La Palma's quiet residential streets, give Argentine ants a steady supply of water and nesting soil. Their colonies run under sidewalks and driveways, and during heat waves they march into kitchens, bathrooms and even pet bowls.",
          "We treat ants at the source with baits the workers carry home and a non-repellent foundation treatment, instead of repellent sprays that only scatter them. Black widows are the other routine find. They hide in block walls, utility cabinets, garage corners and under patio furniture. Quarterly perimeter service handles both, and it includes knocking down webs from eaves and garage ceilings. If ants find their way back between visits, we come back out and re-treat the trail.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
      {
        heading: "Bees, Wasps and Fleas in La Palma",
        body: [
          "Honey bee swarms pass through La Palma in spring, and now and then a swarm settles into a wall void, an eave or a utility box instead of moving on. Once comb is built, the hive needs to be removed rather than just sprayed, and the opening sealed, or the leftover honey will draw new bees, ants and wax moths. Paper wasps, meanwhile, build under eaves and patio covers all summer.",
          "Fleas are the other year-round nuisance. Opossums and stray cats cross yards at night, and with mild winters, eggs in shaded lawn and pet bedding keep hatching. We treat indoors and out on the same visit and schedule a follow-up, using EPA-registered products applied per the label with clear re-entry guidance.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
    ],
    neighborhoods: [
      "Central Park and Civic Center area",
      "Walker Street corridor",
      "Moody Street area",
      "La Palma Avenue corridor",
      "Orangethorpe Avenue area",
    ],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat removal in La Palma" },
      { href: "/services/ant-control", anchor: "Argentine ant control for La Palma homes" },
      { href: "/services/bee-removal", anchor: "bee and hive removal from walls" },
      { href: "/services/exclusion-repairs", anchor: "sealing vents and garage gaps" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "Wasp / bee removal", range: "$150 – $500", note: "Swarms and exposed nests" },
      { item: "Bee hive removal from walls", range: "$500 – $800+" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How much does bee removal cost in La Palma?",
        answer:
          "Removing a swarm or an exposed nest typically runs $150 to $500. When the bees have built comb inside a wall, eave or block wall, removal usually runs $500 to $800 or more, because the comb has to come out and the opening has to be sealed. We quote after a free inspection.",
      },
      {
        question: "Why do rats keep coming back after I trap them?",
        answer:
          "Trapping removes the rats that are there, not the way in. If the vent screen, roof gap or garage door seal they used is still open, new rats from neighboring yards and trees will find it. That's why we finish rodent jobs by sealing the entry points.",
      },
      {
        question: "Can I just spray the bees in my wall myself?",
        answer:
          "We don't recommend it. Spraying a hive inside a wall kills bees but leaves the comb and honey behind, which can melt, stain drywall and attract more pests. It also tends to provoke stings. Call us and we'll tell you whether it's a passing swarm or an established hive.",
      },
      {
        question: "Do you service businesses in La Palma?",
        answer:
          "Yes. We provide commercial pest control for offices, restaurants and shops in La Palma, with recurring service and written records after each visit. The inspection is free.",
      },
    ],
    nearby: ["buena-park", "cypress", "los-alamitos", "anaheim"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- VILLA PARK
  {
    slug: "villa-park",
    metaTitle: "Villa Park Pest Control: Rodents, Gophers & Wildlife",
    metaDescription:
      "Villa Park pest control for half-acre lots: roof rats in old citrus, gophers, skunks and raccoons near Santiago Creek, bees and ants. Call 714-323-8262.",
    heroSubtext:
      "Villa Park's half-acre lots, old citrus trees and the Santiago Creek corridor give it a semi-rural feel, and the pests follow suit. We cover the house, the yard and the outbuildings.",
    sections: [
      {
        heading: "Roof Rats in Villa Park's Citrus and Avocado Trees",
        body: [
          "Villa Park grew out of orchards. Citrus was the main crop for roughly 60 years, and the city incorporated in 1962 to keep its large-lot character. Lots still average about half an acre, and many hold mature orange, lemon and avocado trees along with tall palms and hedges. For roof rats, that's food and shelter all year.",
          "Rats nest in the canopy and in thick ground cover, then move into attics, garages, pool houses and sheds. On a property this size the job is bigger than at a typical tract home: there are more structures to check and more places to trap. We set traps in each building with activity, return on a schedule, and seal entry points across the house and outbuildings once catches stop. Harvesting fruit and clearing windfall regularly makes a real difference.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Gopher Control on Large Villa Park Lots",
        body: [
          "Big lawns, orchards and flower beds on deep, irrigated soil are ideal for pocket gophers. One gopher can push up a string of mounds across a lawn in a week, chew through drip lines and gnaw the roots of young trees and roses. On a half-acre lot, damage can spread a long way before anyone notices.",
          "We locate the main tunnels between fresh mounds, set traps in the active runs, and come back to check and reset them until the activity stops. Properties next to open ground, or with neighbors who have gophers too, tend to see new ones move in over time. Many Villa Park owners have us return as soon as fresh mounds appear instead of letting a new population build.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Skunks, Raccoons and Opossums Near Santiago Creek",
        body: [
          "Santiago Creek runs near the city's southern edge and connects upstream toward Santiago Oaks Regional Park and the foothills. Raccoons, skunks and opossums use the creek bed and shady lots as travel routes and look for places to den: under decks, beneath sheds, inside crawl spaces and in the hollow under a pool equipment pad.",
          "A skunk under the house usually announces itself by smell, sometimes right up through the floor vents. We find the entry, set traps, and remove the animal once it's caught. Then we close the opening with heavy wire mesh, often buried along the bottom of a deck or shed, so the next animal can't dig back in. If an animal has died under a structure, we remove it and treat the odor.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping and removal" },
      },
      {
        heading: "Ants, Bees and Black Widows Around Outbuildings",
        body: [
          "Pool houses, detached garages, barns, potting sheds and long block walls give Villa Park properties far more hiding places than a standard lot. Black widows settle into all of them. Honey bees move into hollow walls, old irrigation boxes and tree cavities, and an established hive needs its comb removed, not just sprayed.",
          "Argentine ants also travel farther on big properties, so the nest feeding a kitchen invasion may be in a planter fifty feet from the house. We follow the trails back, bait them at the source and treat a foundation band around the house and occupied outbuildings. Recurring perimeter service keeps spiders and ants in check across the whole property, not just the main house, and we adjust the route as you add a casita or new planting.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
    ],
    neighborhoods: [
      "Santiago Boulevard corridor",
      "Villa Park Road area",
      "Taft Avenue area",
      "Cerro Villa area",
      "Santiago Creek edge",
      "Villa Park Town Center area",
    ],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control for Villa Park citrus properties" },
      { href: "/services/gopher-control", anchor: "gopher trapping on large lots" },
      { href: "/services/wildlife-trapping", anchor: "skunk and raccoon trapping near Santiago Creek" },
      { href: "/services/bee-removal", anchor: "bee hive removal from walls and outbuildings" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500", note: "Larger lots with outbuildings run higher" },
      { item: "Rodent control (recurring)", range: "$100 – $200/mo" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How much does rodent control cost on a large Villa Park lot?",
        answer:
          "One-time rodent control generally runs $200 to $500, with properties that have several outbuildings toward the upper end. Some owners choose recurring rodent service instead, typically $100 to $200 a month. The inspection is free, and we quote before starting.",
      },
      {
        question: "Do I have to remove my fruit trees to get rid of rats?",
        answer:
          "Usually not. Keeping trees trimmed several feet back from the roof, picking fruit as it ripens and clearing what falls removes most of the attraction. Sealing the house and outbuildings is what keeps rats out of the spaces you use.",
      },
      {
        question: "Can you seal under a deck or shed so animals don't come back?",
        answer:
          "Yes. After trapping, we install heavy-gauge wire mesh along the base of decks, sheds and crawl-space openings, bent outward or buried so animals can't dig beneath it. Exclusion is quoted separately, typically $300 to $1,500 or more depending on length and access.",
      },
      {
        question: "How long does gopher control take?",
        answer:
          "Most yards clear within one to three weeks of trapping and follow-up visits. Large lots or properties beside open ground can take longer, and new gophers may arrive later, so we'll show you what fresh mounds look like so you can call early.",
      },
    ],
    nearby: ["orange", "anaheim", "yorba-linda", "tustin"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LADERA RANCH
  {
    slug: "ladera-ranch",
    metaTitle: "Ladera Ranch Pest Control: Ants, Rodents & Gophers",
    metaDescription:
      "Ladera Ranch pest control for ants at weep screeds, roof rats under tile roofs, gophers on slopes and canyon-edge wildlife. Free inspection, 7 days.",
    heroSubtext:
      "Ladera Ranch homes are newer, but they're built right up against open hillsides. We seal the small gaps modern construction leaves and deal with what wanders in from the canyon edges.",
    sections: [
      {
        heading: "Argentine Ants in Newer Ladera Ranch Homes",
        body: [
          "Ladera Ranch has been built out since around 2000, so most homes are stucco over a concrete slab with a metal weep screed along the bottom of the wall. That screed, the gaps around hose bibs and A/C lines, and the expansion joints in patio concrete are the main ways Argentine ants get inside here. Drip-irrigated planters hugging the house give them water and nest sites right at the foundation.",
          "Ants tend to appear in kitchens and bathrooms when the weather heats up or after the first rain of the season. We bait trails at the entry points and treat a non-repellent band along the foundation and weep screed, so workers carry it back to the colony. Monthly or quarterly service keeps new colonies from taking hold, which matters in a community where every yard is irrigated.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Roof Rats Under Ladera's Tile Roofs",
        body: [
          "Concrete tile roofs are everywhere in Ladera Ranch, from Oak Knoll and Bridgepark to Covenant Hills and Terramor. The curved tiles leave openings at the eaves and ridge, and if the bird stops along the bottom row are missing or loose, rats can walk straight under the tile to the attic vents. Now that the community's trees and hedges have filled in, roof rats have plenty of cover close to the roofline.",
          "Scratching in the ceiling at night and droppings in the garage are the usual first signs. We trap in the attic and garage over several visits, then close the gaps with materials suited to tile roofs, including eave closures and heavy mesh over vents, so the rats can't get back in. Sealing is where most of the long-term value lies.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion repairs for tile roofs" },
      },
      {
        heading: "Gophers on Ladera Ranch Slopes and Yards",
        body: [
          "Grading left many Ladera lots with planted slopes behind or beside the house, and the community is ringed by open hillsides. Gophers move in from both. You'll notice fresh mounds in the lawn, planter beds that suddenly sag, and drip lines that stop working because something chewed through them.",
          "We find the active tunnels, trap them and return to check and reset until the mounds stop. Where the slope is maintained by the HOA, we can trap within your own lot while the association handles its areas. Homes along the open-space edges tend to see repeat activity, so we'll explain what new mounds look like and you can call before the damage spreads. Keeping irrigation even, rather than soaking one corner of the yard, also makes a lawn less attractive to new arrivals.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Wildlife, Ticks and Spiders at the Open-Space Edge",
        body: [
          "Coyotes, bobcats, raccoons, opossums and skunks all use the canyons and trail corridors around Ladera Ranch. Coyotes and bobcats are part of the landscape, but the smaller animals sometimes move in closer: under a raised patio, into a side-yard gap or into a garage left open overnight. We trap and remove raccoons, skunks and opossums that set up on the property and seal the opening so another can't take their place.",
          "Dogs walked on the trails can bring home ticks and fleas, so yard-edge treatments and indoor flea service often go together. Black widows are common in retaining walls, garage corners and exterior light fixtures. All of these are handled with EPA-registered products applied according to the label, with re-entry guidance for bedrooms and pet areas.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping and removal" },
      },
    ],
    neighborhoods: [
      "Oak Knoll Village",
      "Bridgepark",
      "Flintridge Village",
      "Township",
      "Wycliffe Village",
      "Echo Ridge Village",
      "Avendale",
      "Covenant Hills",
      "Terramor",
    ],
    topServices: [
      { href: "/services/ant-control", anchor: "ant control in Ladera Ranch" },
      { href: "/services/exclusion-repairs", anchor: "sealing tile roofs against roof rats" },
      { href: "/services/gopher-control", anchor: "gopher trapping on Ladera slopes" },
      { href: "/services/wildlife-trapping", anchor: "raccoon and skunk trapping" },
    ],
    pricing: [
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+", note: "Includes tile-roof eave closures" },
      { item: "Gopher control", range: "$250 – $600" },
    ],
    extraFaqs: [
      {
        question: "How much does pest control cost in Ladera Ranch?",
        answer:
          "A one-time general pest treatment typically runs $150 to $250, and recurring service is typically $80 to $150 a month. Rodent jobs run $200 to $500 for trapping, with sealing quoted separately. The inspection is free.",
      },
      {
        question: "Do I need HOA approval for rodent-proofing work?",
        answer:
          "Interior treatments and most yard work don't usually need approval, but anything that changes the exterior, such as permanent screening on a roofline, may fall under your association's architectural guidelines. Check your HOA's rules; we can describe the materials and placement so you can submit them if needed.",
      },
      {
        question: "What are bird stops, and why do they matter for rats?",
        answer:
          "Bird stops are the closures that fill the open ends of the first row of curved roof tiles at the eave. When they're missing, broken or were never installed, rats and birds can get under the tile and reach attic vents. Replacing or adding them is often part of rodent exclusion on Ladera Ranch homes.",
      },
      {
        question: "Do you trap coyotes or bobcats?",
        answer:
          "No. Coyotes and bobcats come with living next to open space, and we don't trap them. We focus on the smaller animals that move into structures, like raccoons, skunks and opossums, and on sealing the gaps that let them in. Keeping pet food indoors and supervising small pets outside is the main protection from larger predators.",
      },
    ],
    nearby: ["mission-viejo", "san-juan-capistrano", "rancho-santa-margarita", "laguna-niguel"],
    updated: "2026-10-19",
  },
];
