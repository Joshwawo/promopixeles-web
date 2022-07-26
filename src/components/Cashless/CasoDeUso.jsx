import  casodeuso  from "../../img/Cashless/casoDeUso.webp";

const CasoDeUso = () => {
  return (
    <div className="w-full">
      <p className=" monserrat-bold text-center text-2xl">Caso de usos</p>
      <div className="">
        <img src={casodeuso} alt="Caso de uso" className="w-full xl:w-[90%] mx-auto" />
      </div>
      <div className="items md:flex justify-around gap-2 text-center monserrat-regular">
      </div>
    </div>
  );
};

export default CasoDeUso;
