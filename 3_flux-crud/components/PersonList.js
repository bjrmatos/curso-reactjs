'use strict';

var React = require('react'),
    PersonActions = require('../actions/PersonActions');

var PersonList = React.createClass({
  onButtonClick: function(mode, pid) {
    if (mode === 'D') {
      PersonActions.remove(pid);
    } else if (mode === 'U') {
      PersonActions.editPerson(pid);
    }
  },

  render: function() {
    var self = this;

    var personItems = this.props.persons.map(function(person, index) {
      return (
        <li key={index}>
          {person.nombre + ' - ' + person.apellidos + ', ' + person.edad}
          {' '}<button onClick={self.onButtonClick.bind(self, 'U', person.id)}>Editar</button>
          {' '}<button onClick={self.onButtonClick.bind(self, 'D', person.id)}>Eliminar</button>
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
