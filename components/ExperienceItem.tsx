"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export function ExperienceItem({
  role,
  company,
  period,
  description,
  highlights = [],
}: ExperienceItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="border-b border-accent-soft py-8 first:pt-0 last:border-0"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
        <div>
          <h3 className="font-serif text-xl font-medium text-foreground">
            {role}
          </h3>
          <p className="text-muted text-sm mt-0.5">{company}</p>
        </div>
        <span className="text-sm text-muted shrink-0">{period}</span>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-3">{description}</p>
      {highlights.length > 0 && (
        <ul className="list-disc list-inside text-muted text-sm space-y-1">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
