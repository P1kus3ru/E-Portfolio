/** @type {import("next").NextConfig} */

const config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};


export default config;