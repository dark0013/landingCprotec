import { type FormEvent, useEffect, useRef, useState } from 'react'
import { locations, team } from '../../data/site'
import { socialChannels } from '../../data/social'
import { submitForm, type FormResult } from '../../lib/submitForm'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const [status, setStatus] = useState<FormResult | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current) formRef.current.dataset.started = String(Date.now())
  }, [])

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(await submitForm(event.currentTarget))
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
          <form className={styles.form} ref={formRef} onSubmit={submit}>
            <input className="visually-hidden" type="text" name="company_website" tabIndex={-1} autoComplete="off" />
            <label className={styles.nombre}>Nombre <span>(obligatorio)</span><input name="nombre" autoComplete="given-name" required /></label>
            <label className={styles.asunto}>Asunto <input name="asunto" /></label>
            <label className={styles.apellido}>Apellido <span>(obligatorio)</span><input name="apellido" autoComplete="family-name" required /></label>
            <label className={styles.mensaje}>Mensaje <textarea name="mensaje" rows={8} required /></label>
            <label className={styles.celular}>Celular <span>(obligatorio)</span><input name="celular" type="tel" autoComplete="tel" required /></label>
            <label className={styles.correo}>Correo electrónico <span>(obligatorio)</span><input name="correo" type="email" autoComplete="email" required /></label>
            <button className="button" type="submit">Enviar</button>
            {status && <p className={status.ok ? styles.status : styles.error} role="status">{status.message}</p>}
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
          <div className={styles.social} aria-label="Canales de CPROTEC">
            {socialChannels.filter((item) => item.id !== 'chat').map((item) => (
              <article key={item.id}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.icon} alt="" />
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <span title={`${item.label} (enlace pendiente)`}>
                    <img src={item.icon} alt="" />
                    <span>{item.label}</span>
                  </span>
                )}
              </article>
            ))}
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
