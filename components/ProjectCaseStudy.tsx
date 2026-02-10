"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectCaseStudyData {
  title: string;
  year?: string;
  problem: string;
  whatIBuilt: string;
  techStack: string[];
  results: string;
  whatILearned: string;
}

interface ProjectCaseStudyProps extends ProjectCaseStudyData {}

const labelClass = "font-sans text-caption font-medium uppercase tracking-widest text-muted mb-1.5";

export function ProjectCaseStudy({
  title,
  year,
  problem,
  whatIBuilt,
  techStack,
  results,
  whatILearned,
}: ProjectCaseStudyProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border border-accent-soft rounded-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 md:p-8 hover:bg-accent-soft/40 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-expanded={open}
        aria-controls={`project-details-${title.replace(/\s+/g, "-")}`}
        id={`project-toggle-${title.replace(/\s+/g, "-")}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl font-medium text-foreground">
            {title}
          </h3>
          <span className="flex items-center gap-2">
            {year && (
              <span className="text-caption text-muted">{year}</span>
            )}
            <svg
              className="w-3.5 h-3.5 text-muted transition-transform duration-200"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </span>
        </div>
        <p className="text-body text-muted mt-2 leading-relaxed">
          {problem}
        </p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`project-details-${title.replace(/\s+/g, "-")}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-t border-accent-soft bg-accent-soft/30"
          >
            <div className="p-6 md:p-8 pt-4 md:pt-6 space-y-6">
              <div>
                <p className={labelClass}>What I built</p>
                <p className="text-body text-muted leading-relaxed">
                  {whatIBuilt}
                </p>
              </div>

              {techStack.length > 0 && (
                <div>
                  <p className={labelClass}>Tools</p>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {techStack.map((tool) => (
                      <li
                        key={tool}
                        className="text-caption text-muted border border-accent-soft rounded-full px-2.5 py-1 bg-background/80"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className={labelClass}>Results / impact</p>
                <p className="text-body text-muted leading-relaxed">
                  {results}
                </p>
              </div>

              <div>
                <p className={labelClass}>What I learned</p>
                <p className="text-body text-muted leading-relaxed">
                  {whatILearned}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
