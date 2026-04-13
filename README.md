# Tamar Shalom — Portfolio

[![Live site](https://img.shields.io/badge/live%20site-tamarshalom.com-ff006e?style=flat-square)](https://tamarshalom.com)
[![GitHub](https://img.shields.io/badge/GitHub-repo-181717?style=flat-square&logo=github)](https://github.com/tamarshalom/tamarsPortfolio)

| | |
| --- | --- |
| **Website** | **[https://tamarshalom.com](https://tamarshalom.com)** |
| **Source** | [github.com/tamarshalom/tamarsPortfolio](https://github.com/tamarshalom/tamarsPortfolio) |
| **GitHub Pages** | After you enable Pages (see below): **`https://tamarshalom.github.io/tamarsPortfolio/`** |

*If you deploy on Vercel, your project also has a `*.vercel.app` URL—use whichever is your primary domain in GitHub’s repo “About” section (see below).*

### Turn on “live on GitHub” (GitHub Pages)

This repo includes a workflow that builds the site and publishes it to **GitHub Pages** so your teacher can open a `github.io` link.

1. On GitHub, open **Settings → Pages** (for this repository).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run the workflow manually under **Actions → Deploy to GitHub Pages → Run workflow**).
4. When the workflow finishes, your site will be at **`https://tamarshalom.github.io/tamarsPortfolio/`** (username + repo name).
5. Add that URL to the repo **About** section as the **Website** so it shows on the repo homepage.

**If your repository name is not `tamarsPortfolio`**, edit `.github/workflows/deploy-github-pages.yml` and set `BASE_PATH` to `/YourExactRepoName` (must match the URL path GitHub uses).

**Vercel is unchanged:** normal `npm run build` (no `STATIC_EXPORT`) still produces the usual app for Vercel; only the GitHub Action uses static export + `BASE_PATH`.

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

### Show the live site on your GitHub repo

1. Open your repo on GitHub: [tamarshalom/tamarsPortfolio](https://github.com/tamarshalom/tamarsPortfolio).
2. Click the **⚙️** next to **About** (top right of the repo page).
3. Under **Website**, paste your public URL (e.g. `https://tamarshalom.com` or your `*.vercel.app` link).
4. Save. The link appears on the repo homepage so visitors can open your portfolio in one click.

The repo must be **public** (Settings → General → Danger Zone → Change repository visibility) for anyone to see the code and the About link without signing in.

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
