export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true" />
      <div className="shell hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Soluciones creativas y tecnológicas</p>
          <h1 id="hero-title">CPROTEC <span>Producciones Digitales</span></h1>
          <p className="hero__lead">Transformamos ideas en experiencias visuales que conectan marcas, personas y oportunidades.</p>
          <ul className="hero__services" aria-label="Servicios principales">
            <li>Diseño Gráfico Publicitario</li><li>Marketing y publicidad</li><li>Servicios audiovisuales para eventos sociales</li>
          </ul>
          <a className="button button--primary" href="#servicios">Conoce más <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero__visual">
          <div className="hero__frame"><img src="/assets/hero.jpg" alt="Espacio de trabajo de producción y diseño digital" fetchPriority="high" /></div>
          <div className="hero__badge"><strong>Creatividad</strong><span>que impulsa</span></div>
        </div>
      </div>
    </section>
  )
}
