import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ExperienceRole } from "@/components/ExperienceRole";
import { Chips } from "@/components/Chips";

export const metadata: Metadata = {
  title: "Experience",
  description: "Tamar Shalom—product-minded engineer. Education, experience, and impact.",
  openGraph: {
    title: "Experience | Tamar Shalom",
    description: "Tamar Shalom—product-minded engineer. Education, experience, and impact.",
  },
};

const atAGlance = ["AI / LLMs", "Full-stack", "Product research", "Data analysis"];

const education = {
  degree: "B.S. Computer Science",
  school: "Rutgers University",
  dateRange: "May 2027",
  minor: "Business Administration",
  coursework: [
    "Linear Algebra",
    "Database Management (SQL)",
    "Data Structures & Algorithms",
    "Computer Architecture",
    "Design & Analysis of Algorithms",
    "Business Management",
  ],
};

const experience = [
  {
    role: "Artificial Intelligence Fellowship",
    company: "Blueprint · New Brunswick, NJ",
    dateRange: "Jan 2026 – Present",
    description:
      "Building and shipping AI-powered applications with LLMs, RAG, and agent frameworks.",
    highlights: [
      "Built and shipped an AI-powered application using LLMs, RAG pipelines, and agent frameworks (Claude, LlamaIndex, CrewAI)",
      "Implemented semantic search with vector databases and tool-calling workflows",
      "Worked in a 10-week team fellowship to design, evaluate, and deploy a production-ready AI product with prompt engineering and guardrails; deployed on Replit/Streamlit",
    ],
  },
  {
    role: "Product Management Fellowship",
    company: "Blueprint · New Brunswick, NJ",
    dateRange: "Oct 2025 – Dec 2025",
    description:
      "Led discovery and roadmap for ThriftU; identified the Trust Gap and scoped MVP.",
    highlights: [
      "Led discovery for \"ThriftU\" via 100 user interviews; identified the \"Trust Gap\" as the core problem",
      "Prioritized roadmap using impact-effort scoring; focused on student verification over cosmetic UI",
      "Worked cross-functionally to scope MVP feasibility within 10 weeks",
      "Built early GTM plan using ambassadors and phased rollouts; documented a repeatable launch playbook",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Wiply · Tel Aviv, Israel",
    dateRange: "Jun 2025 – Aug 2025",
    description:
      "Shipped a web mini-game to 150+ users; built auth and reduced bugs through testing and UI optimization.",
    highlights: [
      "Shipped a web mini-game used by 150+ users; increased average session time by 15%",
      "Built auth flow integrating SendGrid with Firebase for professional verification templates and improved security",
      "Reduced reported bugs by 40% through testing and UI optimization",
    ],
  },
];

const skillGroups = [
  {
    label: "AI & Data",
    items: ["LLMs & RAG", "Vector databases", "Semantic search", "Prompt engineering", "SQL", "Data structures & algorithms"],
  },
  {
    label: "Product & Strategy",
    items: ["User research & discovery", "Roadmapping", "Impact-effort prioritization", "GTM & launch playbooks", "Cross-functional scoping"],
  },
  {
    label: "Development",
    items: ["Python", "JavaScript / TypeScript", "React", "Node.js", "FastAPI", "Firebase", "Streamlit", "Docker"],
  },
  {
    label: "Languages",
    items: ["English (Fluent)", "Hebrew (Fluent)"],
  },
];

const community = [
  { title: "Women in Computer Science", detail: "Member (Jan 2024 – Present)" },
];

export default function ExperiencePage() {
  return (
    <>
      <Hero
        title="Experience"
        subtitle="Education, work, and what I bring to the table."
        compact
      />
      <Section className="pt-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-2">
          <p className="text-caption font-medium uppercase tracking-widest text-muted">
            At a glance
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center font-medium text-caption text-foreground border border-accent bg-background px-4 py-2.5 rounded-sm hover:bg-accent-soft transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0"
          >
            Download Resume
          </a>
        </div>
        <Chips items={atAGlance} className="mb-10 md:mb-12" />
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <ExperienceSection id="education" label="Education">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {education.degree}
                </h3>
                <p className="text-caption text-muted">{education.school}</p>
                {education.minor && (
                  <p className="text-caption text-muted mt-1">
                    Minor: {education.minor}
                  </p>
                )}
              </div>
              <span className="text-caption text-muted shrink-0 tabular-nums">
                {education.dateRange}
              </span>
            </div>
            {education.coursework && education.coursework.length > 0 && (
              <p className="text-caption text-muted mt-3">
                <span className="font-medium text-foreground">Relevant coursework:</span>{" "}
                {education.coursework.join("; ")}
              </p>
            )}
          </ExperienceSection>

          <ExperienceSection id="experience" label="Experience">
            <div className="space-y-0">
              {experience.map((job, i) => (
                <ExperienceRole key={i} {...job} />
              ))}
            </div>
          </ExperienceSection>

          <ExperienceSection id="skills" label="Skills">
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-caption font-medium text-foreground mb-1.5">
                    {group.label}
                  </p>
                  <ul
                    className="flex flex-wrap gap-x-6 gap-y-1 text-body text-muted"
                    role="list"
                  >
                    {group.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ExperienceSection>

          <ExperienceSection id="community" label="Community">
            <ul className="space-y-4" role="list">
              {community.map((item, i) => (
                <li key={i}>
                  <span className="font-medium text-foreground">
                    {item.title}
                  </span>
                  <span className="text-muted"> — {item.detail}</span>
                </li>
              ))}
            </ul>
          </ExperienceSection>
        </div>
      </Section>
    </>
  );
}
