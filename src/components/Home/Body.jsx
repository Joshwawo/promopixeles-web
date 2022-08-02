import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import capa11 from "../../img/Home/uno.webp";
import capa12 from "../../img/Home/dos.webp";
import capa13 from "../../img/Home/tres.webp";
import capa14 from "../../img/Home/cuatro.webp";
import data from "../../data/data";

const imgHP = [capa11, capa12, capa13, capa14];

const Body = () => {
  return (
    <section className="bg-black">
      <div className="  pt-14 container-95 text-white ">
        <div className="nosotros ">
          <div className="figuras absolute ">
            <div
              className="rombo-rojo izquierdo relative xl:bg-orange-00
            right-8 bottom-8 
           md:bottom-[1rem] md:right-[4rem]
           2xl:top-[-2.2rem] xl:right-[8rem]

          "
            ></div>
            <div
              className="rombo-blanco izquierdo xl:bg-yellow-30 relative 
          right-9 bottom-5 
          md:right-[4rem]
          "
            ></div>

            <div
              className="rombo-rojo   derecho relative bottom-[8rem] left-[20rem]
          md:bottom-[11rem] md:left-[42.6rem]
          xl:bottom-[13rem] xl:left-[72.2rem]
          2xl:bottom-[14.6rem] 2xl:left-[105.2rem] 
          
          
          
          "
            ></div>
            <div
              className="rombo-blanco  relative bottom-[8rem] left-[20rem]
            md:bottom-[11rem] md:left-[42.6rem]
            xl:bottom-[13rem] xl:left-[69rem]
            2xl:bottom-[15rem] 2xl:left-[98rem]            
            "
            ></div>
          </div>

          <p className=" text-white text-center text-2xl xl:text-3xl monserrat-bold py-14 ">
            Nosotros
          </p>
          <p className="border-t-4 border-red-700 w-[7rem]  mx-auto"></p>
          <p className=" md:text-center mt-10 ">
            Nuesto enfoque es crear, optimizar y transformar modelos y procesos
            de negocio,
            <br />
            cultura y experiencia de clientes para satisfacer los cambios de
            mercado
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
          {imgHP.map((imagen, i) => {
            return (
              <img
                key={i}
                src={imagen}
                alt="imagenes del home page"
                className=""
              />
            );
          })}
        </div>

        <div className="quehacemos">
          <p className=" text-white text-center text-2xl xl:text-3xl monserrat-bold  mt-10 ">
            ¿Qué Hacemos?
          </p>
          <p className="border-t-4 border-red-700 w-[12rem]  mx-auto"></p>
          <p className="md:text-center mt-14 ">
            Conectamos expertos en tecnologías con expertos en el negocio para
            crear <br /> la oportunidad de volver a imaginar cómo hacemos
            negocios, cómo involucramos <br />a nuestros clientes, con la
            tecnologia digital de nuesto lado.
          </p>
        </div>

        <div className="md:grid  md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-14 items-center">
          {data.map(({ id, img, titulo, desc, bg }, index) => {
            return (
              <div key={id} className=" ">
                <div
                  className={` ${
                    bg == "red" ? "rojito" : bg == "gray" ? "bg-[#44443A]" : ""
                  } w-[20rem] rounded-lg mx-auto mt-5 `}
                >
                  <img src={img} alt={titulo} className="mx-auto pt-10" />
                  <p className="border-t-2 border-white w-[15rem]  mx-auto mt-5"></p>
                  <p className="text-center my-5 monserrat-bold">{titulo}</p>

                  {desc.map((desc, i) => {
                    return (
                      <p
                        key={i}
                        className="2xl:pl-5 md:pl-10 text-start ml-5 last-of-type:pb-10"
                      >
                        <span className=" font-bold text-2xl">· </span>
                        {desc}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Body;
