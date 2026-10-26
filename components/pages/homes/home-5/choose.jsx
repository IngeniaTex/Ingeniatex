// Mockup de una página de ejemplo (energía solar "Solaris Yucatán"); fuente en marketing/publicidad/sitio-hero/.
import solarMockup from "../../../../public/assets/img/mockups/solar.webp";

const Choose = () => {
    return (
        <>
        <div className="why-choose-us__four section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="home-mockup home-mockup--choose">
                            <img src={solarMockup.src} alt="Ejemplo de página web para una empresa de energía solar en Yucatán" />
                            <div className="mockup-card animate-y-axis-slider" aria-hidden="true">
                                <span className="mockup-card-icon mockup-card-icon--solar"><i className="fas fa-check"></i></span>
                                <span>
                                    <strong>Solicitud de visita enviada</strong>
                                    <small>Te llamamos para agendar</small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-9">
                        <div className="why-choose-us__four-left">
                            <div className="why-choose-us__four-title">
                                <span className="subtitle-one">¿Por qué Ingeniatex?</span>
                                <h2>Tu equipo digital, desde Mérida</h2>
                                <p>Trabajamos con negocios de Mérida y de todo México, y te atendemos directo por
                                WhatsApp, sin vueltas. La distancia no es problema: trabajamos en línea y te
                                mostramos los avances para que los revises desde tu celular. Cuando tu página o tu
                                aplicación ya está publicada, seguimos al pendiente para cambios, dudas o lo que
                                vaya surgiendo.</p>
                               {/*  <div className="why-choose-us__four-progress-bar">
                                    <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>75%</span>
                                        </div>
                                        <h3>Successful</h3>
                                    </div>
                                    <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>85%</span>
                                        </div>
                                        <h3>Branching</h3>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Choose;