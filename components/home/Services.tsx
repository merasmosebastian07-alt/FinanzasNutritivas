import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/site";

export function Services() {
  const { eyebrow, title, intro, groups } = homeCopy.services;

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-navy text-paper"
      aria-labelledby="servicios-title"
    >
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="servicios-title"
          tone="on-dark"
        />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper">
          {intro}
        </p>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg text-gold-soft">{group.title}</h3>
              <ol className="mt-4 divide-y divide-paper/10 border-y border-paper/10">
                {group.items.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid gap-3 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-8"
                  >
                    <p className="font-display text-sm text-gold-soft sm:col-span-2">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="font-display text-2xl text-paper sm:col-span-4">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-paper sm:col-span-6 sm:text-base">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
