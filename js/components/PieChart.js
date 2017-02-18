var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var PieChart = React.createClass({

  // Render cart view
  render: function () {
    var self = this;
    return (
        <div className="col-lg-6">
          <h2>Pie Chart</h2>
          <div></div>
        </div>
    );
  }

});

module.exports = PieChart;    