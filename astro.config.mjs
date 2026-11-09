// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://arisris.com",
  integrations: [sitemap()],
  redirects: {
    "/code": "/posts",
    "/contact": "/about",
    "/guestbook": "/about",
  },
  adapter: cloudflare({
    imageService: "compile",
    sessionKVBindingName: "SESSION",
  }),
  devToolbar: {
    enabled: true,
    placement: "bottom-right",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
