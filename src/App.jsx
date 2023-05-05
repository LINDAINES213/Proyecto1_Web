import React from 'react'
import './App.css'
import BarraInicial from './components/BarraInicial/BarraInicial'
import Imagen1 from './components/Imagen1/Imagen1'
import Texto1 from './components/Texto1/Texto1'
import DriverCards from './components/DriverCards/DriverCards'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
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
    </div>
  )
}

export default App
