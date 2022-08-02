import React from "react";
import codikash from "../../img/codikash.webp";
import cashless from "../../img/cashless.webp";




import {NavLink} from 'react-router-dom'

const Carrusel = () => {
  return (
    <div className="bg-red ">
      
      <div className="carousel w-full bg-pink-300    m-auto">
        <div id="slide1" className="carousel-item relative w-full     ">
          <img src={''} className="m-auto " alt="Codikash App" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="   ">
              <span className="text-white hover:text-white">❮</span>
            </a>
            <p className=" text-white text-2xl  absolute top-40 left-20">Codikash</p>
              <NavLink to="/codikash"> 
                <button className="black text-white font-bold  border py-2   w-20 hover:bg-white hover:text-black absolute top-48 left-20">
                  Ver
                </button>
              </NavLink>
            <a href="#slide2" className=" ">
              <span className="text-white">❯</span>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full pt-20 ">
          <img src={''} className="m-auto h-[11rem] md:h-auto " alt="cashless app" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className=" ">
              <span className="text-white">❮</span>
            </a>
              <p className=" text-white text-2xl  absolute top-40 left-20">Cashless</p>
              <NavLink to="/cashless">
                <button className="black text-white font-bold  border py-2   w-20 hover:bg-white hover:text-black absolute top-48 left-20">
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
