const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "[::1]"]);

/**
 * WordPress / REST often returns absolute URLs using the CMS "site" origin. In local
 * dev that can be localhost while paths are correct. Strip the dev origin so
 * `next/link` navigates within the current app instead of embedding localhost in hrefs.
 */
export default function cmsUrlToNextHref(raw: string | undefined | null): string {
	if (raw == null) return "#";
	if (raw === "" || raw === "#") return raw;
	if (!raw.startsWith("http")) return raw;
	try {
		const u = new URL(raw);
		if (LOCAL_HOSTNAMES.has(u.hostname)) {
			const path = u.pathname + u.search + u.hash;
			if (!path || path === "/") return "/";
			return path.startsWith("/") ? path : `/${path}`;
		}
	} catch {
		/* invalid URL */
	}
	return raw;
}
