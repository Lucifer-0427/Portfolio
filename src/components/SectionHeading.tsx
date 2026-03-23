type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}
