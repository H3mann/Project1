
var React = require('react')
var ReactDOM = require('react-dom')
var Search = require( '../Components/Search')


var Main = React.createClass({

	render: function () {
		return (
			<div>
			{this.props.children}
			</div>
		)
	}
})

module.exports = Main;