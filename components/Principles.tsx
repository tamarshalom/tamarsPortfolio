"use client";

import { motion } from "framer-motion";

interface Principle {
  title: string;
  line: string;
}

interface PrinciplesProps {
  items: Principle[];
  className?: string;
}

export function Principles({ items, className = "" }: PrinciplesProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className={`space-y-6 max-w-2xl ${className}`}
      role="list"
    >
      {items.map((item, i) => (
        <li key={i} className="border-b border-accent-soft pb-6 last:border-0 last:pb-0">
          <p className="font-serif text-lg font-medium text-foreground">
            {item.title}
          </p>
          <p className="text-caption text-muted mt-1">{item.line}</p>
        </li>
      ))}
    </motion.ul>
  );
}
