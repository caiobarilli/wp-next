/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com'
    ]
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
