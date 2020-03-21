import React from 'react';

import Navbar from './Navbar';

import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
