import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/content/site";

export function ClosingCta() {
  const { eyebrow, title, text, cta } = homeCopy.closingCta;

  return (
    <section
      className="scroll-mt-24 bg-navy text-paper"
      aria-labelledby="cierre-title"
    >
      <Container className="py-20 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
          {eyebrow}
        </p>
        <h2
          id="cierre-title"
          className="mt-4 max-w-3xl font-display text-3xl leading-snug font-semibold sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper sm:text-lg">
          {text}
        </p>
        <div className="mt-10">
          <ButtonLink href={cta.href} variant="on-dark" external>
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
