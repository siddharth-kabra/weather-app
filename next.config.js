/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_WEATHER_API_KEY: process.env.NEXT_WEATHER_API_KEY,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
