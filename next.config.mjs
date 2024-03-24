/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**'
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
  output: 'standalone'
}

export default nextConfig
