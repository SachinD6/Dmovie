/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "http://image.tmdb.org",
      "www.image.tmdb.org",
      "image.tmdb.org",
      "http://tmdb.org",
      "www.tmdb.org",
    ],
  },
};

module.exports = nextConfig;
