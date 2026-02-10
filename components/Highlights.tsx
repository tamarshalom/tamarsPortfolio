"use client";

import { motion } from "framer-motion";

interface HighlightsProps {
  items: string[];
  className?: string;
}

export function Highlights({ items, className = "" }: HighlightsProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-lg border border-accent-soft bg-accent-soft/30 px-6 py-5 ${className}`}
      aria-label="Highlights"
    >
      <ul
        className="flex flex-wrap items-center gap-x-6 gap-y-2 text-caption text-muted justify-center md:justify-start"
        role="list"
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-x-6">
            <span>{item}</span>
            {i < items.length - 1 && (
              <span className="hidden md:inline text-muted" aria-hidden>
                ·
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
