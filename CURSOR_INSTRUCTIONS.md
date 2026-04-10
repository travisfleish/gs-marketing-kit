# How to create a new Genius Sports branded SPA

> ⚠️ IMPORTANT FOR AI ASSISTANTS: When replacing any existing file, delete ALL existing content first. Never merge or append — always do a complete replacement. The create-next-app boilerplate (Geist fonts, default globals.css, default page.tsx) must be completely removed. If create-next-app cannot run in the current directory because files already exist, create a subdirectory called `web/` and scaffold there instead.

You are building a new Next.js 14 App Router application using the @genius-sports/gs-brand-kit package. Follow these steps exactly in order.

## Step 1 — Scaffold the app
```bash
npx create-next-app@14 your-app-name --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
cd your-app-name
```

## Step 2 — Install dependencies
```bash
npm install github:travisfleish/gs-marketing-kit --legacy-peer-deps
npm install framer-motion --legacy-peer-deps
npm install sass --legacy-peer-deps
```

## Step 3 — Create .env.local
NEXT_PUBLIC_WORDPRESS_BASE_URL=https://cms.geniussports.com
NEXT_PUBLIC_SITE_URL=https://www.geniussports.com

## Step 4 — Replace next.config.mjs
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@genius-sports/gs-brand-kit"],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": require("path").resolve(
        __dirname,
        "node_modules/@genius-sports/gs-brand-kit/src"
      ),
    };
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.geniussports.com" },
      { protocol: "https", hostname: "uat.cms.geniussports.com" },
      { protocol: "https", hostname: "s46637.pcdn.co" },
      { protocol: "https", hostname: "s46638.pcdn.co" },
    ],
  },
};
export default nextConfig;
```

## Step 4b — Update tsconfig.json
Add the following paths to the compilerOptions in tsconfig.json so TypeScript resolves ~ imports from the brand kit:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "~/*": ["./node_modules/@genius-sports/gs-brand-kit/src/*"],
      "@genius-sports/gs-brand-kit/src/*": ["./node_modules/@genius-sports/gs-brand-kit/src/*"]
    }
  }
}
```

## Step 5 — Replace tailwind.config.ts
```ts
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
```

## Step 6 — Replace app/globals.css
COMPLETELY REPLACE the entire contents of this file. Delete everything including existing CSS variables and dark mode rules. Write only this:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 7 — Replace app/layout.tsx
COMPLETELY REPLACE the entire contents of this file. Delete everything including all Geist font imports, localFont calls, and existing metadata. Write only this:
```tsx
import type { Metadata } from "next";
import { gsHeadingFont, gsBodyFont } from "@genius-sports/gs-brand-kit/fonts";
import "./globals.css";
import "./brand-globals.scss";

export const metadata: Metadata = {
  title: "Genius Sports",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gsHeadingFont.variable} ${gsBodyFont.variable}`}>
      <body className="font-body bg-white text-navy">{children}</body>
    </html>
  );
}
```

## Step 7b — Create app/brand-globals.scss
Create this new file. It does not exist yet:
```scss
@import "@genius-sports/gs-brand-kit/src/styles/globals.scss";
```

## Step 8 — Create app/components/Providers.tsx
```tsx
"use client";
export { default } from "@genius-sports/gs-brand-kit/src/components/shell/Providers";
```

## Step 9 — Create app/components/SiteShell.tsx
```tsx
"use client";
import { useContext } from "react";
import { Header, Footer, GlobalContext } from "@genius-sports/gs-brand-kit";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context] = useContext(GlobalContext) as any;
  const footer = context?.options?.footer;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer
        bgColor="white"
        columns={footer?.columns}
        social={footer?.social}
        terms={footer?.terms}
        CTA={footer?.global_cta?.footer_cta}
        featuredLinks={footer?.global_featured_links?.footer_featured_links}
      />
    </>
  );
}
```

## Step 10 — Replace app/page.tsx
NOTE: rewriteHeaderNavToMarketingSite must be imported from the direct source path, not the main package entry. This works because the package is installed from github:travisfleish/gs-marketing-kit which includes the full src/ directory. Importing from "@genius-sports/gs-brand-kit" pulls the full bundle into the RSC context which causes a "createContext is not a function" server error.

COMPLETELY REPLACE the entire contents of this file. Write only this:
```tsx
import cms from "@genius-sports/gs-brand-kit/cms";
import { rewriteHeaderNavToMarketingSite } from "@genius-sports/gs-brand-kit/src/utils/rewriteHeaderNavUrls";
import Providers from "./components/Providers";
import SiteShell from "./components/SiteShell";

