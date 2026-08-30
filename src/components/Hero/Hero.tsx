import { Brand } from '../Brand/Brand'
import { homeLine } from '../../data/catalog'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" data-accent={homeLine.accent} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true" />
      <div className={`shell ${styles.grid}`}>
        <div>
          <div className={styles.wordmark}>
            <Brand variant="white" size="hero" />
            <h1 id="hero-title">{homeLine.title}</h1>
          </div>
          <hr className={styles.divider} />
          <p className={styles.lead}>{homeLine.description}</p>
          <ul className={styles.services} aria-label="Servicios principales">
            {homeLine.offerings.map((item) => <li key={item.slug}>{item.title}</li>)}
          </ul>
          <a className="button button--primary button--light" href="#servicios">Conoce más <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.visual}>
          <div className={styles.frame}>
            <img src={homeLine.heroImage} alt="Espacio de trabajo de producción y diseño digital" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  )
}
