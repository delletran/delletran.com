/** @type {import('next').NextConfig} */
const path = require('path');
 
const nextConfig = {
  publicRuntimeConfig: {
    API_URL:process.env.API_URL,
    FE_URL:process.env.FE_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


module.exports = nextConfig
