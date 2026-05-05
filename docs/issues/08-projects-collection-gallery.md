# Project content collection + filterable gallery

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Define the `projects` content collection with a Zod-validated frontmatter schema. Ship two real project markdown files (Hotel Palace Gstaad, Golfplatz Meggen) with full body copy supplied by the studio, and one placeholder (Immobilienbüro). Build the `/projekte` gallery page with the React-island filter component.

Cards link to `#` for now — detail pages land in #09 and that slice will swap the link target.

## Acceptance criteria

- [ ] `src/content/config.ts` defines a `projects` collection with Zod-validated frontmatter:
  - [ ] `title: string`
  - [ ] `slug` (derived from filename, not required in frontmatter)
  - [ ] `date: Date`
  - [ ] `category: "cinematic" | "image" | "drone" | "reel"` (enum)
  - [ ] `categoryLabel: string` (display label, e.g. "Cinematic", "Image-Film", "FPV-Drone", "Reel")
  - [ ] `runtime: string` (e.g. "2:14")
  - [ ] `hero: ImageMetadata` reference into `src/assets/`
  - [ ] `youtubeId?: string`
  - [ ] `client?: string`, `location?: string`
  - [ ] `credits?: Array<{ role: string; name: string }>`
  - [ ] `featured?: boolean`, `large?: boolean`
  - [ ] `excerpt: string` (used on the gallery card)
- [ ] `src/content/projects/hotel-palace-gstaad.md` exists with `featured: true`, `large: true`, `youtubeId: "ZFFMn09wlKI"`, the user-supplied story copy as the markdown body, hero `HotelPalace.jpg`
- [ ] `src/content/projects/golfplatz-meggen.md` exists with `youtubeId: "-r2xKGWohfw"`, the user-supplied story copy as the markdown body, hero `golfplatzmeggen.jpg`, credits `[{ role: "Model", name: "Max Mariotto" }]`
- [ ] `src/content/projects/immobilienbuero.md` exists with hero `efficiency.jpg`, no `youtubeId`, generic placeholder body containing a `TODO:` marker calling out: client name, location, date, runtime, video, real body copy
- [ ] Build fails loudly if frontmatter is missing required fields or has an invalid enum value (verify by intentionally introducing a typo and confirming the build error)
- [ ] `/projekte` renders page-head with crumbs `EHB Filmworks / Projekte`, h1 "Geschichten in _Bewegung._", lead copy
- [ ] `<ProjectsGallery>` React island (`client:idle`) renders:
  - [ ] Filter row (Alle / Cinematic / Image-Film / FPV-Drone / Reels) with the "Filter" eyebrow label and the count display ("N Projekte") on the right
  - [ ] Filter changes the rendered tiles client-side without a full page reload
- [ ] Tiles render with: thumb (responsive `<Image>`), badge (when present), runtime overlay, play-mini overlay on hover, meta-row with category and date, slab-bold title, excerpt
- [ ] Featured/large project spans 2 columns at viewports ≥ 760px
- [ ] Tiles link to `#` for now — replaced in #09
- [ ] Final CTA strip renders at the bottom
- [ ] `<SEO>` populated with the Projekte title and description

## Blocked by

- #03 (Nav + Footer)
