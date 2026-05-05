export type Price = "Auf Anfrage" | number;

export interface Tier {
  name: string;
  title: string;
  tag: string;
  price: Price;
  suffix: string;
  features: string[];
  muted?: string[];
  feature?: boolean;
  ctaLabel: string;
}

export const tiers: Tier[] = [
  {
    name: "Reel",
    title: "Social Cut",
    tag: "Für schnelle Inhalte auf Instagram, TikTok und LinkedIn — kraftvoll, kurz, im Hochformat.",
    price: "Auf Anfrage",
    suffix: "Festpreis nach Briefing",
    features: [
      "Halbtages-Dreh am Standort",
      "1 × Reel (15–30 Sek.)",
      "2 × Cutdowns für Stories",
      "Schnitt, Color, Sound",
      "Eine Korrekturschleife",
    ],
    muted: ["FPV-Drohnenshots", "Storyboard & Pre-Production"],
    ctaLabel: "Paket buchen",
  },
  {
    name: "Image",
    title: "Image-Film",
    tag: "Der EHB-Klassiker. Ein cinematischer 1–3-Minuten-Film mit Drohne, Kamera und Detailaufnahmen.",
    price: "Auf Anfrage",
    suffix: "Festpreis · alle Rechte inklusive",
    features: [
      "Briefing & Drehbuch",
      "Storyboard und Shotlist",
      "1–2 Drehtage (Kamera + FPV)",
      "Image-Film 1–3 Minuten",
      "3 × Social-Cutdowns",
      "Color Grade & Sound Design",
      "Zwei Korrekturschleifen",
    ],
    feature: true,
    ctaLabel: "Paket buchen",
  },
  {
    name: "Cinema",
    title: "Cinematic Story",
    tag: "Mehrtägige Produktion für Hotels, Marken und Events, die ein dokumentarisches Stück Kino brauchen.",
    price: "Auf Anfrage",
    suffix: "Angebot nach Briefing",
    features: [
      "Strategie- & Konzeptphase",
      "3+ Drehtage, mehrere Locations",
      "Cine-Kamera, FPV, Slider, Tonmann",
      "Image-Film bis 5 Minuten",
      "Director's Cut + Trailer",
      "8 × Social-Cutdowns",
      "Premium Color & Sound Mix",
      "Unbegrenzte Korrekturen",
    ],
    ctaLabel: "Custom anfragen",
  },
];

export const faq: Array<[string, string]> = [
  [
    "Wie läuft ein Projekt typischerweise ab?",
    "Nach einem 30-minütigen Briefing-Call schicken wir innerhalb von 48 Stunden ein verbindliches Angebot mit Festpreis, Timeline und Drehbuchskizze. Nach Freigabe folgt Pre-Production (1–2 Wochen), Dreh (1–3 Tage) und Post-Production (2–3 Wochen). Sie haben einen festen Ansprechpartner über den gesamten Prozess.",
  ],
  [
    "Was ist mit Musik- und Bildrechten?",
    "Alle unsere Pakete enthalten Musiklizenzen (Artlist Pro, Musicbed) und kommerzielle Nutzungsrechte für die fertige Produktion. Sie können den Film zeitlich unbegrenzt auf Ihren eigenen Kanälen einsetzen — Schweiz und international.",
  ],
  [
    "Reisen Sie auch in andere Kantone?",
    "Selbstverständlich. Innerhalb der Schweiz fahren wir bis 100 km kostenlos. Darüber hinaus rechnen wir CHF 1.20 pro Kilometer und ggf. eine Übernachtungspauschale ab. Wir haben bereits Projekte in Gstaad und im Mittelland realisiert.",
  ],
  [
    "Was, wenn das Wetter nicht mitspielt?",
    "Bei Outdoor-Drehs planen wir immer ein Ersatzdatum innerhalb von zwei Wochen ein. Pre-Production und Equipment-Rental laufen wetterunabhängig — Sie zahlen also nichts doppelt.",
  ],
];
