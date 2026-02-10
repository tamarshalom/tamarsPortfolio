"use client";

import { motion } from "framer-motion";

interface NowItem {
  label: string;
  value: string;
}

interface NowProps {
  items: NowItem[];
  title?: string;
}

export function Now({ items, title = "Currently" }: NowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-lg border border-accent-soft bg-accent-soft/30 p-6 md:p-8 max-w-xl"
    >
      <p className="text-caption font-medium uppercase tracking-widest text-muted mb-5">
        {title}
      </p>
      <ul className="space-y-4" role="list">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
          >
            <span className="text-caption text-muted shrink-0 w-24">{item.label}</span>
            <span className="text-body text-foreground">{item.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
