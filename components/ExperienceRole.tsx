"use client";

interface ExperienceRoleProps {
  role: string;
  company: string;
  dateRange: string;
  description: string;
  highlights?: string[];
}

export function ExperienceRole({
  role,
  company,
  dateRange,
  description,
  highlights = [],
}: ExperienceRoleProps) {
  return (
    <article className="pb-8 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="font-serif text-lg font-medium text-foreground">
            {role}
          </h3>
          <p className="text-caption text-muted">{company}</p>
        </div>
        <span className="text-caption text-muted shrink-0 tabular-nums">
          {dateRange}
        </span>
      </div>
      <p className="text-body text-muted leading-relaxed mb-3">{description}</p>
      {highlights.length > 0 && (
        <ul className="space-y-1.5" role="list">
          {highlights.map((item, i) => (
            <li
              key={i}
              className="text-caption text-muted pl-4 border-l border-accent-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
