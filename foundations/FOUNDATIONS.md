---

# Genius Sports Brand Kit — Foundations (no React components)

This file is auto-generated. Do not edit manually. Run `npm run catalog` to regenerate.

## How to use this file

Use this bundle for **Vite SPAs**, **Lovable**, **Bolt**, **Cursor**, or any stack that should **look on-brand** without installing the full React kit.

1. **Paste** this file (or the relevant sections) into your AI’s project instructions / knowledge base.
2. **Import** CSS from the published package:
   - `@import "@genius-sports/gs-brand-kit/foundations/fonts.css";`
   - `@import "@genius-sports/gs-brand-kit/foundations/brand-tokens.css";`
3. **Fonts** — Binary files live in `foundations/fonts/*.woff2` next to `fonts.css` (copied from `src/assets/fonts` when the catalog runs). **Copy the entire `foundations/` folder** into another repo to get `FOUNDATIONS.md`, `brand-tokens.css`, `fonts.css`, and webfonts in one place. When using the npm package, `@import` paths still work as below.

For **full marketing pages** with header, footer, and CMS data, use the main package entry and [`CATALOG.md`](../CATALOG.md) (components section).

## Typography

Use these classes for all text. Never use raw Tailwind font-size classes like text-xl or text-5xl.

| Class | Size | Use for |
|---|---|---|
| .text-h1 | ~72px fluid · leading 1.08 · tracking -0.03em | Page hero headings (h1) |
| .text-h2 | ~56px fluid · leading 1.10 · tracking -0.035em | Major section headings (h2) |
| .text-h3 | ~46px fluid · leading 1.10 · tracking -0.02875em | Subsection headings (h3) |
| .text-h4 | ~40px fluid · leading 1.10 · tracking -0.05em | Card or feature titles (h4) |
| .text-h5 | ~32px fluid · leading 1.10 · tracking -0.035em | Small section headings (h5) |
| .text-h6 | ~28px fluid · leading 1.40 · tracking -0.035em | Labels and minor headings (h6) |
| .text-h7 | ~22px fluid · leading 1.40 · tracking -0.0275em | Eyebrows and compact display lines |
| .text-88 | ~88px fluid · leading 1.08 · tracking 0em | Extra-large display numerals or hero stats |
| .text-80 | ~80px fluid · leading 1.08 · tracking -0.1em | Oversized display type and key metrics |
| .text-72 | ~72px fluid · leading 1.2 · tracking -0.03em | Large display headlines |
| .text-70 | ~70px fluid · leading 1.1 · tracking -0.07em | Prominent stats and hero figures |
| .text-64 | ~64px fluid · leading 1.1 · tracking -0.07em | Display stats and emphasis numbers |
| .text-header-stat | ~48px fluid · leading 1.1 · tracking — | Header or masthead statistics |
| .text-40 | ~40px fluid · leading 1.4 · tracking -0.0375em | Large body or small display lines |
| .text-40-s | ~40px fluid · leading 1.4 · tracking -0.0375em | 40px scale with tighter mobile ramp |
| .text-36 | ~36px fluid · leading 1.1 · tracking -0.045em | Lead paragraphs and prominent subheads |
| .text-32 | ~32px fluid · leading 1.4 · tracking -0.0375em | Intro copy and emphasized body |
| .text-30 | ~30px fluid · leading 1.4 · tracking -0.0375em | Supporting lead text |
| .text-24 | ~24px fluid · leading 1.4 · tracking -0.03em | Card titles and UI emphasis |
| .text-22 | ~22px fluid · leading 1.5 · tracking -0.01375em | Subheadings and navigation labels |
| .text-20 | ~20px fluid · leading 1.45 · tracking -0.0125em | Large body and card descriptions |
| .text-20--extra-clamp | ~20px fluid · leading 1.45 · tracking -0.0125em | 20px with alternate fluid ramp |
| .text-18 | ~18px fluid · leading 1.45 · tracking -0.01125em | Default long-form body text |
| .text-17 | ~17px fluid · leading 1.2 · tracking -0.010625em | Compact UI body and captions |
| .text-16 | ~16px fluid · leading 1.35 · tracking -0.01em | Secondary body and dense UI |
| .text-16--clamp | ~16px fluid · leading 1.35 · tracking -0.01em | 16px with alternate fluid ramp |
| .text-15 | ~15px fluid · leading 1.45 · tracking -0.009375em | Metadata, labels, and fine print |
| .text-15--clamp | ~15px fluid · leading 1.45 · tracking -0.009375em | 15px with alternate fluid ramp |
| .text-14 | ~14px fluid · leading 1.3 · tracking -0.009375em | Small labels, footnotes, and legal |
| .prose | Body ~18px in paragraphs (via `@extend`); `space-y-6 font-body` | Long-form article and CMS HTML (headings, lists, links); paragraphs use text-18 scale |

## Colors

Never hardcode hex values. Always use the Tailwind token class.

