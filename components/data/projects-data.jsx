// Proyectos mostrados en la sección "Proyectos" de la home (#proyectos).
// Las imágenes son capturas de cada sitio, en public/assets/img/projects/.
import ingeniatex from "../../public/assets/img/projects/ingeniatex.png";
import boka from "../../public/assets/img/projects/boka.png";
import rodher from "../../public/assets/img/projects/rodher.png";
import pok from "../../public/assets/img/projects/pok.png";

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
  ];

  export default projectsData;
