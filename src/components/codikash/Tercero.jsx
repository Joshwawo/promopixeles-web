import React from 'react'
import campañas from "../../img/PYS/campaigning.webp";
import meta from "../../img/PYS/meta_1.webp";
import objetivo from "../../img/PYS/objetivo_1.webp";

const Tercero = () => {
  return (
    <div className="mt-14 amarillo bg-[#e3c330] py-24">
      <div className=" container-95   ">
        <div className="objetos md:flex justify-around ">
          <div className="objeto1 md:w-1/3 md:border-r-2 md:border-[#323232] xl:border-r-2 xl:border-[#323232]  ">
            <img src={objetivo} alt="Objetivo" className="w-14 mx-auto" />
            <div className="text-center">
              <p className="  py-5 oscuro font-bold text-2xl">Objetivos</p>
              <p>Captación de usuarios nuevos en comercios</p>
              <p>Recompensas a consumidores y usuarios</p>
            </div>
          </div>
          <div className="objetos2 text-center md:w-1/3 md:border-r-2 md:border-[#323232] xl:border-r-2 xl:border-[#323232] mt-10 md:m-0">
            <img src={meta} alt="Meta" className="w-14 mx-auto" />
            <div className="">
              <p className="  py-5 oscuro font-bold text-2xl ">
                ¿como se logra?
              </p>
              <p className="xl:pl-10  xl:pr-10 ">
                A través de{" "}
                <span className="oscuro font-semibold">Codikash</span>, un
                sistema de recomensas donde los ciudadanos consumen en los
                negocios participantes y generan saldos.
              </p>
            </div>
          </div>
          <div className="objeto3 text-center md:w-1/3 mt-10 md:mt-0">
            <img src={campañas} alt="Campañas " className="w-14 mx-auto" />
            <div>
              <p className="  py-5 oscuro font-bold text-2xl">Campañas</p>
              <p className="xl:pl-10 xl:pr-10">
                Programas de reactivación económica en ayuntamientos
              </p>
              <p className="xl:pl-10 xl:pr-10">
                Programas de lealtad en comercios generando saldos globales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tercero