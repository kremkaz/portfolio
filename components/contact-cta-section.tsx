import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { EmailLink } from "@/components/email-link";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { asset } from "@/lib/asset";

const icons = {
  telegram: "/home/icon-telegram.svg",
  mail: "/home/icon-mail.svg",
} as const;

export function ContactCtaSection({ locale }: { locale: Locale }) {
  const { contactCta } = home[locale];

  return (
    <section id="contact" className="w-full scroll-mt-8 bg-primary px-6 py-20 sm:py-28">
      <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <RevealItem>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {contactCta.heading}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="text-base text-white/90 sm:text-lg">{contactCta.subheading}</p>
        </RevealItem>
        <RevealItem className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          {contactCta.links.map((link) => {
            const className =
              "group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 sm:w-72 text-sm font-semibold text-primary transition-[translate,color] hover:-translate-y-0.5 hover:text-primary-hover sm:text-base";
            const content = (
              <>
                <img
                  src={asset(icons[link.icon])}
                  alt=""
                  width={20}
                  height={20}
                  className="transition-[filter] group-hover:brightness-80"
                />
                {link.label}
              </>
            );
            return link.icon === "mail" ? (
              <EmailLink key={link.href} locale={locale} className={className}>
                {content}
              </EmailLink>
            ) : (
              <a key={link.href} href={link.href} className={className}>
                {content}
              </a>
            );
          })}
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
