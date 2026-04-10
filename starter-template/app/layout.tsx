import type { Metadata } from "next";
import { gsHeadingFont, gsBodyFont } from "@genius-sports/gs-brand-kit/fonts";
import "./globals.css";
import "./brand-globals.scss";

export const metadata: Metadata = {
  title: "Brand Kit Header Test",
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
      <body className="font-body">{children}</body>
    </html>
  );
}
