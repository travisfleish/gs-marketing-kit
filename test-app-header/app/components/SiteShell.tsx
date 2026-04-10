"use client";
import { useContext } from "react";
import type { ComponentProps } from "react";
import { Header, Footer, GlobalContext } from "@genius-sports/gs-brand-kit";

import { MARKETING_SITE_ORIGIN } from "../lib/rewriteHeaderNavUrls";

type FooterFields = Pick<
  ComponentProps<typeof Footer>,
  "columns" | "social" | "terms" | "CTA" | "featuredLinks"
>;

/** WordPress options footer includes nested CTA / featured-link groups before mapping to Footer props. */
type OptionsFooter = FooterFields & {
  global_cta?: { footer_cta?: FooterFields["CTA"] };
  global_featured_links?: { footer_featured_links?: FooterFields["featuredLinks"] };
};

type GlobalShellState = {
  history: unknown[];
  options?: { footer?: OptionsFooter };
};

export default function SiteShell({
  children,
  homeHref = MARKETING_SITE_ORIGIN,
}: {
  children: React.ReactNode;
  /** Where the logo and nav resolve; defaults to the public marketing site. */
  homeHref?: string;
}) {
  const [context] = useContext(GlobalContext) as unknown as [
    GlobalShellState | undefined,
    unknown,
  ];
  const footer = context?.options?.footer;

  return (
    <>
      <Header homeHref={homeHref} />
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
