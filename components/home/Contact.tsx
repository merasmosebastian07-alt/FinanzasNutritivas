import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { homeCopy, site } from "@/content/site";

export function Contact() {
  const { eyebrow, title, text } = homeCopy.contact;

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-ivory"
      aria-labelledby="contacto-title"
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
          <h2
            id="contacto-title"
            className="mt-3 font-display text-3xl leading-snug font-semibold text-navy sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80">{text}</p>

          <address className="mt-8 not-italic">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-navy underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={site.phone.href}
                className="text-navy underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {site.phone.display}
              </a>
            </p>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={site.whatsapp.href} external>
              {site.whatsapp.label}
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary">
              Llamar ahora
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
