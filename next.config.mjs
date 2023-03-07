/** @type {import("next").NextConfig} */

module.exports = {
  basePath: '/E-Portfolio',
  assetPrefix: `https://P1kus3ru.github.io`,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
