var React = require('react');
var AppActions = require('../actions/AppActions');

// Flux cart view
var Footer = React.createClass({

  // Render cart view
  render: function () {
    var self = this;
    return (
        <footer className="footer">
            <p>&copy; 2016 Company, Inc.</p>
        </footer>
    );
  }

});

module.exports = Footer;    