/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      `${process.env.HOST}`, // Valid WP Image domain.
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
