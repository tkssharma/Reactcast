import React from 'react';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputText: this.props.inputText};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputText: event.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          ref="inputText"
          onChange={this.handleChange}
        />
        {this.state.inputText}
      </div>
    );
  }
}

InputText.propTypes = {
  inputText: React.PropTypes.string.isRequired,
};

module.exports = InputText;
