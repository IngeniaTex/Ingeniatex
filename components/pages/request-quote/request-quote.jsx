"use client"

const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label for="first-name">Nombre *</label>
                            <input type="text" id="first-name" placeholder="Nombres" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="last-name">Apellido *</label>
                            <input type="text" id="last-name" placeholder="Apellidos" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="email">Email *</label>
                            <input type="email" id="email" placeholder="Correo electrónico" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="number">Teléfono *</label>
                            <input type="text" id="number" placeholder="+52 999 0000" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="company">Empresa/Organización</label>
                            <input type="text" id="company" placeholder="Ingeniatex" />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>¿En qué servicios te podemos ayudar? *</span  >
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="seo" />
                            <label for="seo">Páginas web</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-design" />
                            <label for="web-design">Aplicaciones Web</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-hosting" />
                            <label for="web-hosting">Pruebas Automatizadas/QA</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="maintenance" />
                            <label for="maintenance">Automatizacion de Procesos</label>
                        </div>
                    </div>
                    <label for="message" className="mb-2">Mensaje *</label>
                    <textarea id="message" placeholder="Escribe aquí tu mensaje"></textarea>
                    <input type="submit" value="Enviar" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;