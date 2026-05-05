# Design tokens, base layout, SEO component, sitemap & robots

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Port the design system from the design bundle (two stylesheets) as global CSS, ship the base layout that every page extends, build the `<SEO>` component used on every page (title, meta description, canonical, OpenGraph, Twitter card, JSON-LD), generate a default OpenGraph image at build time, ship favicon + apple-touch-icon, configure `@astrojs/sitemap`, and ship `robots.txt`.

After this slice the placeholder page from #01 should pick up the right typography and colors, the `<head>` should be fully populated for any page that uses the layout, and `/sitemap-index.xml` should be reachable.

## Acceptance criteria

- [ ] `colors_and_type.css` and `site.css` from the design bundle ported into `src/styles/` and imported once via the base layout
- [ ] Google Fonts (Raleway, Roboto Slab, Poppins) load via the existing `@import` in `colors_and_type.css`
- [ ] FontAwesome 6 loaded via `<link>` in the base layout (matches the prototype's `<head>`)
- [ ] `BaseLayout.astro` accepts a slot for page content and `seo` props, renders `<html lang="de">`, the right `<meta>` tags, the global stylesheets, and the slot
- [ ] `<SEO>` component accepts `title`, `description`, `image?`, `canonical?` props and emits `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`), Twitter card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), and JSON-LD `Organization` schema
- [ ] Default site title pattern `{Page} — EHB Filmworks`; root page is just `EHB Filmworks — Cinematic Image Films from Solothurn`
- [ ] Default OG image generated at build time as a composite of the Gstaad hero photo + the white logo (e.g. via a one-shot sharp script in a build step), placed in `public/og-default.jpg`
- [ ] `public/favicon.ico` shipped (existing file from the bundle)
- [ ] `public/apple-touch-icon.png` derived from the white logo at 180×180
- [ ] `@astrojs/sitemap` integration installed and added to `astro.config.ts`
- [ ] `/sitemap-index.xml` reachable in the production build
- [ ] `public/robots.txt` allows everything and points at `https://ehb-filmworks.ch/sitemap-index.xml`
- [ ] Placeholder index page renders with the right body font (Raleway), body color, background — verifiable by inspecting computed styles

## Blocked by

- #01 (skeleton + deploy)
