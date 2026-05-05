import type { ImageMetadata } from "astro";
import lorin from "../assets/lorin.png";
import sebi from "../assets/sebi.png";
import silas from "../assets/silas.png";

export interface TeamMember {
  name: string;
  role: string;
  portrait: ImageMetadata;
}

export const team: TeamMember[] = [
  { name: "Lorin Büchel", role: "Geschäftsführer", portrait: lorin },
  { name: "Silas Hanyecz", role: "Technische Leitung", portrait: silas },
  { name: "Sebastian Ebner", role: "Kreative Leitung", portrait: sebi },
];
