import cms from "@genius-sports/gs-brand-kit/cms";
import Providers from "./components/Providers";
import SiteShell from "./components/SiteShell";

export default async function Home() {
  const options = await cms().options();

  console.log("MENU LENGTH:", options?.header?.menu?.length);

  return (
    <Providers options={options}>
      <SiteShell>
        <div style={{ minHeight: "100vh", padding: "6rem 3rem", background: "#0D1226" }}>
          <h1 style={{ color: "white", fontSize: "2rem" }}>
            Header and Footer test
          </h1>
          <p style={{ color: "white", marginTop: "1rem" }}>
            Menu items from API: {options?.header?.menu?.length ?? 0}
          </p>
        </div>
      </SiteShell>
    </Providers>
  );
}
