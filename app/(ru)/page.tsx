import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  description: "Портфолио Евгении Артюшиной — product-дизайн, UX/UI",
};

export default function Page() {
  return <HomePage locale="ru" />;
}
