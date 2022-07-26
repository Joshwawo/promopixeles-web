import React from "react";
import cajero from "../../img/Cashless/Objeto_inteligente_vectorial.webp";

const Body = () => {
  return (
    <div className="my-24">
      <div className="items md:flex container-95">
        <div className="derecha w-full  md:mr-5">
          <img
            src={cajero}
            alt="Cajero"
            className=" w-[60%] md:w-[90%] xl:w-[60%] mx-auto "
          />
        </div>
        <div className="inzquierda w-full mt-10 md:m-0">
          <p className="monserrat-bold  text-center md:text-start text-2xl">
            App de Pago libre
          </p>
          <p className="monserrat-bold  text-center md:text-start text-2xl">
            De Efectivo{" "}
          </p>

          <div className="1 mb-5 mt-5">
            <p className="monserrat-semibold ">
              <span className=" font-bold text-2xl">· </span>Minimiza o elimina
              la gestión del efectivo
            </p>
            <p>
              Centraliza en un solo punto la gestión del dinero gracias a
              nuestros puntos de recarga desde tu mismo móvil.
            </p>
          </div>

          <div className="2 mb-5">
            <p className="monserrat-semibold ">
              <span className=" font-bold text-2xl">· </span>Aumento de ventas
            </p>
            <p>
              Funciona sin necesidad de conectividad, en caso de pérdida de la
              conexión a internet el sistema sigue trabajando sin ningún tipo de
              problema.
            </p>
          </div>
          <div className="3">
            <p className="monserrat-semibold ">
              <span className=" font-bold text-2xl">· </span>Ingreso a diversos
              mercados
            </p>
            <p>Decide que saldo quieres cargar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
