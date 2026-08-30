import { planRows, plans } from '../../data/home'
import styles from './HomePlans.module.css'

export function HomePlans() {
  return (
    <section className={`section ${styles.block}`} aria-labelledby="planes-home">
      <div className="shell">
        <h2 className="section-title" id="planes-home">Conoce nuestros planes</h2>
        <p className={styles.tableTitle}>Creación de página web</p>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <caption className="visually-hidden">Comparativa de planes de creación de página web</caption>
            <thead>
              <tr>
                <th scope="col">Prestación</th>
                {plans.map((plan) => <th scope="col" key={plan}>{plan}</th>)}
              </tr>
            </thead>
            <tbody>
              {planRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  {row.values.map((included, index) => (
                    <td key={plans[index]} className={included ? styles.yes : styles.no}>
                      {included ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.cards}>
          {plans.map((plan, index) => (
            <article className={styles.card} key={plan}>
              <h3>{plan}</h3>
              <ul>
                {planRows.map((row) => (
                  <li key={row.feature} className={row.values[index] ? undefined : styles.out}>
                    {row.values[index] ? '✓' : '✗'} {row.feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <a href="#cotizacion">Realiza tu cotización</a>
        </div>
      </div>
    </section>
  )
}
