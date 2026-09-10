import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Resources() {
  const { eyebrow, title, text, emptyLabel, cta, items } = homeCopy.resources;

  return (
    <section
      id="recursos"
      className="scroll-mt-24 bg-ivory"
      aria-labelledby="recursos-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="recursos-title"
          text={text}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.href}
              className="flex min-h-36 flex-col border border-navy/10 bg-paper/70 p-6"
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase">
                {emptyLabel}
              </p>
              <p className="mt-4 font-display text-lg leading-snug text-navy">
                {item.title}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={item.href}
                  download={item.download}
                  variant="secondary"
                  className="px-5 text-xs"
                >
                  {cta}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
