import { useEffect, useState } from 'react'
import { Brand } from './Brand'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Plataforma Educativa', href: '#plataforma' },
  { label: 'Noticias', href: '#noticias' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="shell navbar__inner" aria-label="Navegación principal">
        <a className="navbar__brand" href="#inicio" onClick={() => setOpen(false)}><Brand /></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <div className={`nav-links ${open ? 'nav-links--open' : ''}`} id="main-menu">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="button button--small" href="#contacto" onClick={() => setOpen(false)}>Contáctanos</a>
        </div>
      </nav>
    </header>
  )
}
