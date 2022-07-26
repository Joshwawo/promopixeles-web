import React from "react";
import codikash from "../img/codikash.webp";
import cashless from "../img/cashless.webp";

const Carrusel = () => {
  return (
    <div className="bg-black ">
      <div className="carousel w-full bg-black pb-10  container m-auto">
        <div id="slide1" className="carousel-item relative w-full pt-20 pb-20 py-7">
          <img src={codikash} className="m-auto" alt="Codikash App" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle   ">
              <span className="text-white hover:text-white">❮</span>
            </a>
            <p className=" text-white text-2xl  absolute top-20 left-20">Codikash</p>
              <button className="black text-white font-bold  border py-2   w-20 hover:bg-white hover:text-black absolute top-32 left-20">
                Ver
              </button>
            <a href="#slide2" className="btn btn-circle ">
              <span className="text-white">❯</span>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full pt-20 py-7">
          <img src={cashless} className="m-auto" alt="cashless app" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle ">
              <span className="text-white">❮</span>
            </a>
              <p className=" text-white text-2xl  absolute top-20 left-20">Cashless</p>
              <button className="black text-white font-bold  border py-2   w-20 hover:bg-white hover:text-black absolute top-32 left-20">
                Ver
              </button>
            

            <a href="#slide1" className="btn btn-circle ">
              <span className="text-white">❯</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
