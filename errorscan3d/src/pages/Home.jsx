import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Home.scss'


function Home() {
  return (
    <div className='home-fundo' >
      
      <NavBar />
      <div className='home'>
        <div className='home-container1'>
          <div className='container1-conteudo'>
            <p className='container1-titulo'>
              Bem-vindo ao ErrorScan3D
            </p>
            <p className='container1-texto'>
              Esta aplicação foi desenvolvida para ajudar você a identificar problemas em impressões 3D de forma rápida e precisa.
            </p>
          </div>

        </div>
        <div className='home-container2'>
          <p className='container2-texto'>
            Envie uma imagem, visualize os resultados e otimize seus processos de fabricação!
          </p>
        </div>


      </div>
    </div>
  )
}

export default Home
