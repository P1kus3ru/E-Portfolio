/** @type {import("next").NextConfig} */
module.exports = {
  // basePath: '/E-Portfolio',
  // assetPrefix: '/E-Portfolio/',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/E-Portfolio/' : '',
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
