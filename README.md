# Manan Maluka — Portfolio

A modern, dark-first developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it locally.

## Before you deploy

1. **Add your photo** — drop a square/portrait image at `public/profile/profile.jpg`.
2. **Add your resume** — drop your PDF at `public/resume/resume.pdf`.
3. **Update the domain** — replace `https://mananmaluka.dev` in `src/app/layout.tsx` (`metadataBase` / Open Graph URL) with your real deployed URL once you have one.
4. **Double-check content** — everything (about text, projects, experience, skills, education, certifications, achievements) lives in one file: `src/data/portfolio.ts`. Edit that file to update the whole site — no need to touch components.

## Project structure

```
src/
  app/            → routing, layout, global styles, metadata
  components/      → shared UI (Navbar, Footer, SectionHeading)
  sections/        → one file per page section (Hero, About, Skills, Projects, Experience, Credentials, Contact)
  data/            → portfolio.ts — all editable content lives here
public/
  profile/         → profile photo
  resume/          → resume PDF
```

## Design system

- **Colors**: primary `#2563EB`, secondary `#7C3AED`, accent `#06B6D4`, background `#0F172A`, surface `#1E293B` (see `tailwind.config.ts`)
- **Type**: Poppins for headings, Inter for body, JetBrains Mono for labels/data (loaded via `next/font/google`, self-hosted automatically — no external requests)
- **Signature element**: the hero's glass "status panel" — a terminal/dashboard-style card with a scanning-line animation and live stat tiles, echoing the ML/monitoring theme of your projects

## Deploying (free)

The fastest path is [Vercel](https://vercel.com) (made by the Next.js team):

```bash
npm i -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com — every push redeploys automatically. Netlify and GitHub Pages (with `next export`) also work.

## Notes

- All animations respect `prefers-reduced-motion`.
- Keyboard focus states are visible throughout (accent-colored outline).
- Fully responsive from small mobile up.
