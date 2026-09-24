import ProjectsPage from "@/components/pages/projects";

const description =
    "Portafolio de Ingeniatex: sitios web que hemos construido para clínicas, talleres, empresas de ingeniería y otros negocios. Mira cada proyecto en línea.";

export const metadata = {
    title: "Proyectos",
    description,
    alternates: { canonical: "/proyectos" },
    openGraph: { url: "/proyectos", title: "Proyectos | Ingeniatex", description },
};

const Proyectos = () => {
    return (
        <>
            <ProjectsPage />
        </>
    );
};

export default Proyectos;
