function renderChart(data){
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
}