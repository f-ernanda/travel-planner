/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com']
  },
  compiler: {
    styledComponents: true
  },
  output: 'standalone'
}

export default nextConfig
