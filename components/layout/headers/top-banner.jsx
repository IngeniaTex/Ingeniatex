import Link from 'next/link';

// Barra promocional fija en la parte superior del sitio.
// Se monta en header-one y header-five; el spacer empuja el contenido
// para compensar la altura de la barra (que es position: fixed).
const TopBanner = () => {
    return (
        <>
            <div className="top-banner">
                <div className="container">
                    <div className="top-banner__inner">
                        <p className="top-banner__text">
                            <i className="fas fa-bolt"></i>
                            <span className="top-banner__text-full">Diseñamos sitios web que hacen crecer negocios en México</span>
                            <span className="top-banner__text-short">Sitios web que hacen crecer tu negocio</span>
                        </p>
                        <Link className="top-banner__cta" href="/proyectos">
                            Ver nuestros proyectos
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="top-banner__spacer" aria-hidden="true"></div>
        </>
    );
};

export default TopBanner;
