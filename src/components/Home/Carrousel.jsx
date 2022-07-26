import React from "react";
import codikash from "../../img/codikash.webp";
import cashless from "../../img/cashless.webp";

import bgcashlessdeprecate from "../../img/Home/cashless.webp";
import bgcodikash from "../../img/Home/codikash.webp";
import bgcashless from "../../img/Home/bgCashlessig.png";
import controlA from "../../img/Home/controlacceso.webp";
// import tablero from '../../img/Tableros/Portada.webp'
import tablero from "../../img/Tableros/fondowebcarrousel.webp";

//asdasd asdasdadadsadsadsasdasdasdasdasd

import { NavLink } from "react-router-dom";

const Carrusel = () => {
  return (
    <div className="bg-black ">
      <div className="carousel w-full bg-black  m-auto">
        <div id="slide1" className="carousel-item relative w-full pt-20 ">
          <img
            src={bgcodikash}
            className="m-auto h-[11rem] md:h-auto "
            alt="Codikash app"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Codikash
            </p>
            {/* <p className=" text-red-500 relative left-[45rem] top-[19rem] bg-blue-500 p-2">HELLO THERE</p> */}
            <a
              className={`ANDROID  md:b-yellow-400 xl:b-lime-400 b-blue-300 2xl:b-red-500 3xl:b-purple-600 relative  
              2xl:left-[44.5rem] 2xl:top-[16rem] 2xl:px-14
              3xl:left-[55.5rem] 3xl:top-[19rem] 3xl:px-20 py-2          
              `}
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=com.promopixeles.codikash_app"
            >
              .
            </a>
            <a
              target={"_blank"}
              className={`IOS g-blue-500 relative 
              2xl:left-[27.5rem] 2xl:top-[16rem] 2xl:px-14
              3xl:left-[33rem] 3xl:top-[19rem] 3xl:px-20 px-20
              `}
              href="https://apps.apple.com/mx/app/codikash-clientes/id1577211896"
            >
              .
            </a>
            <NavLink to="/codikash">
              <button
                className="black text-white font-bold  border w-20 py-[.2rem] md:py-2 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
              >
                Ver
              </button>
            </NavLink>

            <a href="#slide2" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full pt-2 ">
          <img
            src={bgcashless}
            className="m-auto h-[11rem] md:h-auto "
            alt="cashless app"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-14">
              Cashless
            </p>
            <a
              className="ANDROID b-blue-500  relative 
              2xl:b-red-600  2xl:right-[3.4rem] 2xl:top-[10.6rem] px-14
              3xl:right-[5rem] 3xl:top-[13.4rem] 3xl:px-20 py-2"
              href="https://play.google.com/store/apps/details?id=com.bs.pv"
            >
              .
            </a>
            <a
              className="IOS b-emerald-300 relative 
              2xl:b-900-100 2xl:right-[16.3rem] 2xl:top-[10.5rem] 2xl:px-[4.2rem]
              3xl:right-[20rem] 3xl:top-[13.4rem]  3xl:px-20"
              href="https://apps.apple.com/mx/app/cashless-estadios/id1588139450"
            >
              .
            </a>
            <a
              className="IG b-purple-400 relative  
              2xl:b-purple-900 2xl:right-[29.4rem] 2xl:top-[10.7rem] 2xl:px-5
              3xl:right-[37rem] 3xl:top-[13.4rem]  3xl:px-7"
              href="https://www.instagram.com/cashlessestadios/"
            >
              .
            </a>
            <NavLink to="/cashless">
              <button
                className="black text-white font-bold py-[.2rem] border md:py-2 w-20 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-14"
              >
                Ver
              </button>
            </NavLink>

            <a href="#slide3" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full pt-20 ">
          <img
            src={controlA}
            className="m-auto h-[11rem] md:h-auto "
            alt="cashless app"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Control de accesos
            </p>
            <NavLink to="/gestionacceso">
              <button
                className="black text-white font-bold py-[.2rem]   border md:py-2   w-20 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
              >
                Ver
              </button>
            </NavLink>

            <a href="#slide4" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full pt-20 ">
          <img
            src={tablero}
            className="m-auto h-[11rem] md:h-auto "
            alt="cashless app"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Tableros inteligencia de negocios
            </p>
            <NavLink to="/tableros">
              <button
                className="black text-white font-bold py-[.2rem]   border md:py-2   w-20 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
              >
                Ver
              </button>
            </NavLink>

            <a href="#slide1" className=" ">
              <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Carrusel = () => {
//   return (
//     <div className="bg-black ">
//       <div className="carousel w-full bg-black  m-auto">
//         <div id="slide1" className="carousel-item relative w-full pt-20 ">
//           <img
//             src={bgcodikash}
//             className="m-auto h-[11rem] md:h-auto "
//             alt="Codikash app"
//           />

//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
//             </a>
//             <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
//               Codikash
//             </p>
//             {/* <p className=" text-red-500 relative left-[45rem] top-[19rem] bg-blue-500 p-2">HELLO THERE</p> */}
//             <a
//               className=" relative  left-[55.5rem] top-[19rem] px-20 py-2"
//               target={"_blank"}
//               href="https://play.google.com/store/apps/details?id=com.promopixeles.codikash_app"
//             >
//               .
//             </a>
//             <a
//              target={"_blank"}
//               className=" relative left-[34rem] top-[19rem] px-20"
//               href="https://apps.apple.com/mx/app/codikash-clientes/id1577211896"
//             >
//               .
//             </a>
//             <NavLink to="/codikash">
//               <button
//                 className="black text-white font-bold  border w-20 py-[.2rem] md:py-2 hover:bg-white hover:text-black
//               absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
//               >
//                 Ver
//               </button>
//             </NavLink>

//             <a href="#slide2" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
//             </a>
//           </div>
//         </div>

//         <div id="slide2" className="carousel-item relative w-full pt-2 ">
//           <img
//             src={bgcashless}
//             className="m-auto h-[11rem] md:h-auto "
//             alt="cashless app"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
//             </a>
//             <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
//               Cashless
//             </p>
//             <a
//               className="ANDROID  relative  right-[5rem] top-[13.4rem] px-20 py-2"
//               href="https://play.google.com/store/apps/details?id=com.bs.pv"
//             >
//               .
//             </a>
//             <a
//               className="IOS relative  right-[20rem] top-[13.4rem]  px-20"
//               href="https://apps.apple.com/mx/app/cashless-estadios/id1588139450"
//             >
//               .
//             </a>
//             <a
//               className="IG relative  right-[37rem] top-[13.4rem]  px-7"
//               href="https://www.instagram.com/cashlessestadios/"
//             >
//               .
//             </a>
//             <NavLink to="/cashless">
//               <button
//                 className="black text-white font-bold py-[.2rem] border md:py-2 w-20 hover:bg-white hover:text-black
//               absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
//               >
//                 Ver
//               </button>
//             </NavLink>

//             <a href="#slide3" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
//             </a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full pt-20 ">
//           <img
//             src={controlA}
//             className="m-auto h-[11rem] md:h-auto "
//             alt="cashless app"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
//             </a>
//             <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
//               Control de accesos
//             </p>
//             <NavLink to="/gestionacceso">
//               <button
//                 className="black text-white font-bold py-[.2rem]   border md:py-2   w-20 hover:bg-white hover:text-black
//               absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
//               >
//                 Ver
//               </button>
//             </NavLink>

//             <a href="#slide4" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
//             </a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full pt-20 ">
//           <img
//             src={tablero}
//             className="m-auto h-[11rem] md:h-auto "
//             alt="cashless app"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❮</span>
//             </a>
//             <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
//               Tableros inteligencia de negocios
//             </p>
//             <NavLink to="/tableros">
//               <button
//                 className="black text-white font-bold py-[.2rem]   border md:py-2   w-20 hover:bg-white hover:text-black
//               absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
//               >
//                 Ver
//               </button>
//             </NavLink>

//             <a href="#slide1" className=" ">
//               <span className="text-white 2xl:text-2xl 2xl:font-bold ">❯</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Carrusel;
