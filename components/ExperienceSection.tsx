"use client";

interface ExperienceSectionProps {
  label: string;
  id?: string;
  children: React.ReactNode;
}

export function ExperienceSection({
  label,
  id,
  children,
}: ExperienceSectionProps) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-6 md:gap-12 py-8 md:py-10 first:pt-0 border-b border-accent-soft last:border-0"
    >
      <h2 className="font-sans text-caption font-medium uppercase tracking-widest text-muted shrink-0 md:pt-0.5">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
