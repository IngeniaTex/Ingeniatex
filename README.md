# Ingeniatex — Sitio web

Sitio corporativo de **Ingeniatex** (Mérida, Yucatán, México): diseño y desarrollo de páginas web, desarrollo web personalizado, mantenimiento e integraciones para emprendedores, profesionistas y negocios de todo tipo.

Construido con **Next.js 14 (App Router)** en JavaScript, a partir de la plantilla comercial *Bantec* (IT services). Solo una parte de la plantilla está personalizada y en producción; el resto sigue en el repo como referencia (ver [Estado de las páginas](#estado-de-las-páginas)).

## Stack

| Área | Tecnología |
|---|---|
| Framework | Next.js 14.2.5 (App Router, `.jsx`, sin TypeScript) |
| UI | React 18, Bootstrap 5.3 (CSS + JS), Swiper 11 |
| Extras | `react-countup` (contadores), `react-modal-video` (modal YouTube) |
| Iconos | Font Awesome 6 (`public/assets/webfonts`) + Flaticon (`public/assets/flaticon`) |
| Tipografía | Space Grotesk (Google Fonts) |
| Lint | ESLint `next/core-web-vitals` |

No hay backend, base de datos, CMS ni variables de entorno. Todo el contenido vive en el código.

## Requisitos

- Node.js 18.17 o superior
- npm (el repo incluye `package-lock.json`)

## Instalación y uso

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
npm run lint
```

## Estructura del proyecto

```
app/                         Rutas (App Router). Cada page.jsx solo monta un componente de components/pages
  layout.jsx                 Layout raíz ("use client"): carga globals.css y el JS de Bootstrap
  page.jsx                   Home → components/pages/homes/home-5
  globals.css                Importa todas las hojas de estilo (Bootstrap, Swiper, FA, style.css…)
  services/[id]/             /services/<id> (una página por servicio; no existe /services)
  proyectos/                 /proyectos (portafolio)
  about/                     /about
  request-quote/             /request-quote
  [not-found]/               404
  home-two…five, blog, portfolio, team, faq, pricing-plan, testimonial, contact, services-two
                             ← páginas de plantilla, sin personalizar

components/
  data/
    services-data.jsx        FUENTE DE VERDAD de los servicios (id, icono, títulos, descripciones, lista, CTA)
    web-plans-data.jsx       Planes de páginas web (Starter / Business / Pro) + aclaraciones
    projects-data.jsx        Proyectos del portafolio (nombre, categoría, captura, URL)
    seo.jsx                  Componente <SEO pageTitle> → setea document.title en cliente
    social.jsx               Iconos de redes sociales (footer / offcanvas)
    blog-data.jsx, team-data.jsx, portfolio-data.jsx   ← datos de plantilla
  layout/
    headers/header/header-five.jsx   Header de la home
    headers/header/header-one.jsx    Header de páginas internas
    headers/header-menu.jsx          Menú principal (desktop) compartido por todos los headers
    headers/mobile-menu/             Menú móvil (responsive-menu.jsx tiene los enlaces)
    headers/offcanvas.jsx            Panel lateral con datos de contacto
    footers/footer-five.jsx          Footer en uso (home y request-quote)
    footers/footer-six.jsx           Footer en uso en /about
  pages/
    homes/home-5/            Secciones de la home: banner, about, work, services, choose, solution…
    services/service/        Piezas reutilizables: service-block.jsx (bloque descriptivo), web-plans.jsx (planes)
    services/service-single/ Detalle de servicio (/services/[id]); Nuestro Proceso al final
    projects/                Página de proyectos (/proyectos)
    about/                   Quiénes somos
    request-quote/           Formulario de cotización
    common/                  breadcrumb, count, scroll-to-top

public/assets/
  img/                       Imágenes (logo-1.png = logo principal, logo-2.png = logo menú móvil)
  img/projects/              Capturas de los sitios del portafolio
  sass/style.css             Hoja de estilos principal de la plantilla (+ estilos custom)
  sass/style.scss            Fuente SCSS original — NO está sincronizada con style.css
  css/, flaticon/, webfonts/ Librerías de terceros
```

Alias de importación: `@/*` apunta a la raíz del repo (`jsconfig.json`).

## Estado de las páginas

| Ruta | Estado | Componentes |
|---|---|---|
| `/` | ✅ Personalizada | `homes/home-5` (HeaderFive, Banner, About, Work, Services `#servicios`, Choose, FooterFive) |
| `/services/[id]` | ✅ Personalizada (SSG) | `services/service-single` — una página por servicio; `paginas-web` incluye los planes Starter/Business/Pro |
| `/proyectos` | ✅ Personalizada | `projects` — portafolio con captura y enlace a cada sitio |
| `/about` | ✅ Personalizada | `about` (HeaderOne, Breadcrumb, AboutMain, FooterSix) |
| `/request-quote` | ✅ Personalizada, **sin backend** | `request-quote` — el `<form action="#">` no envía nada |
| `/contact` | ⚠️ Plantilla en inglés | `contacts` — el footer enlaza a esta ruta |
| `/home-two`…`/home-five`, `/blog*`, `/portfolio/*`, `/team*`, `/faq`, `/pricing-plan`, `/testimonial`, `/services-two` | ❌ Plantilla | Sin enlaces desde el menú, pero accesibles por URL |

## Datos de contacto (dónde están hardcodeados)

| Dato | Valor | Archivos |
|---|---|---|
| WhatsApp | `https://wa.me/529997488654` | `homes/home-5/banner.jsx`, `footers/footer-five.jsx` |
| Teléfono | +52 999 748 8654 | `footers/footer-five.jsx`, `headers/offcanvas.jsx` |
| Email | info@ingeniatex.com | `headers/offcanvas.jsx` (el `mailto:` apunta a otro correo — pendiente) |
| Agenda | `https://calendar.app.google/QuZ6YeFf5u3HDSZT9` | `homes/home-5/solution.jsx`, `homes/home-5/agenda.jsx` (ambos sin montar en la home) |
| Ubicación | Mérida, Yucatán, México | `headers/offcanvas.jsx`, `about/about.jsx` |
| Redes | facebook.com / twitter.com / linkedin.com (genéricos) | `data/social.jsx` |

## Cómo hacer cambios frecuentes

- **Textos de la home** → `components/pages/homes/home-5/*.jsx` (cada sección es un archivo).
- **Servicios** → editar `components/data/services-data.jsx`. La home (`/#servicios`) y el dropdown "Servicios" de ambos menús muestran todos; los footers los primeros 4 (`slice(0,4)`) usando `shortTitle`. Cada servicio genera automáticamente su página en `/services/<id>`.
- **Planes de páginas web** → `components/data/web-plans-data.jsx` (precios, características, notas).
- **Proyectos** (`/proyectos`) → `components/data/projects-data.jsx`. Para agregar uno: captura del sitio en `public/assets/img/projects/` (1280×680 recortado desde arriba) + su entrada en el array.
- **Menú** → `components/layout/headers/header-menu.jsx` (desktop) **y** `components/layout/headers/mobile-menu/responsive-menu.jsx` (móvil). Hay que actualizar los dos. El dropdown de servicios se arma solo desde `services-data`.
- **Título de pestaña** → prop `pageTitle` del componente `<SEO>` en el `index.jsx` de cada página. El sufijo " - Páginas web y Automatización" se agrega en `components/data/seo.jsx`.
- **Estilos custom** → agregar al final de `public/assets/sass/style.css`. No recompilar `style.scss`: el `.css` contiene reglas (p. ej. `.whatsapp-button`) que no existen en el `.scss`.
- **Imágenes** → `public/assets/img/…`, importadas como módulo y usadas con `.src` (`<img src={logo.src} />`).

## Pendientes conocidos

- Conectar los formularios de `/request-quote` y `/contact` a un servicio de envío (Formspree, Resend, API route, etc.).
- Personalizar o eliminar `/contact` y las páginas de plantilla que no se usan.
- Limpiar el menú móvil (`responsive-menu.jsx`): aún muestra Home 01–05, Pages, Team, etc.
- Reemplazar enlaces genéricos de redes sociales en `data/social.jsx`.
- Corregir `mailto:` en `offcanvas.jsx` y el `<link rel="icon" href="../favicon.ico">` en `app/layout.jsx`.
- Archivos duplicados sin uso: `components/data/services-data copy.jsx`, `homes/home-2/blog copy.jsx`, `services/service-single/services-single copy.jsx`, `public/assets/img/logo-1 copy.png`.
- Los `<label for=…>` de `contacts/form.jsx` deberían ser `htmlFor` (JSX).
- El año del copyright está fijo (`© Ingeniatex 2025`) en `footer-five.jsx`.
- Migrar `<SEO>` (título en cliente) a la Metadata API de Next.js para SEO real.
- `eslint-config-next` está en 15.5.0 mientras `next` está en 14.2.5; conviene alinearlos.

## Despliegue

No hay configuración de despliegue en el repo. Es una app Next.js estándar: `npm run build` + `npm run start`, o despliegue directo en Vercel/Netlify desde `main`.

## Flujo de trabajo

- Rama principal: `main`. Los cambios entran por Pull Request.
- Repositorio: https://github.com/IngeniaTex/Ingeniatex
