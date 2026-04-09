/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/RoboIndex.github.io',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/RoboIndex.github.io',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
