# PRD: Initial production build of ehb-filmworks.ch

Status: draft (not yet published to issue tracker — see *Further Notes*)
Labels (when published): `needs-triage`

## Problem Statement

EHB Filmworks is a young Swiss video production studio (3 founders, 3 completed projects, founded 2024). Their current online presence is a placeholder site on GitHub Pages. Prospective clients — Swiss SMEs, hospitality brands, and event organisers in the German-speaking part of Switzerland — cannot today land on a website that:

- Communicates what the studio offers (Image-Filme, Cinematic, FPV-Drohne, Reels) at a level of polish that signals competence to luxury-hospitality and corporate prospects.
- Surfaces the actual portfolio (Hotel Palace Gstaad, Golfplatz Meggen, an Immobilienbüro project) with playable video.
- Provides a clear, low-friction way to start a conversation about a project (briefing → quote).
- Meets Swiss expectations around data-handling transparency (revDSG/DSGVO, Impressum, AGB).

A design bundle has been produced via Claude Design covering all required pages. The problem is to take that prototype and ship it as the actual production website at `ehb-filmworks.ch`.

## Solution

Build a static marketing site from the design bundle, deploy it to GitHub Pages on the existing custom domain `ehb-filmworks.ch`, and replace the current placeholder site. The site is German-only, has 7 base pages plus per-project detail pages, integrates a third-party form provider for the contact form, and uses click-to-load embeds for video to preserve the studio's "kein Tracking" privacy posture for non-watching visitors.

The visual language and copy come from the design bundle as authored, with targeted edits to bring the load-bearing claims (legal entity, address, prices, stats) in line with the studio's actual current state. Hero section uses muted-autoplay background video drawn from the studio's showreel, with a "Mit Ton ansehen" modal for visitors who want sound. Project detail pages embed the YouTube videos via a click-to-load placeholder so no third-party tracking fires until the visitor explicitly plays the video.

Content for the project portfolio and the legal pages lives in the repo as markdown so the studio can add a new project by writing a markdown file and pushing a commit. Pricing, FAQ, and team data live as typed TS data files. The contact form posts to Tally (EU-hosted) and submissions land in the studio inbox by email.

## User Stories

