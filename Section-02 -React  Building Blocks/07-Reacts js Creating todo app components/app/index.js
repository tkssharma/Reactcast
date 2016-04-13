var React = require('react')
var ReactDOM = require('react-dom')
var TodoList = React.createClass({
			render: function(){
				var Item = this.props.items.map(function(item){
					return <li>{item}</li>;
				});
				return(<ul>{Item}</ul>);
			}
		});

		var TodoApp = React.createClass({
			getInitialState: function(){
				return ({ items: ["This is Todo 1","This is Todo 2","This is Todo 3"],todotext : ''});
			},
			handleSubmit: function(e){
				e.preventDefault();
				this.state.items.push(this.state.todotext);
				this.setState({items : this.state.items,todotext : ''});

			},
			onChange: function(e){
				this.setState({todotext: e.target.value});
			},
			render: function(){
				return (
					<div>
						<TodoList items={this.state.items}/>
						<div>
							<form name="addTodo" onSubmit={this.handleSubmit}>
								<input type="text" onChange={this.onChange} placeholder="Enter Todo here !" value={this.state.todotext}/>
								<button> Add </button>
							</form>
						</div>
					</div>
				);
			}
		});
		ReactDOM.render(<TodoApp/>,document.getElementById('app'));
