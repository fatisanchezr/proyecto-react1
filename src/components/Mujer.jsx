// fileName: Mujer.jsx
// UBICACIÓN: src/components/Mujer.jsx
import React from "react";
// Asegúrate que esta ruta a SubCategoryCard sea correcta 
import SubCategoryCard from "./SubCategoryCard"; 
// Asegúrate que esta ruta a ProductCard sea correcta 
import ProductCard from "./ProductCard"; 
// Si tu Mujer.css está en 'pages', la ruta de importación de estilos debe ser corregida aquí:
import "../pages/Mujer.css"; 


// --- IMPORTA TUS IMÁGENES AQUÍ (Asegúrate de que la ruta '../assets/' sea correcta) ---
import blusaImg from "../assets/blusa.png"; 
import jeansImg from "../assets/jeans.png"; 
import sudaderaImg from "../assets/sudadera.png"; 
import vestidoImg from "../assets/vestido.png"; 

import p1Img from "../assets/producto1.png"; 
import p2Img from "../assets/producto2.png"; 
import p3Img from "../assets/producto3.png"; 
import p4Img from "../assets/producto4.png"; 
import p5Img from "../assets/producto5.png"; 

function Mujer() {
  const subCategorias = [
    { nombre: "BLUSAS", imagen: blusaImg },
    { nombre: "JEANS", imagen: jeansImg },
    { nombre: "SUDADERAS", imagen: sudaderaImg },
    { nombre: "VESTIDOS", imagen: vestidoImg },
  ];

  // Definición de los 5 productos únicos
  const productosUnicos = [
    { 
      imagen: p1Img, 
      disenador: "Ana Laura", 
      descripcion: "Blusa de seda", 
      precio: 1250.00 
    },
    { 
      imagen: p2Img, 
      disenador: "Gabriela Hearst", 
      descripcion: "Jeans de corte alto", 
      precio: 1899.90 
    },
    { 
      imagen: p3Img, 
      disenador: "Dolce vita", 
      descripcion: "Vestido minicasual.", 
      precio: 850.00 
    },
    { 
      imagen: p4Img, 
      disenador: "Ladero", 
      descripcion: "Sudadera casual.", 
      precio: 650.00 
    },
    { 
      imagen: p5Img, 
      disenador: "Urban Trend", 
      descripcion: "Falda midi con patrón geométrico y ajuste perfecto.", 
      precio: 1100.00 
    },
  ];
  
  // CORREGIDO: Repetir los 5 productos 2 veces para obtener la lista de 10 (2 filas)
  const productos = [
    ...productosUnicos, // Fila 1 (5 productos)
    ...productosUnicos, // Fila 2 (5 productos)
  ];

  return (
    <div className="mujer-container">
      <h1 className="mujer-main-title">MODA MUJER</h1> 

      {/* 1. SUBCATEGORÍAS */}
      <div className="subcategory-grid">
        {subCategorias.map((cat, index) => (
          <SubCategoryCard 
            key={index} 
            nombre={cat.nombre} 
            imagen={cat.imagen} 
          />
        ))}
      </div>

      <hr className="divider" />
      
      <h2 className="mujer-secondary-title">PODRIA GUSTARTE</h2>
      
      {/* 2. PRODUCTOS */}
      <div className="product-grid">
        {productos.map((prod, index) => (
          <ProductCard
            key={index}
            imagen={prod.imagen}
            disenador={prod.disenador}
            descripcion={prod.descripcion}
            precio={prod.precio}
          />
        ))}
      </div>
    </div>
  );
}

export default Mujer;