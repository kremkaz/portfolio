import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseCallout } from "@/components/case-study/case-callout";
import { CaseGallery } from "@/components/case-study/case-gallery";
import { NextCaseSection } from "@/components/case-study/next-case-section";
import {
  CaseAside,
  CaseFigure,
  CaseParagraph,
  CaseStageSection,
} from "@/components/case-study/case-stage-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { caseStudies } from "@/content/cases";
import type { Locale } from "@/lib/i18n";

export function VectaCasePage({ locale }: { locale: Locale }) {
  const vecta = caseStudies.vecta[locale];
  const [contextStage, researchStage, hypothesisStage, wireframeStage] = vecta.stages;

  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteHeader />
      <CaseHero study={vecta} locale={locale} />

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-20 px-6 pt-10 pb-20 sm:gap-28 sm:pt-14 sm:pb-28">
        <RevealGroup className="w-full">
          <RevealItem>
            <CaseFigure image={vecta.cover} />
          </RevealItem>
        </RevealGroup>

        <CaseStageSection
          number={contextStage.number}
          label={contextStage.label}
          heading={contextStage.heading}
        >
          <RevealItem className="flex w-full flex-col gap-6">
            {contextStage.paragraphs.map((paragraph) => (
              <CaseParagraph key={paragraph}>{paragraph}</CaseParagraph>
            ))}
            {vecta.callout && <CaseCallout {...vecta.callout} locale={locale} />}
          </RevealItem>
        </CaseStageSection>

        <CaseStageSection
          number={researchStage.number}
          label={researchStage.label}
          heading={researchStage.heading}
        >
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <RevealItem className="flex flex-col gap-4">
              {researchStage.paragraphs.map((paragraph) => (
                <CaseParagraph key={paragraph}>{paragraph}</CaseParagraph>
              ))}
              {researchStage.aside && <CaseAside>{researchStage.aside}</CaseAside>}
            </RevealItem>
            <RevealItem className="flex flex-col gap-5">
              {researchStage.images?.map((image) => (
                <CaseFigure key={image.src} image={image} />
              ))}
            </RevealItem>
          </div>
        </CaseStageSection>

        <CaseStageSection
          number={hypothesisStage.number}
          label={hypothesisStage.label}
          heading={hypothesisStage.heading}
        >
          <RevealItem className="flex w-full flex-col gap-4">
            {hypothesisStage.paragraphs.map((paragraph) => (
              <CaseParagraph key={paragraph}>{paragraph}</CaseParagraph>
            ))}
          </RevealItem>
          {hypothesisStage.image && (
            <RevealItem className="w-full">
              <CaseFigure image={hypothesisStage.image} />
            </RevealItem>
          )}
        </CaseStageSection>

        <CaseStageSection
          number={wireframeStage.number}
          label={wireframeStage.label}
          heading={wireframeStage.heading}
        >
          <RevealItem className="w-full">
            <CaseParagraph>{wireframeStage.paragraphs[0]}</CaseParagraph>
          </RevealItem>
          {wireframeStage.images?.[0] && (
            <RevealItem className="w-full">
              <CaseFigure image={wireframeStage.images[0]} bordered={false} />
            </RevealItem>
          )}
          <RevealItem className="flex w-full flex-col gap-4">
            {wireframeStage.paragraphs.slice(1).map((paragraph) => (
              <CaseParagraph key={paragraph}>{paragraph}</CaseParagraph>
            ))}
          </RevealItem>
          {/* Скетчи и референсы — рядом, одинакового размера. */}
          <RevealItem className="mx-auto grid w-full max-w-sm grid-cols-1 gap-4 sm:max-w-2xl sm:grid-cols-2">
            {wireframeStage.images?.slice(1).map((image) => (
              <CaseFigure key={image.src} image={image} className="aspect-[2/3]" fill />
            ))}
          </RevealItem>
        </CaseStageSection>
      </main>

      {vecta.result && <CaseGallery result={vecta.result} locale={locale} />}

      <NextCaseSection next={vecta.nextCase} locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}
