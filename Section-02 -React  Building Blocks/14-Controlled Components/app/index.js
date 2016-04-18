var React = require('react');
var ReactDOM = require('react-dom');

var app = React.createClass({
  getInitialState() {
    inputValue: ''
  },

  render() {
    return (
      <input
        type='text'
        value={this.state.inputValue}
        onChange={this.onChange} />
    );
  },

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }
});

/*var app = React.createClass({
  render (
    <input type='text' value="You can't change me!" />
  );
});*/
ReactDOM.render(<app/>, document.getElementById('app'));
