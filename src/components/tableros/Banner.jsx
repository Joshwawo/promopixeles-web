import portada from "../../img/Tableros/Portada.webp";
import portadanueva from "../../img/Tableros/tableroimagen.webp";
import Dot from '../../helpers/Dot'

const Banner = () => {
  return (
    <div className="flex bg-tableros-2 py-5 md:py-[10.3rem]  ">
      <div className=" z-0 container-95 text-right">
        <p className=" monserrat-bold text-white text-3xl md:text-6xl pb-3">
          Tableros de <br /> inteligencia de <br /> negocio
        </p>

        {/* <p className="border-t-8 border-white w-[7rem] mb-5 relative right-0 "></p> */}
        <p className=" text-white text-2xl md:text-3xl monserrat-semibold pb-4
        ">Servicios de consultoría integral</p>
        <div className=" text-white text-xl  md:text-2xl">
          <p><Dot /> Análisis de datos y procesos de negocios</p>
          <p><Dot/>Integración de datos </p>
          <p><Dot/> Dashboards Directivos </p>
          <p><Dot/> Análisis predictivas IA </p>
          <p><Dot/> Generación de datos IoT </p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
