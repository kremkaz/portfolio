import type { Locale } from "@/lib/i18n";
import type { CaseStudy } from "./types";
import { vecta } from "./vecta";
import { vectaEn } from "./vecta.en";
import { tanuki } from "./tanuki";
import { tanukiEn } from "./tanuki.en";
import { bustime } from "./bustime";
import { bustimeEn } from "./bustime.en";

/** Кейсы по языкам: русская версия — в <slug>.ts, английская — в <slug>.en.ts. */
export const caseStudies = {
  vecta: { ru: vecta, en: vectaEn },
  tanuki: { ru: tanuki, en: tanukiEn },
  bustime: { ru: bustime, en: bustimeEn },
} satisfies Record<string, Record<Locale, CaseStudy>>;
