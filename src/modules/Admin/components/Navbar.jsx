import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="admin-navbar navbar">
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;
