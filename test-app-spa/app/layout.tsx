import type { Metadata } from "next";
import { gsHeadingFont, gsBodyFont } from "@genius-sports/gs-brand-kit/fonts";
import Providers from "./components/Providers";
import { minimalWpOptions } from "../lib/minimalWpOptions";
import "./globals.css";
import "./brand-globals.scss";

export const metadata: Metadata = {
  title: "Brand kit · Catalog explorer",
  description:
    "Visual walkthrough of CATALOG.md: tokens and @genius-sports/gs-brand-kit components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gsHeadingFont.variable} ${gsBodyFont.variable}`}
    >
      <body className="font-body">
        <Providers options={minimalWpOptions}>{children}</Providers>
      </body>
    </html>
  );
}
