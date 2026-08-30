import type { ReactNode } from 'react'
import { FloatingActions } from '../FloatingActions/FloatingActions'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </>
  )
}
