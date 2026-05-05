# Pricing page — 3 tier cards "Auf Anfrage" + trimmed FAQ

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Build `src/data/pricing.ts` with the three tier objects (Reel / Image-Film / Cinematic). Ship the Preise route end-to-end with the three tier cards rendered from data, the process recap strip, and the trimmed FAQ. Drop the project/retainer billing toggle, drop the Addons section entirely, drop the MwSt FAQ question. Tier CTAs link to `/kontakt`.

The `price` field type accepts the literal string `"Auf Anfrage"` or a CHF number, anticipating a future swap to published prices being a one-line edit per tier.

## Acceptance criteria

- [ ] `src/data/pricing.ts` exports `tiers` array of three typed objects:
  - [ ] Each tier has: `name`, `title`, `tag`, `price: "Auf Anfrage" | number`, `suffix`, `features: string[]`, `muted?: string[]`, `feature?: boolean`
  - [ ] Reel and Cinema tiers retain their `muted` lists from the prototype where applicable
  - [ ] Image-Film tier has `feature: true` (gets the "Beliebteste Wahl" treatment)
  - [ ] All three tiers have `price: "Auf Anfrage"` in this slice
- [ ] `src/data/pricing.ts` exports `faq` array of 4 entries:
  - [ ] "Wie läuft ein Projekt typischerweise ab?"
  - [ ] "Was ist mit Musik- und Bildrechten?"
  - [ ] "Reisen Sie auch in andere Kantone?"
  - [ ] "Was, wenn das Wetter nicht mitspielt?"
  - [ ] (MwSt and Korrekturschleifen questions explicitly dropped)
- [ ] `/preise` renders page-head with crumbs `EHB Filmworks / Preise`, h1 with `<em>` accent, lead copy
- [ ] No billing toggle UI present (project/retainer pill removed)
- [ ] Three tier cards render from `tiers` data; the Image-Film tier shows the "Beliebteste Wahl" featured-card treatment (black bg, `::before` ribbon)
- [ ] Each card shows: tier name eyebrow, title, tag, price slot ("CHF Auf Anfrage" or just "Auf Anfrage" — pick the cleaner of the two and apply consistently), suffix, feature list with check icons, muted/struck items where present, CTA-to-`/kontakt`
- [ ] CTA label varies: "Custom anfragen" for Cinematic tier, "Paket buchen" for the others (matches prototype)
- [ ] No Addons section
- [ ] Process recap strip ("So arbeiten wir") renders below the tiers with 4 steps
- [ ] FAQ renders the 4 trimmed questions using native `<details>` with the +/− accent treatment from the prototype CSS
- [ ] Final CTA strip ("Bereit?" / "Holen Sie ein Festpreis-Angebot.") renders at the bottom — copy adjusted: replace "Festpreis-Angebot" with just "Angebot" since prices are no longer fixed numbers
- [ ] `<SEO>` populated with the Preise title and description

## Blocked by

- #03 (Nav + Footer)
