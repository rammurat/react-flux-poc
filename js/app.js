var React = require('react');
var Render = require('react-dom').render;
var Data = require('./Data');
var DataAPI = require('./utils/Api')
var HomePage = require('./components/Home.js');


// Load Mock Chart Data into localStorage
Data.init();

// Load Mock API Call
DataAPI.getChartData();

// Render Home Controller View
Render(
  <HomePage />,
  document.getElementById('page-content')
);