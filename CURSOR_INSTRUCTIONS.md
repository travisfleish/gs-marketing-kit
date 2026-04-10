# How to create a new Genius Sports branded SPA

You are building a new Next.js 14 App Router application using the @genius-sports/gs-brand-kit package. Follow these steps exactly in order.

## Step 1 — Scaffold the app
```bash
npx create-next-app@14 your-app-name --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
cd your-app-name
```

## Step 2 — Install dependencies
```bash
npm install @genius-sports/gs-brand-kit --legacy-peer-deps
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
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 7 — Replace app/layout.tsx
```tsx
import type { Metadata } from "next";
import { gsHeadingFont, gsBodyFont } from "@genius-sports/gs-brand-kit/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your App Title",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gsHeadingFont.variable} ${gsBodyFont.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
```

## Step 8 — Create app/components/Providers.tsx
```tsx
"use client";
import { useState } from "react";
import { GlobalContext } from "@genius-sports/gs-brand-kit";

export default function Providers({
  children,
  options,
}: {
  children: React.ReactNode;
  options: any;
}) {
  const [context, setContext] = useState({ history: [], options });

  return (
    <GlobalContext.Provider value={[context, setContext]}>
      {children}
    </GlobalContext.Provider>
  );
}
```

## Step 9 — Create app/components/SiteShell.tsx
```tsx
"use client";
import { useContext } from "react";
import { Header, Footer, GlobalContext } from "@genius-sports/gs-brand-kit";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [context] = useContext(GlobalContext) as any;
  const footer = context?.options?.footer;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer
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
```tsx
import cms from "@genius-sports/gs-brand-kit/cms";
import Providers from "./components/Providers";
import SiteShell from "./components/SiteShell";

export default async function Home() {
  const options = await cms().options();

  return (
    <Providers options={options}>
      <SiteShell>
        <div className="min-h-screen p-12 bg-navy">
          <h1 className="text-4xl font-heading text-brightGreen mt-24">
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

## Key concepts

- `cms().options()` — fetches live nav/footer data from WordPress. Called once per page in a server component.
- `Providers` — wraps the app with GlobalContext. Must receive `options` nested as `{ history: [], options }` — do NOT spread options directly.
- `SiteShell` — reads footer data from context and renders Header + Footer. All your page content goes inside SiteShell as children.
- `GlobalContext` — the Header reads nav data from here automatically. You never pass props to Header directly.

## Available brand tokens

Colors: navy, blue, lightBlue, brightGreen, lightGreen, green, purple, lightPurple, orange, lightOrange, lightRed, red, black, lightGrey, lavenderGrey, white, snow

Usage: bg-navy, text-brightGreen, border-blue etc.

Fonts: font-heading (ESKlarheitKurrent), font-body (RedHatText)

Breakpoints: xxs(400px) xs(480px) sm(640px) md(768px) lg(1024px) xl(1280px) 2xl(1420px)

