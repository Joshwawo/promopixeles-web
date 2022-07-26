import estadio from "../../img/Cashless/estadio.webp";
import concierto from "../../img/Cashless/concierto.webp";
import circulo from "../../img/Cashless/pluis_circle.webp";
import evento from "../../img/Cashless/evento.webp";
const Giros = () => {
  return (
    <div className=" mt-10">
      <p className="monserrat-bold text-center text-2xl mb-10">Giros</p>
      <div className="bg-[#CBCBCB]">
        <div className="flex justify-around py-14 md:py-24 container-95 text-center mon-regular">
          <div>
            <img src={estadio} alt="Icono estadio" className=" w-16 xl:w-24 " />
            <p className="mt-5">Estadios</p>
          </div>
          <div>
            <img src={concierto} alt="Icono estadio" className=" w-12 xl:w-20" />
            <p className="mt-5">Conciertos</p>
          </div>
          <div>
            <img src={circulo} alt="Icono estadio" className=" w-12 xl:w-20" />
            <p className="mt-5">Eventos</p>
          </div>
          <div>
            <img src={evento} alt="Icono estadio" className=" w-12 xl:w-20" />
            <p className="mt-5">Y más</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giros;
