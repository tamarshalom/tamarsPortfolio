"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  year?: string;
}

const cardClassName = (isLink: boolean) =>
  `block border border-accent-soft rounded-sm p-6 md:p-8 transition-colors duration-200 ${
    isLink ? "hover:border-accent/50 hover:bg-accent-soft/50" : ""
  }`;

const CardContent = ({
  title,
  description,
  tags,
  year,
}: {
  title: string;
  description: string;
  tags: string[];
  year?: string;
}) => (
  <>
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
      <h3 className="font-serif text-xl font-medium text-foreground group-hover:opacity-90">
        {title}
      </h3>
      {year && <span className="text-caption text-muted">{year}</span>}
    </div>
    <p className="text-body text-muted leading-relaxed mb-4">
      {description}
    </p>
    {tags.length > 0 && (
      <ul className="flex flex-wrap gap-2" role="list">
        {tags.map((tag) => (
          <li
            key={tag}
            className="text-caption text-muted border border-accent-soft rounded-full px-2.5 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>
    )}
  </>
);

export function ProjectCard({
  title,
  description,
  href,
  tags = [],
  year,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group"
    >
      {href ? (
        <Link href={href} className={cardClassName(true)}>
          <CardContent title={title} description={description} tags={tags} year={year} />
        </Link>
      ) : (
        <div className={cardClassName(false)}>
          <CardContent title={title} description={description} tags={tags} year={year} />
        </div>
      )}
    </motion.div>
  );
}
