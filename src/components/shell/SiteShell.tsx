"use client";
import { useContext } from "react";
import Header from "~/components/global/Header";
import Footer from "~/components/global/Footer/Footer";
import { GlobalContext } from "~/utils/context";
import { MARKETING_SITE_ORIGIN } from "~/utils/rewriteHeaderNavUrls";

export default function SiteShell({
  children,
  homeHref = MARKETING_SITE_ORIGIN,
}: {
  children: React.ReactNode;
  homeHref?: string;
}) {
  const [context] = useContext(GlobalContext) as any;
  const footer = context?.options?.footer;

  return (
    <>
      <Header homeHref={homeHref} />
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
