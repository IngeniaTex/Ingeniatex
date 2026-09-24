"use client"
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import WorkArea from "../../homes/home/work";
import FooterSix from "@/components/layout/footers/footer-six";
import ScrollToTop from "../../common/scroll/scroll-to-top";

// Página de detalle de un servicio (/services/[id]). Mismo formato que /services:
// header, breadcrumb, contenido del servicio, "Nuestro Proceso" y footer.
const ServicesSingle = ({ serviceDetails }) => {
    return (
        <>
            <HeaderOne />
            <BreadCrumb title={serviceDetails.title} innerTitle="Servicios" />
            <ServicesSingleMain service={serviceDetails} />
            <WorkArea />
            <FooterSix />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;
