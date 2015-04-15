'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <main>
        <header>
          <nav>
            <ul>
              <li><Link to="inicio">Inicio</Link></li>
              <li><Link to="contacto">Contacto</Link></li>
              <li><Link to="app-cruds">Cruds - Default</Link></li>
            </ul>
          </nav>
        </header>

        {/* contenido */}
        <section>
          <RouteHandler />
        </section>

        <footer>
          <strong>Creado en TAM</strong>
        </footer>
      </main>
    );
  }
});

module.exports = App;
