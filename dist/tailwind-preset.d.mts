/**
 * Genius Sports brand tokens preset for Tailwind `config.presets`.
 * Declared without importing `tailwindcss` so linked installs don’t mix the kit’s
 * Tailwind types with your app’s (v3/v4 `Config` / `UserConfig` mismatch on `darkMode`, etc.).
 * `any` keeps `presets: [preset]` assignable under strict `Config` typing.
 */
declare const preset: any;

export { preset as default };
