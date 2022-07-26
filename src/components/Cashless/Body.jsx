import React from "react";
import cajero from "../../img/Cashless/Objeto_inteligente_vectorial.webp";

const Body = () => {
  return (
    <div>
      <div className="items flex ">
        <div className="derecha w-full">
          <img src={cajero} alt="Cajero" />
        </div>
        <div className="inzquierda w-full ">
          <p>App de Pago libre</p>
          <p>De Efectivo </p>
          <div className="p-7">
            <p className="font-semibold">Beneficios</p>
            <p className="">
              <span className=" font-bold text-2xl">· </span>Minimiza o elimina
              lla gestión del efectivo
            </p>
            <p>
              Centraliza en un solo punto la gestión del dinero gracias a
              nuestros puntos de recarga desde tu mismo móvil.
            </p>
            <p>
              <span className=" font-bold text-2xl">· </span>Aumento de ventas
            </p>
            <p>
              Funciona sin necesidad de conectividad, en caso de pérdida de la
              conexión a internet el sistema sigue trabajando sin ningún tipo de
              problema.
            </p>
            <p>
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
