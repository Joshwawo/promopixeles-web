import { tablerosData, comolohacemosdata } from "../../data/data";
import Dot from "../../helpers/Dot";

import linea from "../../img/Tableros/SVG/linea.svg";
import comolohacemos from "../../img/Tableros/comohacemos2.webp";
import pc from "../../img/Tableros/comowbg.webp";
import pcs from "../../img/Tableros/pcs.webp";

const Segundo = () => {
  return (
    <div className=" ">
      <section className="p1 container-95">
        <p className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10">
          Business Intelligence /{" "}
          <span className="monserrat-bold-regular">Retos</span>{" "}
        </p>
        <p className="monserrat-regular text-justify mt-5  md:text-xl">
          Es el uso de técnicas, herramientas y capacidades, para generar
          conocimiento y este se transforma en una mejor toma de decisiones, las
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
      </section>

      <section className="comolohacemos mt-10 container-95">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10">
          ¿Cómo lo hacemos?
        </h2>
        <p className="monserrat-regular text-justify mt-5 mb-10 md:text-xl">
          Nuestro enfoque consultivo es de acompañamiento y colaboración para
          lograr objetivos de negocio, <br />
          se cuenta con un grupo diverso de especialistas para llevar un
          proyecto de Business Inteligence.
        </p>
      </section>

      <section className="comollohacemos2 container-95 ">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10 mb-5">
          ¿Cómo lo hacemos?
        </h2>
        <img
          src={linea}
          alt="Esto es una linea"
          className="relative hidden xl:block top-16 -z-10 w-[90rem]"
        />
      </section>

      <section className="container-95 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 ">
        {comolohacemosdata.map(({ id, img, titulo }) => {
          return (
            <div key={id} className="fig">
              <img src={img} alt="figuras SVG" className="w-32 mt-5 bg-white" />
              <p className="mt-5 md:text-xl text-start">{titulo}</p>
            </div>
          );
        })}
      </section>

      <section className="comolohacemos2 container-95">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10 mb-5">
          ¿Cómo lo hacemos?
        </h2>
        <img src={comolohacemos} alt="Como lo hacemos" className="mx-auto" />
      </section>

      <section className="bg-tableros mt-10 ">
        <div className="fortalesas container-95 h-screen md:flex">
          <div className=" md:w-1/2">
            <p className="text-white monserrat-bold text-4xl pt-20">
              Fortalezas de <br /> inteligencia de <br />
              negocio
            </p>
            <p className="border-t-8 border-white w-[4rem] my-7"></p>

            <p className="text-white md:text-xl 2xl:text-3xl">
              <Dot />
              Enfoque Consultivo
            </p>
            <p className="text-white md:text-xl 2xl:text-3xl">
              <Dot />
              Grupo de especialistas
            </p>
            <p className="text-white md:text-xl 2xl:text-3xl">
              <Dot />
              Proyectos adaptados a las necesidades
            </p>
            <p className="text-white md:text-xl 2xl:text-3xl">
              <Dot />
              Resultados de impacto
            </p>
          </div>
          <div className="img md:w-1/2">
            <img src={pc} alt="Imagen" className="  md:block mx-auto" />
          </div>
        </div>
      </section>

      <section className="container-95 pb-14">
        <h2 className="text-blue-900 monserrat-bold md:text-2xl xl:text-3xl mt-10 mb-5">
          Beneficios de implemetar BI en organizaciones
        </h2>

        <div className=" xl:flex">
          <div className="items xl:w-1/2 ">
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                1
              </span>
              <p className=" monserrat-semibold">
                Tomar decisiones sobre el negocio basado <br /> en información
                confiable
              </p>
              .
            </div>

            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                2
              </span>
              <p className=" monserrat-semibold">
                Realizar análisis como proyecciones sobre <br /> las ventas,
                ingresos y la rentabilidad.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                3
              </span>
              <p className=" monserrat-semibold">
                Detectar problemas como dobles procesos, <br />
                demoras y falta de eficacia en la ejecución de tareas.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                4
              </span>
              <p className=" monserrat-semibold">
                Analizar las tendencias y a los clientes para <br />
                lograr una mejor segmentacion del mercado.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                5
              </span>
              <p className=" monserrat-semibold">
                crear reportes detallas y personalizados.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                6
              </span>
              <p className=" monserrat-semibold">
                Fidelizar y capturar clientes, optimizar proceso y <br />
                ahorrar a través de predicciones.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                7
              </span>
              <p className=" monserrat-semibold">
                Mejorar la experiencia del usuario en marketing, <br />
                ecommerce, plataformas de streaming, etc.
              </p>
            </div>
            <div className="flex pt-4">
              <span className="text-blue-900 text-2xl px-2  monserrat-bold">
                8
              </span>
              <p className=" monserrat-semibold">
                Detectar y corregir posibles desviaciones en los <br />
                presupuestos de una empresa.
              </p>
            </div>
          </div>
          <div className=" xl:w-1/2">
            <img src={pcs} alt="dos pcs" className=" hidden xl:block mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segundo;
