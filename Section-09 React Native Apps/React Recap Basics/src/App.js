import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
	id: '1',
	name: 'Name 1',
	phone: '(555)555-5555'
}, {
	id: '2',
	name: 'Name 2',
	phone: '(555)222-5555'
}, {
	id: '3',
	name: 'Name 3',
	phone: '(555)333-5555'
}, {
	id: '4',
	name: 'Name 4',
	phone: '(555)444-5555'
}]

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

React.render(<App contacts={contacts}/>, document.getElementById('app'));