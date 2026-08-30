import { type FormEvent, useEffect, useRef, useState } from 'react'
import { plans } from '../../data/home'
import { submitForm, type FormResult } from '../../lib/submitForm'
import styles from './HomeQuote.module.css'

export function HomeQuote() {
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
    <section className={`section ${styles.block}`} id="cotizacion" aria-labelledby="cotizacion-home">
      <div className="shell">
        <h2 className="section-title" id="cotizacion-home">Realiza tu cotización</h2>
        <form className={styles.form} ref={formRef} onSubmit={submit}>
          <input className="visually-hidden" type="text" name="company_website" tabIndex={-1} autoComplete="off" />
          <label className={styles.nombre}>Nombre (obligatorio)<input name="nombre" autoComplete="given-name" required /></label>
          <label className={styles.plan}>Plan
            <select name="plan" required defaultValue="">
              <option value="" disabled>Selecciona un plan</option>
              {plans.map((plan) => <option key={plan} value={plan}>{plan}</option>)}
            </select>
          </label>
          <label className={styles.apellido}>Apellido (obligatorio)<input name="apellido" autoComplete="family-name" required /></label>
          <label className={styles.mensaje}>Mensaje<textarea name="mensaje" rows={6} required /></label>
          <label className={styles.celular}>Celular (obligatorio)<input name="celular" type="tel" autoComplete="tel" required /></label>
          <label className={styles.correo}>Correo electrónico (obligatorio)<input name="correo" type="email" autoComplete="email" required /></label>
          <button type="submit">Enviar</button>
          {status && <p className={status.ok ? styles.status : styles.error} role="status">{status.message}</p>}
        </form>
      </div>
    </section>
  )
}
