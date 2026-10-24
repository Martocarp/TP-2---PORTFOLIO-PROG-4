import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-panel">
      <h2 className="nav-brand">
        MAOC<span>_</span>
      </h2>
      <ul className="nav-links">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/about">SOBRE MI</Link>
        </li>
        <li>
          <Link to="/skills">HABILIDADES</Link>
        </li>
        <li>
          <Link to="/projects">MIS PROYECTOS</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACTO</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
