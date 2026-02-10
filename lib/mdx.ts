import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

const WORDS_PER_MINUTE = 200;

export function getReadingTimeMinutes(content: string): number {
  const stripped = content.replace(/^---[\s\S]*?---/, "").replace(/<!--[\s\S]*?-->/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  const words = stripped.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTimeMinutes: getReadingTimeMinutes(content),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (b.frontmatter.date.localeCompare(a.frontmatter.date)));
  return posts;
}

