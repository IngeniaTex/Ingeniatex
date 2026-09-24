import { notFound } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';
import { SITE_URL, SITE_NAME, CONTACT } from '@/components/data/site';

// Genera una página estática por servicio (/services/paginas-web, /services/desarrollo-web, ...).
export function generateStaticParams() {
    return servicesData.map((service) => ({ id: service.id }));
}

// Title y description propios de cada servicio, desde services-data.
export function generateMetadata({ params }) {
    const service = servicesData.find((s) => s.id === params.id);
    if (!service) {
        return { title: "Servicio no encontrado", robots: { index: false, follow: false } };
    }
    const description = service.des;
    return {
        title: service.title,
        description,
        alternates: { canonical: `/services/${service.id}` },
        openGraph: {
            url: `/services/${service.id}`,
            title: `${service.title} | ${SITE_NAME}`,
            description,
        },
    };
}

const ServicesDetail = ({ params }) => {
    const serviceDetails = servicesData.find((service) => service.id === params.id);
    if (!serviceDetails) {
        notFound();
    }
    // Ficha del servicio para Google: qué es, quién lo presta y dónde.
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceDetails.title,
        description: serviceDetails.longDes || serviceDetails.des,
        serviceType: serviceDetails.title,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "State", name: CONTACT.state },
        url: `${SITE_URL}/services/${serviceDetails.id}`,
    };
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
        </>
    );
};

export default ServicesDetail;
