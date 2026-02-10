"use client";

import { motion } from "framer-motion";

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
  variant?: "default" | "accent";
}

export function Callout({
  children,
  title,
  variant = "default",
}: CalloutProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-lg p-6 my-8 ${
        variant === "accent"
          ? "bg-accent-soft/50 border border-accent/40"
          : "bg-accent-soft/30 border border-accent-soft"
      }`}
    >
      {title && (
        <p className="font-serif text-lg font-medium text-foreground mb-2">
          {title}
        </p>
      )}
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </motion.aside>
  );
}
