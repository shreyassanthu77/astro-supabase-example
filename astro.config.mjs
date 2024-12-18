import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), react()],
});
