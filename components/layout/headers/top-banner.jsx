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
                            <span className="top-banner__text-full">Hacemos páginas web y aplicaciones para negocios de Mérida y todo México</span>
                            <span className="top-banner__text-short">Páginas web y apps hechas en Mérida</span>
                        </p>
                        <Link className="top-banner__cta" href="/proyectos">
                            Mira nuestros proyectos
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
