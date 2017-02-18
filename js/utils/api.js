var AppActions = require('../actions/AppActions');

module.exports = {

  // Load mock chart data from localStorage into AppStore via Action
  getChartData: function() {
    var data = JSON.parse(localStorage.getItem('chartData'));
    AppActions.loadData(data);
  }

};