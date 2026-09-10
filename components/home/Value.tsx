import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Value() {
  const { eyebrow, title, text, items } = homeCopy.value;

  return (
    <section
      className="scroll-mt-24 border-t border-navy/8 bg-paper"
      aria-labelledby="valor-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="valor-title"
          text={text}
        />

        <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-8">
          {items.map((item, index) => (
            <li key={item.title} className="border-t border-navy/10 pt-5">
              <p className="font-display text-sm text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
