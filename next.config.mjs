// @ts-check
/** @type {import("next").NextConfig} */

const config = {
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
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default config;