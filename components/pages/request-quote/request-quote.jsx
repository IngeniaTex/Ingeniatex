"use client"
import { useState } from "react";
import servicesData from "@/components/data/services-data";
import webPlansData from "@/components/data/web-plans-data";

// Formulario de cotización. Sin backend por ahora (action="#").
// Los servicios y planes del dropdown salen de services-data / web-plans-data.
const RequestQuoteMain = () => {
    const [service, setService] = useState("");

    return (
        <div className="request-quote__area quote-form section-padding">
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="quote-form__card">
                            <div className="quote-form__header">
                                <span className="subtitle-one">Solicitar cotización</span>
                                <h3>Cuéntanos sobre tu proyecto</h3>
                                <p>Completa el formulario y te respondemos con una propuesta a la medida. Sin compromiso.</p>
                            </div>
                            <form action="#">
                                <div className="request-quote__area-inputs">
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="first-name">Nombre *</label>
                                        <input type="text" id="first-name" name="first-name" placeholder="Nombres" required />
                                    </div>
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="last-name">Apellido *</label>
                                        <input type="text" id="last-name" name="last-name" placeholder="Apellidos" required />
                                    </div>
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" id="email" name="email" placeholder="correo@empresa.com" required />
                                    </div>
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="number">Teléfono / WhatsApp *</label>
                                        <input type="tel" id="number" name="phone" placeholder="+52 999 000 0000" required />
                                    </div>
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="company">Empresa / Negocio</label>
                                        <input type="text" id="company" name="company" placeholder="Nombre de tu negocio (opcional)" />
                                    </div>
                                    <div className="request-quote__area-input-field">
                                        <label htmlFor="service">¿En qué servicio te podemos ayudar? *</label>
                                        <div className="quote-form__select">
                                            <select
                                                id="service"
                                                name="service"
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                required
                                            >
                                                <option value="" disabled>Selecciona un servicio</option>
                                                {servicesData.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.title}</option>
                                                ))}
                                                <option value="varios">Varios servicios</option>
                                                <option value="no-seguro">Aún no lo sé, necesito asesoría</option>
                                            </select>
                                            <i className="fas fa-angle-down"></i>
                                        </div>
                                    </div>
                                    {service === "paginas-web" && (
                                        <div className="request-quote__area-input-field">
                                            <label htmlFor="plan">¿Tienes un plan en mente?</label>
                                            <div className="quote-form__select">
                                                <select id="plan" name="plan" defaultValue="">
                                                    <option value="">Sin definir, quiero recomendación</option>
                                                    {webPlansData.map((plan) => (
                                                        <option key={plan.id} value={plan.id}>{plan.name} — {plan.price}</option>
                                                    ))}
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="quote-form__message">
                                    <label htmlFor="message">Mensaje *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntanos qué necesitas: objetivo del proyecto, fechas, referencias o cualquier detalle que nos ayude a cotizar."
                                        required
                                    ></textarea>
                                </div>
                                <div className="quote-form__footer">
                                    <button type="submit" className="btn-two">Enviar solicitud<i className="fas fa-arrow-right"></i></button>
                                    <p className="quote-form__privacy">
                                        <i className="fas fa-lock"></i>
                                        Tus datos solo se usan para responder a tu solicitud.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="quote-form__aside">
                            <h4>¿Prefieres hablar directo?</h4>
                            <p>Escríbenos y resolvemos tus dudas antes de cotizar.</p>
                            <a
                                href="https://wa.me/529997488654"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-button whatsapp-button--filled quote-form__whatsapp"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Escribir por WhatsApp</span>
                            </a>
                            <ul className="quote-form__aside-list">
                                <li>
                                    <i className="flaticon-telephone-call"></i>
                                    <div>
                                        <span>Llámanos</span>
                                        <a href="tel:+529997488654">+52 999 748 8654</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="far fa-calendar-check"></i>
                                    <div>
                                        <span>Agenda una llamada</span>
                                        <a href="https://calendar.app.google/QuZ6YeFf5u3HDSZT9" target="_blank" rel="noopener noreferrer">Reservar en el calendario</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="far fa-clock"></i>
                                    <div>
                                        <span>Tiempo de respuesta</span>
                                        <strong>Menos de 24 horas hábiles</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
