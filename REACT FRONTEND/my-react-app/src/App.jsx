import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/home'

function App() {
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

export default App
