# Tamar Shalom — Portfolio

A minimal, production-ready personal portfolio and blog built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **MDX**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)
- **MDX** (blog posts in `content/blog/*.mdx`)
- **next-mdx-remote** (RSC) for rendering MDX

## Run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).

2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New Project**.

3. Import your repository. Vercel will detect Next.js and set the build command to `next build` and output to the default Next.js build.

4. (Optional) Set environment variables if you add any later.

5. Click **Deploy**. Future pushes to your main branch will trigger automatic deployments.

**Custom domain:** In the project dashboard, go to **Settings → Domains** and add your domain (e.g. `tamarshalom.com`). Follow the DNS instructions.

## Troubleshooting: 500 on `/_next/static/chunks/fallback/...`

If you see **500** errors for URLs like `/_next/static/chunks/fallback/webpack.js` or `fallback/pages/_app.js`, the server’s fallback chunk handler is failing. This app uses **App Router only** (no `pages/` routes), so those requests usually mean a stale build or bad deploy.

**Do this:**

1. **Clean and rebuild**
   ```bash
   npm run clean
   npm run build
   ```
   Or in one step: `npm run rebuild`

2. **If you’re on Vercel**
   - Trigger a **new deployment** (push a commit or “Redeploy” in the dashboard).
   - In Project → **Settings → General**, set **Build Command** to `next build` and **Output Directory** to default (leave empty).
   - Clear **Vercel’s cache**: Deployments → … on latest deploy → **Redeploy** and check “Clear build cache”.

3. **If you’re running `next start` yourself**
   - Run from the **project root** (where `package.json` and `.next` are).
   - After pulling or changing code, run `npm run rebuild` then `npm start` so the server uses a fresh `.next`.

4. **Browser**
   - Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) or open the site in an incognito window so you don’t use an old cached HTML that points at old chunk paths.

After a clean rebuild and a new deploy, the fallback 500s should stop.

## Project structure

```
├── app/                  # App Router pages and layout
│   ├── blog/             # Blog list + [slug] for MDX posts
│   ├── contact/
│   ├── experience/
│   ├── interests/
│   ├── projects/
│   ├── layout.tsx
│   ├── page.tsx          # Home
│   └── globals.css
├── components/           # Reusable UI (Header, Footer, Hero, Section, etc.)
├── content/blog/         # MDX blog posts (frontmatter: title, date, description, tags)
├── lib/mdx.ts            # Helpers for reading and listing blog posts
└── public/               # Static assets (add favicon.ico here if desired)
```

## Adding blog posts

Create a new `.mdx` file in `content/blog/` with frontmatter:

```yaml
---
title: "Your Post Title"
date: "2025-02-09"
description: "Short description for SEO and list view."
tags: ["tag1", "tag2"]
---
```

Write your content in MDX (markdown + JSX). You can use:

- **`<Callout>`** for asides or notes.
- **`<Figure src="/path/to/image.jpg" alt="..." caption="Optional caption" />`** for images with captions (or use standard `![alt](url)` markdown).
- **`<Sources>`** to add content to the Sources / Citations section (otherwise the template shows default text).

Reading time is computed automatically. Each post page includes prev/next links and a Sources / Citations section at the bottom.

## Favicon

Replace `app/icon.svg` with your own, or add `public/favicon.ico` and reference it in `app/layout.tsx` metadata.

## Content (Experience & Projects)

The **Experience** and **Projects** pages use Tamar's real data. To update, edit the arrays in `app/experience/page.tsx` and `app/projects/page.tsx`.

**Resume PDF:** Add your resume as `public/resume.pdf` so the "Download Resume" button on the Experience page works.

---

© Tamar Shalom
