import { useState } from 'react'
import './App.css'
import InputFilm from './components/inputFilm'
import TitlePage from './components/titlePage'
import NavbarPage from './components/navbarPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <NavbarPage />
      <TitlePage />
      <InputFilm />
    </>
  )
}

export default App
