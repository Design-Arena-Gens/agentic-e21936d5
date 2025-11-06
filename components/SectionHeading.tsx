type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id
}: SectionHeadingProps) {
  return (
    <div id={id} className="mx-auto mb-10 flex w-full max-w-5xl flex-col gap-3">
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-accent-secondary/70">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-base text-white/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
