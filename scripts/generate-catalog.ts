/**
 * Generates CATALOG.md at the repo root from typography SCSS, tokens, containers, and dist/index.d.mts.
 * Run from package root: `npm run catalog` (after `npm run build` so dist/index.d.mts exists).
 * Uses tsconfig.scripts.json (CommonJS) so ts-node can execute on current Node versions.
 */

import * as fs from "fs";
import * as path from "path";
import ts from "typescript";
import { colors, fontFamily, screens, spacing } from "../src/tokens/tokens";
import { containerWidthsPx } from "../src/tokens/containers";

const ROOT = process.cwd();
const PKG_NAME = JSON.parse(
  fs.readFileSync(path.join(ROOT, "package.json"), "utf8"),
).name as string;

const TYPOGRAPHY_PATH = path.join(ROOT, "src/styles/_typography.scss");
const CONTAINER_SCSS_PATH = path.join(ROOT, "src/styles/_container.scss");
const DTS_PATH = path.join(ROOT, "dist/index.d.mts");
const OUT_PATH = path.join(ROOT, "CATALOG.md");
const FOUNDATIONS_DIR = path.join(ROOT, "foundations");
const FOUNDATIONS_MD_PATH = path.join(FOUNDATIONS_DIR, "FOUNDATIONS.md");
const FOUNDATIONS_FONTS_CSS_PATH = path.join(FOUNDATIONS_DIR, "fonts.css");
const FOUNDATIONS_BRAND_TOKENS_CSS_PATH = path.join(FOUNDATIONS_DIR, "brand-tokens.css");
const SOURCE_FONTS_DIR = path.join(ROOT, "src", "assets", "fonts");
const FOUNDATIONS_FONTS_DIR = path.join(FOUNDATIONS_DIR, "fonts");

/** Same filenames as [src/fonts.ts](../src/fonts.ts); copied into foundations/fonts/ for a self-contained folder. */
const FOUNDATIONS_FONT_FILES = [
  "ESKlarheitKurrent-Bk_TRIAL.woff2",
  "ESKlarheitKurrent-Md_TRIAL.woff2",
  "ESKlarheitKurrent-Smbd_TRIAL.woff2",
  "RedHatText-Regular.woff2",
  "RedHatText-Medium.woff2",
] as const;

const TYPOGRAPHY_CLASS_ORDER: string[] = [
  "text-h1",
  "text-h2",
  "text-h3",
  "text-h4",
  "text-h5",
  "text-h6",
  "text-h7",
  "text-88",
  "text-80",
  "text-72",
  "text-70",
  "text-64",
  "text-header-stat",
  "text-40",
  "text-40-s",
  "text-36",
  "text-32",
  "text-30",
  "text-24",
  "text-22",
  "text-20",
  "text-20--extra-clamp",
  "text-18",
  "text-17",
  "text-16",
  "text-16--clamp",
  "text-15",
  "text-15--clamp",
  "text-14",
  "prose",
];

const TYPOGRAPHY_USE: Record<string, string> = {
  "text-h1": "Page hero headings (h1)",
  "text-h2": "Major section headings (h2)",
  "text-h3": "Subsection headings (h3)",
  "text-h4": "Card or feature titles (h4)",
  "text-h5": "Small section headings (h5)",
  "text-h6": "Labels and minor headings (h6)",
  "text-h7": "Eyebrows and compact display lines",
  "text-88": "Extra-large display numerals or hero stats",
  "text-80": "Oversized display type and key metrics",
  "text-72": "Large display headlines",
  "text-70": "Prominent stats and hero figures",
  "text-64": "Display stats and emphasis numbers",
  "text-header-stat": "Header or masthead statistics",
  "text-40": "Large body or small display lines",
  "text-40-s": "40px scale with tighter mobile ramp",
  "text-36": "Lead paragraphs and prominent subheads",
  "text-32": "Intro copy and emphasized body",
  "text-30": "Supporting lead text",
  "text-24": "Card titles and UI emphasis",
  "text-22": "Subheadings and navigation labels",
  "text-20": "Large body and card descriptions",
  "text-20--extra-clamp": "20px with alternate fluid ramp",
  "text-18": "Default long-form body text",
  "text-17": "Compact UI body and captions",
  "text-16": "Secondary body and dense UI",
  "text-16--clamp": "16px with alternate fluid ramp",
  "text-15": "Metadata, labels, and fine print",
  "text-15--clamp": "15px with alternate fluid ramp",
  "text-14": "Small labels, footnotes, and legal",
  prose:
    "Long-form article and CMS HTML (headings, lists, links); paragraphs use text-18 scale",
};

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Extract first top-level block for a class like `.text-h1` or `h1, .text-h1` */
function extractClassBlock(scss: string, className: string): string | null {
  const dotted = `.${className}`;
  const patterns = [
    new RegExp(
      `^h[1-6],\\s*\\n\\s*${escapeRegExp(dotted)}\\s*\\{`,
      "m",
    ),
    new RegExp(`^${escapeRegExp(dotted)}\\s*\\{`, "m"),
  ];
  for (const re of patterns) {
    const m = scss.match(re);
    if (!m) continue;
    const start = m.index! + m[0].length - 1;
    let depth = 0;
    for (let i = start; i < scss.length; i++) {
      const c = scss[i];
      if (c === "{") depth++;
      else if (c === "}") {
        depth--;
        if (depth === 0) return scss.slice(start + 1, i);
      }
    }
  }
  return null;
}

