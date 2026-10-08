"use client"
import { useEffect, useRef } from "react";
import { TURNSTILE_SITE_KEY } from "@/components/data/site";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// Carga el script de Turnstile una sola vez aunque se navegue entre páginas.
let scriptPromise;
function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = SCRIPT_SRC;
            script.async = true;
            script.onload = () => resolve(window.turnstile);
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    return scriptPromise;
}

// Captcha de Cloudflare: casi siempre invisible, solo pide un clic si duda.
// Entrega el token por `onToken` (null cuando expira o falla) y los errores
// por `onError`. `resetKey` lo reinicia (cada token sirve una sola vez).
const Turnstile = ({ resetKey, onToken, onError }) => {
    const containerRef = useRef(null);
    const widgetRef = useRef(null);
    // Refs para que los callbacks de Turnstile siempre usen la versión actual.
    const onTokenRef = useRef(onToken);
    const onErrorRef = useRef(onError);
    onTokenRef.current = onToken;
    onErrorRef.current = onError;

    useEffect(() => {
        let cancelled = false;
        loadTurnstile()
            .then((turnstile) => {
                if (cancelled || !containerRef.current || widgetRef.current) return;
                widgetRef.current = turnstile.render(containerRef.current, {
                    sitekey: TURNSTILE_SITE_KEY,
                    language: "es",
                    appearance: "interaction-only",
                    callback: (token) => onTokenRef.current?.(token),
                    "expired-callback": () => onTokenRef.current?.(null),
                    "timeout-callback": () => onTokenRef.current?.(null),
                    "error-callback": (code) => {
                        onTokenRef.current?.(null);
                        onErrorRef.current?.(`turnstile-${code}`);
                    },
                });
            })
            .catch(() => onErrorRef.current?.("turnstile-script"));
        return () => {
            cancelled = true;
            if (widgetRef.current && window.turnstile) {
                window.turnstile.remove(widgetRef.current);
                widgetRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (resetKey && widgetRef.current && window.turnstile) {
            onTokenRef.current?.(null);
            window.turnstile.reset(widgetRef.current);
        }
    }, [resetKey]);

    return <div ref={containerRef} className="quote-form__turnstile"></div>;
};

export default Turnstile;
