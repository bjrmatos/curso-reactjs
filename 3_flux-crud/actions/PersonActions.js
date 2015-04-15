'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    PersonConstants = require('../constants/PersonConstants');

var PersonActions = {
  insert: function(personData) {
    AppDispatcher.dispatch({
      type: PersonConstants.INSERT_PERSON,
      person: personData
    });
  },

  remove: function(pid) {
    AppDispatcher.dispatch({
      type: PersonConstants.REMOVE_PERSON,
      pid: pid
    });
  },

  editPerson: function(pid) {
    AppDispatcher.dispatch({
      type: PersonConstants.EDIT_PERSON,
      pid: pid
    });
  },

  update: function(pid, personData) {
    AppDispatcher.dispatch({
      type: PersonConstants.UPDATE_PERSON,
      pid: pid,
      person: personData
    });
  }
};

module.exports = PersonActions;
