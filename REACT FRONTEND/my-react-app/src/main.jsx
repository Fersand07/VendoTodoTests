import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import App from './App'
import './index.css'

function Main() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* Agrega rutas para otras secciones de la aplicación si es necesario */}
      </div>
    </Router>
  );
}

export default Main;