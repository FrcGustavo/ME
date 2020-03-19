import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import Projects from '../containers/Projects';

import '../assets/styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proyectos" component={Projects} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
