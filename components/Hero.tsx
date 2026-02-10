"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RotatingRoles, type RoleItem } from "./RotatingRoles";

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroSocialLink {
  href: string;
  label: string;
  external?: boolean;
}

interface HeroProps {
  /** Main headline (e.g. name) - shown after "Hello I'm" in accent */
  title: string;
  /** Optional role or tagline above the title */
  role?: string;
  /** Rotating roles line under the title */
  roles?: RoleItem[];
  /** 2–3 sentence intro paragraph */
  subtitle?: string;
  /** Primary and secondary CTA */
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Stats row below hero (e.g. value + label) */
  stats?: HeroStat[];
  /** Social links below CTAs */
  socialLinks?: HeroSocialLink[];
  /** Tighter spacing for inner pages */
  compact?: boolean;
}

export function Hero({
  title,
  role,
  roles,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  socialLinks,
  compact,
}: HeroProps) {
  return (
    <motion.section
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mx-auto max-w-5xl px-6 ${compact ? "py-16 md:py-20" : "pt-20 pb-16 md:pt-28 md:pb-24"}`}
      aria-label="Introduction"
    >
      {role && (
        <p className="font-sans text-caption uppercase tracking-widest text-accent mb-3">
          {role}
        </p>
      )}
      <h1 className="font-serif text-display-lg font-medium tracking-tight">
        <span className="text-foreground">Hello I&apos;m </span>
        <span className="text-accent">{title}</span>
      </h1>
      {roles && roles.length > 0 && (
        <RotatingRoles items={roles} className="text-muted" />
      )}
      {subtitle && (
        <p className="mt-6 md:mt-8 text-body-lg text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta || socialLinks?.length) && (
        <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 font-medium text-caption text-accent bg-background border-2 border-accent px-5 py-2.5 rounded-sm hover:bg-accent hover:text-background transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {primaryCta.label}
              <span aria-hidden>→</span>
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center text-caption text-muted hover:text-accent-light link-underline transition-colors py-2.5"
            >
              {secondaryCta.label}
            </Link>
          )}
          {socialLinks && socialLinks.length > 0 && (
            <ul className="flex items-center gap-6 ml-2 border-l border-accent-soft pl-6" role="list">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-caption text-muted hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {stats && stats.length > 0 && (
        <ul
          className="mt-12 pt-10 border-t border-accent-soft flex flex-wrap gap-x-10 gap-y-4 justify-start"
          role="list"
          aria-label="Highlights"
        >
          {stats.map((stat, i) => (
            <li key={i} className="flex flex-col">
              <span className="font-serif text-2xl font-medium text-foreground">{stat.value}</span>
              <span className="text-caption text-muted">{stat.label}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}