function extractClampMaxPx(block: string): string | null {
  const clampLine = block.split("\n").find((l) => l.includes("@include clamp"));
  if (!clampLine) return null;
  const pxVals: string[] = [];
  const re = /rem\((\d+(?:\.\d+)?)px\)/g;
  let mm: RegExpExecArray | null;
  while ((mm = re.exec(clampLine)) !== null) {
    pxVals.push(mm[1]!);
  }
  if (pxVals.length === 0) return null;
  return pxVals[pxVals.length - 1]!;
}

function extractApplyLeadingTracking(block: string): {
  leading: string;
  tracking: string;
} {
  const applyLine = block
    .split("\n")
    .find((l) => l.trim().startsWith("@apply") && !l.includes("@apply prose"));
  if (!applyLine) return { leading: "—", tracking: "—" };
  const leadingM = applyLine.match(/leading-\[([^\]]+)\]/);
  const trackingM = applyLine.match(/tracking-\[([^\]]+)\]/);
  return {
    leading: leadingM ? leadingM[1]! : "—",
    tracking: trackingM ? trackingM[1]! : "—",
  };
}

function buildTypographyRows(scss: string): string {
  const lines: string[] = [];
  for (const cls of TYPOGRAPHY_CLASS_ORDER) {
    const block = extractClassBlock(scss, cls);
    const use = TYPOGRAPHY_USE[cls] ?? "Typography utility";
    if (cls === "prose") {
      lines.push(
        `| .${cls} | Body ~18px in paragraphs (via \`@extend\`); \`space-y-6 font-body\` | ${use} |`,
      );
      continue;
    }
    if (!block) {
      lines.push(`| .${cls} | — | ${use} |`);
      continue;
    }
    const maxPx = extractClampMaxPx(block);
    const { leading, tracking } = extractApplyLeadingTracking(block);
    const sizeCell = maxPx
      ? `~${maxPx}px fluid · leading ${leading} · tracking ${tracking}`
      : `— · leading ${leading} · tracking ${tracking}`;
    lines.push(`| .${cls} | ${sizeCell} | ${use} |`);
  }
  return lines.join("\n");
}

function colorUseDescription(name: string): string {
  const map: Record<string, string> = {
    navy: "Primary dark background, headlines, and default text on light UI",
    blue: "Primary interactive blue and links accent",
    lightBlue: "Bright accent and highlights on dark backgrounds",
    brightGreen: "High-contrast accent and success highlights",
    lightGreen: "Positive and growth accents",
    green: "Primary green for success and sports-positive states",
    lightPurple: "Soft purple surfaces and secondary accents",
    purple: "Deep purple for emphasis and secondary brand",
    lightOrange: "Warm light surfaces and soft highlights",
    orange: "Primary orange accent and CTAs",
    lightRed: "Soft error or warning surfaces",
    red: "Error, alert, and destructive emphasis",
    black: "True black fills and maximum contrast",
    lightGrey: "Page and section backgrounds",
    lavenderGrey: "Subtle borders and dividers",
    white: "Primary light surfaces and inverse text on dark",
    snow: "Off-white backgrounds and subtle cards",
  };
  return map[name] ?? "Semantic color token for backgrounds and text";
}

