import { notFound } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

// Genera una página estática por servicio (/services/paginas-web, /services/desarrollo-web, ...).
export function generateStaticParams() {
    return servicesData.map((service) => ({ id: service.id }));
}

const ServicesDetail = ({ params }) => {
    const serviceDetails = servicesData.find((service) => service.id === params.id);
    if (!serviceDetails) {
        notFound();
    }
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} />
        </>
    );
};

export default ServicesDetail;
