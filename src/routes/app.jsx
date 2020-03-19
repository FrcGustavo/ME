import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from '../modules/Main';
import Auth from '../modules/Auth/Auth';
import Admin from '../modules/Admin/Admin';

import '../assets/styles/app.scss';

const App = () => {
  function userOrAdmin() {
    const url = document.URL.split('/')[3];

    if (url === 'admin') {
      return <Admin />;
    }
    if (url === 'auth') {
      return <Auth />;
    }
    return <Main /> ;
  }

  return (
    <BrowserRouter>
      { /*userOrAdmin()*/ }
      <Admin />
      <Auth />
      <Main />
    </BrowserRouter>
  );
};

export default App;
