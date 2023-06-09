import React from 'react'
import './App.css'
import BarraInicial from './components/BarraInicial/BarraInicial.jsx'
import Imagen1 from './components/Imagen1/Imagen1.jsx'
import Texto1 from './components/Texto1/Texto1.jsx'
import DriverCards from './components/DriverCards/DriverCards.jsx'
import ManagementCards from './components/ManagementCards/ManagementCards.jsx'
import BigCards from './components/BigCards/BigCards.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarraInicial />
      </header>
      <div>
        <Imagen1 />
      </div>
      <div>
        <Texto1 />
      </div>
      <div>
        <DriverCards />
      </div>
      <div>
        <ManagementCards />
      </div>
      <div>
        <BigCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
