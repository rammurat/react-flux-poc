var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var PieChart = React.createClass({

  drawPieChart : function(){
      
        var chart = new CanvasJS.Chart("chartContainer",{
            title:{
                text: this.props.chartData.title
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints:this.props.chartData.list
            }]
        });
        chart.render();
  },
  // Render cart view
  render: function () {
    var self = this;
    return (
        <div className="col-lg-6">
          <h2>Pie Chart <button type="button" className="load-data pull-right" onClick={this.drawPieChart}> Load Pie Chart </button> </h2>
          <div id="chartContainer" className="chartArea">
          
          </div>
        </div>
    );
  }

});

module.exports = PieChart;    