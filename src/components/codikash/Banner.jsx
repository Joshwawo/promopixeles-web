import React from "react";
import log_ck from "../../img/PYS/logo-ck.webp";
import capa10 from "../../img/PYS/Capa_10.webp";
import celularVertical from "../../img/PYS/Capa-10-redimencionada.png";
import capa10_2 from "../../img/PYS/Capa-10.webp";
import celularQr from "../../img/PYS/Capa_11.webp";
import capa13 from "../../img/PYS/Capa_13.webp";
import capa14 from "../../img/PYS/Capa_14.webp";

const Banner = () => {
  return (
    <div className="h-1/2 bg-bg mb-5 ">
      <div className="container-95 container-80 py-16 ">
        <p className="text-white  md:text-2xl mb-5 md:mb-14">
          Productos de Software
        </p>
        <div className="items  md:flex ">
          <div className="item1  ">
          <img
              src={log_ck}
              alt="logo Codikash"
              className="w-[60%] md:w-[70%] xl:w-[70%]"
            />
            <p className="text-white   md:w-[90%] xl:w-[80%] xl:text-xl   mt-5">
            Aplicación que ofrece una plataforma  donde podrás navegar y conocer
              tus puntos obtenidos durante tus operaciones con las marcas. Una 
              aplicación  100% segura que permite sincronizar tu código QR
              personalizado.
            </p>
          </div>
          <div className="item2 mt-10 ">
            <div className="container-img flex">
              <div className="contenido-img-1 ">
                <img
                  src={celularVertical}
                  alt="telefono "
                  className="relative xl:right-[10rem]   xl:bottom-[10rem] w-full  "
                />
              </div>
              <div className="contenido-img-2 ">
                <img
                  src={celularQr}
                  alt="telefono "
                  className=" relative top-32 right-12 xl:right-[15rem] xl:top-14"
                />
              </div>
            </div>
            <div className="flex gap-5  flex-row-reverse mt-5 ">
              <div>
                <a target={"_blank"} href="https://apps.apple.com/mx/app/codikash-clientes/id1577211896">
                  <img src={capa13} alt="android" className="w-[100%]" />
                </a>
              </div>
              <div>
                <a target={"_blank"} href="https://play.google.com/store/apps/details?id=com.promopixeles.codikash_app">
                  <img src={capa14} alt="ios" className="w-[100%] " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
