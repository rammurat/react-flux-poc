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
        <div className="masthead">
            <h3 className="text-muted">React JS POC</h3>
            <button type="button" className="load-data pull-right" onClick={this.loadData}> Load Data </button>
        </div>
    );
  }

});

module.exports = Header;    