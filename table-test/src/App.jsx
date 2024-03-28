import { useState } from 'react'
import './App.css'
import cardimg from"./assets/card1.jpeg";
import newcardimg from"./assets/card1.jpeg";
import lastcardimg from"./assets/card1.jpeg";
import Header from './camponants/Header';
import Footer from './camponants/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="mainpage">
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
        <h2>Subsidiaries</h2>
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
      <div className="third-colum">
      <ul className="third-list">
        <li>
          <h2>programe</h2>
          </li>
        <li>
         Infosys foundation
        </li>
        <li>
          Infosys foundation USA
        </li>
        <li>
          Infosys science foundation
        </li>
        <li>Infosys leadership Institute</li>
      </ul>
      </div>
     </div>
     <div className="bottompart">
      <div>
        <img src= {cardimg} alt="card" />
      </div>
      <div>
        <img src={newcardimg} alt="card" />
      </div>
      <div>
        <img src={lastcardimg} alt="card" />
      </div>
     </div>
     </div>
     <Footer />
    </>
  )
}

export default App
