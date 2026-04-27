---

# Genius Sports Brand Kit — Foundations (Figma → dev)

**Audience:** Designers building UI in Figma and engineers implementing in code. This is a **foundations-only** slice: typography, color, layout width, breakpoints, and spacing patterns. It intentionally omits React components and CMS blocks from the full [`CATALOG.md`](CATALOG.md).

## How to use this file

- **In Figma:** Create color and text styles from the tables below; use suggested frame widths so mocks align with responsive breakpoints. Name styles after the **token** (e.g. `navy`, `text-h1`) so handoff matches Tailwind/CSS.
- **In code:** Use the listed Tailwind classes and tokens only—avoid one-off hex, font sizes, or spacing that are not represented here.

## Designer handoff (Figma)

| Topic | Guidance |
|---|---|
| **Frames** | Design at key widths: **400px** (`xxs`) or a typical phone frame (~390–430), **768px** (`md`), **1024px** (`lg`), **1280px** (default content max / `xl`), **1440px** (common desktop canvas; content still caps at container tokens). Match breakpoint names to the table below when documenting variants. |
| **Fluid type** | Typography sizes in the table are **fluid** (clamp) in production. For static mocks, use the **desktop-scale** values in the table; expect slightly smaller type on narrow frames. |
| **Font weights** | **ES Klarheit Kurrent (trial):** 400 (Book), 500 (Medium), 600 (Semibold) — see webfont files in `foundations/fonts/`. **Red Hat Text:** 400 (Regular), 500 (Medium). |
| **Corner radius** | No custom radius tokens; the stack uses **Tailwind defaults** (e.g. `rounded-md` 6px, `rounded-lg` 8px, `rounded-xl` 12px, `rounded-full` for pills/avatars). Prefer those steps in Figma. |
| **Semantic accents** | Primary **link/interactive** accent: token **`blue`**. Primary **CTA / emphasis** accent: **`orange`** (pair with neutrals per layout). **Success / positive:** `green` / `lightGreen`. **Destructive / error:** `red`. |
| **CSS variables** | Same palette and layout tokens are published as `:root` variables in `foundations/brand-tokens.css` (e.g. `--color-navy`, `--container-default`). Optional: mirror those names in Figma variables for 1:1 dev parity. |
| **Assets** | Webfont binaries and `@font-face` live under `foundations/fonts.css` + `foundations/fonts/*.woff2`. Install the trial fonts locally for Figma if licensing allows. |

## Typography

**Typefaces:** **ES Klarheit Kurrent** (trial webfonts; CSS `font-family: ESKlarheitKurrentTRIAL`) is the heading and display face — use Tailwind **`font-heading`**. **Red Hat Text** (CSS `RedHatText`) is the body and UI face — use **`font-body`**. Ship `@font-face` rules via `foundations/fonts.css` (or the kit font pipeline) so both families load.

Use these classes for all text. Never use raw Tailwind font-size classes like text-xl or text-5xl.

| Class | Font | Size | Use for |
|---|---|---|---|
| .text-h1 | ES Klarheit Kurrent | ~72px fluid · leading 1.08 · tracking -0.03em | Page hero headings (h1) |
| .text-h2 | ES Klarheit Kurrent | ~56px fluid · leading 1.10 · tracking -0.035em | Major section headings (h2) |
| .text-h3 | ES Klarheit Kurrent | ~46px fluid · leading 1.10 · tracking -0.02875em | Subsection headings (h3) |
| .text-h4 | ES Klarheit Kurrent | ~40px fluid · leading 1.10 · tracking -0.05em | Card or feature titles (h4) |
| .text-h5 | ES Klarheit Kurrent | ~32px fluid · leading 1.10 · tracking -0.035em | Small section headings (h5) |
| .text-h6 | ES Klarheit Kurrent | ~28px fluid · leading 1.40 · tracking -0.035em | Labels and minor headings (h6) |
| .text-h7 | ES Klarheit Kurrent | ~22px fluid · leading 1.40 · tracking -0.0275em | Eyebrows and compact display lines |
| .text-88 | ES Klarheit Kurrent | ~88px fluid · leading 1.08 · tracking 0em | Extra-large display numerals or hero stats |
| .text-80 | ES Klarheit Kurrent | ~80px fluid · leading 1.08 · tracking -0.1em | Oversized display type and key metrics |
| .text-72 | ES Klarheit Kurrent | ~72px fluid · leading 1.2 · tracking -0.03em | Large display headlines |
| .text-70 | ES Klarheit Kurrent | ~70px fluid · leading 1.1 · tracking -0.07em | Prominent stats and hero figures |
| .text-64 | ES Klarheit Kurrent | ~64px fluid · leading 1.1 · tracking -0.07em | Display stats and emphasis numbers |
| .text-header-stat | ES Klarheit Kurrent | ~48px fluid · leading 1.1 · tracking — | Header or masthead statistics |
| .text-40 | Red Hat Text | ~40px fluid · leading 1.4 · tracking -0.0375em | Large body or small display lines |
| .text-40-s | Red Hat Text | ~40px fluid · leading 1.4 · tracking -0.0375em | 40px scale with tighter mobile ramp |
| .text-36 | Red Hat Text | ~36px fluid · leading 1.1 · tracking -0.045em | Lead paragraphs and prominent subheads |
| .text-32 | Red Hat Text | ~32px fluid · leading 1.4 · tracking -0.0375em | Intro copy and emphasized body |
| .text-30 | Red Hat Text | ~30px fluid · leading 1.4 · tracking -0.0375em | Supporting lead text |
| .text-24 | Red Hat Text | ~24px fluid · leading 1.4 · tracking -0.03em | Card titles and UI emphasis |
| .text-22 | Red Hat Text | ~22px fluid · leading 1.5 · tracking -0.01375em | Subheadings and navigation labels |
| .text-20 | Red Hat Text | ~20px fluid · leading 1.45 · tracking -0.0125em | Large body and card descriptions |
| .text-20--extra-clamp | Red Hat Text | ~20px fluid · leading 1.45 · tracking -0.0125em | 20px with alternate fluid ramp |
| .text-18 | Red Hat Text | ~18px fluid · leading 1.45 · tracking -0.01125em | Default long-form body text |
| .text-17 | Red Hat Text | ~17px fluid · leading 1.2 · tracking -0.010625em | Compact UI body and captions |
| .text-16 | Red Hat Text | ~16px fluid · leading 1.35 · tracking -0.01em | Secondary body and dense UI |
| .text-16--clamp | Red Hat Text | ~16px fluid · leading 1.35 · tracking -0.01em | 16px with alternate fluid ramp |
| .text-15 | Red Hat Text | ~15px fluid · leading 1.45 · tracking -0.009375em | Metadata, labels, and fine print |
| .text-15--clamp | Red Hat Text | ~15px fluid · leading 1.45 · tracking -0.009375em | 15px with alternate fluid ramp |
| .text-14 | Red Hat Text | ~14px fluid · leading 1.3 · tracking -0.009375em | Small labels, footnotes, and legal |
| .prose | Red Hat Text (body); headings inside use Klarheit | Body ~18px in paragraphs (via `@extend`); `space-y-6 font-body` | Long-form article and CMS HTML (headings, lists, links); paragraphs use text-18 scale |

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