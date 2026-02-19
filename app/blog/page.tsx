import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing and thoughts by Tamar Shalom.",
  openGraph: {
    title: "Blog | Tamar Shalom",
    description: "Writing and thoughts by Tamar Shalom.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.frontmatter.tags ?? []))
  ).sort();

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Notes on building, learning, and shipping."
        compact
      />
      <Section className="pt-0">
        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon.</p>
        ) : (
          <div className="max-w-3xl">
            {allTags.length > 0 && (
              <div className="mb-10">
                <p className="font-sans text-caption font-medium uppercase tracking-widest text-muted mb-3">
                  Tags
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {allTags.map((tag) => (
                    <li key={tag}>
                      <span className="text-caption text-muted border border-accent-soft rounded-full px-3 py-1.5 bg-accent-soft/40">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ul className="space-y-12" role="list">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="border-b border-accent-soft pb-12 last:border-0 last:pb-0"
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground link-underline group-hover:opacity-90 mb-3">
                      {post.frontmatter.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption text-muted mb-3">
                      <time dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readingTimeMinutes} min read</span>
                    </div>
                    <p className="text-body text-muted leading-relaxed mb-4">
                      {post.frontmatter.description}
                    </p>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <ul className="flex flex-wrap gap-2" role="list">
                        {post.frontmatter.tags.map((tag) => (
                          <li
                            key={tag}
                            className="text-caption text-muted border border-accent-soft rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </>
  );
}
