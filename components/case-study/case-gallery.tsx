"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StageLabel } from "@/components/case-study/stage-label";
import { ImageLightbox } from "@/components/case-study/image-lightbox";
import type { CaseImage, CaseResult } from "@/content/cases/types";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
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

export function CaseGallery({ result, locale }: { result: CaseResult; locale: Locale }) {
  const t = ui[locale];
  const images = [...result.flow, ...result.screens];
  const portrait = result.orientation === "portrait";
  const gridClass = portrait ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-2";
  const tileClass = portrait ? "aspect-[23/50] rounded-2xl" : "aspect-video rounded-lg";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full scroll-mt-28 px-6 pb-16 sm:pb-20">
      <RevealGroup className="mx-auto flex w-full max-w-4xl flex-col items-start gap-10">
        <RevealItem className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <StageLabel number="04" label={t.moreScreens} />
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

      <ImageLightbox images={images} index={selectedIndex} onIndexChange={setSelectedIndex} />
    </section>
  );
}
