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
