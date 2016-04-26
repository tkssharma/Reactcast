import React from 'react';

class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
        {this.state.isChecked ? this.props.onLabel : this.props.offLabel}
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {
  onLabel: React.PropTypes.string.isRequired,
  offLabel: React.PropTypes.string.isRequired,
};

module.exports = CheckboxWithLabel;