1. As a prospective client landing on the homepage, I want to immediately see moving footage of the studio's work, so that I can judge production quality within seconds.
2. As a prospective client on a mobile device with a metered data plan, I want the homepage to fall back to a still image instead of autoplaying 6+ MB of video, so that visiting the site doesn't burn my data allowance.
3. As a visitor with `prefers-reduced-motion` set, I want the hero to show a still image instead of motion, so that the site doesn't trigger vestibular discomfort.
4. As a visitor who wants to watch the showreel with sound, I want a clearly labelled "Mit Ton ansehen" button that opens a modal with audio enabled, so that I can choose to opt into sound.
5. As a visitor in the showreel modal, I want to close it with the Esc key, by clicking outside the player, or by clicking an X button, so that I can leave at any time.
6. As a visitor on the homepage, I want to see what services the studio offers (Reels, Cinematic, Drone, Story), so that I can self-qualify whether they do the kind of work I need.
7. As a visitor on the homepage, I want to read a clear value proposition ("Schweizer Videoproduktion für Marken mit Geschichte") and an explanation of how the studio works, so that I understand what hiring them looks like.
8. As a visitor on the homepage, I want to see the studio's process (Briefing → Pre-Production → Dreh → Post), so that I understand the workflow before contacting them.
9. As a visitor on the homepage, I want to see honest stats about the studio (3 Projekte, 4K Cine, 2024 gegründet, 100% In-house Edit), so that I trust the studio to be transparent rather than pad numbers.
10. As a visitor on the homepage, I want to see one prominent "Featured" project (Hotel Palace Gstaad) with a play button and short context, so that I get an immediate strong sample of the work.
11. As a visitor anywhere on the site, I want a sticky top navigation that stays accessible while I scroll, so that I can jump to other pages without scrolling back to the top.
12. As a visitor on the homepage, I want the navigation to be visually subtle (transparent on hero) and become opaque once I scroll, so that the navigation doesn't compete with the hero design but still stays legible against the content beneath.
13. As a visitor on any non-home page, I want the navigation to be consistently styled (white background, dark text), so that it's always legible without me thinking about it.
14. As a visitor on a small screen, I want only the primary CTA in the navigation (Projekt anfragen), with secondary nav items hidden, so that the nav doesn't crowd the small viewport.
15. As a prospective client browsing the Projekte page, I want to see all of the studio's work in a grid with thumbnails, runtime, and a one-line excerpt, so that I can scan the portfolio quickly.
16. As a prospective client browsing the Projekte page, I want to filter by category (Cinematic, Image-Film, FPV-Drohne, Reel), so that I can find work relevant to my own brief.
17. As a prospective client browsing the Projekte page, I want a "Featured" project to render as a wider tile, so that the studio's strongest work stands out.
18. As a prospective client interested in a specific project, I want to click a project tile and land on a detail page with that project's video, full story, and credits, so that I can study the work in depth.
19. As a visitor on a project detail page, I want a YouTube video that does not load tracking scripts until I click play, so that browsing the portfolio doesn't share my IP with Google.
20. As a visitor on a project detail page, I want breadcrumbs (EHB Filmworks / Projekte / [Project name]), so that I can navigate back to the gallery in one click.
21. As a visitor on a project detail page, I want to see related project metadata (category, client/location, date, runtime), so that I can place the project in context.
22. As a prospective client on the Preise page, I want to see three clearly differentiated package tiers (Reel, Image-Film, Cinematic) with feature lists, so that I understand what kind of project sits at what level of effort.
23. As a prospective client on the Preise page, I want each tier to show "Auf Anfrage" instead of a published price, so that I understand pricing is bespoke and I should ask for a quote.
24. As a prospective client on the Preise page, I want a process recap and an FAQ that answers non-pricing questions (Wie läuft ein Projekt ab? Musik- und Bildrechte? Reisen? Wetter?), so that my common questions are addressed without me having to ask.
25. As a visitor on the Preise page who wants to engage, I want a clear "Custom anfragen" / "Paket buchen" CTA on each tier card pointing to the contact page, so that converting from Preise to Kontakt is one click.
26. As a prospective client on the Kontakt page, I want a form that asks for first name, last name, email, optional phone, optional company, services I'm interested in (multi-select chips), budget range (single-select chips), timeline (single-select chips), and a free-text project description, so that I can describe my project at the right level of detail.
27. As a prospective client on the Kontakt page, I want chip selectors with visible selected state for services / budget / timeline, so that input is fast and tactile rather than dropdown-driven.
28. As a prospective client submitting the contact form, I want immediate visual confirmation (toast notification) that my message was sent, so that I know the action succeeded.
29. As a prospective client submitting the contact form, I want a clear promise that I'll get a reply within 24 hours and that my data won't be sold or shared, so that I trust the studio with my information.
30. As a visitor on the Kontakt page, I want to see direct contact details (email, phone) in a side panel, so that I can email or call instead of using the form if I prefer.
31. As a visitor on the Kontakt page, I want to see the three founders' faces and names alongside their roles, so that I see who I'd actually be working with.
32. As a visitor anywhere on the site, I want a footer with links to all major pages, contact details, social links, and the legal pages, so that I always have a baseline navigation available.
33. As a visitor in the footer, I want to see the studio described in a short paragraph plus a CTA, so that the footer reinforces brand identity rather than being purely utilitarian.
34. As a Swiss legal compliance reader, I want an Impressum page with the studio name, contact details, the people responsible for the content, image-rights statement, liability disclaimer, and copyright notice, so that the site complies with Schweizer Obligationenrecht.
35. As a Swiss privacy-conscious visitor, I want a Datenschutz page that explains what personal data is processed, why, by whom (named Auftragsbearbeiter list), how long it's retained, and what my rights are under revDSG/DSGVO, so that I can decide whether to engage.
36. As a Swiss privacy-conscious visitor, I want the Datenschutz page to honestly disclose every third party that touches my data (the static-host provider, the analytics tool, the form provider, and YouTube — the latter only after I click play), so that the disclosures match reality.
37. As a Swiss prospective client, I want an AGB page with the studio's terms (Geltungsbereich, Vertragsschluss, Leistungsumfang, Preise, Mitwirkung, Verzug, Nutzungsrechte, Stornierung, Haftung, Geheimhaltung, anwendbares Recht), so that I can review terms before signing.
38. As a visitor on any legal page, I want a sidebar that lets me jump between Impressum / Datenschutz / AGB, with the current page highlighted, so that navigating between legal sections doesn't require returning to the footer.
39. As a visitor on any legal page, I want a consistent typography treatment (numbered top-bordered headings, prose at a comfortable reading width), so that the legal text is actually readable.
40. As a visitor who hits a non-existent URL, I want a 404 page that matches the site's design, says clearly that the page doesn't exist, and offers a link back to the homepage, so that broken links don't dump me on a default GitHub Pages 404.
41. As a search-engine crawler indexing the site, I want every page to expose a unique `<title>`, `<meta description>`, canonical URL, and OpenGraph metadata, so that the page surfaces correctly in results and link previews.
42. As a search-engine crawler, I want a `robots.txt` and a `sitemap.xml` reachable at predictable URLs, so that I can discover and crawl the site efficiently.
43. As a visitor sharing a project page on WhatsApp / LinkedIn / Slack, I want a representative OpenGraph image to appear in the link preview, so that the shared link looks professional.
44. As a visitor on a slow connection, I want every image on the site to be served as a modern format (AVIF / WebP), at the appropriate resolution for my device, with lazy-loading below the fold, so that the page becomes usable quickly.
45. As the studio operator adding a new project to the portfolio, I want to write a single markdown file with frontmatter and push a commit, so that adding a project doesn't require touching code.
46. As the studio operator adding a new project, I want the build to fail loudly if my frontmatter is missing a required field or has a typo'd category value, so that broken data never reaches production.
47. As the studio operator updating the legal pages annually (e.g. updating the "Stand: 4. Mai 2026" date), I want to edit MDX files and push, so that legal updates don't require touching component code.
48. As the studio operator changing the team (e.g. hiring a fourth person), I want to update a single typed TS data file, so that the new person appears across the Impressum, Contact aside, and anywhere else the team is referenced.
49. As the studio operator wiring real prices in once published prices are decided, I want the pricing data file to accept either "Auf Anfrage" or a number, so that swapping in real prices is a one-line edit per tier.
50. As the studio operator deploying changes, I want a `git push` to trigger a build and deploy via GitHub Actions, so that shipping is automatic and I never SFTP files.
51. As the studio operator monitoring traffic, I want a privacy-friendly analytics dashboard (Cloudflare Web Analytics) showing pageviews, referrers, and top pages, so that I can see what's working without setting cookies on visitors.
52. As the studio operator receiving a contact form submission, I want it to arrive as an email at the studio inbox with all form fields included, so that I can reply directly without logging into a third-party dashboard.
53. As the studio operator preparing for international expansion later, I want the routing and content layout to be ready for an English locale (e.g. `/en/projekte`) without a rewrite, so that adding a second language later is content work, not architecture work.
54. As the studio operator who later commissions a domain mailbox, I want swapping the displayed email everywhere from `ehbfilmworks@gmail.com` to e.g. `info@ehb-filmworks.ch` to be a one-line edit, so that the swap is trivial and non-error-prone.
55. As the studio operator after registering as a GmbH later, I want the displayed entity name to swap from "EHB Filmworks" to "EHB Filmworks GmbH" via a single config change, with the Impressum's HR/UID/MwSt fields becoming visible at the same time, so that incorporation triggers a clean documentation update.
56. As the studio operator who later wants to publish actual project case studies on detail pages, I want each project's markdown body to be the place I add that content, so that the upgrade from minimal-detail to full case study is incremental.
57. As a visitor experiencing the orange marquee strip below the hero, I want it to scroll continuously without jank, so that the brand idiom comes across as polished.
58. As a visitor hovering the capability grid, I want non-hovered cards to blur and dim while the hovered card lights up, so that the interaction feels intentional and the grid demonstrates the studio's eye for motion.

