var React = require('react');

// Flux cart view
var Table = React.createClass({

  // Render cart view
  render: function () {
    var self = this;
    return (
        <div className="col-lg-6">
          <h2>Table</h2>
          <table className="table"> 
              <thead> 
                <tr> 
                    <th>S.no</th> 
                    <th>Data Value</th> 
                    <th>Label</th> 
                </tr>
                </thead> 
                <tbody> 
                    <tr> 
                        <th scope="row">1</th> 
                        <td>1000</td>
                        <td>Label 1</td> 
                    </tr> 
                </tbody> 
            </table>
        </div>
    );
  }

});

module.exports = Table;    