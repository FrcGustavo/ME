import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Admin = () => (
  <>
    <div>
      <Switch>
        <Route exact path="/admin">
          <h1>Administrador</h1>
        </Route>
      </Switch>
    </div>
  </>
);

export default Admin;
