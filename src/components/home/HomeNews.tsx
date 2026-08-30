import styles from './HomeNews.module.css'

export function HomeNews() {
  return (
    <section className={`section ${styles.block}`} id="noticias" aria-labelledby="noticias-home">
      <div className="shell">
        <h2 className="section-title" id="noticias-home">Noticias</h2>
        <div className={styles.grid}>
          <article className={styles.news}>
            <img src="/assets/lines/noticias.jpg" alt="Espacio editorial de CPROTEC" />
            <div className={styles.copy}>
              <h3>Novedades institucionales</h3>
              <p>Las noticias de CPROTEC se publicarán en este espacio cuando exista contenido oficial. No utilizamos textos de relleno.</p>
              <a href="#/noticias">Ver página de noticias</a>
            </div>
          </article>
          <aside className={styles.instagram}>
            <h3>Instagram</h3>
            <p>El perfil se mostrará aquí cuando exista la URL oficial. No publicamos piezas de ejemplo.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
