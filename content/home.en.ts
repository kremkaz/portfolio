import { profilePhoto } from "./site";
import type { CaseStatus, HomeContent } from "./home";

const emailAddress = "evgenia_artyushina@mail.ru";

/** Английская версия главной. Структура та же, что у русской в home.ts. */
export const homeEn: HomeContent = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#cases" },
      { label: "Skills", href: "#skills" },
    ],
    socials: [{ label: "Telegram", href: "https://t.me/ArtyushinaEvgenia", icon: "telegram" as const }],
  },
  hero: {
    name: "Evgenia Artyushina",
    role: "Product Designer | UX/UI",
    bio: [
      "A design degree and a wide range of interests. I love UX, people and technology <3",
      "I get excited about new projects, regularly take courses to go deeper into specific topics, and keep up with the industry — Yandex Product Fest, UX CX Conf, Masshtab (HSE University).",
    ],
    photo: profilePhoto.src,
  },
  cases: {
    heading: "Case studies",
    items: [
      {
        tags: ["B2B", "Desktop"],
        title: "Vecta — a service for robotaxi engineers",
        subtitle: "Fleet monitoring and incident management",
        description:
          "Test assignment for a T-Bank internship. A B2B concept: how one engineer can keep track of dozens of cars.",
        cover: "/home/vecta-card-cover.jpg",
        year: "2026",
        status: "published" as CaseStatus,
        href: "/en/cases/vecta",
      },
      {
        tags: ["B2C", "Mobile"],
        title: "Tanuki — customizing a dish",
        subtitle: "Ingredient customization for food delivery",
        description:
          "A flow for customizing a roll: picking ingredients, leaving out what you don't like and flagging allergens.",
        cover: "/home/tanuki-card-cover.jpg",
        year: "2026",
        status: "published" as CaseStatus,
        href: "/en/cases/tanuki",
      },
      {
        tags: ["B2C", "Mobile"],
        title: "Bustime — public transport tracking",
        subtitle: "Tracking buses and more, anywhere in the world",
        description: "Navigation redesign and visual design.",
        cover: "/home/bustime-card-cover-app-3.jpg",
        year: "2026",
        status: "published" as CaseStatus,
        href: "/en/cases/bustime",
      },
    ],
  },
  skills: {
    heading: "Skills, strengths and tools",
    hard: {
      label: "hard",
      items: [
        "AI prototyping",
        "UX research",
        "Usability testing",
        "Product thinking",
        "Design systems",
        "Responsive layout",
      ],
    },
    soft: {
      label: "soft",
      items: [
        "Self-driven",
        "Super friendly",
        "Engaged and curious",
        "Takes initiative",
        "Loves teamwork",
        "Open to feedback",
      ],
    },
    tools: {
      label: "tools",
      items: [
        "Figma",
        "FigJam",
        "Pathway",
        "Claude Code",
        "Photoshop",
        "Illustrator",
        "CorelDraw",
        "Miro",
        "Antigravity",
      ],
    },
  },
  email: {
    address: emailAddress,
    subject: "Hello from your portfolio",
    copiedMessage: "Email copied",
  },
  contactCta: {
    heading: "Let’s create something nice together :)",
    subheading: "Drop me a line — I'll get back to you within a day",
    links: [
      { label: "t.me/ArtyushinaEvgenia", href: "https://t.me/ArtyushinaEvgenia", icon: "telegram" as const },
      { label: emailAddress, href: `mailto:${emailAddress}`, icon: "mail" as const },
    ],
  },
  footer: {
    copyright: "© 2026 Evgenia Artyushina",
    contactsLabel: "Contacts",
    telegram: "t.me/ArtyushinaEvgenia",
  },
};
