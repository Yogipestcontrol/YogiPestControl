import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Pest Do I Have? Free Pest Identifier Quiz",
  description:
    "Take our free 3-step pest identification quiz. Answer quick questions to identify common Orange County pests and get recommended treatment options from Yogi's Pest Control.",
};

export default function PestQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
