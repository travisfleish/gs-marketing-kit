# `@genius-sports/gs-brand-kit` (gs-marketing-kit)

**Purpose of this document:** Use this README as the **primary project context** for assistants and engineers working on **`@genius-sports/gs-brand-kit`** (this repository’s main deliverable: the brand kit package). It describes provenance, published surfaces, Next.js integration, CMS behavior, components, tokens, and build details.

**Not in scope here:** The [`test-app-header/`](./test-app-header/) folder is a tiny optional sandbox to smoke-test header/footer. It has its own short README with run instructions only—do not treat it as documentation for the package. Real consumer apps follow [`CURSOR_INSTRUCTIONS.md`](./CURSOR_INSTRUCTIONS.md) and this file.

---

## Table of contents

1. [Overview](#overview)
2. [Repository layout](#repository-layout)
3. [npm package](#npm-package)
4. [Installation & dependencies](#installation--dependencies)
5. [Environment variables](#environment-variables)
6. [Integration with Next.js](#integration-with-nextjs)
7. [Architecture: shell, context, and CMS](#architecture-shell-context-and-cms)
8. [Package entry points (detailed)](#package-entry-points-detailed)
9. [Components exported from the main entry](#components-exported-from-the-main-entry)
10. [JavaScript design tokens](#javascript-design-tokens)
11. [CMS client API (`@genius-sports/gs-brand-kit/cms`)](#cms-client-api-genius-sportsgs-brand-kitcms)
12. [Tailwind preset](#tailwind-preset)
13. [Fonts (`@genius-sports/gs-brand-kit/fonts`)](#fonts-genius-sportsgs-brand-kitfonts)
14. [Global styles (SCSS)](#global-styles-scss)
15. [Build & development (maintainers)](#build--development-maintainers)
16. [Bundling & publishing notes](#bundling--publishing-notes)
17. [Source code not in the public API](#source-code-not-in-the-public-api)
18. [Local test app](#local-test-app)
19. [Related documentation](#related-documentation)
20. [License / access](#license--access)

---

## Overview

`@genius-sports/gs-brand-kit` is a **comprehensive Genius Sports brand kit** sourced from the **same React / SCSS component layer as the public WordPress marketing site**. The goal is a single implementation of navigation, footer, tokens, typography, and reusable UI so **Next.js SPAs and other apps** can match the main site without copying large amounts of code.

Deliverables include:

- **Design tokens** — Colors, typography, spacing, breakpoints (Tailwind preset + typed JS tokens).
- **Styles** — SCSS foundations and a path to full globals for deep styling parity.
- **React components** — Global shell (header, footer, etc.), elements, layouts, and page templates aligned with the WP front end.
- **WordPress JSON client** — Fetches options, pages, redirects, and other data exposed by the site’s custom REST routes (`together/*`).
- **Fonts** — `next/font/local` wrappers for heading (ES Klarheit Kurrent) and body (Red Hat Text).

Published build output lives in **`dist/`**. **`src/`** is published alongside it so consumers can import SCSS and so Tailwind `content` globs can scan component files (see below).

---

## Repository layout

| Path | Role |
| ---- | ---- |
| `src/index.ts` | Main package entry: re-exports components, tokens, `GlobalContext`. |
| `src/components/` | React UI; subfolders include `global/`, `elements/`, `layouts/`, `templates/`, `flexible/`, `article/`, etc. |
| `src/styles/` | SCSS: typography, globals, partials. |
| `src/tokens/` | Token modules (some used by preset and docs; main entry re-exports a subset via `tokens/tokens.ts`). |
| `src/utils/cms.ts` | Built as the **`cms`** entry point. |
| `src/fonts.ts` | Built as the **`fonts`** entry point. |
| `src/tailwind-preset.ts` | Brand Tailwind preset. |
| `dist/` | Generated ESM + `.d.mts` (do not edit by hand). |
| `test-app-header/` | Minimal Next.js app using `file:..` to test header/footer against live CMS. |
| [`CURSOR_INSTRUCTIONS.md`](./CURSOR_INSTRUCTIONS.md) | Step-by-step scaffold for a new branded Next.js 14 app. |

---

## npm package

- **Name:** `@genius-sports/gs-brand-kit`
- **Runtime entry:** `./dist/index.mjs` (types: `./dist/index.d.mts`)

`package.json` **`exports`** define the supported import paths:

| Subpath | Use |
| ------- | --- |
| `@genius-sports/gs-brand-kit` | Components, `GlobalContext`, tokens. |
| `@genius-sports/gs-brand-kit/fonts` | `gsHeadingFont`, `gsBodyFont` (`next/font/local`). |
| `@genius-sports/gs-brand-kit/tailwind-preset` | Default Tailwind preset (brand colors, fonts, breakpoints, container). |
| `@genius-sports/gs-brand-kit/cms` | Default export: `cms()` factory with WordPress helpers. |
| `@genius-sports/gs-brand-kit/src/styles/globals.scss` | SCSS entry (raw file in `src/`). |

---

## Installation & dependencies

Install from your internal registry or via `file:..` when developing against this monorepo.

```bash
npm install @genius-sports/gs-brand-kit
```

**Peers** (must be provided by the app): `next` ≥ 14, `react` / `react-dom` ≥ 18, `tailwindcss` ≥ 3.4, `framer-motion` ≥ 11, `@reach/rect` ^0.18.0.

Consuming apps typically also need **`sass`** for components that import SCSS modules. The [scaffold guide](./CURSOR_INSTRUCTIONS.md) uses `npm install … --legacy-peer-deps` when peer resolution is strict; this repo’s [`.npmrc`](./.npmrc) sets `legacy-peer-deps=true` for local installs.

**Bundled dependencies** (ship with the package) include utilities such as `clsx`, `lodash`, `swiper`, `swr`, `react-hook-form`, `next-seo`, and others—see `package.json` **`dependencies`**.

---

## Environment variables

Used at build time and runtime (especially the CMS client):

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_WORDPRESS_BASE_URL` | Base URL of the WordPress instance (e.g. `https://cms.geniussports.com`). Required for `fetchFromWp` / `cms()`. |
| `NEXT_PUBLIC_SITE_URL` | Public marketing site origin (canonical URLs, SEO, links). Set to match production or staging as appropriate. |

The CMS helper reads `NEXT_PUBLIC_WORDPRESS_BASE_URL` on the server; in the browser it can also fall back to `window.__NEXT_PUBLIC_WORDPRESS_BASE_URL__` if your app injects it.

---

## Integration with Next.js

End-to-end steps (Create Next App, `transpilePackages`, Tailwind `content` paths, `globals.css`, root layout fonts, `Providers`, `SiteShell`, `cms().options()`) are spelled out in **[`CURSOR_INSTRUCTIONS.md`](./CURSOR_INSTRUCTIONS.md)**. Treat that file as the **canonical integration checklist**.

**Minimum consumer configuration:**

- **`next.config`:** `transpilePackages: ["@genius-sports/gs-brand-kit"]` so Next compiles the dependency.
- **`images.remotePatterns`:** Allow `cms.geniussports.com`, UAT CMS, and CDN hosts used for media (see scaffold for host list).
- **Tailwind:** `presets: [brandKitPreset]` and `content` including `./node_modules/@genius-sports/gs-brand-kit/src/**/*.{js,ts,jsx,tsx}` so utility classes used inside the kit are generated.
- **Root layout:** Apply `gsHeadingFont` and `gsBodyFont` CSS variables and `className="font-body"` on `<body>`.

---

## Architecture: shell, context, and CMS

- **`cms().options()`** (server) loads WordPress **global options** (header menu, footer columns, social links, CTAs, etc.). Call it from a **Server Component** or route handler.
- **`Providers`** (client) holds React state: `[{ history, options }, setContext]` and passes it through **`GlobalContext`**.
- **`Header`** reads navigation and related data from **`GlobalContext`**, not from props—so you do not pass menu items into `Header` manually after options are loaded.
- **`Footer`** is typically fed from `context.options.footer` (sometimes mapped in a small shell component) because footer field shapes include nested groups like `global_cta` / `global_featured_links`.

Wrong:

```tsx
// Do not pass raw WP options as if it were the full context tuple shape incorrectly
<GlobalContext.Provider value={options}>
```

Correct pattern (conceptually):

```tsx
const [context, setContext] = useState({ history: [], options });
<GlobalContext.Provider value={[context, setContext]}>
```

For static generation: calling `cms()` during build will hit the network; use **`export const dynamic = "force-dynamic"`** (or equivalent) on routes that must always reflect live CMS data, as in [`test-app-header/app/page.tsx`](./test-app-header/app/page.tsx).

---

## Package entry points (detailed)

### Main entry (`@genius-sports/gs-brand-kit`)

Re-exports from:

- `./components/elements`
- `./components/global`
- `./components/layouts`
- `./components/templates`
- `./tokens` (see [JavaScript design tokens](#javascript-design-tokens))
- `./utils/context` → **`GlobalContext`**

**Not** currently re-exported from the main entry (see [Source code not in the public API](#source-code-not-in-the-public-api)): `flexible/*`, generic `utils/*`, `hooks/*`, `types/*`—some of these are commented in [`src/index.ts`](./src/index.ts).

### `cms` entry (`@genius-sports/gs-brand-kit/cms`)

Default export: a **`cms()`** function returning an object of async methods. Implemented in [`src/utils/cms.ts`](./src/utils/cms.ts).

### `fonts` entry (`@genius-sports/gs-brand-kit/fonts`)

Exports **`gsHeadingFont`** and **`gsBodyFont`** from [`src/fonts.ts`](./src/fonts.ts) (paths to `src/assets/fonts/*.woff2`).

### `tailwind-preset` entry (`@genius-sports/gs-brand-kit/tailwind-preset`)

Default export: a **partial** Tailwind `Config` with `theme.screens`, `theme.extend.colors`, `fontFamily`, etc.

---

## Components exported from the main entry

Imports:

```ts
import { Header, Footer, GlobalContext, Button, … } from "@genius-sports/gs-brand-kit";
```

### Global / shell ([`src/components/global/index.ts`](./src/components/global/index.ts))

| Export | Notes |
| ------ | ----- |
| `Header` | Main site header; uses `GlobalContext` for menu data. |
| `Footer` | Multi-column footer; props often sourced from WP options. |
| `Banner` | Scheduled / toast-style banner when CMS fields enable it. |
| `MobileNav` | Mobile navigation shell. |
| `Logo` | Brand logo. |
| `Seo` | SEO helper (often paired with `next-seo` patterns). |
| `HeaderSpacer` | Layout spacing under fixed header. |
| `Portal` | Portal host for overlays. |
| `LightBoxOverlay` | Lightbox UI. |
| `ExitPopup` | Exit-intent / popup module. |

### Elements ([`src/components/elements/index.ts`](./src/components/elements/index.ts))

Primitives and content building blocks, including:

- **Buttons / links:** `Button`, `TextLink`, `Link`, `LinkGroup`
- **Media:** `Asset`, `AssetVideo`, `Icon`, `RivePlayer`
- **Text / tags:** `HighlightedText`, `TextCard`, `PillTag`, `PostTag`, `TextStrokeStack`, `CustomLines`, `Icons`
- **Other:** `PodcastSpring`, `PostAsideSubscribe`, `Wp`, `WpHotkey`

(Exact named exports follow each module’s `export` statements; some files export both default and named symbols.)

### Layouts ([`src/components/layouts/index.ts`](./src/components/layouts/index.ts))

`ComponentRenderer`, `LayoutRenderer`, `LandingPage`, `Section`, `useSection`.

### Templates ([`src/components/templates/index.ts`](./src/components/templates/index.ts))

Higher-level page templates: `Layout`, `Page`, `SingleResource`, `SingleNews`, `SingleJob`, `SingleCustomerStory`.

---

## JavaScript design tokens

From the main entry (`import { colors, … } from "@genius-sports/gs-brand-kit"`), the bundled [`src/tokens/tokens.ts`](./src/tokens/tokens.ts) exports:

- **`colors`** — Brand palette (navy, blue, brightGreen, …).
- **`fontFamily`** — Heading/body family name strings.
- **`screens`** — Breakpoint widths (e.g. `xxs`–`3xl`, `960`).
- **`spacing`** — Custom spacing keys used across the system.
- **Types:** `ColorName`, `ScreenName`.

Additional token files under [`src/tokens/`](./src/tokens/) (e.g. `colors.ts`, `typography.ts`, `containers.ts`) exist for authoring and parity with the site; they are **not** all re-exported from the main entry unless added to `tokens/index.ts`.

---

## CMS client API (`@genius-sports/gs-brand-kit/cms`)

`import cms from "@genius-sports/gs-brand-kit/cms"` then use **`cms()`** methods:

| Method | Role |
| ------ | ---- |
| `options()` | Global WP options (nav, footer, etc.) — primary data for branded shell. |
| `paths()` | Static path list for builds / SSG (filtered). |
| `page(slug)` | Page payload by slug. |
| `preview(post_id)` | Draft preview. |
| `robots()` | Robots data. |
| `get(path, options?)` | Low-level GET to `together/*` REST paths. |
| `search(query)` | Site search. |
| `post(path, body)` | POST helper. |
| `redirects()` | Redirect map. |
| `handleRedirectOrPageNotFound(slug)` | Resolve redirect or 404 shape for Next.js. |
| `getJobContent(jobId)` | Greenhouse job API (external). |
| `login(username, password)` | JWT auth against WP. |
| `reportsPaths`, `reports`, `report`, `reportCategories` | Client report / gated content (Bearer token). |

HTTP layer: **`fetchFromWp`** builds URLs as `{NEXT_PUBLIC_WORDPRESS_BASE_URL}/wp-json/{path}` with cache/retry behavior. See [`src/utils/cms.ts`](./src/utils/cms.ts) for full signatures and edge cases.

---

## Tailwind preset

Default import:

```ts
import brandKitPreset from "@genius-sports/gs-brand-kit/tailwind-preset";
```

Provides:

- **Breakpoints:** `xxs` (400px) through `3xl` (1536px), plus `960`, `1441px`, etc.
- **Colors:** Marketing palette (`navy`, `blue`, `brightGreen`, …) aligned with [`src/tailwind-preset.ts`](./src/tailwind-preset.ts).
- **Fonts:** `font-heading`, `font-body` families matching the WP site.
- **Container:** Centered container with responsive horizontal padding.

Quick usage examples: `bg-navy`, `text-brightGreen`, `font-heading`, `max-w-screen-2xl`. Full token lists appear in [`CURSOR_INSTRUCTIONS.md`](./CURSOR_INSTRUCTIONS.md) under “Available brand tokens”.

---

## Fonts (`@genius-sports/gs-brand-kit/fonts`)

```tsx
import { gsHeadingFont, gsBodyFont } from "@genius-sports/gs-brand-kit/fonts";
```

Apply to `<html>`:

```tsx
<html className={`${gsHeadingFont.variable} ${gsBodyFont.variable}`}>
```

Font files live under **`src/assets/fonts/`** in this repo and are referenced by relative paths in [`src/fonts.ts`](./src/fonts.ts).

---

## Global styles (SCSS)

For full visual parity with the marketing site, apps can import the published SCSS path:

```scss
@import "@genius-sports/gs-brand-kit/src/styles/globals.scss";
```

(Exact layering depends on your Sass setup and any need for `_typography.scss` and partials under `src/styles/`.)

---

## Build & development (maintainers)

From the **repository root**:

```bash
npm install
npm run build    # tsup → dist/ + post-process font/preset .d.ts fixes
npm run dev      # tsup --watch
```

**Requirement:** run **`npm run build`** before linking into another project or running [`test-app-header`](./test-app-header/) so `dist/` exists.

---

## Bundling & publishing notes

- **Bundler:** [`tsup`](./tsup.config.ts) with multiple entries: `index`, `fonts`, `tailwind-preset`, `cms`.
- **Format:** ESM only (`format: ["esm"]`).
- **Externals:** `react`, `react-dom`, `next`, `tailwindcss`, `framer-motion`, `sass` are not bundled (peer/framework).
- **SCSS:** Loaded as **`empty`** in esbuild for the JS bundle—components that `import "./foo.scss"` do not embed CSS into the JS artifact; consumers rely on Next/Sass to compile SCSS from `node_modules` when those modules are imported.
- **Publish payload:** `package.json` **`files`**: `dist`, `src`.

Post-build scripts ([`scripts/`](./scripts/)) patch generated declaration files for fonts and the Tailwind preset.

---

## Source code not in the public API

- **`src/components/flexible/`** — Large flexible-content sections; **not** re-exported from [`src/index.ts`](./src/index.ts) (export commented out).
- **`src/components/article/`** — Article block renderers; **not** in the main barrel.
- **`src/index.ts`** comments indicate future **`utils`**, **`hooks`**, **`types`** barrels—enable when stable and needed downstream.

When in doubt, **only symbols reachable from `src/index.ts` and the other `package.json` exports** are part of the semver contract for published releases. Everything else is internal or future-facing unless you explicitly export it.

---

## Local test app

[`test-app-header/`](./test-app-header/) is a minimal **Next.js 14** project that depends on `"@genius-sports/gs-brand-kit": "file:.."`. It validates **Header** and **Footer** against live **`cms().options()`**, rewrites nav URLs to the public marketing site, and uses **`dynamic = "force-dynamic"`**. See [`test-app-header/README.md`](./test-app-header/README.md).

---

## Related documentation

| Doc | Contents |
| --- | -------- |
| [`CURSOR_INSTRUCTIONS.md`](./CURSOR_INSTRUCTIONS.md) | Copy-paste scaffold for a new Genius Sports branded Next.js SPA. |
| [`test-app-header/README.md`](./test-app-header/README.md) | How to run the header/footer sandbox only. |

---

## License / access

Internal Genius Sports use. Publishing, versioning, and registry access follow your organization’s process.
