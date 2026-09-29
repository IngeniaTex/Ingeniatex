// Proyectos mostrados en la sección "Proyectos" de la home (#proyectos).
// Las imágenes son capturas de cada sitio, en public/assets/img/projects/.
import ingeniatex from "../../public/assets/img/projects/ingeniatex.png";
import boka from "../../public/assets/img/projects/boka.png";
import rodher from "../../public/assets/img/projects/rodher.png";
import pok from "../../public/assets/img/projects/pok.png";
import serviciosDemo from "../../public/assets/img/projects/servicios-demo.png";
import doctorDemo from "../../public/assets/img/projects/doctor-demo.png";

const projectsData = [
    {
      id: 'boka',
      name: 'BOKA',
      category: 'Clínica dental',
      description: 'Sitio corporativo para una clínica dental: presentación de tratamientos, instalaciones y contacto directo con pacientes.',
      image: boka,
      url: 'https://boka.mx/',
    },
    {
      id: 'rodher',
      name: 'RODHER Ingeniería',
      category: 'Energía solar y bombeo',
      description: 'Sitio con catálogo de servicios y productos, formulario de cotizaciones y presencia para búsquedas del sector industrial.',
      image: rodher,
      url: 'https://www.rodheringenieria.com.mx/',
    },
    {
      id: 'pok-taller',
      name: 'POK Taller',
      category: 'Carpintería a la medida',
      description: 'Sitio con galería de proyectos, cotización en línea y contacto por WhatsApp para un taller de clósets y cocinas.',
      image: pok,
      url: 'https://pok-taller.vercel.app/',
    },
    {
      id: 'ingeniatex',
      name: 'Ingeniatex',
      category: 'Nuestro propio sitio',
      description: 'Nuestra página: servicios, planes de páginas web y solicitud de cotización en línea.',
      image: ingeniatex,
      url: 'https://ingeniatex.vercel.app/',
    },
    {
      id: 'servicios-demo',
      name: 'Demo - Página de Servicios',
      category: 'Demo · Negocio de servicios',
      description: 'Ejemplo para un taller de herrería y aluminio: catálogo de servicios, solicitud de presupuesto y contacto por WhatsApp.',
      image: serviciosDemo,
      url: 'https://services-demo-sable.vercel.app/',
    },
    {
      id: 'doctor-demo',
      name: 'Demo - Página para doctores',
      category: 'Demo · Consultorio médico',
      description: 'Ejemplo para una cardióloga: servicios, testimonios, preguntas frecuentes y agenda de citas por WhatsApp.',
      image: doctorDemo,
      url: 'https://doctor-demo-wheat.vercel.app/',
    },
  ];

  export default projectsData;
