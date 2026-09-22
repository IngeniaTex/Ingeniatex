// Planes de páginas web mostrados en /services/paginas-web (components/pages/services/service/web-plans.jsx).
// Los precios son "desde" y en MXN. No publicar mensualidades, financiamiento ni esquemas de renta.
// Redacción pensada para cliente final: evitar siglas y términos técnicos (SSL, hosting, SEO, API…).
const webPlansData = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'Desde $5,000 MXN',
      description: 'Ideal para emprendedores, profesionales independientes y negocios que quieren empezar a tener presencia en internet.',
      recommended: false,
      features: [
        'Una página con hasta 5 secciones (presentación, servicios, contacto, etc.)',
        'Diseño profesional adaptado a tu marca',
        'Se ve bien en celular, tablet y computadora',
        'Formulario de contacto',
        'Botón de WhatsApp',
        'Enlaces a tus redes sociales',
        'Optimización básica para buscadores',
        'Sitio seguro (candado https)',
        'Dominio y alojamiento gratis el primer año',
      ],
      cta: { label: 'Solicitar cotización', href: '/request-quote' },
    },
    {
      id: 'business',
      name: 'Business',
      price: 'Desde $7,500 MXN',
      description: 'Para negocios que necesitan un sitio más completo para presentar su empresa, sus servicios y conseguir nuevos clientes.',
      recommended: true,
      features: [
        'Hasta 5 páginas (Inicio, Servicios, Nosotros, Contacto, etc.)',
        'Diseño personalizado para tu marca',
        'Se ve bien en celular, tablet y computadora',
        'Formularios de contacto y cotización',
        'Botón de WhatsApp',
        'Enlaces a tus redes sociales',
        'Mapa de ubicación (Google Maps)',
        'Galería / Portafolio de proyectos',
        'Estadísticas de visitas',
        'Optimización para buscadores en todas tus páginas',
        'Sitio seguro (candado https)',
        'Dominio y alojamiento gratis el primer año',
      ],
      cta: { label: 'Solicitar cotización', href: '/request-quote' },
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'Desde $15,000 MXN',
      description: 'Para negocios que necesitan algo más que una página informativa: catálogos, sistemas o conexión con otras herramientas.',
      recommended: false,
      features: [
        'Páginas y secciones según las necesidades de tu proyecto',
        'Diseño y desarrollo a la medida',
        'Se ve bien en celular, tablet y computadora',
        'Formularios a la medida (cotizaciones, citas, registros)',
        'Botón de WhatsApp',
        'Enlaces a tus redes sociales',
        'Mapa de ubicación (Google Maps)',
        'Catálogo de productos o servicios',
        'Galería / Portafolio de proyectos',
        'Blog o sección de noticias',
        'Conexión con pagos, CRM y otras herramientas',
        'Estadísticas de visitas',
        'Carga rápida',
        'Optimización avanzada para buscadores',
        'Sitio seguro (candado https)',
        'Dominio y alojamiento gratis el primer año',
      ],
      note: 'Las funciones especiales se cotizan según lo que necesite cada proyecto.',
      cta: { label: 'Solicitar cotización', href: '/request-quote' },
    },
  ];

  // Aclaraciones que se muestran debajo de las cards, en texto discreto.
  export const webPlansNotes = [
    'Todos los planes incluyen el dominio (tu dirección .com) y el alojamiento del sitio sin costo durante el primer año. A partir del segundo año, la renovación se cotiza según los servicios contratados.',
    'El dominio se registra a nombre del cliente para garantizar que siempre sea tuyo.',
    'La optimización incluida prepara tu sitio para que los buscadores lo encuentren y lo muestren correctamente. Los planes no incluyen posicionamiento SEO ni campañas de marketing digital; son servicios continuos que se cotizan por separado.',
    'Los correos empresariales (Google Workspace, Microsoft 365 u otros) se cotizan por separado.',
  ];

  export default webPlansData;
