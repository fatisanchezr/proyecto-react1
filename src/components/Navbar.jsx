import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logoNL.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";

export default function Navbar() {
  return (
    <nav className="navbar-container">

      {/* PARTE SUPERIOR */}
      <div className="navbar-top">
        <img src={logo} alt="Hecho Nuevo León" className="navbar-logo" />

        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos..." />
          <button className="search-button">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </div>

        <img src={userIcon} alt="Usuario" className="navbar-user" />
      </div>

      {/* MENÚ INFERIOR - Se agrega el enlace a /mujer */}
      <div className="navbar-menu">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        {/* NUEVO ENLACE: Se asume que este será el nuevo enlace a Mujer */}
        <Link to="/mujer">Mujer</Link> 
        <Link to="/emprendedores">Emprendedores</Link>
        <Link to="/mercadito">Mercadito</Link>
        <Link to="/sobrenosotros">Sobre Nosotras</Link>
      </div>

    </nav>
  );
}