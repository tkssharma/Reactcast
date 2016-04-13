var React = require('react')
var ReactDOM = require('react-dom')

	 var Note = React.createClass({
		edit: function() {
				alert('editing note'+ this.props.alert);
		},
		remove: function() {
				alert('removing note'+ this.props.alert);
		},
		render: function() {
				return (
	<div className="container">
			 <div class="jumbotron">
				<div class="container">
					<h1>{this.props.children}</h1>
						 <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
						<button onClick={this.edit}
					 className="btn btn-primary glyphicon glyphicon-pencil"/>
					 <button onClick={this.remove}
					 className="btn btn-danger glyphicon glyphicon-trash"/>
			</div>
		</div>
</div>
						);
		}
});

ReactDOM.render(<Note alert="i am alert box">Hello World</Note>,
		document.getElementById('app'));
