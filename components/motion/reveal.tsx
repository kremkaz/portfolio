"use client";

import { motion, type Variants } from "motion/react";
import { createContext, useContext, type ComponentProps } from "react";
import { useAnimateReveal } from "@/lib/first-visit";

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
    // После анимации фильтр снимаем совсем: с filter: blur(0px) браузеры (особенно Safari)
    // рисуют блок отдельным слоем и могут «мылить» картинки внутри.
    transitionEnd: { filter: "none" },
  },
};

/** Без анимации: после первого захода на сайт контент сразу стоит на месте. */
const staticContainer: Variants = { hidden: {}, show: {} };
const staticItem: Variants = {
  hidden: item.hidden,
  show: { opacity: 1, y: 0, filter: "none", transition: { duration: 0 } },
};

const RevealAnimateContext = createContext(true);

type RevealGroupProps = ComponentProps<typeof motion.div> & { as?: "div" | "section" };

/**
 * Скролл-reveal контейнер: дети проявляются по очереди — как бы постепенно из белого
 * (opacity+blur+translateY), см. animations.md #1. Только при первом заходе на сайт.
 */
export function RevealGroup({ as = "div", className, ...props }: RevealGroupProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  const animate = useAnimateReveal();
  const revealProps = animate
    ? ({ whileInView: "show", viewport: { once: true, amount: 0.2 } } as const)
    : ({ animate: "show" } as const);

  return (
    <RevealAnimateContext.Provider value={animate}>
      <MotionTag
        className={className}
        variants={animate ? container : staticContainer}
        initial="hidden"
        {...revealProps}
        {...props}
      />
    </RevealAnimateContext.Provider>
  );
}

export function RevealItem({ className, ...props }: ComponentProps<typeof motion.div>) {
  const animate = useContext(RevealAnimateContext);
  return <motion.div className={className} variants={animate ? item : staticItem} {...props} />;
}
