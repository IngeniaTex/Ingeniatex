// Botón de WhatsApp del header y del menú móvil.
// El número vive también en footers y CTAs: mantener consistente.
const WhatsappCta = ({ className = "", label = "WhatsApp" }) => {
    return (
        <a
            href="https://wa.me/529997488654"
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-cta ${className}`}
            aria-label="Escríbenos por WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
            <span className="whatsapp-cta__label">{label}</span>
        </a>
    );
};

export default WhatsappCta;
