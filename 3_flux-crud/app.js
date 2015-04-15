'use strict';

var React = require('react'),
    PersonStore = require('./stores/PersonStore'),
    PersonForm = require('./components/PersonForm'),
    PersonList = require('./components/PersonList');

function getStateFromStore() {
  return {
    persons: PersonStore.getPersons(),
    selectedPerson: PersonStore.getSelectedPerson()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    PersonStore.addChangeListener(this.onStoreChange);
  },

  componentWillUnmount: function() {
    PersonStore.removeChangeListener(this.onStoreChange);
  },

  onStoreChange: function() {
    this.setState(getStateFromStore());
  },

  render: function() {
    return (
      <main>
        <h1>Flux - CRUD</h1>

        <PersonForm key={+new Date()} selectedPerson={this.state.selectedPerson} />
        <PersonList persons={this.state.persons} />
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
