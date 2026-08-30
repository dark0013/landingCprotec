import { useEffect, useState } from 'react'
import styles from './FloatingActions.module.css'

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!visible) return null

  return (
    <aside className={styles.actions} aria-label="Volver arriba">
      <button
        className={`${styles.action} ${styles.top}`}
        type="button"
        aria-label="Volver al inicio"
        onClick={() => {
          const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
        }}
      >
        ∧
      </button>
    </aside>
  )
}
