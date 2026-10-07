import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CaseIntro } from "@/components/case-study/case-intro";
import { CaseGallery } from "@/components/case-study/case-gallery";
import { NextCaseSection } from "@/components/case-study/next-case-section";
import {
  CaseBlocks,
  CaseParagraph,
  CaseStageSection,
} from "@/components/case-study/case-stage-section";
import { RevealItem } from "@/components/motion/reveal";
import { caseStudies } from "@/content/cases";
import type { Locale } from "@/lib/i18n";

export function TanukiCasePage({ locale }: { locale: Locale }) {
  const tanuki = caseStudies.tanuki[locale];
  return (
    <div className="flex min-h-full flex-col bg-white pt-4 sm:pt-6">
      <SiteHeader />
      <CaseIntro study={tanuki} />

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-16 px-6 pt-16 pb-16 sm:gap-20 sm:pt-20 sm:pb-20">

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

      {tanuki.result && <CaseGallery result={tanuki.result} locale={locale} />}

      <NextCaseSection next={tanuki.nextCase} locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}
