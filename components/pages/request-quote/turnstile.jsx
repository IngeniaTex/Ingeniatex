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

// Captcha invisible de Cloudflare. Agrega al <form> un input oculto
// "cf-turnstile-response" que el Worker valida. `resetKey` lo reinicia
// (el token solo sirve una vez).
const Turnstile = ({ resetKey }) => {
    const containerRef = useRef(null);
    const widgetRef = useRef(null);

    useEffect(() => {
        let cancelled = false;
        loadTurnstile()
            .then((turnstile) => {
                if (cancelled || !containerRef.current || widgetRef.current) return;
                widgetRef.current = turnstile.render(containerRef.current, {
                    sitekey: TURNSTILE_SITE_KEY,
                    language: "es",
                    appearance: "interaction-only",
                });
            })
            .catch(() => {});
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
            window.turnstile.reset(widgetRef.current);
        }
    }, [resetKey]);

    return <div ref={containerRef} className="quote-form__turnstile"></div>;
};

export default Turnstile;
