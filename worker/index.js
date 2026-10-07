import { EmailMessage } from "cloudflare:email";

// Worker de Cloudflare. Todo el sitio son archivos estáticos de out/;
// este código solo atiende /api/* (ver "run_worker_first" en wrangler.jsonc).
//
// POST /api/cotizacion: recibe el formulario de /request-quote, valida
// Turnstile y manda la solicitud por correo con Cloudflare Email Routing.

const FROM = "cotizaciones@ingeniatex.com"; // dominio con Email Routing activo
const TO = "ypz.omar@gmail.com"; // debe coincidir con destination_address en wrangler.jsonc

// Límite de caracteres por campo, para no aceptar envíos absurdos.
const FIELDS = {
    "first-name": 80,
    "last-name": 80,
    email: 120,
    phone: 40,
    company: 120,
    service: 60,
    "service-label": 120,
    plan: 40,
    "plan-label": 120,
    message: 5000,
};
const REQUIRED = ["first-name", "last-name", "email", "phone", "service", "message"];

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === "/api/cotizacion") {
            if (request.method !== "POST") {
                return json({ ok: false, error: "Método no permitido" }, 405);
            }
            return handleQuote(request, env);
        }
        return env.ASSETS.fetch(request);
    },
};

async function handleQuote(request, env) {
    let form;
    try {
        form = await request.formData();
    } catch {
        return json({ ok: false, error: "Solicitud inválida" }, 400);
    }

    const data = {};
    for (const [field, max] of Object.entries(FIELDS)) {
        data[field] = String(form.get(field) ?? "").trim().slice(0, max);
    }
    if (REQUIRED.some((field) => !data[field]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return json({ ok: false, error: "Revisa que los campos obligatorios estén completos." }, 400);
    }

    const human = await verifyTurnstile(
        form.get("cf-turnstile-response"),
        request.headers.get("CF-Connecting-IP"),
        env.TURNSTILE_SECRET_KEY
    );
    if (!human) {
        return json({ ok: false, error: "No pudimos verificar que no eres un robot. Intenta de nuevo." }, 403);
    }

    try {
        await env.EMAIL.send(new EmailMessage(FROM, TO, buildEmail(data)));
    } catch (err) {
        console.error("Error al enviar la cotización:", err);
        return json({ ok: false, error: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp." }, 502);
    }
    return json({ ok: true });
}

async function verifyTurnstile(token, ip, secret) {
    if (!token || !secret) return false;
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    if (ip) body.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body,
    });
    const outcome = await res.json();
    return outcome.success === true;
}

// Arma el correo en formato MIME (texto plano, UTF-8).
function buildEmail(d) {
    const name = `${d["first-name"]} ${d["last-name"]}`;
    const service = d["service-label"] || d.service;
    const lines = [
        `Nueva solicitud de cotización desde ingeniatex.com`,
        ``,
        `Nombre:    ${name}`,
        `Email:     ${d.email}`,
        `Teléfono:  ${d.phone}`,
        `Empresa:   ${d.company || "—"}`,
        `Servicio:  ${service}`,
    ];
    if (d.service === "paginas-web") {
        lines.push(`Plan:      ${d["plan-label"] || "Sin definir"}`);
    }
    lines.push(``, `Mensaje:`, d.message, ``, `—`, `Responde a este correo para contestarle directo al cliente.`);

    const headers = [
        `From: Ingeniatex <${FROM}>`,
        `To: ${TO}`,
        `Reply-To: ${oneLine(d.email)}`,
        `Subject: ${encodeHeader(`Cotización: ${oneLine(name)} — ${oneLine(service)}`)}`,
        `Date: ${new Date().toUTCString()}`,
        `Message-ID: <${crypto.randomUUID()}@ingeniatex.com>`,
        `MIME-Version: 1.0`,
        `Content-Type: text/plain; charset=UTF-8`,
        `Content-Transfer-Encoding: base64`,
    ];
    const body = base64(lines.join("\r\n")).replace(/.{76}/g, "$&\r\n");
    return `${headers.join("\r\n")}\r\n\r\n${body}\r\n`;
}

// Quita saltos de línea para que nadie pueda inyectar cabeceras.
function oneLine(value) {
    return value.replace(/[\r\n]+/g, " ");
}

function encodeHeader(value) {
    return `=?UTF-8?B?${base64(value)}?=`;
}

function base64(text) {
    let binary = "";
    for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
    return btoa(binary);
}

function json(payload, status = 200) {
    return Response.json(payload, { status, headers: { "Cache-Control": "no-store" } });
}
