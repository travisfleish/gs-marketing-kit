import { defineConfig } from "tsup";
import { resolve } from "path";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    fonts: "src/fonts.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
    cms: "src/utils/cms.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  bundle: true,
  clean: true,
  esbuildOptions(options) {
    options.alias = {
      "~": resolve(__dirname, "src"),
    };
    options.loader = {
      ...options.loader,
      ".scss": "empty",
    };
  },
  external: [
    "react",
    "react-dom",
    "next",
    "tailwindcss",
    "framer-motion",
    "sass",
  ],
  injectStyle: false,
});
