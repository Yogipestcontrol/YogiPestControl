import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Pest Inspection | Yogi's Pest Control",
  description:
    "Schedule your free pest inspection in Orange County, CA. Choose your pest type, pick a time, and book online in minutes. Same-day appointments available. Call 714-323-8262.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
