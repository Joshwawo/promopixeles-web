import compu2 from "../../img/ControlDeAccesos/compu2.webp";
import carro from "../../img/ControlDeAccesos/carro.webp";
import park from "../../img/ControlDeAccesos/park.webp";

const img = [carro, , park, compu2];

const Cuarto = () => {
  return (
    <div className="mt-5  md:flex gap-1 mb-10">
      {img.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt="Imagenes "
          className="mx-auto 
          |md| md:w-[16rem] md:h-[15rem] |/md| 
          |xl| xl:w-[26rem] xl:h-[20rem]   |/xl|  
          |2xl| 2xl:w-full 2xl:h-[30rem] |/2xl|" 
        />
      ))}
    </div>
  );
};

export default Cuarto;
