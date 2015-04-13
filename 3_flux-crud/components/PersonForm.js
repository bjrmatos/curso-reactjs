'use strict';

var React = require('react'),
    PersonActions = require('../actions/PersonActions');

var PersonForm = React.createClass({
  onSave: function() {
    var inputNombre = this.refs.nombre.getDOMNode(),
        inputApellidos = this.refs.apellidos.getDOMNode(),
        inputEdad = this.refs.edad.getDOMNode(),
        personData = {};

    personData.nombre = inputNombre.value;
    personData.apellidos = inputApellidos.value;
    personData.edad = inputEdad.value;

    PersonActions.insert(personData);

    inputNombre.value = '';
    inputApellidos.value = '';
    inputEdad.value = '';
  },

  render: function() {
    return (
      <form style={{ width: 300, height: 300 }}>
        <div>
          <input ref="nombre" name="nombre" type="text" placeholder="Nombre" /><br/><br/>
          <input ref="apellidos" name="apellidos" type="text" placeholder="Apellidos" /><br/><br/>
          <input ref="edad" name="edad" type="text" placeholder="Edad" />
        </div>

        <div style={{ marginTop: 15 }}>
          <button type="button" onClick={this.onSave}>Guardar</button>
        </div>
      </form>
    );
  }
});

module.exports = PersonForm;
