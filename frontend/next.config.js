/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const domain = process.env.WORDPRESS_DOMAIN,
  nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        domain,
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
