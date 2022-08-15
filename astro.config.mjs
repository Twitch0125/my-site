import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import Uno from "astro-uno";
import presetIcons from "@unocss/preset-icons";
// https://astro.build/config
export default defineConfig({
  site: "https://twitch0125.github.io",
  base: "/my-site",
  integrations: [
    mdx(),
    tailwind(),
    Uno({
      presets: [
        presetIcons({
          cdn: "https://esm.sh",
        }),
      ],
    }),
  ],
});
