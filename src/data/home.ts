export const clients = [
  { src: '/assets/clients/lis-fashion.png', alt: 'LIS Fashion' },
  { src: '/assets/clients/mr-compu.png', alt: 'MR. COMPU S.A.' },
  { src: '/assets/clients/consorcio-pichincha.png', alt: 'Consorcio Pichincha' },
]

export const plans = ['Básico', 'Profesional', 'Tienda Virtual'] as const

export const planRows = [
  { feature: 'Hosting y dominio por un año', values: [true, true, true] },
  { feature: 'Creación y diseño de plantilla del sitio web', values: [true, true, true] },
  { feature: 'Rediseñar o diseñar logo institucional', values: [true, true, true] },
  { feature: 'Crear y diseñar tres artes para el sitio web', values: [true, true, true] },
  { feature: 'Opción de galería', values: [true, true, true] },
  { feature: 'Redacción de historia, misión y visión', values: [true, true, true] },
  { feature: 'Publicación de contenido', values: [true, true, true] },
  { feature: 'Integración con redes sociales', values: [true, true, true] },
  { feature: 'Creación de base de datos del sitio', values: [true, true, true] },
  { feature: 'Información de contacto', values: [true, true, true] },
  { feature: 'Certificado de seguridad SSL', values: [true, true, true] },
  { feature: 'Adaptada para PC y móvil', values: [true, true, true] },
  { feature: 'Diseño en Cinema 4D', values: [false, true, true] },
  { feature: 'Formulario de inscripción', values: [false, true, true] },
  { feature: 'Creación de catálogo de productos o servicios', values: [false, false, true] },
]

export const homeLines = [
  {
    slug: 'productos',
    title: 'Productos tecnológicos',
    image: '/assets/lines/productos-hero.jpg',
    items: ['Equipos de cómputo', 'Periféricos informáticos'],
    area: 'productos',
  },
  {
    slug: 'soluciones',
    title: 'Soluciones tecnológicas',
    image: '/assets/lines/soluciones-hero.jpg',
    items: ['Auditoría informática', 'Desarrollo de página web', 'Desarrollo de software', 'Investigación de mercado', 'Mantenimiento de equipos de cómputo', 'Transformación digital'],
    area: 'soluciones',
  },
  {
    slug: 'producciones',
    title: 'Producciones digitales',
    image: '/assets/lines/producciones-hero.jpg',
    items: ['Diseño gráfico publicitario', 'Marketing y publicidad', 'Servicios audiovisuales'],
    area: 'producciones',
  },
  {
    slug: 'capacitaciones',
    title: 'Capacitaciones',
    image: '/assets/lines/capacitaciones-hero.jpg',
    items: ['Marketing', 'Diseño gráfico', 'Informática', 'Asesoría de proyectos'],
    area: 'capacitaciones',
  },
]

export const platformTracks = [
  {
    title: 'Informática',
    image: '/assets/lines/c-informatica.jpg',
    items: [
      'Hacking ético',
      'Seguridad informática para las organizaciones',
      'Mantenimiento de equipos de cómputo: nivel básico e intermedio',
      'Auditoría informática',
      'Práctico Excel — básico, intermedio y avanzado',
    ],
  },
  {
    title: 'Diseño gráfico',
    image: '/assets/lines/c-diseno.jpg',
    items: [
      'Photoshop: básico, intermedio, avanzado',
      'Illustrator: básico, intermedio, avanzado',
      'Editor de video: básico, intermedio, avanzado',
    ],
  },
  {
    title: 'Marketing',
    image: '/assets/lines/c-marketing.jpg',
    items: [
      'Taller de desarrollo de emprendimientos',
      'Marketing digital',
    ],
  },
  {
    title: 'Asesoría proyectos',
    image: '/assets/lines/c-asesoria.jpg',
    items: [
      'Taller de preparación para entrevistas de trabajo',
      'Taller práctico de elaboración de tesis',
      'Taller de entrenamiento de encuestadores',
      'Taller de redacción y ortografía para una comunicación eficaz en redes sociales',
    ],
  },
]
