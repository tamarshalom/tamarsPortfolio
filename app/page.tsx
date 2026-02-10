import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Now } from "@/components/Now";
import { ProjectCard } from "@/components/ProjectCard";
import { Principles } from "@/components/Principles";
import { Highlights } from "@/components/Highlights";

const heroRoles = [
  "Computer Science @ Rutgers",
  { text: "AI builder", tooltip: "LLMs & agents" },
  "Product-minded engineer",
];

const selectedWork = [
  {
    title: "VoiceEngine AI",
    description:
      "NLP pipeline: OpenAI embeddings, K-Means clustering, React dashboard. 90% reduction in manual tagging; 50,000+ reviews analyzed.",
    href: "/projects",
    tags: ["Python", "OpenAI", "React", "t-SNE"],
    year: "2025",
  },
  {
    title: "AI-Driven University Marketplace Platform",
    description:
      "Microservices (Docker, Postgres/pgvector, FastAPI, Next.js), AI librarian agent, JWT auth, MinIO. One-command stack.",
    href: "/projects",
    tags: ["FastAPI", "Next.js", "Docker", "pgvector"],
    year: "2025",
  },
];

const principles = [
  { title: "Ship early, learn fast", line: "Get feedback before polishing." },
  { title: "Clarity over cleverness", line: "Readable beats impressive." },
  { title: "People before pixels", line: "Design for who’s on the other side." },
];

const highlights = [
  "90% reduction in manual tagging",
  "50,000+ reviews analyzed",
  "150+ users shipped to",
  "40% fewer gameplay bugs",
];

const heroStats = [
  { value: "90%", label: "reduction in manual tagging" },
  { value: "50k+", label: "reviews analyzed" },
  { value: "150+", label: "users shipped to" },
  { value: "40%", label: "fewer gameplay bugs" },
];

const socialLinks = [
  { href: "https://github.com/tamarshalom", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/tamar-shalom", label: "LinkedIn", external: true },
  { href: "mailto:tamarlshalom@gmail.com", label: "Email" },
];

const nowItems = [
  { label: "Fellowship", value: "AI & responsible tech" },
  { label: "Building", value: "Side projects and this site" },
  { label: "Exploring", value: "Finding my true passion and fun talents" },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Tamar Shalom"
        role="AI • Full-stack • Product"
        roles={heroRoles}
        subtitle="Product-minded engineer building AI and full-stack systems. I run product research—100+ user interviews, trust gaps, and what actually ships. I care about iteration: build, measure, learn."
        primaryCta={{ label: "VIEW WORK", href: "/projects" }}
        secondaryCta={{ label: "Get in touch", href: "/contact" }}
        stats={heroStats}
        socialLinks={socialLinks}
      />
      <Section title="Highlights" className="pt-4 md:pt-8">
        <Highlights items={highlights} />
      </Section>
      <Section title="Selected work" className="pt-4 md:pt-8">
        <div className="grid gap-6 md:gap-8">
          {selectedWork.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
        <p className="mt-8">
          <Link
            href="/projects"
            className="text-caption text-muted hover:text-accent-light link-underline font-medium"
          >
            See all projects →
          </Link>
        </p>
      </Section>
      <Section title="Principles" className="pt-4 md:pt-8">
        <Principles items={principles} />
      </Section>
      <Section title="Currently" className="pt-4 md:pt-8">
        <Now items={nowItems} title="Now" />
      </Section>
    </>
  );
}
