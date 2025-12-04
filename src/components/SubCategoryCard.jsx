// fileName: SubCategoryCard.jsx
import React from "react";
// CORRECCIÓN: Ahora apunta correctamente a la carpeta 'pages'
import "../pages/Mujer.css"; 

/**
 * Componente para mostrar la tarjeta de subcategoría.
 * La imagen es más ancha que alta.
 */
function SubCategoryCard({ nombre, imagen }) {
  return (
    <div className="subcategory-card">
      {/* La clase subcategory-img establecerá la proporción horizontal (Ancho > Alto) */}
      <img src={imagen} alt={nombre} className="subcategory-img" /> 
      <p className="subcategory-name">{nombre}</p>
    </div>
  );
}

export default SubCategoryCard;