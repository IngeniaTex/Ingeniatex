# CLAUDE.md — Ingeniatex

Sitio corporativo de Ingeniatex (Mérida, Yucatán). Next.js 14 App Router, JavaScript (`.jsx`), sin TypeScript, sin backend. Basado en la plantilla comercial *Bantec*; la mayoría de las páginas son restos de plantilla y solo unas pocas están en producción. El README tiene la tabla completa de rutas y pendientes — léelo antes de tocar algo que no esté listado aquí.

## Comandos

```bash
npm install
npm run dev      # localhost:3000
npm run build    # verificar antes de dar por terminado un cambio
npm run lint
```

No hay tests. Verificación = `npm run build` sin errores + revisar la página en el navegador.

## Qué está vivo y qué no

**Rutas personalizadas (las únicas que importan):**
- `/` → `components/pages/homes/home-5/` (HeaderFive + FooterFive)
- `/services/[id]` → `components/pages/services/service-single/` (una página por servicio, SSG vía `generateStaticParams`; header, breadcrumb, contenido, Nuestro Proceso, footer). **No existe `/services`**: el listado vive en la home (`/#servicios`) y en el dropdown del menú.
- `/about` → `components/pages/about/` (HeaderOne + FooterSix)
- `/request-quote` → `components/pages/request-quote/` (HeaderOne + FooterFive)

**Plantilla sin personalizar** (no editar salvo que se pida explícitamente): `home-two`…`home-five`, `blog*`, `portfolio/*`, `team*`, `faq`, `pricing-plan`, `testimonial`, `contact`, `services-two`, y sus componentes en `components/pages/`. Cuando el usuario diga "la home" se refiere a `home-5`, no a `homes/home/`.

## Dónde cambiar cada cosa

| Cambio | Archivo |
|---|---|
| Textos de la home | `components/pages/homes/home-5/{banner,about,work,services,choose}.jsx` |
| Servicios (título, descripción, icono, id, lista, CTA) | `components/data/services-data.jsx` — única fuente de verdad. Alimenta home, `/services`, `/services/[id]`, footers y el formulario de cotización |
| Planes de páginas web (Starter/Business/Pro) | `components/data/web-plans-data.jsx` → `components/pages/services/service/web-plans.jsx` (se monta en `/services/paginas-web`) |
| Bloque descriptivo de un servicio | `components/pages/services/service/service-block.jsx` (carpeta `service/` solo guarda piezas reutilizables: `service-block.jsx`, `web-plans.jsx`); el de integraciones es `components/pages/homes/home-5/solution.jsx` |
| Menú desktop | `components/layout/headers/header-menu.jsx` — el dropdown "Servicios" se genera desde `services-data` |
| Menú móvil | `components/layout/headers/mobile-menu/responsive-menu.jsx` — mismo dropdown; **siempre actualizar junto con el desktop** |
| Datos de contacto del panel lateral | `components/layout/headers/offcanvas.jsx` |
| Footer (CTA, links, teléfono, copyright) | `components/layout/footers/footer-five.jsx` (y `footer-six.jsx` para /about) |
| Redes sociales | `components/data/social.jsx` |
| Título de pestaña | prop `pageTitle` de `<SEO>` en el `index.jsx` de la página; sufijo global en `components/data/seo.jsx` |
| Estilos custom | final de `public/assets/sass/style.css` |
| Texto "Quiénes somos" | `components/pages/about/about.jsx` |
| Formulario de cotización | `components/pages/request-quote/request-quote.jsx` |

## Datos de negocio (mantener consistentes en todos los archivos)

- WhatsApp: `https://wa.me/529997488654` — botón con clases `whatsapp-button whatsapp-button--{filled|dark} whatsapp-button--compact`
- Teléfono: +52 999 748 8654
- Email: info@ingeniatex.com
- Agenda: `https://calendar.app.google/QuZ6YeFf5u3HDSZT9`
- Ubicación: Mérida, Yucatán, México
- Público objetivo: **emprendedores, profesionistas y negocios de todo tipo**. No usar "PyMEs" ni "pequeñas y medianas empresas" como posicionamiento.
- Idioma del sitio: **español (México)**. Todo texto nuevo va en español; los "Read More", "Home", "Submit Now" que queden son restos de plantilla y se pueden traducir si se toca ese componente.

