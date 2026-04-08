interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, center = false }: SectionHeadingProps) {
  return (
    <header className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-brand-secondary/75 sm:text-lg">{description}</p> : null}
    </header>
  );
}
