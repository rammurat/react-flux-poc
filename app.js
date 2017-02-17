window.React = require('react');
var Data = require('./Data');
var CartAPI = require('./utils/Api')
var FrontPage = require('./components/FrontPage');
var Header = require('./components/Header');
var Chart = require('./components/PieChart');
var Footer = require('./components/Footer');

// Load Mock Product Data into localStorage
Data.init();

// Load Mock API Call
CartAPI.getChartData();

// Render FluxCartApp Controller View
React.render(
  <FrontPage />,
  document.getElementById('page-content')
);