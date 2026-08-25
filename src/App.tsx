import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { ServicePage } from './components/ServicePage'
import { services } from './data/services'

export default function App() {
  const [route, setRoute] = useState(window.location.hash)
  useEffect(() => { const onHashChange = () => setRoute(window.location.hash); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  const slug = route.match(/^#\/servicios\/([^/]+)$/)?.[1]
  const service = services.find((item) => item.slug === slug)
  if (service) return <><a className="skip-link" href="#contenido">Saltar al contenido principal</a><Navbar variant="service" /><ServicePage service={service} /><Footer /><FloatingActions /></>
  return <><a className="skip-link" href="#contenido">Saltar al contenido principal</a><Navbar /><main id="contenido"><Hero /><Services /></main><Footer /><FloatingActions /></>
}
import { useEffect, useState } from 'react'
