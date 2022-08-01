import React from "react";

const Banner = () => {
  return (
    <div className="bg-controlDAccesos">
      <div className=" h-screen xl:h-[40rem]  container-95 container-80 py-16">
        <p className="text-xl md:text-2xl text-white mb-10">
          Productos de Software
        </p>
        <p className="text-white monserrat-bold text-4xl uppercase">
          Sistema de gestión de <br /> procesos de acceso
        </p>
        <p className="text-white pt-10 xl:text-xl">
          La herramienta de gestión de procesos se diseño para dar <br className="hidden md:inline-block " />{" "}
          solucion al control y administracion de solicitudes de <br className="hidden md:inline-block " /> acceso
          y control de visitantes, alos principales usuarios <br className="hidden md:inline-block " /> que se benefician de este sistema son recintos, parques <br className="hidden md:inline-block " />
          industriales, puertos y cualquier entidad que quiera <br className="hidden md:inline-block " /> la gestión y control de visitantes y acceso de personal.
        </p>
      </div>
    </div>
  );
};

export default Banner;
