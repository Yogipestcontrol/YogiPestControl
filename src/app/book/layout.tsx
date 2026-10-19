import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book a Free Pest Inspection",
  description:
    "Book a free pest inspection in Orange County online in minutes. Pick your pest, city and time slot. Same-day appointments often available. 714-323-8262.",
  path: "/book",
});

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
