import { socialChannels } from '../../data/social'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <img className={styles.photo} src="/assets/hero.jpg" alt="Espacio de trabajo de diseño y tecnología de CPROTEC" fetchPriority="high" />
      <div className={styles.veil} aria-hidden="true" />
      <div className={`shell ${styles.inner}`}>
        <div>
          <h1 className={styles.title} id="hero-title">
            <span>Bienvenido a</span>
            <span>CPROTEC</span>
          </h1>
          <a className={styles.platform} href="#/plataforma">Accede a plataforma educativa</a>
        </div>
        <ul className={styles.actions} aria-label="Canales de CPROTEC">
          {socialChannels.map((item) => {
            const inner = (
              <>
                {item.id === 'chat' ? <span className={styles.chipLabel}>CHAT</span> : null}
                <img src={item.icon} alt="" />
                <span className="visually-hidden">{item.label}</span>
              </>
            )
            return (
              <li key={item.id}>
                {item.href ? (
                  <a className={styles.chip} href={item.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <span className={styles.chip} title={`${item.label} (enlace pendiente)`}>
                    {inner}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
