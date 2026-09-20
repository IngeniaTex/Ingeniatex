import servicesData from '@/components/data/services-data';
import Link from 'next/link';

// Muestra todos los servicios de services-data. Cada tarjeta enlaza a /services/[id].
const ServicesFive = () => {
    return (
        <>
            <div className="services__five section-padding" id="servicios">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-7 col-lg-7 col-md-9">
                            <span className="subtitle-one">Nuestros Servicios</span>
                            <h2>Servicios para acelerar tu negocio</h2>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData.map((data) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 d-flex" key={data.id}>
                                <div className="services__five-single-service w-100">
                                    <div className="services__five-single-service-icon">
                                        {data.icon} 
                                    </div>
                                    <div className="services__five-single-service-content">
                                        <h4>{data.shortTitle}</h4>
                                        <p>{data.des}</p>
                                        <Link href={`/services/${data.id}`} className="btn-three">Conocer más<i className="fas fa-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>       
        </>
    );
};

export default ServicesFive;
