"use client"
import servicesData from "@/components/data/services-data";

// Formulario de cotización. Sin backend por ahora (action="#").
const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label htmlFor="first-name">Nombre *</label>
                            <input type="text" id="first-name" placeholder="Nombres" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="last-name">Apellido *</label>
                            <input type="text" id="last-name" placeholder="Apellidos" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" placeholder="Correo electrónico" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="number">Teléfono *</label>
                            <input type="text" id="number" placeholder="+52 999 0000" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">Empresa/Organización</label>
                            <input type="text" id="company" placeholder="Ingeniatex" />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>¿En qué servicios te podemos ayudar? *</span>
                        {servicesData.map((service) => (
                            <div className="request-quote__area-service-input-single" key={service.id}>
                                <input type="checkbox" id={`service-${service.id}`} name="services" value={service.id} />
                                <label htmlFor={`service-${service.id}`}>{service.title}</label>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="message" className="mb-2">Mensaje *</label>
                    <textarea id="message" placeholder="Cuéntanos sobre tu proyecto o el plan que te interesa"></textarea>
                    <input type="submit" value="Enviar" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
