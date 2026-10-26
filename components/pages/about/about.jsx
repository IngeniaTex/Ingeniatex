import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
// Mockups de ejemplo (salón de eventos "Jardín Alameda" y carpintería "Taller Nogal");
// fuente en marketing/publicidad/sitio-hero/ (mockups.html + exportar.mjs).
import aboutLaptop from "../../../public/assets/img/mockups/about-laptop-jardin.webp";
import aboutPhone from "../../../public/assets/img/mockups/about-phone-taller.webp";
import Link from "next/link";
import Count from "../common/count";
import WorkArea from "../homes/home/work";
import Testimonial from "../homes/home/testimonial";


const AboutMain = () => {
    return (
        <>
        <div className="about__one section-padding">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <i className="flaticon-consultant"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"><Count number={10}/></h4>
                                        <span>+</span>
                                    </div>
                                    <span>Años de experiencia</span>
                                </div>
                            </div>
                            <div className="home-mockup home-mockup--about-page">
                                <img src={aboutLaptop.src} alt="Ejemplo de página web para un salón de eventos, vista en una laptop" />
                                <img src={aboutPhone.src} className="home-mockup-phone animate-y-axis" alt="Ejemplo de página web para un taller de carpintería, vista en un celular" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Quiénes somos</span>
                            <h2>Un equipo de Mérida que trabaja contigo de principio a fin</h2>
                            <p>En <strong>Ingeniatex</strong> creemos que cualquier negocio merece una buena página web o
                            una aplicación que le ahorre trabajo. Desde Mérida, Yucatán, trabajamos con emprendedores,
                            profesionistas y negocios de todo México: te explicamos todo con palabras claras, te atendemos
                            por WhatsApp y seguimos contigo después de entregar.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Páginas web que se ven bien en el celular</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Sistemas y aplicaciones a la medida</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Mantenimiento para que todo siga al día</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Conexión con WhatsApp, Google y pagos en línea</span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <Link href="/#servicios" className="btn-one">Mira lo que hacemos<i className="fas fa-arrow-right"></i></Link>
                                <Link href="/request-quote" className="btn-two">Cotiza tu proyecto<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="brand__area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="" aria-hidden="true" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <WorkArea />
         {/* <Testimonial />  */}
        </>
    );
};

export default AboutMain;