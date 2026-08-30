import { Brand } from '../Brand/Brand'
import { company, locations, payments, privacyText } from '../../data/site'
import { socialChannels } from '../../data/social'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <Brand variant="white" size="footer" />
          <button
            className={styles.toTop}
            type="button"
            aria-label="Volver al inicio"
            onClick={() => {
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
              window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
            }}
          >
            ∧
          </button>
        </div>
        <div className={styles.grid}>
          <address>
            <h2>Contáctanos</h2>
            {locations.map((location) => (
              <p key={location.city}>
                <strong>{location.city}:</strong> {location.address}
              </p>
            ))}
            <ul className={styles.channels}>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {socialChannels.filter((item) => item.id !== 'chat').map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <a className={styles.channel} href={item.href} target="_blank" rel="noopener noreferrer">
                      <img src={item.icon} alt="" />
                      {item.label}
                    </a>
                  ) : (
                    <span className={styles.channel} title={`${item.label} (enlace pendiente)`}>
                      <img src={item.icon} alt="" />
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </address>
          <div className={styles.privacy}>
            <h2>Políticas de privacidad</h2>
            <p>{privacyText[0]}</p>
            <p>{privacyText[1]}</p>
            <a href="#/privacidad">Leer política completa</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.payments} aria-label="Métodos de pago disponibles">
            {payments.map((item) => (
              <img key={item.alt} src={item.src} alt={item.alt} />
            ))}
          </div>
          <p>Derechos reservados para CPROTEC ©</p>
        </div>
      </div>
    </footer>
  )
}
