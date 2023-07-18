/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_IMAGE_HOST_URL]
  }
};
