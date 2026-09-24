import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, CONTACT } from "@/components/data/site";

// Imagen que se ve al compartir el sitio en WhatsApp, Facebook o Instagram.
// Next la genera en build y la sirve en /opengraph-image.
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "linear-gradient(135deg, #0E59F2 0%, #0b3fae 100%)",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 34, letterSpacing: 6, opacity: 0.85 }}>
                    INGENIATEX
                </div>
                <div
                    style={{
                        fontSize: 82,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginTop: 28,
                        maxWidth: 940,
                    }}
                >
                    Páginas web que hacen crecer tu negocio
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: 44, fontSize: 32, opacity: 0.9 }}>
                    <div
                        style={{
                            width: 56,
                            height: 6,
                            background: "#ffffff",
                            marginRight: 24,
                            borderRadius: 3,
                        }}
                    />
                    Diseño, desarrollo e integraciones · {CONTACT.city}, {CONTACT.state}
                </div>
            </div>
        ),
        size
    );
}
