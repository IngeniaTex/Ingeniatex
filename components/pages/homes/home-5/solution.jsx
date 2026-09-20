import Link from "next/link";
import image from "../../../../public/assets/img/technology-solution/tech-solution-one.png";
import servicesData from "@/components/data/services-data";

// Sección "Integración de aplicaciones". Se monta en /services/integraciones (no en la home).
const Solution = () => {
    const service = servicesData.find((item) => item.id === 'integraciones');
    return (
        <>
            <div className="technology-solution__one section-padding service-block--gray" id={service.id}>
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                <span className="subtitle-one">Integración de aplicaciones</span>
                                <h2>Conectamos tu negocio con lo que importa</h2>
                                <p>{service.longDes}</p>
                                <p>Podemos conectar tu sitio con:</p>
                                <ul className="service-block__list two-columns mb-30">
                                    {service.items.map((item) => (
                                        <li key={item}><i className="fas fa-check-circle"></i>{item}</li>
                                    ))}
                                </ul>
                                <div className="service-block__actions">
                                    <Link href={service.cta.href} className="btn-one">{service.cta.label}<i className="fas fa-arrow-right"></i></Link>
                                    <a
                                        href="https://calendar.app.google/QuZ6YeFf5u3HDSZT9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-three"
                                    >
                                        Agendar una llamada<i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="Integración de aplicaciones" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution;
