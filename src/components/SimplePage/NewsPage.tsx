import styles from './SimplePage.module.css'

export function NewsPage() {
  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className="shell">
          <h1>Noticias</h1>
        </div>
      </section>
      <section className={`section ${styles.body}`}>
        <div className={`shell ${styles.news}`}>
          <article>
            <img src="/assets/lines/noticias.jpg" alt="Espacio editorial de CPROTEC" />
            <div className="section-heading" style={{ marginTop: '1.4rem' }}>
              <h2>Próximamente</h2>
              <p className={styles.copy}>Las noticias institucionales se publicarán en este espacio cuando CPROTEC libere contenidos oficiales. No incluimos textos de relleno.</p>
            </div>
          </article>
          <aside className={styles.card}>
            <h2>Noticias</h2>
            <p>Este panel quedará listo para novedades, capacitaciones y comunicados oficiales.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
