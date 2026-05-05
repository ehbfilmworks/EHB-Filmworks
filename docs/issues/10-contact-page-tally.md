# Contact page — Tally form + team strip side panel

Labels (when published): `needs-triage`, `hitl`

## Parent

`docs/prd-initial-build.md`

## What to build

Build `src/data/team.ts` with the three founders (Lorin Büchel, Sebastian Ebner, Silas Hanyecz with their roles and portrait references). Build the Kontakt page with the chips-driven form as a React island that submits to a Tally form via `fetch`, shows the success toast, and resets. Restructure the side panel: drop Standort, Öffnungszeiten, and Map blocks; keep Email, Phone, Folgen Sie uns; add a 3-up team strip with circular portraits + name + role beneath the Folgen Sie uns block. Update Datenschutz §8 to add Tally as Auftragsbearbeiter.

This slice is HITL: the studio needs to create a Tally form configured to email submissions to `ehbfilmworks@gmail.com` and provide the form ID before this slice can complete.

## Acceptance criteria

- [ ] Studio has created a Tally form configured to email submissions to `ehbfilmworks@gmail.com` and provided the form ID
- [ ] `src/data/team.ts` exports an array of three founders, each with:
  - [ ] `name: string`
  - [ ] `role: string` (Geschäftsführer / Technische Leitung / Kreative Leitung)
  - [ ] `portrait: ImageMetadata` reference (`lorin.png`, `sebi.png`, `silas.png` from `src/assets/`)
- [ ] `/kontakt` renders page-head with crumbs `EHB Filmworks / Kontakt`, h1 with `<em>` accent, lead copy
- [ ] `<ContactForm>` React island (`client:idle`) renders all fields:
  - [ ] Vorname* / Nachname* (field-row, two columns)
  - [ ] Email* / Telefon (field-row, two columns)
  - [ ] Firma (single field)
  - [ ] "Welche Leistung interessiert Sie?" — multi-select chips (Image-Film / Cinematic / FPV-Drone / Reel / TikTok / Live-Event / Anderes)
  - [ ] "Ihr Budget" — single-select chips (< CHF 2k / CHF 2–5k / CHF 5–10k / CHF 10–25k / CHF 25k +)
  - [ ] "Wann soll's losgehen?" — single-select chips (So schnell wie möglich / In 1–3 Monaten / In 3–6 Monaten / Noch flexibel)
  - [ ] "Erzählen Sie uns von Ihrem Projekt*" — textarea
- [ ] Required fields validated client-side via the `required` HTML attribute
- [ ] Submitting POSTs JSON (or form-encoded — whichever Tally requires) to the configured Tally endpoint via `fetch`
- [ ] On 2xx response: success toast appears ("Nachricht gesendet — wir melden uns innerhalb von 24 Stunden."), form fields reset
- [ ] On error response or network failure: error toast appears with email fallback ("Etwas ist schiefgelaufen — schreiben Sie uns direkt an ehbfilmworks@gmail.com")
- [ ] Toast auto-dismisses after ~3.2 seconds and is keyboard-dismissable
- [ ] Submit button disables while the request is in flight to prevent double-submit
- [ ] Side panel renders with eyebrow + h3 heading
- [ ] Side panel info-blocks:
  - [ ] Standort block — DROPPED
  - [ ] Email block — KEPT (`ehbfilmworks@gmail.com`)
  - [ ] Phone block — KEPT (`+41 77 527 52 46`)
  - [ ] Öffnungszeiten block — DROPPED
  - [ ] Folgen Sie uns block — KEPT
- [ ] Map block at the bottom — DROPPED
- [ ] In place of the Map block, a 3-up team strip:
  - [ ] Three circular portraits (responsive `<Image>`, ~64px diameter)
  - [ ] Each portrait has the founder's name beneath it and role beneath the name
  - [ ] Visual treatment fits the dark side-panel aesthetic
- [ ] Datenschutz §8 updated to add Tally entry, e.g.: "Tally Solutions BV, Amsterdam — Verarbeitung von Kontaktformular-Einsendungen. Daten werden in der EU verarbeitet."
- [ ] Tally form ID stored as an environment variable (`TALLY_FORM_ID`) and read in the build, so swapping the form later is a config edit
- [ ] `<SEO>` populated with the Kontakt title and description

## Blocked by

- #03 (Nav + Footer)
- Touches: #06 (Datenschutz §8)
