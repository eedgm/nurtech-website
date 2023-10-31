import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: nodejs({
    mode: "middleware",
  }),
  integrations: [tailwind(), alpinejs(), lottie(), react()],
});
