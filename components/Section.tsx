"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
}

export function Section({ children, title, id, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mx-auto max-w-5xl px-6 py-section ${className}`}
    >
      {title && (
        <h2 className="font-serif text-display-sm font-medium text-foreground mb-10 md:mb-12">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
