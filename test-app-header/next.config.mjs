/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@genius-sports/gs-brand-kit"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.geniussports.com" },
      { protocol: "https", hostname: "uat.cms.geniussports.com" },
      { protocol: "https", hostname: "s46637.pcdn.co" },
      { protocol: "https", hostname: "s46638.pcdn.co" },
    ],
  },
};
export default nextConfig;
