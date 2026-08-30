import { homeLine } from '../../data/catalog'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className={`section ${styles.section}`} id="servicios" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Nuestro expertise</p>
          <h2 id="services-title">Nuestros servicios</h2>
          <p>Soluciones creadas para dar presencia, alcance y valor a cada proyecto.</p>
        </div>
        <div className={styles.grid}>
          {homeLine.offerings.map((offering) => (
            <ServiceCard key={offering.slug} offering={offering} />
          ))}
        </div>
      </div>
    </section>
  )
}
