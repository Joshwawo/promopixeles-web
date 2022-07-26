import React from "react";
import como1 from "../img/agenda.png";
import como2 from "../img/Como1.png";
import como3 from "../img/como3.png";
import como4 from "../img/como4.png";

const QuienesSomos = () => {
  return (
    <div className="bg-red-300 py-24 ">
      <div className=" container mx-auto ">
        <div className=" ">
          <h2 className="font-bold text-2xl text-center md:text-start text-white">
            ¿Como lo Hacemos?{" "}
          </h2>
          <div className="">
            <p className=" text-center sm:text-left text-white md:w-2/3 m-5 md:m-0">
              Conectamos expertos en tecnologías con expertos en el negocio para
              crear la oportunidad de volver a imaginar cómo hacemos negocios,
              cómo involucramos a nuestros clientes, con la tecnología digital
              de nuestro lado.
            </p>
          </div>
        </div>
        <div className="cajita py-15 flex flex-col items-center md:flex-row md:justify-between text-white">
          <div className="md:py-20  py-5">
            <img className="px-7" src={como1} alt="Icono uno" />
            <p className="py-7 text-white">Agenda Digital</p>
          </div>

          <div className="md:py-20  py-5">
            <img className="px-7" src={como2} alt="Icono dos" />
            <p className="py-7 text-white">Estrategia de datos</p>
          </div>
          <div className="md:py-20  py-5 ">
            <img className="px-7" src={como3} alt="Icono tres" />
            <p className="py-7 text-white">Impacto Financiero <br /> Positivo</p>
          </div>
          <div className="md:py-20  py-5">
            <img className="px-7" src={como4} alt="Icono cuatro" />
            <p className="py-7 text-white">Transformacion de <br /> datos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
