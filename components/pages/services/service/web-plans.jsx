import Link from 'next/link';
import webPlansData, { webPlansNotes } from '@/components/data/web-plans-data';

// Planes de páginas web (Starter / Business / Pro). Datos en components/data/web-plans-data.jsx.
const WebPlans = () => {
    return (
        <div className="web-plans section-padding pt-0" id="planes">
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <span className="subtitle-one">Planes de páginas web</span>
                     </div>
                </div>
                <div className="row gy-4 justify-content-center align-items-stretch">
                    {webPlansData.map((plan) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 d-flex" key={plan.id}>
                            <div className={`web-plans__card ${plan.recommended ? 'web-plans__card--recommended' : ''}`}>
                                {plan.recommended && <span className="web-plans__badge">Recomendado</span>}
                                <h3 className="web-plans__name">{plan.name}</h3>
                                <div className="web-plans__price">{plan.price}</div>
                                <p className="web-plans__description">{plan.description}</p>
                                <ul className="web-plans__features">
                                    {plan.features.map((feature) => (
                                        <li key={feature}><i className="fas fa-check-circle"></i>{feature}</li>
                                    ))}
                                </ul>
                                {plan.note && <p className="web-plans__card-note">{plan.note}</p>}
                                <div className="web-plans__cta">
                                    <Link href={plan.cta.href} className={plan.recommended ? 'btn-two' : 'btn-one'}>
                                        {plan.cta.label}<i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-8 col-lg-10">
                        <ul className="web-plans__notes">
                            {webPlansNotes.map((note) => (
                                <li key={note}>{note}</li>
                            ))}
                        </ul>
                        <div className="web-plans__projects-cta">
                            <p>¿Quieres ver cómo se ven nuestros sitios?</p>
                            <Link href="/proyectos" className="btn-two">Ver nuestros proyectos<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebPlans;
