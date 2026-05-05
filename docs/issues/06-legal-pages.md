# Legal pages — Impressum, Datenschutz (initial), AGB

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Create the `legal` MDX content collection, three MDX files containing the agreed copy edits, and a shared `LegalLayout` that renders the page-head, sticky sidebar nav with active-page highlight, sidebar meta block, and the body article in the `.legal-body` typography from the prototype CSS.

This slice ships **version-zero** of Datenschutz §4 and §8. Those sections will be touched again by #09 (YouTube), #10 (Tally), #12 (Cloudflare) — each of those slices includes acceptance criteria for the matching wording.

## Acceptance criteria

- [ ] `legal` MDX collection defined in `src/content/config.ts` with a typed schema (title, subtitle, stand date)
- [ ] `src/content/legal/impressum.mdx`, `datenschutz.mdx`, `agb.mdx` exist
- [ ] `/impressum` renders the Impressum content edited per decisions:
  - [ ] Entity name "EHB Filmworks" (no "GmbH" suffix)
  - [ ] No Handelsregister, no UID, no MwSt-Nummer rows
  - [ ] No street address
  - [ ] Phone `+41 77 527 52 46`
  - [ ] Email `ehbfilmworks@gmail.com`
  - [ ] Three founders correctly named (Lorin Büchel · Geschäftsführer, Silas Hanyecz · Technische Leitung, Sebastian Ebner · Kreative Leitung)
  - [ ] Bildnachweise / Haftungsausschluss / Urheberrecht sections retained as in the prototype copy
- [ ] `/datenschutz` renders with:
  - [ ] §1 verantwortliche Stelle: "EHB Filmworks" (no GmbH), no address, real email
  - [ ] §4 Cookies: placeholder paragraph naming Cloudflare Web Analytics (the precise wording lands in #12) and noting that YouTube embeds load only on click (precise wording lands in #09)
  - [ ] §8 Auftragsbearbeiter: GitHub, Inc. (Hosting), placeholder rows for Cloudflare/Tally/Google Ireland that #09/#10/#12 will fill in. Infomaniak / Frame.io / Bexio entries removed.
- [ ] `/agb` renders with the GmbH suffix dropped, address removed; pricing-mechanic clauses retained (the AGB still references Korrekturschleifen counts per tier)
- [ ] `LegalLayout` renders: page-head with crumbs `EHB Filmworks / Rechtliches / [Page]`, h1, lead/subtitle, sidebar (sticky on ≥ 900px) listing the three legal pages with the current page highlighted, sidebar meta block (Stand date, Kontakt), body article wrapped in `.legal-body`
- [ ] Headings inside the body render with the orange accent top-border per the existing `.legal-body h2` rule
- [ ] Each legal page passes its own `<SEO>` props (title, short description)

## Blocked by

- #03 (Nav + Footer)
