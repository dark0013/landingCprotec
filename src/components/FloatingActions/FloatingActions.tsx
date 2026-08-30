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

  return (
    <aside className={styles.actions} aria-label="Acciones rápidas">
      <button className={`${styles.action} ${styles.pending}`} type="button" aria-label="Chat: canal pendiente de configuración" title="Chat pendiente de configuración">
        <img src="/assets/icons/chat.png" alt="" />
      </button>
      <button className={`${styles.action} ${styles.pending}`} type="button" aria-label="WhatsApp: canal pendiente de configuración" title="WhatsApp pendiente de configuración">
        <img src="/assets/icons/whatsapp.png" alt="" />
      </button>
      {visible && (
        <button
          className={`${styles.action} ${styles.top}`}
          type="button"
          aria-label="Volver al inicio"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </aside>
  )
}
