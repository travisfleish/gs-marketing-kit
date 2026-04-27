"use client";

import { colors, screens, spacing } from "@genius-sports/gs-brand-kit";
import type { CatalogHeading } from "../../lib/parseCatalog";
import { TYPOGRAPHY_CLASSES } from "../../lib/typography-classes";
import { CatalogComponentDemo } from "./catalog-component-demos";

const CONTAINER_CLASSES: { className: string; note: string }[] = [
  { className: "container", note: "Default 1280px band" },
  {
    className: "container--no-mobile-padding",
    note: "Edge-to-edge on small screens",
  },
  { className: "inner-container", note: "Nested horizontal padding" },
  { className: "container--676px", note: "676px column" },
  { className: "container--736px", note: "736px column" },
  { className: "container--846px", note: "846px column" },
  { className: "container--1014px", note: "1014px band" },
  { className: "container--1062px", note: "1062px band" },
  { className: "container--1292px", note: "1292px band" },
  { className: "container--1376px", note: "1376px — matches header max" },
  { className: "container--extra-small", note: "1110px" },
  { className: "container--small", note: "1171px" },
  { className: "container--large", note: "1368px" },
  { className: "container--extra-large", note: "1920px max bleed" },
];

function SectionShell({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-lavenderGrey bg-white py-14 md:py-20"
    >
      <div className="container">
        {kicker && (
          <p className="text-14 mb-2 font-medium uppercase tracking-wide text-blue">
            {kicker}
          </p>
        )}
        <h2 className="text-h4 text-navy mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function DemoShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-h6 text-navy mb-4">{title}</h3>
      <div className="rounded-xl border border-lavenderGrey bg-snow p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

function FoundationHowTo() {
  return (
    <div className="max-w-3xl space-y-4 text-18 text-navy/90">
      <p>
        When building any UI, read <code className="text-14">CATALOG.md</code>{" "}
        first. Use only the classes, tokens, and components listed there. Never
        invent custom values for typography, color, spacing, or buttons.
      </p>
      <p className="text-15 text-navy/70">
        This page mirrors every <code className="text-14">##</code> and{" "}
        <code className="text-14">###</code> section from the catalog with live
        tokens (via the Tailwind preset) and kit components.
      </p>
    </div>
  );
}

function FoundationTypography() {
  return (
    <div className="space-y-6">
      <p className="text-16 text-navy/80">
        Sample line per catalog class (fluid sizes vary by viewport).
      </p>
      <div className="grid gap-6">
        {TYPOGRAPHY_CLASSES.map((cls) => (
          <div
            key={cls}
            className="border-b border-lavenderGrey/80 pb-4 last:border-0"
          >
            <p className={`${cls} text-navy`}>
              {cls} — The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-14 mt-2 font-mono text-navy/50">{cls}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoundationColors() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {(Object.entries(colors) as [string, string][]).map(([name, hex]) => (
        <div
          key={name}
          className="flex items-center gap-4 rounded-lg border border-lavenderGrey p-4"
        >
          <div
            className="h-14 w-14 shrink-0 rounded-md border border-lavenderGrey shadow-inner"
            style={{ backgroundColor: hex }}
            title={hex}
          />
          <div>
            <p className="text-16 font-medium text-navy">{name}</p>
            <p className="text-14 text-navy/60">{hex}</p>
            <p className="text-12 text-navy/45 mt-1">
              bg-{name} / text-{name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FoundationBreakpoints() {
  return (
    <div className="overflow-x-auto">
      <table className="text-15 w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="border-b border-navy/20">
            <th className="py-2 pr-4 font-medium text-navy">Token</th>
            <th className="py-2 pr-4 font-medium text-navy">Width</th>
            <th className="py-2 font-medium text-navy">Prefix</th>
          </tr>
        </thead>
        <tbody>
          {(Object.entries(screens) as [string, string][]).map(
            ([token, width]) => (
              <tr key={token} className="border-b border-lavenderGrey">
                <td className="py-2 pr-4 font-mono text-14">{token}</td>
                <td className="py-2 pr-4">{width}</td>
                <td className="py-2 font-mono text-14">{token}:</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

function FoundationContainers() {
  return (
    <div className="space-y-8">
      <p className="text-16 text-navy/80">
        Each block uses the listed class on an inner band; outer area is{" "}
        <span className="font-mono text-14">bg-lavenderGrey/40</span> to show
        max width.
      </p>
      {CONTAINER_CLASSES.map(({ className, note }) => (
        <div key={className}>
          <p className="text-14 mb-2 font-mono text-navy/70">{className}</p>
          <p className="text-14 mb-2 text-navy/55">{note}</p>
          <div className="rounded-lg bg-lavenderGrey/40 px-2 py-4">
            <div className={`${className} mx-auto bg-white/90 py-4 text-center text-14 text-navy shadow-sm`}>
              Content band
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FoundationSpacing() {
  return (
    <div className="max-w-3xl space-y-6 text-16 text-navy/85">
      <div className="rounded-lg border border-dashed border-blue/40 p-6 md:p-8">
        <p className="text-h6 mb-4 md:mb-6">Heading to body</p>
        <p>Section padding: py-16 md:py-24 (see vertical rhythm of this page).</p>
      </div>
      <p className="text-15 text-navy/70">
        Card gap: <code className="text-14">gap-6 md:gap-8</code> · Card inner:{" "}
        <code className="text-14">p-6 md:p-8</code> · Body to CTA:{" "}
        <code className="text-14">mt-6 md:mt-8 lg:mt-10</code>
      </p>
    </div>
  );
}

function FoundationSpacingScale() {
  return (
    <div className="overflow-x-auto">
      <table className="text-15 w-full min-w-[400px] border-collapse text-left">
        <thead>
          <tr className="border-b border-navy/20">
            <th className="py-2 pr-4 font-medium text-navy">Key</th>
            <th className="py-2 font-medium text-navy">Rem</th>
          </tr>
        </thead>
        <tbody>
          {(Object.entries(spacing) as [string, string][]).map(([k, v]) => (
            <tr key={k} className="border-b border-lavenderGrey">
              <td className="py-2 pr-4 font-mono text-14">{k}</td>
              <td className="py-2">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderFoundation(id: string) {
  switch (id) {
    case "how-to-use-this-file":
      return <FoundationHowTo />;
    case "typography":
      return <FoundationTypography />;
    case "colors":
      return <FoundationColors />;
    case "breakpoints":
      return <FoundationBreakpoints />;
    case "container":
      return <FoundationContainers />;
    case "spacing":
      return <FoundationSpacing />;
    case "spacing-scale-extended-tokens":
      return <FoundationSpacingScale />;
    default:
      return null;
  }
}

export default function CatalogShowcase({
  headings,
}: {
  headings: CatalogHeading[];
}) {
  const foundationH2 = headings.filter(
    (h) => h.level === 2 && h.id !== "components"
  );
  const componentH3 = headings.filter((h) => h.level === 3);

  return (
    <div className="min-h-screen bg-lightGrey">
      <header className="border-b border-lavenderGrey bg-white">
        <div className="container py-10 md:py-14">
          <p className="text-14 font-medium uppercase tracking-wide text-blue">
            Genius Sports · Brand kit
          </p>
          <h1 className="text-h2 mt-2 text-navy">Catalog explorer</h1>
          <p className="text-18 mt-4 max-w-2xl text-navy/80">
            One scrollable SPA mapped to{" "}
            <code className="text-14">CATALOG.md</code>: foundations (tokens)
            and every exported component entry.
          </p>
        </div>
      </header>

      <div className="container pb-24 pt-8 md:flex md:items-start md:gap-10 lg:gap-14">
        <nav
          aria-label="Catalog sections"
          className="mb-10 shrink-0 md:sticky md:top-8 md:mb-0 md:max-h-[calc(100vh-4rem)] md:w-56 md:overflow-y-auto lg:w-64"
        >
          <p className="text-14 mb-3 font-medium text-navy/60">On this page</p>
          <ul className="space-y-1 text-14">
            {headings.map((h) => (
              <li
                key={`${h.level}-${h.id}`}
                style={{ paddingLeft: h.level === 3 ? "0.75rem" : 0 }}
              >
                <a
                  href={`#${h.id}`}
                  className={`block rounded py-1 text-navy/80 hover:bg-snow hover:text-blue ${
                    h.level === 3 ? "text-13" : "font-medium"
                  }`}
                >
                  {h.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 flex-1">
          {foundationH2.map((h) => {
            const inner = renderFoundation(h.id);
            if (!inner) return null;
            return (
              <SectionShell key={h.id} id={h.id} title={h.title}>
                {inner}
              </SectionShell>
            );
          })}

          <SectionShell
            id="components"
            kicker="Reference"
            title="Components"
          >
            <p className="text-16 mb-10 max-w-3xl text-navy/80">
              Imports match the catalog. Each card is a minimal, good-faith
              preview; CMS-heavy blocks include a note instead of dummy data.
            </p>
          </SectionShell>

          {componentH3.map((h) => (
            <section
              key={h.id}
              id={h.id}
              className="scroll-mt-24 border-b border-lavenderGrey bg-white py-12 md:py-16"
            >
              <div className="container">
                <DemoShell title={h.title}>
                  <CatalogComponentDemo componentId={h.id} />
                </DemoShell>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
