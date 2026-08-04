# Yaswanth Kumar Ippili — Portfolio

A dark, motion-driven portfolio site for a graphic, presentation, and brand
identity designer — built to showcase real work to recruiters and freelance
clients alike.

**Live site:** https://yaswanth-ippili-graphic-designing-portfolio.vercel.app/

## Overview

Single-page Next.js portfolio with:

- Hero, About, Experience, Skills, Services, Featured Work, filterable
  Gallery, and Contact sections
- A fullscreen project viewer (swipe/keyboard navigation, pinch-to-zoom-style
  click zoom) for browsing multi-page presentation decks
- A category-filtered gallery (Presentations, Posters, Flyers, Logos,
  Branding, Social Media)
- Scroll-triggered animations throughout via Framer Motion, smooth scrolling
  via Lenis

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config)
- **UI primitives:** [Base UI](https://base-ui.com) + [shadcn](https://ui.shadcn.com)
- **Animation:** [Framer Motion](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) smooth scroll
- **Icons:** [Lucide](https://lucide.dev)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Project Structure

```
src/
  app/                  # App Router entry (layout, page, metadata, icons)
  components/
    sections/           # Top-level page sections (Hero, About, Work, ...)
    gallery/             # Project cards, fullscreen viewer
    hero/                # Hero-specific subcomponents
    layout/              # Navbar, Footer
    providers/            # Smooth scroll provider
    icons/                # Inlined brand SVG marks
    ui/                    # Reusable shadcn/Base UI primitives
  lib/                   # Site config, project data, small utilities
public/
  work/                  # Project imagery
```

Content lives in two places:

- `src/lib/site-config.ts` — name, role, rotating titles, nav links, social links
- `src/lib/projects.ts` — project/case-study data

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — no build settings to change.
4. (Optional) Set an environment variable `NEXT_PUBLIC_SITE_URL` to your final
   production URL (e.g. `https://yourname.vercel.app`) so Open Graph/Twitter
   share previews resolve correctly. Without it, the site falls back to a
   default URL.
5. Deploy. Every subsequent push to your default branch redeploys
   automatically.

This is a single-page app with no dynamic routes, so refreshing any in-page
anchor (e.g. `/#work`) simply reloads `/` and scrolls to the section — no
extra Vercel routing configuration is needed.

## Notes

- `MATERIALS/` (source PDFs/design files used to generate `public/work/`
  imagery) is git-ignored and not part of the deployed site.
- The dark theme is the only theme — there is no light-mode toggle by design.
