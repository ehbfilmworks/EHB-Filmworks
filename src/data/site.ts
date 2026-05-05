// Single source of truth for load-bearing facts about the studio.
// Swap email, phone, and entity name here when they change.

export const siteConfig = {
  url: "https://ehb-filmworks.ch",
  entity: "EHB Filmworks",
  email: "ehbfilmworks@gmail.com",
  phone: "+41 77 527 52 46",
  phoneHref: "tel:+41775275246",
  legalDate: "4. Mai 2026",
  copyrightYear: 2026,
  socials: {
    instagram: "https://instagram.com/ehb_filmworks",
    youtube: "https://www.youtube.com/@ehbfilmworks",
  },
} as const;

export type SiteConfig = typeof siteConfig;
