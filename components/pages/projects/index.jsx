"use client"
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ProjectsMain from "./projects";
import WorkArea from "../homes/home/work";
import FooterSix from "@/components/layout/footers/footer-six";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ProjectsPage = () => {
    return (
        <>
            <HeaderOne />
            <BreadCrumb title="Proyectos" innerTitle="Sitios que hemos construido" />
            <ProjectsMain />
            <WorkArea />
            <FooterSix />
            <ScrollToTop />
        </>
    );
};

export default ProjectsPage;
