var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var PieChart = React.createClass({
  drawPieChart : function(cnt){
        var chart = new CanvasJS.Chart("chartContainer",{
            title:{
                text: data.text
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints:data.list
            }]
        });
        chart.render();
  },
  // Render cart view
  render: function () {
    var self = this;
    return (
        <div className="col-lg-6">
          <h2>Pie Chart</h2>
          <div className="chartArea">
          
          </div>
        </div>
    );
  }

});

module.exports = PieChart;    