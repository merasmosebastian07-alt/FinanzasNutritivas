import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Faq() {
  const { eyebrow, title, items } = homeCopy.faq;

  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-24 bg-ivory"
      aria-labelledby="faq-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} titleId="faq-title" />

        <div className="mt-10 divide-y border-y border-navy/10">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-lg text-navy marker:content-none sm:text-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                <span className="flex items-start justify-between gap-4">
                  <span className="min-w-0">{item.question}</span>
                  <span
                    className="mt-1 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl pr-10 text-sm leading-relaxed text-ink/75 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
