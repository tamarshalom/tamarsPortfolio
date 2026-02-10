import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Interests",
  description: "What Tamar Shalom is into—product, systems, and learning in public.",
  openGraph: {
    title: "Interests | Tamar Shalom",
    description: "What Tamar Shalom is into—product, systems, and learning in public.",
  },
};

const interests = [
  {
    title: "Building with AI",
    body: "I like turning messy, unstructured information into something people can actually use. RAG pipelines, semantic search, and LLM-powered tools are only useful when the output is legible and trustworthy—so I care as much about the labeling and visualization layer as the model. Building with Claude, LlamaIndex, and agent frameworks has been a way to ship real products, not just demos.",
  },
  {
    title: "Product & People",
    body: "After 2 years into studying computer science and having internship experience in SWE, I realized that my passion lies with the people. I want to learn what people want most and why. My energy comes from observing and socializing with people. After finishing my PM fellowship I understood that this is where my interest lies.",
  },
  {
    title: "Community",
    body: "As many know Rutgers University of New Brunswick is a huge school and finding your community is not so easy. In my case, I found my community through joining different clubs. For example I am a member in the women's computer science club where I get to talk and meet other women who are interested in the same topics as me. In addition, a huge community I am a part of is the Jewish community on campus. I love going to the weekly Chabad dinners and also all the socializing events hosted throughout the year. I like to meet people with similar ideology to me and it just feels like a nice community to be a part of in such a large school.",
  },
  {
    title: "Outside the screen",
    body: "Outside the screen I love to go to the gym. My favorite thing especially as a CS student is being able to get in some movement throughout my day. I love being able to wake up and move my body first thing in the morning before I start my beautiful day of learning. In addition like most I have hobbies such as snowboarding, going to the beach when it's hot out, and I love to read growth books!",
  },
];

export default function InterestsPage() {
  return (
    <>
      <Hero
        title="Interests"
        subtitle="What I'm into—AI, product, community, and life off the keyboard."
        compact
      />
      <Section className="pt-0">
        <ul className="space-y-12">
          {interests.map((item, i) => (
            <li key={i} className="border-b border-accent-soft pb-12 last:border-0 last:pb-0">
              <h2 className="font-serif text-xl font-medium text-foreground mb-3">
                {item.title}
              </h2>
              <p className="text-muted leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
