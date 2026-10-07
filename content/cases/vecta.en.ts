import type { CaseImage, CaseStudy } from "./types";
import { vecta } from "./vecta";

const alt = (image: CaseImage | undefined, text: string): CaseImage => ({ ...image!, alt: text });

const [context, research, hypothesis, wireframes] = vecta.stages;

/** Английская версия кейса Vecta: картинки те же, тексты свои. */
export const vectaEn: CaseStudy = {
  ...vecta,
  backLabel: "Back to case studies",
  backHref: "/en#cases",
  title: "Vecta — a service concept for robotaxi engineers",
  facts: [
    { label: "Role", value: "UI/UX designer" },
    { label: "Tools", value: "Figma, Perplexity" },
    { label: "Platform", value: "Desktop" },
  ],
  subtitle: "A B2B service concept for robotaxi engineers",
  meta: {
    role: "UI/UX designer",
    duration: "2 weeks",
    type: "B2B / Dashboards",
    tools: ["Figma", "Miro"],
  },
  cover: alt(
    vecta.cover,
    "Vecta cover: fleet monitoring dashboard, incident card and a self-driving car mockup",
  ),
  stages: [
    {
      ...context,
      label: "Context & task",
      heading: "Designing for engineers who watch dozens of cars at once",
      paragraphs: [
        "Vecta is a self-driving taxi service. A team of engineers monitors the fleet remotely and responds to incidents. I worked on this case during my product design internship at T-Bank in 2026.",
        "A robotaxi offers the same ride as a regular taxi, but **without its biggest expense — the driver.** The catch is that autopilot still can't handle every unusual situation correctly. A car might stop in front of a closed street, lose its connection, miss a traffic officer's hand signal or run out of battery sooner than predicted. **In situations like these, an engineer has to step in.**",
        "That's why **the key economic factor is how many cars one engineer is responsible for.** If every car needs its own person, a robotaxi costs more than a regular taxi: the company pays for both the autopilot and the staff. **The more cars each engineer can handle, the lower the cost per ride.**",
        "The size of the fleet is limited by the engineer's attention. Attention is a scarce resource, and it's exactly what Vecta is designed around.",
      ],
    },
    {
      ...research,
      label: "Research",
      heading: "Getting to know robotaxis and the cars behind them",
      paragraphs: [
        "I started with market research: who has already launched a robotaxi service, and in what form.",
        "Key insights: (1) **Waymo** is the most visible player in the US, with rides in about 11 cities and 500,000 paid trips a week; (2) China leads by volume — **Baidu's Apollo Go** has carried more than 22 million passengers in total; (3) **WeRide** runs fully driverless paid rides in Dubai through Uber.",
        "Meanwhile, I got to know the product itself by watching Waymo ride reviews. In one of them I noticed that passengers **can call a support operator from the in-car touchscreen.**",
      ],
      aside: "This will shape the interface later 🦋",
      images: [
        alt(research.images?.[0], "A self-driving car on a test ride"),
        alt(research.images?.[1], "A review of a Waymo robotaxi ride"),
      ],
    },
    {
      ...hypothesis,
      label: "Hypotheses",
      heading: "Takeaways",
      paragraphs: [
        "From the research I formed the main hypothesis: the most common scenario — handling an incident — has to be as **fast** as possible, with **as few text fields** as possible.",
        "An incident should also make it obvious when it came **from an operator:** those are validated first and need a faster response.",
      ],
      image: alt(
        hypothesis.image,
        "Before and after: the incident card went from text fields and checkboxes to quick tag actions",
      ),
    },
    {
      ...wireframes,
      label: "From IA to wireframes",
      heading: "IA and first wireframes",
      paragraphs: [
        "Every incident is a labeled example of a situation the autopilot couldn't handle. Classifying incidents by category, type and vehicle model turns a shift's work into a dataset for the ML team and reliability stats for the fleet team. Fewer incidents mean more vehicles per engineer and a lower cost per ride.",
        "I sketched the first ideas on paper and dropped the ones that didn't work along the way, which saved a lot of time. I picked the incident-handling scenario to design and refined the clean wireframe in Figma.",
        "Finding real-world B2B product designs is hard: companies rarely show these interfaces publicly. So I also drew on concepts.",
      ],
      images: [
        alt(
          wireframes.images?.[0],
          "Information architecture of incident categories: movement, mechanics & software, energy, external",
        ),
        alt(wireframes.images?.[1], "Paper sketches of the incident-handling wireframes"),
        alt(
          wireframes.images?.[2],
          "References: fleet monitoring dashboards with a map, a vehicle list and notifications",
        ),
      ],
    },
  ],
  result: vecta.result && {
    ...vecta.result,
    heading: "Result",
    note: "Click a screenshot to see it full size",
    flow: [
      alt(vecta.result.flow[0], "Incident handling: vehicle details card and map"),
      alt(vecta.result.flow[1], "Incident handling: an operator-reported incident with quick actions"),
      alt(vecta.result.flow[2], "Incident handling: confirming and dispatching a crew"),
      alt(vecta.result.flow[3], "Incident handling: escalating to an engineer"),
    ],
    screens: [
      alt(vecta.result.screens[0], "Table of all incidents"),
      alt(vecta.result.screens[1], "Statistics section in settings"),
    ],
  },
  nextCase: {
    title: "Tanuki delivery — customize your dish",
    subtitle: "A feature for changing what goes into a dish",
    href: "/en/cases/tanuki",
  },
};
