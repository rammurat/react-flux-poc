var React = require('react');

// Footer view
class Footer extends React.Component{

  // Render footer view
  render () {
    var self = this;
    return (
        <footer className="footer">
            <p className="copyright">&copy; 2016 Company, Inc.</p>
        </footer>
    );
  }

};

module.exports = Footer;    