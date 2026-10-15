import type { Metadata } from "next";
import { VectaCasePage } from "@/components/pages/vecta-case-page";
import { caseStudies } from "@/content/cases";

const study = caseStudies.vecta.en;

export const metadata: Metadata = {
  title: study.title,
  description: study.subtitle,
};

export default function Page() {
  return <VectaCasePage locale="en" />;
}
