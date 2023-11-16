/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: process.env.AWS_DOMAIN }],
  },
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },
  i18n,
  trailingSlash: true,
};
