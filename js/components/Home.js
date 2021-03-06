var React = require('react');
var Render = require('react-dom').render;
var AppStore = require('../stores/AppStore');

var Header = require('./Header.js');
var PieChart = require('./PieChart.js');
var Table = require('./Table.js');
var Footer = require('./Footer.js');

// Method to retrieve state from Stores
function getChartData() {
  return {
    chartData: AppStore.getChartData()
  };
}

// Define main Controller View
var HomeApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getChartData();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="my-app">
        <Header  />
        <div className="row chart-area">
            <PieChart chartData={this.state.chartData}  />
            <Table chartData={this.state.chartData}  />
        </div>
        <Footer  />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getChartData());
  }

});

module.exports = HomeApp;