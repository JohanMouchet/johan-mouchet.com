/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    /* Load SVGs with SVGR */
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    /* Resolve root imports through Sass */
    config.resolve.alias["~"] = path.resolve(__dirname);

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
