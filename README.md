# Yaswanth Kumar Ippili — Portfolio

**Live site:** https://yaswanth-ippili-graphic-designing-portfolio.vercel.app/

## Overview

A dark, motion-driven portfolio built for a designer working across graphic
design, presentation design, website design, and brand identity — positioned
for both recruiters evaluating a hire and freelance clients evaluating a
collaborator. Real case studies replace stock imagery: a filterable project
gallery, a fullscreen deck viewer, and a dedicated service breakdown stand in
for a generic "about me" page.

Single-page Next.js App Router site, no CMS, no backend — all content lives
in typed data files under `src/lib/`.

## Features

- **Full-bleed hero** with a rotating title (Creative Designer, Presentation
  Designer, Website Developer, Canva Expert, …), a mouse-reactive animated
  backdrop, and a portrait that shares the row with the headline rather than
  floating separately from it
- **Fluid, desktop-first typography** — headline and section sizes scale
  continuously with the viewport via CSS `clamp()` and container queries
  instead of jumping between a handful of fixed breakpoints
- **Services section** framed around freelance-ready offerings: graphic
  design, presentation design, website design, brand identity, social media
  creatives, and Canva work — not a single job title
- **Filterable project gallery** — Presentations, Posters, Flyers, Logos,
  Branding, Social Media, and Websites — with animated filter transitions
- **Fullscreen project viewer** — swipe, arrow-key, and click-to-zoom
  navigation through multi-page presentation decks
- **Website showcase cards** with a Desktop / Tablet / Mobile preview
  toggle and Live Demo / GitHub actions, ready to swap in real projects
- Scroll-triggered reveal animations via Framer Motion, smooth scrolling via
  Lenis
- Dark-mode-only design system — no light theme, by design
- SEO metadata, and Open Graph/Twitter share images and a favicon generated
  at build time (no static image assets to keep in sync)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config) |
| UI primitives | [Base UI](https://base-ui.com) + [shadcn](https://ui.shadcn.com) |
| Animation | [Framer Motion](https://motion.dev) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering) |
| Icons | [Lucide](https://lucide.dev) + a few inlined brand SVGs |
| Deployment | [Vercel](https://vercel.com) |

## Folder Structure

```
src/
  app/
    layout.tsx            # Root layout, fonts, SEO metadata
    page.tsx               # Section order for the single page
    icon.tsx                # Generated favicon (no static file)
    opengraph-image.tsx      # Generated OG/Twitter share image
    globals.css               # Tailwind v4 theme tokens + keyframes
  components/
    sections/               # One file per page section (Hero, About, ...)
    gallery/                 # Project card, website card, fullscreen viewer
    hero/                     # Hero-only subcomponents (backdrop, rotating role)
    layout/                    # Navbar, Footer
    providers/                  # Lenis smooth-scroll provider
    icons/                       # Inlined brand SVG marks (LinkedIn, GitHub)
    ui/                            # Shared Base UI/shadcn primitives
  lib/
    site-config.ts            # Name, rotating titles, nav links, socials
    projects.ts                 # Case-study data (gallery + featured work)
    website-projects.ts           # Website showcase placeholder data
    seeded-random.ts                # Deterministic RNG for decorative motifs
    utils.ts                          # `cn()` class-merge helper
public/
  work/                       # Project imagery served to the gallery
  profile-photo.jpg            # Hero/About portrait
```

Every section in `src/components/sections/` is composed, in order, in
`src/app/page.tsx` — reordering the page is a one-file change.

## Installation

Requires Node.js 20+ and npm.

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
```

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Turbopack hot-reloads
on save. Run `npm run lint` before committing.

## Production Build

```bash
npm run build   # compiles and type-checks the production bundle
npm run start   # serves that build locally, exactly as Vercel would
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo — the
   Next.js preset is auto-detected, no build settings to change.
3. *(Optional)* Set `NEXT_PUBLIC_SITE_URL` to your production URL so Open
   Graph/Twitter share previews resolve to the right domain. Without it,
   metadata falls back to the live URL above.
4. Deploy. Every push to the default branch redeploys automatically.

This is a single-page app with no dynamic routes, so refreshing any in-page
anchor (e.g. `/#work`) just reloads `/` and the browser scrolls to that
section — no extra routing configuration is required.

## Customization

All content lives in plain data files under `src/lib/` — no component code
to touch for a content update.

**New case-study projects** (Presentations, Posters, Flyers, Logos,
Branding, Social Media) — add an entry to the `projects` array in
`src/lib/projects.ts`:

```ts
{
  slug: "my-project",
  title: "Project Name",
  subtitle: "Category — N Slides",
  categories: ["Presentations"],
  description: "One or two sentences on the project.",
  tools: ["Slide Design", "Typography"],
  cover: { src: "/work/my-project-cover.jpg", width: 1600, height: 2000 },
  pages: [{ src: "/work/my-project-cover.jpg", width: 1600, height: 2000 }],
  featured: true, // shows it in the Featured Work section
}
```

Drop the corresponding images in `public/work/`.

**New website projects** — replace an entry in the `websiteProjects` array
in `src/lib/website-projects.ts`:

```ts
{
  slug: "my-site",
  title: "Project Name",
  description: "One or two sentences on the project.",
  techStack: ["Next.js", "Tailwind CSS"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/you/repo", // optional
}
```

**New categories** (e.g. logos or certificates as their own filter) — add
the value to the `ProjectCategory` union and `allCategories` array in
`src/lib/projects.ts`; tag any project with it and the Gallery filter
appears automatically.

**Skills** — edit `designTools` / `presentationTools` in
`src/components/sections/skills.tsx`.

**Services** — edit the `services` array in
`src/components/sections/services.tsx` (emoji, title, summary, and the
expandable item list per card).

**Name, rotating titles, nav links, social links** — all in
`src/lib/site-config.ts`.

## License

This repository is source-available for reference and personal learning.
The code, design, content, and imagery are © Yaswanth Kumar Ippili and are
not licensed for reuse or redistribution.

## Screenshots

<!-- Add screenshots or a short walkthrough GIF here before publishing, e.g.:
![Hero section](./docs/screenshot-hero.png)
![Gallery section](./docs/screenshot-gallery.png)
-->
