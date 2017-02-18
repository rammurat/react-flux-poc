var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var Header = React.createClass({

  // Show cart via Actions
  loadData: function () {
    AppActions.loadData(true);
  },


  // Render cart view
  render: function () {
    var self = this, products = this.props.products;
    return (
        <div className="row borderBottom">
            <div className="masthead col-lg-6">
                <h3 className="text-muted">React JS POC</h3>
            </div>
            <div className="col-lg-6">
                <button type="button" className="load-data" onClick={this.loadData}> Load Data </button>
            </div>
        </div>
    );
  }

});

module.exports = Header;    