'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    PersonConstants = require('../constants/PersonConstants');

var PersonActions = {
  insert: function(personData) {
    AppDispatcher.dispatch({
      type: PersonConstants.INSERT_PERSON,
      person: personData
    });
  }
};

module.exports = PersonActions;
