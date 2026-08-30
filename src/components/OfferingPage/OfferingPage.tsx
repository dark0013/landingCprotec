import type { Offering } from '../../data/catalog'
import styles from './OfferingPage.module.css'

export function OfferingPage({ offering }: { offering: Offering }) {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className={`shell ${styles.grid}`}>
          <div>
            <a className={styles.back} href="#/">← Volver a servicios</a>
            <p className="eyebrow">CPROTEC</p>
            <h1>{offering.title}</h1>
            <p>{offering.description}</p>
            <a className="button button--primary" href="#/contacto">Solicita información <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.image}>
            <img src={offering.image} alt={offering.imageAlt} />
          </div>
        </div>
      </section>
      <section className={`section ${styles.detail}`}>
        <div className="shell">
          <p className="eyebrow">Enfoque a tu medida</p>
          <h2>Una solución que acompaña tus objetivos</h2>
          <p>Combinamos creatividad, planificación y herramientas profesionales para construir una propuesta coherente con las necesidades de cada cliente.</p>
          <a className={`${styles.back} ${styles.backDark}`} href="#/">Ver todos los servicios</a>
        </div>
      </section>
    </main>
  )
}
