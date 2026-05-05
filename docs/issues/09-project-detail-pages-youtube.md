# Project detail pages + click-to-load YouTube

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Build the dynamic project detail route that renders one page per project from the collection. Layout follows the design language already in the bundle: page-head with breadcrumbs, h1, and the project's tagline; metadata bar (category · client · location · date · runtime); embedded YouTube via the `<LiteYouTube>` wrapper (click-to-load — no requests to youtube.com until the user clicks play); markdown body in `.legal-body` typography; optional credits `<dl>` block in the `legal-dl` style; final CTA strip at the bottom.

Update the gallery cards from #08 to link to the matching detail page. Update Datenschutz §4 (Cookies) and §8 (Auftragsbearbeiter) with the explicit click-to-load YouTube wording.

## Acceptance criteria

- [ ] `src/pages/projekte/[...slug].astro` generates one static page per entry in the projects collection (verify build output contains `/projekte/hotel-palace-gstaad/`, `/projekte/golfplatz-meggen/`, `/projekte/immobilienbuero/`)
- [ ] Each page renders page-head with breadcrumbs `EHB Filmworks / Projekte / [Title]`, h1 (project title with optional `<em>` accent on the last word), and the project's lead/tagline (excerpt or a dedicated `tagline` field)
- [ ] Metadata bar below the hero shows: category label, client (when present), location (when present), date, runtime — separated by orange dots
- [ ] `<LiteYouTube>` component wraps the `lite-youtube` web component:
  - [ ] On first paint, only the YouTube thumbnail + a play button are rendered — verify in DevTools that no requests go to `youtube.com`, `googlevideo.com`, or `googleads.g.doubleclick.net` before the user clicks
  - [ ] Clicking play loads and starts the embedded player
  - [ ] Player is responsive (16:9 aspect ratio)
  - [ ] Alt text on the thumbnail uses the project title
- [ ] Projects without a `youtubeId` (Immobilienbüro placeholder) render the hero image only, no embed and no broken player UI
- [ ] Markdown body renders in the `.legal-body` typography (orange-accent top-border h2s, prose at ~760px max width)
- [ ] Credits `<dl>` block renders when frontmatter contains `credits`, in the `legal-dl` style (e.g. "Model — Max Mariotto" for Meggen)
- [ ] Final CTA strip renders at the bottom (reuse from earlier slices)
- [ ] Gallery cards in #08 now link to `/projekte/<slug>/`
- [ ] Datenschutz §4 updated to: "Beim Abspielen eines auf der Seite eingebetteten YouTube-Videos werden Daten an Google Ireland Ltd. übermittelt. Vor einem Klick auf 'Play' findet keine Datenübertragung an Google statt."
- [ ] Datenschutz §8 updated to add: "Google Ireland Ltd., Dublin — Bereitstellung der eingebetteten YouTube-Videos. Datenübermittlung erfolgt erst beim aktiven Abspielen eines Videos."
- [ ] `<SEO>` per detail page uses project title for `<title>` and the excerpt for description; OG image is the project's hero photo

## Blocked by

- #08 (projects collection + gallery)
- Touches: #06 (Datenschutz §4 + §8 wording)