function buildColorRows(): string {
  return Object.entries(colors)
    .map(([name, hex]) => {
      const tw = `bg-${name} / text-${name}`;
      return `| ${name} | ${hex} | ${tw} | ${colorUseDescription(name)} |`;
    })
    .join("\n");
}

const SCREEN_ORDER = ["xxs", "xs", "sm", "md", "960", "lg", "xl", "2xl", "3xl"];

function getSortedScreenEntries(): [string, string][] {
  const entries = Object.entries(screens) as [string, string][];
  entries.sort((a, b) => {
    const ia = SCREEN_ORDER.indexOf(a[0]);
    const ib = SCREEN_ORDER.indexOf(b[0]);
    if (ia === -1 && ib === -1) return a[0].localeCompare(b[0]);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
  return entries;
}

function buildBreakpointRows(): string {
  return getSortedScreenEntries()
    .map(([token, width]) => `| ${token} | ${width} | ${token}: |`)
    .join("\n");
}

/** Balanced `{ ... }` starting at str[0] === `{` */
function takeBalancedBraces(str: string): string {
  if (!str.startsWith("{")) return "";
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i]!;
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return str.slice(0, i + 1);
    }
  }
  return "";
}

/** Pull full `type Name = …` or `interface Name … { … }` from declaration source for catalog readability */
function extractNamedTypeDefinition(full: string, name: string): string | null {
  const typeMark = `type ${name} =`;
  const ti = full.indexOf(typeMark);
  if (ti !== -1) {
    let rest = full.slice(ti + typeMark.length).trimStart();
    if (rest.startsWith("{")) {
      const body = takeBalancedBraces(rest);
      return `${typeMark} ${body};`;
    }
    const semi = rest.indexOf(";");
    if (semi !== -1) return `${typeMark} ${rest.slice(0, semi + 1)}`;
  }
  const ifaceMark = `interface ${name}`;
  const ii = full.indexOf(ifaceMark);
  if (ii !== -1) {
    const brace = full.indexOf("{", ii);
    if (brace === -1) return null;
    const fromBrace = full.slice(brace);
    const body = takeBalancedBraces(fromBrace);
    return full.slice(ii, brace + body.length);
  }
  return null;
}

const SPACING_SECTION = `## Spacing

Standard spacing patterns to use consistently across all pages.

| Pattern | Classes | Use for |
|---|---|---|
| Section padding | py-16 md:py-24 | Between major page sections |
| Card gap | gap-6 md:gap-8 | Between cards in a grid |
| Card inner | p-6 md:p-8 | Inside card containers |
| Heading to body | mb-4 md:mb-6 | Between a heading and paragraph |
| Body to CTA | mt-6 md:mt-8 lg:mt-10 | Between body text and a button |
`;

/** Extra spacing keys from [src/tokens/tokens.ts](src/tokens/tokens.ts) (Tailwind extension). */
function buildSpacingScaleRows(): string {
  return Object.entries(spacing)
    .map(([k, v]) => `| \`${k}\` | ${v} | Extended scale; use via Tailwind config or match in CSS |`)
    .join("\n");
}

/** Shared “foundations” body: typography → colors → breakpoints → container → spacing patterns + scale. */
function buildCoreReferenceMarkdown(typographyScss: string): string {
  return `## Typography

Use these classes for all text. Never use raw Tailwind font-size classes like text-xl or text-5xl.

| Class | Size | Use for |
|---|---|---|
${buildTypographyRows(typographyScss)}

## Colors

Never hardcode hex values. Always use the Tailwind token class.

| Token | Hex | Tailwind class | Use for |
|---|---|---|---|
${buildColorRows()}

## Breakpoints

Always design mobile-first. Add responsive prefixes to scale up.

| Token | Width | Tailwind prefix |
|---|---|---|
${buildBreakpointRows()}

${buildContainerSection()}

${SPACING_SECTION}

## Spacing scale (extended tokens)

These values extend the default Tailwind spacing map in the brand preset. Prefer them when the preset is available.

| Key | Rem | Notes |
|---|---|---|
${buildSpacingScaleRows()}
`;
}

