var React = require('react');

// Footer view
var Footer = React.createClass({

  // Render footer view
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