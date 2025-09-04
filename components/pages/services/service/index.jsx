"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../homes/home/work";
import Testimonial from "../../homes/home/testimonial";
import FooterSix from "@/components/layout/footers/footer-six";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Solution from "../../homes/home-5/solution";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <HeaderOne />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <WorkArea />
            <Solution/>
            {/* <Testimonial /> */}
            <FooterSix />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;