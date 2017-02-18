var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var PieChart = React.createClass({
  //Render chart on button click 
  drawPieChart : function(){
      
        var chart = new CanvasJS.Chart("chartContainer",{
            title:{
                text: this.props.chartData.title //set title
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [{
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints:this.props.chartData.list //set list data
            }]
        });
        chart.render();
  },
  // Render chart view
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