import React from 'react'
import Body from '../components/Body'
import Carrusel from '../components/Carrousel'
import EmpresaDesc from '../components/EmpresaDesc'
import QuienesSomos from '../components/Quienessomos'
import Y from '../components/Y'

const HomePage = () => {
  return (
    <div>
        {/* <Y/> */}
        <Carrusel/>
        <Body/>
        <QuienesSomos/>
        <EmpresaDesc/>
    </div>
  )
}

export default HomePage