import type { CityServicePage } from "./local-seo-types";

// City × service pages. Only built where Search Console shows real demand for the pair.
// Each page is written from scratch for its city (geography, housing, yard types, FAQs).
// Prices must stay inside the ranges on /pest-control-cost and the FAQs in services.ts.
export const CITY_SERVICE_PAGES: CityServicePage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Costa Mesa × Mosquito Control
  // ─────────────────────────────────────────────────────────────
  {
    citySlug: "costa-mesa",
    serviceSlug: "mosquito-control",
    metaTitle: "Mosquito Control in Costa Mesa, CA",
    metaDescription:
      "Mosquito control for Costa Mesa yards near the Back Bay and Santa Ana River. One-time treatments $150–$300, monthly plans $100–$175. Call 714-323-8262.",
    h1: "Mosquito Control in Costa Mesa, CA",
    heroSubtext:
      "Yard mosquito treatments for Eastside patios, Mesa Verde backyards and Westside lots, from a licensed operator based next door in Tustin.",
    summary:
      "Yogi's Pest Control treats Costa Mesa yards for mosquitoes by finding and clearing the small water sources they breed in, treating water that can't be dumped, and applying an EPA-registered barrier spray to the shady spots where adults rest. A one-time treatment typically runs $150 to $300, and a monthly plan during the May–October season runs $100 to $175 per month. Inspections are free and we can usually schedule within a day or two, seven days a week.",
    sections: [
      {
        heading: "Why Costa Mesa Has Mosquitoes Between the River and the Back Bay",
        body: [
          "Costa Mesa sits between two large wet areas: the Santa Ana River channel along its western edge, with the Fairview Park and Talbert Nature Preserve open space beside it, and Upper Newport Bay just past the Eastside. Those wetlands and the vernal pools at Fairview Park are real mosquito habitat, and they are monitored and treated by the Orange County Mosquito and Vector Control District, not by private companies.",
          "The mosquitoes that chase you around a Costa Mesa patio in the afternoon usually come from much closer. The Orange County Mosquito and Vector Control District has listed Costa Mesa among the cities where invasive Aedes mosquitoes have been found. These are small black-and-white mosquitoes that breed in containers as small as a bottle cap and stay close to where they hatched, which means the source is often your own yard or the yard next door.",
          "It helps to know which mosquito you are dealing with. Native Culex mosquitoes, the ones most associated with West Nile virus in California, mostly bite from dusk into the night and breed in larger standing water such as catch basins and neglected pools. Invasive Aedes are active during the day, follow you around the yard, and favor ankles and the backs of legs. If you are getting bitten at lunch on the patio, it is almost certainly Aedes, and the fix is close to home.",
        ],
        link: { href: "/areas-we-serve/costa-mesa", label: "Pest control in Costa Mesa" },
      },
      {
        heading: "Where Mosquitoes Breed on Costa Mesa Properties",
        body: [
          "Costa Mesa lots vary a lot from neighborhood to neighborhood, and so do the breeding spots we find. On the Eastside, narrow side yards, potted succulents on small patios, and new ADUs with fresh downspouts and drainage create dozens of small pockets of water. In Mesa Verde and College Park, the bigger backyards add fountains, pond features, pool equipment pads and thick ivy or hedge lines that stay damp and shaded. Apartment and condo courtyards near Harbor Boulevard and Fairview Road tend to have planters, drains and shared landscaping where nobody owns the problem.",
          "During an inspection we walk every side yard and look behind the AC unit, under the deck, and inside anything that can hold a little water. A single forgotten bucket or a clogged downspout can keep supplying new mosquitoes for weeks of warm weather, and on a small Eastside lot that one source can be the whole problem. These are the spots we find most often in Costa Mesa:",
        ],
        bullets: [
          "Saucers under potted plants and succulents on patios and balconies",
          "Air conditioner condensate lines dripping into a low spot",
          "Corrugated downspout extensions and clogged rain gutters",
          "Fountains, birdbaths and small decorative ponds",
          "Pool and spa covers that hold rainwater or sprinkler runoff",
          "Tarps, toys, buckets and kayak or paddleboard storage on the side of the house",
        ],
      },
      {
        heading: "What a Costa Mesa Mosquito Treatment Includes",
        body: [
          "Every visit starts with a walk of the whole property. We tip and scrub containers, because invasive Aedes eggs stick to the inside wall just above the waterline and can survive for months after the water dries up. Water that has to stay, like a fountain or a pond, gets an EPA-registered larvicide applied according to the label. Then we apply a barrier treatment to the places adult mosquitoes rest during the day: the underside of shrubs, ivy on block walls, under decks and stairways, and shaded fence lines.",
          "Treatments are applied according to the product label. We tell you how long to keep people and pets off treated areas, which is usually until the spray has dried, often 30 to 60 minutes. We also point out any breeding sources you can remove yourself between visits, since that does as much good as the spray.",
          "If you have kids or pets, we can schedule the treatment for a time when the yard is empty and walk you through which areas were treated. If you have a vegetable bed or fruit trees, tell us; we keep the barrier treatment on ornamental plants, walls and shaded resting areas, not on anything you plan to eat.",
        ],
        link: { href: "/services/mosquito-control", label: "How our mosquito control service works" },
      },
      {
        heading: "Costa Mesa's Mosquito Season and Treatment Timing",
        body: [
          "Mosquito activity in Orange County runs heaviest from about May through October. In Costa Mesa, the marine layer can make June feel mild, but invasive Aedes keep biting on overcast days, and warm Septembers and Octobers are often the worst stretch of the year for backyard bites. A barrier treatment usually holds for three to four weeks, so most Costa Mesa customers who want protection all season choose monthly visits from late spring into fall.",
          "If you only need relief for one event, such as a backyard party, a one-time treatment a few days before works well. If bites are happening every afternoon, a monthly plan plus removing containers is what actually brings numbers down.",
          "Costa Mesa rarely gets heavy rain, but when it does, check your yard a few days later. Rain fills every saucer, tarp fold and gutter at once, and with Aedes eggs already stuck to those surfaces, a burst of new mosquitoes can follow within a week or two if the weather is warm. Sprinkler overspray and overwatered planters do the same thing on a smaller scale all summer.",
        ],
      },
      {
        heading: "What the Vector Control District Does for Free",
        body: [
          "Costa Mesa residents should know about the Orange County Mosquito and Vector Control District (ocvector.org, 714-971-2421). The district is funded by property taxes and offers free services, including inspections in response to resident requests, reports of neglected green pools, and mosquitofish for ponds and other water on your own property. If a vacant house down the street has a green pool, report it to the district first.",
          "We handle what the district does not: treating your yard, your patio and your shaded landscaping on a regular schedule so you can actually use the space. The two work well together.",
          "When you report to the district, it helps to note when you are being bitten and whether the mosquitoes are small and black with white stripes, since that points to invasive Aedes. When you call us, we will walk the property, show you exactly where the mosquitoes are coming from, and give you a written quote before any work begins.",
        ],
      },
    ],
    pricing: [
      { item: "Mosquito inspection", range: "Free", note: "We find the breeding sites and quote before any work." },
      { item: "One-time yard treatment", range: "$150 – $300", note: "Small Eastside lots and condo patios fall toward the low end." },
      { item: "Monthly mosquito plan (May–October)", range: "$100 – $175/mo", note: "Barrier spray plus breeding-site check every visit." },
      { item: "Pond or fountain larvicide", range: "Included with visit", note: "Applied per label to water that can't be dumped." },
    ],
    faqs: [
      {
        question: "Do the mosquitoes biting me come from Upper Newport Bay or the Santa Ana River?",
        answer:
          "Sometimes, but usually not. Wetland mosquitoes are monitored and treated by the Orange County Mosquito and Vector Control District. The small black-and-white mosquitoes that bite during the day in Costa Mesa backyards are usually invasive Aedes breeding in containers within a block of where you are being bitten.",
      },
      {
        question: "I have a small Eastside patio. Is mosquito treatment worth it?",
        answer:
          "Often yes, and small spaces are at the low end of the $150 to $300 one-time range. On small lots the biggest gains usually come from removing plant saucers, buckets and clogged drains, and a barrier treatment on nearby shrubs and walls cuts down the adults that are left.",
      },
      {
        question: "How much does mosquito control cost in Costa Mesa?",
        answer:
          "A one-time treatment typically costs $150 to $300 depending on yard size and how much vegetation needs to be treated. Monthly service during the May to October season runs $100 to $175 per month. The inspection and quote are free.",
      },
      {
        question: "Can you treat around a koi pond or fountain in Mesa Verde?",
        answer:
          "Yes. We do not spray barrier products into water. Fountains and ponds without fish can get a larvicide applied according to the label, and for ponds with fish we usually recommend asking the vector control district about free mosquitofish while we treat the surrounding plants.",
      },
      {
        question: "How quickly can you come out to Costa Mesa?",
        answer:
          "We are based in Tustin, a short drive from Costa Mesa, and work 7 days a week from 8 AM to 8 PM. Most mosquito inspections can be scheduled within a day or two. Call 714-323-8262.",
      },
    ],
    updated: "2026-10-19",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Garden Grove × Mosquito Control
  // ─────────────────────────────────────────────────────────────
  {
    citySlug: "garden-grove",
    serviceSlug: "mosquito-control",
    metaTitle: "Mosquito Control in Garden Grove, CA",
    metaDescription:
      "Daytime ankle bites in Garden Grove? We treat invasive Aedes breeding sites and resting areas. Yard treatment $150–$300. Free inspection: 714-323-8262.",
    h1: "Mosquito Control in Garden Grove, CA",
    heroSubtext:
      "Invasive daytime-biting mosquitoes have been in Garden Grove since 2015. We find where they breed on your lot and treat where they hide.",
    summary:
      "Yogi's Pest Control controls mosquitoes in Garden Grove by tracking down container breeding sites in gardens, patios and side yards, scrubbing or treating them, and applying an EPA-registered barrier spray where adult mosquitoes rest. Most Garden Grove yards cost $150 to $300 for a one-time treatment, or $100 to $175 per month on a seasonal plan. The inspection is free, and we can typically be out within a day or two.",
    sections: [
      {
        heading: "Garden Grove Was One of the First Cities With Invasive Aedes",
        body: [
          "In 2015, residents in Garden Grove called the Orange County Mosquito and Vector Control District about aggressive mosquitoes biting their legs during the day. The district investigated and confirmed invasive Aedes mosquitoes in the city. Since then, these mosquitoes have spread across much of Orange County, but older, densely planted neighborhoods like many in Garden Grove remain prime habitat.",
          "Invasive Aedes behave differently from the mosquitoes most people grew up with. They bite during the day, often low on the legs and ankles, they are small and dark with white markings, and they lay eggs in tiny amounts of water. That is why spraying alone rarely solves a Garden Grove mosquito problem. The breeding sources have to be found and removed too.",
          "Garden Grove's location in the middle of the county also matters. It is far enough from the coast to stay warm well into fall, so mosquito season here often runs late, with plenty of bites in September and October. Native Culex mosquitoes, which bite mainly at night and are the main West Nile virus concern in California, breed in storm drains and neglected pools, but the daytime biters are the ones most Garden Grove residents notice.",
        ],
        link: { href: "/areas-we-serve/garden-grove", label: "Pest control in Garden Grove" },
      },
      {
        heading: "Garden Grove Yards: Gardens, Buckets and Flat Ground",
        body: [
          "Much of Garden Grove was built as single-story tract homes in the 1950s and 1960s, on flat lots with mature fruit trees, side yards and detached garages. Many homeowners keep productive backyard gardens, with herbs and vegetables in pots, buckets and raised beds, and some store water in barrels or tubs for irrigation. All of that is good for the garden and very good for mosquitoes if water sits for more than a few days.",
          "Because the ground is so flat, water also collects in low spots after irrigation or rain, along driveways, and in the bottoms of planters with no drainage holes. In neighborhoods from West Garden Grove to the streets around Garden Grove Boulevard and Chapman Avenue, we most often find mosquitoes breeding in:",
          "Watering habits matter too. Hand-watering pots every day keeps saucers full, and drip lines on timers can leave puddles in the same low spot every evening. Mosquito eggs laid on the inside wall of a bucket can hatch the next time it fills. None of this means you have to give up your garden; it means building a weekly habit of tipping, scrubbing and covering.",
        ],
        bullets: [
          "Buckets, tubs and pots in backyard vegetable and herb gardens",
          "Rain barrels and water storage containers without tight lids or screens",
          "Plant saucers and planters without drainage holes",
          "Tires, tarps and stored items along side yards and behind garages",
          "Clogged gutters on older roofs and low spots near downspouts",
          "Ornamental fountains and birdbaths that are refilled but not scrubbed",
        ],
      },
      {
        heading: "Why Your Neighbor's Yard Matters",
        body: [
          "Invasive Aedes are weak fliers and tend to stay near where they hatched, often within the same block. On Garden Grove's closely spaced lots and in duplexes and fourplexes with shared yards, that means one neglected backyard can keep supplying mosquitoes to the houses around it. When we treat a property, we look along the fence lines for signs that the source is next door and tell you what we see.",
          "This is also why a single treatment sometimes seems to wear off quickly in Garden Grove. The barrier spray keeps working on the plants and walls we treated, but new mosquitoes keep arriving from untreated yards nearby. Monthly service during the season, combined with removing the sources you control, keeps the numbers low even when the neighborhood around you is not treated.",
          "If the source is a green pool or an abandoned yard you can't access, the Orange County Mosquito and Vector Control District (ocvector.org, 714-971-2421) can inspect it at no cost. If several neighbors want service at the same time, we are happy to quote each home so the whole block is covered.",
        ],
      },
      {
        heading: "How We Treat a Garden Grove Property",
        body: [
          "We start with a free inspection of the front yard, side yards and backyard. We empty and scrub containers you don't need, because Aedes eggs stay glued to container walls even after they dry out. For water you want to keep, like rain barrels and fountains, we show you how to screen or cover it, and treat it with a label-approved larvicide where appropriate. Then we apply a barrier spray to the leafy, shady places where adults rest: under fruit trees, hedges, garden beds, and along block walls.",
          "We use EPA-registered products applied according to the label and give you re-entry guidance before we leave. For vegetable gardens, we keep sprays off edible plants and explain which areas to avoid treating.",
          "Each follow-up visit is not just another spray. We recheck the containers, saucers and low spots that tend to come back, look for new sources like a recently delivered planter or a tarp that has started holding water, and adjust the treatment to where we are still seeing activity.",
        ],
        link: { href: "/services/mosquito-control", label: "Read about our mosquito control service" },
      },
      {
        heading: "Garden Grove Mosquito Pricing and Season",
        body: [
          "Many Garden Grove lots are modest in size, which keeps one-time treatments in the $150 to $300 range for most homes. Heavily planted yards with large gardens or multiple units can take longer and are quoted after the free inspection. Monthly service during the May through October season runs $100 to $175 per month, and each visit includes rechecking the containers and low spots that tend to come back.",
          "For apartment complexes, mobile home parks and commercial properties in Garden Grove, we offer commercial service and quote based on the size of the property and the number of shared areas.",
          "If you are not sure whether you need ongoing service, start with a free inspection. We will tell you honestly whether removing a few containers is likely to solve it or whether the property needs regular treatment through the season, and we put the quote in writing before any work begins.",
        ],
      },
    ],
    pricing: [
      { item: "Inspection and breeding-site survey", range: "Free" },
      { item: "One-time yard treatment (typical single-family lot)", range: "$150 – $300", note: "Includes container cleanup and barrier spray." },
      { item: "Seasonal monthly plan", range: "$100 – $175/mo", note: "Recommended May through October." },
      { item: "Duplex, multi-unit or commercial property", range: "Quoted on inspection", note: "Based on size and shared areas." },
    ],
    faqs: [
      {
        question: "Why do mosquitoes bite my ankles in the afternoon in Garden Grove?",
        answer:
          "That pattern points to invasive Aedes mosquitoes, which were confirmed in Garden Grove in 2015. Unlike native mosquitoes that mostly bite at dusk and night, Aedes bite during the day and tend to go after ankles and lower legs. They breed in small containers close to where you are being bitten.",
      },
      {
        question: "Can I keep my rain barrel and garden buckets?",
        answer:
          "Yes, if they are managed. Rain barrels need a tight lid or fine mesh screen, and buckets should be emptied and scrubbed at least once a week. Mosquito eggs stick to the inside wall, so rinsing alone may not remove them. We show you how during the inspection.",
      },
      {
        question: "Will you spray my vegetable garden?",
        answer:
          "No. We keep barrier products off fruits, vegetables and herbs and treat ornamental plants, walls and shaded resting areas instead. All products are EPA-registered and applied according to the label, and we explain re-entry times before we leave.",
      },
      {
        question: "How much is mosquito control in Garden Grove?",
        answer:
          "Most single-family homes in Garden Grove pay $150 to $300 for a one-time treatment or $100 to $175 per month for seasonal service. Multi-unit and commercial properties are quoted after a free inspection.",
      },
      {
        question: "The mosquitoes are coming from a neighbor's yard. What can I do?",
        answer:
          "We can treat your side of the fence and the resting areas along it, which helps. For a neglected pool or a yard you can't access, contact the Orange County Mosquito and Vector Control District, which inspects reported sources for free.",
      },
    ],
    updated: "2026-10-19",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Orange × Mosquito Control
  // ─────────────────────────────────────────────────────────────
  {
    citySlug: "orange",
    serviceSlug: "mosquito-control",
    metaTitle: "Mosquito Control in Orange, CA",
    metaDescription:
      "Mosquito control in Orange, CA, from Old Towne to Orange Park Acres: troughs, ponds, pools and shady yards. From $150. Free inspection: 714-323-8262.",
    h1: "Mosquito Control in Orange, CA",
    heroSubtext:
      "From Craftsman bungalows near the Plaza to horse properties in Orange Park Acres, we treat the water features and shade that keep mosquitoes around.",
    summary:
      "Yogi's Pest Control provides mosquito control in the City of Orange by treating breeding water such as troughs, ponds and fountains, removing container sources, and applying an EPA-registered barrier spray to shaded landscaping where adults rest. A typical home costs $150 to $300 for a one-time treatment or $100 to $175 per month during the May–October season, with larger hillside and equestrian lots quoted after a free inspection. Service is available 7 days a week, usually within a day or two.",
    sections: [
      {
        heading: "Santiago Creek, the Santa Ana River and Orange's Mosquito Map",
        body: [
          "The City of Orange has two water corridors that shape its mosquito activity. Santiago Creek runs through the middle of town, past parks like Hart Park and Grijalva Park, and the Santa Ana River forms much of the city's western edge. Creek beds, flood channels and storm drains are monitored by the Orange County Mosquito and Vector Control District, which also listed Orange among the cities where invasive Aedes mosquitoes were detected.",
          "What we treat is everything on your side of the property line. Orange has some of the most varied housing in the county, and each part of town gives mosquitoes a different set of places to breed and hide.",
          "Native Culex mosquitoes, the main West Nile virus carriers in California, are most active from dusk into the night and breed in larger standing water such as catch basins and neglected pools. Invasive Aedes bite during the day and breed in small containers. Many Orange homeowners deal with both: daytime bites in the garden and evening bites on the patio after sunset. A good treatment plan addresses both kinds of water and both kinds of resting spots.",
        ],
        link: { href: "/areas-we-serve/orange", label: "Pest control in Orange, CA" },
      },
      {
        heading: "Old Towne and the Historic Neighborhoods",
        body: [
          "Around the Plaza and through the Old Towne historic district, homes from the early 1900s sit under large shade trees with deep porches, lattice, and dense older plantings. That shade is exactly where mosquitoes rest during the day. These yards also tend to have decorative fountains, birdbaths, and potted plants on porches and steps.",
          "On historic homes we treat landscaping, lattice, fences and the shaded soil and foliage around the foundation, and we are careful with finishes on older painted wood. Rental homes near Chapman University can also be a source when yards go unmaintained between tenants, so we look at fence lines as well as your yard.",
          "Old Towne also has many homes with raised foundations, detached garages and alleys behind them. Mosquitoes rest in the cool, shaded space along alley fences, under porches and around garage walls, and those areas get special attention in our treatment.",
        ],
      },
      {
        heading: "Orange Park Acres, El Modena and the Eastern Hills",
        body: [
          "East of the 55, lots get bigger. In Orange Park Acres, horse properties have water troughs, wash racks and manure areas that stay damp. In Orange Hills, Serrano Heights and along Santiago Canyon Road, homes add pools, spas, ornamental ponds and slopes with irrigated ground cover that can leave puddles at the bottom of a hill.",
          "In El Modena and the neighborhoods around Chapman Avenue, yards are more typical suburban lots, but mature trees and backyard pools still give mosquitoes plenty of shade and water. Across the eastern side of the city, these are the breeding spots we check first:",
        ],
        bullets: [
          "Horse and livestock troughs that are topped off but rarely scrubbed",
          "Ornamental ponds and water features on larger lots",
          "Pools and spa covers, especially at homes that are seasonally vacant",
          "Irrigation runoff collecting at the base of slopes and retaining walls",
          "French drains, catch basins and yard drains that hold water",
          "Dense ivy and ground cover on hillsides that shade resting mosquitoes",
        ],
      },
      {
        heading: "How We Treat Larger and Equestrian Properties",
        body: [
          "We never spray barrier products into animal drinking water. For troughs, the most effective steps are scrubbing them on a regular schedule and, where appropriate, stocking them with mosquitofish. The Orange County Mosquito and Vector Control District (ocvector.org, 714-971-2421) provides mosquitofish to residents for use on their own property at no charge. Ponds and fountains without fish or animals drinking from them can be treated with a larvicide applied according to the label.",
          "For the adult mosquitoes, we apply an EPA-registered barrier treatment to the shady perimeter: hedges, oaks and pepper trees, ivy, the undersides of decks, and barn eaves where mosquitoes rest. We give you clear re-entry guidance for people, pets and horses before we leave.",
          "On properties with several acres, we focus treatment where people actually spend time: around the house, patio, pool, barn and arena, rather than blanketing the entire lot. That keeps the cost reasonable and puts the product where it does the most good. We also note any problem water that only you can fix, such as a leaking trough float or a drain that never empties.",
        ],
        link: { href: "/services/mosquito-control", label: "Our mosquito control process" },
      },
      {
        heading: "Pricing and Season in Orange",
        body: [
          "For a standard home in Old Towne, Olive or the neighborhoods around Tustin Street, a one-time mosquito treatment typically costs $150 to $300. Monthly service through the May to October season runs $100 to $175 per month. Larger hillside lots and equestrian properties in Orange Park Acres need more time and product, so we price them after a free walkthrough rather than guessing over the phone.",
          "Because Orange sits farther inland than coastal cities, summer heat can arrive earlier and stay longer into fall. Starting service in late spring, before mosquito numbers build, is easier than catching up in August. If you are hosting a wedding, graduation party or other outdoor event at a larger property, book a one-time treatment a few days ahead and remove any standing water the same week.",
          "Each monthly visit includes a fresh barrier treatment and a recheck of the water sources we found the first time. If something changes, like a new pond, a pool that has gone green while a house is for sale, or a trough that started leaking, we adjust the plan and let you know.",
        ],
      },
    ],
    pricing: [
      { item: "Free inspection and walkthrough", range: "Free" },
      { item: "One-time treatment, standard lot", range: "$150 – $300", note: "Old Towne, Olive, El Modena and similar lots." },
      { item: "Monthly seasonal plan", range: "$100 – $175/mo", note: "May through October." },
      { item: "Hillside or equestrian property", range: "Quoted on inspection", note: "Depends on acreage and water features." },
    ],
    faqs: [
      {
        question: "Can you treat horse troughs for mosquitoes in Orange Park Acres?",
        answer:
          "We do not apply barrier sprays to animal drinking water. Troughs are best managed by scrubbing them regularly and, where appropriate, adding mosquitofish, which the Orange County Mosquito and Vector Control District provides free to residents. We treat the shaded areas around barns and paddocks where adult mosquitoes rest.",
      },
      {
        question: "Is Santiago Creek the reason I have mosquitoes?",
        answer:
          "The creek corridor can contribute, but it is monitored and treated by the vector control district. If you are being bitten during the day, the source is more likely invasive Aedes breeding in containers, fountains or drains close to your home.",
      },
      {
        question: "Will mosquito spray damage my historic Old Towne home?",
        answer:
          "We treat landscaping, fences, lattice and shaded foliage rather than painted siding, and we are careful around older finishes. If you have concerns about a specific surface, point it out during the free inspection and we will avoid it.",
      },
      {
        question: "How much does mosquito control cost in Orange, CA?",
        answer:
          "Most homes pay $150 to $300 for a one-time treatment or $100 to $175 per month during the season. Large hillside and equestrian properties are quoted after a free on-site walkthrough.",
      },
      {
        question: "Do you need to come inside my house in Orange to treat mosquitoes?",
        answer:
          "No. Mosquito control is an outdoor service. We treat the yard, landscaping and water features, and you do not need to be home as long as we can reach the side yards and backyard. We let you know when we are done and give you re-entry guidance.",
      },
    ],
    updated: "2026-10-19",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Costa Mesa × Rodent Control
  // ─────────────────────────────────────────────────────────────
  {
    citySlug: "costa-mesa",
    serviceSlug: "rodent-control",
    metaTitle: "Rodent Control in Costa Mesa, CA",
    metaDescription:
      "Roof rats in your Costa Mesa attic or garage? We trap, seal entry points and follow up until activity stops. Typically $200–$500. Call 714-323-8262.",
    h1: "Rodent Control in Costa Mesa, CA",
    heroSubtext:
      "Roof rat trapping, attic and garage exclusion, and scheduled follow-up visits for Costa Mesa homes, from the Westside to Mesa Verde.",
    summary:
      "Yogi's Pest Control removes rats and mice from Costa Mesa homes by inspecting the roofline, attic, garage and crawl space, sealing the entry points, and trapping the rodents still inside, with scheduled follow-up visits until activity stops. Most Costa Mesa rodent jobs cost $200 to $500, with larger sealing work quoted separately. Inspections are free, and most homes are rodent-free within one to two weeks.",
    sections: [
      {
        heading: "Roof Rats Are Costa Mesa's Main Rodent",
        body: [
          "Most rodent calls we get from Costa Mesa are roof rats. They are slim, dark rats with a tail longer than their head and body, and they are excellent climbers. University of California pest management guidance notes that roof rats prefer to nest above ground in trees, shrubs and dense vegetation such as ivy, and indoors in attics, wall voids and other enclosed, elevated spaces. They often travel a few hundred feet a night to find food, so the rats in your attic may be feeding on fruit trees several houses away.",
          "Costa Mesa gives roof rats everything they need: tall palms with skirts of dead fronds, ivy on block walls, citrus and avocado trees, and power lines and fence tops that connect it all to the roof.",
          "House mice and Norway rats show up too, especially in older crawl spaces, garages and commercial buildings, but they behave differently. Norway rats are heavier, burrow at ground level, and are more common near storm drains and commercial areas. Identifying which rodent you have changes where we look for entry points and where we place traps, which is why every job starts with an inspection.",
        ],
        link: { href: "/pests/roof-rats", label: "Roof rat identification guide" },
      },
      {
        heading: "How Rats Get Into Costa Mesa Homes",
        body: [
          "Housing in Costa Mesa ranges from 1950s single-story homes on the Westside and Eastside to the larger tract homes of Mesa Verde and College Park, plus a lot of townhomes and remodels. Each type has its weak spots. Older homes often have raised foundations with crawl space vents, gaps where the roofline meets the eaves, and roof vents with torn screens. Remodels and ADUs sometimes leave small gaps where new construction meets old. Attached garages are a common way in, since rats can move from the garage to the attic through gaps around pipes and wiring.",
          "Sounds at night in the ceiling, droppings in the garage, chewed boxes, or a pet staring at a wall are all common first signs. Here are the entry points we find most often on Costa Mesa homes:",
        ],
        bullets: [
          "Gaps at the eaves and where roof sections meet",
          "Torn or rusted attic, gable and foundation vent screens",
          "Openings around plumbing, AC lines and cable or solar wiring",
          "Garage door corners and worn weather stripping",
          "Tree branches and palm fronds touching or overhanging the roof",
          "Ivy-covered walls and fences that act as ladders",
        ],
      },
      {
        heading: "Our Costa Mesa Rodent Control Process",
        body: [
          "We start with a free inspection of the roofline, attic, garage and, if you have one, the crawl space. We look for droppings, rub marks, chewed insulation and the specific holes rats are using. Then we seal those entry points with materials rats can't chew through, like galvanized steel mesh, hardware cloth and metal flashing, and set traps inside for the rats that are already in the house.",
          "Rodent control is not a one-visit job. We come back on a schedule to check and reset traps, remove what we catch, and confirm no new activity. On one Orange County attic job a customer described in a review, we trapped 16 roof rats over several visits after they had been moving between the attic and the garage. Follow-up is how you know the problem is actually gone.",
          "Traps are placed where rats travel, such as attic runways, along garage walls and near entry holes, and out of reach of children and pets. We do not scatter loose poison in attics, which can lead to rats dying inside walls and causing odor problems. Each follow-up visit includes checking traps, rechecking the sealed openings, and looking for any new gaps.",
        ],
        link: { href: "/services/rodent-control", label: "How our rodent control service works" },
      },
      {
        heading: "Crawl Spaces, Garages and Attics",
        body: [
          "Costa Mesa's older homes often have crawl spaces that stay damp from the coastal air. Rodents use them as a hidden route under the house, and they are also where we sometimes find other problems, like a dead animal or a skunk odor, during the same inspection. In garages, stored boxes, pet food and bird seed give rats food and nesting material. In attics, rats tunnel through insulation and leave droppings and urine behind.",
          "If the attic insulation is heavily contaminated, we can quote an attic cleanout after the rats are gone. Cleaning up before the entry points are sealed usually means doing it twice.",
          "Rodents can also chew wiring and the soft ducting that runs through attics and crawl spaces. If we see damage during the inspection, we point it out so you can have it repaired by the right trade, since gnawed wiring is a fire risk.",
        ],
        link: { href: "/services/exclusion-repairs", label: "Rodent exclusion and repairs" },
      },
      {
        heading: "Keeping Rats Out After Treatment",
        body: [
          "Once your home is sealed, a few yard habits make a big difference. Have palm trees trimmed to remove dead fronds, cut back branches so they stay several feet from the roof, pull ivy off walls and fences near the house, and pick up fallen fruit. Store pet food and bird seed in sealed metal or hard plastic containers.",
          "If you live near the open space along Fairview Park or the Santa Ana River, it is also worth having the house checked once a year, since new gaps open up as homes age and new rats move in from nearby.",
          "If you would rather not think about it, an ongoing monitoring plan keeps a few bait stations or traps in place outside and includes periodic checks of the roofline and garage. For most Costa Mesa homes, a one-time job plus good yard habits is enough; monitoring makes sense where rodent pressure keeps coming back.",
        ],
      },
    ],
    pricing: [
      { item: "Rodent inspection", range: "Free", note: "Roofline, attic, garage and crawl space." },
      { item: "Rodent control (trapping with follow-up visits)", range: "$200 – $500", note: "Most Costa Mesa homes fall in this range." },
      { item: "Exclusion repairs (sealing entry points)", range: "$300 – $1,500+", note: "Depends on number and type of openings." },
      { item: "Ongoing rodent monitoring", range: "$100 – $200/mo", note: "For homes with repeat pressure." },
    ],
    faqs: [
      {
        question: "I hear scratching in my attic at night in Costa Mesa. Is it rats?",
        answer:
          "Most likely roof rats, which are the most common attic rodent in Costa Mesa. Sounds at night, droppings about the size of an olive pit, and chewed insulation are typical signs. A free inspection confirms what it is and how it is getting in.",
      },
      {
        question: "How much does rodent control cost in Costa Mesa?",
        answer:
          "Most rodent control jobs in Costa Mesa cost $200 to $500, including trapping and follow-up visits. If the home needs substantial sealing work, exclusion repairs typically run $300 to $1,500 or more and are quoted after the inspection.",
      },
      {
        question: "Do my palm trees cause rat problems?",
        answer:
          "They can. Roof rats nest in dense vegetation, and the dead fronds that hang under the crown of an untrimmed palm are a common hiding place. Trimming those fronds and keeping palms and branches away from the roof removes a highway into the attic.",
      },
      {
        question: "Why do you seal entry points before or while trapping?",
        answer:
          "If the holes stay open, new rats keep coming in and trapping never ends. Sealing the entry points and then trapping the rats left inside is what stops the problem for good. Follow-up visits confirm there is no new activity.",
      },
      {
        question: "Can you also check my crawl space?",
        answer:
          "Yes. Many older Costa Mesa homes have crawl spaces, and we include them in the inspection. Rodents often travel through them, and we check vent screens and foundation gaps as part of the job.",
      },
    ],
    updated: "2026-10-19",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Anaheim × Bee Removal
  // ─────────────────────────────────────────────────────────────
  {
    citySlug: "anaheim",
    serviceSlug: "bee-removal",
    metaTitle: "Bee Removal in Anaheim, CA",
    metaDescription:
      "Bee swarm or hive in your Anaheim wall, eave or tree? Licensed bee removal with comb cleanup and sealing. From $150. Same-week service: 714-323-8262.",
    h1: "Bee Removal in Anaheim, CA",
    heroSubtext:
      "Swarms on trees and fences, hives in walls, eaves and meter boxes: licensed bee removal for Anaheim homes and businesses, 7 days a week.",
    summary:
      "Yogi's Pest Control removes bee swarms and established hives from Anaheim homes and businesses, including comb removal and sealing the entry point so bees don't move back in. Exposed swarms and easy-to-reach hives typically cost $150 to $500, while hives built inside walls or roofs can run $500 to $800 or more. Call 714-323-8262; we work 7 days a week and treat bee calls as a priority.",
    sections: [
      {
        heading: "Why Anaheim Gets So Many Bee Calls",
        body: [
          "Anaheim covers a lot of ground, from the flat, older neighborhoods west of the 57 to the canyons and hillsides of Anaheim Hills. The Santa Ana River runs through the city and Santa Ana Canyon opens to the east, and Anaheim Hills borders natural open space. That combination of flowering landscaping, older buildings with gaps, and open land nearby means there are plenty of honey bee colonies looking for new homes every spring and summer.",
          "Honey bee colonies reproduce by swarming. When a hive gets crowded, the old queen leaves with thousands of workers, and the swarm clusters on a branch, fence or eave while scouts look for a new cavity. That new home is often a wall void, an attic, a meter box or an irrigation valve box.",
          "Swarm calls in Orange County tend to pick up in spring as colonies build up, and they continue into summer and early fall in warm years. Established hives inside walls can be found any time of year. The sooner a colony is dealt with, the less comb it builds and the easier the removal and cleanup.",
        ],
        link: { href: "/areas-we-serve/anaheim", label: "Pest control in Anaheim" },
      },
      {
        heading: "Africanized Honey Bees: Why Anaheim Residents Should Be Careful",
        body: [
          "Africanized honey bees are established in Southern California, and many wild colonies in Orange County carry Africanized genetics. You can't tell them apart from ordinary honey bees by looking. The difference is behavior: Africanized colonies defend their nest more readily, in larger numbers, and chase farther.",
          "A resting swarm is usually not defensive because it has no nest to protect. An established hive in a wall or tree is different. Do not spray, plug the hole, hose it down or try to knock it loose. Keep children and pets away, and if bees start chasing you, run in a straight line to a car or building and do not stop to swat. Removal of established colonies is a job for a professional with protective equipment.",
          "Anyone with a known bee sting allergy should be especially careful and keep an epinephrine auto-injector on hand if one has been prescribed. If someone is stung many times, or shows signs of an allergic reaction such as trouble breathing or swelling of the face or throat, call 911.",
        ],
      },
      {
        heading: "Where We Find Hives on Anaheim Properties",
        body: [
          "In the Anaheim Colony historic district and the older neighborhoods around Downtown and West Anaheim, wood-sided homes and older stucco have gaps at the eaves, vents and chimneys that bees move into. In Anaheim Hills and around Canyon Rim, hives show up in roof tiles, block walls along slopes, and outdoor kitchens. Businesses along Katella Avenue, Harbor Boulevard and in the Platinum Triangle call about bees in signs, light fixtures and planters.",
          "Bees going in and out of one small hole in a steady stream, especially on warm afternoons, almost always means an established colony inside. A loud humming in a wall or ceiling, or honey stains seeping through drywall, are signs it has been there a while. The most common places we find colonies in Anaheim are:",
        ],
        bullets: [
          "Wall voids and soffits, often with bees coming and going from one small hole",
          "Water meter boxes, irrigation valve boxes and utility boxes",
          "Chimneys and unused vents",
          "Under roof tiles and in gable vents",
          "Hollow trees, palms and compost bins",
          "Signs, light fixtures and commercial planters",
        ],
      },
      {
        heading: "How Our Anaheim Bee Removal Works",
        body: [
          "We start by looking at where the bees are, how big the colony is, and how they are behaving. An exposed swarm can often be removed in a single short visit. When a colony is healthy and accessible, we work with local beekeepers on live removal whenever possible. When a hive is inside a structure, we open the area, remove the comb and honey, and then seal the entry.",
          "Removing the comb matters. Honey and wax left inside a wall can attract ants, cockroaches and rodents, can stain drywall as it melts in summer heat, and the smell draws new swarms to the same spot. Sealing the hole with the right materials is what keeps the next swarm from moving into the same cavity. In some situations, such as a very defensive colony in a high-traffic area, removal methods other than live removal are necessary for safety, and we explain why before starting.",
          "Wasps and yellowjackets are sometimes mistaken for bees. If we find a wasp or yellowjacket nest instead, we can handle that during the same visit, and we tell you what it is before we treat it.",
        ],
        link: { href: "/services/bee-removal", label: "Learn about our bee removal service" },
      },
      {
        heading: "Who to Call About Bees in Anaheim",
        body: [
          "For bees on private property in Orange County, removal is the property owner's responsibility. The County of Orange and the county Agricultural Commissioner both direct residents to a private pest control company for hives and swarms on private property. If bees are actively stinging people, call 911 first.",
          "For everything else, call Yogi's Pest Control at 714-323-8262. We are owner-operated, licensed by the California Structural Pest Control Board (OPR 14866), and work 7 days a week from 8 AM to 8 PM across Anaheim.",
          "When you call, it helps to tell us where the bees are, roughly how long they have been there, and whether they are hanging in a cluster or flying in and out of a hole. A photo taken from a safe distance helps us plan. We will give you a price range on the phone and confirm it on site before any work begins.",
        ],
      },
    ],
    pricing: [
      { item: "Bee assessment", range: "Free", note: "Location, colony size and access." },
      { item: "Exposed swarm or easy-access hive", range: "$150 – $500", note: "Branches, fences, eaves and boxes." },
      { item: "Established hive inside a wall, roof or chimney", range: "$500 – $800+", note: "Includes opening the area and comb removal." },
      { item: "Sealing the entry point", range: "Quoted with the job", note: "Prevents new swarms from moving into the same spot." },
    ],
    faqs: [
      {
        question: "There is a bee swarm on a tree in my Anaheim yard. Will it leave on its own?",
        answer:
          "Often it will move on once scouts find a new home, sometimes within hours, sometimes after a few days. The risk is that the new home is your wall or attic. If the swarm is near a door, play area or walkway, or it has been there more than a day, call us before it moves inside.",
      },
      {
        question: "How much does bee removal cost in Anaheim?",
        answer:
          "An exposed swarm or easily reached hive typically costs $150 to $500. Hives built inside walls, roofs or chimneys take more work, usually $500 to $800 or more, because the structure has to be opened, the comb removed and the entry sealed. The assessment is free.",
      },
      {
        question: "Are the bees in Anaheim Africanized?",
        answer:
          "Africanized honey bees are established in Southern California, and many wild colonies in Orange County have Africanized genetics. You can't tell by looking, so treat any established hive with caution and keep people and pets away until it is removed.",
      },
      {
        question: "Do you save the bees?",
        answer:
          "When a colony is healthy, accessible and not overly defensive, we work with local beekeepers on live removal whenever possible. When that is not safe or practical, we use other methods and explain them first.",
      },
      {
        question: "Bees are coming out of my water meter box. Can you remove them?",
        answer:
          "Yes. Meter boxes and irrigation valve boxes are some of the most common bee locations in Anaheim. Don't open the lid yourself. We remove the colony and comb and can recommend how to keep the box from being reused.",
      },
    ],
    updated: "2026-10-19",
  },
];

export const getCityServicePage = (citySlug: string, serviceSlug: string) =>
  CITY_SERVICE_PAGES.find((p) => p.citySlug === citySlug && p.serviceSlug === serviceSlug);

export const cityServicePagesFor = (citySlug: string) => CITY_SERVICE_PAGES.filter((p) => p.citySlug === citySlug);
export const cityServicePagesForService = (serviceSlug: string) =>
  CITY_SERVICE_PAGES.filter((p) => p.serviceSlug === serviceSlug);
