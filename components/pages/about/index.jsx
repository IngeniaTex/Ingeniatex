"use client"
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterSix from "@/components/layout/footers/footer-six";
import ScrollToTop from "../common/scroll/scroll-to-top";

const AboutUs = () => {
    return (
      <>
        <HeaderOne />
        <BreadCrumb title="Quiénes Somos" innerTitle="Descubre Ingeniatex" />
        <AboutMain />
        <FooterSix />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;