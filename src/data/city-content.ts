import type { CityContent } from "./local-seo-types";
import { CITY_CONTENT_2 } from "./city-content-2";
import { CITY_CONTENT_3 } from "./city-content-3";
import { CITY_CONTENT_4 } from "./city-content-4";

// Upgraded content for priority city pages. Pages without an entry render the base CITY_DATA content.
// Prices must stay consistent with /pest-control-cost.
export const CITY_CONTENT: CityContent[] = [
  // ---------------------------------------------------------------- COSTA MESA
  {
    slug: "costa-mesa",
    metaTitle: "Costa Mesa Pest Control: Mosquito & Rodent Experts",
    metaDescription:
      "Mosquito and rodent control in Costa Mesa, CA from a licensed, owner-operated company. Roof rats, ants, roaches too. Free inspection: 714-323-8262.",
    heroSubtext:
      "From the Santa Ana River on the Westside to the bluffs above the Back Bay, Costa Mesa gives mosquitoes and roof rats plenty to work with. We find where they breed and nest, then close the gaps.",
    sections: [
      {
        heading: "Mosquito Control in Costa Mesa, CA",
        body: [
          "Costa Mesa sits between two big pieces of mosquito habitat: the Santa Ana River channel along the western edge of town and Upper Newport Bay just past the Eastside. Fairview Park also has seasonal vernal pools after winter rains. But most of the bites people complain about start much closer to home, in a clogged rain gutter, a saucer under a potted plant, a tarp on a boat, or a pool that stopped circulating.",
          "Invasive Aedes mosquitoes have spread across Orange County. They breed in very small amounts of water and bite during the day, so if you're getting bitten at lunch on the patio, the source is probably on your property or a neighbor's. On a mosquito visit we walk the yard, dump or treat standing water, apply larvicide where water can't be drained, and treat the shaded foliage and fence lines where adults rest.",
        ],
        bullets: [
          "Check drains, gutters, plant saucers, buckets and tarps weekly",
          "Report neglected pools or public sources to the Orange County Mosquito and Vector Control District at ocvector.org",
          "Monthly service through the warm months keeps the population down",
        ],
        link: { href: "/areas-we-serve/costa-mesa/mosquito-control", label: "Mosquito control in Costa Mesa" },
      },
      {
        heading: "Roof Rats and Rodent Control in Costa Mesa",
        body: [
          "Roof rats are the rodent we're called about most in Costa Mesa. They nest in tall palms, bougainvillea and ivy-covered walls, which you'll find all over the Eastside and the older Westside streets. From there they travel along fence tops and utility lines and get into the attic through gaps at the roofline, vent screens or where a pipe enters the wall.",
          "Trapping by itself only goes so far. We set traps, come back to check them on a schedule, and seal the entry points so the next group of rats can't move in. Homeowners usually notice droppings in the garage, scratching above the ceiling at night, or fruit that's been chewed on the tree.",
        ],
        link: { href: "/areas-we-serve/costa-mesa/rodent-control", label: "Rodent control in Costa Mesa" },
      },
      {
        heading: "Ants, Roaches and Spiders Around Costa Mesa Homes",
        body: [
          "Argentine ants show up across Costa Mesa all year and come indoors in force during hot, dry stretches. In Mesa Verde and College Park we often trace their trails back to irrigated planter beds next to the slab. Store-bought sprays usually just split the colony into new trails. Slow baits the workers carry home, combined with a non-repellent band around the foundation, give much more lasting results.",
          "Older Westside homes with raised foundations and crawl spaces add American cockroaches and black widows to the list. Damp crawl spaces closer to the coast also attract earwigs and silverfish. A quarterly or monthly perimeter service handles all of them, and you can call us between visits if anything comes back.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Fleas and Crawl-Space Problems in Costa Mesa",
        body: [
          "Costa Mesa's mild weather means fleas never really get a winter break. If you have a dog or cat, or if raccoons and opossums cross your yard at night, flea eggs end up in carpets, pet beds and shady patches of lawn. We treat inside and outside on the same visit and time a follow-up so newly hatched fleas get caught too. Pets should get a vet-recommended preventive at the same time.",
          "Crawl spaces deserve a look of their own. An animal that has bedded down under the floor can leave fleas, odors and sometimes a carcass. We check the crawl space, trap and remove any wildlife living there, and seal the vent screens so nothing else moves in.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: ["Eastside", "Westside", "Mesa Verde", "College Park", "Mesa del Mar", "Halecrest", "South Coast Metro"],
    topServices: [
      { href: "/areas-we-serve/costa-mesa/mosquito-control", anchor: "mosquito control in Costa Mesa" },
      { href: "/areas-we-serve/costa-mesa/rodent-control", anchor: "Costa Mesa rodent and roof rat control" },
      { href: "/services/exclusion-repairs", anchor: "sealing attic and roofline entry points" },
      { href: "/services/ant-control", anchor: "Argentine ant treatment" },
    ],
    pricing: [
      { item: "Mosquito treatment (one-time)", range: "$150 – $300" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo", note: "Most useful spring through fall" },
      { item: "Rodent control (one-time)", range: "$200 – $500", note: "Depends on activity and number of visits" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "General pest control (one-time)", range: "$150 – $250" },
    ],
    extraFaqs: [
      {
        question: "How much does mosquito control cost in Costa Mesa?",
        answer:
          "A one-time mosquito treatment typically runs $150 to $300 depending on yard size and how many breeding sources we find. Monthly service is typically $100 to $175. The inspection is free, and we quote before doing any work.",
      },
      {
        question: "When is mosquito season in Costa Mesa?",
        answer:
          "Activity usually picks up in late spring and runs into fall, and in warm years it can last longer. Daytime-biting invasive Aedes mosquitoes tend to peak in late summer, so that's when consistent treatment matters most.",
      },
      {
        question: "How long does it take to get rid of roof rats in a Costa Mesa attic?",
        answer:
          "Most attic jobs take a few visits over one to three weeks. We set traps, check and reset them on return visits, and seal entry points once activity drops. How long it takes depends on how many rats there are and how many gaps the roofline has.",
      },
      {
        question: "What's the difference between OC Vector and a private mosquito service?",
        answer:
          "The Orange County Mosquito and Vector Control District is a public agency. It monitors mosquitoes countywide, tracks invasive species, and inspects reported breeding sources, and you can request service at ocvector.org. A private service like ours treats your own yard on a regular schedule. Many Costa Mesa homeowners use both.",
      },
    ],
    nearby: ["newport-beach", "santa-ana", "irvine", "huntington-beach"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- GARDEN GROVE
  {
    slug: "garden-grove",
    metaTitle: "Garden Grove Pest Control & Mosquito Control",
    metaDescription:
      "Garden Grove pest control for mosquitoes, roaches, rats and ants in older homes and local restaurants. Licensed, owner-operated. Call 714-323-8262.",
    heroSubtext:
      "Garden Grove's mid-century homes and busy restaurant corridors keep roaches and rodents active all year, and daytime-biting mosquitoes have moved in too. We treat homes and kitchens across the city.",
    sections: [
      {
        heading: "Mosquito Control in Garden Grove, CA",
        body: [
          "Invasive Aedes mosquitoes were among the first confirmed in Orange County, and Garden Grove was one of the early cities where the vector control district found them in 2015. These small black-and-white mosquitoes bite during the day and lay eggs in containers as small as a bottle cap. Garden Grove has plenty of those: backyard gardens, potted plants, buckets by the side yard, and flat lots where rainwater sits after a storm.",
          "Our mosquito service starts with a walk of the whole property to find water. We empty what we can, treat what we can't with larvicide, and spray the dense, shady plants where adults rest during the day. Many Garden Grove customers keep monthly service from spring through fall because new mosquitoes keep arriving from neighboring yards.",
        ],
        bullets: [
          "Turn over pots, buckets and toys after watering or rain",
          "Scrub the inside of birdbaths and pet bowls, since Aedes eggs stick to the walls",
          "You can report neglected pools to OC Vector at ocvector.org",
        ],
        link: { href: "/areas-we-serve/garden-grove/mosquito-control", label: "Mosquito control in Garden Grove" },
      },
      {
        heading: "Roaches and Rats in Older Garden Grove Homes",
        body: [
          "Most Garden Grove houses went up in the 1950s and 1960s. That age brings slab cracks, gaps where plumbing comes through the wall, detached garages and big backyard fruit trees, all of which work in favor of rodents and American cockroaches. Roof rats get into attics from avocado, citrus and loquat trees, while Norway rats tend to stay low and burrow under sheds and along block walls.",
          "We trap and remove the rats, then seal the gaps that let them in. For roaches we use gel baits and crack-and-crevice treatments instead of spraying the whole house. If the roaches are German cockroaches, we schedule a follow-up visit to catch the next hatch.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Restaurant Pest Control in Little Saigon and Along Garden Grove Blvd",
        body: [
          "Garden Grove has one of the county's busiest food scenes, from the Little Saigon restaurants around Brookhurst and Bolsa to the strip centers along Garden Grove Boulevard and the Harbor Boulevard hotels. Commercial kitchens fight German cockroaches, drain flies and mice.",
          "We set up recurring service on a schedule that fits the restaurant's hours. We focus on floor drains, equipment bases, dry storage and the back door where deliveries come in, since roaches often arrive in cardboard boxes. Bakeries and markets also get checked for pantry beetles and moths in bulk goods. We keep service records you can show when the health inspector comes by.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control for kitchens" },
      },
      {
        heading: "Ants and Spiders Around Garden Grove Yards",
        body: [
          "Garden Grove is flat and full of irrigated lawns, which is ideal for Argentine ants. Their trails run along sidewalks and block walls and slip under door thresholds during every heat wave. Black widows set up in the same block walls, in meter boxes and among stored items in detached garages. Homes near Garden Grove Park and other big green spaces also see more crickets, which bring spiders along behind them.",
          "Quarterly perimeter service is usually enough to keep both outside. We bait ant trails at the source instead of only spraying the ones you can see, sweep webs from eaves and garage corners, and treat the gaps where spiders like to hide. If ants come back between visits, call us and we'll come back out.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
    ],
    neighborhoods: ["West Garden Grove", "Historic Main Street", "Little Saigon (Brookhurst & Bolsa)", "Buena Clinton", "Grove District (Harbor Blvd)", "Garden Grove Park area"],
    topServices: [
      { href: "/areas-we-serve/garden-grove/mosquito-control", anchor: "mosquito control in Garden Grove" },
      { href: "/services/cockroach-control", anchor: "cockroach control for homes and restaurants" },
      { href: "/services/rodent-control", anchor: "rat and mouse removal" },
      { href: "/services/exclusion-repairs", anchor: "rodent-proofing older homes" },
    ],
    pricing: [
      { item: "Mosquito treatment (one-time)", range: "$150 – $300" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo" },
      { item: "Cockroach control (one-time)", range: "$150 – $300", note: "German roaches usually need a follow-up visit" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
    ],
    extraFaqs: [
      {
        question: "Why are mosquitoes biting during the day in Garden Grove?",
        answer:
          "Daytime biting is a sign of invasive Aedes mosquitoes, which have been in Garden Grove since at least 2015. They breed in small containers around homes, so emptying standing water every week and treating resting areas works better than spraying only at dusk.",
      },
      {
        question: "How much does pest control cost for a Garden Grove restaurant?",
        answer:
          "It depends on the size of the kitchen and how often you need service. We'll inspect the kitchen for free and give you a written quote before any work starts. Most restaurants choose recurring service rather than one-time treatments.",
      },
      {
        question: "How soon can you come out to Garden Grove?",
        answer:
          "We're based in nearby Tustin and open 7 days a week, 8AM to 8PM. Same-day visits are often available in Garden Grove. Call 714-323-8262 to check today's schedule.",
      },
      {
        question: "Do rats in my Garden Grove fruit trees mean they're in the attic too?",
        answer:
          "Not always, but it's worth checking. Roof rats feeding on fruit at night often nest in the attic or garage nearby. Gnawed fruit, droppings along the garage walls or scratching overhead are good reasons to schedule a free inspection.",
      },
    ],
    nearby: ["westminster", "stanton", "santa-ana", "anaheim"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- ORANGE
  {
    slug: "orange",
    metaTitle: "Orange, CA Pest Control: Mosquitoes, Rats & Spiders",
    metaDescription:
      "Mosquito control in Orange, CA near Santiago Creek and the foothills, plus roof rats and spiders in Old Towne homes. Free inspection: 714-323-8262.",
    heroSubtext:
      "Orange runs from the century-old bungalows around the Plaza out to canyon properties in Orange Park Acres and Santiago Hills. We handle the mosquitoes, rats and spiders that come with both.",
    sections: [
      {
        heading: "Mosquito Control in Orange, CA",
        body: [
          "Santiago Creek runs across the city of Orange, from the foothills past Santiago Oaks Regional Park down through the neighborhoods north of Old Towne. Slow water, ponds and wet spots along the creek can breed mosquitoes. Out in Orange Park Acres and the canyon properties, horse troughs, ponds, fountains and big irrigated yards add even more.",
          "But in many Orange backyards the mosquitoes are local. Invasive Aedes mosquitoes, the daytime biters now found across Orange County, hatch from plant saucers, clogged gutters and water caught in tarps. We find and treat those sources, apply larvicide where water has to stay (like troughs and decorative ponds), and treat the shady vegetation where adults rest. On larger lots we focus on the areas you actually use: patios, pool decks and paths.",
        ],
        bullets: [
          "Change trough and birdbath water at least weekly",
          "Keep pools and spas running and chlorinated",
          "Report standing water on public land to OC Vector at ocvector.org",
        ],
        link: { href: "/areas-we-serve/orange/mosquito-control", label: "Mosquito control in Orange" },
      },
      {
        heading: "Roof Rats in Old Towne Orange Homes",
        body: [
          "Old Towne's historic homes are beautiful, but their age gives rodents a lot of ways in. Raised foundations have crawl-space vents with old or torn screens. Original eaves have gaps, and many lots have big pepper trees, citrus and ivy that roof rats use to climb up and travel. Once they're in the attic, they chew wiring and pack the insulation with droppings.",
          "We trap the rats out, then seal crawl-space vents, rooflines and pipe gaps using materials that fit with older construction, such as hardware cloth behind decorative vents or metal flashing where a gap is visible. On homes in the historic district, we keep the repairs discreet and suited to the house. If your attic insulation is badly soiled, we can also do a cleanout and sanitize the space.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Spiders and Wildlife Near the Orange Foothills",
        body: [
          "Black widows like the block walls, woodpiles and garages found all over Orange. Brown widows, with their spiky round egg sacs, are common under patio furniture and pool equipment. Older homes near the Plaza also have cellar spiders and house spiders gathering in basements and crawl spaces. We treat spiders around the outside of the house and in the garage, and clear webs and egg sacs while we're there.",
          "Homes near the hills in Serrano Heights, Santiago Hills and Orange Park Acres also see more raccoons, opossums and skunks digging under decks and sheds. For wildlife, we trap and remove the animal, then close up the opening so another one doesn't move in.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
      {
        heading: "Wasps, Bees and Fleas on Larger Orange Properties",
        body: [
          "Big lots in Orange Park Acres and the eastern foothills have barns, sheds, play structures and eaves where paper wasps nest all summer. Yellowjackets build in the ground or in old rodent burrows. Honey bee swarms pass through in spring and sometimes settle into a wall or an irrigation box. We remove wasp nests and established bee colonies, comb included, and seal the cavity so a new colony doesn't move in next year.",
          "Properties with horses, dogs or visiting wildlife also deal with fleas and ticks in shady areas and around kennels. We treat those spots along with any indoor areas where pets sleep. Pair that with a vet-recommended preventive so the problem stays solved.",
        ],
        link: { href: "/services/wasp-control", label: "Wasp control services" },
      },
    ],
    neighborhoods: ["Old Towne Orange", "El Modena", "Olive", "Orange Park Acres", "Santiago Hills", "Serrano Heights", "Chapman University area"],
    topServices: [
      { href: "/areas-we-serve/orange/mosquito-control", anchor: "mosquito control in Orange, CA" },
      { href: "/services/rodent-control", anchor: "roof rat removal in Old Towne" },
      { href: "/services/spider-control", anchor: "black widow and spider control" },
      { href: "/services/wildlife-trapping", anchor: "foothill wildlife trapping" },
    ],
    pricing: [
      { item: "Mosquito treatment (one-time)", range: "$150 – $300", note: "Large or acreage lots trend higher" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Spider control (one-time)", range: "$150 – $250" },
      { item: "Wildlife trapping", range: "$250 – $600" },
    ],
    extraFaqs: [
      {
        question: "How much is mosquito control for a large lot in Orange Park Acres?",
        answer:
          "A one-time treatment is typically $150 to $300, and monthly service is typically $100 to $175. Bigger properties with troughs, ponds or a lot of vegetation are usually at the higher end of those ranges. We'll walk the property for free and quote before starting.",
      },
      {
        question: "Do you do termite treatment for historic homes in Orange?",
        answer:
          "We don't offer termite treatment or termite inspections. We focus on rodents, insects and wildlife. If you think you have termites, call us and we'll point you toward a termite inspection, and we can still take care of the rest of your pest issues.",
      },
      {
        question: "How long does mosquito treatment last in Orange?",
        answer:
          "A treatment usually reduces mosquitoes for a few weeks. New ones keep coming from creeks and neighboring yards, so monthly service through the warm months works better than a single visit.",
      },
      {
        question: "Can you get to my home in Orange the same day?",
        answer:
          "Often, yes. Orange is right next to our Tustin base, and we're open 7 days a week from 8AM to 8PM. Call 714-323-8262 and we'll give you the earliest time we can be there.",
      },
    ],
    nearby: ["tustin", "santa-ana", "anaheim", "villa-park"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- SANTA ANA
  {
    slug: "santa-ana",
    metaTitle: "Santa Ana Pest Control: Roaches, Rats & Bed Bugs",
    metaDescription:
      "Santa Ana pest control for cockroaches, rats and bed bugs in homes and apartments. Licensed, owner-operated, se habla español. Call 714-323-8262.",
    heroSubtext:
      "Santa Ana has historic houses, packed apartment blocks and busy commercial streets. Roaches, rodents and bed bugs spread easily between them. We treat the source, not just what you can see.",
    sections: [
      {
        heading: "Cockroach Control in Santa Ana Homes and Apartments",
        body: [
          "German cockroaches cause most of the roach problems in Santa Ana, and they move between units through shared plumbing walls. If you spray one apartment, the roaches simply move next door and come back later. We use gel baits, insect growth regulators and targeted crack-and-crevice treatment behind appliances, under sinks and inside cabinet hinges. Then we return about two weeks later to catch the next generation.",
          "In older single-family homes around Delhi, Logan and Willard, the larger American cockroach usually comes up from sewer lines and gaps under the house. For those, we seal and treat the outside of the home, especially around cleanouts and drains. Keeping food sealed, fixing drips under the sink and taking trash out every night all make the treatment work faster.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Bed Bug Treatment in Santa Ana",
        body: [
          "Bed bugs travel in luggage, used furniture and laundry, and in apartment buildings they can spread to the unit next door. The first signs are usually itchy bites in a line, small dark spots on mattress seams, or shed skins around the headboard. We inspect the bedroom and nearby furniture, treat every place they're hiding, and come back for follow-up visits until there's no more activity.",
          "Treatment typically costs $500 to $1,500 depending on how many rooms are affected. Before we arrive, we'll give you a short prep list so the treatment reaches every hiding spot.",
        ],
        bullets: [
          "Don't move to the couch, because the bugs will follow you",
          "Bag bedding and wash it on hot",
          "Tell your landlord early so nearby units can be checked",
        ],
        link: { href: "/services/bed-bug-treatment", label: "Bed bug treatment" },
      },
      {
        heading: "Rats Along the Santa Ana River and Downtown",
        body: [
          "The Santa Ana River corridor on the city's west side and the parks along Santiago Creek give rats places to nest and water to drink. Downtown restaurants and markets give them food. Roof rats climb into attics from palms and fruit trees, and Norway rats dig under slabs and sheds. We trap, seal entry points and come back to check, so the problem doesn't simply move to the garage. Pet food left out overnight, fallen fruit and open trash bins keep rats coming back, so we'll point out what's drawing them to your property. In duplexes and fourplexes, sealing the whole building at once works far better than patching one unit.",
          "Spanish-speaking service is available. Llámenos al 714-323-8262.",
        ],
        link: { href: "/es", label: "Control de plagas en español" },
      },
      {
        heading: "Commercial Pest Control in Downtown Santa Ana",
        body: [
          "Fourth Street, the Santa Ana Civic Center and the shopping centers along Bristol and Main Street are full of restaurants, panaderías, markets and small offices. Each one has its own pest pressure. Kitchens deal with German cockroaches and drain flies. Markets and bakeries can get pantry beetles and moths in flour, rice and dried chiles. Older storefronts with shared walls let mice travel from one business to the next.",
          "We set up recurring service that fits your hours, focus on drains, storage rooms and delivery doors, and leave a written record after each visit. If the problem is coming from a neighboring business, we'll tell you and suggest how to coordinate so your treatment isn't undone next door.",
        ],
        link: { href: "/services/fly-control", label: "Fly and drain fly control" },
      },
    ],
    neighborhoods: ["Downtown Santa Ana", "French Park", "Floral Park", "Washington Square", "Wilshire Square", "Delhi", "Logan", "Willard"],
    topServices: [
      { href: "/services/cockroach-control", anchor: "German cockroach control in Santa Ana" },
      { href: "/services/bed-bug-treatment", anchor: "apartment bed bug treatment" },
      { href: "/services/rodent-control", anchor: "rat removal near the Santa Ana River" },
      { href: "/es", anchor: "control de plagas en español" },
    ],
    pricing: [
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Bed bug treatment", range: "$500 – $1,500", note: "Based on rooms treated and follow-ups" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "How long does it take to get rid of German cockroaches in a Santa Ana apartment?",
        answer:
          "Most apartments see a big drop within two weeks and are under control after two or three visits. If roaches are coming from the units next door, treating those units at the same time makes the results last.",
      },
      {
        question: "Who pays for bed bug treatment in a Santa Ana rental?",
        answer:
          "That depends on your lease and California law, so check with your landlord or property manager. Either way, report it right away. We can work directly with property managers to inspect and treat the affected units.",
      },
      {
        question: "¿Ofrecen servicio en español en Santa Ana?",
        answer:
          "Sí. Atendemos a clientes en español en Santa Ana y todo el condado de Orange. Llame al 714-323-8262 para una inspección gratis.",
      },
      {
        question: "How much does rat control cost in Santa Ana?",
        answer:
          "Rodent control typically runs $200 to $500, which covers trapping and follow-up visits. If the house needs entry points sealed, exclusion work typically adds $300 to $1,500 or more. The inspection and quote are free.",
      },
    ],
    nearby: ["tustin", "orange", "garden-grove", "costa-mesa"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- ANAHEIM
  {
    slug: "anaheim",
    metaTitle: "Anaheim Bee Removal & Pest Control",
    metaDescription:
      "Bee and wasp removal in Anaheim, CA, including hives in walls, plus rodent, roach and wildlife control from Anaheim Hills to West Anaheim. 714-323-8262.",
    heroSubtext:
      "Bee swarms in eaves, rats in West Anaheim attics and raccoons in the Hills: Anaheim covers a lot of ground. We handle all of it, starting with a free inspection.",
    sections: [
      {
        heading: "Bee Removal in Anaheim",
        body: [
          "Honey bee colonies split and swarm mostly in spring, with a smaller wave in fall. A swarm hanging from a tree branch usually moves on within a day or two. The trouble starts when the bees move into a wall cavity, a soffit, an irrigation box or the space under a roof tile. Then they start building comb, and the colony grows week by week.",
          "Africanized honey bees have been established in Orange County since 1999. You can't tell them apart from regular honey bees by looking, but they defend their hive much more aggressively. Please don't spray, plug or poke at a hive yourself. When a colony is inside a wall, we open the space, remove the bees and all the comb, and seal the gap. Comb left behind melts, stains drywall and draws ants and rodents. When it's safe and practical, we work with local beekeepers on live removal.",
        ],
        link: { href: "/areas-we-serve/anaheim/bee-removal", label: "Bee removal in Anaheim" },
      },
      {
        heading: "Wasp and Yellowjacket Nests Around Anaheim Homes",
        body: [
          "Paper wasps build open, umbrella-shaped nests under eaves, patio covers, block-wall caps and pool-equipment lids. They're a constant across Anaheim from spring into fall. Yellowjackets are a bigger concern. By late summer their colonies in the ground, in hollow block walls or in old rodent burrows can be large, and they defend them aggressively, especially when a mower or string trimmer gets close.",
          "We treat and remove the nest and look for others nearby, because there's often more than one. Yellowjackets also scavenge around outdoor dining, trash cans and pet food, so we'll point out what's drawing them in. If you have a nest near a door, a play area or a pool, give it priority.",
        ],
        link: { href: "/services/wasp-control", label: "Wasp control services" },
      },
      {
        heading: "Wildlife Trapping in Anaheim Hills",
        body: [
          "Anaheim Hills is built right up against the Santa Ana Canyon, Weir Canyon and the open hills to the east. Raccoons, opossums and skunks come down the slopes at night looking for pet food, fallen fruit and koi ponds. Then they look for shelter under decks, in crawl spaces and under sheds. A strong smell, torn vent screens or fresh digging along the foundation are the usual signs.",
          "California law doesn't allow trapped wildlife to be released somewhere else, so we trap and remove the animal and then do the part that really matters: closing the opening. That usually means a buried mesh barrier along the deck or shed and new screens on the crawl-space vents.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Rodents and Roaches in West Anaheim",
        body: [
          "West Anaheim is mostly mid-century tract homes and older apartment complexes along Brookhurst, Magnolia and Lincoln. Roof rats get into those attics through worn eave vents, and mice slip in under garage doors. In apartments, German cockroaches spread through shared plumbing walls. These jobs need trapping, baiting and sealing entry points rather than a quick spray, and we schedule follow-up visits until there's no more activity.",
          "Older West Anaheim homes also have more black widows in detached garages and along block walls, and Argentine ants trail in from irrigated parkways all summer. Once the rodents and roaches are under control, a quarterly perimeter service covers the rest. For apartment owners, we can coordinate treatment of neighboring units so roaches don't simply move next door.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
    ],
    neighborhoods: ["Anaheim Hills", "West Anaheim", "Colony Historic District", "Downtown Anaheim", "Platinum Triangle", "Anaheim Resort", "Anaheim Canyon"],
    topServices: [
      { href: "/areas-we-serve/anaheim/bee-removal", anchor: "bee removal in Anaheim" },
      { href: "/services/wasp-control", anchor: "wasp and yellowjacket nest removal" },
      { href: "/services/wildlife-trapping", anchor: "Anaheim Hills wildlife trapping" },
      { href: "/services/rodent-control", anchor: "West Anaheim rodent control" },
    ],
    pricing: [
      { item: "Bee or wasp removal", range: "$150 – $500", note: "Comb inside walls or roofs can run higher" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How much does bee removal cost in Anaheim?",
        answer:
          "Most bee and wasp removals typically fall between $150 and $500. A colony that has built comb inside a wall or under roof tiles takes more labor to open up, remove and seal, so it can cost more. We'll give you a price after a free look.",
      },
      {
        question: "Will a bee swarm on my tree in Anaheim leave on its own?",
        answer:
          "Often, yes. A resting swarm is usually scouting for a new home and may leave within a day or two. Keep people and pets away from it. If the bees start going in and out of a wall, vent or box, they've moved in, and that's the time to call us.",
      },
      {
        question: "Are Africanized bees in Anaheim?",
        answer:
          "Africanized honey bees have been in Orange County since 1999, so any wild colony in Anaheim could be Africanized. You can't tell by looking, so treat every established hive as defensive and keep your distance.",
      },
      {
        question: "What happens to the honeycomb after bees are removed from a wall?",
        answer:
          "It has to come out. Comb left in a wall can melt in summer heat, leak honey through the drywall, and draw ants, roaches and rodents. We open the space, remove the comb, clean up the residue and seal the entry so another swarm doesn't pick the same spot.",
      },
    ],
    nearby: ["fullerton", "orange", "buena-park", "garden-grove"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- FULLERTON
  {
    slug: "fullerton",
    metaTitle: "Pest Control in Fullerton, CA: Roof Rats & More",
    metaDescription:
      "Fullerton pest control for roof rats in Sunny Hills, Raymond Hills and older neighborhoods, plus ants and spiders. Typical prices inside. 714-323-8262.",
    heroSubtext:
      "Fullerton's old orchard trees and hillside lots make it a favorite for roof rats. We trap them out, seal the attic, and give you a clear price before we start.",
    sections: [
      {
        heading: "Roof Rat Control in Fullerton's Hillside Neighborhoods",
        body: [
          "Sunny Hills, Raymond Hills and Golden Hill have big lots, mature trees and slopes covered in ivy and shrubs. Many yards still have avocado and citrus trees left over from Fullerton's orchard days. Roof rats live in that canopy, eat the fruit and climb onto roofs from branches hanging over the house. Raymond Hills also backs up to open space near the Coyote Hills area, which brings in even more wildlife.",
          "Signs to watch for include scratching or running in the ceiling at night, half-eaten oranges or avocados, droppings along garage shelves, and greasy rub marks around vents. We trap and remove the rats, then seal roof vents, eaves and pipe gaps. We also usually recommend trimming branches back from the roofline.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Pests in Downtown Fullerton and Older Homes",
        body: [
          "Homes from the 1920s to 1950s around downtown and Ford Park have raised foundations, crawl spaces and old vent screens that let in rats, cockroaches and black widows. Over the decades, cable, plumbing and AC work leave holes in the stucco and subfloor that nobody ever patched. Any of them can let in a mouse.",
          "Rentals near Cal State Fullerton and Fullerton College turn over every year, and new tenants sometimes bring roaches and bed bugs with them in used furniture. Landlords can save themselves trouble by having units checked between tenants. For any older Fullerton home, a crawl-space inspection is a good starting point. We look for torn screens, droppings, nesting and moisture, then tell you exactly what needs sealing.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion repairs" },
      },
      {
        heading: "Ants, Spiders and Wildlife on Fullerton Hillsides",
        body: [
          "Sloped yards in Sunny Hills and Raymond Hills drain toward the house. After the sprinklers run, Argentine ants build up along retaining walls and come in through slab cracks and window frames. On those same hillsides, black widows hide in ivy, woodpiles and the gaps in block walls. Brush and open space near Hillcrest Park and the Coyote Hills draw raccoons, opossums and skunks, which den under decks and leave fleas behind.",
          "A quarterly perimeter treatment keeps ants and spiders under control. When an animal has moved under the house, we trap and remove it, then screen the opening so another one can't take its place.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
      {
        heading: "What Pest Control Costs in Fullerton",
        body: [
          "Prices depend on the pest, the size of the property and how established the problem is. A hillside home with several entry points and a busy attic costs more than a small ant job in a condo. Here's what Fullerton homeowners typically pay. The inspection is always free, and you get a quote before any work begins.",
          "Rodent jobs usually include a few return visits to check traps, and the price covers those visits. Exclusion is quoted separately because it depends entirely on how many gaps the house has. Recurring plans cost less per visit than calling for one-time treatments, which matters in Fullerton, where ants and spiders stay active most of the year.",
        ],
        bullets: [
          "Rodent control: typically $200 – $500 one-time",
          "Exclusion repairs: typically $300 – $1,500+",
          "Ant or spider treatment: typically $150 – $250 one-time",
          "Recurring general pest service: typically $80 – $150/mo",
        ],
        link: { href: "/pest-control-cost", label: "Full Orange County price guide" },
      },
    ],
    neighborhoods: ["Sunny Hills", "Raymond Hills", "Golden Hill", "Downtown Fullerton", "Ford Park area", "Cal State Fullerton area"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Fullerton" },
      { href: "/services/exclusion-repairs", anchor: "attic and crawl-space exclusion" },
      { href: "/services/attic-cleanout", anchor: "attic cleanout after rats" },
      { href: "/services/ant-control", anchor: "ant control" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
      { item: "Attic cleanout", range: "$500 – $3,000+", note: "Depends on attic size and contamination" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "How much does pest control cost in Fullerton?",
        answer:
          "A one-time general treatment is typically $150 to $250, and recurring service is typically $80 to $150 a month. Rodent jobs typically run $200 to $500, plus exclusion work if the attic needs sealing. We give a free quote after inspecting.",
      },
      {
        question: "Should I remove my fruit trees to stop roof rats?",
        answer:
          "Usually you don't have to. Pick fruit when it ripens, clean up fallen fruit, and trim branches so they're several feet from the roof. Sealing entry points matters more than removing trees.",
      },
      {
        question: "Do you need to come back after setting rat traps?",
        answer:
          "Yes. We schedule return visits to check and reset traps and remove any rats we catch. Once activity stops, we finish sealing the entry points. That's what keeps the problem from coming back.",
      },
      {
        question: "Do I need an attic cleanout after a rat problem in Fullerton?",
        answer:
          "Not always. If the droppings are limited to a few spots, we can usually clean them up while we're doing the rodent work. If the insulation is heavily soiled or matted, a full cleanout typically costs $500 to $3,000 or more, depending on the attic's size. We'll tell you honestly which one you need.",
      },
    ],
    nearby: ["buena-park", "anaheim", "brea", "placentia"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- IRVINE
  {
    slug: "irvine",
    metaTitle: "Irvine Pest Control: Ants, Roof Rats & Spiders",
    metaDescription:
      "Irvine pest control for Argentine ants, roof rats and spiders across Woodbridge, Northwood, Turtle Rock and every village. Licensed. 714-323-8262.",
    heroSubtext:
      "Irvine's greenbelts, lakes and mature landscaping are great for families and for pests too. We work around HOA rules and village layouts to keep ants, rats and spiders outside.",
    sections: [
      {
        heading: "Argentine Ant Control in Irvine",
        body: [
          "Argentine ants are the most common pest call in Irvine. Every village has HOA landscaping that gets watered year-round, and that keeps their colonies large. When summer heat dries the soil, or a winter rain floods their nests, they head indoors to kitchens and bathrooms. Ant sprays from the store tend to split the colony and make the problem worse.",
          "We use slow-acting baits the ants carry back to the nest, plus a non-repellent treatment around the foundation. We pay extra attention to spots where irrigation reaches the slab. In attached homes and townhomes in places like Woodbridge, Westpark and University Park, we treat the full perimeter of your unit and can coordinate with your neighbors or the HOA when the colony is shared.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Roof Rats in Irvine's Mature Neighborhoods",
        body: [
          "The older villages, including Northwood, Woodbridge, Turtle Rock and College Park, now have decades of tree growth, ivy-covered slopes and fruit trees. That's ideal roof rat habitat. Rats travel along greenbelt trees and fence tops and get into attics through roof vents and gaps at the eaves. In newer areas like Portola Springs and the Great Park neighborhoods, the landscaping is still young, but rats still find their way into garages and the gaps around AC lines.",
          "HOA rules often control what you can change on the outside of the house, so we use exclusion materials that blend in. We can also give you notes to share with your association if needed. When the rats are coming from common-area trees or slopes, it helps to let the HOA know so the landscapers can trim them back.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Spiders and Mosquitoes Near Irvine Greenbelts and Lakes",
        body: [
          "Black widows hide in garages, utility boxes and the block walls between homes. Brown widows build their spiky egg sacs under patio chairs and in kids' play equipment. Long-legged cellar spiders gather in the corners around entry lights, where insects collect at night. A quarterly perimeter service covers spiders and other crawling pests, and we clear webs from eaves and garage corners on each visit.",
          "Homes near the Woodbridge lakes, Mason Regional Park or the San Joaquin Marsh may also notice more mosquitoes in the evenings. Most backyard bites, though, come from small sources close to the house: a clogged patio drain, plant saucers or a pool cover holding rainwater. If mosquitoes are a problem, we can add yard treatment from spring through fall.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
      {
        heading: "Commercial and Multi-Unit Pest Control in Irvine",
        body: [
          "Irvine has a large share of apartment communities, condos and office parks, from the Spectrum and the business district near the airport to the apartment villages around UC Irvine. In those buildings, pests move through shared walls and common areas. Ants travel along utility chases, roaches show up in break rooms and trash enclosures, and rodents get into parking structures.",
          "We work with property managers on schedules that cover common areas and individual units together. We arrange access ahead of time so residents and tenants aren't disrupted, and we leave clear notes on what was treated and what needs fixing, such as door sweeps, trash-enclosure doors or irrigation that's soaking the foundation.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
    ],
    neighborhoods: ["Woodbridge", "Northwood", "Turtle Rock", "University Park", "Westpark", "Quail Hill", "Portola Springs", "Great Park Neighborhoods", "Orchard Hills", "Stonegate"],
    topServices: [
      { href: "/services/ant-control", anchor: "Argentine ant control in Irvine" },
      { href: "/services/rodent-control", anchor: "roof rat removal" },
      { href: "/services/spider-control", anchor: "black widow and spider control" },
      { href: "/services/exclusion-repairs", anchor: "HOA-friendly rodent exclusion" },
    ],
    pricing: [
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Spider control (one-time)", range: "$150 – $250" },
    ],
    extraFaqs: [
      {
        question: "How much does ant control cost in Irvine?",
        answer:
          "A one-time ant treatment is typically $150 to $250, and recurring service is typically $75 to $125 a month. Townhomes and condos are often at the lower end. Larger detached homes with a lot of irrigated landscaping may cost more.",
      },
      {
        question: "Why do ants come inside after it rains in Irvine?",
        answer:
          "Heavy rain floods Argentine ant nests in the soil, so the colony moves somewhere dry, which is often your kitchen or bathroom. Heat waves send them in looking for water too. A perimeter treatment before those swings helps.",
      },
      {
        question: "Do you do termite work in Irvine?",
        answer:
          "No, we don't offer termite treatment or termite inspections. We handle ants, rodents, spiders, mosquitoes, wildlife and other general pests across Irvine's villages.",
      },
      {
        question: "How often should an Irvine home get pest control?",
        answer:
          "For most Irvine homes, quarterly service is enough for ants and spiders. Homes backing onto greenbelts, lakes or slopes covered in ivy sometimes do better with more frequent visits during the warm months. We'll recommend a schedule after a free inspection.",
      },
    ],
    nearby: ["tustin", "costa-mesa", "newport-beach", "lake-forest"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- NEWPORT BEACH
  {
    slug: "newport-beach",
    metaTitle: "Newport Beach Pest Control: Rats, Ants & Mosquitoes",
    metaDescription:
      "Newport Beach pest control for roof rats in harbor palms, Back Bay mosquitoes and ants in waterfront homes. Licensed, owner-operated. 714-323-8262.",
    heroSubtext:
      "Harbor palms, tight lots on the islands and the marsh at the Back Bay all bring pests close to Newport Beach homes. We handle them discreetly and keep them out.",
    sections: [
      {
        heading: "Roof Rats in Newport Beach Palms and Waterfront Homes",
        body: [
          "Roof rats nest in the dead fronds of Mexican fan palms and queen palms, and Newport Beach has a lot of both, especially on the Balboa Peninsula, Lido Isle and Balboa Island. On those islands, homes sit just a few feet apart, so a rat can cross from one roof to the next without ever touching the ground. Docks, boat storage and harbor-side restaurants add food and shelter. In the hillside neighborhoods of Corona del Mar and Newport Heights, ivy and fruit trees fill the same role.",
          "We trap and remove the rats from attics and garages, seal the roofline and vents, and suggest palm trimming where it will help. Trimming dead fronds cuts down on nesting space more than almost anything else you can do. On waterfront homes we also check gaps under decks and around dock utility lines.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Back Bay Mosquito Control in Newport Beach",
        body: [
          "The Upper Newport Bay Ecological Reserve is a protected salt marsh. Homes nearby in Eastbluff, Dover Shores, Westcliff and the Bluffs feel the effects in the evening. Even so, many mosquitoes come from right around the house: bromeliads, drains on boat covers, planters on balconies, and fountains that aren't running. Daytime-biting invasive Aedes mosquitoes breed in exactly those kinds of small containers.",
          "We treat breeding spots in your yard and resting areas in landscaping. The marsh itself is managed by the Orange County Mosquito and Vector Control District, and you can report problems to them at ocvector.org. At home, clear boat-cover puddles and patio drains every week and keep fountains running. Most Back Bay customers choose monthly service from late spring into fall.",
        ],
        link: { href: "/services/mosquito-control", label: "Mosquito control services" },
      },
      {
        heading: "Ants and Moisture Pests in Coastal Newport Homes",
        body: [
          "Argentine ants come up through cracks in hardscape and kitchen tile all year. Many Newport homes have lush irrigated planters right next to the house, and those keep colonies large and close to your doors. Close to the water, the marine layer keeps garages, crawl spaces and ground floors damp, which draws earwigs, silverfish and pill bugs, especially on the Peninsula and the islands where homes sit almost at sea level.",
          "We treat the outside of the house and the problem spots inside, bait ant trails back to the colony, and point out moisture problems such as leaky hose bibs or blocked weep screeds that keep pests coming back. Visits can be scheduled around your housekeeper, gardener or vacation-rental bookings.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Spiders, Wasps and Wildlife in Corona del Mar and Newport Coast",
        body: [
          "Hillside homes in Newport Coast and the canyon edges of Corona del Mar border open space. Raccoons, opossums and skunks come in at night for pet food, koi and fallen fruit, and sometimes settle under decks. We trap and remove the animal, then seal the opening. Black widows and brown widows hide around pool equipment, outdoor kitchens and the gaps in stacked-stone walls, and paper wasps build under balcony overhangs with an ocean view.",
          "A perimeter service every quarter, with nest removal as needed, keeps patios and outdoor living areas usable all year. If a bee colony moves into a wall or chimney, we remove the bees and the comb and seal the space.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
    ],
    neighborhoods: ["Balboa Peninsula", "Balboa Island", "Lido Isle", "Corona del Mar", "Newport Heights", "Eastbluff", "Dover Shores", "Westcliff", "Newport Coast"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Newport Beach" },
      { href: "/services/mosquito-control", anchor: "Back Bay mosquito control" },
      { href: "/services/exclusion-repairs", anchor: "roofline and vent sealing" },
      { href: "/services/ant-control", anchor: "ant control for coastal homes" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs", range: "$300 – $1,500+", note: "Larger custom homes trend higher" },
      { item: "Mosquito service (monthly)", range: "$100 – $175/mo" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
    ],
    extraFaqs: [
      {
        question: "How much does rat control cost in Newport Beach?",
        answer:
          "Rodent control typically runs $200 to $500 for trapping and follow-up visits. Sealing entry points is separate and typically runs $300 to $1,500 or more, depending on the size of the home and the roof. We give a free inspection and a written quote.",
      },
      {
        question: "Can you service a Balboa Island home when I'm not there?",
        answer:
          "Yes, for most exterior work and for follow-up trap checks, as long as we can get to the areas we need. We're happy to coordinate with a property manager or neighbor who can let us in.",
      },
      {
        question: "Does trimming palm trees help with rats in Newport Beach?",
        answer:
          "Yes. Dead fronds are prime nesting sites for roof rats. Keeping palms trimmed, along with sealing the roofline, takes away both the nest and the way into your home.",
      },
      {
        question: "When are mosquitoes worst near the Back Bay?",
        answer:
          "Mosquitoes are usually most active from late spring through early fall, especially in the evenings near the marsh. Invasive Aedes mosquitoes, which breed in containers around homes, can bite during the day as well. Monthly treatment during that season gives the steadiest relief.",
      },
    ],
    nearby: ["costa-mesa", "irvine", "huntington-beach", "laguna-beach"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- TUSTIN
  {
    slug: "tustin",
    metaTitle: "Tustin Pest Control: Local Rodent & Ant Service",
    metaDescription:
      "Tustin is home base for Yogi's Pest Control. Fast local service for roof rats, ants and skunks under houses in Old Town and Tustin Ranch. 714-323-8262.",
    heroSubtext:
      "Yogi's Pest Control is based right here in Tustin, so we're usually just minutes from your door. Owner Yobani Arreola handles rats, ants and wildlife across the city.",
    sections: [
      {
        heading: "Your Local Tustin Pest Control Company",
        body: [
          "Tustin is where we're based, which means shorter drive times and easier same-day appointments for neighbors in Old Town, Tustin Meadows, Tustin Ranch and Tustin Legacy. We're open 7 days a week from 8AM to 8PM. Yobani does the inspections himself, so the person who quotes your job is the one who does the work.",
          "Being local also makes follow-up easy. Rodent work almost always takes a few return visits to check traps, and those are simple to schedule when we're only a few miles away. If something new shows up between visits, like fresh droppings or a smell under the house, call and we'll come take a look. We serve all of Orange County, but Tustin is our home base, and we know the area's older streets, newer tracts and canyon edges well.",
        ],
        link: { href: "/about", label: "About Yogi's Pest Control" },
      },
      {
        heading: "Roof Rats in Old Town Tustin and Tustin Ranch",
        body: [
          "Tustin grew up among citrus groves, and many yards in Old Town and the streets around it still have orange, lemon and avocado trees. Roof rats love them. Older homes in Old Town also have raised floors, worn vent screens and gaps at the eaves. In Tustin Ranch, 30 years of landscaping growth means trees now hang over roofs and give rats a way up.",
          "Our rodent work usually goes like this: inspect the attic and roofline, set traps, come back on scheduled visits to check them, then seal every entry point we find. If the attic insulation is badly soiled, we can clean it out and sanitize.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Skunks, Ants and Crawl Spaces in Tustin",
        body: [
          "If your house suddenly smells of skunk, there's often an animal under it. Skunks, opossums and raccoons move in under homes with crawl spaces and under sheds, especially in older Old Town houses and near Peters Canyon. Torn vent screens, fresh dirt pushed out from under a slab edge, or a dog that won't stop sniffing one spot are all good clues.",
          "We find where they got in, trap and remove the animal, and close the opening with heavy mesh so another one can't take its place. When an animal has been living under the floor, fleas often stay behind, so we can treat for those too.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping" },
      },
      {
        heading: "Ants and Mice in Tustin Legacy and Newer Tustin Homes",
        body: [
          "Tustin Legacy is built on the former Marine Corps Air Station, next to the historic blimp hangars, and much of the land around it is still being developed. Grading and construction push mice and ground-nesting ants out of the open land and into the newest homes, garages and townhome rows. New construction isn't sealed perfectly either. Gaps around garage doors, AC line sets and plumbing under sinks are common ways in.",
          "Across Tustin Ranch, Tustin Meadows and Columbus Square, Argentine ants are the year-round pest, flooding kitchens during heat waves and after heavy rain. A recurring perimeter treatment with baits that wipe out whole colonies keeps them outside. For mice, we trap and then seal the gaps the builder missed.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
    ],
    neighborhoods: ["Old Town Tustin", "Tustin Ranch", "Tustin Legacy", "Tustin Meadows", "Columbus Square", "Peppertree", "Lower Peters Canyon"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat removal in Tustin" },
      { href: "/services/wildlife-trapping", anchor: "skunk and wildlife trapping" },
      { href: "/services/ant-control", anchor: "Argentine ant treatment" },
      { href: "/services/attic-cleanout", anchor: "attic cleanout and sanitizing" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Ant control (one-time)", range: "$150 – $250" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "How fast can you get to my home in Tustin?",
        answer:
          "Tustin is our home base, so same-day visits are often possible. We're open 7 days a week, 8AM to 8PM. Call 714-323-8262 and we'll tell you the earliest time we can come.",
      },
      {
        question: "What should I do if I smell a skunk under my house?",
        answer:
          "Keep pets away from the area and don't block the hole while an animal might still be inside. Call us for an inspection. We'll confirm whether something is living there, trap and remove it, and then seal the entry point.",
      },
      {
        question: "How much does wildlife trapping cost in Tustin?",
        answer:
          "Wildlife trapping typically runs $250 to $600, depending on the animal, how many visits it takes and where it's denning. Sealing the opening afterward is quoted separately when needed.",
      },
      {
        question: "Do you charge for an inspection in Tustin?",
        answer:
          "No. Inspections are free everywhere we work, including Tustin. We'll look at the problem, explain what we find and give you a quote. You decide whether to go ahead.",
      },
    ],
    nearby: ["irvine", "santa-ana", "orange", "costa-mesa"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- BUENA PARK
  {
    slug: "buena-park",
    metaTitle: "Buena Park Pest Control: Homes & Commercial Kitchens",
    metaDescription:
      "Buena Park pest control for cockroaches and rodents in homes, restaurants and commercial kitchens near Beach Blvd. Free inspection: 714-323-8262.",
    heroSubtext:
      "Beach Boulevard's restaurants and attractions and the older neighborhoods around them all deal with roaches and rodents. We treat Buena Park homes and commercial kitchens.",
    sections: [
      {
        heading: "Commercial Kitchen Pest Control in Buena Park",
        body: [
          "Beach Boulevard is one of the busiest food and entertainment strips in North Orange County. It runs past Knott's Berry Farm, the dinner-theater attractions and Korean restaurants and markets, all the way up to The Source OC. Busy kitchens mean grease in floor drains, deliveries arriving all day and warm motor housings under equipment. German cockroaches, mice and drain flies thrive in those conditions.",
          "We service commercial kitchens in Buena Park, including restaurants and kitchens run by community and faith organizations. Recurring service focuses on drains, the back of the line, dry storage and door sweeps. We document every visit so you have records when the inspector stops by, and we can schedule around service hours.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Cockroaches in Older Buena Park Homes and Apartments",
        body: [
          "Many Buena Park homes and apartment buildings date from the 1950s through the 1970s. Shared plumbing walls let German cockroaches move from one unit to the next, and American cockroaches come up through old drain lines and garage floor drains. Cardboard boxes from the grocery store or a used appliance can also carry German roaches straight into a clean kitchen.",
          "Gel baits and growth regulators work far better than foggers here. Foggers mostly push roaches deeper into the walls. A follow-up visit about two weeks later catches roaches that hatched after the first treatment. For American cockroaches, we treat the outside of the house, drains and the garage, and seal gaps around pipes so they can't climb back in.",
        ],
        link: { href: "/services/cockroach-control", label: "Residential cockroach treatment" },
      },
      {
        heading: "Rat and Mouse Control in Buena Park",
        body: [
          "Detached garages, block walls covered in ivy and backyard fruit trees give rats a place to start. Neighborhoods near Ralph B. Clark Regional Park and the flood-control channels also see more rodents moving through. Roof rats come in from above through eave vents and overhanging branches. Norway rats and house mice come in at ground level, under garage doors and through gaps at the base of the walls.",
          "We trap, remove, seal entry points and come back to confirm the activity has stopped. For restaurants and commercial kitchens, rodent work happens alongside roach service, with exterior bait stations around the dumpster area and tight door sweeps on every back door.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Ants, Spiders and Fleas Around Buena Park Homes",
        body: [
          "Argentine ants are a summer constant in Buena Park, coming in along slab cracks and window frames whenever it gets hot. Black widows hide in garages, under patio furniture and along the block walls that divide most backyards. Homes with pets often fight fleas from spring into fall, especially where raccoons and opossums cross the yard at night.",
          "Recurring perimeter service handles ants and spiders together, and we can add flea treatment for the inside and outside of the house when it's needed. Most homeowners choose quarterly visits and call us if something comes back in between. The inspection is free, and the quote comes before any work starts.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: ["Beach Boulevard corridor", "Knott's area", "Ralph B. Clark Park area", "Malvern Avenue area", "Orangethorpe / The Source area", "Central Buena Park"],
    topServices: [
      { href: "/services/cockroach-control", anchor: "commercial kitchen cockroach control in Buena Park" },
      { href: "/services/rodent-control", anchor: "rat and mouse removal" },
      { href: "/services/fly-control", anchor: "drain fly and fly control" },
      { href: "/services/exclusion-repairs", anchor: "sealing rodent entry points" },
    ],
    pricing: [
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Cockroach control (recurring)", range: "$80 – $150/mo", note: "Commercial kitchens quoted after inspection" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "General pest control (one-time)", range: "$150 – $250" },
    ],
    extraFaqs: [
      {
        question: "How often should a Buena Park restaurant have pest service?",
        answer:
          "Most food businesses do best with recurring service, often monthly, and some busy kitchens need it more often. We'll recommend a schedule after a free inspection, based on the size of the kitchen and how much activity we find.",
      },
      {
        question: "Can you treat our kitchen outside of business hours?",
        answer:
          "We're open 7 days a week, 8AM to 8PM, and we try to work around your prep and service times. Call 714-323-8262 to set a time that works for your kitchen.",
      },
      {
        question: "How much does cockroach control cost in Buena Park?",
        answer:
          "Residential cockroach treatment typically runs $150 to $300 one-time, or $80 to $150 a month for recurring service. Commercial pricing depends on the size of the space and is quoted after a free inspection.",
      },
      {
        question: "Do you service kitchens run by faith and community organizations in Buena Park?",
        answer:
          "Yes. We service commercial kitchens in Buena Park, including kitchens run by faith and community organizations. Those kitchens are often busy on certain days and quiet the rest of the week, so we schedule visits around your event calendar.",
      },
    ],
    nearby: ["fullerton", "anaheim", "stanton", "la-palma"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- STANTON
  {
    slug: "stanton",
    metaTitle: "Stanton Pest Control: Roaches, Bed Bugs & Rodents",
    metaDescription:
      "Stanton pest control for cockroaches, bed bugs, rats and ants in homes, apartments and mobile home parks. Typical prices, free inspection. 714-323-8262.",
    heroSubtext:
      "Stanton packs single-family homes, apartments and mobile home parks into about three square miles, and pests move easily between them. We treat the unit and the source.",
    sections: [
      {
        heading: "Cockroach and Bed Bug Treatment in Stanton Apartments",
        body: [
          "In apartment complexes along Beach Boulevard, Katella Avenue and Western Avenue, German cockroaches and bed bugs often spread from one unit to the next. Treating only one apartment rarely solves the problem for good. When we can, we inspect the units around yours and work with the property manager so the whole building gets treated together.",
          "For roaches we use baits and crack-and-crevice treatment, then return for a follow-up visit, since eggs hatch after the first treatment. For bed bugs we do a detailed inspection of beds, couches and baseboards, treat every spot they're using, and keep coming back until there's no sign of them. Before the first visit, we'll give you a simple prep list covering bedding, clutter and laundry so the treatment reaches every hiding place.",
        ],
        link: { href: "/services/bed-bug-treatment", label: "Bed bug treatment" },
      },
      {
        heading: "Pest Control for Stanton Mobile Home Parks",
        body: [
          "Stanton has several mobile home parks, and manufactured homes come with their own pest problems. The space under the home, behind the skirting, is sheltered and often damp from AC drip lines or leaky plumbing. Rats, mice, cockroaches, ants and black widows all move in there. Damaged skirting or gaps around pipes let them reach the floor and walls.",
          "We inspect under the home when we can get access, trap any rodents, treat crawl areas for roaches and spiders, and patch the skirting and gaps around pipe penetrations. We can also work with park management on treatments for shared spaces like clubhouses, laundry rooms and trash areas, where pests often start before spreading to individual homes.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion repairs" },
      },
      {
        heading: "Rats and Ants in Stanton Homes",
        body: [
          "Older single-family homes in Stanton, many from the 1950s to 1970s, have detached garages, block walls and fruit trees that give roof rats and Norway rats easy places to live. Stanton lots are small and close together, so rats move easily from one yard to the next along fence tops and overhanging branches. A rat problem on your block is rarely limited to one house.",
          "Trapping plus sealing takes care of the rodents. We focus on garage door seals, eave vents and the gaps where pipes and cables enter the wall. Argentine ants trail in along slab cracks every summer, and a recurring perimeter service with baits that reach the colony keeps them out of the kitchen.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Fleas and Mosquitoes in Stanton Yards",
        body: [
          "Stanton is flat, and some yards and side lots hold water after rain or overwatering. Buckets, tires, plant saucers and clogged gutters are enough for invasive Aedes mosquitoes, the small striped daytime biters now found across Orange County. Dumping standing water every week does more than anything else. For heavier activity, we treat breeding spots and the shady plants where mosquitoes rest.",
          "Fleas are the other year-round complaint, especially in homes with dogs and cats or where stray cats and opossums pass through. We treat carpets, pet bedding areas and shaded parts of the yard on the same visit, then come back to catch fleas that hatch afterward. Your pets should get a vet-recommended preventive at the same time.",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
    ],
    neighborhoods: ["Beach Boulevard corridor", "Katella Avenue area", "Western Avenue area", "Cerritos Avenue area", "Dale Avenue area"],
    topServices: [
      { href: "/services/cockroach-control", anchor: "cockroach control in Stanton apartments" },
      { href: "/services/bed-bug-treatment", anchor: "bed bug treatment" },
      { href: "/services/rodent-control", anchor: "rat removal for homes and mobile homes" },
      { href: "/services/ant-control", anchor: "ant control" },
    ],
    pricing: [
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Bed bug treatment", range: "$500 – $1,500" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
    ],
    extraFaqs: [
      {
        question: "How much does bed bug treatment cost in Stanton?",
        answer:
          "Bed bug treatment typically runs $500 to $1,500. The price depends on how many rooms are affected and how many follow-up visits it takes. The inspection is free, so you'll know the price before we start.",
      },
      {
        question: "Can you treat under my mobile home?",
        answer:
          "Yes, as long as there's safe access through the skirting. We trap rodents, treat for roaches and spiders, and seal gaps around the skirting and pipes so pests can't get back to the floor.",
      },
      {
        question: "How long do German cockroaches take to clear out of a Stanton apartment?",
        answer:
          "Most units improve a lot within two weeks, and two or three visits usually get roaches under control. If they're coming from neighboring units, treating those at the same time keeps them from coming back.",
      },
      {
        question: "Do you work with Stanton landlords and park managers?",
        answer:
          "Yes. We can schedule treatments across several apartments or homes in a park, coordinate access with residents, and recommend repairs such as door sweeps or skirting patches that help keep pests from coming back.",
      },
    ],
    nearby: ["garden-grove", "buena-park", "anaheim", "cypress"],
    updated: "2026-10-19",
  },
];

const ALL_CITY_CONTENT = [...CITY_CONTENT, ...CITY_CONTENT_2, ...CITY_CONTENT_3, ...CITY_CONTENT_4];

export const getCityContent = (slug: string) => ALL_CITY_CONTENT.find((c) => c.slug === slug);
