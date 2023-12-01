import React from 'react';

const Card = ({ name, price, rating, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price}</p>
        <div className="rating">
          {/* Renderiza las estrellas según la clasificación */}
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} role="img" aria-label="star">⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;