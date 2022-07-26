import estadio from "../../img/Cashless/estadio.webp";
import concierto from "../../img/Cashless/concierto.webp";
import circulo from "../../img/Cashless/pluis_circle.webp";
import evento from "../../img/Cashless/evento.webp";
const Giros = () => {
  return (
    <div className=" ">
      <p className="text-center">Giros</p>
      <div className="bg-gray-300">
        <div className="flex justify-around  py-10 container-95">
          <div>
            <img src={estadio} alt="Icono estadio" className=" w-16 " />
              <p>Estadios</p>
          </div>
         <div>
           <img src={concierto} alt="Icono estadio" className=" w-12 " />
           <p>Conciertos</p>
         </div>
          <div>
            <img src={circulo} alt="Icono estadio" className=" w-12 " />
            <p>Eventos</p>
          </div>
          <div>
            <img src={evento} alt="Icono estadio" className=" w-12 " />
            <p>Y más</p>
          </div>
        
          
        </div>
      </div>
    </div>
    
  );
};

export default Giros;