Si cambias un dato de contacto, haz `grep -rn` del valor viejo en `components/` y `app/` y actualiza todas las apariciones.

## Convenciones del código

- Componentes funcionales con `export default`, un componente por archivo, nombres de archivo en kebab-case.
- Las páginas en `app/*/page.jsx` son wrappers de una línea; la lógica y el layout viven en `components/pages/<pagina>/index.jsx` (que monta SEO + Header + Breadcrumb + contenido + Footer + ScrollToTop).
- Los `index.jsx` de página y los headers llevan `"use client"`. `app/layout.jsx` también es cliente porque carga el JS de Bootstrap con `require` en un `useEffect`.
- Imágenes: importar desde `public/assets/img/...` con ruta relativa y usar `<img src={img.src} />`. No usar `next/image` (la plantilla no lo usa; mantener consistencia).
- Enlaces internos con `next/link`; externos con `<a target="_blank" rel="noopener noreferrer">`.
- Clases CSS: BEM de la plantilla (`banner__five-content`, `services__five-single-service`…) + utilidades Bootstrap. Reutilizar clases existentes antes de crear nuevas.
- Para ocultar una sección se comenta el JSX (`{/* <Solution /> */}`), no se borra — así se ha hecho hasta ahora; respetar ese estilo salvo que el usuario pida limpieza.
- Alias `@/` = raíz del repo.

## Trampas conocidas

- **`style.css` no se genera desde `style.scss`.** El `.css` tiene reglas custom (`.whatsapp-button`, etc.) que no están en el `.scss`. Nunca recompilar SCSS ni sobrescribir `style.css`; editar el `.css` directamente.
- `services-data.jsx`: la home (`#servicios`) muestra **todos** los servicios (grid 3+2) y los menús desktop/móvil listan todos en el dropdown; los footers muestran `slice(0,4)` con `shortTitle`. Al agregar un servicio, `/services/[id]`, el dropdown y el formulario lo toman solos; revisa que el grid de la home no quede raro.
- La ruta `/services` (sin id) cae en `app/[not-found]` (página 404 con status 200, comportamiento de la plantilla). Los enlaces a "Servicios" deben apuntar a `/#servicios` o a `/services/<id>`.
- `components/pages/services/service-single/services-single.jsx` decide el contenido por id: `paginas-web` → bloque + planes; `integraciones` → `Solution`; resto → `ServiceBlock`. Un id nuevo cae en el caso genérico.
- La plantilla aplica `text-transform: capitalize` a todo el `body`; en `.service-block` y `.web-plans` está desactivado (final de `style.css`).
- **Nunca correr `npm run build` mientras `npm run dev` está activo**: comparten `.next` y el dev server queda sirviendo HTML sin CSS. Detener dev → build → `rm -rf .next` → dev de nuevo.
- Los formularios tienen `action="#"`: no envían nada. Si el usuario pide "que funcione el formulario", hay que elegir un servicio (Formspree, Resend vía API route, EmailJS…) — preguntar cuál antes de implementar.
- `<SEO>` solo cambia `document.title` en cliente; no hay metadata real para buscadores. Migrar a `export const metadata` de Next.js requiere quitar `"use client"` de las páginas, que hoy lo necesitan por los hooks del header.
- `<label for=…>` aparece en varios formularios (debería ser `htmlFor`); genera warnings, no rompe el build.
- Hay archivos `* copy.jsx` / `* copy.png` sin uso; no importarlos ni tomarlos como referencia.
- `eslint-config-next@15` con `next@14`: el lint puede quejarse de reglas que no aplican. No subir Next a 15 sin pedirlo explícitamente.
- `app/layout.jsx` tiene `<link rel="icon" href="../favicon.ico">`; el favicon real lo sirve Next desde `app/favicon.ico`.

## Al terminar un cambio

1. `npm run build` debe pasar.
2. Si tocaste el menú, verificar desktop **y** móvil.
3. Si tocaste servicios, verificar home (`#servicios`), dropdown desktop y móvil, `/services/<id>` y footer.
4. No hacer commit ni push salvo que el usuario lo pida. Los cambios entran a `main` por PR.
