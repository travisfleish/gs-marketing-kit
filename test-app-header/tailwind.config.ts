import type { Config } from "tailwindcss";
import brandKitPreset from "@genius-sports/gs-brand-kit/tailwind-preset";

// Preset typings (Partial<Config> from the kit) diverge from Tailwind's Config
// preset slot (UserConfig vs Config darkMode). Runtime config is valid; assert for tsc.
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@genius-sports/gs-brand-kit/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [brandKitPreset],
};

export default config as Config;
