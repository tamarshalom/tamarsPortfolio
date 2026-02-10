import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["var(--font-cormorant)"],
      },
      fontSize: {
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.25" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "caption": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 6rem)",
        "block": "clamp(1.5rem, 3vw, 2rem)",
      },
      typography: ({ theme }: { theme: (path: string) => unknown }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--muted)",
            "--tw-prose-headings": "var(--foreground)",
            "--tw-prose-links": "var(--accent-light)",
            "--tw-prose-quote": "var(--muted)",
            "--tw-prose-code": "var(--foreground)",
            "--tw-prose-pre-bg": "var(--accent-soft)",
            maxWidth: "none",
            fontFamily: "var(--font-geist-sans), ui-sans-serif, sans-serif",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-cormorant), ui-serif, serif",
              fontWeight: "500",
            },
            "h1": { fontSize: "1.875rem", marginTop: "2.5rem", marginBottom: "1rem" },
            "h2": { fontSize: "1.5rem", marginTop: "2.5rem", marginBottom: "0.75rem" },
            "h3": { fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem" },
            "p": { lineHeight: "1.75", marginBottom: "1rem" },
            "a": { textDecoration: "none", fontWeight: "inherit" },
            "blockquote": { fontStyle: "italic", borderLeftColor: "var(--accent)", borderLeftWidth: "2px", paddingLeft: "1.5rem" },
            "ul, ol": { paddingLeft: "1.5rem", marginBottom: "1rem" },
            "li": { marginTop: "0.25rem", marginBottom: "0.25rem" },
            "code": { backgroundColor: "var(--accent-soft)", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontSize: "0.875em" },
            "pre": { backgroundColor: "var(--accent-soft)", borderRadius: "0.5rem", padding: "1rem", overflowX: "auto" },
            "pre code": { backgroundColor: "transparent", padding: "0" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