/** Mirrors [src/styles/_container.scss](src/styles/_container.scss) */
const CONTAINER_ROWS: { modifier: string; maxPx: string; note: string }[] = [
  {
    modifier: ".container",
    maxPx: "1280px (max-width: 80rem)",
    note: "Default centered content; `mx-auto`, `px-5`, `md:px-6`",
  },
  {
    modifier: ".container--no-mobile-padding",
    maxPx: "(inherits default max)",
    note: "Edge-to-edge on small screens; `md:px-6` restores padding",
  },
  {
    modifier: ".container.header-container",
    maxPx: "1376px (max-width: 86rem)",
    note: "Header bar width; `lg:px-8`",
  },
  {
    modifier: ".inner-container",
    maxPx: "(padding only)",
    note: "Nested horizontal padding: `px-6 md:px-10 lg:px-[4.5rem]`",
  },
  {
    modifier: ".container--676px",
    maxPx: "676px",
    note: "Narrow reading column (e.g. legal or forms)",
  },
  {
    modifier: ".container--736px",
    maxPx: "736px",
    note: "Medium-narrow article or card column",
  },
  {
    modifier: ".container--846px",
    maxPx: "846px",
    note: "Single-column content width",
  },
  {
    modifier: ".container--1014px",
    maxPx: "1014px",
    note: "Medium content band",
  },
  {
    modifier: ".container--1062px",
    maxPx: "1062px",
    note: "Medium-wide content band",
  },
  {
    modifier: ".container--1292px",
    maxPx: "1292px",
    note: "Wide layouts under full default container",
  },
  {
    modifier: ".container--1376px",
    maxPx: "1376px",
    note: "Wide marketing sections (matches header max)",
  },
  {
    modifier: ".container--extra-small",
    maxPx: "1110px",
    note: "Slightly narrower than default for dense grids",
  },
  {
    modifier: ".container--small",
    maxPx: "1171px",
    note: "Compact wide layouts",
  },
  {
    modifier: ".container--large",
    maxPx: "1368px",
    note: "Extra-wide content without full bleed",
  },
  {
    modifier: ".container--extra-large",
    maxPx: "1920px",
    note: "Maximum width for full-bleed style sections",
  },
];

function buildContainerSection(): string {
  const parsed = CONTAINER_ROWS;
  const table = parsed
    .map((r) => `| ${r.modifier} | ${r.maxPx} | ${r.note} |`)
    .join("\n");
  const tokenRows = Object.entries(containerWidthsPx)
    .map(([k, v]) => `| ${k} | ${v}px | Named width in tokens (containerWidthsPx) |`)
    .join("\n");
  return `## Container

Use \`.container\` and modifiers for horizontal layout; prefer tokens for semantic width names.

| Class / token | Max width | Usage |
|---|---|---|
${table}

**Semantic widths** ([src/tokens/containers.ts](src/tokens/containers.ts)):

| Name | Width | Notes |
|---|---|---|
${tokenRows}
`;
}

const EXCLUDED_VALUE_EXPORTS = new Set([
  "colors",
  "fontFamily",
  "screens",
  "spacing",
  "MARKETING_SITE_ORIGIN",
  "resolveMarketingNavUrl",
  "rewriteHeaderNavToMarketingSite",
]);

function parseExportNames(exportLine: string): { types: Set<string>; values: string[] } {
  const types = new Set<string>();
  const values: string[] = [];
  const inner = exportLine.replace(/^\s*export\s*\{\s*/, "").replace(/\s*\}\s*;?\s*$/, "");
  const parts = inner.split(",").map((s) => s.trim()).filter(Boolean);
  for (const p of parts) {
    if (p.startsWith("type ")) {
      types.add(p.replace(/^type\s+/, "").trim());
    } else {
      values.push(p);
    }
  }
  return { types, values };
}

/**
 * Value exports from `export { ... };` lines in the package .d.mts.
 * The catalog follows the public API in dist; components that use `export default` must also be
 * re-exported as named bindings from barrel files (`export { default as X }`) or they will not
 * appear in the bundle or here.
 */
