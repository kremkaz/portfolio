import Link from "next/link";
import type { CaseStudy } from "@/content/cases/types";
import { Icon } from "@/components/icon";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CaseFigure } from "@/components/case-study/case-stage-section";

/**
 * Верх страницы кейса без цветной подложки: заголовок → обложка → короткие факты списком.
 */
export function CaseIntro({ study }: { study: CaseStudy }) {
  return (
    <section className="w-full px-6 pt-6 sm:pt-8">
      <RevealGroup className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8 sm:gap-10">
        <RevealItem className="flex flex-col items-start gap-6">
          <Link
            href={study.backHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#666] hover:text-primary"
          >
            <Icon src="/cases/vecta/icon-arrow-left.svg" className="size-4" />
            {study.backLabel}
          </Link>
          <h1 className="max-w-3xl text-3xl leading-tight font-medium tracking-tight text-[#0A0A0A] sm:text-5xl">
            {study.title}
          </h1>
        </RevealItem>

        <RevealItem className="w-full">
          <CaseFigure image={study.cover} bordered={false} />
        </RevealItem>

        {study.facts && (
          <RevealItem>
            <ul className="flex flex-col gap-2 text-base sm:text-lg">
              {study.facts.map((fact) => (
                <li key={fact.label} className="flex gap-2.5">
                  <span aria-hidden className="text-[#AAA]">
                    ·
                  </span>
                  <span>
                    <span className="text-[#888]">{fact.label}: </span>
                    <span className="text-[#0A0A0A]">{fact.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </RevealItem>
        )}
      </RevealGroup>
    </section>
  );
}
