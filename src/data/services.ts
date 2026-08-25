export type Service = {
  title: string
  description: string
  image: string
  imageAlt: string
  accent: string
}

export const services: Service[] = [
  {
    title: 'Diseño Gráfico Publicitario',
    description: 'En CPROTEC te asesoraremos y guiaremos paso a paso desarrollando marcas con personalidad, conceptos creativos a la vanguardia del diseño y la funcionalidad, alineados a tus objetivos y propuesta para un rápido posicionamiento en el mercado.',
    image: '/assets/services/design.png',
    imageAlt: 'Equipos de trabajo para diseño gráfico publicitario',
    accent: 'blue',
  },
  {
    title: 'Marketing y publicidad',
    description: 'Con CPROTEC genera empatía y diseña campañas que destaquen tu marca y la hagan crecer, maximizando el retorno de tu inversión. Realizamos campañas personalizadas de marketing de acuerdo con las necesidades de cada cliente.',
    image: '/assets/services/marketing.png',
    imageAlt: 'Pantallas de publicidad exterior para campañas de marketing',
    accent: 'red',
  },
  {
    title: 'Servicios audiovisuales para eventos sociales',
    description: 'CPROTEC cuenta con un equipo capacitado para realizar todo tipo de trabajos y eventos audiovisuales. Además, trabajamos con equipos de última tecnología y marcas profesionales, brindando lo mejor de nosotros y estando atentos a las necesidades de nuestros clientes.',
    image: '/assets/services/audiovisual.png',
    imageAlt: 'Edición de una producción audiovisual profesional',
    accent: 'cyan',
  },
]
