import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { homeCopy, images } from "@/content/site";

export function Hero() {
  const { eyebrow, title, text, primaryCta, secondaryCta, caption } =
    homeCopy.hero;

  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden bg-ivory"
      aria-labelledby="hero-title"
    >
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1
            id="hero-title"
            className="max-w-xl font-display text-4xl leading-[1.12] font-semibold text-navy sm:text-5xl lg:text-[3.35rem]"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            {text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href} external>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 items-end gap-4">
            <figure className="relative col-span-8 aspect-[4/5] overflow-hidden bg-ivory-deep">
              <ContentImage
                src={images.heroPrimary.src}
                alt={images.heroPrimary.alt}
                sizes="(max-width: 1024px) 70vw, 32vw"
                objectPosition={images.heroPrimary.objectPosition}
                priority
              />
            </figure>
            <figure className="relative col-span-4 mb-6 aspect-[3/4] overflow-hidden bg-ivory-deep sm:mb-10">
              <ContentImage
                src={images.heroSecondary.src}
                alt={images.heroSecondary.alt}
                sizes="(max-width: 1024px) 30vw, 16vw"
                objectPosition={images.heroSecondary.objectPosition}
              />
            </figure>
          </div>
          <p className="mt-4 max-w-xs text-xs tracking-[0.16em] text-navy/55 uppercase">
            {caption}
          </p>
        </div>
      </Container>
    </section>
  );
}
