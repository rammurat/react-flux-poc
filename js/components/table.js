var React = require('react');

// Table view
class Table extends React.Component{

  // Render table view
  render() {
    var self = this;
    return (
        <div className="col-lg-6 table-cnt">
          <h2>{this.props.chartData.title}</h2>
          <table className="table"> 
              <thead> 
                <tr> 
                    <th>S.no</th> 
                    <th>Data Value</th> 
                    <th>Label</th> 
                </tr>
                </thead> 
                <tbody>
                    {this.props.chartData.list.map(function (row,index) {
                    return (
                        <tr key={++index}> 
                            <th scope="row">{index}</th> 
                            <td>{row.y}</td>
                            <td>{row.indexLabel}</td> 
                        </tr> 
                    )
                    })}
                </tbody> 
            </table>
        </div>
    );
  }

};


Table.defaultProps = {
  chartData: {
      list : [],
      title : ''
  }
};

module.exports = Table;