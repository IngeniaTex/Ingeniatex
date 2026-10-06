/** @type {import('next').NextConfig} */
const nextConfig = {
    // Exportación estática: `npm run build` genera el sitio en `out/`,
    // que Cloudflare sirve tal cual (ver wrangler.jsonc).
    output: "export",
};

export default nextConfig;
