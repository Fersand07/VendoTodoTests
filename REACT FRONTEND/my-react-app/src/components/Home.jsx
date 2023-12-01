// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  // Datos de productos destacados (ejemplo)
  const featuredProducts = [
    {
      id: 1,
      name: 'Producto 1',
      price: 50,
      rating: 4,
      image: 'producto1.jpg',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="home">
      <div className="hero-section">
        {/* Imagen a pantalla completa */}
        <img src="hero-image.jpg" alt="Hero" className="hero-image" />
      </div>
      <div className="featured-products">
        {featuredProducts.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
