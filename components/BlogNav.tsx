"use client";

import Link from "next/link";

interface AdjacentPost {
  slug: string;
  title: string;
}

interface BlogNavProps {
  prev: AdjacentPost | null;
  next: AdjacentPost | null;
}

export function BlogNav({ prev, next }: BlogNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-16 pt-8 border-t border-accent-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      aria-label="Post navigation"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group text-body text-muted hover:text-foreground link-underline max-w-[min(100%,20rem)]"
        >
          <span className="text-caption text-muted block mb-0.5">Previous</span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group text-body text-muted hover:text-foreground link-underline max-w-[min(100%,20rem)] sm:text-right"
        >
          <span className="text-caption text-muted block mb-0.5">Next</span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
