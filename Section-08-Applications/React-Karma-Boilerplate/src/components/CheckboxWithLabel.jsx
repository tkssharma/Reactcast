/**
 * Dependencies
 */
const React = require('react');

/**
 * Import sub-components
 */
/**
 * A component with state/interaction
 */
const CheckboxWithLabel = React.createClass({
  getInitialState() {
    return {
      isChecked: false
    };
  },

  onChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  },

  render() {
    return (
      <label className="CheckboxWithLabel">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
