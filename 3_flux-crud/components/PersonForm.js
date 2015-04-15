'use strict';

var React = require('react'),
    assign = require('object-assign'),
    PersonActions = require('../actions/PersonActions');

var PersonForm = React.createClass({
  onSave: function(mode, pid) {
    var inputNombre = this.refs.nombre.getDOMNode(),
        inputApellidos = this.refs.apellidos.getDOMNode(),
        inputEdad = this.refs.edad.getDOMNode(),
        personData = {};

    personData.nombre = inputNombre.value;
    personData.apellidos = inputApellidos.value;
    personData.edad = inputEdad.value;

    if (mode === 'I') {
      PersonActions.insert(personData);
    } else if (mode === 'U') {
      personData.id = pid;
      PersonActions.update(pid, personData);
    }
  },

  render: function() {
    var mode = !this.props.selectedPerson ? 'I' : 'U';

    var defaultPerson = {
      nombre: null,
      apellidos: null,
      edad: null
    };

    var selectedPerson = assign({}, !this.props.selectedPerson ?
                                      defaultPerson :
                                      this.props.selectedPerson);

    return (
      <form style={{ width: 300, height: 300 }}>
        <legend>
          {
            mode === 'I' ?
            'Ingresa una nueva persona' :
            'Actualiza a ' + selectedPerson.nombre
          }
        </legend>

        <div>
          <input
            ref="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
            defaultValue={selectedPerson.nombre}
          />
          <br/><br/>

          <input
            ref="apellidos"
            name="apellidos"
            type="text"
            placeholder="Apellidos"
            defaultValue={selectedPerson.apellidos}
          />
          <br/><br/>

          <input
            ref="edad"
            name="edad"
            type="text"
            placeholder="Edad"
            defaultValue={selectedPerson.edad}
          />
        </div>

        <div style={{ marginTop: 15 }}>
          <button
            type="button"
            onClick={this.onSave.bind(null, mode, selectedPerson.id)}
          >
            {mode === 'I' ? 'Guardar' : 'Actualizar'}
          </button>
        </div>
      </form>
    );
  }
});

module.exports = PersonForm;
