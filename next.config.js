/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/certificado-a1.html',
        destination: '/certificado-a1'
      }
    ];
  }
};

module.exports = nextConfig;
