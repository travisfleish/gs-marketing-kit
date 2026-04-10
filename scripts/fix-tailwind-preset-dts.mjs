import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * tsup emits `import { Config } from 'tailwindcss'` in tailwind-preset.d.mts, which
 * resolves to the kit repo’s Tailwind (v4) when the package is linked via file:..
 * Apps using Tailwind v3 then see UserConfig vs Config mismatches on `presets`.
 * Ship a declaration that does not import tailwindcss so only the app’s types apply.
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dtsPath = path.join(__dirname, "..", "dist", "tailwind-preset.d.mts");

const contents = `/**
 * Genius Sports brand tokens preset for Tailwind \`config.presets\`.
 * Declared without importing \`tailwindcss\` so linked installs don’t mix the kit’s
 * Tailwind types with your app’s (v3/v4 \`Config\` / \`UserConfig\` mismatch on \`darkMode\`, etc.).
 * \`any\` keeps \`presets: [preset]\` assignable under strict \`Config\` typing.
 */
declare const preset: any;

export { preset as default };
`;

fs.writeFileSync(dtsPath, contents, "utf8");
