import type { Offering } from '../../data/catalog'
import styles from './ServiceCard.module.css'

export function ServiceCard({ offering }: { offering: Offering }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={offering.image} alt={offering.imageAlt} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3>{offering.title}</h3>
        <span className={styles.line} />
        <p>{offering.description}</p>
        <a className={styles.link} href={`#/servicios/${offering.slug}`}>
          Conoce el servicio <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
