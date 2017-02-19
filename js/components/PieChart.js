var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
class PieChart extends React.Component{
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

  //Render chart on button click 
  handleClick (){
      
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
  }

  // Render chart view
  render () {
    var self = this;
    return (
        <div className="col-lg-6 piechart-cnt">
          <h2>Pie Chart <button type="button" className="load-data pull-right" onClick={this.handleClick}> Load Pie Chart </button> </h2>
          <div id="chartContainer" className="chart-area">
          
          </div>
        </div>
    );
  }

};

module.exports = PieChart;    