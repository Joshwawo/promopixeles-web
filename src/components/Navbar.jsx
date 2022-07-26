import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import logo from "../img/promopixeles.webp";
import DropDown from "./DropDown";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavLink to="/">
          <img src={logo} alt="Logo Promopixeles"  className="w-20" />
        </NavLink>
        <div className="flex items-center ">
          <ul className="hidden md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "rojitoNav" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <DropDown />
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "rojitoNav" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-white w-full px-8 md:hidden"}
      >
        <li className="border-b-2 border-white w-full">
          <NavLink
            to="/"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="border-b-2 text-base font-normal border-white w-full">
          
          <div className="dropdown">
            <button className="dropbtn">Producto Y Servicios </button>
            <div className="dropdown-content">
              <NavLink to="/codikash" onClick={handleClose} className={({ isActive }) => (isActive ? "text-red-400" : "")}>Codikash</NavLink>
              <NavLink to="/cashless" onClick={handleClose} className={({ isActive }) => (isActive ? "text-red-400" : "")}>Cashless</NavLink>
              <NavLink to="/productos&servicios" onClick={handleClose} className={({ isActive }) => (isActive ? "text-red-400" : "")}>Otros</NavLink>
            </div>
          </div>
        </li>
        <li className="border-b-2 border-white w-full">
          <NavLink
            to="/contacto"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
