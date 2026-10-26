import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import bannerBg from "../../../../public/assets/img/banner/banner-five-bg.png";
// Ejemplos: sitio de energía solar (Solaris Yucatán) en laptop y app de un taller (Taller Nogal) en celular.
// Se regeneran desde marketing/publicidad/sitio-hero/ (mockups.html + exportar.mjs).
import heroLaptop from "../../../../public/assets/img/mockups/hero-laptop-solar.webp";
import heroPhone from "../../../../public/assets/img/mockups/hero-phone-app.webp";

const BannerFive = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="banner__five" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-5 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__five-content">
                                <span className="subtitle-one">Desde Mérida para todo México</span>
                                <h1>Tu negocio digital, <span className="banner__five-nowrap">sin complicaciones</span></h1>
                                <p>Somos un equipo de Mérida que diseña páginas web y aplicaciones a la medida para
                                negocios de todo México.</p>
                                <div className="banner__five-content-bottom flex gap-4">
                                    <Link href="/request-quote" className="btn-two">Cotiza tu proyecto<i className="fas fa-arrow-right"></i></Link>
                                    <div>
                                    <a
                                        href="https://wa.me/529997488654"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-button whatsapp-button--filled whatsapp-button--compact"
                                    >
                                        <i className="fab fa-whatsapp"></i>
                                        <span>Escríbenos</span>
                                    </a>
                                    </div>
                                    {/* <span className="banner__five-content-video-btn video-popup" onClick={openVideoModal}><i className="fas fa-play"></i></span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="home-mockup home-mockup--hero">
                                <img src={heroLaptop.src} alt="Ejemplo de página web para una empresa de energía solar, vista en una laptop" />
                                <img src={heroPhone.src} className="home-mockup-phone animate-y-axis" alt="Ejemplo de app para un taller de carpintería: avance del proyecto del cliente" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default BannerFive;
