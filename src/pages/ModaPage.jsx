// fileName: ModaPage.jsx (CORREGIDO)
import React from "react";
// 1. IMPORTAR LINK DE REACT-ROUTER-DOM
import { Link } from "react-router-dom"; 
import "./Moda.css";

import hombre from "../assets/hombre.png";
import mujer from "../assets/mujer.png";
import nino from "../assets/nino.png";
import nina from "../assets/nina.png";

function ModaPage() {
  return (
    <div className="moda-page">
      <div className="moda-container">
        
        {/* HOMBRE - Se mantiene sin enlace si no tienes página */}
        <div className="moda-item">
          <img src={hombre} alt="Hombre" className="moda-image" />
          <span className="moda-text">HOMBRE</span>
        </div>
        
        {/* MUJER - 2. ENVOLVER CON LINK A LA RUTA '/mujer' */}
        <Link to="/mujer" className="moda-item-link"> {/* Agregué una clase opcional para estilos */}
          <div className="moda-item">
            <img src={mujer} alt="Mujer" className="moda-image" />
            <span className="moda-text">MUJER</span>
          </div>
        </Link>
        
        {/* NIÑO - Se mantiene sin enlace si no tienes página */}
        <div className="moda-item">
          <img src={nino} alt="Niño" className="moda-image" />
          <span className="moda-text">NIÑO</span>
        </div>
        
        {/* NIÑA - Se mantiene sin enlace si no tienes página */}
        <div className="moda-item">
          <img src={nina} alt="Niña" className="moda-image" />
          <span className="moda-text">NIÑA</span>
        </div>
      </div>
    </div>
  );
}

export default ModaPage;