"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StageLabel } from "@/components/case-study/stage-label";
import type { CaseImage, CaseResult } from "@/content/cases/types";
import { asset } from "@/lib/asset";

function GalleryTile({
  image,
  className = "",
  onOpen,
}: {
  image: CaseImage;
  className?: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`relative overflow-hidden bg-[#F5F5F7] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] ${className}`}
    >
      <Image src={asset(image.src)} alt={image.alt} fill className="object-cover" />
    </button>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -120, opacity: 0 }),
};

export function CaseGallery({ result }: { result: CaseResult }) {
  const images = [...result.flow, ...result.screens];
  const portrait = result.orientation === "portrait";
  const gridClass = portrait ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-2";
  const tileClass = portrait ? "aspect-[23/50] rounded-2xl" : "aspect-video rounded-lg";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // 1 — листаем вперёд (новый кадр въезжает справа), -1 — назад.
  const [direction, setDirection] = useState(1);
  const selected: CaseImage | null = selectedIndex !== null ? images[selectedIndex] : null;

  const step = (dir: 1 | -1) => {
    setDirection(dir);
    setSelectedIndex((i) =>
      i === null ? null : (i + dir + images.length) % images.length,
    );
  };
  const goPrev = () => step(-1);
  const goNext = () => step(1);

  useEffect(() => {
    if (selectedIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedIndex(null);
      const dir = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0;
      if (dir) {
        setDirection(dir);
        setSelectedIndex((i) => (i === null ? null : (i + dir + images.length) % images.length));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <section className="w-full scroll-mt-28 px-6 pb-20 sm:pb-28">
      <RevealGroup className="mx-auto flex w-full max-w-4xl flex-col items-start gap-10">
        <RevealItem className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <StageLabel number="04" label="Больше экранов" />
            <h2 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl">
              {result.heading}
            </h2>
          </div>
          <p className="max-w-[280px] text-sm text-[#888] sm:text-right">{result.note}</p>
        </RevealItem>

        <RevealItem className={`grid w-full gap-4 ${gridClass}`}>
          {result.flow.map((image, i) => (
            <GalleryTile
              key={`${image.src}-${i}`}
              image={image}
              className={tileClass}
              onOpen={() => setSelectedIndex(i)}
            />
          ))}
        </RevealItem>

        {result.screens.length > 0 && (
          <RevealItem className={`grid w-full gap-4 ${gridClass}`}>
            {result.screens.map((image, i) => (
              <GalleryTile
                key={`${image.src}-${i}`}
                image={image}
                className={tileClass}
                onOpen={() => setSelectedIndex(result.flow.length + i)}
              />
            ))}
          </RevealItem>
        )}
      </RevealGroup>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 sm:bg-black/80 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="Закрыть"
              className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" aria-hidden />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Предыдущий скриншот"
              className="absolute left-4 z-10 hidden size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:flex"
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={selectedIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-full max-w-4xl cursor-grab overflow-hidden active:cursor-grabbing sm:rounded-lg"
                onClick={(e) => e.stopPropagation()}
                // Свайп влево/вправо листает скриншоты (на телефоне стрелки скрыты).
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(_, info) => {
                  const swipe = info.offset.x + info.velocity.x * 0.2;
                  if (swipe < -60) goNext();
                  else if (swipe > 60) goPrev();
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

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Следующий скриншот"
              className="absolute right-4 z-10 hidden size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:flex"
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