function getComponentExports(dts: string): string[] {
  const types = new Set<string>();
  const values: string[] = [];
  const re = /export\s*\{([^}]+)\}\s*;/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(dts)) !== null) {
    const { types: t, values: v } = parseExportNames(`export {${m[1]}}`);
    for (const name of t) types.add(name);
    values.push(...v);
  }
  if (values.length === 0) {
    throw new Error("Could not find export { } in dist/index.d.mts");
  }
  const seen = new Set<string>();
  const out: string[] = [];
  for (const v of values) {
    if (seen.has(v)) continue;
    seen.add(v);
    if (!types.has(v) && !EXCLUDED_VALUE_EXPORTS.has(v)) out.push(v);
  }
  return out;
}

function findExportedDeclaration(sourceFile: ts.SourceFile, name: string): ts.Node | undefined {
  let found: ts.Node | undefined;
  function visit(node: ts.Node) {
    if (found) return;
    if (ts.isFunctionDeclaration(node) && node.name?.text === name) {
      found = node;
      return;
    }
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name) {
      found = node;
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return found;
}

function getPropsForExport(
  checker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  name: string,
  fullDtsText: string,
): string {
  const decl = findExportedDeclaration(sourceFile, name);
  if (!decl) return "(unknown)";
  if (ts.isFunctionDeclaration(decl)) {
    if (!decl.parameters.length) return "(no props)";
    const sig = checker.getSignatureFromDeclaration(decl);
    if (!sig?.getParameters().length) return "(no props)";
    const param = decl.parameters[0]!;
    const t = checker.getTypeAtLocation(param);
    let s = checker.typeToString(t, undefined, ts.TypeFormatFlags.NoTruncation);
    const aliasLike = /^[A-Za-z][A-Za-z0-9]*$/.test(s.trim());
    if (aliasLike || /Props$/.test(s.trim())) {
      const expanded = extractNamedTypeDefinition(fullDtsText, s.trim());
      if (expanded) return expanded;
    }
    return s;
  }
  if (ts.isVariableDeclaration(decl)) {
    if (decl.type) {
      const t = checker.getTypeAtLocation(decl.type);
      let s = checker.typeToString(t, undefined, ts.TypeFormatFlags.NoTruncation);
      const aliasLike = /^[A-Za-z][A-Za-z0-9]*$/.test(s.trim());
      if (aliasLike) {
        const expanded = extractNamedTypeDefinition(fullDtsText, s.trim());
        if (expanded) return expanded;
      }
      return s;
    }
    if (decl.initializer) {
      const t = checker.getTypeAtLocation(decl.initializer);
      return checker.typeToString(t, undefined, ts.TypeFormatFlags.NoTruncation);
    }
  }
  return "(no typed props)";
}

function componentUseLine(name: string): string {
  const map: Record<string, string> = {
    Button: "All CTAs and primary actions",
    Link: "Internal and external navigation with brand styling",
    Header: "Global site header and navigation",
    Footer: "Site footer with columns, social, and legal",
    SiteShell: "Wraps page content with header/footer wiring",
    Providers: "Wraps app with brand kit context providers",
    ComponentRenderer: "Renders CMS-driven section components",
    GlobalContext: "React context for global shell data (use with providers)",
    LinkTypeRenderer: "Resolves CMS link types to Link components",
  };
  if (map[name]) return map[name]!;
  if (name.endsWith("Icon") || /Logo$/.test(name) || /Arrow|Circle|Spring|Lines|Chevron|Icon$/.test(name)) {
    return "Brand SVG / UI glyph; use inside headers, footers, or composed UI";
  }
  return "Composable UI from the brand kit";
}

function componentUsageExample(name: string, propsStr: string): string {
  if (propsStr === "(no props)" || propsStr === "void") {
    return `<${name} />`;
  }
  if (name === "Button") {
    return `<Button button={{ type: "default", background_color: "navy" }} />`;
  }
  if (name === "Header") {
    return `<Header homeHref="https://www.geniussports.com" />`;
  }
  if (name === "Footer") {
    return `<Footer {...footerData} />`;
  }
  if (name === "SiteShell") {
    return `<SiteShell homeHref="https://www.geniussports.com">{children}</SiteShell>`;
  }
  if (name === "Providers") {
    return `<Providers options={options}>{children}</Providers>`;
  }
  if (name === "GlobalContext") {
    return `<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>`;
  }
  if (name === "Link") {
    return `<Link href="/path">Label</Link>`;
  }
  if (name === "ComponentRenderer") {
    return `<ComponentRenderer sectionBG={bg} components={sections} />`;
  }
  if (name === "ChevronDown") {
    return `<ChevronDown width="12" height="12" />`;
  }
  if (name === "LinkTypeRenderer") {
    return `<LinkTypeRenderer link={link} />`;
  }
  return `<${name} /* see Props */ />`;
}

function buildComponentsSection(dtsPath: string, dtsText: string, names: string[]): string {
  const program = ts.createProgram([dtsPath], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    jsx: ts.JsxEmit.React,
  });
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(dtsPath);
  if (!sourceFile) throw new Error(`Could not load ${dtsPath}`);

  const chunks: string[] = [];
  for (const name of names.sort()) {
    const propsStr = getPropsForExport(checker, sourceFile, name, dtsText);
    const use = componentUseLine(name);
    const usage = componentUsageExample(name, propsStr);

    chunks.push(`### ${name}
Import: \`import { ${name} } from "${PKG_NAME}"\`
Use for: ${use}

Props:
\`\`\`ts
${propsStr}
\`\`\`

Usage: \`${usage}\`
`);
  }
  return `## Components

For each component, use the exact import path shown. Never build these from scratch.

${chunks.join("\n")}`;
}

