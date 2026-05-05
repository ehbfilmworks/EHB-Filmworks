# Cloudflare Web Analytics

Labels (when published): `needs-triage`, `hitl`

## Parent

`docs/prd-initial-build.md`

## What to build

Add the Cloudflare Web Analytics beacon `<script>` to the base layout (JS-beacon mode — does not require the domain's DNS to be at Cloudflare). Update Datenschutz §4 to name Cloudflare with the no-cookies/no-IP-storage wording, and §8 to list Cloudflare as the analytics Auftragsbearbeiter.

This slice is HITL: the studio needs to create a Cloudflare account, set up Web Analytics for `ehb-filmworks.ch`, and provide the beacon token before this slice can complete.

## Acceptance criteria

- [ ] Studio has created a Cloudflare account, configured Web Analytics for `ehb-filmworks.ch`, and provided the beacon token
- [ ] Beacon token stored as an environment variable (`PUBLIC_CF_ANALYTICS_TOKEN`) consumed at build time
- [ ] Beacon `<script>` injected once via the base layout `<head>` (or end-of-`<body>` per Cloudflare's recommendation), not duplicated per page
- [ ] Beacon script source is the Cloudflare CDN URL (no self-hosting)
- [ ] No analytics cookies set (verify in DevTools → Application → Cookies after a page load)
- [ ] No personally identifiable network requests (no third parties beyond Cloudflare's beacon endpoint, per the privacy posture)
- [ ] Pageviews show up in the Cloudflare Web Analytics dashboard within ~10 minutes of deploying
- [ ] Datenschutz §4 updated to: "Wir verwenden Cloudflare Web Analytics zur Erhebung anonymer Nutzungsstatistiken (Seitenaufrufe, Referrer, Browser- und Gerätekategorie). Cloudflare Web Analytics setzt keine Cookies und speichert keine IP-Adressen. Ein personenbezogenes Tracking findet nicht statt."
- [ ] Datenschutz §8 updated to add: "Cloudflare, Inc., San Francisco — Bereitstellung anonymer Web-Analytics. Datenverarbeitung erfolgt ohne Cookies und ohne Speicherung der IP-Adresse."

## Blocked by

- #02 (design tokens, base layout)
- Touches: #06 (Datenschutz §4 + §8 wording)