| Token | Hex | Tailwind class | Use for |
|---|---|---|---|
| navy | #0D1226 | bg-navy / text-navy | Primary dark background, headlines, and default text on light UI |
| blue | #0000DC | bg-blue / text-blue | Primary interactive blue and links accent |
| lightBlue | #95ECFD | bg-lightBlue / text-lightBlue | Bright accent and highlights on dark backgrounds |
| brightGreen | #E1FF67 | bg-brightGreen / text-brightGreen | High-contrast accent and success highlights |
| lightGreen | #18C971 | bg-lightGreen / text-lightGreen | Positive and growth accents |
| green | #047C40 | bg-green / text-green | Primary green for success and sports-positive states |
| lightPurple | #C2D1FF | bg-lightPurple / text-lightPurple | Soft purple surfaces and secondary accents |
| purple | #4337A8 | bg-purple / text-purple | Deep purple for emphasis and secondary brand |
| lightOrange | #FFEBAF | bg-lightOrange / text-lightOrange | Warm light surfaces and soft highlights |
| orange | #FA5D00 | bg-orange / text-orange | Primary orange accent and CTAs |
| lightRed | #F76B6A | bg-lightRed / text-lightRed | Soft error or warning surfaces |
| red | #C20000 | bg-red / text-red | Error, alert, and destructive emphasis |
| black | #000000 | bg-black / text-black | True black fills and maximum contrast |
| lightGrey | #F6F7F9 | bg-lightGrey / text-lightGrey | Page and section backgrounds |
| lavenderGrey | #E7E7E9 | bg-lavenderGrey / text-lavenderGrey | Subtle borders and dividers |
| white | #ffffff | bg-white / text-white | Primary light surfaces and inverse text on dark |
| snow | #FAFAFA | bg-snow / text-snow | Off-white backgrounds and subtle cards |

## Breakpoints

Always design mobile-first. Add responsive prefixes to scale up.

| Token | Width | Tailwind prefix |
|---|---|---|
| xxs | 400px | xxs: |
| xs | 480px | xs: |
| sm | 640px | sm: |
| md | 768px | md: |
| 960 | 960px | 960: |
| lg | 1024px | lg: |
| xl | 1280px | xl: |
| 2xl | 1420px | 2xl: |
| 3xl | 1536px | 3xl: |

## Container

Use `.container` and modifiers for horizontal layout; prefer tokens for semantic width names.

| Class / token | Max width | Usage |
|---|---|---|
| .container | 1280px (max-width: 80rem) | Default centered content; `mx-auto`, `px-5`, `md:px-6` |
| .container--no-mobile-padding | (inherits default max) | Edge-to-edge on small screens; `md:px-6` restores padding |
| .container.header-container | 1376px (max-width: 86rem) | Header bar width; `lg:px-8` |
| .inner-container | (padding only) | Nested horizontal padding: `px-6 md:px-10 lg:px-[4.5rem]` |
| .container--676px | 676px | Narrow reading column (e.g. legal or forms) |
| .container--736px | 736px | Medium-narrow article or card column |
| .container--846px | 846px | Single-column content width |
| .container--1014px | 1014px | Medium content band |
| .container--1062px | 1062px | Medium-wide content band |
| .container--1292px | 1292px | Wide layouts under full default container |
| .container--1376px | 1376px | Wide marketing sections (matches header max) |
| .container--extra-small | 1110px | Slightly narrower than default for dense grids |
| .container--small | 1171px | Compact wide layouts |
| .container--large | 1368px | Extra-wide content without full bleed |
| .container--extra-large | 1920px | Maximum width for full-bleed style sections |

**Semantic widths** ([src/tokens/containers.ts](src/tokens/containers.ts)):

| Name | Width | Notes |
|---|---|---|
| narrow | 1110px | Named width in tokens (containerWidthsPx) |
| default | 1280px | Named width in tokens (containerWidthsPx) |
| wide | 1376px | Named width in tokens (containerWidthsPx) |


## Spacing

Standard spacing patterns to use consistently across all pages.

| Pattern | Classes | Use for |
|---|---|---|
| Section padding | py-16 md:py-24 | Between major page sections |
| Card gap | gap-6 md:gap-8 | Between cards in a grid |
| Card inner | p-6 md:p-8 | Inside card containers |
| Heading to body | mb-4 md:mb-6 | Between a heading and paragraph |
| Body to CTA | mt-6 md:mt-8 lg:mt-10 | Between body text and a button |


## Spacing scale (extended tokens)

These values extend the default Tailwind spacing map in the brand preset. Prefer them when the preset is available.

| Key | Rem | Notes |
|---|---|---|
| `13` | 3.25rem | Extended scale; use via Tailwind config or match in CSS |
| `15` | 3.75rem | Extended scale; use via Tailwind config or match in CSS |
| `18` | 4.5rem | Extended scale; use via Tailwind config or match in CSS |
| `51` | 12.75rem | Extended scale; use via Tailwind config or match in CSS |
| `272` | 68rem | Extended scale; use via Tailwind config or match in CSS |
| `4.25` | 1.063rem | Extended scale; use via Tailwind config or match in CSS |
| `7.5` | 1.875rem | Extended scale; use via Tailwind config or match in CSS |
| `18.875` | 4.719rem | Extended scale; use via Tailwind config or match in CSS |


## CSS companion files

| File | Role |
|---|---|
| `foundations/brand-tokens.css` | `:root` CSS variables for colors, breakpoints, spacing keys, container widths, font family names |
| `foundations/fonts.css` | `@font-face` for heading and body fonts (loads `./fonts/*.woff2`) |
| `foundations/fonts/*.woff2` | Webfont binaries (mirrors `src/assets/fonts`) |
