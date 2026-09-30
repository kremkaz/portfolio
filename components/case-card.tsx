"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import type { CaseStatus } from "@/content/home";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export type CaseCardProps = {
  index: number;
  locale: Locale;
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  year: string | null;
  status: CaseStatus;
  href: string | null;
};

// Карточка всплывает целиком — рамка, фон и фото вместе, чтобы во время анимации
// не было видно края фото отдельно от рамки. Текст внутри проявляется следом по очереди.
const cardContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.15,
      staggerChildren: 0.12,
      delayChildren: index * 0.15 + 0.15,
    },
  }),
};

const cardBlock: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionLink = motion.create(Link);

export function CaseCard({
  index,
  locale,
  tags,
  title,
  subtitle,
  description,
  cover,
  year,
  status,
  href,
}: CaseCardProps) {
  const t = ui[locale];
  const inProgress = status !== "published" || !href;

  const content = (
    <div className="flex h-full flex-col">
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[#F5F5F7]">
        <Image src={asset(cover)} alt="" fill className="object-cover" />
        {inProgress && (
          // Кейс в разработке: обложка приглушена затемнением с лёгким блюром (как в Figma).
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1.6px]" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <motion.div variants={cardBlock} className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase ${
                  inProgress ? "bg-black/[0.07] text-[#C8C8C8]" : "bg-primary/[0.07] text-primary"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            <p className={`text-lg font-semibold ${inProgress ? "text-[#6D6D6D]" : "text-[#0A0A0A]"}`}>
              {title}
            </p>
            <p className="text-sm text-[#ACACAC]">{subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed text-[#666]">{description}</p>
        </motion.div>
        <motion.div
          variants={cardBlock}
          className="flex items-center justify-between border-t border-[#F0F0F0] pt-4"
        >
          <span className="text-xs text-[#AAA]">{year ?? t.soon}</span>
          {!inProgress ? (
            <span className="flex items-center gap-1 text-sm font-semibold text-primary">
              {t.openCase}
              <img src={asset("/home/icon-arrow-up-right.svg")} alt="" width={18} height={18} />
            </span>
          ) : (
            <span className="text-sm font-semibold text-[#A7A7A7]">{t.inProgress}</span>
          )}
        </motion.div>
      </div>
    </div>
  );

  const className =
    "flex w-full flex-col overflow-hidden rounded-2xl border border-[#E8E8EC] bg-white hover:shadow-[0_12px_32px_-16px_rgba(0,15,220,0.25)]";

  const reveal = {
    custom: index,
    variants: cardContainer,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.2 },
  } as const;

  if (!inProgress && href) {
    return (
      <MotionLink
        href={href}
        {...reveal}
        className={`${className} transition-[box-shadow,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]`}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.div {...reveal} className={`${className} transition-shadow`}>
      {content}
    </motion.div>
  );
}
