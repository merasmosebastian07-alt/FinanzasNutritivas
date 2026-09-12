import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { homeCopy, images } from "@/content/site";

export function About() {
  const { id, eyebrow, title, paragraphs, origin, pullQuote, formation } =
    homeCopy.about;

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-ivory"
      aria-labelledby="sobre-title"
    >
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14">
        <figure className="relative aspect-[4/5] overflow-hidden bg-ivory-deep lg:col-span-5">
          <ContentImage
            src={images.about.src}
            alt={images.about.alt}
            sizes="(max-width: 1024px) 100vw, 40vw"
            objectPosition={images.about.objectPosition}
          />
        </figure>

        <div className="lg:col-span-7">
          <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
          <h2
            id="sobre-title"
            className="mt-3 max-w-2xl font-display text-3xl leading-snug font-semibold text-navy sm:text-4xl"
          >
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-display text-xl leading-snug font-semibold text-navy sm:text-2xl">
              {origin.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/80 sm:text-lg">
              {origin.text}
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-xl leading-relaxed text-navy">
            {pullQuote}
          </blockquote>

          <div className="mt-10 border-t border-navy/10 pt-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
              {formation.title}
            </p>
            <ul className="mt-5 grid gap-6 sm:grid-cols-2">
              {formation.items.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-lg leading-snug text-navy">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {item.detail}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {item.institution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
