// Real customer reviews from Yogi's Pest Control's verified Google Business Profile.
// Copied verbatim (names shortened to first name + last initial). Update the summary
// numbers whenever new reviews come in; never add reviews that aren't on the profile.

export const GOOGLE_PROFILE = {
  rating: 5.0,
  reviewCount: 11,
  // Last checked against the live profile.
  asOf: "2026-10-20",
  mapsUrl: "https://maps.google.com/?cid=4805882550525726242",
  writeReviewUrl: "https://g.page/r/CSKOVZC37LFCEBM/review",
} as const;

export const HOMEADVISOR_PROFILE = {
  rating: 5.0,
  reviewCount: 13,
} as const;

/** All verified five-star reviews across Google and HomeAdvisor. */
export const TOTAL_REVIEWS = GOOGLE_PROFILE.reviewCount + HOMEADVISOR_PROFILE.reviewCount;

export interface Review {
  name: string;
  /** Month the review was posted, YYYY-MM. */
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Short label for what the job was, used as a tag on review cards. */
  service?: string;
}

export const GOOGLE_REVIEWS: Review[] = [
  {
    name: "Lee P.",
    date: "2026-10",
    rating: 5,
    text: "Requested an inspection to help us with a foul smell coming out from our walls. The company was able to come immediately to inspect. They were very honest and upfront about the pricing and what they would be doing step by step while providing commentary on their thought process. Extremely professional. Would request their service again.",
    service: "Odor inspection",
  },
  {
    name: "Chad P.",
    date: "2026-10",
    rating: 5,
    text: "Yogis Pest Control is very professional, knowledgeable and reliable. I highly recommend them as a fair and honest company.",
  },
  {
    name: "Sandra C.",
    date: "2026-09",
    rating: 5,
    text: "Disgusting smell from a crawlspace skunk. Yobani responded same day and identified the cause and location for no cost. Thank you thank you.",
    service: "Wildlife",
  },
  {
    name: "Martha J.",
    date: "2026-09",
    rating: 5,
    text: "Second time needing this service and again great professional services will definitely continue to use him if needed",
  },
  {
    name: "Margaret K.",
    date: "2026-09",
    rating: 5,
    text: "Yogi was very prompt in getting back to me, and was able to take care of the issue within just a few hours. He was professional and priced very fairly. I would recommend him for sure!",
  },
  {
    name: "Karla G.",
    date: "2026-08",
    rating: 5,
    text: "I highly recommend Yogis Pest Control! Yobani did an amazing job from start to finish. He was very thorough with his inspection and identified all the areas where rats could get into my attic. He sealed up all the holes to prevent them from getting back in, then set traps and successfully got rid of the rats that were already inside. It’s been two weeks since the service, and I haven’t heard any more noise coming from my attic! I’m so relieved and very happy with the results. Yobani was professional, thorough, and clearly knew what he was doing. I would definitely recommend Yogis Pest Control to anyone dealing with a pest problem!",
    service: "Rodent exclusion",
  },
  {
    name: "Grace D.",
    date: "2026-08",
    rating: 5,
    text: "Yobani is very professional and knowledgeable. He’s always happy to answer questions and address concerns. Very happy with our experiences over the last couple months",
    service: "Recurring service",
  },
  {
    name: "Christina R.",
    date: "2026-08",
    rating: 5,
    text: "Yogi’s was great! Very professional. They made it very simple to schedule and got rid of the fleas!",
    service: "Flea treatment",
  },
  {
    name: "Michael N.",
    date: "2026-08",
    rating: 5,
    text: "I was having problems with roof rats in the attic that would go down into the garage at night. Yogi came in and did an evaluation and set up traps and glue boards. He would come back whenever any rats were caught to dispose of them, refresh the traps and move them if needed. He came several times to complete this routine. We killed 16 rats in all and the problem is gone! Yogi is very knowledgeable and professional. His pricing is extremely reasonable. I highly recommend him for your extermination needs.",
    service: "Roof rats",
  },
  {
    name: "Outdoors G.",
    date: "2026-08",
    rating: 5,
    text: "I am a huge fan of Yogi's Pest Control. Yobani is a small business owner who does excellent work. I was with a larger pest control company for my home and felt like a number on their spreadsheet. Yobani and Yogi's Pest Control provided a unique plan for my home and sprays once a month. He even sprays for mosquitoes, which is great as we are in mosquito season. I love that my dollar feeds back into my community! I 100 percent recommend this business.",
    service: "Monthly service",
  },
  {
    name: "Michael D.",
    date: "2026-08",
    rating: 5,
    text: "Highly recommended! Took care of rodents in the crawl space. Set up a schedule for return service/inspection, was professional and punctual. Quickly responded to my inquiries and questions.",
    service: "Rodent control",
  },
];

/** "Oct 2026" style label for a YYYY-MM date. */
export function reviewMonth(date: string): string {
  const [y, m] = date.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
