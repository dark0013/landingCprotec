import { type FormEvent, useState } from 'react'
import { locations, team } from '../../data/site'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const [status, setStatus] = useState('')

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const response = await fetch('/contacto.php', { method: 'POST', body: data })
      if (response.ok) {
        const payload = await response.json() as { ok?: boolean }
        if (payload.ok) {
          setStatus('Gracias. Recibimos tu mensaje y te contactaremos pronto.')
          form.reset()
          return
        }
      }
    } catch {
      /* Hosting without PHP: keep a truthful fallback. */
    }
    const correo = String(data.get('correo') ?? '')
    const asunto = String(data.get('asunto') || 'Consulta CPROTEC')
    const cuerpo = `Nombre: ${data.get('nombre')} ${data.get('apellido')}\nCelular: ${data.get('celular')}\nCorreo: ${correo}\n\n${data.get('mensaje')}`
    window.location.href = `mailto:info@cprotec.net?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    setStatus('Para finalizar tu solicitud, completa el correo dirigido a info@cprotec.net.')
  }

  return (
    <main className={styles.page} id="contenido">
      <section className={styles.hero}>
        <div className="shell">
          <h1>Contáctanos</h1>
        </div>
      </section>

      <section className={`section ${styles.formSection}`}>
        <div className={`shell ${styles.formWrap}`}>
          <form className={styles.form} onSubmit={submit}>
            <label className={styles.nombre}>Nombre <span>(obligatorio)</span><input name="nombre" autoComplete="given-name" required /></label>
            <label className={styles.asunto}>Asunto <input name="asunto" /></label>
            <label className={styles.apellido}>Apellido <span>(obligatorio)</span><input name="apellido" autoComplete="family-name" required /></label>
            <label className={styles.mensaje}>Mensaje <textarea name="mensaje" rows={8} required /></label>
            <label className={styles.celular}>Celular <span>(obligatorio)</span><input name="celular" type="tel" autoComplete="tel" required /></label>
            <label className={styles.correo}>Correo electrónico <span>(obligatorio)</span><input name="correo" type="email" autoComplete="email" required /></label>
            <button className="button" type="submit">Enviar</button>
            {status && <p className={styles.status} role="status">{status}</p>}
          </form>
        </div>
      </section>

      <section className={`section ${styles.locations}`}>
        <div className="shell">
          <div className={styles.locationBox}>
            <h2>Encuéntranos en</h2>
            <div className={styles.maps}>
              {locations.map((location) => (
                <article key={location.city}>
                  <h3>{location.city}</h3>
                  <p>{location.address}</p>
                  <iframe
                    title={`Mapa de ${location.city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(location.query)}&z=16&output=embed`}
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className={styles.social} aria-label="Redes pendientes de enlace oficial">
            <article><img src="/assets/icons/facebook.png" alt="" /><span>Facebook</span></article>
            <article><img src="/assets/icons/instagram.png" alt="" /><span>Instagram</span></article>
            <article><img src="/assets/icons/whatsapp.png" alt="" /><span>WhatsApp</span></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Contacto directo</p>
            <h2>Contacto</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((person) => (
              <article key={person.email}>
                <div className={styles.photo} aria-hidden="true" />
                <div className={styles.meta}>
                  <p>{person.area}</p>
                  <h3>{person.name}</h3>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  <a href={`tel:${person.tel}`}>{person.phone}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
