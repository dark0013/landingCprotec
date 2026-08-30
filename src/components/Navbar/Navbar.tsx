import { useCallback, useEffect, useRef, useState } from 'react'
import { Brand } from '../Brand/Brand'
import { navItems } from '../../data/site'
import styles from './Navbar.module.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeMenus = useCallback(() => {
    setOpen(false)
    setServicesOpen(false)
    const active = document.activeElement
    if (active instanceof HTMLElement) active.blur()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHash = () => {
      closeMenus()
      if (window.location.hash.startsWith('#/')) {
        window.scrollTo(0, 0)
        setScrolled(false)
      } else {
        setScrolled(window.scrollY > 24)
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [closeMenus])

  useEffect(() => {
    if (!servicesOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [servicesOpen])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`shell ${styles.inner}`} aria-label="Navegación principal">
        <a href="#/" onClick={closeMenus}>
          <Brand variant={scrolled ? 'color' : 'white'} />
        </a>
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => {
            setOpen(!open)
            setServicesOpen(false)
          }}
        >
          <span /><span /><span />
        </button>
        <div className={`${styles.links} ${open ? styles.open : ''}`} id="main-menu">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div className={styles.dropdown} key={item.label} ref={dropdownRef}>
                  <button
                    className={styles.dropToggle}
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {item.label}
                  </button>
                  <div className={`${styles.menu} ${servicesOpen ? styles.menuOpen : ''}`}>
                    {item.children.map((child) => (
                      <a key={child.href} href={child.href} onClick={closeMenus}>{child.label}</a>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <a
                key={item.label}
                className={item.cta ? styles.cta : undefined}
                href={item.href}
                onClick={closeMenus}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
