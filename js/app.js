var React = require('react');
var Render = require('react-dom').render;
var Data = require('./Data');
var DataAPI = require('./utils/Api')
var HomePage = require('./components/Home.js');


// Load Mock Product Data into localStorage
Data.init();

// Load Mock API Call
DataAPI.getChartData();

// Render FluxCartApp Controller View
React.render(
  <HomePage />,
  document.getElementById('page-content')
);