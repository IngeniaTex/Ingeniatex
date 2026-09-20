import ServiceBlock from "../service/service-block";
import WebPlans from "../service/web-plans";
import Solution from "../../homes/home-5/solution";

// Contenido de la página de detalle según el servicio.
// - paginas-web: bloque descriptivo + planes Starter / Business / Pro.
// - integraciones: sección de integraciones (Solution).
// - resto: bloque descriptivo con lista, nota y CTA.
const ServicesSingleMain = ({ service }) => {
    if (service.id === 'paginas-web') {
        return (
            <>
                <ServiceBlock service={{ ...service, cta: null }} className="pb-0" />
                <WebPlans />
            </>
        );
    }
    if (service.id === 'integraciones') {
        return <Solution />;
    }
    return <ServiceBlock service={service} />;
};

export default ServicesSingleMain;
