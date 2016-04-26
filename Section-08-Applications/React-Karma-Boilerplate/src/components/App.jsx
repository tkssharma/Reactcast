/**
 * Import and inject styles via webpack
 */
require('../styles/app.css');

/**
 * Dependencies
 */
const React = require('react');

/**
 * Import components
 */
const CheckboxWithLabel = require('./CheckboxWithLabel.jsx');

/**
 * An app root component
 */
const App = React.createClass({
  render() {
    return (
      <div>
        <CheckboxWithLabel
          labelOn="On"
          labelOff="Off"
        />
        <CheckboxWithLabel
          labelOn="På"
          labelOff="Av"
        />
      </div>
    );
  }
});

module.exports = App;
