import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';

import './assets/styles/Auth.scss';

const Main = () => (
  <>
    <main className="auth-main">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </main>
  </>
);

export default Main;
