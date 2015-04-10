'use strict';

var React = require('react');

var User = React.createClass({
	getDefaultProps: function() {
		return {
			user: ''
		};
	},

	render: function() {
		return (
			<li>{this.props.user}</li>
		);
	}
});

module.exports = User;