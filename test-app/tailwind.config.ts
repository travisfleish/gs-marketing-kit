import type { Config } from "tailwindcss";
import brandKitPreset from "@genius-sports/gs-brand-kit/tailwind-preset";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [brandKitPreset as Config],
};

export default config;
