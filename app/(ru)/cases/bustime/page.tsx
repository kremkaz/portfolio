import type { Metadata } from "next";
import { BustimeCasePage } from "@/components/pages/bustime-case-page";
import { caseStudies } from "@/content/cases";

const study = caseStudies.bustime.ru;

export const metadata: Metadata = {
  title: study.title,
  description: study.subtitle,
};

export default function Page() {
  return <BustimeCasePage locale="ru" />;
}
