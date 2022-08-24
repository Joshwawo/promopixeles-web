//Estas son las de la pagina del homepage
import agenda from "../img/Home/agenda.webp";
import estrategia from "../img/Home/estrategia.webp";
import impactoFinanciero from "../img/Home/capa6.webp";
import datos from "../img/Home/transformacion-de-datos.webp";

//Estas son de la pagina de tableros
import tomaDecisiones from "../img/Tableros/Toma_de_Decisiones.webp";
import informacion from "../img/Tableros/informacion.webp";
import proceso from "../img/Tableros/proceso.webp";
import datostableros from "../img/Tableros/transdatos.webp";
import calidad from "../img/Tableros/calidad.webp";
import seguridad from "../img/Tableros/seguridad.webp";
import monitoreo from "../img/Tableros/monitoreo.webp";

//Etas son de la pagina de tableros la seccion de como lo hacemos
import second from '../img/Tableros/SVG/uno.svg'
import uno from "../img/Tableros/SVG/uno.svg";
import dos from "../img/Tableros/SVG/dos.svg";
import tres from "../img/Tableros/SVG/tres.svg";
import cuatro from "../img/Tableros/SVG/cuatro.svg";
import cinco from "../img/Tableros/SVG/cinco.svg";
import seis from "../img/Tableros/SVG/seis.svg";
import siete from "../img/Tableros/SVG/siete.svg";

const data = [
  {
    id: 1,
    bg: "red",
    img: agenda,
    titulo: "Agenda digital",
    desc: [
      ["Punto numero uno"],
      ["Punto numero dos"],
      ["Punto numero tres"],
      ["Punto numero cuatro"],
      ["Punto numero cinco"],
    ],
  },
  {
    id: 2,
    bg: "gray",
    img: estrategia,
    titulo: "Estrategia de datos",
    desc: [
      ["Punto numero uno"],
      ["Punto numero dos"],
      ["Punto numero tres"],
      ["Punto numero cuatro"],
      ["Punto numero cinco"],
    ],
  },
  {
    id: 3,
    bg: "red",
    img: impactoFinanciero,
    titulo: "Impacto financiero positivo",
    desc: [
      ["Punto numero uno"],
      ["Punto numero dos"],
      ["Punto numero tres"],
      ["Punto numero cuatro"],
      ["Punto numero cinco"],
    ],
  },
  {
    id: 4,
    bg: "gray",
    img: datos,
    titulo: "Transformación de datos",
    desc: [
      ["Punto numero uno"],
      ["Punto numero dos"],
      ["Punto numero tres"],
      ["Punto numero cuatro"],
      ["Punto numero cinco"],
    ],
  },
];

const tablerosData = [
  {
    id: 1,
    img: tomaDecisiones,
    titulo:
      "Cambiar la cultura de toma de decisiones de experiencia a basadas en información",
  },
  {
    id: 2,
    img: informacion,
    titulo:
      "Capacidad de comprender la información disponible y tomar decisiones a partir de un análisis ",
  },
  {
    id: 3,
    img: proceso,
    titulo:
      "La información toma peso para la toma de decisiones lo que puede detonar en cambios de procesos",
  },
  {
    id: 4,
    img: datostableros,
    titulo:
      "Gestionar diversas fuentes y volúmenes de datos y tener la capacidad de homogeneizar para su posterior análisis",
  },
  {
    id: 5,
    img: calidad,
    titulo: "Capacidad de gestionar la calidad de los datos",
  },
  {
    id: 6,
    img: seguridad,
    titulo: "Seguridad de la información",
  },
  {
    id: 7,
    img: monitoreo,
    titulo: "Capacidad de realizar análisis predictivo",
  },
];

const comolohacemosdata = [
  {
    id: 1,
    img: uno,
    titulo: "Exploracion de datos, fuentes de datos y procesos de negocios",
  },
  {
    id: 7,
    img: siete,
    titulo: "Generación de datos IOT",
  },
  {
    id: 2,
    img: dos,
    titulo: "Análisis de datos, diagnostico y planeacion",
  },
  {
    id: 3,
    img: tres,
    titulo: "Integración de datos y desarollo",
  },
  {
    id: 4,
    img: cuatro,
    titulo: "Dashboards Directivos",
  },
  {
    id: 5,
    img: cinco,
    titulo: "Analítica predictiva IA",
  },
  {
    id: 6,
    img: seis,
    titulo: "Toma de decisiones",
  },

];

export { data, tablerosData, comolohacemosdata };
