# Landing page (still-image hero, hardcoded Featured)

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Implement the landing route end-to-end with the still-image hero (video lands in #05), marquee, revised stats, Idee section, capability grid, hardcoded Featured Project (Hotel Palace Gstaad), Process strip, and Final CTA. Hero CTA buttons can point at `/projekte` and `/projekte` for now (the showreel CTA is repurposed in #05). Featured Project is hardcoded JSX with the prototype copy edited to match the real project's facts; it'll be replaced with a data-driven render in a later iteration.

Use Astro's `<Image>` from `astro:assets` for every photo in this slice with appropriate widths and lazy-loading; the source JPEGs go into `src/assets/`, pre-shrunk to ≤ 2400px on the long edge before commit.

## Acceptance criteria

- [ ] `/` renders with the full landing page sections in correct order: Hero · Marquee · Stats · Idee · Capabilities · Featured · Process · Final CTA
- [ ] Hero shows `cinematic.jpg` as a still `<Image>` filling `.hero-media`, with the heroZoom CSS animation, the dark gradient overlay, eyebrow ("EHB Filmworks · est. 2024"), h1 with `<em>` accent ("Turn Ideas into _Action._ / Time is limited."), sub copy, and the two CTAs (orange "Projekt anfragen" + ghost "Showreel ansehen" — the latter still points to `/projekte` until #05)
- [ ] Hero meta strip on the right ("REEL 2026 / SOLOTHURN — CH") and bottom ticker (Scroll · ticker · 01/04) render correctly
- [ ] Marquee renders the orange strip with the four service phrases doubled and the looping CSS animation
- [ ] Stats row shows the revised numbers: `3 Projekte / 4K Cine / 2024 gegründet / 100% In-house Edit`
- [ ] Idee section renders the two-column layout (eyebrow + title left, lead + supporting paragraph right)
- [ ] Capability grid renders 4 cards (Reels / Cinematic / Drone / Story) using the four prototype images, with the hover-blur interaction (other cards blur+desaturate when one is hovered)
- [ ] Featured Project section renders Hotel Palace Gstaad with `HotelPalace.jpg` as the photo (`<Image>`), the orange "Image-Film" stamp, "2:14" duration, play button (visual only — wired to YouTube modal in a later iteration), metadata row (Cinematic · Hospitality · Gstaad, BE), heading with `<em>` accent, body copy, tag pills, and a CTA pointing to `/projekte`
- [ ] Process strip renders 4 steps in a 4-column grid with the orange italic numbers
- [ ] Final CTA renders with the giant background "EHB FILMWORKS" text and the two CTAs (orange "Projekt anfragen" + outline "Preise ansehen")
- [ ] Source images for this slice live under `src/assets/`, pre-shrunk to ≤ 2400px on the long edge, with `<Image>` generating responsive AVIF/WebP variants
- [ ] `<SEO>` populated with the home-page title and description

## Blocked by

- #03 (Nav + Footer)
