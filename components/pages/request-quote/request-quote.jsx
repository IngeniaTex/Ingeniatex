"use client"
import { useState } from "react";
import servicesData from "@/components/data/services-data";
import webPlansData from "@/components/data/web-plans-data";
import Turnstile from "./turnstile";

// Formulario de cotización. Se envía a POST /api/cotizacion (worker/index.js),
// que valida Turnstile y manda el correo a ypz.omar@gmail.com.
// Los servicios y planes del dropdown salen de services-data / web-plans-data.
const RequestQuoteMain = () => {
    const [service, setService] = useState("");
    // idle | sending | success | error
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [attempt, setAttempt] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        // Además del id, mandamos el nombre legible del servicio y del plan para el correo.
        data.set("service-label", form.service.selectedOptions[0]?.text || "");
        if (form.plan) {
            data.set("plan-label", form.plan.selectedOptions[0]?.text || "");
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/cotizacion", { method: "POST", body: data });
            const result = await res.json().catch(() => ({}));
            if (!res.ok || !result.ok) {
                throw new Error(result.error || "No pudimos enviar tu solicitud. Escríbenos por WhatsApp.");
            }
            form.reset();
            setService("");
            setStatus("success");
        } catch (err) {
            setErrorMessage(err.message);
            setStatus("error");
        } finally {
            setAttempt((n) => n + 1);
        }
    };

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
                            <form onSubmit={handleSubmit}>
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
                                <Turnstile resetKey={attempt} />
                                <div className="quote-form__footer">
                                    <button type="submit" className="btn-two" disabled={status === "sending"}>
                                        {status === "sending" ? "Enviando…" : "Enviar solicitud"}
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                    <p className="quote-form__privacy">
                                        <i className="fas fa-lock"></i>
                                        Tus datos solo se usan para responder a tu solicitud.
                                    </p>
                                </div>
                                {status === "success" && (
                                    <p className="quote-form__status quote-form__status--success" role="status">
                                        <i className="fas fa-check-circle"></i>
                                        ¡Gracias! Recibimos tu solicitud y te respondemos en menos de 24 horas hábiles.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="quote-form__status quote-form__status--error" role="alert">
                                        <i className="fas fa-exclamation-circle"></i>
                                        {errorMessage}
                                    </p>
                                )}
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
