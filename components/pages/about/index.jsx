"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterFive from "@/components/layout/footers/footer-five";
import ScrollToTop from "../common/scroll/scroll-to-top";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="Quiénes Somos" />
        <HeaderOne />
        <BreadCrumb title="Quiénes Somos" innerTitle="Descubre Ingeniatex" />
        <AboutMain />
        <FooterFive />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;