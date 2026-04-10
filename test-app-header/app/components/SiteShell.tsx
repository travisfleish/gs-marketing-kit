"use client";
import { useContext } from "react";
import type { ComponentProps } from "react";
import { Header, Footer, GlobalContext } from "@genius-sports/gs-brand-kit";

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
}: {
  children: React.ReactNode;
}) {
  const [context] = useContext(GlobalContext) as unknown as [
    GlobalShellState | undefined,
    unknown,
  ];
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
