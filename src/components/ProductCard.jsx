// fileName: ProductCard.jsx
import React from "react";
// CORRECCIÓN: Ahora apunta correctamente a la carpeta 'pages'
import "../pages/Mujer.css"; 

/**
 * Componente para mostrar la tarjeta de un producto.
 * La imagen es más alta que ancha.
 */
function ProductCard({ imagen, disenador, descripcion, precio }) {
  return (
    <div className="product-card">
      {/* La clase product-img establecerá la proporción vertical (Alto > Ancho) */}
      <div className="product-image-container">
        <img src={imagen} alt={descripcion} className="product-img" /> 
      </div>
      
      <div className="product-info">
        {/* Diseñador en negritas */}
        <p className="product-designer">
          <strong>{disenador}</strong>
        </p>
        {/* Mini descripción del producto */}
        <p className="product-description">{descripcion}</p> 
        {/* Precio */}
        <p className="product-price">${precio.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;