import type { CaseStatus, HomeContent } from "./home";

const emailAddress = "kremkazzz@gmail.com";

/** Английская версия главной. Структура та же, что у русской в home.ts. */
export const homeEn: HomeContent = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#cases" },
      { label: "Skills", href: "#skills" },
    ],
    socials: [{ label: "Telegram", href: "https://t.me/kremka_zzz", icon: "telegram" as const }],
  },
  hero: {
    name: "Evgenia Artyushina",
    role: "Product Designer | UX/UI",
    bio: [
      "A design degree and a wide range of interests. I love UX, people and technology <3",
      "I get excited about new projects, regularly take courses to go deeper into specific topics, and keep up with the industry.",
    ],
    photo: "/home/hero-photo-autumn.jpg",
  },
  cases: {
    heading: "Case studies",
    items: [
      {
        tags: ["B2B", "Desktop"],
        title: "Engineering product concept",
        subtitle: "Vecta — a B2B tool for robotaxi engineers",
        description:
          "A fleet monitoring and incident management system. Test assignment for a T-Bank internship.",
        cover: "/home/case-cover-vecta.jpg",
        year: "2026",
        status: "published" as CaseStatus,
        href: "/en/cases/vecta",
      },
      {
        tags: ["B2C", "Mobile"],
        title: "Tanuki — build your own dish",
        subtitle: "Ingredient customization for food delivery",
        description:
          "A flow for customizing a roll: picking ingredients, leaving out what you don't like and flagging allergens.",
        cover: "/home/case-cover-tanuki.jpg",
        year: "2026",
        status: "published" as CaseStatus,
        href: "/en/cases/tanuki",
      },
      {
        tags: ["B2C", "Desktop"],
        title: "Public transport tracking",
        subtitle: "BusTime — follow buses and more, anywhere in the world.",
        description: "Reworking the navigation, plus a little visual polish.",
        cover: "/home/case-cover-bustime.jpg",
        year: null,
        status: "in-progress" as CaseStatus,
        href: null,
      },
    ],
  },
  skills: {
    heading: "Skills & strengths",
    hard: {
      label: "hard",
      items: [
        "Figma",
        "AI prototyping",
        "UX research",
        "usability testing",
        "product thinking",
        "design systems",
        "responsive layout",
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
        "Photoshop",
        "Illustrator",
        "CorelDraw",
        "Miro",
        "Pathway",
        "Claude Code",
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
      { label: "t.me/kremka_zzz", href: "https://t.me/kremka_zzz", icon: "telegram" as const },
      { label: emailAddress, href: `mailto:${emailAddress}`, icon: "mail" as const },
    ],
  },
  footer: {
    copyright: "© 2026 Evgenia Artyushina",
    contactsLabel: "Contacts",
    telegram: "t.me/kremka_zzz",
  },
};
