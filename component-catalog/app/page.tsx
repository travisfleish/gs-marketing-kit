"use client";

import { useState } from "react";
import { Button } from "@genius-sports/gs-brand-kit";

const IMPORT_SNIPPET = `import { Button } from "@genius-sports/gs-brand-kit"`;

const TYPES = ["solid", "slim", "outline", "header"] as const;
const COLORS = ["navy", "white", "lightGrey", "white15", "navy5"] as const;

/** Maps catalog labels to Button props expected by the kit implementation. */
function toButtonType(t: (typeof TYPES)[number]) {
  return t === "solid" ? ("default" as const) : t;
}

function toBackgroundColor(c: (typeof COLORS)[number]) {
  return c === "lightGrey" ? ("light-grey" as const) : c;
}

const VARIANT_COPY: Record<
  (typeof TYPES)[number],
  Record<(typeof COLORS)[number], string>
> = {
  solid: {
    navy: "Primary call-to-action on light sections; highest contrast brand fill.",
    white: "CTA on dark hero, footer, or navy bands where a light pill is needed.",
    lightGrey: "Soft neutral CTA on white or snow when you want less weight than navy.",
    white15: "Glass-style CTA on imagery or video where the background should show through.",
    navy5: "Tinted, low-contrast CTA for secondary actions that should stay in the brand family.",
  },
  slim: {
    navy: "Compact primary action in cards, tables, or tight horizontal toolbars.",
    white: "Compact light control on dark strips or compact nav areas.",
    lightGrey: "Compact neutral chip-style action on pale layouts.",
    white15: "Compact translucent control for overlays and media-heavy rows.",
    navy5: "Compact soft CTA for de-emphasized or tertiary actions.",
  },
  outline: {
    navy: "Outlined emphasis on light backgrounds when a filled button feels too heavy.",
    white: "Outlined light treatment on navy or photography for a minimal chrome look.",
    lightGrey: "Neutral outline for forms and secondary paths on white or snow.",
    white15: "Translucent outline for floating UI over rich or variable backgrounds.",
    navy5: "Subtle outline paired with a whisper of fill for tertiary CTAs.",
  },
  header: {
    navy: "Nav and header bars on light backdrops; matches global header button rhythm.",
    white: "Nav and header on dark or navy shells where the control must read as light.",
    lightGrey: "Low-emphasis header control when pairing with many other header links.",
    white15: "Header pill on imagery or transparent headers with soft contrast.",
    navy5: "Soft header CTA for auxiliary actions next to a stronger primary.",
  },
};

/** Preview tile backgrounds so each button reads correctly (navy5/white15 need dark tile; white pill needs snow only for solid). */
function previewTileClassName(
  type: (typeof TYPES)[number],
  color: (typeof COLORS)[number],
) {
  if (color === "white15" || color === "navy5") {
    return "flex min-h-[120px] w-full items-center justify-center rounded-xl bg-navy p-6";
  }
  if (color === "white" && type !== "solid") {
    return "flex min-h-[120px] w-full items-center justify-center rounded-xl bg-navy p-6";
  }
  return "flex min-h-[120px] w-full items-center justify-center rounded-xl bg-snow p-6";
}

export default function Page() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(IMPORT_SNIPPET);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <header className="mb-12">
          <h1 className="font-heading text-4xl text-navy">Button</h1>
          <p className="mt-3 max-w-2xl font-body text-navy/70">
            Animated CTA button with multiple style types and background color
            options.
          </p>
        </header>

        <section className="mb-12 rounded-2xl bg-snow p-8 md:p-10">
          <h2 className="mb-4 font-heading text-2xl text-navy">Import</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <pre className="min-w-0 flex-1 overflow-x-auto rounded-lg bg-navy p-4 font-mono text-sm text-white">
              <code>{IMPORT_SNIPPET}</code>
            </pre>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-3 font-body text-sm font-medium text-navy transition hover:bg-navy/5"
              aria-label={copied ? "Copied" : "Copy import to clipboard"}
            >
              {copied ? (
                <>
                  <svg
                    className="h-4 w-4 text-green"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        </section>

        <section className="mb-12 rounded-2xl bg-snow p-8 md:p-10">
          <h2 className="mb-6 font-heading text-2xl text-navy">Variants</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.flatMap((type) =>
              COLORS.map((color) => (
                <article
                  key={`${type}-${color}`}
                  className="rounded-xl border border-navy/10 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-heading text-sm font-semibold text-navy">
                    {type}{" "}
                    <span className="font-normal text-navy/50">·</span>{" "}
                    {color}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-snug text-navy/80">
                    {VARIANT_COPY[type][color]}
                  </p>
                </article>
              )),
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-snow p-8 md:p-10">
          <h2 className="mb-8 font-heading text-2xl text-navy">Live Preview</h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {TYPES.flatMap((type) =>
              COLORS.map((color) => {
                return (
                  <div
                    key={`preview-${type}-${color}`}
                    className="flex w-[220px] flex-col items-center gap-3"
                  >
                    <div className={previewTileClassName(type, color)}>
                      <Button
                        link={{ title: "Learn More", url: "#" }}
                        button={{
                          type: toButtonType(type),
                          background_color: toBackgroundColor(color),
                        }}
                      />
                    </div>
                    <p className="text-center font-body text-xs text-navy/50">
                      {type} · {color}
                    </p>
                  </div>
                );
              }),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
