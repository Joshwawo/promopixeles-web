import React from "react";
import codikash from "../../img/codikash.webp";
import cashless from "../../img/cashless.webp";

import bgcashless from "../../img/Home/cashless.webp";
import bgcodikash from "../../img/Home/codikash.webp";
import controlA from "../../img/Home/controlacceso.webp";

import { NavLink } from "react-router-dom";

const Carrusel = () => {
  return (
    <div className="bg-red ">
      <div className="carousel w-full bg-black  m-auto">
        <div id="slide1" className="carousel-item relative w-full pt-20 ">
          <img
            src={bgcodikash}
            className="m-auto h-[11rem] md:h-auto "
            alt="cashless app"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className=" ">
              <span className="text-white">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Codikash
            </p>
            <NavLink to="/codikash">
              <button
                className="black text-white font-bold  border w-20 py-[.2rem] md:py-2 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20"
              >
                Ver
              </button>
            </NavLink>

            <a href="#slide2" className=" ">
              <span className="text-white">❯</span>
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full pt-20 ">
          <img
            src={bgcashless}
            className="m-auto h-[11rem] md:h-auto "
            alt="cashless app"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className=" ">
              <span className="text-white">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Cashless
            </p>
            <NavLink to="/cashless">
              <button className="black text-white font-bold py-[.2rem] border md:py-2 w-20 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20">
                Ver
              </button>
            </NavLink>

            <a href="#slide3" className=" ">
              <span className="text-white">❯</span>
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
            <a href="#slide1" className=" ">
              <span className="text-white">❮</span>
            </a>
            <p className=" text-white md:text-2xl  absolute top-[4.3rem] md:top-20 xl:top-40 xl:left-20">
              Control de accesos 
            </p>
            <NavLink to="/gestionacceso">
              <button className="black text-white font-bold py-[.2rem]   border md:py-2   w-20 hover:bg-white hover:text-black 
              absolute  left-[-.1rem] top-[5.9rem]  md:top-[7rem] xl:top-48 xl:left-20">
                Ver
              </button>
            </NavLink>

            <a href="#slide1" className=" ">
              <span className="text-white">❯</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
