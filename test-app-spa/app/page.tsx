import CatalogShowcase from "./components/CatalogShowcase";
import { getCatalogPath, parseCatalogMarkdown } from "../lib/parseCatalog";

/** Reads repo-root CATALOG.md at request time; avoids bundling the markdown at build. */
export const dynamic = "force-dynamic";

export default function Page() {
  const { headings } = parseCatalogMarkdown(getCatalogPath());
  return <CatalogShowcase headings={headings} />;
}
