import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { homeCopy, images } from "@/content/site";

export function Identify() {
  const { eyebrow, title, text, questions } = homeCopy.identify;

  return (
    <section
      className="scroll-mt-24 bg-ivory"
      aria-labelledby="identificar-title"
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
          <h2
            id="identificar-title"
            className="mt-3 font-display text-3xl leading-snug font-semibold text-navy sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80">
            {text}
          </p>
          <ul className="mt-10 space-y-6">
            {questions.map((question) => (
              <li
                key={question}
                className="border-l-2 border-gold/70 pl-4 font-display text-lg leading-relaxed text-navy sm:pl-5 sm:text-xl lg:text-2xl lg:leading-snug"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative aspect-[4/5] overflow-hidden bg-ivory-deep lg:col-span-5">
          <ContentImage
            src={images.identify.src}
            alt={images.identify.alt}
            sizes="(max-width: 1024px) 100vw, 40vw"
            objectPosition={images.identify.objectPosition}
          />
        </figure>
      </Container>
    </section>
  );
}
