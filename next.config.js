const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = process.env.STATIC_EXPORT === 'true'
  ? {
      output: 'export',
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }
  : {
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }

module.exports = withMDX(nextConfig)
