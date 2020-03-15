import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <>
    <header className="header">
      <div className="main">
        <Link to="/" className="logo">FrcGustavo</Link>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/proyectos">Proyectos</Link>
        </nav>
      </div>
    </header>
    <main>
      {children}
    </main>
    <footer className="footer">
      Todos los derechos reservados
    </footer>
  </>
);

export default Layout;
