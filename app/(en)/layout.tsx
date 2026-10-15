import type { Metadata } from "next";
import "../globals.css";
import { RootDocument, sharedMetadata } from "@/components/root-document";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Evgenia Artyushina — Product Designer",
  description: "Evgenia Artyushina's portfolio — product design, UX/UI",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
