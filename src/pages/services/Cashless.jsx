import React from 'react'
import Banner from '../../components/Cashless/Banner'
import Body from '../../components/Cashless/Body'
import CasoDeUso from '../../components/Cashless/CasoDeUso'
import Generales from '../../components/Cashless/Generales'
import Giros from '../../components/Cashless/Giros'
import Y from '../../components/Home/Y'

const Cashless = () => {
  return (
    <div>
        <Y/>
        <Banner/>
        <Body/>
        <CasoDeUso/>
        <Giros/>
        <Generales/>
    </div>
  )
}

export default Cashless