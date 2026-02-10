"use client";

interface ChipsProps {
  items: string[];
  className?: string;
}

export function Chips({ items, className = "" }: ChipsProps) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`}
      role="list"
      aria-label="Focus areas"
    >
      {items.map((item) => (
        <li key={item}>
          <span className="inline-block text-caption text-muted border border-accent-soft rounded-full px-3 py-1.5 bg-accent-soft/40">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
