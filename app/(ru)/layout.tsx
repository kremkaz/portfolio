import type { Metadata } from "next";
import "../globals.css";
import { RootDocument, sharedMetadata } from "@/components/root-document";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Евгения Артюшина — продуктовый дизайнер",
  description: "Портфолио Евгении Артюшиной — product-дизайн, UX/UI",
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="ru">{children}</RootDocument>;
}
