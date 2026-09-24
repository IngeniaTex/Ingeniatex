import { SITE_URL } from "@/components/data/site";

// Se sirve en /robots.txt.
export default function robots() {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
