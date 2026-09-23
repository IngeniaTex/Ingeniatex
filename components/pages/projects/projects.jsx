import projectsData from "@/components/data/projects-data";

// Contenido de /proyectos. Datos en components/data/projects-data.jsx.
const Projects = () => {
    return (
        <div className="projects__area section-padding">
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <span className="subtitle-one">Portafolio</span>
                        <h2>Sitios que hemos construido</h2>
                        <p className="mt-3">Algunos de los negocios que ya trabajan con su propia página web hecha por Ingeniatex.</p>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {projectsData.map((project) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex" key={project.id}>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects__card"
                            >
                                <div className="projects__card-image">
                                    <img src={project.image.src} alt={`Sitio web de ${project.name}`} loading="lazy" />
                                </div>
                                <div className="projects__card-content">
                                    <span className="projects__card-category">{project.category}</span>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                    <span className="projects__card-link">Visitar sitio<i className="fas fa-arrow-right"></i></span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
