"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealGroupProps = ComponentProps<typeof motion.div> & { as?: "div" | "section" };

/** Скролл-reveal контейнер: дети проявляются по очереди — как бы постепенно из белого (opacity+blur+translateY), см. animations.md #1. */
export function RevealGroup({ as = "div", className, ...props }: RevealGroupProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    />
  );
}

export function RevealItem({ className, ...props }: ComponentProps<typeof motion.div>) {
  return <motion.div className={className} variants={item} {...props} />;
}
