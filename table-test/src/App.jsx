import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="background">
      <div className="first-colum">
        <ul className="first-list">
          <li>
            <h2>Company</h2>
          </li>
          <li>navigation your next</li>
          <li>About us</li>
          <li>carrers</li>
          <li>ESG</li>
          <li>Investors</li>
        </ul>
      </div>
      <div className="second-colum">
      <ul className="second-list">
       <li> 
        <h1>Subsidiaries</h1>
        </li>
        <li>
          Edge verbe systems
        </li>
        <li>
          Infosys BPM
        </li>
        <li>
          Infosyse consulting
        </li>
        <li>Infosyse public service</li>
      </ul>
      </div>
      <div className="second-colum">
      <ul className="third-list"></ul>
      </div>
     </div>
    </>
  )
}

export default App
