import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseGallery } from "@/components/case-study/case-gallery";
import { NextCaseSection } from "@/components/case-study/next-case-section";
import {
  CaseBlocks,
  CaseFigure,
  CaseParagraph,
  CaseStageSection,
} from "@/components/case-study/case-stage-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { tanuki } from "@/content/cases/tanuki";

export const metadata: Metadata = {
  title: tanuki.title,
  description: tanuki.subtitle,
};

export default function TanukiCasePage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteHeader />
      <CaseHero study={tanuki} />

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-20 px-6 pt-10 pb-20 sm:gap-28 sm:pt-14 sm:pb-28">
        <RevealGroup className="w-full">
          <RevealItem>
            <CaseFigure image={tanuki.cover} bordered={false} />
          </RevealItem>
        </RevealGroup>

        {tanuki.stages.map((stage) => (
          <CaseStageSection
            key={stage.number}
            number={stage.number}
            label={stage.label}
            heading={stage.heading}
          >
            {stage.paragraphs.length > 0 && (
              <RevealItem className="flex w-full flex-col gap-4">
                {stage.paragraphs.map((paragraph) => (
                  <CaseParagraph key={paragraph}>{paragraph}</CaseParagraph>
                ))}
              </RevealItem>
            )}
            {stage.blocks && <CaseBlocks blocks={stage.blocks} />}
          </CaseStageSection>
        ))}
      </main>

      {tanuki.result && <CaseGallery result={tanuki.result} />}

      <NextCaseSection next={tanuki.nextCase} />
      <SiteFooter />
    </div>
  );
}
