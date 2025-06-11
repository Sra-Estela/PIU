import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Botoes from "./fundaments/Botoes"
import viteLogo from '/vite.svg'
import './App.css'
import { carros } from './fundaments/lista_carros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Botoes/>
      <Lista lista_carros={carros}/>
    </>
  )
}

export default App
