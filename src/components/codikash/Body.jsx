import React from 'react'
import kk_post from '../../img/PYS/kodikash-post.webp'

const Body = () => {
  return (
    <div className="mt-14">
        <div className="container-95 ">
          <div className="objetos md:flex mb-14 ">
            <div className="objeto1  md:w-1/2   lg:pl-[20rem]  xl:pl-[15rem]  pt-10">
              <p className="font-bold text-2xl md:text-3xl ">App de recompensas</p>
              <p className="font-bold text-2xl">de negocios</p>
        
              <div className="p-7">
                <p className="font-semibold">Beneficios</p>
                <p><span className=" font-bold text-2xl">· </span>Creación de red de comercios</p>
                <p><span className=" font-bold text-2xl">· </span>Aumento de ventas</p>
                <p><span className=" font-bold text-2xl">· </span>Ingreso a diversos mercados</p>
                <p><span className=" font-bold text-2xl">· </span>Histórico de datos</p>
                <p><span className=" font-bold text-2xl">· </span>Analíticas</p>
                <p><span className=" font-bold text-2xl">· </span>Inteligencia de negocios</p>
              </div>
        
            </div>
            <div className="objeto2 md:w-1/2">
                <img src={kk_post} alt="Imagen de kodikash app" className="w-[70%] lg:w-[50%] mx-auto md:m-0  py-10" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Body