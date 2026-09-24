import "./globals.css";
import BootstrapLoader from "@/components/layout/bootstrap-loader";
import {
    SITE_URL,
    SITE_NAME,
    SITE_TAGLINE,
    SITE_DESCRIPTION,
    CONTACT,
    SOCIAL_PROFILES,
} from "@/components/data/site";

// Metadata heredada por todas las páginas. Cada page.jsx sobreescribe
// title, description y canonical con lo suyo.
export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} — ${SITE_TAGLINE}`,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: "/" },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
        type: "website",
        locale: "es_MX",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
    },
};

export const viewport = {
    themeColor: "#0E59F2",
};

// Ficha de negocio para Google: nombre, ubicación, contacto y redes verificables.
const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressRegion: CONTACT.state,
        addressCountry: CONTACT.country,
    },
    areaServed: [
        { "@type": "City", name: "Mérida" },
        { "@type": "State", name: "Yucatán" },
        { "@type": "Country", name: "México" },
    ],
    knowsLanguage: ["es-MX"],
    sameAs: SOCIAL_PROFILES,
    serviceType: [
        "Diseño de páginas web",
        "Desarrollo web a la medida",
        "Mantenimiento web",
        "Integración de aplicaciones",
        "Automatización y QA",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX">
            <body>
                {children}
                <BootstrapLoader />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
                />
            </body>
        </html>
    );
}
