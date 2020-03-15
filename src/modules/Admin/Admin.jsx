import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Projects from './containers/Projects';
import Blog from './containers/Blog';

import './assets/styles/Admin.scss';

const Admin = () => (
  <>
    <div className="admin">
      <Navbar />
      <div className="side-nav-bar">
        <Header />
        <main>
          <Switch>
            <Route exact path="/admin" component={Projects} />
            <Route exact path="/admin/proyectos" component={Projects} />
            <Route exact path="/admin/blog" component={Blog} />
          </Switch>
        </main>
      </div>
    </div>
  </>
);

export default Admin;
