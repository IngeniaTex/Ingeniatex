import Link from "next/link";
import brand1 from "../../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../../public/assets/img/brand/brand-5.png";
// Mockup de una app de ejemplo (taller de carpintería "Taller Nogal"); fuente en marketing/publicidad/sitio-hero/.
import appMockup from "../../../../public/assets/img/mockups/app.webp";
import aboutBg from "../../../../public/assets/img/about/about-five-bg.png";

const AboutFive = () => {
    return (
        <>
        <div className="about__five section-padding" style={{backgroundImage: `url(${aboutBg.src})`}}>
            {/* <div className="brand__area mb-120">
                <div className="container">
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
            </div>   */}  
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about__five-image">
                            <div className="home-mockup home-mockup--about">
                                <img src={appMockup.src} alt="Ejemplo de app para un taller de carpintería: avance del proyecto del cliente y chat con el taller" />
                                <div className="mockup-card animate-y-axis-slider" aria-hidden="true">
                                    <span className="mockup-card-icon mockup-card-icon--wood"><i className="fas fa-camera"></i></span>
                                    <span>
                                        <strong>Nuevo avance de tu cocina</strong>
                                        <small>El taller subió 3 fotos</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__five-content">
                            <span className="subtitle-one">Quiénes somos</span>
                            <h2>Un equipo cercano que habla tu idioma</h2>
                            <div className="about__five-content-service">
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Lo que hacemos</h4>
                                        <p>Diseñamos y programamos páginas web, tiendas en línea y aplicaciones, y las
                                        conectamos con WhatsApp, Google o pagos en línea. Lo hacemos desde Mérida para
                                        negocios de todo México.</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Hecho a tu medida</h4>
                                        <p>Partimos de cómo trabaja tu negocio: una página para presentarte, una tienda
                                        en línea o una aplicación que te ahorre trabajo.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one">Conócenos
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutFive;