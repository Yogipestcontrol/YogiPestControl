export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  content: {
    overview: string;
    signs: string[];
    risks: string[];
    process: string[];
    prevention: string[];
  };
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortDesc: "Rats, mice & rodent removal",
    metaTitle: "Rodent Control in Orange County, CA",
    metaDescription: "Professional rodent control services in Orange County. Expert rat and mouse removal, trapping, and exclusion. Same-day service. Call 714-323-8262.",
    heroHeadline: "Professional Rodent Control in Orange County",
    heroSubtext: "Expert rat and mouse removal with thorough inspection, trapping, and exclusion services. We eliminate infestations and prevent future problems.",
    content: {
      overview: "Orange County's mild climate and dense suburban development make it a hotspot for rodent activity year-round. Roof rats, Norway rats, and house mice commonly invade homes through gaps as small as a quarter. At Yogi's Pest Control, we provide comprehensive rodent control that goes beyond basic trapping — we identify entry points, eliminate the infestation, and seal your home to prevent re-entry.",
      signs: [
        "Droppings found along walls, in cabinets, or near food sources",
        "Gnaw marks on wood, wires, or food packaging",
        "Scratching or scurrying sounds in walls, ceilings, or attics",
        "Grease marks or rub marks along baseboards and walls",
        "Nests made of shredded paper, fabric, or insulation",
        "Unusual pet behavior — dogs or cats fixating on walls or cabinets",
      ],
      risks: [
        "Disease transmission including hantavirus, salmonella, and leptospirosis",
        "Electrical fire hazards from gnawed wiring",
        "Structural damage to insulation, drywall, and wood framing",
        "Contamination of food supplies and cooking surfaces",
        "Allergen introduction through droppings and urine",
      ],
      process: [
        "Comprehensive inspection of interior, exterior, attic, and crawl spaces",
        "Identification of species, entry points, and nesting locations",
        "Strategic placement of traps and monitoring stations",
        "Exclusion repairs — sealing gaps, vents, and entry points",
        "Attic cleanup and sanitation if contaminated",
        "Follow-up inspection to ensure complete elimination",
      ],
      prevention: [
        "Seal all gaps and cracks larger than 1/4 inch around your home's exterior",
        "Keep food stored in airtight containers",
        "Remove outdoor food sources like bird feeders and fallen fruit",
        "Trim tree branches at least 4 feet from your roofline",
        "Keep garbage in sealed bins and dispose of regularly",
        "Schedule quarterly pest inspections",
      ],
    },
    faqs: [
      { question: "How much does rodent control cost in Orange County?", answer: "Rodent control in Orange County typically ranges from $150 to $500 depending on the severity of the infestation and the size of your property. We offer free inspections so you know exactly what you're dealing with before committing to treatment." },
      { question: "How long does rodent removal take?", answer: "Most rodent infestations can be resolved within 1-2 weeks. The initial trapping and exclusion work is done in the first visit, with follow-up visits to remove traps and verify elimination. Severe infestations may require additional time." },
      { question: "Are your rodent control methods safe for pets?", answer: "Yes. We use tamper-resistant bait stations and snap traps that are placed in areas inaccessible to pets and children. We never use loose poison that could harm your family or animals." },
      { question: "What's the difference between rats and mice?", answer: "Rats are larger (up to 18 inches including tail), leave larger droppings, and cause more structural damage. Mice are smaller (up to 7 inches), reproduce faster, and can squeeze through tiny gaps. Both require different treatment approaches." },
    ],
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    shortDesc: "Complete roach elimination",
    metaTitle: "Cockroach Exterminator in Orange County, CA",
    metaDescription: "Professional cockroach control in Orange County. German, American & Oriental roach elimination for homes and businesses. Same-day service. Call 714-323-8262.",
    heroHeadline: "Expert Cockroach Control in Orange County",
    heroSubtext: "Targeted treatments to eliminate cockroach infestations quickly and safely. Our experts handle infestations in kitchens, offices, and commercial spaces.",
    content: {
      overview: "Cockroaches are among the most resilient pests in Orange County, thriving in the warm climate and finding easy access to food and water in residential and commercial properties. German cockroaches, American cockroaches, and Oriental cockroaches are the most common species in OC. At Yogi's Pest Control, we use targeted gel baits, residual treatments, and integrated pest management to eliminate roaches at the source.",
      signs: [
        "Live roaches spotted during daytime — indicates a large infestation",
        "Small dark droppings resembling coffee grounds or black pepper",
        "Musty or oily odor in kitchen, bathroom, or storage areas",
        "Egg casings (oothecae) found behind appliances or in cabinets",
        "Smear marks along walls or countertops where roaches travel",
      ],
      risks: [
        "Trigger asthma and allergic reactions, especially in children",
        "Spread bacteria including E. coli and Salmonella",
        "Contaminate food preparation surfaces and stored food",
        "Rapid reproduction — a single pair can produce thousands in a year",
      ],
      process: [
        "Thorough inspection of kitchen, bathrooms, and common harborage areas",
        "Species identification to determine the most effective treatment",
        "Application of targeted gel baits in cracks, crevices, and nesting areas",
        "Residual barrier treatment around entry points",
        "Monitoring stations placed to track activity levels",
        "Follow-up treatment within 2 weeks to address any remaining population",
      ],
      prevention: [
        "Fix all water leaks — cockroaches need moisture to survive",
        "Keep kitchen surfaces clean and free of food debris",
        "Store food in sealed containers",
        "Take out trash regularly and use bins with tight lids",
        "Seal cracks around pipes, cabinets, and baseboards",
        "Reduce clutter in storage areas where roaches hide",
      ],
    },
    faqs: [
      { question: "How do I know if I have a cockroach problem?", answer: "If you see even one cockroach during the day, it likely means there are many more hiding. Other signs include droppings, egg casings, a musty smell, or finding roaches in drawers, under sinks, or behind appliances." },
      { question: "How quickly can you get rid of cockroaches?", answer: "Most cockroach infestations show significant improvement within 1-2 weeks of treatment. Complete elimination of German cockroaches may take 2-4 weeks with follow-up treatments to break the breeding cycle." },
      { question: "Are cockroach treatments safe for my family?", answer: "Yes. We use targeted gel baits and low-toxicity treatments placed in areas away from food preparation surfaces and out of reach of children and pets. Our products are EPA-registered and applied by licensed professionals." },
    ],
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    shortDesc: "All ant species treatment",
    metaTitle: "Ant Exterminator in Orange County, CA",
    metaDescription: "Professional ant control in Orange County. Argentine ants, fire ants, carpenter ants — fast, effective treatment. Same-day service. Call 714-323-8262.",
    heroHeadline: "Effective Ant Control in Orange County",
    heroSubtext: "From sugar ants to fire ants, we provide fast, reliable, and effective ant extermination and prevention methods to keep your home completely pest-free.",
    content: {
      overview: "Ants are the most common household pest in Orange County. Argentine ants, fire ants, and carpenter ants regularly invade homes seeking food and water, especially during warm months and after rainfall. At Yogi's Pest Control, we identify the species, locate the colony, and apply targeted treatments that eliminate the entire colony — not just the ants you see.",
      signs: [
        "Trails of ants marching along walls, countertops, or floors",
        "Small piles of dirt or sand near foundations or walkways",
        "Winged ants (swarmers) inside your home",
        "Ants congregating around pet food, sugar, or water sources",
        "Sawdust-like debris near wood — may indicate carpenter ants",
      ],
      risks: [
        "Fire ants deliver painful stings that can cause allergic reactions",
        "Carpenter ants can cause structural damage by tunneling through wood",
        "Food contamination from ants traveling through unsanitary areas",
        "Rapid colony growth — some colonies have multiple queens and millions of workers",
      ],
      process: [
        "Identify the ant species to determine the most effective treatment",
        "Locate the colony and main entry points into your home",
        "Apply targeted bait that worker ants carry back to the colony",
        "Perimeter treatment around your home's foundation",
        "Seal entry points where ants are entering",
        "Follow-up inspection to ensure the colony is eliminated",
      ],
      prevention: [
        "Clean up food spills and crumbs immediately",
        "Store sweet and greasy foods in sealed containers",
        "Fix leaky pipes and faucets — ants seek water",
        "Trim vegetation away from your home's exterior",
        "Seal cracks and gaps around windows, doors, and foundations",
        "Keep firewood and mulch away from your foundation",
      ],
    },
    faqs: [
      { question: "Why do ants keep coming back?", answer: "Argentine ants, the most common species in Orange County, form supercolonies with multiple queens. Killing the ants you see does nothing — the colony simply sends more. Effective treatment requires bait that reaches the queens to collapse the entire colony." },
      { question: "How much does ant control cost?", answer: "Ant control in Orange County typically ranges from $100 to $300 for residential treatment. The cost depends on the species, severity, and property size. We provide free inspections and transparent pricing before any work begins." },
      { question: "Are fire ants common in Orange County?", answer: "Yes. Red imported fire ants are increasingly common in Orange County, especially in yards, parks, and near irrigation. Their stings are painful and can cause serious allergic reactions. Professional treatment is strongly recommended." },
    ],
  },
  {
    slug: "wasp-control",
    name: "Wasp Control",
    shortDesc: "Safe wasp nest removal",
    metaTitle: "Wasp Removal in Orange County, CA",
    metaDescription: "Safe wasp nest removal in Orange County. Professional-grade treatments for paper wasps, yellow jackets, and mud daubers. Call 714-323-8262.",
    heroHeadline: "Safe Wasp Control in Orange County",
    heroSubtext: "We safely locate and remove wasp nests around your property using professional-grade treatments that ensure long-term protection while keeping your family and pets safe.",
    content: {
      overview: "Wasps are a common concern for Orange County homeowners, especially during spring and summer when colonies are most active. Paper wasps, yellow jackets, and mud daubers frequently build nests under eaves, in attics, around decks, and in ground cavities. At Yogi's Pest Control, we safely remove wasp nests and apply preventive treatments to discourage future nesting.",
      signs: ["Visible nests under eaves, in bushes, or around outdoor structures", "Increased wasp activity around food, trash, or outdoor gatherings", "Wasps entering and exiting a specific area repeatedly", "Buzzing sounds coming from walls, eaves, or ground holes"],
      risks: ["Painful stings that can cause severe allergic reactions (anaphylaxis)", "Aggressive behavior when nest is disturbed", "Yellow jackets can sting repeatedly, unlike bees", "Ground-nesting wasps are a hazard for children playing in yards"],
      process: ["Identify the wasp species and locate all nests on your property", "Apply professional-grade treatment directly to the nest", "Remove the nest safely once activity has ceased", "Treat surrounding areas to prevent re-nesting", "Seal potential nesting sites where possible"],
      prevention: ["Inspect eaves, decks, and outbuildings regularly in spring", "Keep outdoor food covered during gatherings", "Seal trash cans tightly", "Fill ground holes that could be used for nesting", "Hang wasp deterrent decoys early in the season"],
    },
    faqs: [
      { question: "Is it dangerous to remove a wasp nest myself?", answer: "Yes, it can be very dangerous. Disturbing a wasp nest can trigger aggressive swarming behavior, resulting in multiple stings. This is especially dangerous for people with allergies. Always call a professional for safe removal." },
      { question: "When is the best time to remove a wasp nest?", answer: "The best time is early spring when colonies are small and less aggressive, or at dusk/dawn when wasps are less active. However, professional treatment can safely be done any time." },
    ],
  },
  {
    slug: "bee-removal",
    name: "Bee Removal",
    shortDesc: "Humane bee relocation",
    metaTitle: "Bee Removal in Orange County, CA",
    metaDescription: "Humane bee removal and relocation in Orange County. We protect your home and the local ecosystem. Licensed professionals. Call 714-323-8262.",
    heroHeadline: "Humane Bee Removal in Orange County",
    heroSubtext: "Our humane bee removal service carefully relocates bee colonies without harm whenever possible, protecting both your home and the local ecosystem.",
    content: {
      overview: "Bees play a vital role in our ecosystem, but when they build hives in or around your home, they can become a safety concern. Honeybees, carpenter bees, and Africanized bees are all found in Orange County. At Yogi's Pest Control, we prioritize humane live removal and relocation whenever possible, working with local beekeepers to give colonies a new home.",
      signs: ["Large number of bees swarming or clustering on your property", "Bees entering and exiting a wall, chimney, or soffit", "Visible honeycomb or wax on exterior surfaces", "Buzzing sounds coming from inside walls or ceilings", "Honey stains appearing on interior walls or ceilings"],
      risks: ["Stings can cause severe allergic reactions", "Structural damage from honeycomb buildup inside walls", "Honey attracts other pests like ants, cockroaches, and rodents", "Africanized bees are more aggressive when disturbed"],
      process: ["Assessment of hive location, size, and bee species", "Humane live removal and relocation to a local beekeeper when possible", "Complete removal of honeycomb to prevent attracting other pests", "Repair and seal the entry point to prevent future colonization", "Cleanup of any honey or wax residue"],
      prevention: ["Seal cracks and holes in exterior walls, eaves, and soffits", "Cover or cap unused chimneys and vents", "Fill holes in the ground that could attract ground-nesting bees", "Remove old equipment, furniture, or debris where bees could nest"],
    },
    faqs: [
      { question: "Do you kill the bees?", answer: "We prioritize humane live removal and relocation whenever possible. We work with local beekeepers to rehome colonies. In some cases where the hive is inaccessible or involves aggressive Africanized bees, other methods may be necessary for safety." },
      { question: "How much does bee removal cost?", answer: "Bee removal in Orange County typically ranges from $150 to $800+ depending on hive location, size, and accessibility. Hives inside walls or structures require more extensive work. We provide free assessments." },
    ],
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    shortDesc: "Yard & outdoor treatment",
    metaTitle: "Mosquito Control in Orange County, CA",
    metaDescription: "Professional mosquito control for Orange County yards and outdoor spaces. Reduce breeding areas with safe treatments. Call 714-323-8262.",
    heroHeadline: "Mosquito Control for Orange County Properties",
    heroSubtext: "Protect your yard and outdoor spaces with our mosquito control services. We reduce breeding areas and use safe treatments to keep your property comfortable and bite-free.",
    content: {
      overview: "Orange County's warm climate and proximity to water features make it a prime habitat for mosquitoes. Species like the Aedes aegypti (Asian tiger mosquito) and Culex pipiens thrive in standing water found in yards, planters, and gutters. At Yogi's Pest Control, we provide comprehensive mosquito control that targets both adult mosquitoes and their breeding sites.",
      signs: ["Persistent mosquito bites, especially during dawn and dusk", "Mosquitoes swarming around doorways or patio areas", "Standing water in planters, gutters, or low spots in the yard", "Mosquito larvae visible in stagnant water (tiny wriggling organisms)"],
      risks: ["Transmission of West Nile virus, Zika virus, and dengue fever", "Painful and itchy bites that can become infected", "Reduced enjoyment of outdoor spaces", "Risk to pets — mosquitoes can transmit heartworm to dogs"],
      process: ["Property survey to identify breeding sites and resting areas", "Elimination of standing water sources", "Application of larvicide to water features that can't be drained", "Barrier spray treatment to vegetation, fences, and structures", "Installation of monitoring traps if needed", "Monthly maintenance program during peak season"],
      prevention: ["Eliminate all standing water on your property", "Clean gutters and downspouts regularly", "Change birdbath water weekly", "Repair window and door screens", "Keep pools properly chlorinated and filtered", "Use fans on patios — mosquitoes are weak fliers"],
    },
    faqs: [
      { question: "How often do I need mosquito treatment?", answer: "During peak season (May-October in Orange County), monthly treatments provide the best protection. The barrier spray typically lasts 3-4 weeks before needing reapplication." },
      { question: "Is mosquito spray safe for kids and pets?", answer: "Yes. We use EPA-registered products that are safe for children and pets once dried, which typically takes 30-60 minutes. We recommend staying indoors during application." },
    ],
  },
  {
    slug: "fly-control",
    name: "Fly Control",
    shortDesc: "Indoor & outdoor fly solutions",
    metaTitle: "Fly Control in Orange County, CA",
    metaDescription: "Professional fly control for Orange County homes and businesses. House flies, fruit flies, drain flies eliminated. Call 714-323-8262.",
    heroHeadline: "Professional Fly Control in Orange County",
    heroSubtext: "Our fly control solutions target both the source and the infestation, keeping your indoor and outdoor spaces clean, sanitary, and completely pest-free.",
    content: {
      overview: "Flies are more than a nuisance — they're a health hazard. House flies, fruit flies, and drain flies are common in Orange County homes and restaurants. Flies carry and spread bacteria from garbage, animal waste, and decaying matter to your food and surfaces. At Yogi's Pest Control, we identify the source, eliminate breeding sites, and apply targeted treatments.",
      signs: ["Large numbers of flies congregating indoors", "Fruit flies hovering around produce or drains", "Maggots found near garbage or organic waste", "Flies appearing from drain or plumbing openings"],
      risks: ["Spread over 100 pathogens including E. coli and Salmonella", "Contaminate food and preparation surfaces", "Can trigger health code violations in restaurants", "Indicate underlying sanitation issues"],
      process: ["Identify fly species and breeding sources", "Eliminate breeding sites and organic matter buildup", "Apply targeted treatments to resting areas", "Install UV light traps for commercial properties", "Drain treatment for drain fly infestations", "Ongoing monitoring and maintenance"],
      prevention: ["Keep all food covered or refrigerated", "Clean drains weekly with enzymatic cleaners", "Take out trash daily and use bins with tight lids", "Clean pet areas and waste immediately", "Install or repair window screens", "Don't leave ripe fruit on countertops"],
    },
    faqs: [
      { question: "How do I get rid of fruit flies?", answer: "Fruit flies breed in overripe produce, drains, and moist organic matter. Remove the breeding source, clean drains with enzymatic cleaner, and set traps. For persistent infestations, professional treatment targets the root cause." },
    ],
  },
  {
    slug: "spider-control",
    name: "Spider Control",
    shortDesc: "Common & venomous spiders",
    metaTitle: "Spider Exterminator in Orange County, CA",
    metaDescription: "Spider control in Orange County including black widows and brown recluses. Web removal, treatment, and prevention. Call 714-323-8262.",
    heroHeadline: "Spider Control for Orange County Homes",
    heroSubtext: "We remove webs, treat hiding spots, and prevent re-infestation, keeping your property safe and free from both common and venomous spiders.",
    content: {
      overview: "Orange County is home to both harmless and venomous spiders. Black widows and brown recluses pose genuine health risks, while common house spiders, cellar spiders, and wolf spiders are nuisances. At Yogi's Pest Control, we provide thorough spider control that includes web removal, targeted treatment of harborage areas, and prevention strategies.",
      signs: ["Frequent web building in corners, garages, and outdoor areas", "Sighting of black widows (shiny black with red hourglass marking)", "Spider egg sacs in sheltered areas", "Large numbers of spiders in or around the home"],
      risks: ["Black widow bites cause severe pain, muscle cramps, and require medical attention", "Brown recluse bites can cause tissue necrosis", "Spider presence often indicates other pest populations (their food source)", "Psychological distress from arachnophobia"],
      process: ["Inspect interior and exterior for spider activity and species", "Remove all visible webs and egg sacs", "Apply residual treatment to harborage areas and entry points", "Treat exterior perimeter including eaves, window frames, and foundation", "Address underlying pest population that spiders are feeding on"],
      prevention: ["Reduce outdoor lighting that attracts insects (spider food)", "Keep vegetation and woodpiles away from the home", "Seal cracks around windows, doors, and the foundation", "Reduce clutter in garages, basements, and storage areas", "Shake out shoes, gloves, and clothing stored in garages"],
    },
    faqs: [
      { question: "Are black widows common in Orange County?", answer: "Yes. Black widows are common throughout Orange County, especially in garages, outdoor furniture, woodpiles, and meter boxes. They prefer dark, undisturbed areas. Professional treatment is recommended if you spot them." },
    ],
  },
  {
    slug: "tick-flea-treatment",
    name: "Tick & Flea Treatment",
    shortDesc: "Home & pet protection",
    metaTitle: "Flea & Tick Treatment in Orange County, CA",
    metaDescription: "Professional flea and tick treatment for Orange County homes. Protect your family and pets with effective elimination. Call 714-323-8262.",
    heroHeadline: "Flea & Tick Treatment in Orange County",
    heroSubtext: "Protect your family and pets with our specialized flea and tick treatments that eliminate infestations inside and outside your home.",
    content: {
      overview: "Fleas and ticks are a persistent problem in Orange County, especially for homes with pets. These parasites reproduce rapidly — a single female flea can lay up to 50 eggs per day. At Yogi's Pest Control, we provide comprehensive treatment that targets all life stages (eggs, larvae, pupae, and adults) to break the reproduction cycle completely.",
      signs: ["Pets scratching excessively or losing fur", "Flea dirt (tiny black specks) on pet bedding or furniture", "Tiny jumping insects on carpet, furniture, or pet fur", "Tick attached to a pet or family member", "Red, itchy bite marks on ankles and legs"],
      risks: ["Fleas transmit tapeworms to pets and occasionally humans", "Ticks carry Lyme disease, Rocky Mountain spotted fever, and other illnesses", "Severe flea infestations cause anemia in pets", "Allergic reactions to flea bites (flea allergy dermatitis)"],
      process: ["Inspect home interior, yard, and pet resting areas", "Identify species and severity of infestation", "Treat interior with growth regulators that break the reproduction cycle", "Treat exterior yard areas where fleas and ticks harbor", "Provide guidance on pet treatment coordination with your veterinarian", "Follow-up treatment in 2-3 weeks to catch newly hatched fleas"],
      prevention: ["Keep pets on year-round flea and tick prevention from your vet", "Vacuum frequently, especially pet resting areas", "Wash pet bedding weekly in hot water", "Keep grass mowed and yard debris cleared", "Avoid walking pets through tall grass or wooded areas", "Check pets for ticks after outdoor activities"],
    },
    faqs: [
      { question: "How long does flea treatment take to work?", answer: "You'll see a significant reduction in flea activity within 24-48 hours of treatment. However, complete elimination takes 2-4 weeks because flea pupae are resistant to treatment and must emerge before they can be killed. A follow-up treatment ensures complete eradication." },
    ],
  },
  {
    slug: "exclusion-repairs",
    name: "Exclusion Repairs",
    shortDesc: "Seal entry points",
    metaTitle: "Pest Exclusion Services in Orange County, CA",
    metaDescription: "Pest exclusion and sealing services in Orange County. Prevent rodents, wildlife, and insects from entering your home. Call 714-323-8262.",
    heroHeadline: "Pest Exclusion Services in Orange County",
    heroSubtext: "Prevent future pest problems with our exclusion services. We seal cracks, vents, and gaps to keep rodents, wildlife, and insects out of your property for good.",
    content: {
      overview: "The most effective pest control is prevention. Exclusion work involves identifying and sealing every potential entry point that pests use to enter your home. At Yogi's Pest Control, we perform thorough exclusion repairs using professional-grade materials that keep rodents, wildlife, and insects out permanently. This is the long-term solution that stops infestations before they start.",
      signs: ["Recurring pest problems despite treatment", "Visible gaps around pipes, vents, or utility lines", "Daylight visible through gaps under doors or around windows", "Damaged weather stripping or door sweeps", "Open soffit vents or damaged roof screens"],
      risks: ["Without exclusion, pests will continue to re-enter after treatment", "Gaps allow moisture intrusion that can cause mold", "Open entry points reduce energy efficiency", "Wildlife can cause significant damage if they gain access to attics"],
      process: ["Complete exterior inspection identifying all potential entry points", "Document findings with photos and detailed report", "Seal gaps with appropriate materials (steel mesh, caulk, expanding foam, metal flashing)", "Install or replace vent screens and chimney caps", "Replace damaged weather stripping and door sweeps", "Final inspection to verify all entry points are sealed"],
      prevention: ["Schedule annual exclusion inspections", "Check weather stripping and door sweeps seasonally", "Monitor roof vents and soffit areas for damage", "Address any new gaps from home renovations or settling"],
    },
    faqs: [
      { question: "What materials do you use for exclusion?", answer: "We use professional-grade materials including galvanized steel mesh, copper mesh, commercial-grade sealants, metal flashing, and hardware cloth. These materials are chosen based on the specific entry point and the type of pest being excluded." },
    ],
  },
  {
    slug: "attic-cleanout",
    name: "Attic Cleanouts",
    shortDesc: "Waste removal & sanitation",
    metaTitle: "Attic Cleanout & Pest Damage Repair in Orange County, CA",
    metaDescription: "Professional attic cleanout and sanitation in Orange County. Remove pest waste, contaminated insulation, and restore your attic. Call 714-323-8262.",
    heroHeadline: "Attic Cleanout & Restoration in Orange County",
    heroSubtext: "Our attic cleanout service removes pest waste and contamination, leaving your space clean, fresh, and fully protected from future infestations.",
    content: {
      overview: "After a rodent or wildlife infestation, your attic can be left with contaminated insulation, droppings, urine, and nesting materials. This creates health hazards and attracts new pests. At Yogi's Pest Control, we provide complete attic cleanout and restoration services — removing contaminated materials, sanitizing the space, and installing new insulation.",
      signs: ["Foul odor coming from the attic", "Stained or compressed insulation", "Visible droppings, urine stains, or nesting materials", "Damaged ductwork or wiring in the attic", "Increased allergy symptoms in the home"],
      risks: ["Airborne pathogens from rodent droppings (hantavirus)", "Contaminated insulation loses R-value, increasing energy costs", "Damaged wiring creates fire hazards", "Pest waste attracts new infestations"],
      process: ["Full attic inspection and contamination assessment", "Remove all contaminated insulation and debris", "Vacuum and remove all droppings and nesting materials", "Sanitize and deodorize the entire attic space", "Repair any damaged ductwork or wiring", "Install new insulation to restore energy efficiency"],
      prevention: ["Address any pest infestation immediately", "Schedule regular attic inspections", "Ensure proper exclusion to prevent re-entry", "Maintain adequate attic ventilation"],
    },
    faqs: [
      { question: "Is attic cleanout covered by insurance?", answer: "Many homeowner's insurance policies cover attic cleanout and insulation replacement when caused by pest damage. We provide detailed documentation and can work with your insurance adjuster to support your claim." },
    ],
  },
  {
    slug: "bed-bug-treatment",
    name: "Bed Bug Treatment",
    shortDesc: "Complete bed bug eradication",
    metaTitle: "Bed Bug Treatment in Orange County, CA",
    metaDescription: "Discreet, thorough bed bug treatment for Orange County homes, apartments, and hotels. Complete eradication guaranteed. Call 714-323-8262.",
    heroHeadline: "Bed Bug Treatment in Orange County",
    heroSubtext: "We offer discreet and thorough bed bug treatments for homes, apartments, and hotels, ensuring these pests are completely eradicated.",
    content: {
      overview: "Bed bugs are excellent hitchhikers that can infest any home regardless of cleanliness. They hide in mattress seams, furniture joints, and electrical outlets, emerging at night to feed. At Yogi's Pest Control, we provide thorough bed bug treatment using proven methods including residual treatments, dust applications, and mattress encasements for complete eradication.",
      signs: ["Waking up with itchy, red bite marks in a line or cluster", "Small blood stains on sheets or pillowcases", "Dark spots (bed bug excrement) on mattress seams", "Tiny white eggs or shed skins in mattress crevices", "A sweet, musty odor in the bedroom"],
      risks: ["Bed bug bites cause itching, discomfort, and sleep disruption", "Secondary infections from scratching bites", "Psychological effects including anxiety and insomnia", "Rapid spread to other rooms and neighboring units"],
      process: ["Thorough inspection of bedrooms, furniture, and common hiding spots", "Identification of infestation severity and spread", "Treatment of all affected areas with residual products and dust", "Mattress and box spring encasement installation", "Treatment of baseboards, furniture joints, and outlets", "Follow-up treatment in 2 weeks to eliminate newly hatched bugs"],
      prevention: ["Inspect hotel rooms before unpacking when traveling", "Keep luggage on hard surfaces, not beds or carpet", "Inspect secondhand furniture before bringing it home", "Use mattress encasements on all beds", "Reduce clutter around beds and bedroom furniture"],
    },
    faqs: [
      { question: "How did I get bed bugs?", answer: "Bed bugs are hitchhikers — they travel on luggage, clothing, used furniture, and even through shared walls in apartments. Having bed bugs is not a sign of poor hygiene. Anyone can get them." },
      { question: "Can I treat bed bugs myself?", answer: "DIY treatments rarely eliminate bed bugs completely because they hide in so many hard-to-reach places. Over-the-counter sprays can actually scatter them, making the problem worse. Professional treatment is the most effective and cost-efficient solution." },
    ],
  },
  {
    slug: "wildlife-trapping",
    name: "Wildlife Trapping",
    shortDesc: "Humane wildlife capture",
    metaTitle: "Wildlife Removal in Orange County, CA",
    metaDescription: "Humane wildlife trapping and removal in Orange County. Raccoons, opossums, squirrels safely captured and relocated. Call 714-323-8262.",
    heroHeadline: "Humane Wildlife Removal in Orange County",
    heroSubtext: "We humanely capture and remove nuisance wildlife like raccoons, opossums, and squirrels, keeping your home safe and your property protected.",
    content: {
      overview: "Orange County's mix of suburban development and natural canyon areas brings wildlife into close contact with homes. Raccoons, opossums, squirrels, and skunks commonly enter attics, garages, and crawl spaces. At Yogi's Pest Control, we use humane trapping methods to safely capture and relocate nuisance wildlife in compliance with California wildlife regulations.",
      signs: ["Loud noises in the attic, especially at night (raccoons, opossums) or morning (squirrels)", "Damage to roofline, soffits, or attic vents", "Overturned trash cans or scattered garbage", "Animal droppings on the roof, in the attic, or around the property", "Strong odor from a den or nesting area"],
      risks: ["Raccoons carry rabies and raccoon roundworm", "Structural damage to roofing, insulation, and wiring", "Flea and tick introduction into your home", "Aggressive behavior when cornered, especially mothers with young", "Fire hazard from damaged electrical wiring"],
      process: ["Inspection to identify the species, entry points, and den locations", "Humane trap placement in strategic locations", "Daily trap monitoring and animal removal", "Exclusion repairs to prevent re-entry", "Attic cleanout if contaminated", "Ongoing monitoring during trapping period"],
      prevention: ["Secure trash cans with bungee cords or animal-proof lids", "Don't leave pet food outdoors overnight", "Trim tree branches 6+ feet from your roofline", "Install chimney caps and vent screens", "Remove fallen fruit from your yard"],
    },
    faqs: [
      { question: "Is wildlife removal legal in California?", answer: "Yes, but it's regulated. California law requires specific handling for different species. Licensed pest control operators like Yogi's Pest Control are trained in legal and humane wildlife management practices." },
    ],
  },
  {
    slug: "dead-animal-removal",
    name: "Dead Animal Removal",
    shortDesc: "Safe removal & cleanup",
    metaTitle: "Dead Animal Removal in Orange County, CA",
    metaDescription: "Professional dead animal removal and cleanup in Orange County. Odor control, sanitation, and proper disposal. Call 714-323-8262.",
    heroHeadline: "Dead Animal Removal in Orange County",
    heroSubtext: "We safely remove deceased animals from your property, handle full cleanup, control odors, and ensure proper disposal to protect your health and environment.",
    content: {
      overview: "A dead animal in your walls, attic, crawl space, or yard creates a severe odor and health hazard. Decomposition attracts flies, maggots, and other pests, and can release harmful bacteria. At Yogi's Pest Control, we locate and remove dead animals, sanitize the area, and apply deodorizers to eliminate the smell.",
      signs: ["Strong, foul odor that worsens over time", "Increased fly activity inside the home", "Stains appearing on walls or ceilings", "Pets fixating on a specific wall or area"],
      risks: ["Health hazards from bacteria and parasites", "Attracts secondary pest infestations (flies, beetles, maggots)", "Persistent odor that permeates the home", "Potential structural staining"],
      process: ["Locate the deceased animal using odor tracking and thermal imaging if needed", "Carefully remove the animal with proper protective equipment", "Sanitize the affected area with hospital-grade disinfectant", "Apply enzyme-based deodorizer to eliminate remaining odor", "Identify how the animal entered and seal the entry point", "Proper disposal in compliance with local regulations"],
      prevention: ["Maintain exclusion repairs to prevent animals from entering your home", "Address any pest infestation promptly", "Check traps regularly if you have active rodent control", "Keep crawl space access points secured"],
    },
    faqs: [
      { question: "How long will the smell last?", answer: "Without removal, a dead animal smell can last 2-8 weeks depending on the size of the animal and environmental conditions. Professional removal and deodorizing treatment can resolve the odor within 24-48 hours." },
    ],
  },
];
