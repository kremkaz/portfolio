import type { CaseStudy } from "./types";
import { bustime } from "./bustime";

/** English version of the Bustime skeleton — placeholders until the case is written. */
export const bustimeEn: CaseStudy = {
  ...bustime,
  backLabel: "Back to case studies",
  backHref: "/en#cases",
  title: "Bustime — public transport tracking",
  subtitle: "Tracking buses and more, anywhere in the world",
  facts: [
    { label: "Role", value: "product designer" },
    { label: "Tools", value: "in progress" },
    { label: "Platform", value: "mobile" },
  ],
  cover: { ...bustime.cover, alt: "Bustime cover" },
  stages: [
    {
      ...bustime.stages[0],
      label: "Context & task",
      heading: "Reworking Bustime navigation",
      paragraphs: [
        "**Bustime is an app for tracking public transport in hundreds of cities worldwide**, from Nizhny Novgorod to Amsterdam. It has lots of useful features, but they're hard to find.",
        "I've been using Bustime for over a year and only recently found out it can notify you when it's time to get off at your stop. For me it's one of the most useful features, yet it went unnoticed all that time. That worried me: if it took me a year to find it, **how many other features are users missing?**",
        "Features nobody knows about don't do the app any good: they don't drive engagement, don't retain users and don't set the product apart from competitors. So **I set out to understand how the app's navigation works and whether the product's value could reveal itself to users faster**. This is an unofficial redesign: I didn't work with the Bustime team, but I did ask them for some data.",
      ],
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
