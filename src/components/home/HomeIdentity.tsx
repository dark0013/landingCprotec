import { alliances, mission, values, vision } from '../../data/about'
import { clients } from '../../data/home'
import styles from './HomeIdentity.module.css'

export function HomeIdentity() {
  return (
    <>
      <section className={`section ${styles.block}`} id="nosotros" aria-labelledby="nosotros-home">
        <div className="shell">
          <h2 className="section-title" id="nosotros-home">Nosotros</h2>
          <div className={styles.purpose}>
            <article>
              <img src={mission.icon} alt="" />
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
            </article>
            <article>
              <img src={vision.icon} alt="" />
              <h3>{vision.title}</h3>
              <p>{vision.text}</p>
            </article>
          </div>
          <div className={styles.values}>
            <div className={styles.diamond}>
              <img src={values.icon} alt="" />
              <h3>{values.title}</h3>
            </div>
            <ul className={styles.list}>
              {values.items.map((item, index) => (
                <li key={item} className={index === 4 ? styles.wide : undefined}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={`section ${styles.block}`} aria-labelledby="alianzas-home">
        <div className="shell">
          <div className={styles.partner}>
            <h2 className="section-title" id="alianzas-home">Convenios y alianzas estratégicas</h2>
            <div className={styles.strip}>
              {alliances.map((item) => (
                <img key={item.alt} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
          <div className={styles.partner}>
            <h2 className="section-title">Clientes</h2>
            <div className={styles.strip}>
              {clients.map((item) => (
                <img key={item.alt} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
