import type { CaseStudy } from "./types";
import { bustime } from "./bustime";
import type { CaseImage } from "./types";

const alt = (image: CaseImage | undefined, text: string): CaseImage => ({ ...image!, alt: text });

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
    { label: "Tools", value: "Figma, FigJam, Pathway, Claude" },
    { label: "Platform", value: "mobile" },
  ],
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
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "I mapped the current navigation as a user flow and found **three main problems**:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Duplicate buttons** (map, settings) in different sections. They leave users unsure where to look for things, and the structure keeps growing.",
            "**Hidden features** (notifications, transport display settings and more). Users don't know they exist and don't get their value.",
            "**An onboarding you have to open on every screen.** That means the interface isn't clear on its own.",
          ],
        },
        {
          type: "paragraph",
          text: "Next, I **laid out the core features as a diagram without screens** and started regrouping them: I **wrote every section down on paper** and tried different options. Most sections are standard and self-explanatory, so a **card sorting** session with five people I know was enough to check the grouping. The sorting helped settle **where the “Driver mode” feature belongs**: it moved to the advanced settings. It also helped pin down how sections are laid out in Settings → General.",
        },
        {
          type: "paragraph",
          text: "Separately, I reconsidered the **settings modes: basic, advanced, custom and low-vision.** I dropped the low-vision mode right away. A low-vision user's phone is already set up to help them, and the app's job is not to get in the way, for example by not breaking the screen reader. The other modes are useful, but it's better for users to turn features on themselves, gradually, rather than pick a whole set at once. So I **dropped the modes altogether: by default, users see the basic features**, and the rest is spread across the settings sections and gets turned on as people get to know the product.",
        },
        {
          type: "paragraph",
          text: "**I put together the final navigation in FigJam.**",
        },
        {
          type: "images",
          images: [
            {
              ...bustimeImage(2, 5, 0),
              alt: "Screen map of the current Bustime app: settings, main flow and multi-select",
            },
            {
              ...bustimeImage(2, 5, 1),
              alt: "Current Bustime information architecture: home with transport types, a bus route and a long menu",
            },
            {
              ...bustimeImage(2, 5, 2),
              alt: "Regrouping on paper: settings sections, profile and favorites sketched by hand",
            },
            {
              ...bustimeImage(2, 5, 3),
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
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "Navigation was the main focus of this case, but I didn't want to leave it without visuals. So I designed the key screens and adapted them for dark mode.",
        },
        { type: "paragraph", text: "**The screens are built around three entities:**" },
        {
          type: "list",
          items: [
            "**Transport** — where the buses are going.",
            "**Stop** — which buses pass through a given point.",
            "**Route** — how to get from A to B.",
          ],
        },
        {
          type: "paragraph",
          text: "Each entity can be shown **as cards or as a list**. The format is chosen in the settings of each screen, so users decide what works best for them.",
        },
        {
          type: "paragraph",
          text: "In line with the new navigation, I **added a nav bar**. The transport section got **chips for choosing transport types**. Favorites hold only a few vehicles, so instead of chips there's **a select with one of three options**.",
        },
      ],
    },
  ],
  result: {
    ...bustime.result!,
    heading: "Result",
    note: "Click a screenshot to see it full size",
    after: [
      { type: "paragraph", text: "**What's next?**" },
      {
        type: "list",
        ordered: true,
        items: [
          "Go through every feature of the app and design for all of them. So far **the navigation covers only the main sections**; secondary features aren't in it yet.",
          "**Work out the “Driver mode”**: a dashboard where the driver picks their route and tracks themselves along it.",
          "**Dig deeper into the product and its metrics.** Understand how the new navigation affects feature discoverability: how often people use previously hidden features, such as the get-off notification, and how long the main scenarios, like route planning, take.",
        ],
      },
    ],
    flow: [
      alt(bustime.result!.flow[0], "Map — recent routes (light theme)"),
      alt(bustime.result!.flow[1], "Map — selected stop (light theme)"),
      alt(bustime.result!.flow[2], "Transport — all routes (light theme)"),
      alt(bustime.result!.flow[3], "Route 24 — bus on the line (light theme)"),
      alt(bustime.result!.flow[4], "Stop — nearest buses (light theme)"),
      alt(bustime.result!.flow[5], "Favorites — transport, list (light theme)"),
      alt(bustime.result!.flow[6], "Favorites — transport, tiles (light theme)"),
      alt(bustime.result!.flow[7], "Favorites — stops, detailed (light theme)"),
      alt(bustime.result!.flow[8], "Favorites — stops, brief (light theme)"),
      alt(bustime.result!.flow[9], "Favorites — routes, detailed (light theme)"),
      alt(bustime.result!.flow[10], "Favorites — routes, brief (light theme)"),
      alt(bustime.result!.flow[11], "Route — trip options (light theme)"),
    ],
    screens: [
      alt(bustime.result!.screens[0], "Map — recent routes (dark theme)"),
      alt(bustime.result!.screens[1], "Map — selected stop (dark theme)"),
      alt(bustime.result!.screens[2], "Transport — all routes (dark theme)"),
      alt(bustime.result!.screens[3], "Route 24 — bus on the line (dark theme)"),
      alt(bustime.result!.screens[4], "Stop — nearest buses (dark theme)"),
      alt(bustime.result!.screens[5], "Favorites — transport, list (dark theme)"),
      alt(bustime.result!.screens[6], "Favorites — transport, tiles (dark theme)"),
      alt(bustime.result!.screens[7], "Favorites — stops, detailed (dark theme)"),
      alt(bustime.result!.screens[8], "Favorites — stops, brief (dark theme)"),
      alt(bustime.result!.screens[9], "Favorites — routes, detailed (dark theme)"),
      alt(bustime.result!.screens[10], "Favorites — routes, brief (dark theme)"),
      alt(bustime.result!.screens[11], "Route — trip options (dark theme)"),
    ],
  },
  nextCase: {
    title: "Vecta — a service for robotaxi engineers",
    subtitle: "Fleet monitoring and incident management",
    href: "/en/cases/vecta",
  },
};
