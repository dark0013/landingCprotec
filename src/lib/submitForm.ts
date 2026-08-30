export type FormResult = { ok: boolean; message: string }

export async function submitForm(form: HTMLFormElement): Promise<FormResult> {
  const data = new FormData(form)
  if (String(data.get('company_website') ?? '').trim() !== '') {
    return { ok: true, message: 'Gracias. Recibimos tu mensaje y te contactaremos pronto.' }
  }
  const started = Number(form.dataset.started ?? 0)
  if (started && Date.now() - started < 1200) {
    return { ok: false, message: 'Espera un momento y vuelve a enviar.' }
  }

  try {
    const response = await fetch('/contacto.php', { method: 'POST', body: data })
    const payload = await response.json().catch(() => ({})) as { ok?: boolean; error?: string }
    if (response.ok && payload.ok) {
      form.reset()
      form.dataset.started = String(Date.now())
      return { ok: true, message: 'Gracias. Recibimos tu mensaje y te contactaremos pronto.' }
    }
    if (response.status >= 400 && response.status < 500) {
      return { ok: false, message: payload.error || 'Revisa los datos e inténtalo de nuevo.' }
    }
    if (payload.error) {
      return { ok: false, message: payload.error }
    }
  } catch {
    /* Hosting without PHP. */
  }

  const correo = String(data.get('correo') ?? '')
  const asunto = String(data.get('asunto') || data.get('plan') || 'Consulta CPROTEC')
  const plan = String(data.get('plan') ?? '')
  const cuerpo = [
    `Nombre: ${data.get('nombre')} ${data.get('apellido')}`,
    `Celular: ${data.get('celular')}`,
    `Correo: ${correo}`,
    plan ? `Plan: ${plan}` : '',
    '',
    String(data.get('mensaje') ?? ''),
  ].filter((line) => line !== '').join('\n')

  window.location.href = `mailto:info@cprotec.net?subject=${encodeURIComponent(String(asunto))}&body=${encodeURIComponent(cuerpo)}`
  return { ok: true, message: 'Para finalizar tu solicitud, completa el correo dirigido a info@cprotec.net.' }
}
