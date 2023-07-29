import { useState } from 'react'
import cedralLogo from "../assets/CEDRAL 2 (1).png"
import "./App.css"
import "../components/Header/index"
import Header from '../components/Header/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <Header/>
        </header>
    
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cedral{count}
        </button>
        <p>
         Tienda MAikol
        </p>
      </div>
    
    </>
  )
}

export default App

