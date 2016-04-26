/**
 * Dependencies
 */
const React = require('react'); // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom');

/**
 * Import app root component
 */
const App = require('./components/App.jsx');

/**
 * Render root component into DOM
 */
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
