/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['luxunlockdev.s3.ap-south-1.amazonaws.com'],
    },
};
