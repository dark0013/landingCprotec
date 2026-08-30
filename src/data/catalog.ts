export type Offering = {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export type Line = {
  slug: string
  title: string
  kicker: string
  description: string
  heroImage: string
  accent: 'red' | 'purple' | 'gold' | 'green'
  offerings: Offering[]
}

export const lines: Line[] = [
  {
    slug: 'producciones-digitales',
    title: 'Producciones Digitales',
    kicker: 'CPROTEC',
    description: 'Diseño, marketing y producción audiovisual para marcas que necesitan presencia, alcance y recuerdos duraderos.',
    heroImage: '/assets/lines/producciones-hero.jpg',
    accent: 'red',
    offerings: [
      {
        slug: 'diseno-grafico-publicitario',
        title: 'Diseño Gráfico Publicitario',
        description: 'En CPROTEC te asesoraremos y guiaremos paso a paso desarrollando marcas con personalidad, conceptos creativos a la vanguardia del diseño y la funcionalidad, alineados a tus objetivos y propuesta para un rápido posicionamiento en el mercado.',
        image: '/assets/services/design.jpg',
        imageAlt: 'Equipos de trabajo para diseño gráfico publicitario',
      },
      {
        slug: 'marketing-y-publicidad',
        title: 'Marketing y publicidad',
        description: 'Con CPROTEC genera empatía y diseña campañas que destaquen tu marca y la hagan crecer, maximizando el retorno de tu inversión. Realizamos campañas personalizadas de marketing de acuerdo con las necesidades de cada cliente.',
        image: '/assets/services/marketing.jpg',
        imageAlt: 'Pantallas de publicidad exterior para campañas de marketing',
      },
      {
        slug: 'servicios-audiovisuales',
        title: 'Servicios audiovisuales para eventos sociales',
        description: 'CPROTEC cuenta con un equipo capacitado para realizar todo tipo de trabajos y eventos audiovisuales. Además, trabajamos con equipos de última tecnología y marcas profesionales, brindando lo mejor de nosotros y estando atentos a las necesidades de nuestros clientes.',
        image: '/assets/services/audiovisual.jpg',
        imageAlt: 'Edición de una producción audiovisual profesional',
      },
    ],
  },
  {
    slug: 'capacitaciones',
    title: 'Capacitaciones',
    kicker: 'CPROTEC',
    description: 'Programas de formación en marketing, diseño, informática y asesoría de proyectos.',
    heroImage: '/assets/lines/capacitaciones-hero.jpg',
    accent: 'purple',
    offerings: [
      {
        slug: 'capacitacion-marketing',
        title: 'Marketing',
        description: 'CPROTEC es una empresa que ofrece conocimientos de tecnología actuando en un mercado complejo, que pueden transmitir a sus clientes potenciales a partir de la producción de materiales relevantes, que pueden generar oportunidades de venta al ubicarse en una estrategia eficaz de Marketing de Contenidos.',
        image: '/assets/lines/c-marketing.jpg',
        imageAlt: 'Capacitación de marketing de contenidos',
      },
      {
        slug: 'capacitacion-diseno-grafico',
        title: 'Diseño Gráfico',
        description: 'En CPROTEC somos un equipo de estrategias de marca y diseñadores gráficos, que cuenta con un personal capacitado para brindarles apoyo y crear historias que impacten y así llegar a más clientes.',
        image: '/assets/lines/c-diseno.jpg',
        imageAlt: 'Capacitación de diseño gráfico',
      },
      {
        slug: 'capacitacion-informatica',
        title: 'Informática',
        description: 'La seguridad informática es un tema que ha ganado muchísima atención en las tres últimas décadas, en CPROTEC nos preocupamos de nuestros clientes y cómo llevan el manejo de la protección global de los datos de sus clientes.',
        image: '/assets/lines/c-informatica.jpg',
        imageAlt: 'Capacitación en informática y seguridad',
      },
      {
        slug: 'asesoria-de-proyectos',
        title: 'Asesoría de proyectos',
        description: 'Nuestro equipo de asesores, conformado por profesionales de calidad nos permiten estar en la vanguardia y crear soluciones innovadoras a la medida y necesidades de cada proyecto, brindando a su empresa resultados eficientes.',
        image: '/assets/lines/c-asesoria.jpg',
        imageAlt: 'Asesoría de proyectos tecnológicos',
      },
    ],
  },
  {
    slug: 'soluciones',
    title: 'Soluciones Tecnológicas',
    kicker: 'CPROTEC',
    description: 'Auditoría, desarrollo, software, investigación de mercado, mantenimiento y transformación digital.',
    heroImage: '/assets/lines/soluciones-hero.jpg',
    accent: 'gold',
    offerings: [
      {
        slug: 'auditoria-informatica',
        title: 'Auditoría informática',
        description: 'En CPROTEC contamos con un equipo profesional altamente capacitado y actualizado para prestar nuestros servicios de auditoría, aplicamos herramientas tecnológicas para eficientizar los procesos y generar valor agregado a nuestros servicios, con un alto nivel de calidad.',
        image: '/assets/lines/st-auditoria.jpg',
        imageAlt: 'Auditoría informática profesional',
      },
      {
        slug: 'desarrollo-pagina-web',
        title: 'Desarrollo de página web',
        description: 'En CPROTEC contamos con profesionales en diseño, programación y estrategias de promoción, implementando soluciones digitales con el objetivo de desarrollar una página web para tu nuevo emprendimiento o para tu creciente negocio que necesita conectarse de mejor manera.',
        image: '/assets/lines/st-web.jpg',
        imageAlt: 'Desarrollo de páginas web',
      },
      {
        slug: 'desarrollo-de-software',
        title: 'Desarrollo de software',
        description: 'En CPROTEC somos una empresa especializada en el desarrollo de software, contamos con un equipo de analistas, diseñadores, desarrolladores y programadores capacitados para proponer soluciones e implementar mejoras rentables que incrementen la productividad de nuestros clientes.',
        image: '/assets/lines/st-software.jpg',
        imageAlt: 'Desarrollo de software a medida',
      },
      {
        slug: 'investigacion-de-mercado',
        title: 'Investigación de mercado',
        description: '“Toma decisiones estratégicas basadas en el análisis de información y conocimiento”, CPROTEC es una empresa de estudios de mercado. Levantamos información, descubrimos su valor y la transformamos en Conocimiento Estratégico basado en evidencia.',
        image: '/assets/lines/st-mercado.jpg',
        imageAlt: 'Investigación de mercado',
      },
      {
        slug: 'mantenimiento-equipos',
        title: 'Mantenimiento de equipos de cómputo',
        description: 'En CPROTEC contamos con el servicio de mantenimiento preventivo y correctivo de equipo de cómputo, así como también actualizaciones de hardware y software al mejor precio del mercado. Gracias a nuestros técnicos calificados podemos garantizar el mejor servicio para su equipo de cómputo, ya sea de escritorio o portátil.',
        image: '/assets/lines/st-mantenimiento.jpg',
        imageAlt: 'Mantenimiento de equipos de cómputo',
      },
      {
        slug: 'transformacion-digital',
        title: 'Transformación digital',
        description: 'Los líderes empresariales necesitarán conocer nuevos requisitos del cliente, desarrollar nuevas capacidades e infraestructuras y formar nuevas asociaciones para impulsar el futuro de crecimiento y sostenibilidad. En CPROTEC te ayudamos a transformar sus compañías con software y tecnología.',
        image: '/assets/lines/st-transformacion.jpg',
        imageAlt: 'Transformación digital empresarial',
      },
    ],
  },
  {
    slug: 'productos',
    title: 'Productos Tecnológicos',
    kicker: 'CPROTEC',
    description: 'Equipos de cómputo y periféricos informáticos seleccionados según la necesidad de cada cliente.',
    heroImage: '/assets/lines/productos-hero.jpg',
    accent: 'green',
    offerings: [
      {
        slug: 'equipos-de-computo',
        title: 'Equipos de cómputo',
        description: 'Con el paso de los años, el diseño y los propósitos de las computadoras han cambiado drásticamente. Pero, elegir la mejor opción depende de las necesidades del negocio. CPROTEC cuenta con una amplia gama de productos tecnológicos según tu necesidad.',
        image: '/assets/lines/pt-equipos.jpg',
        imageAlt: 'Equipos de cómputo',
      },
      {
        slug: 'perifericos-informaticos',
        title: 'Periféricos informáticos',
        description: 'En la actualidad, conocer bien lo relacionado con nuestros dispositivos electrónicos es fundamental para poder obtener el mejor provecho de sus características. En este sentido, nada mejor que saber de qué estamos hablando cuando necesitamos asistencia técnica o tenemos que enfrentarnos a la elección de la compra de un accesorio o pieza de reemplazo.',
        image: '/assets/lines/pt-perifericos.jpg',
        imageAlt: 'Periféricos informáticos',
      },
    ],
  },
]

export const allOfferings: Offering[] = lines.flatMap((line) => line.offerings)

export function findOffering(slug: string) {
  return allOfferings.find((item) => item.slug === slug)
}

export function findLine(slug: string) {
  if (slug === 'producciones') return lines.find((item) => item.slug === 'producciones-digitales')
  return lines.find((item) => item.slug === slug)
}

export function lineHref(slug: string) {
  if (slug === 'producciones-digitales' || slug === 'producciones') return '#/producciones'
  return `#/${slug}`
}

export function findLineForOffering(slug: string) {
  return lines.find((line) => line.offerings.some((item) => item.slug === slug))
}
