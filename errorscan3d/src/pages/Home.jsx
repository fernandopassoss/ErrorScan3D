import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Home.scss'

function Home() {
  return (
    <div>

      <NavBar />
      <div className='home'>

        
        <div className='home-container1'>
          <p>
            Bem-vindo ao ErrorScan3D
          </p>
          <p>
            Esta aplicação foi desenvolvida para ajudar você a identificar problemas em impressões 3D de forma rápida e precisa.
          </p>
        </div>
        <div className='home-container-2'>

        </div>
        

      </div>
    </div>
  )
}

export default Home
