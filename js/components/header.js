var React = require('react');

// Header view
class Header extends React.Component{


  // Render view
  render () {
    var self = this;
    return (
        <div className="row borderBottom">
            <div className="masthead col-lg-6">
                <h3 className="text-muted">React JS POC</h3>
            </div>
            <div className="col-lg-6">
                
            </div>
        </div>
    );
  }

};

module.exports = Header;