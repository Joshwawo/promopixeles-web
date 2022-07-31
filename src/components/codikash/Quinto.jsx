// import cate from '../img/PYS/cate.webp'
// import entre from '../img/PYS/entretenimiento.webp'
// import  gym from '../img/PYS/gimnasio.webp'
// import restaurante from '../img/PYS/restaurante.webp'
import cate from "../../img/PYS/cate.webp";
import belleza from "../../img/PYS/belleza.webp";
import gym from "../../img/PYS/gimnasio.webp";
import entretenimiento from "../../img/PYS/entretenimiento.webp";
import restaurante from "../../img/PYS/restaurante.webp";

const Quinto = () => {
  return (
    <div className=" container-95 h-screen">
      <p className=" monserrat-bold text-center text-3xl py-12">Giros de comercios</p>
      <div className="icons gap-4 xl:gap-6 font-semibold md:grid md:grid-cols-4  xl:grid-cols-5 place-items py-5 px-5-center w-full ">
        <div className="item2 py-5 px-5  bg-yellow-400">
          <img src={belleza} alt="belleza" className="mx-auto" />
          <p className="text-white  text-center pt-5">Belleza</p>
        </div>
        <div className="item5 py-5 px-5  bg-black">
          <img src={restaurante} alt="restaurante" className="mx-auto" />
          <p className="text-white  text-center pt-5">Restaurantes</p>
        </div>
        <div className="item4 py-5 px-5  bg-yellow-400">
          <img src={entretenimiento} alt="entretenimiento" className="mx-auto" />
            <p className="text-white  text-center pt-5">Entretenimiento</p>
        </div>
        <div className="item3 py-5 px-5  bg-black">
          <img src={gym} alt="gym" className="mx-auto" />
            <p className="text-white  text-center pt-5">Gimnasios</p>
        </div>
        <div className="item1 py-5 px-5  bg-yellow-400 md:mt-5  xl:mt-0 ">
          <img src={cate} alt="cate" className="mx-auto" />
            <p className="text-white  text-center pt-5">Catering</p>
        </div>

      </div>
    </div>
  );
};

export default Quinto;
