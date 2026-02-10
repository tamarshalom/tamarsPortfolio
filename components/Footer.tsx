"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "https://github.com/tamarshalom", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/tamar-shalom", label: "LinkedIn", external: true },
  { href: "mailto:tamarlshalom@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-accent-soft mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-caption text-muted italic">
            Built by Tamar — always iterating.
          </p>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Tamar Shalom
          </p>
        </div>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted hover:text-accent-light link-underline transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
}
