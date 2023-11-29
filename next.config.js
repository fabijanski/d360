/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"
const nextConfig = {
  basePath: isProduction ? "/d360" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