export const dynamic = "force-dynamic";

export default async function Home() {
  const raw = await cms().options();
  const options = rewriteHeaderNavToMarketingSite(raw);

  return (
    <Providers options={options}>
      <SiteShell>
        <div className="min-h-screen p-12 bg-white">
          <h1 className="text-4xl font-heading text-navy mt-24">
            Your page content here
          </h1>
        </div>
      </SiteShell>
    </Providers>
  );
}
```

## Step 11 — Run the dev server
```bash
npm run dev
```

You should see the Genius Sports header and footer with live navigation data from WordPress.

---

## Brand Compliance Rules

These rules apply to EVERY app built with @genius-sports/gs-brand-kit. Follow them without exception. When in doubt, check this file before writing any UI code.

---

### Rule 1 — Always use the package before writing custom UI

Before building any UI element from scratch, check if the brand kit has a component for it. The lookup table below maps common UI needs to the correct component. Never invent a button, tag, heading style, or layout container — use the package.

---

### Rule 2 — Component lookup table

| What you need | Use this | Import from |
|---|---|---|
| Any CTA button | `Button` | `@genius-sports/gs-brand-kit` |
| Inline text link | `TextLink` | `@genius-sports/gs-brand-kit` |
| Smart link wrapper | `Link` | `@genius-sports/gs-brand-kit` |
| Group of CTA links | `LinkGroup` | `@genius-sports/gs-brand-kit` |
| Small badge / label (e.g. "NEW") | `PillTag` | `@genius-sports/gs-brand-kit` |
| Category tag (blog, resource) | `PostTag` | `@genius-sports/gs-brand-kit` |
| Heading with highlighted words | `HighlightedText` | `@genius-sports/gs-brand-kit` |
| Text block with heading + body + links | `TextCard` | `@genius-sports/gs-brand-kit` |
| Image or video asset | `Asset` | `@genius-sports/gs-brand-kit` |
| Brand logo | `Logo` | `@genius-sports/gs-brand-kit` |
| Site header | `Header` | `@genius-sports/gs-brand-kit` |
| Site footer | `Footer` | `@genius-sports/gs-brand-kit` |
| Two-col text + image layout | `TwoColContent` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/TwoColContent` |
| Animated stats + media layout | `MediaAndStats` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/MediaAndStats` |
| Large stat number grid | `StatsGrid` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/StatsGrid` |
| Three-column feature card grid | `ThreeColumnCardGrid` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/ThreeColumnCardGrid` |
| Hero / page masthead | `TwoColumnMasthead` | `@genius-sports/gs-brand-kit/src/components/flexible/mastheads/components/TwoColumnMasthead` |
| Hero with stats | `TwoColumnStatsMasthead` | `@genius-sports/gs-brand-kit/src/components/flexible/mastheads/components/TwoColumnStatsMasthead` |
| Logo marquee strip | `LogoMarquee` | `@genius-sports/gs-brand-kit/src/components/flexible/media/components/LogoMarquee` |
| Icon + text feature grid | `IconGrid` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/IconGrid` |
| Full-width CTA band | `FullWidthProductCallout` | `@genius-sports/gs-brand-kit/src/components/flexible/content/components/FullWidthProductCallout` |

