export const MARKETING_SITE_ORIGIN = "https://www.geniussports.com";

function isLikelyStaticAssetUrl(raw: string): boolean {
  try {
    const u = new URL(raw);
    if (u.pathname.includes("/wp-content/") || u.pathname.includes("/wp-includes/")) return true;
    if (/\.(jpg|jpeg|png|gif|webp|svg|ico|pdf|woff2?)(\?|$)/i.test(u.pathname)) return true;
  } catch { /* ignore */ }
  return false;
}

export function resolveMarketingNavUrl(raw: string): string {
  if (raw == null || raw === "" || raw === "#") return raw || "#";
  if (raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("javascript:")) return raw;
  if (raw.startsWith("/") && !raw.startsWith("//")) {
    if (raw.startsWith("/wp-content/") || raw.startsWith("/wp-includes/")) return raw;
    return `${MARKETING_SITE_ORIGIN}${raw}`;
  }
  if (!raw.startsWith("http")) return raw;
  if (isLikelyStaticAssetUrl(raw)) return raw;
  try {
    const u = new URL(raw);
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1" || u.hostname === "[::1]") {
      return `${MARKETING_SITE_ORIGIN}${u.pathname}${u.search}${u.hash}`;
    }
    if (u.hostname.includes("cms.geniussports.com")) {
      return `${MARKETING_SITE_ORIGIN}${u.pathname}${u.search}${u.hash}`;
    }
    return raw;
  } catch { return raw; }
}

function rewriteUrlsDeep(value: unknown): unknown {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(rewriteUrlsDeep);
  if (typeof value === "object") {
    const o = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) {
      if ((k === "url" || k === "permalink") && typeof v === "string") {
        out[k] = resolveMarketingNavUrl(v);
      } else {
        out[k] = rewriteUrlsDeep(v);
      }
    }
    return out;
  }
  return value;
}

export function rewriteHeaderNavToMarketingSite<T extends { header?: unknown }>(options: T): T {
  if (!options?.header) return options;
  const clone = typeof structuredClone === "function"
    ? structuredClone(options)
    : (JSON.parse(JSON.stringify(options)) as T);
  (clone as { header: unknown }).header = rewriteUrlsDeep(clone.header);
  return clone;
}
