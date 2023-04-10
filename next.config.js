const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(withMDX(nextConfig));
