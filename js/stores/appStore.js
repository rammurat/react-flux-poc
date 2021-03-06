var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var _chartData = [];

// Method to load product data from mock API
function loadProductData(data) {
  _chartData = data[0];
}

// Extend AppStore with EventEmitter to add eventing capabilities
var AppStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getChartData: function() {
    return _chartData;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('click');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('click', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('click', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case AppConstants.LOAD_DATA:
      loadProductData(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  AppStore.emitChange();

  return true;

});

module.exports = AppStore;