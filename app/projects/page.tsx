import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCaseStudy, type ProjectCaseStudyData } from "@/components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work by Tamar Shalom—AI, full-stack, and product.",
  openGraph: {
    title: "Projects | Tamar Shalom",
    description: "Selected work by Tamar Shalom—AI, full-stack, and product.",
  },
};

const projects: ProjectCaseStudyData[] = [
  {
    title: "VoiceEngine AI",
    year: "2025",
    problem:
      "Unstructured user feedback is noisy; manual tagging is slow and inconsistent.",
    whatIBuilt:
      "Automated NLP pipeline to ingest feedback, embed with OpenAI embeddings, cluster with K-Means, and visualize insights in a React dashboard.",
    techStack: [
      "Python",
      "OpenAI API (Embeddings)",
      "Pandas",
      "Scikit-Learn",
      "React.js",
      "Recharts",
      "t-SNE",
    ],
    results:
      "Reduced manual tagging time by 90%. Analyzed 50,000+ Spotify reviews and surfaced hidden friction points like shuffle algorithm issues.",
    whatILearned:
      "Clustering is only useful when the output is legible; visualization + labeling workflows matter as much as the model.",
  },
  {
    title: "AI-Driven University Marketplace Platform",
    year: "2025",
    problem:
      "University-specific info is fragmented; users need clear answers and secure workflows.",
    whatIBuilt:
      "Microservices dev environment via Docker Compose with Postgres (pgvector), Redis, MinIO, FastAPI, Node.js, Next.js. AI \"librarian agent\" workflows that translate complex data into actionable responses. Secure API: JWT auth, Alembic migrations, file uploads using pre-signed URLs to MinIO (S3).",
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL + pgvector",
      "Redis",
      "MinIO",
      "Docker",
      "Node.js",
      "Next.js",
      "React",
      "JWT",
      "Alembic",
    ],
    results:
      "One-command stack launch; scalable API foundations; demo-ready agent flows.",
    whatILearned:
      "Developer experience is a product: good local infra and clean interfaces speed everything up.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="Selected work—problem, approach, and what I learned."
        compact
      />
      <Section className="pt-0">
        <div className="grid gap-4 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCaseStudy key={i} {...p} />
          ))}
        </div>
      </Section>
    </>
  );
}