function buildFoundationsMarkdown(typographyScss: string): string {
  return `---

# Genius Sports Brand Kit — Foundations (no React components)

This file is auto-generated. Do not edit manually. Run \`npm run catalog\` to regenerate.

## How to use this file

Use this bundle for **Vite SPAs**, **Lovable**, **Bolt**, **Cursor**, or any stack that should **look on-brand** without installing the full React kit.

1. **Paste** this file (or the relevant sections) into your AI’s project instructions / knowledge base.
2. **Import** CSS from the published package:
   - \`@import "${PKG_NAME}/foundations/fonts.css";\`
   - \`@import "${PKG_NAME}/foundations/brand-tokens.css";\`
3. **Fonts** — Binary files live in \`foundations/fonts/*.woff2\` next to \`fonts.css\` (copied from \`src/assets/fonts\` when the catalog runs). **Copy the entire \`foundations/\` folder** into another repo to get \`FOUNDATIONS.md\`, \`brand-tokens.css\`, \`fonts.css\`, and webfonts in one place. When using the npm package, \`@import\` paths still work as below.

For **full marketing pages** with header, footer, and CMS data, use the main package entry and [\`CATALOG.md\`](../CATALOG.md) (components section).

${buildCoreReferenceMarkdown(typographyScss)}

## CSS companion files

| File | Role |
|---|---|
| \`foundations/brand-tokens.css\` | \`:root\` CSS variables for colors, breakpoints, spacing keys, container widths, font family names |
| \`foundations/fonts.css\` | \`@font-face\` for heading and body fonts (loads \`./fonts/*.woff2\`) |
| \`foundations/fonts/*.woff2\` | Webfont binaries (mirrors \`src/assets/fonts\`) |
`;
}

function cssEscapeSpacingKey(key: string): string {
  return key.replace(/\./g, "-");
}

function writeBrandTokensCss(outPath: string) {
  const colorLines = Object.entries(colors).map(
    ([name, hex]) => `  --color-${name}: ${hex};`,
  );
  const screenLines = getSortedScreenEntries().map(([name, w]) => {
    const safe = String(name).replace(/[^a-zA-Z0-9]/g, "");
    return `  --screen-${safe}: ${w};`;
  });
  const spacingLines = Object.entries(spacing).map(([k, v]) => {
    const id = cssEscapeSpacingKey(k);
    return `  --spacing-${id}: ${v};`;
  });
  const containerLines = Object.entries(containerWidthsPx).map(
    ([k, v]) => `  --container-${k}: ${v}px;`,
  );

  const css = `/**
 * Genius Sports brand tokens as CSS custom properties.
 * Auto-generated — run \`npm run catalog\` to regenerate.
 * Source: src/tokens/tokens.ts, src/tokens/containers.ts
 */
:root {
  /* Font family names (load faces via foundations/fonts.css or next/font) */
  --font-heading: "${fontFamily.heading}", ui-sans-serif, system-ui, sans-serif;
  --font-body: "${fontFamily.body}", ui-sans-serif, system-ui, sans-serif;

  /* Colors (${PKG_NAME} / Tailwind theme) */
${colorLines.join("\n")}

  /* Breakpoints (reference; use in @media or match Tailwind screens) */
${screenLines.join("\n")}

  /* Extended spacing scale (rem) */
${spacingLines.join("\n")}

  /* Semantic container widths (px) */
${containerLines.join("\n")}
}
`;

  fs.writeFileSync(outPath, css, "utf8");
  console.log(`Wrote ${outPath}`);
}

