import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../config';

import Main from '../modules/Main';
import Admin from '../modules/Admin/Admin';

import '../assets/styles/app.scss';

const App = () => {
  firebase.initializeApp(firebaseConfig);

  function userOrAdmin() {
    const url = document.URL.split('/')[3];
    if (url === 'admin') {
      return <Admin />;
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
