import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true
  },
  serverRuntimeConfig: {
    openAiKey: process.env.OPEN_AI_KEY,
  }
};

export default withVanillaExtract(nextConfig);
