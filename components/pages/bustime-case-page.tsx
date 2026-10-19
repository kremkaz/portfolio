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
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

/** Bustime — кейс в процессе, та же структура, что у Tanuki. */
export function BustimeCasePage({ locale }: { locale: Locale }) {
  const bustime = caseStudies.bustime[locale];
  const t = ui[locale];
  return (
    <div className="flex min-h-full flex-col bg-white pt-4 sm:pt-6">
      <SiteHeader />
      <CaseIntro study={bustime} />

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-16 px-6 pt-16 pb-16 sm:gap-20 sm:pt-20 sm:pb-20">
        {bustime.stages.map((stage, i) => {
          const section = (
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
          );

          // Кейс в процессе: последний этап виден наполовину и уходит в градиент к белому.
          if (i !== bustime.stages.length - 1) return section;
          return (
            <div
              key={stage.number}
              className="flex w-full flex-col items-center gap-6"
            >
              <div className="relative max-h-40 w-full overflow-hidden">
                {section}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 from-25% to-white to-90%" />
              </div>
              <span className="rounded-full bg-primary/[0.07] px-5 py-2 text-sm font-semibold tracking-wide text-primary">
                {t.inProcess}
              </span>
            </div>
          );
        })}
      </main>

      {bustime.result && (
        <CaseGallery result={bustime.result} locale={locale} />
      )}

      {/* Кейс в процессе — без «Следующего кейса», только возврат к портфолио. */}
      <NextCaseSection locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}
