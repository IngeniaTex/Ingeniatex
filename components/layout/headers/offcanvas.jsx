import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
				<Link href='/'>
					<img className='logo_one' src={logo2.src} alt="logo" />
				</Link>
				</div>
				<p>En Ingeniatex asumimos el compromiso de brindar soluciones digitales confiables y accesibles para tu empresa. Nos especializamos en el desarrollo de sitios web, aplicaciones, automatización de pruebas y consultoría tecnológica para ayudar a las empresas a crecer en un entorno cada vez más digital.</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Ponte en contacto</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Llamanos</span>
							<h6><Link href="+52(999)748-8654">+52 (999) 748 8654</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Correo electrónico</span>
							<h6><Link href="mailto:info.help@gmail.com">info@ingeniatex.com</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Dirección de oficina</span>
							<h6><Link href="https://google.com/maps" target="_blank">Mérida Yucatán, México</Link></h6>
						</div>
					</div>
				</div>
				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;