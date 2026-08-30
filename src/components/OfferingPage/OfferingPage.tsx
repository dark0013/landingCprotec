import type { Line, Offering } from '../../data/catalog'
import { lineHref } from '../../data/catalog'
import styles from './OfferingPage.module.css'

export function OfferingPage({ offering, line }: { offering: Offering; line?: Line }) {
  const backHref = line ? lineHref(line.slug) : '#/'
  const backLabel = line ? `← Volver a ${line.title}` : '← Volver a servicios'

  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className={`shell ${styles.grid}`}>
          <div>
            <a className={styles.back} href={backHref}>{backLabel}</a>
            <p className="eyebrow">{line?.title ?? 'CPROTEC'}</p>
            <h1>{offering.title}</h1>
            <p>{offering.description}</p>
            <a className="button button--primary" href="#/contacto">Solicita información <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.image}>
            <img src={offering.image} alt={offering.imageAlt} />
          </div>
        </div>
      </section>
    </main>
  )
}
