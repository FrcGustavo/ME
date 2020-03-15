import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import './assets/styles/Admin.scss';

const Admin = () => (
  <>
    <div className="admin">
      <Navbar />
      <div className="side-nav-bar">
        <Header />
        <main>
          <Switch>
            <Route exact path="/admin">
              <h1>Administrador</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  </>
);

export default Admin;
