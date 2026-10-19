import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Yogi's Pest Control",
  absoluteTitle: true,
  description:
    "Call or message Yogi's Pest Control, licensed pest control based in Tustin serving all of Orange County. Open 7 days, 8AM–8PM. 714-323-8262.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
