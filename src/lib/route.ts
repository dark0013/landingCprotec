export type AppRoute =
  | { name: 'home' }
  | { name: 'line'; slug: string }
  | { name: 'offering'; slug: string }
  | { name: 'about' }
  | { name: 'platform' }
  | { name: 'news' }
  | { name: 'contact' }
  | { name: 'privacy' }

const lineSlugs = new Set(['capacitaciones', 'soluciones', 'productos'])

export function parseHash(hash: string): AppRoute {
  const path = hash.replace(/^#/, '')
  if (!path || path === '/' || path === '/inicio' || path === 'inicio') return { name: 'home' }

  const offering = path.match(/^\/servicios\/([^/]+)$/)
  if (offering) return { name: 'offering', slug: offering[1] }

  const line = path.match(/^\/(capacitaciones|soluciones|productos)$/)
  if (line && lineSlugs.has(line[1])) return { name: 'line', slug: line[1] }

  if (path === '/nosotros' || path === 'nosotros') return { name: 'about' }
  if (path === '/plataforma' || path === 'plataforma') return { name: 'platform' }
  if (path === '/noticias' || path === 'noticias') return { name: 'news' }
  if (path === '/contacto' || path === 'contacto') return { name: 'contact' }
  if (path === '/privacidad' || path === 'privacidad') return { name: 'privacy' }

  return { name: 'home' }
}
