import { homeLines } from '../../data/home'
import styles from './HomeServices.module.css'

export function HomeServices() {
  return (
    <section className={`section ${styles.block}`} id="servicios" aria-labelledby="servicios-home">
      <div className="shell">
        <h2 className="section-title" id="servicios-home">Servicios</h2>
        <div className={styles.grid}>
          {homeLines.map((line) => (
            <a className={`${styles.card} ${styles[line.area]}`} href={`#/${line.slug}`} key={line.slug}>
              <img src={line.image} alt={`Servicios de ${line.title}`} />
              <div className={styles.body}>
                <h3>{line.title}</h3>
                <ul>
                  {line.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
