import type { Metadata } from "next";
import { BusTimeCasePage } from "@/components/pages/bustime-case-page";
import { bustime } from "@/content/cases/bustime";

export const metadata: Metadata = {
  title: bustime.ru.title,
  description: bustime.ru.subtitle,
};

export default function Page() {
  return <BusTimeCasePage locale="ru" />;
}
