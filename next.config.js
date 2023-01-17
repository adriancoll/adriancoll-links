/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  images: { disableStaticImages: true },
  redirects: async () => {
    return [
      {
        source: '/test',
        permanent: false,
        destination: 'https://www.youtube.com/watch?v=R59e1Vl5lO8',
      },
    ]
  },
}

module.exports = nextConfig
