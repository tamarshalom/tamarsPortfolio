/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  transpilePackages: ["next-mdx-remote"],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isStaticExport ? { output: "export" } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(isStaticExport ? { trailingSlash: true } : {}),
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
