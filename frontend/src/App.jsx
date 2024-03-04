import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import brcLogo from '/brclogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <div className='row'>
      <div className='col'>
      </div>
      <div className='col'>
        <h1>Basics of the Couch 2 5K program</h1>
        <p>We will meet 2 times per week at the Belleville East High School Track.</p>
      </div>
      <div className='col'>
      </div>
    </div>
     <div className="row">
     <h1 className='text-center'>Couch 2 5K Purchasing Options</h1>
      <div className="col"></div>
      <div className="col"> <img src={brcLogo} alt='Belleville Running Club' height="500" /></div>
      <div className="col"></div>
     </div>
     <div className='row mt-5'>
     <div className="col">
      <h2>Option 1 - $15</h2>
      <p>Purchase includes Belleville Running Clubs Couch 2 5K training program, weekly group training sessions, and C25K completion T-shirt.</p>
      <a href="https://square.link/u/SkTC2bAW" className="btn btn-primary" target="_blank" rel="noreferrer">Buy Option 1</a>
    </div>
    <div className="col">
      <h2>Option 2 - $25</h2>
      <p>Purchase includes a Couch 2 5K training program with weekly group training sessions, C25K completion T-shirt, and 1 year Belleville Running Club Membership</p>
      <a href="https://square.link/u/HaqsRAW6" className="btn btn-primary" target="_blank" rel="noreferrer">Buy Option 2</a>
    </div>
    <div className="col">
    <h2>Option 3 - $50</h2>
      <p>Purchase includes a Couch 2 5K training program, weekly group training sessions, C25K completion T-shirt, 1 year Belleville Running Club Membership, and 2023 Law Day 5K Race entry.</p>
      <a href="https://square.link/u/SeOQBFX7" className="btn btn-primary" target="_blank" rel="noreferrer">Buy Option 3</a>
    </div>
     </div>
    </div>
  )
}

export default App
