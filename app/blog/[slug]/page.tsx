import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getBlogSlugs,
  getBlogPostBySlug,
  getAllBlogPosts,
} from "@/lib/mdx";
import { Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { BlogSources } from "@/components/BlogSources";
import { BlogNav } from "@/components/BlogNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: `${post.frontmatter.title} | Tamar Shalom`,
      description: post.frontmatter.description,
    },
  };
}

const mdxComponents = {
  Callout,
  Figure,
  Sources: BlogSources,
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href || "#"}
      className="link-underline text-foreground font-medium"
      {...props}
    >
      {children}
    </Link>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    if (!src) return null;
    const isExternal = src.startsWith("http");
    if (isExternal) {
      return (
        <span className="my-6 block overflow-hidden rounded-lg border border-accent-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? ""}
            className="w-full object-cover"
            loading="lazy"
            {...rest}
          />
        </span>
      );
    }
    const srcStr = src.startsWith("/") ? src : `/${src}`;
    return (
      <span className="my-6 block relative w-full aspect-video overflow-hidden rounded-lg border border-accent-soft">
        <Image
          src={srcStr}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </span>
    );
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    index >= 0 && index < allPosts.length - 1
      ? { slug: allPosts[index + 1].slug, title: allPosts[index + 1].frontmatter.title }
      : null;
  const nextPost =
    index > 0 ? { slug: allPosts[index - 1].slug, title: allPosts[index - 1].frontmatter.title } : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="text-caption text-muted hover:text-foreground link-underline mb-8 inline-block"
      >
        ← Blog
      </Link>
      <header className="mb-12">
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground tracking-tight">
          {post.frontmatter.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption text-muted mt-3">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4" role="list">
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
      </header>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
      <BlogNav prev={prevPost} next={nextPost} />
    </article>
  );
}
