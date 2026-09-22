# Naidu Tamarana — Portfolio

Angular 21 portfolio for a Frontend Developer with healthcare product experience.

```bash
npm start        # http://localhost:4200
npm run build    # production build → dist/portfolio
npm test         # Vitest unit tests
```

## Structure

```
src/app/
  core/models/        Typed content models
  core/data/          All site content (profile, experience, skills, projects)
  layout/             Navbar, footer
  pages/home/         Home page, one component per section
  pages/project-detail/  Case study page  → /projects/:slug
  pages/demo-viewer/     Full-screen prototype viewer → /demos/:slug
  shared/             Icon, reveal-on-scroll directive, project card/visual, section heading
src/styles/           Global design system (tokens, components, sections, pages)
public/prototypes/    Standalone interactive HTML prototypes
public/images/        Profile photo and project screenshots
```

## Updating content

- **Profile photo:** `public/images/profile.png` (path set by `photo` in `profile.data.ts`). If the file is missing the hero shows initials.
- **Profile, experience, skills, education:** edit `src/app/core/data/profile.data.ts`.
- **LinkedIn / GitHub / resume:** set `linkedin`, `github` or `resumeUrl` on `PROFILE` — contact links appear automatically.

## Adding a project

1. Append an object to `PROJECTS` in `src/app/core/data/projects.data.ts`.
2. Optional prototype: put the HTML file in `public/prototypes/`, screenshots in
   `public/images/projects/`, and fill in the `demo` field (url, flows, hint, screens).

The home page cards, the demos section, the case study page and the demo viewer are all
generated from that list — no component changes needed.
