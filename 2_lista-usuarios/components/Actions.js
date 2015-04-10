'use strict';

var React = require('react');

var Actions = React.createClass({
	onButtonClick: function() {
		var input = this.refs.inputUser.getDOMNode(),
				userText = input.value;

		input.value = '';
		input.focus();

		this.props.onUserAdd(userText);
	},

	render() {
		return (
			<div>
				<input ref="inputUser" type="text" />
				<button onClick={this.onButtonClick}>Agregar</button>
			</div>
		);
	}
});

module.exports = Actions;