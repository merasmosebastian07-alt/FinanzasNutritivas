import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Process() {
  const { eyebrow, title, intro, steps } = homeCopy.process;

  return (
    <section
      id="proceso"
      className="scroll-mt-24 bg-paper"
      aria-labelledby="proceso-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="proceso-title"
          text={intro}
        />

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="font-display text-4xl text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
