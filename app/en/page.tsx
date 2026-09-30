import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  description: "Evgenia Artyushina's portfolio — product design, UX/UI",
};

export default function Page() {
  return <HomePage locale="en" />;
}
