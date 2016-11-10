
var React = require('react')
var ReactDOM = require('react-dom')
var Nav = require( '../Components/Nav')
var Search = require( '../Components/Search')


var Main = React.createClass({

	render: function () {
		// console.log('thisMain',this)
		return (
			<div>
			<Nav/>
			{this.props.children}
			</div>
		)

	}

})

module.exports = Main;