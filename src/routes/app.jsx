import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../config';

import Main from '../modules/Main';
import Auth from '../modules/Auth/Auth';
import Admin from '../modules/Admin/Admin';

import '../assets/styles/app.scss';

const App = () => {
  firebase.initializeApp(firebaseConfig);

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
      { userOrAdmin() }
    </BrowserRouter>
  );
};

export default App;
