# Yaswanth Kumar Ippili — Portfolio

A dark, motion-driven portfolio for a graphic, presentation, and brand
identity designer — built to read equally well to recruiters skimming for a
role and freelance clients sizing up a hire. Real case studies, a filterable
project gallery, and a fullscreen viewer replace the usual static image grid.

**Live site:** https://yaswanth-ippili-graphic-designing-portfolio.vercel.app/

---

## Features

- **Cinematic hero** with a full-bleed portrait, a rotating title (Creative
  Designer, Presentation Designer, Website Developer, …), and a mouse-reactive
  animated backdrop
- **Fluid, desktop-first typography** — headline and section sizes scale
  continuously with the viewport (via CSS `clamp()` and container queries)
  instead of jumping between a handful of fixed breakpoints
- **Filterable project gallery** across Presentations, Posters, Flyers,
  Logos, Branding, Social Media, and Websites, with animated filter
  transitions
- **Fullscreen project viewer** — swipe, arrow-key, and click-to-zoom
  navigation through multi-page presentation decks
- **Website showcase cards** with a Desktop / Tablet / Mobile preview
  toggle, Live Demo / GitHub actions, and a tech-stack list — ready to swap
  in real projects
- **Services & Skills sections** framed around freelance-ready offerings
  (graphic design, presentation design, brand identity, website design,
  Canva) rather than a single job title
- Scroll-triggered reveal animations throughout via Framer Motion, smooth
  scrolling via Lenis
- Dark-mode-only design system — no light theme, by design
- SEO metadata, Open Graph/Twitter share images, and a favicon generated at
  build time (no static image assets to keep in sync)

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

Everything under `components/sections` is composed, in order, in
`src/app/page.tsx` — reordering the page is a one-file change.

## Installation

Requires Node.js 20+ and npm.

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Turbopack hot-reloads
on save.

## Production Build

```bash
npm run build   # compiles and type-checks the production bundle
npm run start   # serves that build locally, exactly as Vercel would
```

Run `npm run lint` before either to catch issues early.

## Deployment

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo —
   the Next.js preset is auto-detected, no build settings to change.
3. *(Optional)* Set `NEXT_PUBLIC_SITE_URL` to your final production URL so
   Open Graph/Twitter share previews resolve to the right domain. Without
   it, metadata falls back to a default URL.
4. Deploy. Every push to the default branch redeploys automatically.

This is a single-page app with no dynamic routes, so refreshing any in-page
anchor (e.g. `/#work`) just reloads `/` and the browser scrolls to that
section — no extra Vercel routing configuration is required.

## Customization

All content lives in plain data files under `src/lib/` — no need to touch
component code to update copy or add work.

**New case-study projects (Presentations, Posters, Flyers, Logos, Branding,
Social Media)** — add an entry to the `projects` array in
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

**Posters, logos, certificates, or any other category** — these are all
just `ProjectCategory` values (`src/lib/projects.ts`). Tag a project with
the matching category and it appears under that Gallery filter
automatically; add a new category to the `ProjectCategory` union and
`allCategories` array to introduce a new filter.

**Skills** — edit the `designTools` / `presentationTools` arrays in
`src/components/sections/skills.tsx`.

**Services** — edit the `services` array in
`src/components/sections/services.tsx` (emoji, title, summary, and the
expandable item list per card).

**Name, rotating titles, nav links, social links** — all in
`src/lib/site-config.ts`.

## Screenshots

<!-- Add screenshots or a short walkthrough GIF here before publishing, e.g.:
![Hero section](./docs/screenshot-hero.png)
![Gallery section](./docs/screenshot-gallery.png)
-->

## Credits

- Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com),
  [Framer Motion](https://motion.dev), [Base UI](https://base-ui.com), and
  [Lucide](https://lucide.dev)
- Smooth scrolling by [Lenis](https://lenis.darkroom.engineering)
- Component scaffolding via [shadcn](https://ui.shadcn.com)

## License

This repository is source-available for reference and personal learning.
The code is not licensed for reuse; the design, content, and imagery are
© Yaswanth Kumar Ippili and not licensed for reuse.
