import beneficios from "../../img/Cashless/Capa_16.webp";
import aumentoVentas from "../../img/Cashless/Capa_17.webp";
import Recompensas from "../../img/Cashless/Capa_18.webp";
import historialDatos from "../../img/Cashless/Capa_19.webp";
import analiticas from "../../img/Cashless/Capa_20.webp";
import intelNegocios from "../../img/Cashless/Capa_21.webp";
import celGrande from "../../img/Cashless/Capa_27.webp";
import celChikito from "../../img/Cashless/Capa_28.webp";
const Generales = () => {
  return (
    <div className="bg-[#069D57] ">
      <div className="items md:flex container-95">
        <div className="izquierda md:w-2/3 pt-12 md:pt-24">
          <p className="monserrat-bold text-center text-white text-3xl ">Funcionales Generales</p>
          <div className="items-icons   grid grid-cols-2 xl:grid-cols-3 gap-4 ">
            <div className="img1 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={beneficios} alt="Beneficios"  className="mx-auto"/>
              <p className="text-center">
                Beneficios <br />
                Sanitarios COVID
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={aumentoVentas} alt=" Aumento de ventas"  className="mx-auto"/>
              <p className="text-center">
                Aumento de <br />
                Ventas
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={Recompensas} alt="Recompensas"  className="mx-auto"/>
              <p className="text-center">Recompensas</p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={historialDatos} alt="Historial de datos"  className="mx-auto"/>
              <p className="text-center">
                Historico de <br />
                datos
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={analiticas} alt="Analiticas"  className="mx-auto"/>
              <p className="text-center">Analiticas</p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:px-12 ">
              <img src={intelNegocios} alt="Inteligencia de negocios"  className="mx-auto"/>
              <p className="text-center">
                Inteligencia <br /> de negocios
              </p>
            </div>
          </div>
        </div>
        <div className="derecha flex">
          <img src={celGrande} alt="Celular Grande" className=" mx-auto md:w-[90%] md:h-[70%] md:mt-44 xl:w-[75%] xl:mt-32 xl:h-[80%] " />
          <img src={celChikito} alt="Celular Chikito" className=" hidden md" />
        </div>
      </div>
    </div>
  );
};

export default Generales;