## Implementation Decisions

**Stack and toolchain**

- Astro 5 with the React integration for interactive islands; TypeScript throughout.
- Vanilla CSS, kept as two global stylesheets (design tokens file + site styles) ported as-is from the design bundle. Astro inlines and minifies in the production build.
- Sharp-backed `<Image>` / `<Picture>` from `astro:assets` for all responsive image variants. Source JPEGs are pre-shrunk once before being committed (cap on long edge ~2400px, q=82) so the repo doesn't carry multi-megabyte originals.
- Prettier with the official Astro plugin for formatting. No ESLint — Astro's `astro check` covers what an ESLint config would catch on a site this small.
- `@astrojs/sitemap` integration; hand-written `robots.txt` in the public assets folder.

**Hosting and deploy**

- GitHub Pages on the custom apex domain `ehb-filmworks.ch`. CNAME shipped as a public asset.
- Astro `base` is the site root (no path prefix).
- Fresh repository created in this working directory; existing site stays live until DNS / Pages source is flipped to the new repo.
- Deploy via the official `actions/deploy-pages` workflow on push to `main`.

**Routing and pages**

- Real file-based routing, German URL slugs: `/`, `/projekte`, `/projekte/<slug>/`, `/preise`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`, plus a `404` route.
- Architecture leaves room for a future `/en/...` mirror via Astro's i18n routing primitives, but no English content ships in v1.

**Content model**

- Hybrid: Astro Content Collections for content that grows or changes via copy edits, typed TS data files for structured content that changes shape rarely.
- A `projects` collection holds one markdown entry per portfolio project. Frontmatter is Zod-validated (title, slug, date, category enum, runtime, hero image, optional YouTube ID, optional credits). Body is markdown rendered into the detail page.
- A `legal` MDX collection holds the three legal pages (Impressum, Datenschutz, AGB). MDX so prose-heavy content reads naturally as markdown but can include the small amount of structured markup (definition lists, lists with markers).
- A pricing TS data module holds the three tier objects (with a price field that may be the literal string "Auf Anfrage" or a CHF number, anticipating a future swap to published prices), plus the trimmed FAQ list.
- A team TS data module holds the three founders (name, role, portrait reference). Used by the Impressum and the Contact-page side panel.

**Modules (deep-first)**

- Project content collection — the single typed entry point through which every page that mentions or lists projects reads project data. Schema enforced at build time.
- Pricing data + tier renderer component — encapsulates the "Auf Anfrage vs. CHF number" rendering, feature/muted list rendering, feature-tier highlight.
- `<SEO>` component — single source of truth for `<title>`, meta description, canonical, OpenGraph, Twitter card, JSON-LD organisation schema. Used on every page.
- `<ShowreelHero>` component — encapsulates the muted-autoplay-background video, the small-screen image fallback, the `prefers-reduced-motion` fallback, the modal-with-sound interaction, and the modal accessibility (Esc to close, focus trap, click-out-to-close).
- `<LiteYouTube>` component — wraps the lite-youtube web component on project detail pages, handles the thumbnail, alt text, and consolidates the privacy posture.
- `<ContactForm>` React island — chips state for services / budget / timeline, submission via fetch to Tally, success/error toast, basic client-side required-field handling.
- `<ProjectsGallery>` React island — receives the project list at build time (resolved from the content collection), holds the filter state and renders the grid.
- `<Nav>` component — sticky positioning, scroll-aware dark/light state on the home route, active-route highlight on every route, mobile-collapsed link list.
- Presentational components: `<Footer>`, `<PageHead>` layout, `<TeamStrip>`, `<ProcessGrid>`, `<FinalCta>`, `<MarqueeStrip>`, `<StatsRow>`, `<CapabilityGrid>`, `<FeaturedProject>`. These are stable visual shells driven by props.

**Integrations**

- Tally.so (EU-hosted) for the contact form. Submission posts to the form's Tally endpoint; submissions are forwarded to the studio inbox by email. Adds Tally to the Datenschutz Auftragsbearbeiter list.
- Cloudflare Web Analytics in JS-beacon mode (no DNS migration required). Cookie-free, no IP storage.
- YouTube embeds for project videos via the `lite-youtube` web component. Click-to-load: no Google traffic on page load, only on user click. Adds Google Ireland Ltd. to the Datenschutz Auftragsbearbeiter list with a "data only on click" disclosure.
- Self-hosted MP4 (`/showreel.mp4`) for the hero background. The source 23 MB MP4 is re-encoded once with ffmpeg to H.264 1080p, target ~6 MB, with `-movflags +faststart` so playback can begin before the file fully downloads.

**Content edits applied to the prototype copy**

- Legal entity name: "EHB Filmworks GmbH" replaced with "EHB Filmworks" everywhere (Impressum, Datenschutz, AGB, Footer copyright, Nav alt text).
- Impressum: Handelsregister, UID, MwSt rows removed; address removed; phone updated to the studio's actual number; email updated to the studio inbox.
- Datenschutz: §1 verantwortliche Stelle re-written without GmbH and without address; §4 Cookies re-written to name Cloudflare Web Analytics (instead of Plausible) and to add the YouTube click-to-load disclosure; §8 Auftragsbearbeiter re-written to name GitHub (hosting), Cloudflare (analytics), Tally (form processing), and Google Ireland Ltd. for YouTube (with the click-only note); Infomaniak/Frame.io/Bexio entries removed.
- AGB: drop the "GmbH" suffix on EHB references; remove address.
- Footer: drop the newsletter form input + button, replace with the brand paragraph and a CTA pointing at /kontakt; drop the address row in the contact column; update phone; "Projekte (12)" gloss → "Projekte (3)".
- Landing page stats row: "42+ Produktionen / 8K Drohnen-Footage / 3—5 Tage Lieferzeit / 100% In-house Edit" replaced with "3 Projekte / 4K Cine / 2024 gegründet / 100% In-house Edit".
- Pricing page: drop the project/retainer billing toggle; show "Auf Anfrage" in every price slot; drop the Addons section entirely; trim the FAQ to non-pricing questions only.
- Contact page side panel: drop the Standort and Öffnungszeiten info-blocks and the Map placeholder; add a 3-up team strip (Lorin Büchel, Sebastian Ebner, Silas Hanyecz) with portraits, names, and roles in place of the Map block.

**Project portfolio at launch**

- Hotel Palace Gstaad: real, with YouTube video ID and full body copy supplied.
- Golfplatz Meggen: real, with YouTube video ID and full body copy supplied (including model credit "Max Mariotto").
- Immobilienbüro: placeholder content. Hero image stand-in (`efficiency.jpg` from the prototype assets), placeholder body copy, no YouTube embed. Marked with a TODO in the markdown source for the studio to fill in.

**Privacy and accessibility**

- No cookie banner. No analytics cookies. No video tracking on page load. Compliant with revDSG and the DSGVO without consent UI.
- Images carry meaningful alt text from the project frontmatter; presentational images use empty alt.
- Hero respects `prefers-reduced-motion`; chip / button focus states are visible; form labels are associated with inputs; landmark roles are used for the navigation, main, and footer.

## Testing Decisions

**What makes a good test for this site:** test external behaviour, not implementation. For a static marketing site, "external behaviour" is mostly visual rendering (best verified by opening the page in a browser) and content shape (best verified by the build's type-checker). Unit tests are appropriate only where the unit is a pure data function whose contract can change independently of the surrounding presentation.

**Testing scope for v1**

- Project content collection schema validation: verified for free at every build by Astro's Zod validation. A typo in a category enum or a missing required field fails the build before deploy. No explicit test code needed.
- Project gallery filter logic: a small Vitest unit test on the pure filter function (given a list and a filter tag, returns the filtered list). Verifies the filter handles "all", a known tag, and an empty result without crashing.
- Everything else: no automated tests. Visual fidelity is verified by opening the site locally during build-out and after each meaningful change. Manual smoke test before flipping the Pages source covers the rest.

**Prior art for the tests**

- None in this repo (greenfield). Vitest is the testing tool of choice because Astro's docs recommend it as the default and it integrates cleanly with the Astro project's existing TS configuration.

## Out of Scope

- An English (EN) version of the site. The architecture leaves room for it, but no English content ships in v1.
- A blog. Content infrastructure (Astro Content Collections) is set up such that adding a `posts` collection later is mechanical, but no blog routes or templates exist in v1.
- A CMS UI for non-developer editing. Content edits in v1 happen by writing markdown / TS files and pushing commits. Layering Decap CMS or similar on top of the existing collections is a follow-up.
- A studio / about page with extended team bios. The Contact-page team strip is the only team surface in v1.
- A standalone showreel page or fullscreen presentation mode. The showreel plays in the homepage hero (muted bg) and in a modal (with sound).
- A newsletter system. The footer subscribe form is being removed entirely.
- A retainer pricing model. The Pro Projekt / Retainer toggle from the prototype is being removed; all pricing is project-based "Auf Anfrage".
- An add-on price list. The prototype's eight-row addon table is being removed.
- A real-time form provider (e.g. SMS-on-submit, Slack webhook). Tally email forwarding to the studio inbox is the only delivery mechanism in v1.
- View Transitions / SPA-mode navigation. Astro defaults to MPA navigation; this is fine for a brochure site and avoids the additional complexity for v1.
- A PWA / installable manifest. Skipped until there's a clear use case.
- Project detail-page galleries beyond the hero photo and the embedded video. A single hero image and a single embed is the v1 detail-page scope; additional stills or galleries are a follow-up once project content matures.
- An AVV-grade legal review of the published Datenschutz / AGB. The text in v1 is informed by the prototype copy and edited to match the actual stack, but should be reviewed by a Swiss data-protection / commercial lawyer before being relied on in a dispute.
- Server-side or build-time form processing. The contact form is fully client-side (POST to Tally).

## Further Notes

- **Issue tracker not configured.** This PRD lives at `docs/prd-initial-build.md` rather than as an issue because the `setup-matt-pocock-skills` skill has not been run for this project, the GitHub `gh` CLI is not installed locally, and the GitHub repository for the new site does not yet exist. When the repo is created and `gh` is installed (`brew install gh && gh auth login`), this file should be opened as an issue with the `needs-triage` label so it enters normal triage flow.
- **Domain mailbox follow-up.** The studio uses a `gmail.com` address in v1 (`ehbfilmworks@gmail.com`). This visibly contradicts the Datenschutz claim that all data processors have AVV agreements (Google Workspace would, plain Gmail does not). When a domain mailbox is set up (e.g. `info@ehb-filmworks.ch`), swap the email everywhere via a single config edit and revisit the Datenschutz wording.
- **Deferred decisions for incorporation.** The Impressum is published without GmbH suffix or HR/UID/MwSt rows because the studio is not yet incorporated. When incorporation completes, the Impressum, Datenschutz §1, AGB, and Footer copyright need a coordinated update.
- **Showreel re-encoding.** The 23 MB source MP4 from the studio is re-encoded once via ffmpeg to a ~6 MB H.264 1080p web target. The original is not committed to the repo; only the re-encoded file is shipped under the public assets folder. If the studio updates the showreel later, the same ffmpeg command should be run on the new source.
- **Featured-project rotation.** The landing page hard-codes Hotel Palace Gstaad as the Featured project today. Once the portfolio grows beyond 3 projects, consider promoting the choice of Featured project to a frontmatter flag (`featured: true`) on the project collection — but this is unnecessary while there's only one obvious candidate.
- **YouTube vs. Vimeo.** The footer mentions `vimeo.com/ehbfilmworks` (carried over from the prototype copy) but the studio's actual videos are on YouTube. Either remove the Vimeo socials link or set up a Vimeo presence; not blocking.
- **Cloudflare Web Analytics caveat.** Cloudflare's beacon-mode JS analytics works without putting DNS at Cloudflare, but a small fraction of ad blockers may block the beacon. For a marketing site this is acceptable and arguably desirable (visitors who block beacons are unlikely to want to be measured anyway).
