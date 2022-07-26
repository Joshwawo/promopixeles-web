import logo from "../../img/Cashless/logoNvo.webp";
import download from "../../img/Cashless/Capa_22.webp";
import login from "../../img/Cashless/Capa_24.webp";
import verSaldo from "../../img/Cashless/Capa-25.webp";
import ios from "../../img/PYS/Capa_13.webp";
import android from "../../img/PYS/Capa_14.webp";
import iglogo from "../../img/PYS/iglogowebp.webp";


// import bg from "../../img/Cashless/Cashless-fondo.webp";

const Banner = () => {
  return (
    <section className="h-1/2 mb-5 bg-cashless-nuevo">
      <div className="container-95 container-80 md:flex py-16">
        <div className="derecha md:w-1/2 mb-2">
          <div className="">
            <p className=" text-xl md:text-2xl text-white mb-10">
              Productos de Software
            </p>
            <img
              src={logo}
              alt="Logo cashless"
              className=" mb-5 mx-auto xl:m-5 w-42"
            />
            <p className=" text-white text-lg mb-7 xl:text-xl">
              Con Cashless incrementa tus beneficios y facilita la gestión de
              pagos gracias a nuestro sistema de pagos cashless.
            </p>
            <div className="flex gap-5 flex-row">
              <a target={"_blank"} href="https://apps.apple.com/mx/app/cashless-estadios/id1588139450">
                <img src={ios} alt="Download Ios/Android" className="mb-10" />
              </a>
              <a target={"_blank"} href="https://play.google.com/store/apps/details?id=com.bs.pv">
                <img
                  src={android}
                  alt="Download Ios/Android"
                  className="mb-10"
                />
              </a>
              <a target={"_blank"} href="https://www.instagram.com/cashlessestadios">
                <img src={iglogo} alt="Ig logo" className="w-14" />
              </a>
            </div>
          </div>
        </div>
        <div className="izquierda md:w-1/2 md:flex  ">
          <img
            src={verSaldo}
            alt="Ver Saldo"
            className=" hidden  xl:w-[50%] xl:h-[50%] xl:block relative xl:top-[20rem] xl:left-24"
            loading="lazy"
          />
          <img
            src={login}
            alt="Login app "
            className=" hidden md:block  xl:w-[20rem] xl:h-[40rem]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
