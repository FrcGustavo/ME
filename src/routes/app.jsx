import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from '../modules/Main';
import Auth from '../modules/Auth/Auth';
import Admin from '../modules/Admin/Admin';

import { hasUser } from '../utils/firebase';

import '../assets/styles/app.scss';

const App = () => {
  function userOrAdmin() {
    const url = document.URL.split('/')[3];
    //hasUser().then(console.log);
    //console.log('U', u, typeof u);
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
      { userOrAdmin() }
    </BrowserRouter>
  );
};

export default App;
