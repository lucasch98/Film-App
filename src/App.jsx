import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFilm from './components/inputFilm'
import TitlePage from './components/titlePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div>
          <TitlePage />
          <InputFilm />
        </div>
      </div>
    </>
  )
}

export default App
