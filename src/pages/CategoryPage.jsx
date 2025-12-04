import React from 'react';

// Este componente recibirá la categoría específica (ej: "Hombre") como una prop.
const CategoryPage = ({ category }) => {
  return (
    <div className="category-page">
      <h2>Catálogo de Moda: {category}</h2>
      <p>Aquí se mostrarán los productos de la sección {category}.</p>
    </div>
  );
};

export default CategoryPage;