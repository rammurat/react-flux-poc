var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Define actions object
var AppActions = {

  // Receive inital product data
  receiveData: function(data) {
    AppDispatcher.handleAction({
      actionType: AppConstants.RECEIVE_DATA,
      data: data
    })
  },
  loadData: function(data) {
    AppDispatcher.handleAction({
      actionType: AppConstants.LOAD_DATA,
      data: data
    })
  }
};

module.exports = AppActions;