"use client";

interface BlogSourcesProps {
  children?: React.ReactNode;
}

export function BlogSources({ children }: BlogSourcesProps) {
  return (
    <aside className="mt-16 pt-8 border-t border-accent-soft">
      <h3 className="font-sans text-caption font-medium uppercase tracking-widest text-muted mb-4">
        Sources / Citations
      </h3>
      {children ? (
        <div className="prose prose-invert prose-sm max-w-none text-muted">
          {children}
        </div>
      ) : (
        <p className="text-body text-muted italic">
          Add references, links, or media sources used in this post.
        </p>
      )}
    </aside>
  );
}
