type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-bold tracking-tight text-zinc-900 ${eyebrow ? "mt-2" : ""} ${isCenter ? "text-3xl" : "text-2xl sm:text-3xl"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 leading-relaxed text-zinc-600 ${isCenter ? "" : "text-base"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
