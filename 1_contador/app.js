'use strict';

var React = require('react');

var App = React.createClass({
	getInitialState: function() {
		return {
			secondsElapsed: 0,
			minutesElapsed: 0
		};
	componentDidMount: function() {
		this.interval = setInterval(this.onTick, 100);
	},

	onTick: function() {
		var seconds = this.state.secondsElapsed,
				minutes = this.state.minutesElapsed;

		minutes += Math.trunc(seconds / 60);

		seconds = (seconds === 60) ? 0 : seconds;

		seconds = seconds + 1;

		this.setState({ 
			secondsElapsed: seconds,
			minutesElapsed: minutes
		});
	},

	onButtonClick: function() {
		var newSeconds = parseInt(this.refs.inputTiempo.getDOMNode().value, 10);

		this.setState({
			secondsElapsed: newSeconds % 60,
			minutesElapsed: Math.trunc(newSeconds / 60)
		});
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	render: function() {
		return (
			<div>
				<div>
					Han pasado: 
					{this.state.minutesElapsed} minuto(s) {' '}
					{this.state.secondsElapsed} segundo(s)
				</div>

				<div>
					<input ref="inputTiempo" type="text" />
					<button onClick={this.onButtonClick}>Cambiar</button>
				</div>
			</div>
		);
	}		
});

React.render(<App />, document.getElementById('app'));
