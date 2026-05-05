# Skeleton + deploy pipeline → "Hello, EHB" lands on ehb-filmworks.ch

Labels (when published): `needs-triage`, `hitl`

## Parent

`docs/prd-initial-build.md` (PRD not yet published to issue tracker)

## What to build

Initialise an Astro 5 + React + TypeScript project in this directory, ship a placeholder index page, and stand up the deploy pipeline so that pushing to `main` builds the site and publishes it to `ehb-filmworks.ch` via GitHub Pages on the custom apex domain.

This is the first tracer bullet. After it lands, every subsequent slice is a content/feature change that ships to production via `git push`.

## Acceptance criteria

- [ ] Astro 5 project scaffolded with `@astrojs/react`, `@astrojs/sitemap`, and TypeScript (`strict: true`)
- [ ] Prettier with `prettier-plugin-astro` configured
- [ ] `.nvmrc` and `package.json` engines field pin Node 20+
- [ ] `npm install && npm run dev` brings up a working dev server
- [ ] `npm run build && npm run preview` produces a working production preview
- [ ] Placeholder `src/pages/index.astro` renders a minimal "EHB Filmworks" page (no styling required)
- [ ] GitHub repository created with the project pushed to `main`
- [ ] `.github/workflows/deploy.yml` uses the official `actions/deploy-pages` flow (build with Node 20, deploy on push to `main`)
- [ ] `public/CNAME` contains `ehb-filmworks.ch`
- [ ] `astro.config.ts` sets `site: "https://ehb-filmworks.ch"` and no `base` prefix
- [ ] DNS / Pages source flipped so `ehb-filmworks.ch` serves the new site
- [ ] The placeholder page is publicly reachable at `https://ehb-filmworks.ch`

## Blocked by

None — can start immediately.
