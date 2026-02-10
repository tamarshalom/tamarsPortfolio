"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/interests", label: "Interests" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -16 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-accent-soft"
    >
      <nav
        className="mx-auto max-w-5xl px-6 py-3.5 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-[1.05rem] font-medium text-foreground hover:opacity-80 transition-opacity link-underline focus-visible:opacity-100"
        >
          Tamar Shalom
        </Link>
        <ul className="flex items-center gap-7 md:gap-9 flex-wrap justify-end">
          {navLinks
            .filter((l) => l.href !== "/")
            .map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/blog" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-caption transition-colors link-underline py-1 ${
                      isActive
                        ? "text-foreground font-medium nav-link-active"
                        : "text-muted hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-px bg-accent"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </motion.header>
  );
}
