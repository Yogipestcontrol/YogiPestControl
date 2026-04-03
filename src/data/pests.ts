export interface PestData {
  slug: string;
  commonName: string;
  scientificName: string;
  description: string;
  identification: string[];
  lifecycle: string;
  risks: string[];
  imageUrl: string;
  relatedServiceSlug: string;
}

export const pestsData: PestData[] = [
  {
    slug: "argentine-ants",
    commonName: "Argentine Ants",
    scientificName: "Linepithema humile",
    description:
      "Argentine ants are one of the most common invasive ant species in Orange County. These small, light-to-dark brown ants form massive supercolonies that can stretch across entire neighborhoods. Unlike many ant species, Argentine ant colonies have multiple queens, making them extremely difficult to eliminate without professional help. They are attracted to sweet foods and moisture, frequently invading kitchens, bathrooms, and pet feeding areas. Their sheer numbers and persistent trailing behavior make them a year-round nuisance for Southern California homeowners and businesses alike.",
    identification: [
      "Light to dark brown color, about 1/16 to 1/4 inch long",
      "Travel in wide, well-defined trails along edges and foundations",
      "Emit a musty odor when crushed, unlike other ant species",
      "Lack a stinger but may bite when disturbed",
      "Colonies contain multiple queens, often with millions of workers",
    ],
    lifecycle:
      "Argentine ant queens lay eggs continuously, producing dozens per day. Eggs hatch in about 28 days, and the entire development from egg to adult takes roughly 74 days. Colonies can persist for years because multiple queens ensure constant reproduction, making population control extremely challenging without sustained treatment.",
    risks: [
      "Contaminate food supplies by trailing through kitchens and pantries",
      "Displace native ant species, disrupting local ecosystems",
      "Attract other pests such as aphids by farming them for honeydew",
      "Can cause short circuits by nesting inside electrical equipment",
    ],
    imageUrl: "/images/pests/argentine-ants.jpg",
    relatedServiceSlug: "ant-control",
  },
  {
    slug: "fire-ants",
    commonName: "Fire Ants",
    scientificName: "Solenopsis invicta",
    description:
      "Fire ants are aggressive stinging ants known for their reddish-brown color and painful venom. Originally from South America, they have spread throughout the southern United States, including parts of Orange County. Fire ants build distinctive dome-shaped mounds in lawns, gardens, and along sidewalks. When their nests are disturbed, hundreds of workers swarm out and deliver painful, burning stings that can cause allergic reactions in sensitive individuals. Their colonies can contain up to 500,000 workers, making professional treatment essential for safe and effective removal.",
    identification: [
      "Reddish-brown to dark brown, about 1/8 to 1/4 inch long",
      "Build visible dome-shaped mounds in soil, often in sunny areas",
      "Extremely aggressive when their nest is disturbed",
      "Possess a visible stinger at the abdomen tip",
    ],
    lifecycle:
      "Fire ant queens can lay up to 1,500 eggs per day and live for several years. Eggs develop through larval and pupal stages over 30 days before emerging as adults. Mature colonies produce winged males and females that swarm during warm months to mate and establish new colonies. A single colony can grow to half a million individuals.",
    risks: [
      "Painful venomous stings that cause pustules lasting days or weeks",
      "Severe allergic reactions (anaphylaxis) in sensitive individuals",
      "Damage to electrical equipment, HVAC units, and wiring",
      "Harm to pets, livestock, and ground-nesting wildlife",
    ],
    imageUrl: "/images/pests/fire-ants.jpg",
    relatedServiceSlug: "ant-control",
  },
  {
    slug: "norway-rats",
    commonName: "Norway Rats",
    scientificName: "Rattus norvegicus",
    description:
      "Norway rats are large, burrowing rodents commonly found in basements, crawl spaces, and lower levels of Orange County homes. Also known as brown rats or sewer rats, they are stocky with blunt noses and small ears relative to their body size. Norway rats are excellent swimmers and often enter structures through damaged drains and sewer lines. They are primarily nocturnal, feeding on a wide range of foods including garbage, pet food, and stored grains. Their burrowing habits can undermine foundations and damage landscaping, making prompt professional control critical.",
    identification: [
      "Brown or grayish-brown fur with a lighter underside, 7 to 9 inches long excluding tail",
      "Blunt nose, small ears, and a tail shorter than its body length",
      "Droppings are capsule-shaped, about 3/4 inch long",
      "Burrow entrances found along foundations, under debris, or in gardens",
    ],
    lifecycle:
      "Norway rats reach sexual maturity in about 3 months. Females produce 4 to 6 litters per year, each containing 8 to 12 pups. Gestation lasts approximately 21 to 23 days. In optimal conditions, a single pair can produce over 1,000 descendants annually, which is why early intervention is essential.",
    risks: [
      "Transmit diseases including leptospirosis, salmonella, and rat-bite fever",
      "Cause structural damage by gnawing through wood, plastic, and even soft metals",
      "Contaminate food and surfaces with urine, droppings, and hair",
      "Create fire hazards by chewing through electrical wiring",
    ],
    imageUrl: "/images/pests/norway-rats.jpg",
    relatedServiceSlug: "rodent-control",
  },
  {
    slug: "roof-rats",
    commonName: "Roof Rats",
    scientificName: "Rattus rattus",
    description:
      "Roof rats are slender, agile rodents that are especially prevalent in Orange County due to the region's citrus trees and warm climate. Unlike Norway rats, roof rats prefer elevated spaces and are commonly found in attics, rafters, palm trees, and along power lines. Their dark brown to black coloring and long tails make them easy to distinguish from their bulkier cousins. Roof rats are excellent climbers and can access homes through gaps near rooflines, vents, and utility entry points. They are notorious for contaminating attic insulation with droppings and causing damage to stored belongings.",
    identification: [
      "Dark brown to black with a gray or white underside, 6 to 8 inches long excluding tail",
      "Pointed nose, large ears, and a tail longer than the head and body combined",
      "Droppings are spindle-shaped, about 1/2 inch long with pointed ends",
      "Grease marks and rub marks along beams, rafters, and roof edges",
      "Nests found in attics, dense vegetation, and tree canopies",
    ],
    lifecycle:
      "Roof rats become reproductively mature at about 3 months of age. Females typically produce 3 to 5 litters per year, with each litter averaging 5 to 8 pups. The gestation period is roughly 21 to 23 days. Their lifespan averages about one year in the wild, but prolific breeding means populations can grow rapidly without intervention.",
    risks: [
      "Spread diseases such as typhus, hantavirus, and salmonellosis",
      "Damage attic insulation, ductwork, and stored items",
      "Gnaw electrical wiring, creating significant fire hazards",
      "Contaminate food storage areas in kitchens and pantries",
    ],
    imageUrl: "/images/pests/roof-rats.jpg",
    relatedServiceSlug: "rodent-control",
  },
  {
    slug: "german-cockroaches",
    commonName: "German Cockroaches",
    scientificName: "Blattella germanica",
    description:
      "German cockroaches are the most common cockroach species found inside Orange County homes and restaurants. These small, light brown roaches with distinctive dark parallel stripes behind their heads prefer warm, humid environments and are most often found in kitchens and bathrooms. They reproduce at an alarming rate, with a single female producing up to 400 offspring in her lifetime. German cockroaches are primarily introduced through grocery bags, used appliances, and cardboard boxes. Their presence is a major sanitation concern and can trigger asthma and allergies, especially in children.",
    identification: [
      "Light brown to tan, about 1/2 to 5/8 inch long",
      "Two dark parallel stripes running from head to base of wings",
      "Have wings but rarely fly, preferring to run quickly",
      "Often found near sinks, dishwashers, stoves, and refrigerators",
      "Produce small, purse-shaped egg cases (oothecae) containing 30 to 40 eggs",
    ],
    lifecycle:
      "German cockroach females carry their egg cases until just before hatching, roughly 28 days after formation. Nymphs molt 6 to 7 times over 60 days before reaching adulthood. The entire lifecycle from egg to adult takes about 100 days, and adults live an additional 100 to 200 days, during which a single female can produce multiple egg cases.",
    risks: [
      "Trigger asthma and allergic reactions through shed skins and droppings",
      "Spread bacteria including E. coli, Salmonella, and Staphylococcus",
      "Contaminate food preparation surfaces and utensils",
      "Reproduce extremely rapidly, making infestations hard to control without professional treatment",
    ],
    imageUrl: "/images/pests/german-cockroaches.jpg",
    relatedServiceSlug: "cockroach-control",
  },
  {
    slug: "american-cockroaches",
    commonName: "American Cockroaches",
    scientificName: "Periplaneta americana",
    description:
      "American cockroaches are the largest common cockroach species in Orange County, growing over 2 inches long. Often called palmetto bugs or waterbugs, they are reddish-brown with a yellowish figure-eight pattern on the back of the head. Unlike German cockroaches, they primarily live outdoors in sewer systems, storm drains, and mulch beds, but frequently enter homes through drain pipes and gaps around doors. They are strong fliers in warm weather and can startle homeowners with sudden flight. American cockroaches thrive in moist environments and are commonly found in basements, laundry rooms, and around plumbing fixtures.",
    identification: [
      "Reddish-brown, 1.5 to 2 inches long, making them the largest common roach",
      "Yellowish figure-eight pattern on the pronotum behind the head",
      "Fully developed wings that allow short flights in warm conditions",
      "Droppings resemble small mouse droppings with ridged sides",
    ],
    lifecycle:
      "American cockroaches develop slowly compared to German cockroaches. Females produce an egg case roughly every 6 days, each containing about 16 eggs. Nymphs take 6 to 12 months to mature through 10 to 13 molts. Adults can live for over a year, making established populations long-lasting and resilient.",
    risks: [
      "Carry and spread pathogens including Salmonella and Streptococcus",
      "Contaminate food and surfaces with bacteria from sewers and drains",
      "Produce allergens that worsen asthma symptoms in indoor environments",
    ],
    imageUrl: "/images/pests/american-cockroaches.jpg",
    relatedServiceSlug: "cockroach-control",
  },
  {
    slug: "black-widows",
    commonName: "Black Widows",
    scientificName: "Latrodectus hesperus",
    description:
      "Black widow spiders are among the most venomous spiders in Orange County and are found throughout Southern California. The western black widow female is easily recognized by her shiny black body and bright red hourglass marking on the underside of the abdomen. They build irregular, messy webs in dark, sheltered areas such as garages, sheds, woodpiles, meter boxes, and under outdoor furniture. While bites are rarely fatal to healthy adults, they can cause severe pain, muscle cramps, and nausea. Children, elderly individuals, and pets are at greatest risk from black widow venom.",
    identification: [
      "Shiny black body, about 1.5 inches including legs",
      "Distinctive red or orange hourglass marking on the underside of the abdomen",
      "Build irregular, tangled webs close to the ground in sheltered areas",
      "Males are much smaller and lighter colored with red or white markings",
      "Egg sacs are round, papery, and tan or gray in color",
    ],
    lifecycle:
      "Female black widows lay 200 to 900 eggs per sac and may produce several sacs per season. Spiderlings hatch in about 20 days and disperse by ballooning on silk threads. They molt multiple times over several months before reaching maturity. Females can live 1 to 3 years, while males rarely survive long after mating.",
    risks: [
      "Venomous bites cause severe pain, muscle cramps, and abdominal rigidity",
      "Bites can be dangerous to children, elderly, and immunocompromised individuals",
      "Webs in high-traffic areas increase accidental contact risk",
      "Presence in garages and sheds poses hazards during routine activities",
    ],
    imageUrl: "/images/pests/black-widows.jpg",
    relatedServiceSlug: "spider-control",
  },
  {
    slug: "brown-recluses",
    commonName: "Brown Recluses",
    scientificName: "Loxosceles reclusa",
    description:
      "Brown recluse spiders are shy, venomous spiders that occasionally appear in Orange County, typically introduced through shipments from the Midwest and South. They are recognized by their uniform tan to brown color and distinctive violin-shaped marking on the cephalothorax. True to their name, brown recluses are reclusive and prefer undisturbed areas such as closets, storage boxes, behind furniture, and inside shoes. Their bites can cause necrotic lesions that require medical attention, though bites are uncommon because these spiders avoid contact with humans. Accurate identification is critical since many harmless spiders are often mistaken for recluses.",
    identification: [
      "Uniform tan to dark brown, about 1/4 to 3/4 inch body length",
      "Dark violin-shaped marking on the cephalothorax pointing toward the abdomen",
      "Only six eyes arranged in three pairs, unlike most spiders with eight",
      "No spines on the legs, which appear smooth and uniformly colored",
    ],
    lifecycle:
      "Female brown recluses lay 1 to 5 egg sacs per year, each containing about 50 eggs. Spiderlings emerge after roughly one month and undergo 5 to 8 molts over the course of a year before reaching adulthood. Adults can live 2 to 4 years and are remarkably resilient, surviving months without food or water.",
    risks: [
      "Bites can cause necrotic skin lesions requiring medical treatment",
      "Venom may cause systemic reactions including fever, chills, and nausea",
      "Bites often occur when reaching into boxes, shoes, or undisturbed areas",
      "Difficult to detect due to secretive, nocturnal habits",
    ],
    imageUrl: "/images/pests/brown-recluses.jpg",
    relatedServiceSlug: "spider-control",
  },
  {
    slug: "paper-wasps",
    commonName: "Paper Wasps",
    scientificName: "Polistes spp.",
    description:
      "Paper wasps are semi-social stinging insects commonly found building umbrella-shaped nests under eaves, porch ceilings, and fence rails throughout Orange County. They get their name from the papery material they create by chewing wood fibers mixed with saliva. Paper wasps are generally less aggressive than yellow jackets, but they will sting repeatedly if they feel their nest is threatened. Their slender bodies with long dangling legs distinguish them from other wasp species. While they are beneficial predators of garden caterpillars and other pests, nests near doorways, play areas, and high-traffic zones present a significant stinging hazard for residents.",
    identification: [
      "Slender body, 3/4 to 1 inch long, with long dangling legs in flight",
      "Brown, reddish-brown, or yellow with variable stripe patterns",
      "Build open, umbrella-shaped nests with visible hexagonal cells",
      "Nests typically found under eaves, overhangs, railings, and in shrubs",
    ],
    lifecycle:
      "Mated queens overwinter in sheltered spots and emerge in spring to build new nests. The queen lays eggs in paper cells and raises the first generation of workers. By summer, colonies may contain 20 to 75 workers. In fall, new queens and males are produced, colonies decline, and only fertilized queens survive to the next year.",
    risks: [
      "Sting repeatedly when their nest is disturbed or threatened",
      "Venom can cause severe allergic reactions and anaphylaxis",
      "Nests near entry points create daily hazards for residents",
      "Attracted to outdoor food and beverages during warm months",
    ],
    imageUrl: "/images/pests/paper-wasps.jpg",
    relatedServiceSlug: "wasp-control",
  },
  {
    slug: "yellow-jackets",
    commonName: "Yellow Jackets",
    scientificName: "Vespula spp.",
    description:
      "Yellow jackets are highly aggressive social wasps that are a major stinging hazard in Orange County, especially during late summer and fall. They are often confused with bees due to their black and yellow markings, but yellow jackets are sleeker and do not have fuzzy bodies. They nest underground in abandoned rodent burrows, inside wall voids, and in other concealed spaces, making nests difficult to locate until disturbed. Yellow jackets are attracted to sugary foods and proteins, frequently crashing outdoor barbecues and picnics. Unlike bees, they can sting multiple times, and disturbed colonies may swarm aggressively in defense of their nest.",
    identification: [
      "Black and bright yellow banding, about 1/2 inch long with a smooth body",
      "Narrow waist between thorax and abdomen, lacking the fuzzy appearance of bees",
      "Fly in rapid, side-to-side patterns and hover near food sources",
      "Nests are enclosed and often located underground or in wall voids",
      "Workers become increasingly aggressive from August through October",
    ],
    lifecycle:
      "Yellow jacket colonies are annual, founded by a single overwintered queen in spring. She builds a small nest, lays eggs, and raises the first workers. Colonies grow rapidly through summer, reaching 1,000 to 5,000 workers by late season. In fall, new queens and males are produced. After mating, new queens find sheltered spots to overwinter while the rest of the colony dies.",
    risks: [
      "Highly aggressive when nest is disturbed, capable of stinging repeatedly",
      "Stings can cause life-threatening anaphylaxis in allergic individuals",
      "Ground nests are easily disturbed by lawn mowing or foot traffic",
      "Attracted to food and trash, increasing encounter risk at outdoor events",
    ],
    imageUrl: "/images/pests/yellow-jackets.jpg",
    relatedServiceSlug: "wasp-control",
  },
  {
    slug: "honeybees",
    commonName: "Honeybees",
    scientificName: "Apis mellifera",
    description:
      "Honeybees are essential pollinators that occasionally become a nuisance when they establish hives in walls, attics, chimneys, and other structural voids of Orange County homes. While they are not inherently aggressive, large established hives can contain tens of thousands of bees and significant amounts of honeycomb. When hives are built inside structures, melting honeycomb can cause water damage, attract other pests like ants and roaches, and create persistent odor issues. Africanized honeybees, which are present in Southern California, are more defensive and can mount large-scale stinging attacks. Professional bee removal and relocation is the safest, most responsible approach.",
    identification: [
      "Golden-brown with dark brown bands, about 1/2 inch long",
      "Fuzzy, rounded body covered in fine hairs for pollen collection",
      "Fly directly to and from a single hive entrance in steady streams",
      "Produce visible wax comb when nesting in structural voids",
    ],
    lifecycle:
      "A honeybee queen lays up to 2,000 eggs per day during peak season. Worker bees develop from egg to adult in about 21 days. Colonies are perennial and can persist for many years if undisturbed. When a colony grows too large, it reproduces by swarming, where the old queen and about half the workers leave to establish a new hive.",
    risks: [
      "Stings are painful and can trigger severe allergic reactions or anaphylaxis",
      "Structural hives cause honey and wax damage to walls and ceilings",
      "Abandoned honeycomb attracts ants, cockroaches, wax moths, and rodents",
      "Africanized honeybees in Southern California are more defensively aggressive",
    ],
    imageUrl: "/images/pests/honeybees.jpg",
    relatedServiceSlug: "bee-removal",
  },
  {
    slug: "mosquitoes",
    commonName: "Mosquitoes (Aedes aegypti)",
    scientificName: "Aedes aegypti",
    description:
      "Aedes aegypti mosquitoes, also known as yellow fever mosquitoes, are an invasive species that has become increasingly prevalent in Orange County. Unlike native mosquitoes that are most active at dawn and dusk, Aedes aegypti are aggressive daytime biters that prefer to feed on humans. They breed in extremely small amounts of standing water found in plant saucers, bottle caps, clogged gutters, and pet bowls. These black-and-white striped mosquitoes are significant disease vectors worldwide, capable of transmitting Zika, dengue, chikungunya, and yellow fever viruses. Their urban-adapted behavior makes backyard and indoor control particularly important.",
    identification: [
      "Small, dark black mosquito with distinctive white stripes on legs and body",
      "About 1/4 inch long with a lyre-shaped white marking on the thorax",
      "Aggressive daytime biter, especially active in early morning and late afternoon",
      "Breeds in very small containers of standing water, even bottle caps",
      "Tends to stay close to where it breeds, rarely traveling far",
    ],
    lifecycle:
      "Aedes aegypti females lay eggs individually on the walls of water-holding containers just above the waterline. Eggs can survive dry conditions for months and hatch when submerged. Larvae develop through four stages over 5 to 10 days in water before pupating. Adults emerge from pupae after 2 to 3 days and females begin biting within days.",
    risks: [
      "Vector for Zika, dengue, chikungunya, and yellow fever viruses",
      "Aggressive daytime biting disrupts outdoor activities and yard enjoyment",
      "Breed in extremely small water sources, making elimination difficult",
      "Populations can explode rapidly during warm, humid conditions",
    ],
    imageUrl: "/images/pests/mosquitoes.jpg",
    relatedServiceSlug: "mosquito-control",
  },
  {
    slug: "house-flies",
    commonName: "House Flies",
    scientificName: "Musca domestica",
    description:
      "House flies are among the most common pests found in Orange County homes and food service establishments. These medium-sized gray flies with four dark stripes on the thorax are prolific breeders that develop in decaying organic matter, garbage, and animal waste. House flies do not bite, but they pose significant health risks because they land on filth and then contaminate food and surfaces by regurgitating digestive fluids and depositing bacteria with every landing. A single house fly can carry over 100 different pathogens, including those causing food poisoning, dysentery, and eye infections. Effective control requires eliminating breeding sources and implementing targeted treatments.",
    identification: [
      "Gray, about 1/4 inch long with four dark longitudinal stripes on the thorax",
      "Large reddish compound eyes that nearly touch on the top of the head",
      "Sponging mouthparts that liquefy food before ingestion (no biting)",
      "Rapid, buzzing flight pattern with frequent landing on surfaces and food",
    ],
    lifecycle:
      "House flies develop through complete metamorphosis. Females lay clusters of 75 to 150 eggs on moist organic material, which hatch within 12 to 24 hours. Larvae (maggots) feed for 3 to 7 days before pupating. Adults emerge after 3 to 6 days and can live for 15 to 25 days, during which a single female may lay up to 500 eggs total.",
    risks: [
      "Transmit over 100 pathogens including Salmonella, E. coli, and cholera",
      "Contaminate food and food preparation surfaces with every landing",
      "Breed rapidly in garbage, pet waste, and organic debris",
    ],
    imageUrl: "/images/pests/house-flies.jpg",
    relatedServiceSlug: "fly-control",
  },
  {
    slug: "bed-bugs",
    commonName: "Bed Bugs",
    scientificName: "Cimex lectularius",
    description:
      "Bed bugs are small, flat, parasitic insects that feed exclusively on blood, primarily while their hosts sleep. Bed bug infestations have surged across Orange County in recent years, affecting homes, apartments, hotels, and even public transportation. These reddish-brown insects are expert hitchhikers, spreading through luggage, used furniture, and clothing. They hide in mattress seams, headboards, baseboards, and electrical outlets during the day and emerge at night to feed. Bed bug bites cause itchy red welts in clusters or lines, and heavy infestations produce a distinctive sweet, musty odor. Professional heat or chemical treatments are necessary for complete elimination.",
    identification: [
      "Flat, oval, reddish-brown body about the size of an apple seed (1/4 inch)",
      "Swollen and elongated after feeding, becoming more reddish in color",
      "Leave small dark fecal spots on sheets, mattresses, and pillowcases",
      "Shed skins (exuviae) found near hiding spots as nymphs grow",
      "Bites appear as itchy red welts in clusters or linear patterns on skin",
    ],
    lifecycle:
      "Female bed bugs lay 1 to 5 eggs per day and up to 500 in their lifetime. Eggs hatch in 6 to 10 days, producing tiny nymphs that must feed on blood before each of five molts. The full development cycle takes 5 to 8 weeks depending on temperature. Adults can survive several months without feeding, making them persistent and difficult to starve out.",
    risks: [
      "Bites cause itchy welts, skin rashes, and secondary infections from scratching",
      "Heavy infestations cause sleep deprivation, anxiety, and psychological distress",
      "Extremely difficult to eliminate without professional treatment methods",
      "Spread easily through travel, shared laundry, and secondhand furniture",
    ],
    imageUrl: "/images/pests/bed-bugs.jpg",
    relatedServiceSlug: "bed-bug-treatment",
  },
  {
    slug: "fleas",
    commonName: "Fleas",
    scientificName: "Ctenocephalides felis",
    description:
      "Fleas are tiny, wingless, blood-feeding parasites that are a persistent problem for Orange County pet owners and homeowners. The cat flea is the most common species, infesting both cats and dogs as well as biting humans. Adult fleas live on their hosts, feeding on blood and laying up to 50 eggs per day that fall off into carpets, bedding, and upholstery. Flea larvae develop in these hidden environments before pupating inside sticky cocoons that can remain dormant for months. This life cycle makes fleas incredibly difficult to eliminate without treating both the pet and the entire indoor and outdoor environment simultaneously.",
    identification: [
      "Dark reddish-brown, wingless, about 1/8 inch long with a laterally flattened body",
      "Powerful hind legs adapted for jumping up to 150 times their body length",
      "Leave small dark droppings (flea dirt) on pet bedding that turn red when wet",
      "Bites appear as small red, itchy bumps, often around ankles and lower legs on humans",
    ],
    lifecycle:
      "Adult fleas begin feeding within minutes of finding a host and start laying eggs within 24 to 48 hours. Eggs fall into carpets and cracks, hatching into larvae in 2 to 14 days. Larvae spin cocoons and pupate for 1 to 2 weeks, though pupae can remain dormant for up to a year waiting for vibration or warmth signals from a potential host.",
    risks: [
      "Cause allergic dermatitis in pets and humans, leading to intense itching and hair loss",
      "Transmit tapeworms to pets and occasionally to children",
      "Heavy infestations can cause anemia in young, old, or small pets",
      "Carry and transmit murine typhus and other bacterial diseases",
    ],
    imageUrl: "/images/pests/fleas.jpg",
    relatedServiceSlug: "tick-flea-treatment",
  },
  {
    slug: "ticks",
    commonName: "Ticks",
    scientificName: "Ixodes spp.",
    description:
      "Ticks are blood-feeding arachnids that pose serious health risks to Orange County residents, their pets, and outdoor enthusiasts. Several tick species are found in the region, including the western black-legged tick, the Pacific Coast tick, and the brown dog tick. Ticks are most commonly encountered in brushy areas, hiking trails, and tall grass, but they can also be brought into homes on pets and clothing. They attach to hosts for extended feeding periods lasting several days, during which they can transmit dangerous pathogens. Tick prevention is essential for families who spend time outdoors, especially in the canyons and open spaces common throughout Orange County.",
    identification: [
      "Small, flat, oval-shaped arachnids, 1/8 to 1/4 inch before feeding",
      "Eight legs (as arachnids, not insects), with a hard or soft body depending on species",
      "Engorged ticks swell dramatically, becoming gray or blue-gray and up to 1/2 inch",
      "Commonly found attached to skin, scalp, behind ears, or in warm body folds",
    ],
    lifecycle:
      "Ticks undergo four life stages: egg, larva, nymph, and adult. Most species require a blood meal at each stage before molting to the next. The full lifecycle can take 2 to 3 years depending on species and environmental conditions. Females lay thousands of eggs after their final blood meal before dying.",
    risks: [
      "Transmit Lyme disease, Rocky Mountain spotted fever, and anaplasmosis",
      "Can cause tick paralysis from neurotoxins in saliva during prolonged feeding",
      "Difficult to detect due to small size and painless bites",
      "Pose year-round risk in Southern California's mild climate",
    ],
    imageUrl: "/images/pests/ticks.jpg",
    relatedServiceSlug: "tick-flea-treatment",
  },
  {
    slug: "raccoons",
    commonName: "Raccoons",
    scientificName: "Procyon lotor",
    description:
      "Raccoons are highly adaptable, intelligent mammals that have become common nuisance wildlife throughout Orange County neighborhoods. Easily recognized by their distinctive black mask and ringed tail, raccoons are nocturnal omnivores that raid garbage cans, pet food bowls, and fruit trees. They frequently den in attics, crawl spaces, chimneys, and under decks, causing significant damage to insulation, ductwork, and roofing materials. Raccoon droppings can harbor roundworm eggs that are dangerous to humans and pets. These strong animals can tear through soffit material, roof vents, and screen covers to access shelter. Professional trapping and exclusion is the safest and most humane approach.",
    identification: [
      "Stocky body, 24 to 38 inches long including tail, weighing 10 to 30 pounds",
      "Distinctive black facial mask and bushy tail with 4 to 7 dark rings",
      "Grayish-brown dense fur with dexterous front paws",
      "Tracks show five toes on both front and hind feet, resembling small handprints",
      "Nocturnal; loud thumping, scratching, or chittering sounds from attics at night",
    ],
    lifecycle:
      "Raccoons mate in late winter, with females giving birth to 2 to 5 kits in spring after a 63-day gestation period. Kits stay with their mother for about a year, learning to forage and climb. Raccoons reach sexual maturity at about one year of age. In urban environments, they can live 2 to 3 years on average.",
    risks: [
      "Carry rabies, distemper, and raccoon roundworm (Baylisascaris) dangerous to humans",
      "Cause extensive damage to attics, insulation, roofing, and ductwork",
      "Contaminate attic spaces with urine and feces requiring professional cleanup",
      "Can be aggressive when cornered, especially mothers protecting kits",
    ],
    imageUrl: "/images/pests/raccoons.jpg",
    relatedServiceSlug: "wildlife-trapping",
  },
  {
    slug: "opossums",
    commonName: "Opossums",
    scientificName: "Didelphis virginiana",
    description:
      "Opossums are North America's only marsupial and are frequently encountered in Orange County yards, garages, and under structures. These nocturnal scavengers are generally non-aggressive and are actually beneficial because they eat ticks, snails, and rodents. However, opossums become a nuisance when they den under porches, in crawl spaces, or inside garages, leaving droppings and creating odor issues. They can also damage gardens, knock over trash cans, and steal pet food. While opossums rarely carry rabies due to their low body temperature, they can host fleas, ticks, and other parasites. Humane trapping and exclusion is the recommended approach for removal.",
    identification: [
      "Gray to white coarse fur, pointed white face, 24 to 33 inches long including tail",
      "Hairless, prehensile tail and small rounded ears, often with dark tips",
      "About the size of a large house cat, weighing 4 to 14 pounds",
      "Nocturnal; often seen waddling slowly through yards or along fences at night",
    ],
    lifecycle:
      "Opossums have a very short 12-to-13-day gestation period, after which tiny, undeveloped young crawl into the mother's pouch. Litters average 6 to 9 joeys, though up to 20 may be born. Young remain in the pouch for about 2 months, then ride on the mother's back for several weeks. Opossums live only 1 to 2 years in the wild.",
    risks: [
      "Leave droppings and urine that create unsanitary conditions and odors",
      "Carry fleas, ticks, mites, and leptospirosis that can affect pets and people",
      "Damage insulation, ductwork, and wiring when denning in crawl spaces or attics",
      "Can become defensive when cornered, displaying teeth and hissing",
    ],
    imageUrl: "/images/pests/opossums.jpg",
    relatedServiceSlug: "wildlife-trapping",
  },
  {
    slug: "squirrels",
    commonName: "Squirrels",
    scientificName: "Sciurus spp.",
    description:
      "Tree squirrels, particularly the eastern fox squirrel, are common nuisance wildlife in Orange County neighborhoods with mature trees. While squirrels are entertaining to watch in parks, they become serious pests when they enter attics, soffits, and wall voids. Squirrels gnaw constantly to maintain their ever-growing teeth, chewing through wood, plastic, and electrical wiring. They create entry holes in fascia boards, roof vents, and construction gaps, then build large nests of leaves and insulation inside attics. Squirrel activity is loudest in early morning, and their presence is often accompanied by scattered droppings and chewed materials. Professional exclusion combined with trapping is needed for lasting control.",
    identification: [
      "Bushy tail, gray or reddish-brown fur, 16 to 20 inches long including tail",
      "Active during the day, especially early morning and late afternoon",
      "Loud scurrying, scratching, and rolling sounds in attics and walls during daytime",
      "Chewed holes in fascia boards, roof vents, or soffits, typically 2 to 3 inches wide",
      "Droppings are small, oblong pellets similar to but smaller than rat droppings",
    ],
    lifecycle:
      "Squirrels typically have two breeding seasons per year, in late winter and midsummer. After a 44-day gestation, females give birth to 2 to 4 kits in a nest. Young squirrels are weaned at about 10 weeks and become independent shortly after. They reach sexual maturity at about 10 to 12 months and can live 5 to 10 years in suburban environments.",
    risks: [
      "Gnaw electrical wiring, creating serious fire hazards in attics and walls",
      "Damage roofing materials, fascia boards, and attic insulation",
      "Create entry points that allow rain, other pests, and wildlife to enter the structure",
      "Accumulate nesting material and droppings that require professional attic cleanup",
    ],
    imageUrl: "/images/pests/squirrels.jpg",
    relatedServiceSlug: "wildlife-trapping",
  },
];
