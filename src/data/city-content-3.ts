import type { CityContent } from "./local-seo-types";

// Upgraded content for more city pages (batch 3). Merged into CITY_CONTENT in city-content.ts.
// Prices must stay consistent with /pest-control-cost.
export const CITY_CONTENT_3: CityContent[] = [
  // ---------------------------------------------------------------- FOUNTAIN VALLEY
  {
    slug: "fountain-valley",
    metaTitle: "Fountain Valley Pest Control: Ants, Rats & Gophers",
    metaDescription:
      "Fountain Valley pest control for Argentine ants, roof rats, roaches and lawn gophers near Mile Square Park. Licensed, owner-operated. Call 714-323-8262.",
    heroSubtext:
      "Fountain Valley was farmland on a high water table long before the tracts went in, and the pests still follow the water. We handle the ants, rats and gophers that come with flat, irrigated suburbs.",
    sections: [
      {
        heading: "Argentine Ants in Fountain Valley's Flat, Watered Suburbs",
        body: [
          "Before it was a city, this stretch of central Orange County was so wet that early settlers called it Gospel Swamps, and the name Fountain Valley comes from the artesian wells that once flowed here. Farmers dug drainage canals to dry it out, and most of the houses went up in the 1960s and 1970s on that same flat ground. Today the water comes from sprinklers instead, and Argentine ants love it. Lawns watered on a timer and planter beds pressed against the slab give colonies moisture and shelter all year.",
          "The trails usually show up in kitchens and bathrooms right after a heat wave or the first cold rain. Spraying the line you can see tends to scatter the colony into three new ones. We place slow-acting bait the workers carry back to the nest, then treat the foundation with a non-repellent product so returning ants pick it up without noticing.",
        ],
        bullets: [
          "Run sprinklers early in the morning so soil next to the house dries by evening",
          "Pull mulch and bark back a few inches from the slab",
          "Wipe trails with soapy water instead of spraying them",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
      {
        heading: "Roof Rats Around Mile Square Park and Older Tracts",
        body: [
          "Mile Square Regional Park sits in the middle of town with lakes, golf courses and long rows of mature trees. Roof rats use that cover, then work outward along fences, power lines and the overgrown hedges of the surrounding blocks. Sixty-year-old rooflines give them plenty of ways in: gable vents with torn screens, gaps where the fascia has pulled away, and the spot where the garage roof meets the house.",
          "On a rodent job we inspect the attic and garage first, set traps along the runways we find, and come back on a schedule to check and reset them. Once activity drops off, we seal the openings with hardware cloth and metal flashing so the next group of rats has nowhere to go. Homeowners usually call after hearing scratching at night or finding droppings behind the water heater.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Gophers in Fountain Valley Lawns and Parkways",
        body: [
          "Fountain Valley's soil was farmed for beans, sugar beets and later strawberries, and it's still soft and easy to dig. Gophers take full advantage, especially in big backyard lawns and the parkway strips along residential streets. One gopher can leave a dozen fresh mounds in a week and chew through drip lines and the roots of new plantings.",
          "We trap gophers in their main tunnels rather than relying on poison or smoke bombs. That means probing to find the active run, setting traps below ground and returning to check them. If a neighbor's yard keeps feeding new gophers into yours, ongoing visits catch them as they arrive. Homes on the Santa Ana River side of town and those backing onto the big open lawns near Mile Square Park tend to see the most new mounds, so we usually check those edges first.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Roaches Along the Brookhurst and Warner Corridors",
        body: [
          "The restaurants, medical offices and shopping centers along Brookhurst Street, Warner Avenue and Magnolia Street keep German cockroaches in steady supply. They ride in on cardboard boxes and secondhand appliances, and they spread through the shared walls of apartments and condos nearby. American cockroaches are a different problem. They live in sewers and storm drains and walk in through floor drains and garage doors on warm nights.",
          "For German roaches we use gel baits and growth regulators in cabinet hinges, behind the fridge and under sinks, then return to catch the next hatch. For the larger American roaches, we treat drains, the garage perimeter and the gaps under exterior doors. Commercial kitchens can get recurring service with written records for inspections.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
    ],
    neighborhoods: ["Mile Square Park area", "North Fountain Valley (north of Warner)", "Brookhurst & Warner corridor", "Talbert Avenue area", "Santa Ana River edge", "Slater Avenue area"],
    topServices: [
      { href: "/services/ant-control", anchor: "Argentine ant control in Fountain Valley" },
      { href: "/services/rodent-control", anchor: "roof rat trapping near Mile Square Park" },
      { href: "/services/gopher-control", anchor: "gopher trapping for Fountain Valley lawns" },
      { href: "/services/exclusion-repairs", anchor: "sealing gable vents and roofline gaps" },
    ],
    pricing: [
      { item: "Ant control (one-time)", range: "$150 – $250", note: "Baiting plus a foundation treatment" },
      { item: "Rodent control (one-time)", range: "$200 – $500", note: "Includes return visits to check traps" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "Why do ants keep coming back in my Fountain Valley kitchen?",
        answer:
          "Argentine ant colonies have many queens and connect underground across whole blocks, so killing the workers you see doesn't touch the nest. Baits that workers carry home, plus a non-repellent treatment around the slab, are what bring the numbers down for good.",
      },
      {
        question: "How much does gopher trapping cost in Fountain Valley?",
        answer:
          "Gopher control typically runs $250 to $600 depending on yard size and how many gophers are active. We come out for a free look first and quote before setting any traps.",
      },
      {
        question: "Can you seal my attic after the rats are gone?",
        answer:
          "Yes. Exclusion is part of how we handle roof rats. Once trapping shows activity has stopped, we close vents, roofline gaps and pipe openings with hardware cloth and metal so new rats can't get in. Exclusion repairs usually run $300 to $1,500 or more depending on how many openings there are.",
      },
      {
        question: "Do you come to Fountain Valley on weekends?",
        answer:
          "Yes. We're based in nearby Tustin and open 7 days a week from 8AM to 8PM. Call 714-323-8262 to get on the schedule.",
      },
    ],
    nearby: ["huntington-beach", "costa-mesa", "westminster", "santa-ana"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- PLACENTIA
  {
    slug: "placentia",
    metaTitle: "Placentia Pest Control: Roof Rats, Ants & Skunks",
    metaDescription:
      "Placentia pest control for roof rats in citrus trees, Argentine ants, roaches and crawlspace skunks. Licensed owner-operator. Free inspection 714-323-8262.",
    heroSubtext:
      "From the Craftsman blocks of Old Town to the hillside homes around Alta Vista, Placentia's old citrus trees and mixed-age houses give rodents and ants plenty of options. We trap, treat and seal.",
    sections: [
      {
        heading: "Roof Rats in Placentia's Backyard Citrus",
        body: [
          "Placentia grew up as an orange-growing town, and a lot of backyards still have the trees to prove it. Oranges, lemons, avocados and loquats feed roof rats for most of the year, and thick, unpruned canopies give them a place to nest that's close to the roof. Hollowed-out fruit still hanging on the branch is a classic sign. So is a trail of droppings along the top of the block wall.",
          "From the tree, rats cross to the house on branches that touch the eaves or along the cable lines. We trap inside the attic and garage, check the traps on return visits, and then close the openings they've been using. Trimming limbs back several feet from the roof and picking up dropped fruit each evening makes the whole job go faster.",
        ],
        bullets: [
          "Strip ripe fruit promptly and don't leave windfalls overnight",
          "Keep tree limbs at least four feet from the roof",
          "Store pet food and birdseed in sealed bins",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Old Town Placentia: Crawl Spaces, Skunks and Fleas",
        body: [
          "The older homes around Santa Fe Avenue and the Old Town core often sit on raised foundations with crawl spaces underneath. When a vent screen rusts through, skunks and opossums find a dry, quiet den. The first clue is usually a strong odor coming up through the floor, or a pet suddenly scratching more than usual, since these animals carry fleas.",
          "We look under the house, trap and remove whatever has moved in, and then replace or reinforce the vent screens and any gaps in the foundation. If the animal left fleas behind, we treat the crawl space, the yard and the inside of the home on the same visit and schedule a follow-up for the next hatch. If an animal has died under the floor, we remove it and deodorize the area.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping services" },
      },
      {
        heading: "Argentine Ants and Cockroaches Near Cal State Fullerton",
        body: [
          "The west side of Placentia borders Cal State Fullerton, and the apartments and rental houses there turn over often. Every move brings boxes, used furniture and appliances, which is how German cockroaches usually travel. Once they're in a building with shared plumbing walls, treating one unit at a time rarely works. We prefer to bait the affected units and the ones next to them, then come back to catch the eggs that hatch afterward.",
          "Argentine ants are a citywide problem rather than a neighborhood one. In Placentia they show up hardest in late summer, when lawns brown out and the colonies move indoors looking for water. Bait stations and a non-repellent band around the foundation take care of most homes.",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Black Widows, Wasps and Bees in Placentia Yards",
        body: [
          "Most Placentia lots are surrounded by block walls, and black widows like the hollow cores and the gaps where the caps have cracked. They also build webs inside meter boxes, under patio furniture and among the clutter in detached garages. A spider treatment clears webs and egg sacs and treats the places they hide.",
          "Paper wasps build under eaves and patio covers in late spring, and honeybee swarms sometimes settle into wall voids, irrigation boxes or the hollow trunks of old trees. A bee colony inside a wall needs more than a spray. We remove the bees and the comb so leftover honey doesn't attract new bees or rot in the wall. If you see bees flying in and out of one small gap in the same spot day after day, keep pets and kids back and call before the colony gets larger.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
    ],
    neighborhoods: ["Old Town Placentia", "Alta Vista", "Tri-City Park area", "Atwood", "La Jolla neighborhood", "Kraemer Boulevard corridor"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Placentia" },
      { href: "/services/wildlife-trapping", anchor: "skunk and opossum trapping under Placentia homes" },
      { href: "/services/cockroach-control", anchor: "cockroach treatment for apartments and rentals" },
      { href: "/services/bee-removal", anchor: "bee and hive removal from walls" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wildlife trapping", range: "$250 – $600", note: "Skunks, opossums and raccoons under the house" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Bee hive removal from walls", range: "$500 – $800+" },
    ],
    extraFaqs: [
      {
        question: "What's causing a skunk smell under my Placentia house?",
        answer:
          "Usually a skunk has denned in the crawl space through a broken vent or a gap in the foundation. We find the entry, trap and remove the animal, and then seal the opening so another one can't move in. We can usually trace the source on the first visit.",
      },
      {
        question: "Can you treat a whole Placentia rental for roaches?",
        answer:
          "Yes. For German cockroaches we treat the affected unit and the units sharing walls with it whenever possible, then return to catch new hatches. Property managers get a written quote after a free inspection.",
      },
      {
        question: "How much does it cost to remove bees from a wall in Placentia?",
        answer:
          "Removing an established hive from inside a wall typically costs $500 to $800 or more, depending on how much comb there is and how much of the wall has to be opened. Smaller swarms and wasp nests usually fall in the $150 to $500 range.",
      },
      {
        question: "Do you serve the Alta Vista and Atwood areas of Placentia?",
        answer:
          "Yes, we cover all of Placentia, from Old Town and the Tri-City Park area to Alta Vista and Atwood on the east side. We're open 7 days a week, 8AM to 8PM.",
      },
    ],
    nearby: ["fullerton", "yorba-linda", "brea", "anaheim"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- RANCHO SANTA MARGARITA
  {
    slug: "rancho-santa-margarita",
    metaTitle: "Rancho Santa Margarita Pest Control: Rats, Bees & Ticks",
    metaDescription:
      "Rancho Santa Margarita pest control for roof rats in tile roofs, bees, ticks and canyon wildlife. Licensed, owner-operated in RSM. Call 714-323-8262.",
    heroSubtext:
      "RSM sits on a plateau with O'Neill Regional Park and the Santa Ana Mountains on its doorstep. That means tile roofs full of roof rats, bees in the walls and wildlife moving through every canyon edge.",
    sections: [
      {
        heading: "Roof Rats Under Tile Roofs in Rancho Santa Margarita",
        body: [
          "Most homes on the RSM plateau were built in the late 1980s and 1990s, and most of them have concrete S-tile roofs. The curve of each tile leaves a hollow channel at the eave. Builders often closed those channels with bird stops, but after thirty years many have cracked, slipped or were never installed. Roof rats crawl in through those channels and reach the attic through gaps in the underlayment and the roof sheathing.",
          "Rats get onto the roof from the pepper trees, eucalyptus and dense slope plantings maintained by SAMLARC and the other community associations. We trap in the attic and along the roofline, return to check and reset, and then close the eave openings with new bird stops or hardware cloth. Because the access points are often high and spread around the house, sealing every one is what keeps the problem solved.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion and rodent-proofing" },
      },
      {
        heading: "Bee Removal from RSM Roofs and Walls",
        body: [
          "Those same open tile channels attract honeybees. A swarm in spring may settle under the tiles or slip through a gap in the stucco and build comb inside a wall or soffit. Bees also move into irrigation boxes, block walls and the hollow spaces behind fireplace chases. A colony that's left alone keeps growing, and the comb inside the wall can weigh many pounds.",
          "We remove the bees and the comb, clean the cavity and close the opening so new swarms aren't drawn to the leftover scent. Spraying from the outside isn't enough on its own, because dead bees and honey stay in the wall and draw pests. Yellowjackets and paper wasps are also common in RSM, especially near the open slopes, and we treat those nests too.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
      {
        heading: "Ticks, Fleas and Wildlife Along the Canyon Edges",
        body: [
          "Neighborhoods like Dove Canyon, Robinson Ranch, Trabuco Highlands and Walden back onto open land, and Tijeras Creek and Trabuco Creek run through the area. Coyotes, raccoons, skunks and opossums use those corridors every night. The ones that cause the most trouble at home are skunks and raccoons that settle under decks or into the space beneath a raised patio.",
          "We trap and remove wildlife that has moved in, then close off the space with buried wire or solid barriers so the next animal can't dig back under. Wildlife carry fleas and ticks into the yard, and dogs pick them up on the trails. A yard treatment focused on the shady edges, ground cover and the fence line where yards meet open space knocks those populations down.",
        ],
        bullets: [
          "Check dogs for ticks after walks on the canyon trails",
          "Keep grass and brush trimmed along the back fence",
          "Bring pet food and water bowls inside at night",
        ],
        link: { href: "/services/tick-flea-treatment", label: "Tick and flea treatment" },
      },
      {
        heading: "Ants and Black Widows on the RSM Plateau",
        body: [
          "Summers on the plateau are hotter and drier than on the coast, which pushes Argentine ants toward irrigated planters and into homes looking for water. They enter through the weep screed at the bottom of the stucco, around hose bibs and along cable lines. Baiting the trails and treating the foundation stops most of them.",
          "Black widows are especially common here because so many properties rely on retaining walls and stacked-block slopes. They also hide in valve boxes, in the folds of patio umbrellas and behind stored items in three-car garages. Regular perimeter service keeps both under control, and we come back between visits if anything returns. Wear gloves when you open a valve box or move stacked pots, since widows build right where hands tend to go.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
    ],
    neighborhoods: ["Dove Canyon", "Robinson Ranch", "Trabuco Highlands", "Walden", "Rancho Cielo", "SAMLARC (Lago Santa Margarita area)", "Tijeras Creek"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Rancho Santa Margarita" },
      { href: "/services/bee-removal", anchor: "bee removal from tile roofs and walls" },
      { href: "/services/wildlife-trapping", anchor: "skunk and raccoon trapping near open space" },
      { href: "/services/tick-flea-treatment", anchor: "tick and flea yard treatment" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Exclusion repairs (bird stops, vents)", range: "$300 – $1,500+" },
      { item: "Wasp / bee removal", range: "$150 – $500" },
      { item: "Bee hive removal from walls", range: "$500 – $800+" },
      { item: "Wildlife trapping", range: "$250 – $600" },
    ],
    extraFaqs: [
      {
        question: "How do rats get into a tile roof in Rancho Santa Margarita?",
        answer:
          "Through the open channels at the bottom edge of the roof tiles. If bird stops are missing or broken, rats crawl up the channel and find gaps into the attic. Replacing or adding bird stops and screening those openings is one of the most effective fixes for RSM homes.",
      },
      {
        question: "Is a swarm of bees on my tree in RSM an emergency?",
        answer:
          "A swarm hanging on a branch is often just resting and may leave within a day or two. Keep people and pets away and don't spray it. If the bees start going in and out of a gap in your roof or wall, call us, because that means they've started building comb inside.",
      },
      {
        question: "Can you keep skunks from getting under my deck?",
        answer:
          "Yes. After trapping and removing the animal, we install a barrier around the base of the deck, usually wire mesh buried several inches into the ground and bent outward, so skunks can't dig back underneath.",
      },
      {
        question: "Do you service Dove Canyon and the other gated communities?",
        answer:
          "Yes. We regularly work in guard-gated neighborhoods. Just add us to your gate list or let the gate know we're coming, and we'll show up at the scheduled time.",
      },
    ],
    nearby: ["mission-viejo", "lake-forest", "ladera-ranch", "san-juan-capistrano"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- ALISO VIEJO
  {
    slug: "aliso-viejo",
    metaTitle: "Aliso Viejo Pest Control: Ants, Roaches & Rodents",
    metaDescription:
      "Aliso Viejo pest control for condos, townhomes and canyon-edge homes: ants, German roaches, rodents and gophers. Licensed. Free inspection: 714-323-8262.",
    heroSubtext:
      "Aliso Viejo packs townhomes, condos and single-family streets between Aliso and Wood Canyons and the 73. Shared walls, irrigated slopes and wilderness next door each bring their own pests.",
    sections: [
      {
        heading: "German Roaches in Aliso Viejo Condos and Townhomes",
        body: [
          "A large share of Aliso Viejo's housing is attached: townhome rows, stacked condos and apartment communities around the Town Center and along Pacific Park Drive and Enterprise. German cockroaches spread through those buildings in the gaps around plumbing and electrical lines that run between units. When one neighbor treats with a fogger, the roaches often just move next door.",
          "We use gel baits, bait stations and growth regulators placed where roaches actually live: hinges, under the dishwasher, behind the stove and in the bathroom vanity. A follow-up visit catches the nymphs that hatch from egg cases afterward. When we can, we coordinate with the HOA or property manager to treat neighboring units at the same time.",
        ],
        bullets: [
          "Don't use foggers, which spread roaches into walls and neighboring units",
          "Fix leaks under sinks, since roaches need water daily",
          "Inspect used appliances and moving boxes before bringing them in",
        ],
        link: { href: "/services/cockroach-control", label: "Cockroach control services" },
      },
      {
        heading: "Rodents and Wildlife Along Aliso and Wood Canyons",
        body: [
          "Aliso and Wood Canyons Wilderness Park runs along the western side of the city, and the Aliso Creek corridor reaches into neighborhoods on the east. Homes that back onto those slopes see coyotes, raccoons and opossums in the yard at night. Roof rats nest in the dense landscape plantings the community association maintains between streets and climb to rooflines along vines and trees.",
          "In newer stucco homes, rodents usually get in through the garage door seal, unscreened roof vents or gaps where the AC line enters the wall. We trap inside, follow up until activity stops, and seal the gaps so the next rats can't get back in. For raccoons or skunks under a deck or in a crawl space, we trap and remove the animal and block the opening.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Gophers on Aliso Viejo Slopes and Lawns",
        body: [
          "Aliso Viejo is built on hills, so many yards include an irrigated slope, and most neighborhoods are tied together by green belts and parks the community association maintains. That soft, watered ground suits gophers. They undermine slopes, chew drip lines and kill shrubs from the roots up, and new mounds can appear overnight.",
          "We trap gophers in the active tunnels instead of using fumigants near homes. If gophers keep crossing into your yard from a common area, we can set up follow-up visits to catch them as they arrive. It also helps to let your HOA know, since gophers on shared slopes affect everyone downhill. Fresh mounds after the first fall rains are a good reminder to call, because that's when tunneling picks up again.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Ants and Spiders in Newer Aliso Viejo Construction",
        body: [
          "Even homes built in the 1990s and 2000s have plenty of ant entry points. Argentine ants come in through weep screeds, slab joints, window frames and the gap under a sliding door. In the condo communities, a single colony may run under several buildings at once. Bait placed along their trails and a non-repellent band around the foundation keeps them out.",
          "Black widows set up in garages, utility closets and the retaining walls that hold back the hillsides, while cellar spiders and house spiders gather in high ceilings and patio corners. Quarterly perimeter service with web removal handles most spider problems, and we'll come back between visits if you see activity. Upper-floor condos aren't exempt either, since ants follow plumbing chases and wiring all the way up a building.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
    ],
    neighborhoods: ["Glenwood (Aliso Viejo Country Club)", "Pacific Ridge", "Talavera", "Town Center area", "Pacific Park & Enterprise", "Aliso Creek corridor"],
    topServices: [
      { href: "/services/cockroach-control", anchor: "German cockroach treatment for Aliso Viejo condos" },
      { href: "/services/rodent-control", anchor: "roof rat control near Aliso and Wood Canyons" },
      { href: "/services/gopher-control", anchor: "gopher trapping on slopes and lawns" },
      { href: "/services/ant-control", anchor: "Argentine ant control in Aliso Viejo" },
    ],
    pricing: [
      { item: "Cockroach control (one-time)", range: "$150 – $300", note: "German roaches usually need a follow-up" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
    ],
    extraFaqs: [
      {
        question: "Can you treat just my condo if my neighbor has roaches too?",
        answer:
          "We can, but results are better when connected units are treated together. German cockroaches travel through shared walls. If your HOA or landlord agrees, we'll treat the neighboring units on the same day and schedule follow-ups for all of them.",
      },
      {
        question: "Do you work with Aliso Viejo HOAs and property managers?",
        answer:
          "Yes. We provide commercial and multi-unit service for associations, apartment communities and the office parks along Enterprise and Pacific Park. We'll inspect for free and provide a written quote and service records.",
      },
      {
        question: "Why do I have rats in a newer Aliso Viejo home?",
        answer:
          "Roof rats live in the landscaping all around the city, and it only takes a gap about the size of a quarter. Common entry points in newer homes are worn garage door seals, unscreened vents and gaps around AC and plumbing lines. Sealing those is part of every rodent job.",
      },
      {
        question: "What will pest control cost for my Aliso Viejo home?",
        answer:
          "General pest control is typically $150 to $250 for a one-time visit or $80 to $150 a month on a recurring plan. Rodent control is typically $200 to $500. Inspections are free and we quote before starting.",
      },
    ],
    nearby: ["laguna-niguel", "laguna-hills", "laguna-beach", "mission-viejo"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- CYPRESS
  {
    slug: "cypress",
    metaTitle: "Cypress, CA Pest Control: Rats, Roaches & Flies",
    metaDescription:
      "Cypress, CA pest control for roof rats, German roaches, flies and black widows in post-1960s tracts and businesses. Licensed. Call 714-323-8262 today.",
    heroSubtext:
      "Cypress started out as Dairy City, and the dairies gave way to tidy ranch-house tracts in the 1960s. Today the rats, roaches and flies here follow the fruit trees, block walls and the race course.",
    sections: [
      {
        heading: "Roof Rats and Mice in Cypress Ranch Homes",
        body: [
          "Cypress was incorporated as Dairy City in 1956, and by the 1970s the dairies were gone and the land was covered with single-story ranch homes on lots around 6,000 square feet. Many of those houses still have the original roof vents, aging garage doors and a backyard lemon or avocado tree that's now taller than the roof. That combination makes it easy for roof rats to move from the tree to the attic.",
          "House mice are just as common, especially in garages where birdseed, dog food and cardboard boxes are stored. We trap both, come back to check, and then seal the entry points, including the garage door bottom seal, the gap around the dryer vent and openings where the eaves meet the walls.",
        ],
        bullets: [
          "Replace cracked garage door weather stripping",
          "Store bulk pet food in metal or heavy plastic bins",
          "Keep firewood and storage off the ground and away from walls",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Flies and Rodents Near the Los Alamitos Race Course",
        body: [
          "Despite its name, the Los Alamitos Race Course sits inside Cypress city limits, and its barns and stable areas are a source of flies and rodents for the blocks around it. Horse manure and stored feed support house flies and stable flies. When the wind comes from that direction, nearby yards notice it. Rats and mice that feed on spilled grain spread into surrounding properties too.",
          "Homeowners can't change what's next door, but they can make their own yard less attractive. We treat fly resting spots like eaves, fences and trash areas, set rodent traps, and help you find the gaps that let them inside. Tight-fitting trash lids, regular pickup of pet waste and good door screens make a big difference.",
        ],
        link: { href: "/services/fly-control", label: "Fly control services" },
      },
      {
        heading: "Cockroaches in Cypress Apartments, Restaurants and Shops",
        body: [
          "The shopping centers along Lincoln Avenue, Valley View Street and Katella Avenue, along with the apartments and condos near Cypress College, keep German cockroaches in circulation. They move from unit to unit through plumbing walls and hitch rides in grocery bags and delivery boxes. In restaurants, the most common hiding places are the motor housings of coolers, the gaps under prep tables and floor drains.",
          "We set up recurring commercial service with records for the health inspector and treat apartments unit by unit with baits and growth regulators. American cockroaches, which come out of storm drains and sewer lines on warm nights, are handled with drain and perimeter treatments. Keeping drain covers in place and sealing the gap under exterior doors stops many of them at the threshold.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
      {
        heading: "Black Widows and Ants Along Cypress Block Walls",
        body: [
          "Nearly every backyard in Cypress is fenced with concrete block, and black widows love the cracked caps, weep gaps and the corners where the wall meets the house. They also hide in irrigation boxes, the folds of patio furniture covers and the garage. We clear webs and egg sacs and treat the gaps where they hide.",
          "Cypress is flat and well-irrigated, so Argentine ant colonies spread across entire blocks. During hot weather or after a heavy rain, they move indoors to kitchens, bathrooms and pet bowls. Baiting along their trails, plus a non-repellent treatment around the foundation, works much better than store-bought spray. Moving firewood and stored items a few inches away from the wall also removes a lot of the hiding spots widows depend on.",
        ],
        link: { href: "/services/spider-control", label: "Spider control services" },
      },
    ],
    neighborhoods: ["Lincoln Avenue corridor", "Oak Knoll Park area", "Cypress College area", "Los Alamitos Race Course area", "Valley View & Katella", "Arnold Cypress Park area"],
    topServices: [
      { href: "/services/rodent-control", anchor: "rat and mouse control in Cypress" },
      { href: "/services/cockroach-control", anchor: "German cockroach treatment for Cypress apartments" },
      { href: "/services/fly-control", anchor: "fly control near the race course" },
      { href: "/services/commercial-pest-control", anchor: "restaurant and retail pest control" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Cockroach control (one-time)", range: "$150 – $300" },
      { item: "Spider control (one-time)", range: "$150 – $250" },
      { item: "General pest control (recurring)", range: "$80 – $150/mo" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "Why do I have so many flies in my Cypress yard?",
        answer:
          "Flies breed in manure, pet waste, compost and trash. Homes near stables, including the Los Alamitos Race Course, can see more of them. Keeping trash lids tight and picking up pet waste helps, and we treat the surfaces where flies rest around your house.",
      },
      {
        question: "How long does it take to get rid of rats in a Cypress attic?",
        answer:
          "Most attic rodent jobs take a few visits over one to three weeks. We trap, check and reset traps, and then seal the entry points once activity has stopped.",
      },
      {
        question: "Do you provide commercial pest control in Cypress?",
        answer:
          "Yes. We service restaurants, retail shops, offices and apartment communities in Cypress on a recurring schedule, with service records you can show inspectors. The first inspection is free.",
      },
      {
        question: "Are black widows dangerous to have around my Cypress home?",
        answer:
          "Black widow bites are rare, but they can be painful and serious, especially for young children and older adults. Wear gloves when reaching into block walls, meter boxes or stored items. Regular perimeter treatment and web removal reduce the number of widows around the house.",
      },
    ],
    nearby: ["los-alamitos", "la-palma", "buena-park", "stanton"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- BREA
  {
    slug: "brea",
    metaTitle: "Brea Pest Control: Rodents, Wildlife & Ground Squirrels",
    metaDescription:
      "Brea pest control from Carbon Canyon to downtown: roof rats, wildlife trapping, gophers and bees. Licensed, owner-operated. Free inspection: 714-323-8262.",
    heroSubtext:
      "Brea runs from downtown and Brea Mall up into the Puente Hills, Carbon Canyon and an oil field that's been pumping since the 1880s. Those hills feed rodents, wildlife and diggers into the neighborhoods below.",
    sections: [
      {
        heading: "Wildlife Trapping in Carbon Canyon and Olinda",
        body: [
          "East of town, Carbon Canyon Road winds past Carbon Canyon Regional Park, the Olinda neighborhood and the edge of Chino Hills State Park. Olinda, built in the hills starting in 1964, has many horse properties, and the newer Olinda Ranch homes sit right next to the Olinda Oil Museum and Trail. Raccoons, skunks, opossums and coyotes move between the open land and those yards every night.",
          "The calls we get most are a skunk under a deck, a raccoon in the attic or an opossum in the crawl space. We trap and remove the animal, check for young, and seal the space so it doesn't happen again. Feed rooms on horse properties also draw rats and mice, which we trap and keep out with better storage and sealed doors.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping services" },
      },
      {
        heading: "Ground Squirrels and Gophers on Brea Hillsides",
        body: [
          "The grassy slopes of the Puente Hills, many of them dotted with active wells from the Brea-Olinda Oil Field, are home to ground squirrels and gophers. Hillside neighborhoods like Brea Hills and the Blackstone community border those slopes, and both animals cross into backyards to dig. Ground squirrels leave open burrows and can undermine retaining walls and patios. Gophers leave crescent-shaped mounds and eat roots.",
          "We trap gophers in their main tunnels, and we handle ground squirrel problems with trapping and by closing off the spaces under decks and slabs where they like to burrow. On large slopes, a follow-up schedule works best because new animals keep arriving from the open land. Keeping the slope irrigated evenly, not soaked in one spot, also makes it less inviting for new burrows.",
        ],
        link: { href: "/services/gopher-control", label: "Gopher control services" },
      },
      {
        heading: "Roof Rats in Older Brea Neighborhoods",
        body: [
          "The flatland neighborhoods around Brea Boulevard, State College and Imperial Highway were mostly built in the mid-century, and many still have the original vents and fascia boards. Mature trees and ivy along back fences give roof rats cover and a road to the roof. Inside, they nest in attic insulation and chew on wiring and stored boxes.",
          "We inspect from the attic to the garage, set traps along rat runways and come back to check them. Once the rats are gone, we seal gaps with hardware cloth and metal so new ones can't follow. If the attic insulation is heavily soiled, an attic cleanout removes droppings and contaminated material. Chewed wiring or a strong ammonia smell are signs the rats have been up there a while.",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Pest Control for Downtown Brea Restaurants and Shops",
        body: [
          "Downtown Brea around Birch Street and the Brea Mall area have a busy restaurant and retail scene. German cockroaches, house flies, mice and drain flies are the main problems in those kitchens. Deliveries and shared walls in older buildings let pests move from business to business.",
          "We service commercial kitchens on a schedule that works around opening hours. We focus on drains, equipment bases, storage and the delivery entrance, and we leave service records for health inspections. Offices and retail stores can sign up for quarterly perimeter service to keep ants and spiders out. We work with owners and managers to keep the visits on a predictable calendar, and we're open 7 days a week so service doesn't have to interrupt the lunch or dinner rush. If an inspection turns up a problem, we can schedule a follow-up visit within days.",
        ],
        link: { href: "/services/commercial-pest-control", label: "Commercial pest control" },
      },
    ],
    neighborhoods: ["Olinda", "Olinda Ranch", "Brea Hills", "Blackstone", "Downtown Brea (Birch Street)", "West Brea", "Carbon Canyon"],
    topServices: [
      { href: "/services/wildlife-trapping", anchor: "wildlife trapping in Carbon Canyon and Olinda" },
      { href: "/services/gopher-control", anchor: "gopher and ground squirrel control on Brea hillsides" },
      { href: "/services/rodent-control", anchor: "roof rat control in Brea" },
      { href: "/services/commercial-pest-control", anchor: "restaurant pest control in downtown Brea" },
    ],
    pricing: [
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Gopher control", range: "$250 – $600" },
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Attic cleanout", range: "$500 – $3,000+", note: "Depends on attic size and contamination" },
      { item: "Dead animal removal", range: "$150 – $400" },
    ],
    extraFaqs: [
      {
        question: "Can you get rid of ground squirrels in my Brea yard?",
        answer:
          "Yes. We trap ground squirrels and close off the spots under decks, slabs and walls where they burrow. Homes that back onto open hillside often need a few follow-up visits, since new squirrels move in from the slopes.",
      },
      {
        question: "Do you service horse properties in Olinda?",
        answer:
          "Yes. On horse properties we focus on rodents around feed and tack rooms, wildlife trapping and wasp nests around barns. All products are EPA-registered and applied according to the label, and we tell you how long to keep animals and people out of treated areas.",
      },
      {
        question: "What does wildlife removal cost in Brea?",
        answer:
          "Wildlife trapping typically runs $250 to $600 depending on the animal, where it's living and how much sealing is needed afterward. If an animal has died under the house or in the attic, removal typically costs $150 to $400.",
      },
      {
        question: "How quickly can you get to Brea?",
        answer:
          "We're based in Tustin and open 7 days a week, 8AM to 8PM. Same-day visits to Brea are often possible. Call 714-323-8262 to check availability.",
      },
    ],
    nearby: ["fullerton", "placentia", "la-habra", "yorba-linda"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- DANA POINT
  {
    slug: "dana-point",
    metaTitle: "Dana Point Pest Control: Coastal Rodents & Crawl Spaces",
    metaDescription:
      "Dana Point pest control for roof rats in palms, damp crawl spaces, earwigs, fleas and bed bugs in rentals. Licensed owner-operator. Call 714-323-8262.",
    heroSubtext:
      "From the Lantern Village cottages to the gated streets of Monarch Beach and Niguel Shores, Dana Point's marine layer keeps crawl spaces damp and palms full of rats. We work with the coast, not against it.",
    sections: [
      {
        heading: "Rats in the Palms Around Dana Point Harbor",
        body: [
          "Palms line the streets near the harbor and Pacific Coast Highway, and they shelter rats in the dead fronds under the crown. Roof rats travel from those trees along utility lines and fence tops to nearby roofs. Restaurants, docks and trash enclosures near the harbor give them a steady food source, so the blocks of Lantern Village just uphill see regular activity.",
          "We trap in the attic and garage, return to check traps, and then seal the vents and roofline gaps. Keeping palms trimmed of dead fronds is one of the most useful things a Dana Point homeowner can do, because it removes the nest site closest to the roof.",
        ],
        bullets: [
          "Have palms skinned of dead fronds once a year",
          "Keep trash in bins with lids, especially near the harbor",
          "Check roof and gable vent screens after windy storms",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Damp Crawl Spaces in Capistrano Beach and Lantern Village",
        body: [
          "Many of the older homes in Capo Beach and Lantern Village sit on raised foundations. With the marine layer rolling in most mornings, those crawl spaces stay humid. Earwigs, silverfish, sow bugs and spiders thrive there. A crawl space with a broken vent screen also attracts skunks and opossums looking for a den, and the first sign is often a smell coming through the floorboards.",
          "We go under the house, trap and remove any animal living there, and replace the vent screens. We then treat for the moisture-loving insects and point out where drainage, a leaky pipe or a blocked vent is keeping things wet. Drying a crawl space out is the long-term fix. Odor complaints can often be traced on the same visit once we're under the floor.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping services" },
      },
      {
        heading: "Fleas and Bed Bugs in Dana Point Rentals",
        body: [
          "Dana Point is a vacation destination, and short-term rentals, guest units and beach cottages turn over regularly. Each new guest can bring bed bugs in luggage, and pets visiting the beach can bring fleas home. Fleas never get a real winter break on the coast, since temperatures stay mild all year.",
          "For bed bugs we inspect mattresses, headboards, couches and baseboards and treat with methods matched to the level of infestation, followed by a return visit. For fleas we treat inside and outside on the same day, then schedule a follow-up for the next hatch. Rental owners can call between guests and we'll try to fit the visit into the turnover window. Washing linens hot and vacuuming mattress seams between stays helps catch bed bugs early.",
        ],
        link: { href: "/services/bed-bug-treatment", label: "Bed bug treatment" },
      },
      {
        heading: "Ants and Snails on Dana Point Bluffs and Slopes",
        body: [
          "Bluff-top and hillside homes in Dana Point, from Niguel Shores and Monarch Beach up to Dana Hills, often have irrigated slopes planted with ice plant and ground cover. Argentine ants nest in those slopes and climb into homes through windows, doors and the gaps around plumbing. They also farm aphids and scale on landscape plants, so you may see them marching up tree trunks.",
          "We bait active trails and treat the foundation with a non-repellent product. On the slopes, we focus on the edges closest to the house. Regular perimeter service keeps ants and spiders down year-round, and we'll come back between visits if they return. Trimming ground cover a foot or so back from the walls removes the bridge ants use to reach the house.",
        ],
        link: { href: "/services/ant-control", label: "Ant control services" },
      },
    ],
    neighborhoods: ["Lantern Village", "Capistrano Beach", "Monarch Beach", "Niguel Shores", "Ritz Pointe", "Dana Hills", "Harbor & Headlands"],
    topServices: [
      { href: "/services/rodent-control", anchor: "roof rat control in Dana Point" },
      { href: "/services/wildlife-trapping", anchor: "crawl space wildlife trapping in Capo Beach" },
      { href: "/services/bed-bug-treatment", anchor: "bed bug treatment for vacation rentals" },
      { href: "/services/tick-flea-treatment", anchor: "flea treatment for coastal homes" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Tick & flea treatment (one-time)", range: "$200 – $400" },
      { item: "Bed bug treatment", range: "$500 – $1,500" },
      { item: "Ant control (recurring)", range: "$75 – $125/mo" },
    ],
    extraFaqs: [
      {
        question: "Why are there so many earwigs and silverfish in my Dana Point home?",
        answer:
          "The marine layer keeps crawl spaces, garages and lower floors damp, which is exactly what earwigs and silverfish need. Treating helps, but fixing leaks, clearing blocked vents and improving drainage around the foundation is what keeps them away.",
      },
      {
        question: "Can you treat my Dana Point vacation rental between guests?",
        answer:
          "Yes. We'll do our best to schedule around your turnover. For bed bugs, a follow-up visit is part of the treatment, so we'll plan both visits around your booking calendar.",
      },
      {
        question: "Do you service gated communities like Monarch Beach and Niguel Shores?",
        answer:
          "Yes. Let the gate know we're coming or put us on your guest list, and we'll arrive at the scheduled time. We're open 7 days a week, 8AM to 8PM.",
      },
      {
        question: "What does pest control cost in Dana Point?",
        answer:
          "Rodent control typically runs $200 to $500 and wildlife trapping $250 to $600. Bed bug treatment is typically $500 to $1,500 depending on how far it has spread. Inspections are free and we quote before starting any work.",
      },
    ],
    nearby: ["san-juan-capistrano", "san-clemente", "laguna-niguel", "laguna-beach"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------- SAN JUAN CAPISTRANO
  {
    slug: "san-juan-capistrano",
    metaTitle: "San Juan Capistrano Pest Control: Barns, Rats & Bees",
    metaDescription:
      "San Juan Capistrano pest control for horse properties, roof rats, bees, wasps and historic homes near Los Rios. Licensed owner-operator. 714-323-8262.",
    heroSubtext:
      "San Juan Capistrano mixes 1790s adobes, board-and-batten cottages on Los Rios Street and acre-plus horse properties. Barns, creeks and old construction give rodents, flies and bees plenty to work with.",
    sections: [
      {
        heading: "Pest Control for San Juan Capistrano Horse Properties",
        body: [
          "The equestrian-zoned hillsides around the Hunt Club and Mission Hills areas, along with the stables near San Juan Creek, are a big part of life in San Juan Capistrano. Horses mean feed, hay, manure and water troughs, and each of those draws a different pest. Rats and mice go after grain in feed rooms. Flies breed in manure piles and wet bedding. Paper wasps and yellowjackets build in barn rafters, and mosquitoes can breed in troughs that sit unchanged.",
          "We trap rodents around feed and tack rooms, treat fly resting areas, remove wasp nests and help plan storage that keeps rats out. All products are EPA-registered and applied according to the label, and we explain how long horses, pets and people should stay out of treated areas.",
        ],
        bullets: [
          "Store grain in metal bins with tight lids",
          "Remove manure regularly and keep piles away from stalls",
          "Scrub and refill water troughs at least weekly",
        ],
        link: { href: "/services/rodent-control", label: "Rodent control services" },
      },
      {
        heading: "Historic Homes Around Los Rios and the Mission",
        body: [
          "The Los Rios Historic District holds some of the oldest homes in California, including adobes from the 1790s and small board-and-batten houses built between about 1887 and 1910. Older wood-frame buildings have more gaps than modern stucco, and many sit on low foundations with little ventilation underneath. That lets in rodents, spiders and crawl space wildlife.",
          "Historic preservation rules apply in this part of town, so exclusion work has to be done carefully. We use removable or minimally visible materials such as hardware cloth behind existing vents and sealants that match the surface, and we talk through the plan with you before starting. Trapping and monitoring do much of the work without changing the building at all. Fruit trees and old pepper trees on these lots also feed roof rats, so we look at the yard as well as the house.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Exclusion and rodent-proofing" },
      },
      {
        heading: "Bees and Wasps in the San Juan Hills",
        body: [
          "Inland from the coast, San Juan Capistrano gets hotter, drier summers, and its gardens, orchards and open slopes support a lot of honeybees. Swarms in spring settle into wall voids, eaves, irrigation boxes and the hollows of old oak and pepper trees. Wasps nest under eaves and in barn rafters in the summer.",
          "For an established hive in a wall, we remove the bees and the comb, clean out the cavity and close the opening so new swarms aren't drawn back to the scent. For wasp nests near doors, patios or arenas, we treat and remove them so you can use the space again. Yellowjackets that nest in the ground near arenas and trails can be aggressive when disturbed, so mark the spot and call before mowing over it.",
        ],
        link: { href: "/services/bee-removal", label: "Bee removal services" },
      },
      {
        heading: "Wildlife and Ticks Near San Juan Creek and the Canyons",
        body: [
          "San Juan Creek and Trabuco Creek both run through town, and the San Juan Creek Trail follows the water to the ocean at Doheny. Neighborhoods along those creeks and the hills east toward Ortega Highway see raccoons, skunks, opossums and coyotes regularly. Skunks den under porches and sheds, and raccoons may move into attics.",
          "We trap and remove animals that have moved in, then seal the openings they used, whether that is a porch skirt, a shed floor or a roof vent. Trail riders and dog walkers bring ticks home from the creek paths and brushy hillsides, so we also treat the shady yard edges and fence lines where ticks wait. Checking dogs and horses after a ride and keeping brush cut back along fences reduces how many ticks reach the house.",
        ],
        link: { href: "/services/wildlife-trapping", label: "Wildlife trapping services" },
      },
    ],
    neighborhoods: ["Los Rios Historic District", "Hunt Club", "Mission Hills", "Marbella", "Hidden Mountain", "San Juan Creek area", "Ortega Highway corridor"],
    topServices: [
      { href: "/services/rodent-control", anchor: "rodent control for barns and feed rooms" },
      { href: "/services/bee-removal", anchor: "bee removal in San Juan Capistrano" },
      { href: "/services/wildlife-trapping", anchor: "wildlife trapping near San Juan Creek" },
      { href: "/services/fly-control", anchor: "fly control for horse properties" },
    ],
    pricing: [
      { item: "Rodent control (one-time)", range: "$200 – $500" },
      { item: "Wasp / bee removal", range: "$150 – $500" },
      { item: "Bee hive removal from walls", range: "$500 – $800+" },
      { item: "Wildlife trapping", range: "$250 – $600" },
      { item: "Exclusion repairs", range: "$300 – $1,500+" },
    ],
    extraFaqs: [
      {
        question: "How do I keep rats out of my barn feed room?",
        answer:
          "Store grain in metal bins with tight lids, clean up spilled feed daily and keep doors closed. We trap rats and mice in and around the feed room and seal gaps at the base of walls and doors so new rodents can't get in.",
      },
      {
        question: "Can you do pest control on a historic Los Rios home?",
        answer:
          "Yes. We rely on trapping and careful, low-impact sealing so the building's historic features aren't damaged. Check with the city about any work on the exterior, and we'll walk you through our plan before we start.",
      },
      {
        question: "How much does bee removal cost in San Juan Capistrano?",
        answer:
          "Wasp nests and small bee swarms typically run $150 to $500. Removing an established hive from inside a wall, including the comb, typically costs $500 to $800 or more depending on the size and location.",
      },
      {
        question: "Do you serve gated San Juan Capistrano neighborhoods?",
        answer:
          "Yes, we serve all of San Juan Capistrano, including gated communities like Marbella and Hidden Mountain. Put us on the gate list and we'll arrive at the scheduled time. We're open 7 days a week, 8AM to 8PM.",
      },
    ],
    nearby: ["dana-point", "san-clemente", "ladera-ranch", "mission-viejo"],
    updated: "2026-10-19",
  },
];
