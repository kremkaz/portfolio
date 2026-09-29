import Image from "next/image";
import type { ReactNode } from "react";
import { StageLabel } from "@/components/case-study/stage-label";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { renderRichText } from "@/lib/rich-text";
import type { CaseImage, CaseStageBlock, CaseStat } from "@/content/cases/types";
import { asset } from "@/lib/asset";

export function CaseStageSection({
  number,
  label,
  heading,
  children,
}: {
  number: string;
  label: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <RevealGroup className="flex w-full flex-col items-start gap-6">
      <RevealItem className="flex flex-col gap-4">
        <StageLabel number={number} label={label} />
        <h2 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl">
          {heading}
        </h2>
      </RevealItem>
      {children}
    </RevealGroup>
  );
}

export function CaseParagraph({ children }: { children: string }) {
  return <p className="text-base leading-relaxed text-[#555]">{renderRichText(children)}</p>;
}

export function CaseAside({ children }: { children: string }) {
  return <p className="text-base text-[#888] italic">{children}</p>;
}

export function CaseFigure({
  image,
  className = "",
  bordered = true,
  fill = false,
}: {
  image: CaseImage;
  className?: string;
  bordered?: boolean;
  /** Картинка заполняет контейнер заданных пропорций (object-cover) вместо собственной высоты. */
  fill?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white ${bordered ? "border border-[#ECECEC]" : ""} ${className}`}
    >
      <Image
        src={asset(image.src)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={fill ? "size-full object-cover" : "h-auto w-full object-cover"}
      />
    </div>
  );
}

export function CaseSubheading({ children }: { children: string }) {
  return (
    <h3 className="pt-4 text-2xl font-semibold tracking-tight text-[#0A0A0A] sm:text-[26px]">
      {children}
    </h3>
  );
}

export function CaseStats({ items }: { items: CaseStat[] }) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-x-10 gap-y-6 py-2">
      {items.map((stat) => (
        <div key={stat.value} className="flex w-[140px] flex-col items-center gap-3 text-center">
          <span className="rounded-full bg-[#FF2D85] px-8 py-4 text-2xl leading-7 font-semibold text-white">
            {stat.value}
          </span>
          <span className="text-base leading-[19px] text-[#909090]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Рендерит свободную последовательность блоков этапа. Идущие подряд абзацы
 * собираются в одну группу (как в Vecta), остальные блоки — отдельный reveal.
 */
export function CaseBlocks({ blocks }: { blocks: CaseStageBlock[] }) {
  const groups: CaseStageBlock[][] = [];
  for (const block of blocks) {
    const last = groups.at(-1);
    if (block.type === "paragraph" && last?.[0].type === "paragraph") last.push(block);
    else groups.push([block]);
  }

  return groups.map((group, i) => {
    const block = group[0];
    return (
      <RevealItem key={i} className="flex w-full flex-col gap-4">
        {block.type === "paragraph" &&
          group.map(
            (p, j) => p.type === "paragraph" && <CaseParagraph key={j}>{p.text}</CaseParagraph>,
          )}
        {block.type === "subheading" && <CaseSubheading>{block.text}</CaseSubheading>}
        {block.type === "image" && <CaseFigure image={block.image} bordered={block.bordered} />}
        {block.type === "stats" && <CaseStats items={block.items} />}
      </RevealItem>
    );
  });
}
