/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'fakeapistore.com',
  //       port: '',
  //       pathname: '/products/'
  //     }
  //   ]
  // }
  images: {
    // domains: ['fakestoreapi.com']
    domains: ['api.lorem.space']
  }
}

module.exports = nextConfig
