'use strict';

var React = require('react'),
		User = require('./User');

var UserList = React.createClass({
	render: function() {
		var users = this.props.users.map(function(user, index) {
			return (
		 		<User key={index} user={user} />
			);
		});

		return (
			<div>
				<h3>Lista de Usuarios</h3>

				<ul>
					{users}
				</ul>
			</div>
		);
	}
});

module.exports = UserList;