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
            <h2>Próximamente</h2>
            <p className={styles.copy}>
              Esta página usará el diseño de artículo destacado y riel lateral cuando CPROTEC publique noticias oficiales.
              No incluimos textos de relleno.
            </p>
          </article>
          <aside className={styles.rail} aria-label="Más noticias">
            <h2>Noticias</h2>
            <p>Aún no hay comunicados publicados.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
