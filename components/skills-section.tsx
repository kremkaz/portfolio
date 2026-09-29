"use client";

import { motion } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { skills } from "@/content/home";

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
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {items.map((item, index) => {
        const tiltRight = index % 2 === 0 && !(firstTiltsLeft && index === 0);
        return (
          <motion.span
            key={item}
            whileHover={tiltRight ? { x: 3, y: -5, rotate: -3 } : { x: -3, y: -5, rotate: 3 }}
            transition={{ type: "spring", stiffness: 350, damping: 12 }}
            className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap text-white ${className}`}
          >
            {item}
          </motion.span>
        );
      })}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="flex w-full scroll-mt-28 flex-col items-center gap-10">
      <RevealGroup className="flex w-full flex-col items-center gap-10">
        <RevealItem>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111212] sm:text-4xl">
            {skills.heading}
          </h2>
        </RevealItem>
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-stretch md:justify-center md:gap-12">
          <RevealItem className="flex w-full flex-col items-center gap-4 md:w-[400px]">
            <p className="text-xs font-medium tracking-widest text-[#AAA] uppercase">
              {skills.hard.label}
            </p>
            <ChipGroup items={skills.hard.items} className="bg-primary" firstTiltsLeft />
          </RevealItem>
          <div className="hidden w-px self-stretch bg-[#EBEBEB] md:block" />
          <RevealItem className="flex w-full flex-col items-center gap-4 md:w-[440px]">
            <p className="text-xs font-medium tracking-widest text-[#AAA] uppercase">
              {skills.soft.label}
            </p>
            <ChipGroup items={skills.soft.items} className="bg-[#FF2D85]" />
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
