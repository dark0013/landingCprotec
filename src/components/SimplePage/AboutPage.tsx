import { lines } from '../../data/catalog'
import { locations, company } from '../../data/site'
import styles from './SimplePage.module.css'

export function AboutPage() {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className="shell">
          <p className="eyebrow" style={{ color: '#fff', opacity: .75 }}>CPROTEC</p>
          <h1>Nosotros</h1>
        </div>
      </section>
      <section className={`section ${styles.body}`}>
        <div className="shell">
          <p className={styles.copy}>
            CPROTEC es un centro profesional de tecnología y capacitación con presencia en Portoviejo y Guayaquil.
            Integramos producciones digitales, formación, soluciones tecnológicas y productos informáticos para acompañar a empresas e instituciones.
          </p>
          <div className={styles.grid}>
            {lines.map((line) => (
              <article className={styles.card} key={line.slug}>
                <h2>{line.title}</h2>
                <p>{line.description}</p>
                <p><a href={`#/${line.slug === 'producciones-digitales' ? '' : line.slug}`}>Ver línea</a></p>
              </article>
            ))}
            {locations.map((location) => (
              <article className={styles.card} key={location.city}>
                <h2>{location.city}</h2>
                <p>{location.address}</p>
              </article>
            ))}
            <article className={styles.card}>
              <h2>Contacto</h2>
              <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
              <p>{company.website}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
