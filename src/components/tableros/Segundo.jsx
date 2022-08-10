import { tablerosData, comolohacemosdata } from "../../data/data";
import linea from "../../img/Tableros/SVG/linea.svg";

const Segundo = () => {
  return (
    <div className=" ">
      <div className="p1 container-95">
        <p className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10">
          Business Inteligence /{" "}
          <span className="monserrat-bold-regular">Retos</span>{" "}
        </p>
        <p className="monserrat-regular text-justify mt-5  md:text-xl">
          Es el uso de técnicas, herramientas y capacidades, para generar
          conocimiento y éste se transforma en una mejor toma de decisiones, las
          cuales nos permiten ir un paso adelante de nuestra competencia o
          también nos ayudan a evitar distintas situaciones con las que se
          podría topar nuestra empresa.
        </p>

        <div className="grid grid-cols-2 mt-10 xl:grid-cols-4 ">
          {tablerosData.map(({ id, img, titulo }) => {
            return (
              <div key={id} className="mt-10 px-2">
                <img src={img} alt={titulo} className="w-16 mx-auto" />
                <div className="flex text-justify gap-2 w-[90%] mt-5">
                  <span className="text-blue-900 monserrat-bold text-xl xl:text-3xl ">
                    {id}
                  </span>{" "}
                  <p className="md:text-xl">{titulo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="comolohacemos mt-10 container-95">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10">
          ¿Cómo lo hacemos?
        </h2>
        <p className="monserrat-regular text-justify mt-5 mb-10 md:text-xl">
          Nuestro enfoque consultivo es de acompañamiento y colaboración para
          lograr objetivos de negocio, <br />
          se cuenta con un grupo diverso de especialistas para lelvar un
          proyecto de Business Inteligence.
        </p>
      </div>

      <div className="comollohacemos2 container-95 ">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10 mb-5">
          ¿Cómo lo hacemos?
        </h2>
        <img src={linea} alt="Esto es una linea" className="relative hidden xl:block top-16 -z-10 w-[90rem]" />
      </div>

      <div className="container-95 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 ">
        
        {comolohacemosdata.map(({ id, img, titulo }) => {
          return (
            <div key={id} className="fig">
              <img src={img} alt="figuras SVG" className="w-32 mt-5 bg-white" />
              <p className="mt-5 md:text-xl text-start">{titulo}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-tableros mt-10">
        <div className="fortalesas container-95 h-screen ">
          <p className="text-white text-4xl">
            Fortalezas de <br /> inteligencia de <br />
            negocio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Segundo;
