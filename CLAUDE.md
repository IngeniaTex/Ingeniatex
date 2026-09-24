# CLAUDE.md — Ingeniatex

Sitio corporativo de Ingeniatex (Mérida, Yucatán). Next.js 14 App Router, JavaScript (`.jsx`), sin TypeScript, sin backend. Basado en la plantilla comercial *Bantec*,**todas las rutas que existen están en producción**. El README tiene la tabla completa de rutas y pendientes — léelo antes de tocar algo que no esté listado aquí.

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
- `/proyectos` → `components/pages/projects/` (portafolio; el botón "Ver nuestros proyectos" bajo los planes lleva aquí)
- `/about` → `components/pages/about/` (HeaderOne + FooterSix)
- `/request-quote` → `components/pages/request-quote/` (HeaderOne + FooterFive)


## Dónde cambiar cada cosa

| Cambio | Archivo |
|---|---|
| Textos de la home | `components/pages/homes/home-5/{banner,about,work,services,choose}.jsx` |
| Servicios (título, descripción, icono, id, lista, CTA) | `components/data/services-data.jsx` — única fuente de verdad. Alimenta home, `/services`, `/services/[id]`, footers y el formulario de cotización |
| Proyectos del portafolio | `components/data/projects-data.jsx` → página `/proyectos` (`components/pages/projects/`). Las capturas van en `public/assets/img/projects/` |
| Planes de páginas web (Starter/Business/Pro) | `components/data/web-plans-data.jsx` → `components/pages/services/service/web-plans.jsx` (se monta en `/services/paginas-web`) |
| Bloque descriptivo de un servicio | `components/pages/services/service/service-block.jsx` (carpeta `service/` solo guarda piezas reutilizables: `service-block.jsx`, `web-plans.jsx`); el de integraciones es `components/pages/homes/home-5/solution.jsx` |
| Menú desktop | `components/layout/headers/header-menu.jsx` — el dropdown "Servicios" se genera desde `services-data` |
| Menú móvil | `components/layout/headers/mobile-menu/responsive-menu.jsx` — mismo dropdown; **siempre actualizar junto con el desktop** |
| Datos de contacto del panel lateral | `components/layout/headers/offcanvas.jsx` |
| Footer (CTA, links, teléfono, copyright) | `components/layout/footers/footer-five.jsx` (y `footer-six.jsx` para /about) |
| Redes sociales | `components/data/social.jsx` |
| Título de pestaña, description, canonical, Open Graph | `export const metadata` en el `app/*/page.jsx` de la ruta (en `/services/[id]` es `generateMetadata`); los valores globales y el dominio, en `components/data/site.jsx` |
| Sitemap / robots / imagen de Open Graph | `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.jsx` |
| Estilos custom | final de `public/assets/sass/style.css` |
| Texto "Quiénes somos" | `components/pages/about/about.jsx` |
| Formulario de cotización | `components/pages/request-quote/request-quote.jsx` — dropdown de servicios desde `services-data`; si eligen `paginas-web` aparece un segundo select con los planes de `web-plans-data`. Estilos `.quote-form__*` al final de `style.css` |

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
- Las páginas en `app/*/page.jsx` son Server Components cortos: exportan `metadata` y montan el componente de `components/pages/<pagina>/index.jsx`, que lleva `"use client"` y arma Header + Breadcrumb + contenido + Footer + ScrollToTop.
- Los `index.jsx` de página y los headers llevan `"use client"`. `app/layout.jsx` **no**: es Server Component para poder exportar `metadata`, y el JS de Bootstrap se carga desde `components/layout/bootstrap-loader.jsx`. No le agregues `"use client"`: rompería toda la metadata del sitio.
- Imágenes: importar desde `public/assets/img/...` con ruta relativa y usar `<img src={img.src} />`. No usar `next/image` (la plantilla no lo usa; mantener consistencia).
- Enlaces internos con `next/link`; externos con `<a target="_blank" rel="noopener noreferrer">`.
- Clases CSS: BEM de la plantilla (`banner__five-content`, `services__five-single-service`…) + utilidades Bootstrap. Reutilizar clases existentes antes de crear nuevas.
- Para ocultar una sección se comenta el JSX (`{/* <Solution /> */}`), no se borra — así se ha hecho hasta ahora; respetar ese estilo salvo que el usuario pida limpieza.
- Alias `@/` = raíz del repo.

## Trampas conocidas

- **`public/assets/sass/style.css`editar el `.css` directamente.
- `services-data.jsx`: la home (`#servicios`) muestra **todos** los servicios (grid 3+2) y los menús desktop/móvil listan todos en el dropdown; los footers muestran `slice(0,4)` con `shortTitle`. Al agregar un servicio, `/services/[id]`, el dropdown y el formulario lo toman solos; revisa que el grid de la home no quede raro.
- La ruta `/services` (sin id) cae en `app/not-found.jsx`, que responde con status 404 real. Los enlaces a "Servicios" deben apuntar a `/#servicios` o a `/services/<id>`.
- `components/pages/services/service-single/services-single.jsx` decide el contenido por id: `paginas-web` → bloque + planes; `integraciones` → `Solution`; resto → `ServiceBlock`. Un id nuevo cae en el caso genérico.
- La plantilla aplica `text-transform: capitalize` a todo el `body`; en `.service-block` y `.web-plans` está desactivado (final de `style.css`).
- **Nunca correr `npm run build` mientras `npm run dev` está activo**: comparten `.next` y el dev server queda sirviendo HTML sin CSS. Detener dev → build → `rm -rf .next` → dev de nuevo.
- Los formularios tienen `action="#"`: no envían nada. Si el usuario pide "que funcione el formulario", hay que elegir un servicio (Formspree, Resend vía API route, EmailJS…) — preguntar cuál antes de implementar.
- El `<h1>` de la home es el título del banner (`home-5/banner.jsx`) y el de las páginas internas es el del breadcrumb (`common/breadcrumb.jsx`). Ambos usan reglas CSS que nombran `h1` y `h2` juntos; si cambias la etiqueta, revisa `.banner__five-content` y `.page__banner-content` al buscar en `style.css`.
- `<label for=…>` aparece en varios formularios (debería ser `htmlFor`); genera warnings, no rompe el build.
- `eslint-config-next@15` con `next@14`: el lint puede quejarse de reglas que no aplican. No subir Next a 15 sin pedirlo explícitamente.

## Al terminar un cambio

1. `npm run build` debe pasar.
2. Si tocaste el menú, verificar desktop **y** móvil.
3. Si tocaste servicios, verificar home (`#servicios`), dropdown desktop y móvil, `/services/<id>` y footer.
4. No hacer commit ni push salvo que el usuario lo pida. Los cambios entran a `main` por PR.
