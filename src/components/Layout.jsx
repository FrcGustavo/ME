import React from 'react';

import Navbar from './Navbar';

import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
    <footer className="footer">
      Todos los derechos reservados
    </footer>
  </>
);

export default Layout;
