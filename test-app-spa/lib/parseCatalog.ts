import fs from "fs";
import path from "path";

export type CatalogHeading = {
  level: 2 | 3;
  title: string;
  id: string;
};

function slugify(title: string): string {
  return title
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseCatalogMarkdown(catalogPath: string): {
  headings: CatalogHeading[];
  intro: string;
} {
  const md = fs.readFileSync(catalogPath, "utf8");
  const lines = md.split(/\n/);
  const headings: CatalogHeading[] = [];
  let intro = "";

  for (const line of lines) {
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    if (h2) {
      const title = h2[1].trim();
      headings.push({ level: 2, title, id: slugify(title) });
    } else if (h3) {
      const title = h3[1].trim();
      headings.push({ level: 3, title, id: slugify(title) });
    }
  }

  const firstH2 = lines.findIndex((l) => l.startsWith("## "));
  if (firstH2 > 0) {
    intro = lines.slice(0, firstH2).join("\n").trim();
  }

  return { headings, intro };
}

export function getCatalogPath(): string {
  return path.join(process.cwd(), "..", "CATALOG.md");
}
