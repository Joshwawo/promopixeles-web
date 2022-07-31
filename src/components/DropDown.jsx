import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropDown = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <div className="dropdown">
      <button className="dropbtn">Producto Y Servicios </button>
      <div className="dropdown-content rounded-md text-cente">
        <NavLink
          to="/codikash"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Codikash
        </NavLink>
        <NavLink
          to="/cashless"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Cashless
        </NavLink>
        <NavLink
          to="/gestionacceso"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Gestion de Accesos
        </NavLink>
      </div>
    </div>
  );
};

export default DropDown;
