import type { Config } from "tailwindcss";
import brandKitPreset from "@genius-sports/gs-brand-kit/tailwind-preset";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@genius-sports/gs-brand-kit/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [brandKitPreset],
};

export default config;