---

### Rule 3 — Button usage

NEVER build a custom button. ALWAYS use the `Button` component.

```tsx
import { Button } from "@genius-sports/gs-brand-kit"

// Primary CTA (dark backgrounds)
<Button
  link={{ title: "Learn more", url: "/page" }}
  button={{ background_color: "navy", type: "default" }}
/>

// Primary CTA (light backgrounds)
<Button
  link={{ title: "Learn more", url: "/page" }}
  button={{ background_color: "white", type: "default" }}
/>

// Secondary / compact
<Button
  link={{ title: "Find out more", url: "/page" }}
  button={{ background_color: "navy", type: "slim" }}
/>

// Outlined
<Button
  link={{ title: "Get started", url: "/page" }}
  button={{ background_color: "navy", type: "outline" }}
/>
```

button.type options: "default" | "slim" | "outline" | "header"
button.background_color options: "navy" | "white" | "lightGrey" | "white15" | "navy5"

The Button component handles all padding, font size, border radius, color, hover animation, and motion internally. Do not add custom styles to override these.

---

### Rule 4 — Typography

NEVER use system fonts. NEVER hardcode font-family in CSS. ALWAYS use the brand font classes.

| Use case | Class | Font |
|---|---|---|
| All headings (h1–h4) | `font-heading` | ES Klarheit Kurrent |
| All body text, paragraphs, labels | `font-body` | Red Hat Text |
| UI labels, captions, small text | `font-body` | Red Hat Text |

Heading size scale:
- Hero heading: `text-5xl lg:text-7xl font-heading font-normal`
- Page heading (h1): `text-4xl lg:text-5xl font-heading font-normal`
- Section heading (h2): `text-3xl lg:text-4xl font-heading font-normal`
- Card heading (h3): `text-2xl font-heading font-normal`
- Small heading (h4): `text-xl font-heading font-normal`
- Body large: `text-18 font-body`
- Body default: `text-base font-body`
- Small / caption: `text-sm font-body`

Tracking: headings use `tracking-[-0.025em]`. Body uses default tracking.
Line height: headings use `leading-[1.1]`. Body uses `leading-[1.5]`.

---

### Rule 5 — Colors

NEVER hardcode hex values. ALWAYS use Tailwind token classes.

