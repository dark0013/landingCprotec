import { Hero } from '../components/Hero/Hero'
import { HomeIdentity } from '../components/home/HomeIdentity'
import { HomeNews } from '../components/home/HomeNews'
import { HomePlans } from '../components/home/HomePlans'
import { HomePlatform } from '../components/home/HomePlatform'
import { HomeQuote } from '../components/home/HomeQuote'
import { HomeServices } from '../components/home/HomeServices'

export function HomePage() {
  return (
    <main id="contenido">
      <Hero />
      <HomeIdentity />
      <HomeServices />
      <HomePlans />
      <HomeQuote />
      <HomePlatform />
      <HomeNews />
    </main>
  )
}
