import Link from 'next/link';
import ResponsiveMenu from "./responsive-menu";
import WhatsappCta from "../whatsapp-cta";

const MobileMenuPopup = ({ isOpen, setIsOpen, popupLogo }) => {
    return (
        <div className={`menu__bar-popup ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/"><img src={popupLogo?.src} alt='Ingeniatex' /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
            <div className="menu__bar-popup-whatsapp">
                <WhatsappCta className="whatsapp-cta--menu" label="Escríbenos por WhatsApp" />
            </div>
        </div>
    );
};

export default MobileMenuPopup;