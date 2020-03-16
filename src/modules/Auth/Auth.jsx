import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './containers/Register';

const Main = () => (
  <>
    <main className="auth-main">
      <Switch>
        <Route exact path="/auth/login" component={Register} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/register" />
      </Switch>
    </main>
  </>
);

export default Main;
