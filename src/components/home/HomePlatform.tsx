import { platformTracks } from '../../data/home'
import styles from './HomePlatform.module.css'

export function HomePlatform({ showHeading = true, showCta = true }: { showHeading?: boolean; showCta?: boolean }) {
  return (
    <section className={`section ${styles.block}`} id={showHeading ? 'plataforma' : undefined} aria-labelledby={showHeading ? 'plataforma-home' : undefined}>
      <div className="shell">
        {showHeading && <h2 className="section-title" id="plataforma-home">Plataforma educativa</h2>}
        <div className={styles.grid}>
          {platformTracks.map((track) => (
            <article className={styles.card} key={track.title}>
              <img src={track.image} alt={`Formación en ${track.title}`} />
              <div className={styles.body}>
                <h3>{track.title}</h3>
                <ul>
                  {track.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {showCta && (
          <div className={styles.cta}>
            <a href="#/plataforma">Accede a plataforma educativa</a>
          </div>
        )}
      </div>
    </section>
  )
}
