/** @type {import("next").NextConfig} */

const config = {
  basePath: '/E-Portfolio',
  assetPrefix: '/E-Portfolio/',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/E-Portfolio/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
};


export default config;