'use strict';

var React = require('react');

var PersonList = React.createClass({
  render: function() {
    var personItems = this.props.persons.map(function(person, index) {
      return (
        <li key={index}>
          {person.nombre + ' - ' + person.apellidos + ', ' + person.edad}
        </li>
      );
    });

    return (
      <section>
        <ul>{personItems}</ul>
      </section>
    );
  }
});

module.exports = PersonList;
