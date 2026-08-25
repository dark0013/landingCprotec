import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return <section className="services section" id="servicios" aria-labelledby="services-title">
    <div className="shell"><div className="section-heading"><p className="eyebrow">Nuestro expertise</p><h2 id="services-title">Nuestros servicios</h2><p>Soluciones creadas para dar presencia, alcance y valor a cada proyecto.</p></div><div className="services__grid">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div></div>
  </section>
}
