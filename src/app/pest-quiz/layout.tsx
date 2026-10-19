import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What Pest Do I Have? Free Pest Identifier Quiz",
  description:
    "Answer 3 quick questions to identify common Orange County pests and see the recommended treatment from a licensed local operator.",
  path: "/pest-quiz",
});

export default function PestQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
