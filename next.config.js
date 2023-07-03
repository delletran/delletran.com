/** @type {import('next').NextConfig} */
const path = require('path');
 
const nextConfig = {
  // output: 'export',
  // serverRuntimeConfig: {},
  
  publicRuntimeConfig: {
    API_URL:process.env.API_URL,
    FE_URL:process.env.FE_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // unoptimized: true,
    domains: ['127.0.0.1', 'localhost', 'delletran.github.io/delletran.com', 'delletran.com'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: '/images/**',
      },
      {
        protocol: "https",
        hostname: "delletran.github.io/delletran.com",
        port: "",
        pathname: '/images/**',
      },
      {
        protocol: "https",
        hostname: "delletran.com",
        port: "",
        pathname: '/images/**',
      },
    ],
  },
}


module.exports = nextConfig
