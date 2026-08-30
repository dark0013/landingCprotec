import { Brand } from '../Brand/Brand'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import type { Line } from '../../data/catalog'
import styles from './LinePage.module.css'

export function LinePage({ line }: { line: Line }) {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero} data-accent={line.accent}>
        <div className={`shell ${styles.grid}`}>
          <div>
            <a className={styles.homeLink} href="#/">Inicio</a>
            <div className={styles.wordmark}>
              <Brand variant="white" size="hero" />
              <h1>{line.title}</h1>
            </div>
            <hr className={styles.divider} />
            <ul className={styles.list}>
              {line.offerings.map((item) => <li key={item.slug}>{item.title}</li>)}
            </ul>
          </div>
          <div className={styles.image}>
            <img src={line.heroImage} alt={`Imagen de ${line.title}`} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{line.kicker}</p>
            <h2>{line.slug === 'productos' ? 'Nuestros productos' : 'Nuestros servicios'}</h2>
            <p>{line.description}</p>
          </div>
          <div className={styles.gridCards}>
            {line.offerings.map((offering) => (
              <ServiceCard key={offering.slug} offering={offering} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