function copyFontAssetsToFoundations(): void {
  if (!fs.existsSync(SOURCE_FONTS_DIR)) {
    console.error(`Missing font source directory: ${SOURCE_FONTS_DIR}`);
    process.exit(1);
  }
  fs.mkdirSync(FOUNDATIONS_FONTS_DIR, { recursive: true });
  for (const file of FOUNDATIONS_FONT_FILES) {
    const from = path.join(SOURCE_FONTS_DIR, file);
    const to = path.join(FOUNDATIONS_FONTS_DIR, file);
    if (!fs.existsSync(from)) {
      console.error(`Missing font file: ${from}`);
      process.exit(1);
    }
    fs.copyFileSync(from, to);
  }
  console.log(
    `Copied ${FOUNDATIONS_FONT_FILES.length} font files to ${FOUNDATIONS_FONTS_DIR}`,
  );
}

function writeFontsCss(outPath: string) {
  /**
   * Paths are relative to foundations/fonts.css → ./fonts/*.woff2 (self-contained foundations/).
   * Matches src/fonts.ts (next/font/local); binaries are copied by copyFontAssetsToFoundations().
   */
  const css = `/**
 * Brand webfonts (@font-face). Font files live in ./fonts/ next to this file.
 * Auto-generated — run \`npm run catalog\` to regenerate (copies from src/assets/fonts).
 */
@font-face {
  font-family: "${fontFamily.heading}";
  src: url("./fonts/ESKlarheitKurrent-Bk_TRIAL.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "${fontFamily.heading}";
  src: url("./fonts/ESKlarheitKurrent-Md_TRIAL.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "${fontFamily.heading}";
  src: url("./fonts/ESKlarheitKurrent-Smbd_TRIAL.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "${fontFamily.body}";
  src: url("./fonts/RedHatText-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "${fontFamily.body}";
  src: url("./fonts/RedHatText-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
`;

  fs.writeFileSync(outPath, css, "utf8");
  console.log(`Wrote ${outPath}`);
}

function main() {
  if (!fs.existsSync(TYPOGRAPHY_PATH) || !fs.existsSync(CONTAINER_SCSS_PATH)) {
    console.error("Missing typography or container SCSS source files.");
    process.exit(1);
  }

  const typographyScss = fs.readFileSync(TYPOGRAPHY_PATH, "utf8");

  if (!fs.existsSync(FOUNDATIONS_DIR)) {
    fs.mkdirSync(FOUNDATIONS_DIR, { recursive: true });
  }

  copyFontAssetsToFoundations();

  const foundationsMd = buildFoundationsMarkdown(typographyScss);
  fs.writeFileSync(FOUNDATIONS_MD_PATH, foundationsMd, "utf8");
  console.log(`Wrote ${FOUNDATIONS_MD_PATH}`);

  writeBrandTokensCss(FOUNDATIONS_BRAND_TOKENS_CSS_PATH);
  writeFontsCss(FOUNDATIONS_FONTS_CSS_PATH);

  if (!fs.existsSync(DTS_PATH)) {
    console.error(
      `Missing ${DTS_PATH}. Run npm run build first so declaration files are emitted.`,
    );
    process.exit(1);
  }

  const dts = fs.readFileSync(DTS_PATH, "utf8");
  const componentNames = getComponentExports(dts);

  const md = `---

# Genius Sports Brand Kit — Cursor Reference Catalog

This file is auto-generated. Do not edit manually. Run \`npm run catalog\` to regenerate.

## How to use this file
When building any UI, read this file first. Use only the classes, tokens, and components listed here. Never invent custom values for typography, color, spacing, or buttons.

${buildCoreReferenceMarkdown(typographyScss)}

${buildComponentsSection(DTS_PATH, dts, componentNames)}
`;

  fs.writeFileSync(OUT_PATH, md, "utf8");
  console.log(`Wrote ${OUT_PATH}`);
}

main();
