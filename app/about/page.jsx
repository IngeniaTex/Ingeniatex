import AboutUs from "@/components/pages/about";

const description =
    "Somos un equipo de Mérida, Yucatán que diseña y desarrolla páginas web y soluciones digitales para emprendedores, profesionistas y negocios de todo tipo.";

export const metadata = {
    title: "Quiénes somos",
    description,
    alternates: { canonical: "/about" },
    openGraph: { url: "/about", title: "Quiénes somos | Ingeniatex", description },
};

const About = () => {
    return (
        <>
            <AboutUs />
        </>
    );
};

export default About;
