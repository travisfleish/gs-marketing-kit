import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Brand kit source uses `~/*` path alias (see kit tsconfig). Map it when transpiling flexible components from source. */
const brandKitSrc = path.resolve(__dirname, "../src");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Deep imports compile from kit source; the kit is not typed for strict external graph checks. */
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@genius-sports/gs-brand-kit"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": brandKitSrc,
    };
    return config;
  },
};

export default nextConfig;
