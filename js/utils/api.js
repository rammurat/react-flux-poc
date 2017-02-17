var AppActions = require('../actions/AppActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getChartData: function() {
    var data = JSON.parse(localStorage.getItem('chartData'));
    AppActions.receiveData(data);
  }

};