import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
//import { renderRoutes } from 'react-router-config';
import Home from '../../frontend/containers/Home';
import render from '../render';

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter>
        <Home />
      </StaticRouter>,
    );
    console.log(html);

    res.send(render(html));
  } catch (error) {
    next(error);
  }
};

export default main;
