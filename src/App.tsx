import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido principal</a><Navbar /><main id="contenido"><Hero /><Services /></main><Footer /><FloatingActions /></>
}
