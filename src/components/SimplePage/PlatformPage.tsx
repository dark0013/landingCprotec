import { HomePlatform } from '../home/HomePlatform'
import styles from './SimplePage.module.css'

export function PlatformPage() {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className="shell">
          <h1>Plataforma educativa</h1>
        </div>
      </section>
      <section className={`section ${styles.body}`}>
        <div className="shell">
          <p className={styles.copy}>
            El acceso al campus en línea se habilitará cuando CPROTEC publique la URL oficial.
            El programa de formación ya publicado es el siguiente.
          </p>
        </div>
      </section>
      <HomePlatform showHeading={false} showCta={false} />
    </main>
  )
}
