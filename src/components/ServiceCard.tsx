import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  return <article className={`service-card service-card--${service.accent}`}>
    <div className="service-card__image"><img src={service.image} alt={service.imageAlt} loading="lazy" /></div>
    <div className="service-card__body"><span className="service-card__number" aria-hidden="true">0{['blue', 'red', 'cyan'].indexOf(service.accent) + 1}</span><h3>{service.title}</h3><span className="service-card__line" /><p>{service.description}</p></div>
  </article>
}
