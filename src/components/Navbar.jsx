import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Navbar.scss';

const Navbar = () => (
  <header className="header">
    <div className="header-container main">
      <Link to="/" className="logo">FrcGustavo</Link>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
