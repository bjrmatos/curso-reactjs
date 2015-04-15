'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var DefaultCruds = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Default - Cruds</h2>
        <Link to="inicioCruds">Cruds - Inicio</Link>
      </div>
    );
  }
});

module.exports = DefaultCruds;
