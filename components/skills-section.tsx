"use client";

import { motion } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";

function ChipGroup({
  items,
  className,
  firstTiltsLeft = false,
}: {
  items: string[];
  className: string;
  /** Первый чипс наклоняется в обратную сторону от общего чередования. */
  firstTiltsLeft?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {items.map((item, index) => {
        const tiltRight = index % 2 === 0 && !(firstTiltsLeft && index === 0);
        return (
          <motion.span
            key={item}
            whileHover={tiltRight ? { x: 3, y: -5, rotate: -3 } : { x: -3, y: -5, rotate: 3 }}
            transition={{ type: "spring", stiffness: 350, damping: 12 }}
            className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold whitespace-nowrap ${className}`}
          >
            {item}
          </motion.span>
        );
      })}
    </div>
  );
}

export function SkillsSection({ locale }: { locale: Locale }) {
  const { skills } = home[locale];
  // Чипсы полупрозрачные, как теги в карточках кейсов.
  const groups = [
    { key: "hard", ...skills.hard, className: "bg-primary/[0.07] text-primary", firstTiltsLeft: true },
    { key: "soft", ...skills.soft, className: "bg-[#FF2D85]/[0.07] text-[#FF2D85]", firstTiltsLeft: false },
    { key: "tools", ...skills.tools, className: "bg-black/[0.07] text-[#111212]", firstTiltsLeft: false },
  ];

  return (
    <section id="skills" className="flex w-full scroll-mt-28 flex-col items-center gap-10">
      <RevealGroup className="flex w-full flex-col items-center gap-10">
        <RevealItem>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111212] sm:text-4xl">
            {skills.heading}
          </h2>
        </RevealItem>
        <div className="grid w-full gap-10 lg:grid-cols-3">
          {groups.map((group) => (
            <RevealItem key={group.key} className="flex flex-col items-start gap-4">
              <p className="text-xs font-medium tracking-widest text-[#AAA] uppercase">
                {group.label}
              </p>
              <ChipGroup
                items={group.items}
                className={group.className}
                firstTiltsLeft={group.firstTiltsLeft}
              />
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
