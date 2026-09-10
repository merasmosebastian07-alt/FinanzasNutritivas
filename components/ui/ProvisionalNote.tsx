export function ProvisionalNote({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "on-dark";
}) {
  const onDark = tone === "on-dark";

  return (
    <p
      data-provisional="true"
      className={
        onDark
          ? "mt-3 max-w-xl text-[0.7rem] leading-relaxed text-paper/40"
          : "mt-3 max-w-xl text-[0.7rem] leading-relaxed text-navy/40"
      }
    >
      {children}
    </p>
  );
}
