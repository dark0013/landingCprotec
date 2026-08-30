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
            La plataforma educativa de CPROTEC se habilitará cuando exista el acceso oficial.
            Mientras tanto, puedes escribirnos para conocer las capacitaciones disponibles.
          </p>
          <p><a className="button" href="#/contacto">Contáctanos</a></p>
        </div>
      </section>
    </main>
  )
}