Full color palette:
- `navy` (#0D1226) — primary dark, backgrounds, text
- `blue` (#0000DC) — primary brand blue, links, accents
- `lightBlue` (#95ECFD) — light accent
- `brightGreen` (#E1FF67) — highlight accent, hero text highlights
- `lightGreen` (#18C971) — success, positive stats
- `green` (#047C40) — deep green
- `purple` (#4337A8) — secondary brand color
- `lightPurple` (#C2D1FF) — light purple accent
- `orange` (#FA5D00) — warning, energy
- `lightOrange` (#FFEBAF) — soft orange
- `lightRed` (#F76B6A) — error, alert
- `red` (#C20000) — strong error
- `lightGrey` (#F6F7F9) — card backgrounds, section fills
- `lavenderGrey` (#E7E7E9) — borders, dividers
- `snow` (#FAFAFA) — near-white backgrounds
- `white` (#FFFFFF) — pure white

Usage: `bg-navy`, `text-blue`, `border-lavenderGrey`, `bg-lightGrey`, `text-brightGreen`

Common patterns:
- Dark hero section: `bg-navy text-white`
- Light section: `bg-white text-navy` or `bg-snow text-navy`
- Card background: `bg-lightGrey`
- Dividers: `border-lavenderGrey`
- Highlighted heading text: `text-blue` or `text-brightGreen`

---

### Rule 6 — Containers and layout widths

NEVER use arbitrary max-width values. ALWAYS use these standard container classes from the brand kit:

- `container` — standard max-width with horizontal padding, centered
- `container--extra-small` — narrow container for text-heavy sections
- `container container--extra-small` — combined for constrained layouts

For full-bleed sections with internal containers, wrap content in `<div className="container">`.

Standard section padding: `py-16 md:py-24` for major sections, `py-10 md:py-16` for tighter sections.

---

### Rule 7 — Breakpoints

Use these breakpoints in order (mobile-first):

| Token | Width | Use for |
|---|---|---|
| `xxs` | 400px | Very small phones |
| `xs` | 480px | Small phones |
| `sm` | 640px | Large phones / small tablets |
| `md` | 768px | Tablets, major layout shifts |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1420px | Wide desktop |

Always design mobile-first. Start with the mobile layout and use responsive prefixes to adjust upward. Example: `flex-col md:flex-row`, `text-3xl lg:text-5xl`, `py-10 md:py-16`.

---

### Rule 8 — Header and Footer

NEVER build a custom header or footer. ALWAYS use the Header and Footer from the brand kit via the SiteShell pattern.

Every page must be wrapped in:
```tsx
<Providers options={options}>
  <SiteShell>
    {/* your page content */}
  </SiteShell>
</Providers>
```

The Header reads navigation from GlobalContext automatically — never pass nav data as props.
The Footer receives columns, social, terms, CTA, and featuredLinks from CMS options via SiteShell.
Use `<HeaderSpacer />` immediately inside SiteShell if your page needs spacing below the fixed header.

---

### Rule 9 — Spacing rhythm

Use this spacing scale consistently across sections:

- Between major page sections: `py-16 md:py-24`
- Between cards in a grid: `gap-6 md:gap-8`
- Inside a card: `p-6 md:p-8`
- Between heading and body text: `mb-4 md:mb-6`
- Between body text and CTA: `mt-6 md:mt-8 lg:mt-10`
- Section inner container top/bottom padding: `pt-16 pb-16`

---

### Rule 10 — What never to do

- ❌ Never use `font-sans`, `font-serif`, or any Tailwind default font class
- ❌ Never hardcode colors like `text-[#0000DC]` — use `text-blue`
- ❌ Never build a custom button with `<button>` or `<a>` styled manually
- ❌ Never set `max-w-[1280px]` manually — use `container`
- ❌ Never use `text-gray-*` or any default Tailwind gray — use `text-navy/70` for muted text
- ❌ Never skip the Header/Footer — every page must have both
- ❌ Never use Google Fonts or system fonts — brand fonts are loaded via the package
- ❌ Never add a custom border-radius to buttons — the Button component handles this
- ❌ Never use `px-4 py-2 rounded` on a button — use the Button component

## Key concepts

- `cms().options()` — fetches live nav/footer data from WordPress. Called once per page in a server component.
- `rewriteHeaderNavToMarketingSite` — rewrites header nav URLs so in-app links point at the main marketing site. Import from `@genius-sports/gs-brand-kit/src/utils/rewriteHeaderNavUrls` — this works because the package is installed from github:travisfleish/gs-marketing-kit which publishes src/ alongside dist/. Pass the raw options from `cms().options()` before giving them to `Providers`.
- `Providers` — wraps the app with GlobalContext (use the re-export from Step 8). Pass `options` as shown in Step 10.
- `SiteShell` — reads footer data from context and renders Header + Footer (use the implementation from Step 9). All your page content goes inside SiteShell as children.
- `GlobalContext` — the Header reads nav data from here automatically. You never pass props to Header directly.

## Available brand tokens

Colors: navy, blue, lightBlue, brightGreen, lightGreen, green, purple, lightPurple, orange, lightOrange, lightRed, red, black, lightGrey, lavenderGrey, white, snow

Usage: bg-navy, text-brightGreen, border-blue etc.

Fonts: font-heading (ESKlarheitKurrent), font-body (RedHatText)

Breakpoints: xxs(400px) xs(480px) sm(640px) md(768px) lg(1024px) xl(1280px) 2xl(1420px)

