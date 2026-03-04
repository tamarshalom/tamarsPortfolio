import Link from "next/link";
import Image from "next/image";
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

const intro = `Hello everyone !! I'm Tamar Shalom, a Computer Science student at Rutgers University with a minor in Business Administration, aiming to graduate in May 2027. I have always been the type of person to have friends from all over the world and enjoy bringing people together. A skill of mine is definitely turning awkward situations into experiences that are memorable and meaningful. That instinct of connecting people is a big part of what draws me to product management and technology/product building. I'm especially interested in the intersection between people and technology. I love building systems that take complex information and transform it into clear experiences for real users. My work spans full stack development and product focused problem solving. I've built many projects that involve both of those things. They analyze large columns of data and patterns in ways that can be very actionable. Whether I'm working with a new large language model or even shaping user experience I care deeply about reliability and how the product feels to use. In addition, I strongly believe that engineering has to fade into a background that allows users to focus on what they're actually trying to accomplish. Alongside my technical background, I've spent time in product and user research roles that have shaped how I approach anything I build engineering wise. Through the fellowships I have accomplished, I conducted extensive user interviews that helped me learn how to identify core pain points and trust gaps. One of the biggest lessons I have learned is that even the strongest technical solution only solves part of the problem. This means that many products actually require attention, listening, and prioritizing intentionally building with real constraints. Overall, this website serves as a living portfolio of my work and ongoing growth. It highlights the projects I have built, the skills I'm developing, and the ideas I'm excited to explore. As I continue my studies at Rutgers I'll keep updating this space to reflect what I'm learning and building along the way.`;

const nowItems = [
  { label: "Fellowship", value: "AI & responsible tech" },
  { label: "Building", value: "Side projects and this site" },
  { label: "Exploring", value: "Finding my true passion and fun talents" },
];

export default function Home() {
  return (
    <>
      <section
        aria-label="Site header"
        className="relative w-full px-4 py-4 md:px-6 md:py-6 bg-background"
      >
        <div className="relative w-full aspect-[16/6] md:aspect-[21/9] rounded-sm overflow-hidden">
          <Image
            src="/assets/header.png"
            alt="Tamar Shalom — Computer Science Student"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>
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
      <Section className="pt-4 md:pt-8">
        <p className="text-body text-muted leading-relaxed max-w-3xl whitespace-pre-line">
          {intro}
        </p>
      </Section>
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
