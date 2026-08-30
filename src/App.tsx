import { useEffect, useState } from 'react'
import { Layout } from './components/Layout/Layout'
import { AboutPage } from './components/SimplePage/AboutPage'
import { ContactPage } from './components/ContactPage/ContactPage'
import { LinePage } from './components/LinePage/LinePage'
import { NewsPage } from './components/SimplePage/NewsPage'
import { OfferingPage } from './components/OfferingPage/OfferingPage'
import { PlatformPage } from './components/SimplePage/PlatformPage'
import { PrivacyPage } from './components/SimplePage/PrivacyPage'
import { findLine, findOffering } from './data/catalog'
import { parseHash } from './lib/route'
import { HomePage } from './pages/HomePage'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const route = parseHash(hash)

  useEffect(() => {
    if (hash.startsWith('#/')) window.scrollTo(0, 0)
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
    page = offering ? <OfferingPage offering={offering} /> : <HomePage />
  }

  return <Layout>{page}</Layout>
}
