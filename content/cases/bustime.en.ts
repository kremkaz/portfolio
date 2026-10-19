import type { CaseStudy } from "./types";
import { bustime } from "./bustime";
import type { CaseImage } from "./types";

/** Картинка из русской версии: этап → блок → (для блока «images») номер картинки. */
function bustimeImage(stage: number, block: number, image = 0): CaseImage {
  const b = bustime.stages[stage].blocks![block];
  if (b.type === "image") return b.image;
  if (b.type === "images") return b.images[image];
  throw new Error("not an image block");
}

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
      heading: "Keeping track of buses, made easy",
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
      paragraphs: [
        "To understand which features people use today and why, I wanted to survey Bustime users, but I couldn't gather a sample. So I **wrote to the developers, and they shared usage stats for the main features.**",
        "Then I **ran 6 interviews with people who use transit-tracking apps every day.** They told me about their experience, pain points and wishes. It's a small sample, used alongside the other data.",
        "The developers' data and the interviews lined up. In Bustime, the most used features are the **transport list** on the home screen and **route planning**. Respondents **also plan routes most often**, and they **check arrivals on the stop's departure board**, either the physical one or in an app.",
        "Since route planning turned out to be the main scenario, I looked at **how it works in similar apps**: Google Maps, Yandex Maps and Yandex Go.",
      ],
    },
    {
      ...bustime.stages[2],
      label: "Navigation redesign",
      heading: "Navigation redesign",
      paragraphs: ["_Problems with the current navigation, the new structure and wireframes go here._"],
      blocks: [
        {
          type: "images",
          images: [
            {
              ...bustimeImage(2, 0, 0),
              alt: "Screen map of the current Bustime app: settings, main flow and multi-select",
            },
            {
              ...bustimeImage(2, 0, 1),
              alt: "Current Bustime information architecture: home with transport types, a bus route and a long menu",
            },
            {
              ...bustimeImage(2, 0, 2),
              alt: "New information architecture: map, favorites, transport and settings with subsections",
            },
          ],
        },
      ],
    },
    {
      ...bustime.stages[3],
      label: "Visual design",
      heading: "Visual design",
      paragraphs: ["_The updated visual design and final screens go here._"],
    },
  ],
  nextCase: {
    title: "Vecta — a service for robotaxi engineers",
    subtitle: "Fleet monitoring and incident management",
    href: "/en/cases/vecta",
  },
};
