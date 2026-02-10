import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tamar Shalom.",
  openGraph: {
    title: "Contact | Tamar Shalom",
    description: "Get in touch with Tamar Shalom.",
  },
};

const links = [
  { href: "mailto:tamarlshalom@gmail.com", label: "Email", description: "Best for longer messages or collaboration." },
  { href: "https://www.linkedin.com/in/tamar-shalom", label: "LinkedIn", description: "Professional network and updates.", external: true },
  { href: "https://github.com/tamarshalom", label: "GitHub", description: "Code and open source.", external: true },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle="Open to collaboration, ideas, and good conversations."
        compact
      />
      <Section className="pt-0">
        <div className="grid gap-8 md:gap-10">
          {links.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <span className="font-serif text-xl font-medium text-foreground link-underline group-hover:opacity-90">
                  {link.label}
                </span>
                <p className="text-muted text-sm mt-1">{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-12 text-muted text-sm">
          I do my best to reply within a few days. If it's urgent, email is usually fastest.
        </p>
      </Section>
    </>
  );
}
