import { useCallback, useEffect, useRef, useState } from 'react'
import { Brand } from '../Brand/Brand'
import { navItems, type NavItem } from '../../data/site'
import styles from './Navbar.module.css'

function isHrefCurrent(href: string, hash: string) {
  const current = hash || '#/'
  if (href === '#/') return current === '#' || current === '#/' || current === '' || current === '#inicio'
  return current === href || current.startsWith(`${href}/`)
}

function isItemCurrent(item: NavItem, hash: string) {
  if (item.children) {
    if (item.children.some((child) => isHrefCurrent(child.href, hash))) return true
    if (item.label === 'Servicios' && hash.startsWith('#/servicios/')) return true
    return false
  }
  return item.href ? isHrefCurrent(item.href, hash) : false
}

function menuId(label: string) {
  return `menu-${label.toLowerCase().replace(/\s+/g, '-')}`
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [hash, setHash] = useState(window.location.hash)
  const linksRef = useRef<HTMLDivElement>(null)

  const closeMenus = useCallback(() => {
    setOpen(false)
    setOpenMenu(null)
    const active = document.activeElement
    if (active instanceof HTMLElement) active.blur()
  }, [])

  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash)
      closeMenus()
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [closeMenus])

  useEffect(() => {
    if (!openMenu) return
    const onPointerDown = (event: PointerEvent) => {
      if (linksRef.current && !linksRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [openMenu])

  return (
    <header className={styles.navbar}>
      <nav className={`shell ${styles.inner}`} aria-label="Navegación principal">
        <a className={styles.brand} href="#/" onClick={closeMenus}>
          <Brand variant="white" />
        </a>
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => {
            setOpen(!open)
            setOpenMenu(null)
          }}
        >
          <span /><span /><span />
        </button>
        <div className={`${styles.links} ${open ? styles.open : ''}`} id="main-menu" ref={linksRef}>
          {navItems.map((item) => {
            if (item.children) {
              const expanded = openMenu === item.label
              const panelId = menuId(item.label)
              return (
                <div className={styles.dropdown} key={item.label}>
                  <button
                    className={styles.dropLink}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    aria-haspopup="menu"
                    aria-current={isItemCurrent(item, hash) ? 'page' : undefined}
                    onClick={() => setOpenMenu(expanded ? null : item.label)}
                  >
                    {item.label}
                    <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`} aria-hidden="true">▾</span>
                  </button>
                  <div className={`${styles.menu} ${expanded ? styles.menuOpen : ''}`} id={panelId} role="menu">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        aria-current={isHrefCurrent(child.href, hash) ? 'page' : undefined}
                        onClick={closeMenus}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isItemCurrent(item, hash) ? 'page' : undefined}
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
