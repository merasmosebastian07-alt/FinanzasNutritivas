import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Testimonials() {
  const { eyebrow, title, text, items } = homeCopy.testimonials;

  return (
    <section
      id="testimonios"
      className="scroll-mt-24 bg-paper"
      aria-labelledby="testimonios-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="testimonios-title"
          text={text}
        />

        {items.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {items.map((item, index) => (
              <figure
                key={`${item.name}-${index}`}
                className="min-h-48 border border-navy/10 bg-ivory/50 p-6"
              >
                <p className="font-display text-4xl leading-none text-gold/70">
                  “
                </p>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy/80">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 text-sm font-medium text-navy">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
