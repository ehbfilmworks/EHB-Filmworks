import { useState } from "react";

export interface GalleryProject {
  slug: string;
  title: string;
  category: "cinematic" | "image" | "drone" | "reel";
  categoryLabel: string;
  runtime: string;
  thumb: { src: string; width: number; height: number };
  excerpt: string;
  date: string; // formatted dd.mm.yyyy
  featured: boolean;
  large: boolean;
}

const tabs: Array<[string, string]> = [
  ["all", "Alle"],
  ["cinematic", "Cinematic"],
  ["image", "Image-Film"],
  ["drone", "FPV-Drone"],
  ["reel", "Reels"],
];

export function filterProjects(
  projects: GalleryProject[],
  filter: string
): GalleryProject[] {
  if (filter === "all") return projects;
  return projects.filter((p) => p.category === filter);
}

interface Props {
  projects: GalleryProject[];
}

export default function ProjectsGallery({ projects }: Props) {
  const [filter, setFilter] = useState("all");
  const filtered = filterProjects(projects, filter);

  return (
    <>
      <div className="proj-filters">
        <span className="label">Filter</span>
        {tabs.map(([k, l]) => (
          <button
            key={k}
            type="button"
            className={filter === k ? "is-on" : ""}
            onClick={() => setFilter(k)}
          >
            {l}
          </button>
        ))}
        <span className="count">{filtered.length} Projekte</span>
      </div>

      <div className="proj-grid">
        {filtered.map((p) => (
          <a
            key={p.slug}
            className={"proj-tile" + (p.large ? " large" : "")}
            href={`/projekte/${p.slug}/`}
          >
            <div className="thumb">
              <img
                src={p.thumb.src}
                alt={p.title}
                width={p.thumb.width}
                height={p.thumb.height}
                loading="lazy"
              />
              {p.featured && <span className="badge">Featured</span>}
              <span className="runtime">
                <i className="fa-solid fa-clock" aria-hidden="true"></i>{" "}
                {p.runtime}
              </span>
              <span className="play-mini" aria-hidden="true">
                <i className="fa-solid fa-play"></i>
              </span>
            </div>
            <div className="meta-row">
              <span className="cat">{p.categoryLabel}</span>
              <span>{p.date}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </a>
        ))}
      </div>
    </>
  );
}
