import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsPath = path.join(__dirname, "..", "dist", "fonts.mjs");

let s = fs.readFileSync(fontsPath, "utf8");
s = s
  .replace(/var gsHeadingFont/g, "const gsHeadingFont")
  .replace(/var gsBodyFont/g, "const gsBodyFont");
fs.writeFileSync(fontsPath, s);
