# `test-app-header` (local sandbox only)

This folder is **not** the product. It is a minimal Next.js app that links `@genius-sports/gs-brand-kit` via `file:..` to manually check **Header** / **Footer** against live WordPress options.

**All package documentation, architecture, exports, and integration guidance** live in the [repository root `README.md`](../README.md) — use that (and [`CURSOR_INSTRUCTIONS.md`](../CURSOR_INSTRUCTIONS.md)) as the project file for assistants and real consumer apps.

---

## Run this sandbox

1. From repo root: `npm install && npm run build` (produces `dist/`).
2. Here: `npm install`.
3. Add `.env.local` with `NEXT_PUBLIC_WORDPRESS_BASE_URL` and `NEXT_PUBLIC_SITE_URL` (same as main integration docs).
4. `npm run dev` → [http://localhost:3000](http://localhost:3000).

The page uses `force-dynamic`; nav URLs are rewritten to the public marketing site in `app/lib/rewriteHeaderNavUrls.ts`.
