import type { Metadata } from "next";
import { BusTimeCasePage } from "@/components/pages/bustime-case-page";
import { bustime } from "@/content/cases/bustime";

export const metadata: Metadata = {
  title: bustime.en.title,
  description: bustime.en.subtitle,
};

export default function Page() {
  return <BusTimeCasePage locale="en" />;
}
