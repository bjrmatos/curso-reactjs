'use strict';

var React = require('react'),
    Router = require('react-router'),
    App = require('./layouts/App'),
    Default = require('./pages/Default'),
    DefaultCruds = require('./pages/cruds/DefaultCruds'),
    Inicio = require('./pages/Inicio'),
    InicioCruds = require('./pages/cruds/InicioCruds'),
    Contacto = require('./pages/Contacto'),
    Unknown = require('./pages/Unknown'),
    UnknownCruds = require('./pages/cruds/UnknownCruds'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Default} />
    <Route name="inicio" handler={Inicio} />
    <Route name="contacto" handler={Contacto} />
    <NotFoundRoute handler={Unknown} />

    <Route name="app-cruds" path='/cruds'>
      <DefaultRoute handler={DefaultCruds} />
      <Route name="inicioCruds" path="inicio" handler={InicioCruds} />
      <NotFoundRoute handler={UnknownCruds} />
    </Route>
  </Route>
);

module.exports = routes;
