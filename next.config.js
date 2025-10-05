/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // 可根据需要添加其他域名
  },
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
}

module.exports = nextConfig