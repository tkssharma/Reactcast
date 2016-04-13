var React = require('react')
var ReactDOM = require('react-dom')
	var Note = React.createClass({
	getInitialState: function() {
		return {editing: false , text : ''}
	},
	edit: function() {
		this.setState({editing: true});
	},
	getText : function(event){
                    console.log(event.target.value);
                    this.setState({text: event.target.value});
	},
	save: function() {
		this.setState({editing: false});
		var val = this.refs.newText.getDOMNode().value;
		this.setState({text: val});
	},
	remove: function() {
		alert('removing note');
		this.setState({editing: false});
		this.setState({text: ''});
	},
	renderDisplay: function() {
		return (
			<div className="note">
				<p>{this.state.text} </p>
				<span>
					<button onClick={this.edit} name="Edit" value="Edit"
							className="btn btn-primary glyphicon glyphicon-pencil"/>
					<button onClick={this.remove} name="Delete" value="delete"
							className="btn btn-danger glyphicon glyphicon-trash"/>
				</span>
			</div>
			);
	},
	renderForm: function() {
		return (
			<div className="note">
			<textarea ref="xyz" onChange={this.getText}  defaultValue={this.props.children}
			className="form-control"></textarea>
			<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
			</div>
			)
	},
	render: function() {
		if (this.state.editing) {
			return this.renderForm();   //html form
		}
		else {
			return this.renderDisplay(); //rendering buttons
		}
	}
});

ReactDOM.render(<Note>Hello World from TextArea</Note>,
	document.getElementById('app'));
