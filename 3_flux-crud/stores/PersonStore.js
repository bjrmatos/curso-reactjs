'use strict';

var _ = require('lodash'),
    assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter,
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    PersonConstants = require('../constants/PersonConstants');

var CHANGE_EVENT = 'change';

var _persons = [];

var _selectedPerson = null;

var PersonStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  // GETTERS
  getPersons: function() {
    return _persons;
  },

  getSelectedPerson: function() {
    return _selectedPerson;
  }
});

AppDispatcher.register(function(action) {
  var currentPersonIndex;

  switch (action.type) {
    case PersonConstants.INSERT_PERSON:
      action.person.id = Date.now();
      _persons.push(action.person);
      _selectedPerson = null;
      PersonStore.emitChange();
      break;

    case PersonConstants.REMOVE_PERSON:
      currentPersonIndex = _.findIndex(_persons, function(person) {
        return person.id === action.pid;
      });

      _persons.splice(currentPersonIndex, 1);
      _selectedPerson = null;
      PersonStore.emitChange();
      break;

    case PersonConstants.UPDATE_PERSON:
      currentPersonIndex = _.findIndex(_persons, function(person) {
        return person.id === action.pid;
      });

      _persons[currentPersonIndex] = action.person;
      _selectedPerson = null;
      PersonStore.emitChange();
      break;

    case PersonConstants.EDIT_PERSON:
      currentPersonIndex = _.findIndex(_persons, function(person) {
        return person.id === action.pid;
      });

      _selectedPerson = _persons[currentPersonIndex];
      PersonStore.emitChange();
      break;
  }
});

module.exports = PersonStore;
