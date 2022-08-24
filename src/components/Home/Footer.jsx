import React from "react";
// import logo from "../../img/LogoPromopixeles.png";
import LogoFooter from "../../img/LogoPromoFooter.webp";

const Footer = () => {
  return (
    <footer className=" bg-[#069D57 bg-[#201f1f] py-20  ">
      <div className="container-95">
        <div className="text-center text-white">
          {/* <p className="text-4xl">Promopixeles</p> */}
          <img
            src={LogoFooter}
            alt="Logo Promopixeles"
            className=" w-[40%] xl:w-[20%] mx-auto"
          />
          <p className="pt-10 md:text-2xl">Promopixeles de México SA de CV</p>
        </div>

        <div className="md:flex md:justify-around text-white text-center ">
          {/* <div className="item1 mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p>Ing.Javier Ríos Montaño </p>
            <a href="tel:6621438751">662 143 8751</a>
            <br />
            <a href="mailto:javier@promopixeles.com">javier@promopixeles.com</a>
            
          </div> */}
          <div className="item2 mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p>
              Paseo Río Sonora Norte No.51 <br />
              Proyecto Rio Sonora <br />
              Hermosilllo, Sonora.
            </p>
          </div>
          <div className="item3 mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:Comercial@promopixeles.com">
              Comercial@promopixeles.com
            </a>
            <br />
            <a href="mailto:soporte@promopixeles.con">
              soporte@promopixeles.con
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
