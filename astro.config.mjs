// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/code": "/posts",
    "/guestbook": "/contact",
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
