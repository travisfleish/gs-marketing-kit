import cms from "@genius-sports/gs-brand-kit/cms";
import Providers from "./components/Providers";
import SiteShell from "./components/SiteShell";
import {
	MARKETING_SITE_ORIGIN,
	rewriteHeaderNavToMarketingSite,
} from "./lib/rewriteHeaderNavUrls";

/** Avoid calling the WordPress API during `next build` (prerender); render on each request instead. */
export const dynamic = "force-dynamic";

export default async function Home() {
  const raw = await cms().options();
  const options = rewriteHeaderNavToMarketingSite(raw);

  console.log("MENU LENGTH:", options?.header?.menu?.length);

  return (
    <Providers options={options}>
      <SiteShell homeHref={MARKETING_SITE_ORIGIN}>
        <div style={{ minHeight: "100vh", padding: "6rem 3rem", background: "#ffffff" }}>
          <h1 style={{ color: "#0D1226", fontSize: "2rem" }}>
            Header and Footer test
          </h1>
          <p style={{ color: "#0D1226", marginTop: "1rem" }}>
            Menu items from API: {options?.header?.menu?.length ?? 0}
          </p>
        </div>
      </SiteShell>
    </Providers>
  );
}
