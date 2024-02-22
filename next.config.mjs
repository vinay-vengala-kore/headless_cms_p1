/** import BuilderDevTools from "@builder.io/dev-tools/next";

/* * @type {import('next').NextConfig} * /
const nextConfig = BuilderDevTools()({
    output: 'export',
});

export default nextConfig;*/


/** @type {import('next').NextConfig} */ const nextConfig = { output: "export", // <=== enables static exports reactStrictMode: true, }; module.exports = nextConfig;
