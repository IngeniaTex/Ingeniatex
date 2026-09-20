import Link from 'next/link';

// Bloque descriptivo de un servicio en /services: título, descripción, lista de ejemplos, nota y CTA.
// `variant="gray"` alterna el fondo para separar visualmente los bloques.
const ServiceBlock = ({ service, variant, className = '', children }) => {
    if (!service) return null;
    const hasItems = service.items && service.items.length > 0;
    return (
        <div className={`service-block section-padding ${variant === 'gray' ? 'service-block--gray' : ''} ${className}`} id={service.id}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="service-block__header text-center">
                            <span className="subtitle-one">{service.shortTitle}</span>
                            <h2>{service.title}</h2>
                            <p>{service.longDes}</p>
                        </div>
                        {hasItems && (
                            <ul className="service-block__list two-columns">
                                {service.items.map((item) => (
                                    <li key={item}><i className="fas fa-check-circle"></i>{item}</li>
                                ))}
                            </ul>
                        )}
                        {service.note && <p className="service-block__note text-center">{service.note}</p>}
                        {service.cta && (
                            <div className="service-block__actions justify-content-center">
                                <Link href={service.cta.href} className="btn-one">{service.cta.label}<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        )}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ServiceBlock;
