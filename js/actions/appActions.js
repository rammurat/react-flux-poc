var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Define actions object
var AppActions = {
  loadData: function(data) {
    AppDispatcher.handleAction({
      actionType: AppConstants.LOAD_DATA,
      data: data
    })
  }
};

module.exports = AppActions;