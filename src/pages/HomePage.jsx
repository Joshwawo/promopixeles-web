import React from 'react'
import Body from '../components/Home/Body'
import Carrusel from '../components/Home/Carrousel'
import EmpresaDesc from '../components/Home/EmpresaDesc'
import QuienesSomos from '../components/Home/Quienessomos'
import Y from '../components/Home/Y'

const HomePage = () => {
  return (
    <div className=''>
        <Carrusel/>
        <Body/>
        {/* <QuienesSomos/> */}
        {/* <EmpresaDesc/> */}
    </div>
  )
}

export default HomePage