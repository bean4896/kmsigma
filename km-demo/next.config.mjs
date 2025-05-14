/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // or add specific rule override
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [
      360, 414, 512, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 3840,
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'publiccdn.kingdomhall729.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'kingmakergames-public.s3.ap-southeast-1.amazonaws.com',
        pathname: '**',
      }
    ],
  },
  swcMinify: true,
}

export default nextConfig;