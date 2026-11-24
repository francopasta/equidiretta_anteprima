import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import { rehypeBasePaths } from "./src/lib/rehype-base-paths.mjs";

// https://astro.build/config
const base = process.env.PAGES_BASE_PATH || "/";
export default defineConfig({
  site: process.env.PAGES_ORIGIN || "https://equidiretta.tv/",
  base,
  markdown: { rehypePlugins: [[rehypeBasePaths, { base }]] },
  build: {
    format: "directory",
  },
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    alpinejs({ entrypoint: "/src/entrypoint" }),
  ],
  prefetch: true,
  output: "static",
});
