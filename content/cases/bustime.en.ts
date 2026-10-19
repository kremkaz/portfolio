import type { CaseStudy } from "./types";
import { bustime } from "./bustime";

/** English version of the BusTime skeleton — placeholders until the case is written. */
export const bustimeEn: CaseStudy = {
  ...bustime,
  backLabel: "Back to case studies",
  backHref: "/en#cases",
  title: "BusTime — public transport tracking",
  subtitle: "Tracking buses and more, anywhere in the world",
  facts: [
    { label: "Role", value: "product designer" },
    { label: "Tools", value: "in progress" },
    { label: "Platform", value: "desktop" },
  ],
  cover: { ...bustime.cover, alt: "BusTime cover" },
  stages: [
    {
      ...bustime.stages[0],
      label: "Context & task",
      heading: "Reworking BusTime navigation",
      paragraphs: ["_Context goes here: what the product is, who it's for and what problem we're solving._"],
    },
    {
      ...bustime.stages[1],
      label: "Research",
      heading: "Research",
      paragraphs: ["_Research, competitor review and takeaways go here._"],
    },
    {
      ...bustime.stages[2],
      label: "Information architecture",
      heading: "Navigation structure",
      paragraphs: ["_Information architecture and the navigation map, before and after, go here._"],
    },
    {
      ...bustime.stages[3],
      label: "Solution",
      heading: "Wireframes and solution",
      paragraphs: ["_Wireframes and key decisions go here._"],
    },
    {
      ...bustime.stages[4],
      label: "Result",
      heading: "Result",
      paragraphs: ["_Final screens and takeaways go here._"],
    },
  ],
  nextCase: {
    title: "Vecta — a service for robotaxi engineers",
    subtitle: "Fleet monitoring and incident management",
    href: "/en/cases/vecta",
  },
};
