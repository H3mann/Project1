
var React = require('react')
var ReactDOM = require('react-dom')
var Search = require( '../Components/Search')


var Reddit = React.createClass({

	getInitialState() {

		return {searchBar:''}

	},

	onUpdateSearch (event) {

			this.setState({searchBar:event.target.value})

		},

	handleSubmitLocation(event) {

			event.preventDefault()
			
			},

	render () {

		return (
			<Search 
			onUpdateSearch={this.onUpdateSearch}
			handleSubmitLocation={this.handleSubmitLocation}
			location={this.state.searchBar}
			/>
		)

	}


})

module.exports = Reddit;
		// getRedditInfo={this.getRedditInfo}