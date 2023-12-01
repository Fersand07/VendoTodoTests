// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">VendeloTodo</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <select>
          <option value="all">Todas las categorías</option>
          <option value="electronics">Electrónicos</option>
          {/* Agrega más categorías según sea necesario */}
        </select>
      </div>
      <div className="actions">
        <Link to="/publish" className="btn">Publicar un Anuncio</Link>
        <Link to="/login" className="btn">Iniciar Sesión</Link>
        <Link to="/cart" className="cart-icon">
          <span role="img" aria-label="cart">🛒</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
