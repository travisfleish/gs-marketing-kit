// src/fonts.ts
import localFont from "next/font/local";
const gsHeadingFont = localFont({
  src: [
    {
      path: "../src/assets/fonts/ESKlarheitKurrent-Bk_TRIAL.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../src/assets/fonts/ESKlarheitKurrent-Md_TRIAL.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../src/assets/fonts/ESKlarheitKurrent-Smbd_TRIAL.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-heading",
  display: "swap"
});
const gsBodyFont = localFont({
  src: [
    {
      path: "../src/assets/fonts/RedHatText-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../src/assets/fonts/RedHatText-Medium.woff2",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-body",
  display: "swap"
});
export {
  gsBodyFont,
  gsHeadingFont
};
