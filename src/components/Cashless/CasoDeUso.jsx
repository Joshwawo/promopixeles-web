import casoDeUso from "../../img/Cashless/CasoDeUso.webp";
const CasoDeUso = () => {
  return (
    <div className="w-full">
      <p className=" monserrat-bold text-2xl  md:text-4xl pl-5 md:pl-12 mb-5">
        Proceso sencillo y práctico <br /> para una gran experiencia de usuario
      </p>
      <div className="">
        <img
          src={casoDeUso}
          alt="Caso de uso"
          className="w-full xl:w-[90%] mx-auto"
        />
      </div>
      <div className="items md:flex justify-around gap-2 text-center monserrat-regular"></div>
    </div>
  );
};

export default CasoDeUso;
