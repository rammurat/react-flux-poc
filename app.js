window.React = require('react');
var Data = require('Data');
var DataAPI = require('utils/Api')
var HomeApp = require('components/Home');

// Load Mock Product Data into localStorage
Data.init();

// Load Mock API Call
DataAPI.getChartData();

// Render FluxCartApp Controller View
React.render(
  <HomeApp />,
  document.getElementById('page-content')
);