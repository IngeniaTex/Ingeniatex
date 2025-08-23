"use client"
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import Footerfive from '@/components/layout/footers/footer-five';
import ScrollToTop from '../common/scroll/scroll-to-top';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Cotizaciòn" />
            <HeaderOne />
            <BreadCrumb title="Solicitar Cotización" innerTitle="Información de Servicios" />
            <RequestQuoteMain />
            <Footerfive />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;