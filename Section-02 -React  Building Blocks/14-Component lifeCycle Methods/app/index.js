var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
	incrementCount: function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	 getDefaultProps: function(){
				return {
						count: 0
					}
		},
	getInitialState: function(){
		 return {
			 count: 0
		 }
	},
	 componentWillMount : function() {
			console.log('Component WILL MOUNT!')
	 },
	 componentDidMount: function(){
			console.log('Component DID MOUNT!')
	 },
			componentWillUnmount: function(){
			console.log('Component WILL UNMOUNT!')
	 },
	render: function(){
		return (
			<div styleName=".counter">
				<h1>{this.state.count}</h1>
				<button type="button" onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
});

ReactDOM.render(<Counter/>, document.getElementById('app'));
