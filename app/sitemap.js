import servicesData from "@/components/data/services-data";
import { SITE_URL } from "@/components/data/site";

// Se sirve en /sitemap.xml. Al agregar un servicio en services-data
// o una ruta nueva, aparece aquí sin tocar nada más.
export default function sitemap() {
    const lastModified = new Date();
    const staticRoutes = [
        { path: "", priority: 1 },
        { path: "/proyectos", priority: 0.8 },
        { path: "/about", priority: 0.6 },
        { path: "/request-quote", priority: 0.8 },
    ].map(({ path, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority,
    }));

    const serviceRoutes = servicesData.map((service) => ({
        url: `${SITE_URL}/services/${service.id}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.9,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
