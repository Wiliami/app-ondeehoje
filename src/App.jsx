import { useState } from 'react'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import Categorias from './components/Categorias'
import RolesSection from './components/RolesSection'
import ValoresSection from './components/ValoresSection'
import MapaAlta from './components/MapaAlta'
import Footer from './components/Footer'

export default function App() {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  return (
    <>
      <Hero />
      <SearchSection query={query} setQuery={setQuery} />
      {/* <Categorias categoria={categoria} setCategoria={setCategoria} /> */}
      <RolesSection query={query} categoria={categoria} />
      <div className="divider" />
      <ValoresSection />
      <div className="divider" />
      <MapaAlta />
      <Footer />
    </>
  )
}
