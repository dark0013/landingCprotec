import { alliances, mission, values, vision } from '../../data/about'
import { locations } from '../../data/site'
import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <main className={styles.page} id="contenido">
      <header className={styles.heading}>
        <div className="shell">
          <h1>Nosotros</h1>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className={styles.purpose}>
            <article>
              <img src={mission.icon} alt="" />
              <h2>{mission.title}</h2>
              <p>{mission.text}</p>
            </article>
            <article>
              <img src={vision.icon} alt="" />
              <h2>{vision.title}</h2>
              <p>{vision.text}</p>
            </article>
          </div>

          <div className={styles.values}>
            <div className={styles.diamond}>
              <img src={values.icon} alt="" />
              <h2>{values.title}</h2>
            </div>
            <ul className={styles.list}>
              {values.items.map((item, index) => (
                <li key={item} className={index === 4 ? styles.wide : undefined}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.alliances}>
            <h2>Sedes</h2>
            <div className={styles.sites}>
              {locations.map((location) => (
                <article key={location.city}>
                  <h3>{location.city}</h3>
                  <p>{location.address}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.alliances}>
            <h2>Convenios y alianzas estratégicas</h2>
            <div className={styles.strip}>
              {alliances.map((item) => (
                <img key={item.alt} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
