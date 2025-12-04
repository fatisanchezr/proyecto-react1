import React from "react";
import "./CategoryCard.css";

function CategoryCard({ nombre, imagen }) {
  return (
    <div className="category-card">
      <img src={imagen} alt={nombre} className="category-img" />
      <p className="category-name">{nombre}</p>
    </div>
  );
}

export default CategoryCard;
