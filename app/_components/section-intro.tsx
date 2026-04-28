export function SectionIntro({
  eyebrow,
  title,
  copy,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.32em] ${
          inverted ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl leading-none sm:text-5xl ${
          inverted ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-8 sm:text-lg ${
          inverted
            ? "text-[color:rgba(245,238,228,0.76)]"
            : "text-[var(--color-muted)]"
        }`}
      >
        {copy}
      </p>
    </div>
  );
}
