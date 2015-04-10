'use strict';

var React = require('react'),
		Actions = require('./components/Actions'),
		UserList = require('./components/UserList');

var App = React.createClass({
	getInitialState: function() {
		return {
			users: []
		};
	},

	onUserAdd: function(userName) {
		var users = this.state.users;

		users.push(userName);

		this.setState({
			users: users
		});
	},

	render: function() {
		return (
			<main>
				<h1>App de Usuarios</h1>

				<Actions onUserAdd={this.onUserAdd} />

				<UserList users={this.state.users} />
			</main>
		);
	}
});

React.render(<App />, document.getElementById('app'));