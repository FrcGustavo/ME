import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
