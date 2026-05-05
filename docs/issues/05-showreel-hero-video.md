# Showreel hero video — autoplay-bg + sound-on modal

Labels (when published): `needs-triage`, `afk`

## Parent

`docs/prd-initial-build.md`

## What to build

Re-encode the source MP4 (`/Users/sebastian.ebner/Downloads/homevideo.mp4`, 23 MB) once with ffmpeg to a web-target file at `public/showreel.mp4` (~6 MB H.264 1080p, AAC, `+faststart`). Build a `<ShowreelHero>` component that swaps the still-image hero from #04 for a muted-autoplay-loop background `<video>` on screens ≥ 800px, falls back to the still image on smaller screens or when `prefers-reduced-motion: reduce` is set, and adds a "Mit Ton ansehen" modal that opens an unmuted-with-controls fullscreen player.

## Acceptance criteria

- [ ] `homevideo.mp4` re-encoded once via `ffmpeg -i homevideo.mp4 -vf scale=-2:1080 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 96k -movflags +faststart public/showreel.mp4` (or equivalent) with output ≤ 8 MB
- [ ] The re-encoded `public/showreel.mp4` is committed; the source 23 MB MP4 is not committed
- [ ] `<ShowreelHero>` replaces the still-image `<img>` in the hero on screens ≥ 800px with `<video autoplay muted loop playsinline preload="metadata" poster="cinematic.jpg" src="/showreel.mp4">`
- [ ] Below 800px viewport width, the still image is shown instead and the video is not requested (use a `<picture>`-style swap or an Astro/CSS check, not just CSS `display: none` on a still-loading video)
- [ ] When `prefers-reduced-motion: reduce` is set, the still image is shown regardless of viewport size
- [ ] The `heroZoom` CSS animation is removed (the video has its own motion)
- [ ] The dark gradient overlay on `.hero-media::after` continues to apply over the video so hero text stays legible
- [ ] Hero CTA button label changes from "Showreel ansehen" to "Mit Ton ansehen"; clicking it opens a modal
- [ ] Modal shows the same video unmuted with `controls`, dim backdrop (`rgba(0,0,0,.85)` or similar), X close button top-right
- [ ] Modal closes on Esc keypress, on backdrop click (but not on player click), and on X button click
- [ ] Modal traps focus while open, returns focus to the trigger button on close
- [ ] Modal video pauses on close (don't keep playing audio in the background)
- [ ] Component implemented as a React island (needs effects + state) with `client:idle` directive

## Blocked by

- #04 (landing page)
