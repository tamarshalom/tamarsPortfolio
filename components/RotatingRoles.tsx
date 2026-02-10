"use client";

import { useState, useEffect } from "react";

export type RoleItem = string | { text: string; tooltip?: string };

interface RotatingRolesProps {
  items: RoleItem[];
  /** Interval in ms between rotations */
  interval?: number;
  className?: string;
}

function getText(item: RoleItem): string {
  return typeof item === "string" ? item : item.text;
}

function getTooltip(item: RoleItem): string | undefined {
  return typeof item === "string" ? undefined : item.tooltip;
}

export function RotatingRoles({
  items,
  interval = 2800,
  className = "",
}: RotatingRolesProps) {
  const [index, setIndex] = useState(0);
  const current = items[index];
  const text = getText(current);
  const tooltip = getTooltip(current);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  const content = tooltip ? (
    <span
      title={tooltip}
      className="border-b border-dotted border-accent/60 cursor-default"
    >
      {text}
    </span>
  ) : (
    text
  );

  return (
    <p
      className={`text-caption text-muted mt-2 min-h-[1.5rem] ${className}`}
      aria-live="polite"
    >
      {content}
    </p>
  );
}
