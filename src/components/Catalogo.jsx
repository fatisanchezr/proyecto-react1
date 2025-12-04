import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "./Catalogo.css";

import moda from "../assets/moda.png";
import alimentos from "../assets/alimentosYbebidas.png";
import belleza from "../assets/belleza.png";
import joyeria from "../assets/joyeria.png";
import zapatos from "../assets/zapatos.png";
import planta from "../assets/planta.png";
import mascota from "../assets/mascota.png";
import salud from "../assets/salud.png";

function Catalogo() {
  const categorias = [
    { nombre: "MODA", imagen: moda, ruta: "/moda" }, // Link agregado
    { nombre: "ALIMENTOS Y BEBIDAS", imagen: alimentos },
    { nombre: "BELLEZA Y ACCESORIOS", imagen: belleza },
    { nombre: "JOYERÍA Y ACCESORIOS", imagen: joyeria },
    { nombre: "ZAPATOS", imagen: zapatos },
    { nombre: "HOGAR Y DECORACIÓN", imagen: planta },
    { nombre: "MASCOTAS", imagen: mascota },
    { nombre: "SALUD Y BIENESTAR", imagen: salud },
  ];

  const primeraFila = categorias.slice(0, 4);
  const segundaFila = categorias.slice(4, 8);

  return (
    <div className="catalogo-container">
      <h1>CATÁLOGO DIGITAL</h1>

      <div className="catalogo-grid">
        {primeraFila.map((cat, index) => (
          cat.ruta ? (
            <Link to={cat.ruta} key={index} style={{ textDecoration: "none" }}>
              <CategoryCard nombre={cat.nombre} imagen={cat.imagen} />
            </Link>
          ) : (
            <CategoryCard key={index} nombre={cat.nombre} imagen={cat.imagen} />
          )
        ))}
      </div>

      <p className="catalogo-aviso">
        <em>Las compras en línea no están disponibles para ningún producto.</em>
      </p>

      <div className="catalogo-grid">
        {segundaFila.map((cat, index) => (
          <CategoryCard key={index} nombre={cat.nombre} imagen={cat.imagen} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
