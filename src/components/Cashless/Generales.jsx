import aumentoVentas from "../../img/Cashless/Capa_17.webp";
import historialDatos from "../../img/Cashless/Capa_19.webp";
import analiticas from "../../img/Cashless/Capa_20.webp";
import intelNegocios from "../../img/Cashless/Capa_21.webp";
import celGrande from "../../img/Cashless/Capa_27.webp";
import celChikito from "../../img/Cashless/Capa_28.webp";

// Nuevos
import pagoOnline from "../../img/Cashless/nuevo/pagoOnline.webp";
import seguridad from "../../img/Cashless/nuevo/seguridad.webp";
import historicoDatos from "../../img/Cashless/nuevo/historicoDatos.webp";
import ingeliciaNegocios from "../../img/Cashless/nuevo/inteligenciaDnegocio.webp";
import crm from "../../img/Cashless/nuevo/crm.webp";
import Recompensas from "../../img/Cashless/Capa_18.webp";
import proUsuario from "../../img/Cashless/nuevo/proUsuario.webp";
import beneficios from "../../img/Cashless/Capa_16.webp";
// import crm from "../../img/Cashless/nuevo/crm.webp";

const Generales = () => {
  return (
    <div className="bg-[#069D57] pb-24 mt-10">
      <div className="items xl:flex ">
        <div className="derecha flex ">
          <img
            src={celGrande}
            alt="Celular Grande"
            className="mx-auto hidden md:block w-[70%] h-[90%] md:w-[50%]  xl:w-[50%] xl:h-[70%]  mt-32"
          />
          <img
            src={celChikito}
            alt="Celular Chikito"
            className=" hidden xl:block lg:w-[40%] lg:h-[55%] lg:mt-[17rem] relative right-20 top-20"
          />
        </div>
        <div className="izquierda md:w-2/3 pt-12 md:pt-24 mx-auto">
          <p className="monserrat-bold text-center text-white md:text-4xl ">
            Fortalezas
          </p>
          <div className="items-icons grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-0 xl:place-items-center mb-10 ">
            <div className="img1 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img src={pagoOnline} alt="Beneficios" className="mx-auto" />
              <p className="text-center text-md">
                Pago <br />
                Online/Offline
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img
                src={seguridad}
                alt=" Aumento de ventas"
                className="mx-auto"
              />
              <p className="text-center">
                Seguridad <br />
                de los datos
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img
                src={historicoDatos}
                alt="Historial de datos"
                className="mx-auto"
              />
              <p className="text-center">
                Historico de <br />
                datos
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img
                src={ingeliciaNegocios}
                alt="Analiticas"
                className="mx-auto"
              />
              <p className="text-center">Inteligencia de negocio, <br /> Analíticas <br /> Predictividad</p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img src={crm} alt="Recompensas" className="mx-auto" />
              <p className="text-center">Integraciones POS, <br /> CRM, E-Commerce</p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img src={Recompensas} alt="Recompensas" className="mx-auto" />
              <p className="text-center">Marketing y Recompensas</p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img
                src={proUsuario}
                alt="Inteligencia de negocios"
                className="mx-auto"
              />
              <p className="text-center">
                Pro Experiencia <br />de usuario
              </p>
            </div>
            <div className="img2 bg-[#FFFFFF] my-5 rounded-3xl py-5 px-5 xl:w-[75%]">
              <img
                src={beneficios}
                alt="Inteligencia de negocios"
                className="mx-auto"
              />
              <p className="text-center">
                beneficios <br /> Sanitarios Covid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generales;
