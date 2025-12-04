import React from "react";
import { Link } from "react-router-dom"; // Importamos Link
import "./Navbar.css";

import logo from "../assets/logoNL.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="navbar-container">

      {/* BANNER SUPERIOR */}
      <div className="navbar-top">
        <img src={logo} alt="Nuevo León" className="navbar-logo" />

        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos..." />
          <div className="search-button">
            <img src={searchIcon} alt="Buscar" />
          </div>
        </div>

        <img src={userIcon} alt="Usuario" className="navbar-user" />
      </div>

      {/* MENÚ INFERIOR */}
      <div className="navbar-menu">
        
        {/* Usamos Link para navegar a la página de Inicio */}
        <Link to="/">Inicio</Link> 
        
        {/* Usamos Link para navegar a la página de Catálogo */}
        <Link to="/catalogo" className="active">Catálogo</Link> 
        
        <Link to="/emprendedores">Emprendedores</Link>
        <Link to="/mercadito">Mercadito</Link>
        <Link to="/sobrenosotros">Sobre nosotros</Link>
      </div>

    </div>
  );
}