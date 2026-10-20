import type { CityContent } from "./local-seo-types";

// Upgraded content for more city pages (batch 2). Merged into CITY_CONTENT in city-content.ts.
// Prices must stay consistent with /pest-control-cost.
export const CITY_CONTENT_2: CityContent[] = [
  // ---------------------------------------------------------------- HUNTINGTON BEACH
  {
    slug: "huntington-beach",
    metaTitle: "Huntington Beach Pest Control: Rats, Ants & Mosquitoes",
    metaDescription:
      "Huntington Beach pest control for roof rats in palms, wetland mosquitoes, ants and fleas. Licensed owner-operator, free inspection. Call 714-323-8262.",
    heroSubtext:
      "Surf City runs from the Bolsa Chica wetlands and the Harbour channels to the oil-era streets downtown and the tracts around Central Park. Each part of town has its own pest pattern, and we work all of them.",
    sections: [
      {
        heading: "Roof Rats in Huntington Beach Palms, Harbour Homes and Downtown",
        body: [
          "Ask a Huntington Beach homeowner where the rats come from and the answer is usually the palm next door. Mexican fan palms and queen palms with uncut fronds make dry, sheltered nests, and from there roof rats run power lines and fence tops to the roof. In Huntington Harbour, waterfront homes add boat docks, dense tropical plantings and second-story decks that give rats a quiet way up. Downtown and in the older streets north of Main, detached garages and alley-side storage are the usual first stop.",
          "Our approach follows the pattern we use on every rat job: trap inside the attic or garage, come back on a schedule to check and reset, then seal the roofline, vent screens and plumbing gaps once the catches stop. Most jobs take a few visits. Skipping the sealing step is why so many HB homes see rats again the following winter.",
        ],
        bullets: [
          "Have palm skirts trimmed so fronds don't hang dead against the trunk",
          "Keep tree limbs and vines several feet off the roof",
          "Store dog food and birdseed in sealed bins in the garage",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Mosquitoes Near Bolsa Chica, the Wetlands and Central Park",
        body: [
          "Huntington Beach has more open water than most Orange County cities: the Bolsa Chica Ecological Reserve, the Huntington Beach Wetlands along PCH near the Santa Ana River, the Harbour channels, and the ponds in Huntington Central Park. The Orange County Mosquito and Vector Control District monitors and treats those public areas. What it can't do is treat your backyard, and that's where most bites in neighborhoods like Seacliff, Edwards Hill and the Goldenwest tracts actually start.",
          "Daytime-biting invasive Aedes mosquitoes lay eggs in tiny amounts of water: a plant saucer, a boat cover, a clogged gutter, the drip tray under an outdoor fridge. On a visit we hunt for those sources, apply larvicide where water has to stay, and treat the shady hedges and under-deck areas where adults rest. Monthly service from spring into fall works well for homes that back up to the wetlands or the park.",
        ],
        link: { href: "/services/mosquito-control", label: "Mosquito control services" },
      },
      {
        heading: "Ants, Earwigs and Silverfish in Coastal Huntington Beach Homes",
        body: [
          "The marine layer keeps coastal HB damp for much of the year. Garages, stucco weep screeds and the planter beds that run tight against slab foundations stay cool and moist, which is exactly where earwigs, silverfish, sow bugs and Argentine ant nests build up. In the 1960s and 1970s tracts between Beach Boulevard and Goldenwest, we often find ants entering through the expansion joints in the slab and the gap behind kitchen baseboards.",
          "Repellent sprays scatter Argentine ants into new trails. We use slow-acting baits the workers carry back to the nest, plus a non-repellent treatment along the foundation, applied per label with re-entry guidance for your family and pets. Pulling mulch and ivy a few inches back from the stucco and fixing sprinklers that soak the wall makes a noticeable difference too.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Fleas, Dog Beach Days and Crawl-Space Visitors",
        body: [
          "Plenty of Huntington Beach dogs spend weekends at Dog Beach or on the Central Park trails, and fleas don't take winters off on the coast. Once flea eggs drop into carpet, car seats and pet beds, an outdoor product alone won't fix it. We treat indoors and out on the same visit and schedule a follow-up to catch the next hatch, while your vet handles the preventive for the pet itself.",
          "Older homes near downtown and in Sunset Beach sometimes have raised floors and crawl spaces, and opossums and skunks like to bed down there. They bring fleas with them and occasionally leave a strong odor behind. We trace the source, trap and remove the animal, and close up the vents and foundation gaps afterward.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: ["Downtown & Main Street", "Huntington Harbour", "Sunset Beach", "Seacliff", "Edwards Hill", "Goldenwest", "Southeast HB", "Oak View"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Huntington Beach" },
      { href: "/services/mosquito-control", anchor: "mosquito treatment near Bolsa Chica" },
      { href: "/services/exclusion-repairs", anchor: "sealing rooflines and vents against rats" },
      { href: "/services/tick-flea-treatment", anchor: "flea treatment for homes with dogs" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500", note: "Usually several visits plus sealing" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo", note: "Most useful spring through fall" },
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400" },
    ],
    extraFaqs: [
      {
        question: "Do palm trees really attract rats in Huntington Beach?",
        answer:
          "Yes. Untrimmed fan palms and queen palms are one of the most common roof rat nesting spots we see in Huntington Beach. Trimming dead fronds helps, but if rats are already in the attic you'll also need trapping and the entry points sealed.",
      },
      {
        question: "Does OC Vector spray my yard if I live near the Bolsa Chica wetlands?",
        answer:
          "No. The Orange County Mosquito and Vector Control District monitors and treats public sources like wetlands and channels, and you can report problems at ocvector.org. Your own yard's breeding spots, like saucers, gutters and covers, are up to you or a private service.",
      },
      {
        question: "How much does rat removal cost in Huntington Beach?",
        answer:
          "Rodent control typically runs $200 to $500 depending on how much activity there is and how many visits it takes. Sealing entry points is quoted separately, usually $300 to $1,500 or more. The inspection is free.",
      },
      {
        question: "Can you service a Huntington Harbour home with a dock?",
        answer:
          "Yes. We inspect the house, the dock area and any boat storage, since rats and spiders both use them. We'll walk you through what we find and quote before starting any work.",
      },
    ],
    nearby: ["fountain-valley", "westminster", "costa-mesa", "seal-beach"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- MISSION VIEJO
  {
    slug: "mission-viejo",
    metaTitle: "Mission Viejo Pest Control: Rats, Skunks, Ants & Bees",
    metaDescription:
      "Mission Viejo pest control for roof rats under tile roofs, skunks off the greenbelts, ants and bees in walls. Free inspection from a licensed local pro.",
    heroSubtext:
      "Mission Viejo's tile roofs, mature street trees and miles of greenbelt make a comfortable home for rats, skunks and bees. We trap, remove and seal so they stay out.",
    sections: [
      {
        heading: "Roof Rats Under Mission Viejo Tile Roofs",
        body: [
          "Much of Mission Viejo was built between the late 1960s and the 1990s, and a lot of those homes have clay or concrete tile roofs. The open ends of barrel tile at the eaves, missing bird stops and gaps where the roof meets a second-story wall are favorite roof rat entries. After decades of growth, the pines, jacarandas and fruit trees along streets in Aegean Hills and around the lake now reach right over many of those roofs.",
          "Most calls start with scratching overhead at night or droppings on the garage shelves. We trap in the attic, return to check and reset, and once the activity stops we close the openings: eave gaps, tile ends, vent screens and pipe chases. If the attic insulation is soiled, we can quote a cleanout separately.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Skunks, Raccoons and Opossums From the Greenbelts and Oso Creek",
        body: [
          "Mission Viejo's greenbelts, the Oso Creek Trail and the open space toward O'Neill Regional Park link nearly every neighborhood to wild land. Skunks dig under slab edges, stoops and wood decks; raccoons pull up fresh sod looking for grubs; opossums move into crawl spaces and under sheds. Homes in Canyon Crest and the hillside streets along Marguerite Parkway see this most often.",
          "When an animal is living under the house, we confirm it's there, trap and remove it, and then close the space with buried wire mesh or vent screens so the next one can't move in. A skunk smell under the floor usually means the animal is still there or recently left. We can usually trace the source on the first visit.",
        ],
        bullets: [
          "Bring pet food in at night and keep trash lids latched",
          "Check for fresh digging along deck skirts and stoops",
          "Don't block a hole until you know the animal is out",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Bee Swarms and Hives in Mission Viejo Walls and Meter Boxes",
        body: [
          "Spring swarms are common across the Saddleback Valley. A swarm hanging on a branch will often move on in a day or two, but once bees settle into a wall cavity, a block wall cap, an irrigation box or the space under a tile roof, they start building comb and the colony grows quickly. Africanized honey bees are established in Southern California, so an established hive near a walkway or play area shouldn't be left alone.",
          "We handle bee removal ourselves. For hives inside a wall, we open the cavity, take out the bees and all the comb, and close the area so leftover honey doesn't attract a new swarm. Leaving comb in the wall is the main reason bees come back to the same spot.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
      {
        heading: "Ants and Black Widows Around Slopes and Block Walls",
        body: [
          "Irrigated HOA slopes and ivy banks run behind many Mission Viejo homes, and Argentine ant colonies there can be huge. When the hillsides dry out in late summer, the ants move toward kitchens, bathrooms and pet bowls. Baiting along the trails and treating the foundation with a non-repellent product holds them back far longer than spraying the ants you see.",
          "Block walls, stacked pavers, garage shelving and pool equipment pads give black widows lots of hiding spots. Our quarterly perimeter service includes web removal at the eaves and garage plus treatment of the cracks where widows nest, with products applied per label and re-entry guidance provided. In gated communities such as Casta del Sol and Palmia, we'll coordinate gate access ahead of time.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
    ],
    neighborhoods: ["Lake Mission Viejo", "Aegean Hills", "Canyon Crest", "Casta del Sol", "Palmia", "Painted Trails", "Madrid del Lago", "Oso Creek area"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat removal in Mission Viejo" },
      { href: "/services/wildlife-trapping", anchor: "skunk and raccoon trapping" },
      { href: "/services/bee-removal", anchor: "bee hive removal from walls" },
      { href: "/services/exclusion-repairs", anchor: "tile roof and vent sealing" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Wasp / bee removal", range: "$150 – $500" },
      { item: "Bee hive removal from walls", range: "$500 – $800+", note: "Includes removing the comb" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "How do rats get into a Mission Viejo home with a tile roof?",
        answer:
          "Usually through the open ends of the tiles at the eaves, missing bird stops, or gaps where the roof meets a wall. Rats climb nearby trees or fences to get there. Sealing those openings after trapping is what keeps them out.",
      },
      {
        question: "What should I do if a skunk is living under my deck?",
        answer:
          "Don't block the hole yet, since trapping an animal inside makes things worse. Call us for an inspection. We confirm the skunk is there, trap and remove it, and then seal the deck skirt so it can't return.",
      },
      {
        question: "Do you remove bees from Mission Viejo homes the same day?",
        answer:
          "Often, yes. We're open 7 days a week, 8AM to 8PM. Call 714-323-8262 and we'll let you know today's availability. Keep people and pets away from the bees until we arrive.",
      },
      {
        question: "Can you service homes inside gated Mission Viejo communities?",
        answer:
          "Yes. We regularly work in gated and HOA communities. Just let us know when you book so we can arrange gate access ahead of time.",
      },
    ],
    nearby: ["lake-forest", "laguna-hills", "rancho-santa-margarita", "laguna-niguel"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- WESTMINSTER
  {
    slug: "westminster",
    metaTitle: "Westminster Pest Control: Roaches, Rats & Ants",
    metaDescription:
      "Westminster pest control for German roaches, rats and ants in ranch homes, apartments and Little Saigon kitchens. Licensed and local. Call 714-323-8262.",
    heroSubtext:
      "Westminster's 1950s and 1960s ranch homes, apartment blocks and the restaurants of Little Saigon each have their own roach and rodent problems. We treat the source, not just what you can see.",
    sections: [
      {
        heading: "German Cockroaches in Westminster Apartments and Condos",
        body: [
          "German cockroaches spread between units through shared plumbing walls, electrical chases and the gaps behind kitchen cabinets. In Westminster's apartment buildings and older condo complexes, one infested unit can supply its neighbors for months. They also hitchhike in grocery bags, secondhand appliances and cardboard boxes, so a single treatment in one kitchen rarely solves it.",
          "Our roach work is mostly baiting, not fogging. We place gel bait inside cabinet hinges, under sinks, behind the fridge and around the stove, add an insect growth regulator so young roaches can't reproduce, and return in about two weeks to treat the next hatch. For property managers we can treat neighboring units on the same day, which makes the results last.",
        ],
        bullets: [
          "Don't spray store-bought foggers before a treatment; they scatter roaches deeper into walls",
          "Wipe up grease behind the stove and keep pet food sealed",
          "Break down cardboard and get it out of the kitchen",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Rats and Mice in Westminster's Older Ranch Homes",
        body: [
          "A large share of Westminster's housing went up in the postwar tract era, including neighborhoods like Westminster Hills, Shaw Heights and the streets around Sigler Park. Seventy-year-old homes have had a lot of remodeling, and every patched water heater line, added dryer vent or converted garage is a possible rodent gap. Norway rats burrow under sheds and along block walls; roof rats use backyard fruit trees and power lines to get into attics.",
          "We trap and remove the rats first, checking traps on follow-up visits until activity stops. Then we seal the gaps: weep screeds, garage door corners, foundation vents and the space around pipes and conduit. Rodent-proofing is what turns a trapping job into a long-term fix.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Rodent exclusion and sealing" },
      },
      {
        heading: "Commercial Pest Control in Little Saigon and Along Bolsa Avenue",
        body: [
          "The blocks around Bolsa Avenue, Brookhurst and Magnolia hold a dense mix of restaurants, bakeries, markets and shopping centers. Kitchens there deal with German cockroaches, drain flies, mice and stored-product pests in rice, flour and dried goods. Many share walls, dumpsters and loading areas with neighbors, which makes steady, recurring service important.",
          "We schedule visits around opening hours and focus on floor drains, equipment bases, dry storage and the back door where deliveries arrive. After each visit you get a service record that shows what we found and treated, which is useful for health inspections. If a neighbor's problem keeps spilling over, we'll point out the shared gaps, such as conduit runs, ceiling voids and gaps under shared walls, so you can raise them with the landlord.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
      {
        heading: "Ants and Mosquitoes Along Westminster's Flood Channels",
        body: [
          "Westminster is flat and low, and several concrete flood control channels cross the city. Most of the time they're dry or nearly so, but after rain and during irrigation runoff, low spots and side drains can hold water long enough for mosquitoes. Closer to home, invasive Aedes mosquitoes breed in plant saucers, buckets and the small containers common in backyard gardens. We find and treat those sources and the shaded plants where the adults rest.",
          "Argentine ants follow the same flat, irrigated layout, trailing along driveways and slab edges and coming into kitchens during heat waves. Baits combined with a non-repellent foundation treatment, applied per label, give results that last much longer than a spray from the hardware store.",
        ],
        link: { href: "/services/mosquito-control", label: "Mosquito control services" },
      },
    ],
    neighborhoods: ["Little Saigon", "Westminster Hills", "Shaw Heights", "Sigler Park area", "Westminster Mall area", "Liberty Park area", "Midway City border"],
    topServices: [
      { href: "/services/cockroach-control", anchor: "German cockroach treatment in Westminster" },
      { href: "/services/commercial-pest-control", anchor: "restaurant pest control in Little Saigon" },
      { href: "/services/rodent-control", anchor: "rat and mouse removal" },
      { href: "/services/exclusion-repairs", anchor: "rodent-proofing older ranch homes" },
    ],
    pricing: [
      { item: "Cockroach control (one-time)", range: "$150 – $300", note: "Includes a follow-up for German roaches" },
      { item: "Cockroach control (recurring)", range: "$80 – $150/mo" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "Ant control (one-time)", range: "$150 – $250" },
    ],
    extraFaqs: [
      {
        question: "Why do roaches keep coming back in my Westminster apartment?",
        answer:
          "German cockroaches often spread from neighboring units through shared walls and plumbing. Treating one unit at a time leaves a source next door. We recommend treating adjacent units together and scheduling a follow-up to catch eggs that hatch after the first visit.",
      },
      {
        question: "How much does pest control cost for a Westminster restaurant?",
        answer:
          "It depends on the size of the kitchen and how often service is needed. We inspect for free and give you a written quote. Most restaurants choose recurring service, which costs less per visit than one-time treatments.",
      },
      {
        question: "Are foggers a good idea for cockroaches?",
        answer:
          "Usually not. Foggers rarely reach the cracks where German cockroaches hide and can push them deeper into walls or into the next unit. Targeted gel baits and growth regulators work much better.",
      },
      {
        question: "How fast can you get to Westminster?",
        answer:
          "We're based in Tustin, a short drive away, and we're open 7 days a week from 8AM to 8PM. Same-day visits are often possible. Call 714-323-8262.",
      },
    ],
    nearby: ["garden-grove", "huntington-beach", "fountain-valley", "stanton"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LAKE FOREST
  {
    slug: "lake-forest",
    metaTitle: "Lake Forest Pest Control: Rats, Gophers & Wildlife",
    metaDescription:
      "Lake Forest pest control for roof rats in eucalyptus, gophers on slopes, wildlife near Whiting Ranch, and business parks. Free inspection: 714-323-8262.",
    heroSubtext:
      "From the eucalyptus groves and lakes of the old El Toro neighborhoods to Foothill Ranch and Portola Hills against Whiting Ranch, Lake Forest mixes suburban and wild. We handle the pests that come with both.",
    sections: [
      {
        heading: "Roof Rats in Lake Forest's Eucalyptus and Mature Trees",
        body: [
          "Lake Forest got its name partly from the eucalyptus groves Dwight Whiting planted near Serrano Creek in the early 1900s, and many of those trees still tower over homes built around them in the late 1960s and 1970s. Tall eucalyptus, pines and pepper trees give roof rats an easy path from canopy to roof, and the shedding bark and leaf litter below make good cover.",
          "In the older neighborhoods around the two lakes, we often find rats getting in through gaps at the fascia, unscreened gable vents and where the garage roof meets the house. We trap and check on a set schedule, seal the roofline once activity stops, and recommend cutting branches back from the roof. Many residents first notice rats running along the top of the block wall at dusk.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Wildlife From Whiting Ranch and the Foothills",
        body: [
          "Foothill Ranch and Portola Hills sit right against Whiting Ranch Wilderness Park, with the Cleveland National Forest foothills beyond. Raccoons, skunks and opossums move through backyards at night, and they'll den under decks, inside crawl spaces and in the gap beneath garden sheds. Pets that use the trails can bring home ticks and fleas.",
          "We set traps where the animal is actually living, check them on schedule, and remove what we catch. Then we close the opening with buried mesh or sturdy vent covers. For homes backing onto open space, a yearly check of the deck skirt and foundation vents is worth doing.",
        ],
        bullets: [
          "Feed pets indoors and bring bowls in at night",
          "Pick up fallen fruit and keep compost covered",
          "Check dogs for ticks after hikes in Whiting Ranch or along Serrano Creek",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Gophers on Lake Forest Slopes and Lawns",
        body: [
          "Irrigated lawns and planted slopes in Portola Hills, Foothill Ranch and Baker Ranch are a magnet for pocket gophers moving in from the hillside. Fresh crescent-shaped mounds, plants pulled into the ground and soft spots in the turf are the signs. On a slope, gopher tunnels also carry irrigation water underground and can weaken the soil.",
          "We trap gophers in their main runs, check the traps on follow-up visits, and reset until the fresh mounds stop. Where open space keeps sending new gophers in, we can talk about underground wire mesh for raised beds and new plantings. Ground squirrels sometimes show up along the same slopes; their burrows have open holes rather than plugged mounds, and we'll tell you which one you're dealing with during the free inspection.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control" },
      },
      {
        heading: "Pest Control for Lake Forest Business Parks and Warehouses",
        body: [
          "Lake Forest has a large business and light-industrial area along Bake Parkway, Lake Forest Drive and the 5 and 241 corridors, plus retail centers in Foothill Ranch Towne Centre. Warehouses with roll-up doors and loading docks let mice and rats walk in, and break rooms and food service areas draw German cockroaches and ants.",
          "We set up recurring commercial service with exterior bait stations, interior traps along walls and doors, and targeted treatments in kitchens and restrooms. Each visit is recorded so you have a clear history for audits or property managers. Visits can be scheduled around shifts and deliveries. Before the first visit we walk the building with you and mark the dock doors, gaps under roll-ups and drain lines that need attention, so the maintenance team knows what to fix and the service plan stays focused on the real entry points.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
    ],
    neighborhoods: ["El Toro (original Lake Forest)", "Lake Forest Beach & Tennis area", "Sun and Sail area", "Foothill Ranch", "Portola Hills", "Baker Ranch", "Serrano Creek area"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Lake Forest" },
      { href: "/services/wildlife-trapping", anchor: "raccoon and skunk trapping near Whiting Ranch" },
      { href: "/services/gopher-control", anchor: "gopher trapping for slopes and lawns" },
      { href: "/services/commercial-pest-control", anchor: "commercial pest control for business parks" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How long does gopher trapping take in Lake Forest?",
        answer:
          "Most yards need a few visits over one to two weeks. Homes next to open space can see new gophers move in later, so watch for fresh mounds and call us back if they reappear.",
      },
      {
        question: "Do eucalyptus trees cause rat problems?",
        answer:
          "They can. Tall eucalyptus near a roofline gives roof rats a direct route onto the house. Trimming limbs back several feet from the roof and sealing the eaves and vents makes a big difference.",
      },
      {
        question: "Do you service Foothill Ranch and Portola Hills?",
        answer:
          "Yes. We cover all of Lake Forest, including Foothill Ranch, Portola Hills, Baker Ranch and the original El Toro neighborhoods. We're based in Tustin and open 7 days a week.",
      },
      {
        question: "How much does commercial pest control cost in Lake Forest?",
        answer:
          "It depends on the size of the building, the pests involved and how often you need service. We inspect for free and give you a written quote before any work starts.",
      },
    ],
    nearby: ["mission-viejo", "irvine", "laguna-hills", "rancho-santa-margarita"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- YORBA LINDA
  {
    slug: "yorba-linda",
    metaTitle: "Yorba Linda Pest Control: Roof Rats, Gophers & Flies",
    metaDescription:
      "Yorba Linda pest control for roof rats in old groves, gophers, wildlife off the hills and flies on horse properties. Licensed and local: 714-323-8262.",
    heroSubtext:
      "Big lots, leftover citrus and avocado trees, horse properties and the Chino Hills on the edge of town give Yorba Linda pests plenty of room. We cover every acre, from the house to the barn.",
    sections: [
      {
        heading: "Roof Rats in Yorba Linda's Fruit Trees and Big Yards",
        body: [
          "Yorba Linda grew out of citrus and avocado country, and many lots still have old orange, lemon and avocado trees alongside mature pines and pepper trees. That's prime roof rat habitat. Rats nest in the dense canopy, eat fallen fruit, and travel along fences and limbs to reach attics, garage rafters and the space above patio covers.",
          "Larger homes mean longer rooflines and more places to get in, so a careful inspection matters. We trap where the rats are active, return to check and reset, and seal every gap once they're gone, including roof vents, eave openings, and gaps around solar panel conduit. Picking up fruit daily and thinning trees away from the roof helps keep new rats from moving in.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Wildlife From Chino Hills State Park and the Canyons",
        body: [
          "The eastern and northern edges of Yorba Linda back onto Chino Hills State Park and the canyons around Bryant Ranch and Kerrigan Ranch. Raccoons, skunks and opossums come down into neighborhoods for water, fruit and pet food, and some settle under decks, in crawl spaces or beneath outbuildings.",
          "We set traps where the animal is denning, remove it, and then seal the opening so the space can't be reused. For larger properties, we look at every structure: the house, the garage, sheds, pool equipment enclosures and barns. Ticks also move in with wildlife and brush, so pet owners near the trails should keep up with a vet-recommended preventive. Brush cleared for fire safety can push animals closer to homes for a while, so the weeks after a big clearing are a good time to check deck skirts and vents.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Fly and Rodent Control on Yorba Linda Horse Properties",
        body: [
          "Yorba Linda has an extensive equestrian trail network, and areas like Hidden Hills still have homes with stalls, arenas and feed rooms. Manure and wet bedding breed house flies and stable flies, while grain and hay bring mice and rats to feed storage.",
          "We focus on the sources: fly breeding spots, feed room access and rodent travel paths. For flies, that means sanitation advice, fly traps, and targeted treatments on resting surfaces, applied per label. For rodents, we use secured bait stations and traps placed where animals can't reach them. Keeping manure picked up and feed in metal bins with tight lids does much of the work.",
        ],
        bullets: [
          "Remove manure and wet bedding often, especially in warm weather",
          "Store grain in metal bins with tight lids",
          "Fix leaking waterers that keep the ground wet",
        ],
        link: { href: "/services/fly-control", label: "Fly control services" },
      },
      {
        heading: "Gophers and Ants Across Large Yorba Linda Lots",
        body: [
          "With large lawns, orchards and planted slopes, many Yorba Linda properties have room for multiple gophers working at once. Their mounds smother turf and their tunnels damage roots and drip lines. We trap in the active runs, check on return visits, and keep going until the fresh mounds stop.",
          "Argentine ants spread across big irrigated yards too, often nesting in irrigation boxes and under pavers before moving indoors in hot weather. Baits placed along trails plus a non-repellent treatment around the foundation keep them out longer than repeated spraying. Black widows also like woodpiles, block walls and outbuildings, so we cover those on perimeter visits as well. On larger lots, we map the problem areas on the first visit so later treatments go straight to the spots that matter.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control" },
      },
    ],
    neighborhoods: ["Old Town / Main Street", "East Lake Village", "Vista del Verde", "Bryant Ranch", "Kerrigan Ranch", "Hidden Hills", "Savi Ranch"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Yorba Linda" },
      { href: "/services/gopher-control", anchor: "gopher trapping for large lots" },
      { href: "/services/wildlife-trapping", anchor: "wildlife trapping near Chino Hills State Park" },
      { href: "/services/fly-control", anchor: "fly control for horse properties" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "Do fruit trees cause rat problems in Yorba Linda?",
        answer:
          "They're one of the biggest factors. Roof rats nest in dense citrus and avocado trees and feed on fallen fruit. Picking up fruit, thinning branches away from the roof and sealing entry points all help, along with trapping if rats are already inside.",
      },
      {
        question: "Can you treat barns and outbuildings, not just the house?",
        answer:
          "Yes. We inspect and treat barns, feed rooms, sheds and garages along with the home. Bait stations are secured and placed where horses, pets and wildlife can't reach them.",
      },
      {
        question: "How much does gopher control cost in Yorba Linda?",
        answer:
          "Gopher control typically runs $250 to $600 depending on the size of the yard and how many gophers are active. We'll walk the property during a free inspection and quote before any work starts.",
      },
      {
        question: "Do you serve the Bryant Ranch and Kerrigan Ranch areas?",
        answer:
          "Yes. We cover all of Yorba Linda, from Old Town to East Lake Village, Bryant Ranch and Kerrigan Ranch. Call 714-323-8262 to schedule.",
      },
    ],
    nearby: ["placentia", "brea", "anaheim", "fullerton"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- SAN CLEMENTE
  {
    slug: "san-clemente",
    metaTitle: "San Clemente Pest Control: Rodents, Ants & Crawl Spaces",
    metaDescription:
      "San Clemente pest control for Pier Bowl crawl spaces, roof rats, ants, gophers and canyon wildlife. Licensed owner-operator. Free inspection: 714-323-8262.",
    heroSubtext:
      "Spanish cottages above the pier, ridgetop tracts in Forster Ranch and Talega's newer homes all face different pests. We handle the crawl spaces, canyons and coastal damp that come with San Clemente.",
    sections: [
      {
        heading: "Crawl Spaces and Rodents in San Clemente's Older Homes",
        body: [
          "The original town around the Pier Bowl, Avenida Del Mar and North Beach still has many 1920s and 1930s Spanish-style houses, and a lot of them sit on raised wood floors with a crawl space underneath. Over decades, vent screens rust out in the salt air and foundation vents get knocked loose, opening the way for rats, mice, opossums and skunks.",
          "A musty or skunky smell coming through the floor, scratching under the house at night, or droppings near the water heater are common signs. We inspect the crawl space, trap and remove whatever is living there, and replace or reinforce the vent screens and access door. If an animal has died underneath, we remove it and deodorize the area.",
        ],
        bullets: [
          "Check crawl-space vents each year for rust and gaps",
          "Keep firewood and storage away from the foundation",
          "Fix plumbing leaks under the house, which draw rodents and insects",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion and sealing" },
      },
      {
        heading: "Earwigs, Silverfish and Ants in the Coastal Marine Layer",
        body: [
          "On the west side of the 5, the marine layer can sit over San Clemente for days. Garages, closets on exterior walls and planters against stucco stay damp, and that's where earwigs, silverfish, pill bugs and Argentine ants gather. Homes on the bluffs often have lush landscaping and irrigation running right up to the walls, adding even more moisture.",
          "Our perimeter service targets those damp zones: baits along ant trails, a non-repellent treatment around the foundation and garage door, and crack treatments in the places silverfish hide, all applied per label with re-entry guidance. Pulling mulch back from the stucco and adjusting sprinklers so they don't hit the wall goes a long way between visits.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Canyon Wildlife and Gophers in Forster Ranch, Talega and Rancho San Clemente",
        body: [
          "East of the freeway, San Clemente's newer neighborhoods climb the ridgelines between deep canyons. Forster Ranch, Rancho San Clemente and Talega all border open space and coastal sage scrub, and raccoons, skunks and opossums use the canyons as highways at night. They'll move under decks, into side yards and through gaps under gates.",
          "Gophers are a constant on planted slopes and new lawns that border the canyons. We trap gophers in their active tunnels and keep checking until the fresh mounds stop. For wildlife, we trap, remove and then seal decks and crawl-space openings so the problem doesn't repeat. Brush clearance on canyon-facing lots can stir animals up for a few weeks, so that's a good time to look at gates, deck skirts and gaps under sheds. Keeping pet food and fallen fruit picked up at night also means fewer reasons for animals to stop by.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control" },
      },
      {
        heading: "Fleas and Roof Rats Along the Coast",
        body: [
          "San Clemente's mild weather lets fleas breed nearly year-round, and dogs coming home from trails or the beach carry them in. We treat the home and yard together, then come back to catch the next hatch, while your vet handles the pet's preventive.",
          "Roof rats are common in the older parts of town where mature palms, bougainvillea and ficus hedges grow close to the houses. They reach the roof along fences and utility lines, then slip in through gaps under the tile or at the eaves. We trap, check on follow-up visits and seal the roofline once activity stops. Trimming hedges and vines a few feet back from the roof and keeping dead palm fronds trimmed removes their easiest routes.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: ["Pier Bowl", "North Beach", "Shorecliffs", "Forster Ranch", "Talega", "Rancho San Clemente", "Marblehead Coastal (Sea Summit)"],
    topServices: [
      { href: "/services/exclusion-repairs", anchor: "crawl-space sealing for older San Clemente homes" },
      { href: "/services/rodent-control", anchor: "roof rat and mouse control" },
      { href: "/services/gopher-control", anchor: "gopher trapping in Forster Ranch and Talega" },
      { href: "/services/wildlife-trapping", anchor: "skunk and raccoon trapping" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "Dead animal removal", range: "$150 – $400" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "General pest control (one-time)", range: "$150 – $250" },
    ],
    extraFaqs: [
      {
        question: "What's causing the bad smell under my San Clemente house?",
        answer:
          "It's often a skunk living in the crawl space, or an animal that died there. We inspect the crawl space, remove the animal or carcass, and seal the vents and access points so it doesn't happen again.",
      },
      {
        question: "Do salt air and the marine layer make pest problems worse?",
        answer:
          "They can. Salt air corrodes vent screens and metal flashing, which creates gaps, and the damp marine layer attracts earwigs, silverfish and ants. Checking screens and keeping moisture away from the foundation helps.",
      },
      {
        question: "Do you come out to Talega?",
        answer:
          "Yes. We serve all of San Clemente, including Talega, Forster Ranch, Rancho San Clemente, Shorecliffs and the Pier Bowl. We're open 7 days a week from 8AM to 8PM.",
      },
      {
        question: "How much does crawl-space sealing cost in San Clemente?",
        answer:
          "Exclusion repairs typically range from $300 to $1,500 or more depending on the number of vents and openings. We give you a written quote after a free inspection.",
      },
    ],
    nearby: ["dana-point", "san-juan-capistrano", "laguna-niguel", "mission-viejo"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LAGUNA NIGUEL
  {
    slug: "laguna-niguel",
    metaTitle: "Laguna Niguel Pest Control: Gophers, Rats & Bees",
    metaDescription:
      "Laguna Niguel pest control for gophers on hillside lots, roof rats in ivy slopes, bees and wildlife near Aliso Canyon. Free inspection: 714-323-8262.",
    heroSubtext:
      "Laguna Niguel's hillside HOA communities, ivy slopes and canyon edges keep gophers, roof rats and bees busy all year. We work house by house and slope by slope.",
    sections: [
      {
        heading: "Gophers on Laguna Niguel Hillside Lots",
        body: [
          "Most of Laguna Niguel is built on rolling hills, and nearly every neighborhood has planted slopes, terraced backyards or lawns that roll into open space. Pocket gophers love loose, irrigated soil. In Beacon Hill, Marina Hills and Niguel Summit we often see them working along the top edge of a slope and under the lawn right behind the house.",
          "Beyond the mounds, gopher tunnels on a hillside can channel irrigation water underground and weaken the soil. We trap in the main runs, return to check and reset, and keep at it until fresh mounds stop appearing. For gardens and raised beds, underground wire mesh is worth installing when you replant. If your HOA maintains the slope behind your fence, we can share what we find so their landscaper isn't working against the trapping.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control" },
      },
      {
        heading: "Roof Rats in Ivy Slopes and Tile Roofs",
        body: [
          "Ivy, iceplant and dense shrubs on HOA-maintained slopes give roof rats shelter right next to backyard fences. From there they climb fences, trees and bougainvillea to reach tile roofs, many of which date to the 1980s and 1990s and have aging bird stops and open tile ends. The rats move into the attic and the space above the garage.",
          "We trap in the attic and garage, check and reset until activity stops, and then seal the roofline, vents and pipe openings. For communities with shared slopes, we're glad to coordinate with your HOA or landscaper so trimming and rodent work line up. Clearing ivy back from fence lines and keeping it off the walls takes away the cover rats rely on, and stops them using the fence as a highway to the roof.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Bees in Walls, Tile Roofs and Irrigation Boxes",
        body: [
          "Laguna Niguel's warm hillsides and constant blooms support plenty of honey bees, and swarms look for protected cavities: under roof tiles, inside stucco walls, in valve and meter boxes, and inside hollow block wall caps. Africanized honey bees are established in Southern California, so an active hive close to a door or walkway isn't something to put up with.",
          "We remove the bees and the comb. Taking out the comb matters, because honey left in a wall can leak, attract pests and draw a new swarm to the same spot. After removal we close the opening and let you know if any repair work is needed.",
        ],
        bullets: [
          "Stay clear of the hive and keep pets indoors until we arrive",
          "Don't spray or seal the entrance yourself",
          "Wasp nests under eaves can usually be handled in one visit",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
      {
        heading: "Wildlife and Ticks Near Aliso and Wood Canyons and Salt Creek",
        body: [
          "Aliso and Wood Canyons Wilderness Park runs along the city's western edge, and the Salt Creek Trail and Laguna Niguel Regional Park add more green corridors. Raccoons, skunks and opossums come through yards nightly. When they move under a deck or into a crawl space, we trap and remove them, then seal the opening so the next one can't follow.",
          "Dogs that hike these trails can pick up ticks and fleas. We treat the yard's shady borders and the home if fleas are inside, and follow up to catch any new hatch. A vet-recommended preventive for your pets completes the plan. Homes right on the canyon edge benefit from a yearly look at deck skirts, crawl-space vents and gaps under gates, since a new animal will find an opening that was missed.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
    ],
    neighborhoods: ["Beacon Hill", "Kite Hill", "Marina Hills", "Niguel Summit", "Bear Brand Ranch", "Rancho Niguel", "Laguna Niguel Regional Park area"],
    topServices: [
      { href: "/services/gopher-control", anchor: "gopher trapping in Laguna Niguel" },
      { href: "/services/rodent-control", anchor: "roof rat control for hillside homes" },
      { href: "/services/bee-removal", anchor: "bee removal from walls and roofs" },
      { href: "/services/wildlife-trapping", anchor: "wildlife trapping near Aliso Canyon" },
    ],
    pricing: [
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wasp / bee removal", range: "$150 – $500" },
      { item: "Bee hive removal from walls", range: "$500 – $800+" },
      { item: "Wildlife trapping", range: "$250 – $600" },
    ],
    extraFaqs: [
      {
        question: "Can you work on HOA slopes as well as my yard?",
        answer:
          "We can treat your own property and coordinate with your HOA or landscaper for shared slopes. Many HOAs also set up recurring commercial service for common areas, and we're happy to quote that.",
      },
      {
        question: "Why do gophers keep coming back to my Laguna Niguel yard?",
        answer:
          "Homes next to open space or large slopes have a steady supply of new gophers. Trapping clears the active ones, and wire mesh under new plantings helps protect gardens. Call us back if fresh mounds appear.",
      },
      {
        question: "How much does bee removal cost in Laguna Niguel?",
        answer:
          "Simple bee or wasp removal typically runs $150 to $500. Removing a hive from inside a wall usually costs $500 to $800 or more, since the comb has to come out too. Inspections are free.",
      },
      {
        question: "Do you serve Bear Brand and the other gated neighborhoods?",
        answer:
          "Yes. We serve gated communities across Laguna Niguel. Let us know when you book so we can arrange gate access.",
      },
    ],
    nearby: ["aliso-viejo", "dana-point", "laguna-hills", "mission-viejo"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- LA HABRA
  {
    slug: "la-habra",
    metaTitle: "La Habra Pest Control: Roaches, Rats & Skunks",
    metaDescription:
      "La Habra pest control for roaches, rats and skunks under raised floors, plus fleas and ants. Licensed owner-operator. Free inspection: 714-323-8262.",
    heroSubtext:
      "La Habra's postwar homes, apartment corridors and old grove trees give roaches, rats and skunks easy access. We trap, treat and seal from downtown to Westridge.",
    sections: [
      {
        heading: "Rats and Skunks Under La Habra's Older Homes",
        body: [
          "A good part of La Habra's housing went up from the 1940s through the 1960s, and many of those homes sit on raised foundations. Over time, crawl-space vent screens rust through, access doors warp and skirting comes loose. Rats, opossums and skunks move under the floor, where it's dry, quiet and close to food.",
          "Skunk odor coming up through the floor, scratching at night or droppings in the garage are usually the first signs. We find the den, trap and remove the animal, and replace or reinforce the screens and access points. Roof rats also nest in the old citrus and avocado trees still found in many yards, so we check the attic and roofline on the same visit.",
        ],
        bullets: [
          "Pick up fallen fruit and bring pet food in at night",
          "Look for loose vent screens around the foundation",
          "Don't seal an opening until you know the animal is gone",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Cockroaches in La Habra Apartments and Older Kitchens",
        body: [
          "Apartment buildings along La Habra Boulevard, Imperial Highway and the Beach Boulevard corridor share walls and plumbing, which helps German cockroaches spread from unit to unit. Older single-family kitchens have their own weak points: gaps around under-sink pipes, worn cabinet backs and damp areas behind dishwashers. American cockroaches also come in from sewers and drains on warm nights.",
          "We treat roaches with gel baits in cabinets and appliances, insect growth regulators to stop breeding, and crack-and-crevice applications rather than broad spraying. German roach jobs include a follow-up visit to catch new hatches. For property managers, treating several units at once makes the results stick. Fixing slow drips under sinks and sealing gaps around pipes takes away the water and hiding spots roaches need.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Fleas and Ants in La Habra Yards",
        body: [
          "Fleas are a common call in La Habra, especially in homes with dogs and cats and in yards where opossums and feral cats pass through. Flea eggs collect in carpet, pet bedding and shady parts of the yard. We treat inside and outside on the same visit and come back to catch the next round of hatching fleas, while your vet takes care of the pets.",
          "Argentine ants trail across older slabs, driveway cracks and the edges of irrigated lawns, then push indoors during heat waves. We bait their trails so the workers carry it back to the nest and treat the foundation with a non-repellent product, applied per label with re-entry guidance.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
      {
        heading: "Commercial Pest Control for La Habra Shops and Restaurants",
        body: [
          "La Habra's commercial strips, including La Habra Marketplace, Westridge Plaza and the shops along Whittier and Imperial, house restaurants, markets and service businesses that need steady pest control. Shared walls, dumpster areas and frequent deliveries bring in German cockroaches, mice and flies.",
          "We set up recurring service around your hours, focusing on drains, storage, back doors and dumpster areas, and leave a service record after each visit. To the south, the Coyote Hills and Brea Creek give rodents cover along the city's edge, so exterior bait stations are often part of the plan for businesses nearby. If you're opening a new location, a walk-through before you stock the shelves lets us seal the obvious gaps first, when it's easiest.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
    ],
    neighborhoods: ["Downtown La Habra", "Westridge", "La Habra Boulevard corridor", "Imperial Highway corridor", "Beach Boulevard corridor", "La Bonita Park area"],
    topServices: [
      { href: "/services/wildlife-trapping", anchor: "skunk trapping in La Habra crawl spaces" },
      { href: "/services/cockroach-control", anchor: "cockroach control for apartments" },
      { href: "/services/rodent-control", anchor: "rat control in La Habra" },
      { href: "/services/tick-flea-treatment", anchor: "flea treatment for homes and yards" },
    ],
    pricing: [
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How do I know if a skunk is living under my La Habra house?",
        answer:
          "A strong musky odor coming through the floor, fresh digging near the foundation or a damaged vent screen are the usual signs. We inspect for free, trap and remove the skunk, and seal the openings afterward.",
      },
      {
        question: "How much does cockroach treatment cost in La Habra?",
        answer:
          "One-time cockroach control typically runs $150 to $300, including a follow-up for German cockroaches. Recurring service usually costs $80 to $150 a month.",
      },
      {
        question: "Do you treat fleas inside the house and in the yard?",
        answer:
          "Yes. We treat both on the same visit and schedule a follow-up for newly hatched fleas. Your pets should be on a vet-recommended flea preventive at the same time.",
      },
      {
        question: "Can you come to La Habra on weekends?",
        answer:
          "Yes. We're open 7 days a week from 8AM to 8PM. Call 714-323-8262 to check availability.",
      },
    ],
    nearby: ["fullerton", "brea", "buena-park", "placentia"],
    updated: "2026-10-19",
  },
];
