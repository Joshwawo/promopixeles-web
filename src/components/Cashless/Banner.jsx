import logo from "../../img/Cashless/CashlessLogo.webp";
import download from "../../img/Cashless/Capa_22.webp";
import login from "../../img/Cashless/Capa_24.webp";
import verSaldo from "../../img/Cashless/Capa_25.webp";

const Banner = () => {
  return (
    <div className="h-1/2 mb-5 bg-bg">
      <div className="container-95 md:flex py-16">
        <div className="derecha md:w-1/2 mb-2">
          <div className="">
            <p className=" text-xl md:text-2xl text-white mb-10">Productos de sofware</p>
            <img src={logo} alt="Logo cashless" className=" mb-5 mx-auto xl:m-5 w-42" />
            <p className=" text-white text-lg mb-7">
              con Cashless incrementa tus beneficios y facilita la gestión de
              pagos gracias a nuestro sistema de pagos cashless.
            </p>
            <img src={download} alt="Download Ios/Android" className="mb-10"/>
          </div>
        </div>
        <div className="izquierda md:w-1/2 md:flex ">
          <img src={verSaldo} alt="Ver Saldo" className=" hidden xl:block " />
          <img src={login} alt="Login app " className=" " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
