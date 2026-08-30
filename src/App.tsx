import { useEffect, useState } from 'react'
import { Layout } from './components/Layout/Layout'
import { AboutPage } from './components/AboutPage/AboutPage'
import { ContactPage } from './components/ContactPage/ContactPage'
import { LinePage } from './components/LinePage/LinePage'
import { NewsPage } from './components/SimplePage/NewsPage'
import { OfferingPage } from './components/OfferingPage/OfferingPage'
import { PlatformPage } from './components/SimplePage/PlatformPage'
import { PrivacyPage } from './components/SimplePage/PrivacyPage'
import { findLine, findLineForOffering, findOffering } from './data/catalog'
import { parseHash } from './lib/route'
import { HomePage } from './pages/HomePage'

function pageTitle(hash: string) {
  const route = parseHash(hash)
  if (route.name === 'about') return 'Nosotros | CPROTEC'
  if (route.name === 'contact') return 'Contáctanos | CPROTEC'
  if (route.name === 'news') return 'Noticias | CPROTEC'
  if (route.name === 'platform') return 'Plataforma educativa | CPROTEC'
  if (route.name === 'privacy') return 'Política de privacidad | CPROTEC'
  if (route.name === 'line') {
    const line = findLine(route.slug)
    return line ? `${line.title} | CPROTEC` : 'CPROTEC | Tecnología y capacitación'
  }
  if (route.name === 'offering') {
    const offering = findOffering(route.slug)
    return offering ? `${offering.title} | CPROTEC` : 'CPROTEC | Tecnología y capacitación'
  }
  return 'CPROTEC | Tecnología y capacitación'
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const route = parseHash(hash)

  useEffect(() => {
    document.title = pageTitle(hash)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    if (hash.startsWith('#/')) {
      window.scrollTo(0, 0)
      return
    }
    if (hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
  }, [hash])

  let page = <HomePage />
  if (route.name === 'contact') page = <ContactPage />
  if (route.name === 'about') page = <AboutPage />
  if (route.name === 'news') page = <NewsPage />
  if (route.name === 'platform') page = <PlatformPage />
  if (route.name === 'privacy') page = <PrivacyPage />
  if (route.name === 'line') {
    const line = findLine(route.slug)
    page = line ? <LinePage line={line} /> : <HomePage />
  }
  if (route.name === 'offering') {
    const offering = findOffering(route.slug)
    const line = findLineForOffering(route.slug)
    page = offering ? <OfferingPage offering={offering} line={line} /> : <HomePage />
  }

  return <Layout>{page}</Layout>
}
