import { defineConfig, type Options } from "tsup";
import { resolve } from "path";

const shared: Options = {
  format: ["esm"],
  dts: true,
  splitting: false,
  bundle: true,
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
};

export default defineConfig([
  {
    ...shared,
    entry: { index: "src/index.ts" },
    clean: true,
    banner: {
      js: '"use client";',
    },
  },
  {
    ...shared,
    entry: {
      fonts: "src/fonts.ts",
      "tailwind-preset": "src/tailwind-preset.ts",
      cms: "src/utils/cms.ts",
    },
    clean: false,
  },
]);
