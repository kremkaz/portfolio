"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CaseImage } from "@/content/cases/types";
import { ui } from "@/content/ui";
import { getLocale } from "@/lib/i18n";
import { asset } from "@/lib/asset";

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -120, opacity: 0 }),
};

/**
 * Полноэкранный просмотр картинок: стрелки и клавиши ←/→ на компьютере, свайп на телефоне.
 * Рендерится в <body> через портал — иначе fixed-слой обрезался бы анимированными
 * (transform/filter) родителями из scroll-reveal.
 */
export function ImageLightbox({
  images,
  index,
  onIndexChange,
}: {
  images: CaseImage[];
  /** Открытая картинка; null — просмотр закрыт. */
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const t = ui[getLocale(usePathname())];
  // 1 — листаем вперёд (новый кадр въезжает справа), -1 — назад.
  const [direction, setDirection] = useState(1);
  // Портал монтируем после первого открытия: при серверной отрисовке document ещё нет.
  const [mounted, setMounted] = useState(false);
  const multiple = images.length > 1;
  const selected = index !== null ? images[index] : null;

  if (index !== null && !mounted) setMounted(true);

  const step = (dir: 1 | -1) => {
    if (index === null || !multiple) return;
    setDirection(dir);
    onIndexChange((index + dir + images.length) % images.length);
  };

  useEffect(() => {
    if (index === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onIndexChange(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (!mounted) return null;

  const arrowClass =
    "absolute z-10 hidden size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex";

  return createPortal(
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 sm:bg-black/80 sm:p-6"
          onClick={() => onIndexChange(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(null);
            }}
            aria-label={t.close}
            className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-5" aria-hidden />
          </button>

          {multiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label={t.prevScreenshot}
              className={`${arrowClass} left-4 sm:left-6`}
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>
          )}

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              // Скругление задаётся здесь и не зависит от размера картинки (в самих скриншотах углы прямые).
              className={`relative max-h-full max-w-4xl overflow-hidden rounded-lg ${
                multiple ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
              // Свайп влево/вправо листает картинки (на телефоне стрелки скрыты).
              drag={multiple ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                const swipe = info.offset.x + info.velocity.x * 0.2;
                if (swipe < -60) step(1);
                else if (swipe > 60) step(-1);
              }}
            >
              <Image
                src={asset(selected.src)}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                draggable={false}
                className="h-auto max-h-[85vh] w-auto max-w-[100vw] object-contain sm:max-w-full"
              />
            </motion.div>
          </AnimatePresence>

          {multiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={t.nextScreenshot}
              className={`${arrowClass} right-4 sm:right-6`}
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/** Картинка-кнопка: по клику открывается на весь экран. */
export function ZoomableImage({
  image,
  className,
  imageClassName,
}: {
  image: CaseImage;
  className?: string;
  imageClassName?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setIndex(0)}
        aria-label={image.alt}
        className={`block w-full cursor-zoom-in ${className ?? ""}`}
      >
        <Image
          src={asset(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={imageClassName}
        />
      </button>
      <ImageLightbox images={[image]} index={index} onIndexChange={setIndex} />
    </>
  );
}
