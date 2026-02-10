import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing and thoughts by Tamar Shalom.",
  openGraph: {
    title: "Blog | Tamar Shalom",
    description: "Writing and thoughts by Tamar Shalom.",
  },
};

const placeholders = [
  { title: "Placeholder 1" },
  { title: "Placeholder 2" },
  { title: "Placeholder 3" },
  { title: "Placeholder 4" },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Notes on building, learning, and shipping."
        compact
      />
      <Section className="pt-0">
        <div className="max-w-3xl">
          <ul className="space-y-12" role="list">
            {placeholders.map((item, i) => (
              <li
                key={i}
                className="border-b border-accent-soft pb-12 last:border-0 last:pb-0"
              >
                <div className="group block">
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                    {item.title}
                  </h2>
                  <p className="text-caption text-muted">Coming soon.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
