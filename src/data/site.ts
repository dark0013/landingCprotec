export const company = {
  name: 'CPROTEC',
  tagline: 'Centro Profesional de Tecnología y Capacitación',
  email: 'info@cprotec.net',
  phone: '099 139 1368',
  website: 'www.cprotec.net',
}

export const locations = [
  {
    city: 'Portoviejo',
    address: 'Calle 5 de Octubre y Av. del Ejército.',
    query: 'Calle 5 de Octubre y Avenida del Ejército, Portoviejo, Manabí, Ecuador',
  },
  {
    city: 'Guayaquil',
    address: 'Av. Francisco de Orellana, Sky Building',
    query: 'Sky Building, Avenida Francisco de Orellana, Guayaquil, Guayas, Ecuador',
  },
]

export const team = [
  {
    area: 'Área tecnológica',
    name: 'Ing. Rolando Cedeño',
    email: 'rcedeno@cprotec.net',
    phone: '099 139 1368',
    tel: '+593991391368',
  },
  {
    area: 'Área comercial',
    name: 'Ing. María Auxiliadora Núñez',
    email: 'mnunez@cprotec.net',
    phone: '096 950 7885',
    tel: '+593969507885',
  },
]

export const privacyText = [
  'CPROTEC respeta su derecho de privacidad. Esta política resume qué información personal podemos recoger, de qué manera podemos utilizar esta información y otros temas importantes relacionados con su privacidad y protección de datos.',
  'Es política de CPROTEC cumplir con todas las leyes de privacidad y de protección de datos vigentes. Este compromiso refleja el valor que le damos al hecho de obtener y conservar la confianza de nuestros clientes, socios comerciales y demás personas que comparten su información personal con nosotros.',
]

export const payments = [
  { src: '/assets/payments/visa.svg', alt: 'Visa' },
  { src: '/assets/payments/mastercard.svg', alt: 'Mastercard' },
  { src: '/assets/payments/diners.svg', alt: 'Diners Club' },
  { src: '/assets/payments/amex.svg', alt: 'American Express' },
]

export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href?: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#/' },
  { label: 'Nosotros', href: '#/nosotros' },
  {
    label: 'Servicios',
    children: [
      { label: 'Producciones Digitales', href: '#/producciones' },
      { label: 'Capacitaciones', href: '#/capacitaciones' },
      { label: 'Soluciones Tecnológicas', href: '#/soluciones' },
      { label: 'Productos Tecnológicos', href: '#/productos' },
    ],
  },
  {
    label: 'Plataforma Educativa',
    children: [
      { label: 'Accede a plataforma educativa', href: '#/plataforma' },
    ],
  },
  { label: 'Noticias', href: '#/noticias' },
  { label: 'Contáctanos', href: '#/contacto' },
]
