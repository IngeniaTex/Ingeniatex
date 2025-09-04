import image from "../../../../public/assets/img/technology-solution/tech-solution-one.png";
import Count from "../../common/count";

const Solution = () => {
    return (
        <>
            <div className="technology-solution__one section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                <span className="subtitle-one">Integaciones</span>
                                <h2>Conectamos tu negocio con lo que importa</h2>
                                <p>Desde la agenda de citas hasta la gestión de pagos en línea, en Ingeniatex integramos herramientas que facilitan tu operación y mejoran la experiencia de tus clientes. Haz que tu página web no solo informe, sino que también trabaje por ti.</p>
                                <div className="container py-10">
                                        <h3>Calenario de citas</h3>
                                        <p>Agenar cita con el calenario de Google</p>
                                        <a
                                        href="https://calendar.app.google/QuZ6YeFf5u3HDSZT9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-one"
                                        >
                                        Reservar en mi calendario
                                        </a>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="image" />
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