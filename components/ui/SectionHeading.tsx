type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  text?: string;
  tone?: "light" | "on-dark";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  text,
  tone = "light",
}: SectionHeadingProps) {
  const onDark = tone === "on-dark";

  return (
    <div className="max-w-2xl">
      <p
        className={
          onDark
            ? "text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase"
            : "text-sm font-semibold tracking-[0.18em] text-gold uppercase"
        }
      >
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={
          onDark
            ? "mt-3 font-display text-3xl leading-snug font-semibold text-paper sm:text-4xl"
            : "mt-3 font-display text-3xl leading-snug font-semibold text-navy sm:text-4xl"
        }
      >
        {title}
      </h2>
      {text ? (
        <p
          className={
            onDark
              ? "mt-5 text-base leading-relaxed text-paper/75 sm:text-lg"
              : "mt-5 text-base leading-relaxed text-ink/80 sm:text-lg"
          }
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
