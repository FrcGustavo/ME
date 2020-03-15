import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from '../containers/Home';
import Projects from '../containers/Projects';

const Main = () => (
  <>
    <header className="header">
      <div className="main">
        <Link to="/" className="logo">FrcGustavo</Link>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/proyectos">Proyectos</Link>
        </nav>
      </div>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/proyectos" component={Projects} />
      </Switch>
    </main>
    <footer className="footer">
      Todos los derechos reservados
    </footer>
  </>
);

export default Main;
