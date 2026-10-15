import type { Metadata } from "next";
import { TanukiCasePage } from "@/components/pages/tanuki-case-page";
import { caseStudies } from "@/content/cases";

const study = caseStudies.tanuki.en;

export const metadata: Metadata = {
  title: study.title,
  description: study.subtitle,
};

export default function Page() {
  return <TanukiCasePage locale="en" />;
}
