import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ehb-filmworks.ch",
  integrations: [react(), mdx(), sitemap()],
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
