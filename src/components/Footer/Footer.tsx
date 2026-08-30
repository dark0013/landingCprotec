import { Brand } from '../Brand/Brand'
import { company, locations, payments, privacyText } from '../../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className="shell">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <Brand variant="white" size="footer" />
            <p>Producciones digitales, capacitaciones y soluciones tecnológicas para proyectos que buscan conectar, comunicar y crecer.</p>
          </div>
          <address>
            <h2>Contáctanos</h2>
            {locations.map((location) => (
              <p key={location.city}>
                <strong>{location.city}</strong><br />
                {location.address}
              </p>
            ))}
            <ul className={styles.channels}>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
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
          <p>Todos los derechos reservados — CPROTEC ©</p>
        </div>
      </div>
    </footer>
  )
}
