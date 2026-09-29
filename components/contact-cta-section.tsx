import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { EmailLink } from "@/components/email-link";
import { contactCta } from "@/content/home";
import { asset } from "@/lib/asset";

const icons = {
  telegram: "/home/icon-telegram.svg",
  mail: "/home/icon-mail.svg",
} as const;

export function ContactCtaSection() {
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
        <RevealItem className="flex w-full flex-wrap items-center justify-center gap-3 pt-2 sm:w-auto">
          {contactCta.links.map((link) => {
            const className =
              "flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:text-base";
            const content = (
              <>
                <img src={asset(icons[link.icon])} alt="" width={20} height={20} />
                {link.label}
              </>
            );
            return link.icon === "mail" ? (
              <EmailLink key={link.href} className={className}>
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
