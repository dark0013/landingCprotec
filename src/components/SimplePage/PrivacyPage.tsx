import { privacyText } from '../../data/site'
import styles from './SimplePage.module.css'

export function PrivacyPage() {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className="shell">
          <h1>Políticas de privacidad</h1>
        </div>
      </section>
      <section className={`section ${styles.body}`}>
        <div className="shell">
          {privacyText.map((paragraph) => (
            <p className={styles.copy} key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
