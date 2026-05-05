# Global chrome — Nav + Footer on every page

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Build the sticky top navigation and the site footer, wire them into the base layout so they appear on every route. After this slice every page (including the still-placeholder index) shows the same chrome and the only thing left for each page is its content.

The Nav is scroll-aware: transparent over the hero on the home route, opaque elsewhere or after scrolling past 80px. It highlights the active route and collapses non-CTA links on small screens.

The Footer is a 4-column grid with a brand paragraph (no newsletter form), Studio nav links, Leistungen list, and a Kontakt block (real phone, real email, no address), plus a bottom bar with copyright and legal links.

## Acceptance criteria

- [ ] `<Nav>` renders on every page with the brand logo (`Logo_EHB_Filmworks_SW.png`), three primary links (Projekte / Preise / Kontakt) and the orange "Projekt anfragen" CTA pointing at `/kontakt`
- [ ] On the home route, Nav background is transparent until `window.scrollY > 80`, then becomes the white-translucent `is-dark` is removed treatment (matches prototype)
- [ ] On non-home routes, Nav is opaque (white-translucent) from page load
- [ ] Active route is highlighted via the underline-on-hover pattern from the prototype CSS
- [ ] At viewport ≤ 800px the three primary links collapse, leaving only the orange CTA and the logo
- [ ] Logo image inverts under the dark/transparent home-hero variant via the existing `.nav.is-dark .nav-logo img { filter: invert(1); }` rule
- [ ] `<Footer>` renders the brand block (logo + brand paragraph + CTA-to-`/kontakt`) — newsletter input + button removed
- [ ] Footer Studio column lists Startseite / Projekte / Preise / Kontakt; Projekte shows the gloss "3"
- [ ] Footer Leistungen column lists Image-Filme / Cinematic / FPV-Drohnen / Reels & TikTok / Live-Events
- [ ] Footer Kontakt column shows email (`ehbfilmworks@gmail.com`) and phone (`+41 77 527 52 46`) only — no Studio/address row
- [ ] Bottom bar shows "© 2026 EHB Filmworks" and links to `/impressum`, `/datenschutz`, `/agb`
- [ ] Both render correctly on a blank `/_chrome-test` route used to verify chrome before page slices land (route can be removed once #04+ ship)

## Blocked by

- #02 (design tokens, base layout)
