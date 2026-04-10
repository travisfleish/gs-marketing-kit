"use client";

import { useState } from "react";
import TwoColContent, {
  type TwoColContentProps,
} from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/TwoColContent";
import MediaAndStats from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/MediaAndStats";
import StatsGrid from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/StatsGrid";
import ThreeColumnCardGrid from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/ThreeColumnCardGrid";
import type { AssetProps } from "@genius-sports/gs-brand-kit/src/components/elements/media/Asset";

const IMPORT_TWO_COL =
  'import TwoColContent from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/TwoColContent"';
const IMPORT_MEDIA_STATS =
  'import MediaAndStats from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/MediaAndStats"';
const IMPORT_STATS_GRID =
  'import StatsGrid from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/StatsGrid"';
const IMPORT_THREE_COL =
  'import ThreeColumnCardGrid from "@genius-sports/gs-brand-kit/src/components/flexible/content/components/ThreeColumnCardGrid"';

const twoColProps = {
  content: {
    heading: "Built for the speed of sport",
    content:
      "Genius Sports powers the world's biggest leagues with real-time data infrastructure and fan engagement tools.",
    links: {
      links: [
        {
          link: { title: "Learn more", url: "#" },
          type: "button",
          button: { background_color: "navy", type: "default" },
        },
      ],
    },
  },
  media: {
    asset: {
      type: "image",
      image: {
        url: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&auto=format",
        width: 800,
        height: 500,
        alt: "Sports stadium",
        sizes: "(max-width: 768px) 100vw, 50vw",
      },
    },
    asset_mobile: {},
  },
  options: {
    asset_position: "right" as const,
    background_color: "none",
    heading_font_size: { text_size: "default" },
    container_size: "default",
  },
} as unknown as TwoColContentProps;

function CopyImportBlock({ importPath }: { importPath: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(importPath);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
      <pre className="min-w-0 flex-1 overflow-x-auto rounded bg-navy p-4 font-mono text-sm text-white">
        <code>{importPath}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white px-4 py-3 font-body text-sm font-medium text-navy transition hover:bg-navy/5"
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
  );
}

export default function FlexibleContentPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <header className="py-16">
          <h1 className="font-heading text-4xl text-navy">
            Flexible Content Components
          </h1>
          <p className="mt-3 max-w-3xl font-body text-navy/60">
            These are the exact components used on the Genius Sports marketing
            site. Import them directly and pass in your own data.
          </p>
        </header>

        <section className="border-t border-lavenderGrey py-16">
          <h2 className="font-heading text-2xl text-navy">TwoColContent</h2>
          <p className="mt-2 max-w-3xl font-body text-navy/80">
            Two-column layout with text content on one side and a media asset on
            the other. Supports left/right asset position and optional background
            color.
          </p>
          <div className="mt-8">
            <TwoColContent {...twoColProps} />
          </div>
          <div className="mt-8">
            <CopyImportBlock importPath={IMPORT_TWO_COL} />
          </div>
        </section>

        <section className="border-t border-lavenderGrey py-16">
          <h2 className="font-heading text-2xl text-navy">MediaAndStats</h2>
          <p className="mt-2 max-w-3xl font-body text-navy/80">
            Animated stats panel alongside a large and small media asset. Stats
            cycle automatically with a Framer Motion transition.
          </p>
          <div className="mt-8">
            <MediaAndStats
              large_media_item={
                {
                  type: "image",
                  image: {
                    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
                    width: 800,
                    height: 450,
                    alt: "Sports action",
                  },
                } as AssetProps
              }
              small_media_item={
                {
                  type: "image",
                  image: {
                    url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400",
                    width: 400,
                    height: 300,
                    alt: "Sports data",
                  },
                } as AssetProps
              }
              stats={[
                { stat: "40K+", caption: "Sports events powered annually" },
                { stat: "2B+", caption: "Data points processed per day" },
                { stat: "150+", caption: "Markets covered worldwide" },
              ]}
            />
          </div>
          <div className="mt-8">
            <CopyImportBlock importPath={IMPORT_MEDIA_STATS} />
          </div>
        </section>

        <section className="border-t border-lavenderGrey py-16">
          <h2 className="font-heading text-2xl text-navy">StatsGrid</h2>
          <p className="mt-2 max-w-3xl font-body text-navy/80">
            Grid of large stat numbers with captions. Supports three or four
            column layouts with animated stroke text.
          </p>
          <div className="mt-8">
            <StatsGrid
              columns="three"
              stats={[
                {
                  stat: "40K+",
                  old_stat: "30K+",
                  caption: "Live events per year",
                },
                { stat: "2B+", caption: "Data points daily" },
                { stat: "150+", caption: "Global markets" },
              ]}
            />
          </div>
          <div className="mt-8">
            <CopyImportBlock importPath={IMPORT_STATS_GRID} />
          </div>
        </section>

        <section className="border-t border-lavenderGrey py-16">
          <h2 className="font-heading text-2xl text-navy">ThreeColumnCardGrid</h2>
          <p className="mt-2 max-w-3xl font-body text-navy/80">
            Three-column card grid with an image, heading, and description per
            card. Used for feature or product highlights.
          </p>
          <div className="mt-8">
            <ThreeColumnCardGrid
              grid={[
                {
                  media: {
                    type: "image",
                    image: {
                      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
                      width: 600,
                      height: 340,
                      alt: "Feature one",
                    },
                  } as AssetProps,
                  heading: "Real-time data feeds",
                  description:
                    "Sub-second data delivery to sportsbooks, broadcasters, and apps worldwide.",
                },
                {
                  media: {
                    type: "image",
                    image: {
                      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
                      width: 600,
                      height: 340,
                      alt: "Feature two",
                    },
                  } as AssetProps,
                  heading: "Fan engagement tools",
                  description:
                    "Drive deeper connections with gamification, live widgets, and personalised content.",
                },
                {
                  media: {
                    type: "image",
                    image: {
                      url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600",
                      width: 600,
                      height: 340,
                      alt: "Feature three",
                    },
                  } as AssetProps,
                  heading: "Integrity services",
                  description:
                    "Protecting the credibility of sport with best-in-class monitoring and detection.",
                },
              ]}
            />
          </div>
          <div className="mt-8">
            <CopyImportBlock importPath={IMPORT_THREE_COL} />
          </div>
        </section>
      </div>
    </main>
  );
}
