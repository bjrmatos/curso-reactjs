'use strict';

var assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter,
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    PersonConstants = require('../constants/PersonConstants');

var CHANGE_EVENT = 'change';

var _persons = [];

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
  }
});

AppDispatcher.register(function(action) {
  switch (action.type) {
    case PersonConstants.INSERT_PERSON:
      _persons.push(action.person);
      PersonStore.emitChange();
      break;
  }
});

module.exports = PersonStore;
