import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the workspace root to this folder (avoids the "multiple lockfiles" warning
  // when another package-lock.json exists in a parent folder).
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
