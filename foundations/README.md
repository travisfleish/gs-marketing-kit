# Brand foundations (lightweight)

This folder is for **sales collateral**, **Vite SPAs**, and **vibe-coding tools** (Lovable, Bolt, etc.) when you want **visual parity** with Genius Sports marketing without the full React / Next.js kit.

**Copy this entire `foundations/` directory** into another repo (or upload it as a bundle) to get the markdown spec, CSS, and webfonts together—no need to pull from `src/assets/fonts` separately.

## Contents

| Path | Purpose |
|------|---------|
| [`FOUNDATIONS.md`](./FOUNDATIONS.md) | Typography, colors, breakpoints, containers, spacing — paste into AI project instructions or docs |
| [`brand-tokens.css`](./brand-tokens.css) | `:root` CSS variables (colors, breakpoints, spacing, containers, font family names) |
| [`fonts.css`](./fonts.css) | `@font-face` rules; loads `./fonts/*.woff2` next to this file |
| [`fonts/`](./fonts/) | `.woff2` binaries (heading + body); **mirrors** `src/assets/fonts` when `npm run catalog` runs |

`FOUNDATIONS.md`, `brand-tokens.css`, and `fonts.css` are **generated** by `npm run catalog`, which also **copies** font files into `foundations/fonts/`. Do not edit generated files by hand.

## Font files

| Canonical source (maintainers) | `src/assets/fonts/*.woff2` |
| Copy for collateral / paste-into-repo | `foundations/fonts/*.woff2` (same five files) |

**Files** (same set as [`src/fonts.ts`](../src/fonts.ts) / `@genius-sports/gs-brand-kit/fonts`):

- `ESKlarheitKurrent-Bk_TRIAL.woff2` (400)
- `ESKlarheitKurrent-Md_TRIAL.woff2` (500)
- `ESKlarheitKurrent-Smbd_TRIAL.woff2` (600)
- `RedHatText-Regular.woff2` (400)
- `RedHatText-Medium.woff2` (500)

Red Hat Text is openly licensed; ES Klarheit files use **trial** filenames—confirm internal/licensing rules before redistributing outside your org.

## Usage

### From a consuming app (npm)

After installing `@genius-sports/gs-brand-kit`, import the CSS from your entry stylesheet:

```css
@import "@genius-sports/gs-brand-kit/foundations/fonts.css";
@import "@genius-sports/gs-brand-kit/foundations/brand-tokens.css";
```

Apply font families in CSS, for example:

```css
body {
  font-family: var(--font-body);
}
h1, h2, h3 {
  font-family: var(--font-heading);
}
```

`fonts.css` uses `url("./fonts/...")` relative to itself, so bundlers resolve `foundations/fonts/*.woff2` inside the package.

### With Cursor / Lovable / Bolt

1. Copy the whole **`foundations/`** folder into the project (or paste **`FOUNDATIONS.md`** into instructions and add the CSS + **`fonts/`** beside `fonts.css`).
2. Import `fonts.css` and `brand-tokens.css` from that folder (or paste rules if the tool has no bundler).

For **full** marketing chrome (header, footer, CMS), use the main package entry and [`CATALOG.md`](../CATALOG.md) in the repo root.
